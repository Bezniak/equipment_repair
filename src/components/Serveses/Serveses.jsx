import React from 'react'
import {OurService} from "../OurService/OurService.jsx";
import {useTranslation} from "react-i18next";
import {Conclusion} from "../Conclusion/Conclusion.jsx";

export const Serveses = () => {
    const {t} = useTranslation();

    return (
        <div className='mt-20'>
            <header className="relative h-[600px] bg-[url('/service.jpg')] bg-top bg-cover bg-no-repeat text-white text-center">
                {/* затемнение поверх картинки */}
                <div className="absolute inset-0 bg-gray-900/60 z-0" />

                {/* контент поверх затемнения */}
                <div className="relative z-10 h-full max-w-4xl mx-auto flex flex-col items-center justify-center">
                    <h1
                        className="text-4xl mb-10"
                    >
                        {t("navbar.services")}
                    </h1>
                    <p className='text-white'>
                        {t("navbar.serviceDesc")}
                    </p>
                </div>
            </header>
            <OurService/>
            <Conclusion/>
        </div>
    )
}
