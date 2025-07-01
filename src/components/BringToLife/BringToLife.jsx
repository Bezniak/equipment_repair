import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaShieldAlt, FaUsers, FaCogs, FaCalendarAlt, FaPhoneAlt } from 'react-icons/fa';

export const BringToLife = () => {
    const { t } = useTranslation();
    const year = new Date().getFullYear();

    return (
        <section className="py-16 px-4 md:px-12">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/* Left content */}
                <div>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        {t("bringToLife.title")}
                    </h1>
                    <p className="text-gray-700 mb-8 leading-relaxed">
                        {t("bringToLife.desc")}
                    </p>
                    <img
                        src="/bringToLife.jpg"
                        alt="ремонт бытовой техники"
                    />
                </div>

                {/* Right content (features) */}
                <div className="rounded-xl p-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                        <div className="flex items-start space-x-4">
                            <div className="text-indigo-700 text-2xl"><FaShieldAlt /></div>
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900">
                                    {t("bringToLife.warrantyTitle")}
                                </h3>
                                <p className="text-sm text-gray-600">
                                    {t("bringToLife.warrantyDesc")}
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <div className="text-indigo-700 text-2xl"><FaUsers /></div>
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900">
                                    {t("bringToLife.availabilityTitle")}
                                </h3>
                                <p className="text-sm text-gray-600">
                                    {t("bringToLife.availabilityDesc")}
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <div className="text-indigo-700 text-2xl"><FaCogs /></div>
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900">
                                    {t("bringToLife.qualityTitle")}
                                </h3>
                                <p className="text-sm text-gray-600">
                                    {t("bringToLife.qualityDesc")}
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <div className="text-indigo-700 text-2xl"><FaCalendarAlt /></div>
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900">
                                    {t("bringToLife.bookingTitle")}
                                </h3>
                                <p className="text-sm text-gray-600">
                                    {t("bringToLife.bookingDesc")}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* CTA Section */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-12 space-y-4 sm:space-y-0">
                        <button className="bg-[#ff5823] text-white cursor-pointer font-semibold px-6 py-3 shadow hover:bg-[#e64a17] transition">
                            {t("bringToLife.bookBtn")}
                        </button>
                        <a
                            href={`tel:${t("bringToLife.phone").replace(/\s+/g, '')}`} // Удаляем пробелы
                            className="flex items-center text-gray-900 font-semibold text-lg space-x-2 hover:text-[#ff5823] transition"
                        >
                            <FaPhoneAlt className="text-[#ff5823]" />
                            <span>{t("bringToLife.phone")}</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};
