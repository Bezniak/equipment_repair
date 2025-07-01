import React from "react";
import {useTranslation} from "react-i18next";
import {
    FaUserCheck,
    FaUsers,
    FaRegFileAlt,
    FaClock,
} from "react-icons/fa";

export default function ApplianceRepairSection() {
    const {t} = useTranslation();

    const features = [
        {
            title: t("features.certified"),
            description: t("features.certifiedDesc"),
            icon: <FaUserCheck className="text-indigo-600 w-6 h-6"/>,
        },
        {
            title: t("features.local"),
            description: t("features.localDesc"),
            icon: <FaUsers className="text-indigo-600 w-6 h-6"/>,
        },
        {
            title: t("features.pricing"),
            description: t("features.pricingDesc"),
            icon: <FaRegFileAlt className="text-indigo-600 w-6 h-6"/>,
        },
        {
            title: t("features.prompt"),
            description: t("features.promptDesc"),
            icon: <FaClock className="text-indigo-600 w-6 h-6"/>,
        },
    ];

    return (
        <section className="relative overflow-hidden">
            {/* Параллакс-блок */}
            <div
                className="relative h-[500px] md:h-[600px] bg-fixed bg-center bg-cover flex flex-col items-center justify-center text-white text-center px-4"
                style={{backgroundImage: "url('/bringToLife.jpg')"}}
            >
                <div className="absolute inset-0 bg-gray-900/60 z-0"/>

                {/* Значок "Satisfaction" */}
                <img
                    src="/satisfaction.png"
                    alt="Satisfaction Badge"
                    className="z-10 relative w-28 md:w-32 mb-4 -mt-20"
                />

                <div className="relative z-10 max-w-4xl mb-10">
                    <h2 className="text-2xl md:text-4xl font-bold mb-4">
                        {t("hero.title")}
                    </h2>
                    <p className="text-base md:text-lg text-gray-200">
                        {t("hero.subtitle")}
                    </p>
                </div>
            </div>

            <div className="-mt-32 md:-mt-40 px-6 md:px-20 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-4">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className={`${
                                index % 2 === 0 ? "bg-[#e2e0f4]" : "bg-white"
                            } p-6 text-center space-y-4 min-h-[280px] md:min-h-[320px] flex flex-col justify-center`}
                        >
                            <div className="w-12 h-12 mx-auto flex items-center justify-center">
                                {feature.icon}
                            </div>
                            <h3 className="text-lg font-semibold text-gray-800">{feature.title}</h3>
                            <p className="text-sm text-gray-600">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
