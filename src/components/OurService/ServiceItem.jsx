import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {useTranslation} from "react-i18next";

export const ServiceItem = ({ service, isReversed, onMore }) => {
    const { t } = useTranslation();
    const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.2 });

    return (
        <motion.article
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className={`flex flex-col ${isReversed ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-6`}
        >
            {/* Показываем только если есть картинка */}
            {service.img ? (
                <figure className="md:w-1/3 flex justify-center">
                    <img
                        src={service.img}
                        alt={service.title}
                        className="max-w-[120px] md:max-w-[160px] xl:max-w-[180px]"
                        loading="lazy"
                    />
                </figure>
            ) : (
                // Если картинки нет — просто пустой блок шириной 0, чтобы текст не сдвигался
                <div className="md:w-1/3" />
            )}

            {/* Если есть картинка — текст занимает 2/3, если нет — всю ширину */}
            <div className={`${service.img ? 'md:w-2/3' : 'w-full'} text-center md:text-left`}>
                <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-2">{service.title}</h2>
                <p className="text-gray-700 mb-2">{service.desc}</p>
                <button
                    className="w-fit mt-5 bg-orange-600 hover:bg-orange-700 transition cursor-pointer text-white !text-sm py-2 px-4 rounded"
                    onClick={onMore}
                >
                    {t("more")}
                </button>
            </div>
        </motion.article>
    );
};
