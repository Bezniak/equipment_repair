import React from 'react'
import ApplianceRepairSection from "../ApplianceRepairSection/ApplianceRepairSection.jsx";
import WhyChooseUs from "../WhyChooseUs/WhyChooseUs.jsx";
import FeaturedProjects from "../FeaturedProjects/FeaturedProjects.jsx";
import {useTranslation} from "react-i18next";

export const About = () => {
    const {t} = useTranslation();

    return (
        <div className='mt-20'>

            <header className="relative h-[600px] bg-[url('/about.jpg')] bg-top bg-cover bg-no-repeat text-white text-center">
                {/* затемнение поверх картинки */}
                <div className="absolute inset-0 bg-gray-900/60 z-0" />

                {/* контент поверх затемнения */}
                <div className="relative z-10 h-full max-w-4xl mx-auto flex flex-col items-center justify-center">
                    <h1
                        className="text-4xl mb-10"
                    >
                        {t("navbar.about")}
                    </h1>
                    <p className='text-white'>
                        {t("navbar.aboutDesc")}
                    </p>
                </div>
            </header>
            <WhyChooseUs/>
            <ApplianceRepairSection/>
            <FeaturedProjects/>
        </div>
    )
}
