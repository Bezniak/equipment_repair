import React from 'react'
import {useTranslation} from "react-i18next";

export const Contacts = () => {
    const {t} = useTranslation();

    return (
        <div>
            <header className="relative h-[600px] bg-[url('/contact.jpg')] bg-top bg-cover bg-no-repeat text-white text-center">
                {/* затемнение поверх картинки */}
                <div className="absolute inset-0 bg-gray-900/60 z-0" />

                {/* контент поверх затемнения */}
                <div className="relative z-10 h-full max-w-4xl mx-auto flex flex-col items-center justify-center">
                    <h1
                        className="text-4xl mb-10"
                    >
                        {t("navbar.contact")}
                    </h1>
                    <p className='text-white'>
                        {t("navbar.contDesc")}
                    </p>
                </div>
            </header>

        </div>
    )
}
