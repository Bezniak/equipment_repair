import React from 'react';
import {useTranslation} from "react-i18next";
import {Conclusion} from "../Conclusion/Conclusion.jsx";

export const BookPage = () => {
    const {t} = useTranslation();

    return (
        <>
            <header
                role="banner"
                aria-label={t("navbar.bookTitle")}
                className="relative h-[700px] bg-[url('/book.jpg')] bg-top bg-cover bg-no-repeat text-white text-center"
            >
                {/* затемнение поверх картинки */}
                <div className="absolute inset-0 bg-gray-900/60 z-0" aria-hidden="true"/>

                {/* контент поверх затемнения */}
                <div className="relative z-10 h-full max-w-4xl mx-auto flex flex-col items-center justify-center px-4">
                    <h1 className="text-4xl mb-6 font-extrabold leading-tight">
                        {t("navbar.bookTitle")}
                    </h1>
                    <p className="text-white max-w-xl mx-auto text-lg">
                        {t("navbar.bookDesc")}
                    </p>
                </div>
            </header>

            <main role="main" className="container mx-auto px-4 py-12">
                <section aria-labelledby="conclusion-title">
                    <Conclusion/>
                </section>
            </main>
        </>
    );
};
