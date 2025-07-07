import React from 'react';
import { useTranslation } from 'react-i18next';
import BookingForm from '../BookingForm/BookingForm.jsx';
import { FaCheck } from "react-icons/fa";

export const Conclusion = () => {
    const { t } = useTranslation();

    return (
        <section
            aria-label={t("conclusion_section")}
            className="relative md:h-screen bg-fixed bg-center bg-cover flex flex-col items-center justify-center text-white text-center px-4"
            style={{ backgroundImage: "url('/conclusionBG.png')" }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-gray-900/70 z-0" />

            {/* Main content container */}
            <div
                className="container relative z-10 w-full px-4 py-12 md:py-16 flex justify-end"
            >
                {/* Left Side */}
                <div className="md:w-1/2 space-y-6 text-left">
                    <h1 className="text-3xl sm:text-4xl font-bold leading-tight">
                        <span className="text-[#ffc752]">{t("oneCall")}</span><br />
                        {t("weAre")}
                    </h1>

                    <ul className="space-y-2 text-base sm:text-lg">
                        {[t("ben1"), t("ben2"), t("ben3")].map((benefit, idx) => (
                            <li key={idx} className="flex items-center gap-2">
                                <FaCheck className="text-[#ffc752]" />
                                {benefit}
                            </li>
                        ))}
                    </ul>

                    {/* Contact Box */}
                    <a href="tel:+375333600854" aria-label={t("call_expert")}>
                        <div
                            className="flex items-center bg-[#ffc752] text-black overflow-hidden shadow-lg w-full sm:w-[420px] hover:opacity-90 transition rounded-md cursor-pointer"
                        >
                            <img
                                src="/Member.jpg"
                                alt={t("expert_photo_alt")}
                                loading="lazy"
                                className="w-16 h-16 sm:w-20 sm:h-20 p-1 object-cover"
                            />
                            <div className="px-3 py-2">
                                <p className="text-lg sm:text-xl font-bold mb-1">+375 33 36 00 854</p>
                                <p className="text-sm">{t("consult")}</p>
                            </div>
                        </div>
                    </a>
                </div>
                {/*<BookingForm bg="#3536a5" />*/}
            </div>
        </section>
    );
};
