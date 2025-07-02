import React from 'react';
import {useTranslation} from "react-i18next";
import ApplianceRepairSection from "../../components/ApplianceRepairSection/ApplianceRepairSection.jsx";
import WhyChooseUs from "../../components/WhyChooseUs/WhyChooseUs.jsx";
import FeaturedProjects from "../../components/FeaturedProjects/FeaturedProjects.jsx";
import MetaTags from "../../common/MetaTags.jsx";

export const About = () => {
    const {t} = useTranslation();

    return (
        <>
            {/* SEO метатеги */}
            <MetaTags
                page="about"
                // canonicalUrl="https://yourdomain.com/about"
            />

            <div className='mt-20'>
                <header
                    className="relative h-[600px] bg-[url('/about.jpg')] bg-top bg-cover bg-no-repeat text-white text-center">
                    <div className="absolute inset-0 bg-gray-900/60 z-0"/>
                    <div className="relative z-10 h-full max-w-4xl mx-auto flex flex-col items-center justify-center">
                        <h1 className="text-4xl mb-10">{t("navbar.about")}</h1>
                        <p className='text-white'>{t("navbar.aboutDesc")}</p>
                    </div>
                </header>

                <WhyChooseUs/>
                <ApplianceRepairSection/>

                <main className='mt-20'>
                    <FeaturedProjects/>
                </main>
            </div>
        </>
    );
};
