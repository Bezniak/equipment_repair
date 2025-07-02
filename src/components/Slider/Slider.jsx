import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from "react-i18next";
import BookingForm from "../BookingForm/BookingForm.jsx";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../../config/routes.js";
import { handleClick } from "../../common/helpers.js";
import { motion, useAnimation } from "framer-motion";

// Кастомный хук для отслеживания попадания в область просмотра
function useOnScreen(ref) {
    const [isIntersecting, setIntersecting] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIntersecting(entry.isIntersecting);
            },
            { threshold: 0.3 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [ref]);

    return isIntersecting;
}

export const Slider = () => {
    const { t } = useTranslation();
    const ref = useRef(null);
    const isVisible = useOnScreen(ref);
    const controls = useAnimation();

    useEffect(() => {
        if (isVisible) {
            controls.start({
                opacity: 1,
                y: 0,
                transition: { duration: 0.8, ease: "easeOut" }
            });
        } else {
            controls.start({ opacity: 0, y: 50 });
        }
    }, [isVisible, controls]);

    return (
        <section
            ref={ref}
            aria-label={t("slider.ariaLabel") || "Главный слайдер"}
            className="relative w-full md:h-screen overflow-hidden bg-cover bg-center"
            style={{ backgroundImage: "url('/background.jpg')" }}
        >
            {/* Фоновая затемняющая подложка */}
            <div className="absolute inset-0 bg-black/60 z-0" aria-hidden="true" />

            <motion.div
                className="container mx-auto py-44 relative z-20 flex flex-col md:flex-row items-center justify-between h-full px-5 md:px-16 text-white"
                initial={{ opacity: 0, y: 50 }}
                animate={controls}
            >
                <article className="max-w-xl" role="region" aria-labelledby="slider-title">
                    {/* Подзаголовок, скрытый на мобильных */}
                    <p
                        className="bg-white hidden text-black md:inline-block px-4 py-3 rounded mb-4 text-sm"
                        aria-hidden="true"
                    >
                        🔧 {t("slider.subTitle")}
                    </p>

                    {/* Заголовок */}
                    <h1
                        id="slider-title"
                        className="text-4xl md:text-5xl font-bold leading-tight"
                    >
                        <span className="text-[#ffc752]">
                            {t("slider.title")}
                        </span>
                        <br />
                        {t("slider.additionTitle")}
                    </h1>

                    {/* Описание */}
                    <p className="mt-4 text-lg">{t("slider.desc")}</p>

                    {/* Кнопки с понятными названиями и aria-label */}
                    <nav aria-label={t("slider.actionsAriaLabel") || "Действия с бронированием"} className="mt-6 flex flex-col md:flex-row w-full items-center gap-4">
                        <NavLink
                            to={ROUTES.BOOK}
                            onClick={handleClick}
                            className="w-full md:w-64 bg-orange-600 cursor-pointer hover:bg-orange-700 transition text-white font-bold py-3 px-6 text-center rounded"
                            aria-label={t("bookBtnAria") || "Перейти к форме бронирования"}
                        >
                            {t("bookBtn")}
                        </NavLink>

                        <a
                            href="tel:+375333600854"
                            className="w-full md:w-64 bg-orange-600 hover:bg-orange-700 transition text-white font-bold py-3 px-6 text-center block rounded"
                            aria-label={t("phoneLinkAria") || "Позвонить по телефону +375 33 36 00 854"}
                        >
                            +375 33 36 00 854
                        </a>
                    </nav>
                </article>

                {/* Форма бронирования */}
                <aside aria-label={t("bookingFormAria") || "Форма бронирования"}>
                    <BookingForm />
                </aside>
            </motion.div>
        </section>
    );
};
