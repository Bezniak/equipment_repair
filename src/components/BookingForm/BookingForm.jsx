import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import Select from 'react-select';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { enUS, ru } from 'date-fns/locale';
import { applianceData } from '../../common/utility.js';
import {useAuth} from "../../context/AuthContext.jsx";

// Регистрируем локали для react-datepicker
registerLocale('en', enUS);
registerLocale('ru', ru);

const customSelectStyles = {
    control: (base, state) => ({
        ...base,
        backgroundColor: 'white',
        color: 'black',
        borderRadius: '0.375rem',
        padding: '2px',
        borderColor: state.isFocused ? '#f97316' : '#d1d5db',
        boxShadow: state.isFocused ? '0 0 0 1px #f97316' : 'none',
        '&:hover': { borderColor: '#f97316' }
    }),
    menu: (base) => ({
        ...base,
        zIndex: 10,
        backgroundColor: 'white',
        color: 'black'
    }),
    option: (base, state) => ({
        ...base,
        backgroundColor: state.isSelected ? '#f97316' : state.isFocused ? '#fde68a' : 'white',
        color: state.isSelected ? 'white' : state.isFocused ? '#111827' : 'black',
        cursor: 'pointer',
        '&:active': { backgroundColor: '#fb923c' }
    }),
    multiValue: (base) => ({ ...base, backgroundColor: '#f97316', color: 'white' }),
    multiValueLabel: (base) => ({ ...base, color: 'white' }),
    multiValueRemove: (base) => ({
        ...base,
        color: 'white',
        ':hover': { backgroundColor: '#c2410c', color: 'white' }
    }),
    placeholder: (base) => ({ ...base, color: '#6b7280' }),
    input: (base) => ({ ...base, color: 'black' })
};

const phonePattern = /^(\+375|80)(29|25|44|33)\d{7}$/;

const BookingForm = () => {
    const { t } = useTranslation();
    const { locale } = useAuth();

    // Формируем опции для селекта с переводом
    const applianceOptions = applianceData.map(({ key, value }) => ({
        label: t(`equipment.${key}`),
        value,
    }));

    const {
        register,
        handleSubmit,
        control,
        reset,
        formState: { errors, isValid, isSubmitting }
    } = useForm({
        mode: 'onBlur',
        defaultValues: {
            name: '',
            phone: '',
            address: '',
            date: null,       // Date объект для react-datepicker
            appliances: []
        }
    });

    const onSubmit = async (data) => {
        const selectedServices = data.appliances.map(item => item.value).join(', ');

        const formattedDate = data.date
            ? data.date.toLocaleDateString(locale === 'ru' ? 'ru-RU' : 'en-US')
            : '';

        const message = `
🛠 <b>New Repair Request</b>\n
👤 Name: ${data.name}
📞 Phone: ${data.phone}
🏠 Address: ${data.address}
📅 Date: ${formattedDate}
🔧 Services: ${selectedServices}
        `;

        try {
            await axios.post(`https://api.telegram.org/bot<YOUR_BOT_TOKEN>/sendMessage`, {
                chat_id: '<YOUR_CHAT_ID>',
                text: message,
                parse_mode: 'HTML'
            });

            alert(t('form.messageSent') || 'Message sent to Telegram!');
            reset();
        } catch (error) {
            console.error('Telegram error:', error);
            alert(t('form.messageFailed') || 'Failed to send message');
        }
    };

    return (
        <div className="bg-[#0c0c1f] p-8 rounded shadow-md w-full max-w-md mt-10 md:mt-0 text-white">
            <h2 className="text-2xl text-center font-bold mb-2">{t('form.title') || 'Request Your Services'}</h2>
            <p className="text-center py-3">{t("form.desc")}</p>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <input
                    className="w-full p-2 rounded bg-white text-black focus:outline-none"
                    type="text"
                    placeholder={t("form.namePlaceholder", "Your Name")}
                    {...register('name', { required: t("form.nameRequired", 'Name is required') })}
                />
                {errors.name && <p className="text-red-400 text-sm">{errors.name.message}</p>}

                <input
                    className="w-full p-2 rounded bg-white text-black focus:outline-none"
                    type="tel"
                    placeholder={t("form.phonePlaceholder", "Phone")}
                    {...register('phone', {
                        required: t("form.phoneRequired", 'Phone is required'),
                        pattern: { value: phonePattern, message: t("form.phoneInvalid", 'Enter a valid Belarusian phone number') }
                    })}
                />
                {errors.phone && <p className="text-red-400 text-sm">{errors.phone.message}</p>}

                <input
                    className="w-full p-2 rounded bg-white text-black focus:outline-none"
                    type="text"
                    placeholder={t("form.addressPlaceholder", "Address")}
                    {...register('address', { required: t("form.addressRequired", 'Address is required') })}
                />
                {errors.address && <p className="text-red-400 text-sm">{errors.address.message}</p>}

                {/* Календарь с локализацией */}
                <Controller
                    control={control}
                    name="date"
                    rules={{ required: t("form.dateRequired", 'Date is required') }}
                    render={({ field }) => (
                        <DatePicker
                            placeholderText={t("form.datePlaceholder", "Select a date")}
                            selected={field.value}
                            onChange={field.onChange}
                            minDate={new Date()}
                            locale={locale === 'ru' ? 'ru' : 'en'}
                            dateFormat={locale === 'ru' ? 'dd.MM.yyyy' : 'MM/dd/yyyy'}
                            wrapperClassName="w-full" // ✅ Обёртка на всю ширину
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
                    render={({ field }) => (
                        <Select
                            {...field}
                            options={applianceOptions}
                            isMulti
                            styles={customSelectStyles}
                            placeholder={t("form.selectAppliancePlaceholder", "Select appliance types...")}
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
