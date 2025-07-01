import React, {useState} from 'react';
import {Controller, useForm} from 'react-hook-form';
import Select from 'react-select';
import axios from 'axios';
import {useTranslation} from 'react-i18next';
import DatePicker, {registerLocale} from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import {enUS, ru} from 'date-fns/locale';
import {customSelectStyles} from '../../common/utility.js';
import {useAuth} from "../../context/AuthContext.jsx";
import dayjs from 'dayjs';
import {applianceData} from "../../store/data.js";

registerLocale('en', enUS);
registerLocale('ru', ru);

const phonePattern = /^(\+375|80)(29|25|44|33)\d{7}$/;

const BookingForm = () => {
    const {t} = useTranslation();
    const {locale} = useAuth();
    const [isSubmitted, setIsSubmitted] = useState(false);

    const applianceOptions = applianceData.map(({key, value}) => ({
        label: t(`equipment.${key}`),
        value,
    }));

    const {
        register,
        handleSubmit,
        control,
        reset,
        setError,
        clearErrors,
        formState: {errors, isValid, isSubmitting}
    } = useForm({
        mode: 'all',
        defaultValues: {
            name: '',
            phone: '',
            address: '',
            date: null,
            appliances: []
        }
    });

    const onSubmit = async (data) => {
        const selectedServices = data.appliances.map(item => item.value).join(', ');

        const formattedDate = data.date
            ? data.date.toLocaleDateString(locale === 'ru' ? 'ru-RU' : 'en-US')
            : '';

        const now = dayjs().format('DD.MM.YYYY HH:mm:ss');  // Текущие дата и время

        const message = `
🛠 <b>Новый запрос на ремонт — ${now}</b>\n
👤 Имя: ${data.name}
📞 Телефон: ${data.phone}
🏠 Адрес: ${data.address}
📅 Дата: ${formattedDate}
🔧 Виды техники: ${selectedServices}
        `;

        try {
            await axios.post(`https://api.telegram.org/bot${import.meta.env.VITE_TELEGRAM_BOT_TOKEN}/sendMessage`, {
                chat_id: import.meta.env.VITE_TELEGRAM_CHAT_ID,
                text: message,
                parse_mode: 'HTML'
            });

            setIsSubmitted(true);
            reset();
        } catch (error) {
            console.error('Telegram error:', error);
            alert(t('form.messageFailed') || 'Failed to send message');
        }
    };

    if (isSubmitted) {
        return (
            <div className="bg-[#0c0c1f] p-5 rounded shadow-md w-full max-w-md mt-10 md:mt-0 text-white text-center">
                <h2 className="text-2xl font-bold mb-4">{t('form.thankYouTitle') || 'Thank you!'}</h2>
                <p>{t('form.thankYouMessage') || 'Your request has been sent successfully. We will contact you soon.'}</p>
            </div>
        );
    }

    return (
        <div className="bg-[#0c0c1f] p-5 rounded shadow-md w-full max-w-md mt-10 md:mt-0 text-white">
            <h2 className="text-2xl text-center font-bold mb-2">{t('form.title') || 'Request Your Services'}</h2>
            <p className="text-center py-3">{t("form.desc")}</p>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <input
                    className="w-full p-2 rounded bg-white text-black focus:outline-none"
                    type="text"
                    placeholder={t("form.namePlaceholder", "Your Name")}
                    {...register('name', {required: t("form.nameRequired", 'Name is required')})}
                />
                {errors.name && <p className="text-red-400 text-sm">{errors.name.message}</p>}

                <input
                    className="w-full p-2 rounded bg-white text-black focus:outline-none"
                    type="tel"
                    placeholder={t("form.phonePlaceholder", "Phone")}
                    {...register('phone', {
                        required: t("form.phoneRequired", 'Phone is required'),
                        pattern: {
                            value: phonePattern,
                            message: t("form.phoneInvalid", 'Enter a valid Belarusian phone number')
                        }
                    })}
                />
                {errors.phone && <p className="text-red-400 text-sm">{errors.phone.message}</p>}

                <input
                    className="w-full p-2 rounded bg-white text-black focus:outline-none"
                    type="text"
                    placeholder={t("form.addressPlaceholder", "Address")}
                    {...register('address', {required: t("form.addressRequired", 'Address is required')})}
                />
                {errors.address && <p className="text-red-400 text-sm">{errors.address.message}</p>}

                {/* Календарь с локализацией */}
                <Controller
                    control={control}
                    name="date"
                    rules={{required: t("form.dateRequired", 'Date is required')}}
                    render={({field}) => (
                        <DatePicker
                            placeholderText={t("form.selectDate", "Select a date")}
                            selected={field.value}
                            onChange={field.onChange}
                            minDate={new Date()}
                            onBlur={field.onBlur}
                            locale={locale === 'ru' ? 'ru' : 'en'}
                            dateFormat={locale === 'ru' ? 'dd.MM.yyyy' : 'MM/dd/yyyy'}
                            wrapperClassName="w-full"
                            className="w-full p-2 rounded bg-white text-black focus:outline-none"
                            autoComplete="off"
                        />
                    )}
                />
                {errors.date && <p className="text-red-400 text-sm">{errors.date.message}</p>}

                {/* Селект с мультивыбором */}
                <Controller
                    control={control}
                    name="appliances"
                    rules={{
                        validate: (value) => (value && value.length > 0) || t("form.applianceRequired", 'Select at least one service')
                    }}
                    render={({field, fieldState}) => (
                        <Select
                            {...field}
                            options={applianceOptions}
                            isMulti
                            styles={customSelectStyles}
                            value={field.value || []}
                            placeholder={t("form.selectAppliancePlaceholder", "Select appliance types...")}
                            onChange={(selected) => {
                                field.onChange(selected);
                                // При выборе снимаем ошибку
                                if (fieldState.invalid) {
                                    clearErrors('appliances');
                                }
                            }}
                            onBlur={() => {
                                // При потере фокуса проверяем валидацию
                                if (!field.value || field.value.length === 0) {
                                    setError('appliances', {
                                        type: 'manual',
                                        message: t("form.applianceRequired", 'Select at least one service'),
                                    });
                                } else {
                                    clearErrors('appliances');
                                }
                            }}
                        />
                    )}
                />
                {errors.appliances && <p className="text-red-400 text-sm">{errors.appliances.message}</p>}

                <button
                    type="submit"
                    disabled={!isValid || isSubmitting}
                    className={`w-full font-bold py-2 rounded mt-2 ${
                        !isValid || isSubmitting
                            ? 'bg-gray-400 cursor-not-allowed'
                            : 'bg-orange-600 hover:bg-orange-700 text-white'
                    }`}
                >
                    {isSubmitting ? t("form.sending", 'Sending...') : t("form.scheduleBooking", 'Schedule Booking')}
                </button>
            </form>
        </div>
    );
};

export default BookingForm;
