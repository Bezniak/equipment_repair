import React, { useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { FaUserCheck, FaUsers, FaRegFileAlt, FaClock } from "react-icons/fa";
import { motion, useAnimation } from "framer-motion";

function useOnScreen(ref) {
    const [isIntersecting, setIntersecting] = React.useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setIntersecting(entry.isIntersecting),
            { threshold: 0.3 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => {
            if (ref.current) observer.unobserve(ref.current);
        };
    }, [ref]);

    return isIntersecting;
}

export default function ApplianceRepairSection() {
    const { t } = useTranslation();
    const controls = useAnimation();
    const ref = useRef(null);
    const isVisible = useOnScreen(ref);

    useEffect(() => {
        if (isVisible) {
            controls.start("visible");
        }
    }, [isVisible, controls]);

    const features = [
        {
            title: t("features.certified"),
            description: t("features.certifiedDesc"),
            icon: <FaUserCheck aria-hidden="true" className="text-indigo-600 w-6 h-6" />,
        },
        {
            title: t("features.local"),
            description: t("features.localDesc"),
            icon: <FaUsers aria-hidden="true" className="text-indigo-600 w-6 h-6" />,
        },
        {
            title: t("features.pricing"),
            description: t("features.pricingDesc"),
            icon: <FaRegFileAlt aria-hidden="true" className="text-indigo-600 w-6 h-6" />,
        },
        {
            title: t("features.prompt"),
            description: t("features.promptDesc"),
            icon: <FaClock aria-hidden="true" className="text-indigo-600 w-6 h-6" />,
        },
    ];

    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" },
        },
    };

    return (
        <section className="relative overflow-hidden" aria-labelledby="appliance-repair-title">
            {/* Параллакс-блок */}
            <div
                className="relative h-[500px] md:h-[600px] bg-fixed bg-center bg-cover flex flex-col items-center justify-center text-white text-center px-4"
                style={{ backgroundImage: "url('/bringToLife.jpg')" }}
            >
                <div className="absolute inset-0 bg-gray-900/60 z-0" />

                {/* Значок "Satisfaction" */}
                <img
                    src="/satisfaction.png"
                    alt={t("hero.satisfactionAlt") || "Satisfaction Badge"}
                    className="z-10 relative w-28 md:w-32 mb-4 -mt-20"
                />

                <div className="relative z-10 max-w-4xl mb-10">
                    <h2 id="appliance-repair-title" className="text-2xl md:text-4xl font-bold mb-4">
                        {t("hero.title")}
                    </h2>
                    <p className="text-base md:text-lg text-gray-200">{t("hero.subtitle")}</p>
                </div>
            </div>

            {/* Анимированный блок фич */}
            <motion.div
                ref={ref}
                variants={containerVariants}
                initial="hidden"
                animate={controls}
                className="-mt-32 md:-mt-40 px-6 md:px-20 relative z-10"
            >
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    {features.map((feature, index) => (
                        <motion.article
                            key={index}
                            variants={itemVariants}
                            className={`${
                                index % 2 === 0 ? "bg-[#e2e0f4]" : "bg-white"
                            } p-6 text-center space-y-4 min-h-[280px] md:min-h-[320px] flex flex-col justify-center rounded-lg shadow-md`}
                        >
                            <div className="w-12 h-12 mx-auto flex items-center justify-center">
                                {feature.icon}
                            </div>
                            <h3 className="text-lg font-semibold text-gray-800">{feature.title}</h3>
                            <p className="text-sm text-gray-600">{feature.description}</p>
                        </motion.article>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
