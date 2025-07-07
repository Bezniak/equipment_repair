import React, {useEffect, useRef} from 'react';
import {useTranslation} from 'react-i18next';
import {FaCogs, FaPhoneAlt, FaShieldAlt, FaStopwatch} from 'react-icons/fa';
import {motion, useAnimation} from "framer-motion";

function useOnScreen(ref) {
    const [isIntersecting, setIntersecting] = React.useState(false);

    React.useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setIntersecting(entry.isIntersecting),
            {threshold: 0.3}
        );
        if (ref.current) observer.observe(ref.current);
        return () => {
            if (ref.current) observer.unobserve(ref.current);
        };
    }, [ref]);

    return isIntersecting;
}

const itemVariants = {
    hidden: {opacity: 0, x: 50},
    visible: {
        opacity: 1,
        x: 0,
        transition: {duration: 0.6, ease: "easeOut"}
    }
};

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.3
        }
    }
};

export const BringToLife = () => {
    const {t} = useTranslation();
    const ref = useRef(null);
    const isVisible = useOnScreen(ref);
    const controls = useAnimation();

    useEffect(() => {
        if (isVisible) {
            controls.start("visible");
        } else {
            controls.start("hidden");
        }
    }, [isVisible, controls]);

    return (
        <motion.section
            ref={ref}
            aria-label={t("bringToLife.ariaLabel") || "Преимущества ремонта бытовой техники"}
            className="py-16 px-4 md:px-12"
            initial="hidden"
            animate={controls}
            variants={containerVariants}
        >
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/* Левый контент */}
                <motion.article variants={itemVariants}>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        {t("bringToLife.title")}
                    </h1>
                    <p className="text-gray-700 mb-8 leading-relaxed">
                        {t("bringToLife.desc")}
                    </p>
                    <figure>
                        <img
                            src="/bringToLife.jpg"
                            alt='ремонт бытовой техники гродно'
                            className="rounded-lg shadow-md"
                            loading="lazy"
                        />
                        <figcaption
                            className="sr-only">{t("bringToLife.imgCaption") || "Ремонт бытовой техники"}</figcaption>
                    </figure>
                </motion.article>

                {/* Правый контент — преимущества */}
                <motion.aside className="rounded-xl p-8 bg-gray-50" variants={itemVariants}
                              aria-label={t("bringToLife.featuresAria") || "Преимущества ремонта"}>
                    <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10" variants={containerVariants}>
                        {[
                            {
                                icon: <FaShieldAlt className="text-indigo-700 text-2xl" aria-hidden="true"/>,
                                title: t("bringToLife.warrantyTitle"),
                                desc: t("bringToLife.warrantyDesc")
                            },
                            {
                                icon: <FaPhoneAlt className="text-indigo-700 text-2xl" aria-hidden="true"/>,
                                title: t("bringToLife.availabilityTitle"),
                                desc: t("bringToLife.availabilityDesc")
                            },
                            {
                                icon: <FaCogs className="text-indigo-700 text-2xl" aria-hidden="true"/>,
                                title: t("bringToLife.qualityTitle"),
                                desc: t("bringToLife.qualityDesc")
                            },
                            {
                                icon: <FaStopwatch className="text-indigo-700 text-2xl" aria-hidden="true"/>,
                                title: t("bringToLife.bookingTitle"),
                                desc: t("bringToLife.bookingDesc")
                            }
                        ].map(({icon, title, desc}, idx) => (
                            <motion.article key={idx} className="flex items-start space-x-4" variants={itemVariants}>
                                <div aria-hidden="true">{icon}</div>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
                                    <p className="text-sm text-gray-600">{desc}</p>
                                </div>
                            </motion.article>
                        ))}
                    </motion.div>

                    {/* CTA */}
                    <motion.nav
                        className="flex flex-col sm:flex-row items-center justify-center gap-12 space-y-4 sm:space-y-0"
                        variants={itemVariants}
                        aria-label={t("bringToLife.ctaAria") || "Контакты и бронирование"}
                    >
                    </motion.nav>
                </motion.aside>
            </div>
        </motion.section>
    );
};
