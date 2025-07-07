import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ModalWindow } from '../ModalWindow/ModalWindow.jsx';
import {ServiceItem} from "./ServiceItem.jsx";


export const OurService = () => {
    const { t } = useTranslation();

    const serviceKeys = [
        'coffeeMachineRepair',
        'tvRepair',
        'airPurifierRepair',
        'microwaveRepair',
        'sewingMachineRepair',
        'riceRepair',
        'vacuumRepair',
        'toasterRepair',
        'blenderRepair',
        'meatGrinderRepair',
        'breadMakerRepair',
        'waterHeaterRepair',
        'electricStoveRepair',
        'extractorHoodRepair',
        'thermopotRepair',
        'juicerRepair',
        'steamCookerRepair',
        'multicookerRepair',
        'ironRepair',
        'hairDryerRepair',
        'electricShaverRepair',
        'heaterRepair',
        'fanRepair',
        'robotVacuumRepair',
        'electricGrillRepair',
        'foodProcessorRepair',
        'audioSystemRepair',
        'smokeDetectorRepair',
        'humidifierRepair',
        'massageChairRepair',
    ];

    // Сколько услуг показывать изначально
    const INITIAL_VISIBLE_COUNT = 10;
    // Сколько добавлять при каждом клике "Показать ещё"
    const LOAD_MORE_COUNT = 6;

    const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE_COUNT);
    const [selectedService, setSelectedService] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const handleOpenModal = (serviceKey) => {
        const service = t(`ourServices.${serviceKey}`, { returnObjects: true });
        setSelectedService(service);
        setShowModal(true);
    };

    const handleLoadMore = () => {
        setVisibleCount((prevCount) =>
            Math.min(prevCount + LOAD_MORE_COUNT, serviceKeys.length)
        );
    };

    return (
        <section className="py-10 md:py-10">
            {/* Schema.org разметка */}
            <script type="application/ld+json">
                {JSON.stringify({
                    '@context': 'https://schema.org',
                    '@type': 'LocalBusiness',
                    name: 'RBT-SERWIS',
                    description:
                        'Ремонт бытовой техники: холодильников, стиральных машин, посудомоек, СВЧ и т.д.',
                    telephone: '+375333600854',
                    address: {
                        '@type': 'PostalAddress',
                        addressLocality: 'Гродно',
                        addressCountry: 'BY',
                    },
                    image: '/logo.png',
                })}
            </script>

            <header className="container mx-auto text-center border-b-2 border-gray-300 pb-10">
        <span className="inline-block mb-5 py-2 px-5 bg-[#ffc752] text-black font-medium">
          {t('ourServices.ourServices')}
        </span>
                <h1 className="text-3xl mb-5 font-bold">{t('ourServices.title')}</h1>
                <p className="text-gray-700 md:w-3/6 mx-auto">
                    {t('ourServices.desc')}
                    <span className="sr-only">Ремонт микроволновок и другой техники в Гродно.</span>
                </p>
            </header>

            <main
                className="container mx-auto mt-16 grid md:grid-cols-2 gap-8 md:gap-16 border-b-2 border-gray-300 pb-10"
            >
                {serviceKeys.slice(0, visibleCount).map((key, index) => {
                    const service = t(`ourServices.${key}`, { returnObjects: true });
                    const isReversed = index % 2 === 1;

                    return (
                        <ServiceItem
                            key={key}
                            service={service}
                            isReversed={isReversed}
                            onMore={() => handleOpenModal(key)}
                        />
                    );
                })}

                {/* Кнопка "Показать ещё" */}
                {visibleCount < serviceKeys.length && (
                    <div className="w-full flex !justify-center mt-8">
                        <button
                            onClick={handleLoadMore}
                            className="bg-orange-600 hover:bg-orange-700 text-white py-2 px-6 rounded transition"
                        >
                            {t('showMore')}
                        </button>
                    </div>
                )}

            </main>

            {/* Модальное окно */}
            {showModal && selectedService && (
                <ModalWindow service={selectedService} onClose={() => setShowModal(false)} />
            )}
        </section>
    );
};
