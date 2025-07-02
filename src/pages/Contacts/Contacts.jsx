import React from 'react';
import { useTranslation } from "react-i18next";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from 'react-icons/fa';
import BookingForm from "../../components/BookingForm/BookingForm.jsx";
import MetaTags from "../../common/MetaTags.jsx";

export const Contacts = () => {
    const { t } = useTranslation();

    return (
        <>
            <MetaTags
                page="contacts"
                canonicalUrl="https://yourdomain.com/contacts"
            />

            <header className="relative h-[600px] bg-[url('/contact.jpg')] bg-top bg-cover bg-no-repeat text-white text-center">
                <div className="absolute inset-0 bg-gray-900/60 z-0" />
                <div className="relative z-10 h-full max-w-4xl mx-auto flex flex-col items-center justify-center">
                    <h1 className="text-4xl mb-10">
                        {t("navbar.contact")}
                    </h1>
                    <p className='text-white'>
                        {t("navbar.contDesc")}
                    </p>
                </div>
            </header>

            <section className="bg-[#f5f3ff] py-20 px-4 flex flex-col md:flex-row mx-auto justify-evenly items-center gap-12">
                <div className="space-y-6 w-full max-w-md">

                    {/* Адрес */}
                    <a
                        href="https://www.google.com/maps?q=пр-т.+Космонавтов,+2А,+Гродно"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center bg-white p-6 rounded-xl shadow-md space-x-4 hover:bg-gray-100 transition"
                    >
                        <FaMapMarkerAlt className="text-2xl text-indigo-600 mt-1" />
                        <div>
                            <p className="text-gray-700">
                                {t("address")}
                            </p>
                        </div>
                    </a>

                    {/* Телефон */}
                    <a
                        href="tel:+375333600854"
                        className="flex items-center bg-white p-6 rounded-xl shadow-md space-x-4 hover:bg-gray-100 transition"
                    >
                        <FaPhoneAlt className="text-2xl text-indigo-600 mt-1" />
                        <div>
                            <p className="text-gray-700">+375 33 36 00 854</p>
                        </div>
                    </a>

                    {/* Email */}
                    <a
                        href="mailto:info@example.com?subject=Онлайн обращение"
                        className="flex items-center bg-white p-6 rounded-xl shadow-md space-x-4 hover:bg-gray-100 transition"
                    >
                        <FaEnvelope className="text-2xl text-indigo-600 mt-1" />
                        <div>
                            <p className="text-gray-700">info@example.com</p>
                        </div>
                    </a>

                    {/* Часы работы */}
                    <div className="flex items-center bg-white p-6 rounded-xl shadow-md space-x-4">
                        <FaClock className="text-2xl text-indigo-600 mt-1" />
                        <div>
                            <p className="text-gray-700">
                                {t("workingHours1")} <br />
                                {t("workingHours2")}<br />
                                <span className='text-orange-500'>{t("closed")}</span>
                            </p>
                        </div>
                    </div>

                </div>

                <BookingForm bg='#3536a5' />
            </section>
        </>
    );
}
