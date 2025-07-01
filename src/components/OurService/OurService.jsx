import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';
import {FaPhoneAlt} from "react-icons/fa";
import {brands} from "../../store/data.js";
import {motion} from "framer-motion";

export const OurService = () => {
    const {t} = useTranslation();
    const [isPaused, setIsPaused] = useState(false);
    const [hoveredBrand, setHoveredBrand] = useState(null);

    const serviceKeys = [
        'fridgeRepair',
        'ovenRepair',
        'washerRepair',
        'dryerRepair',
        'dishwasherRepair',
        'microwaveRepair',
        'kettleRepair',
        'acRepair',
        'riceRepair',
        'vacuumRepair',
        'toasterRepair',
        'blenderRepair'
    ];

    return (
        <section className='py-10 md:py-20'>
            {/* Header */}
            <div className='container mx-auto text-center border-b-2 border-gray-300 pb-10'>
                <span className='inline-block mb-5 py-2 px-5 bg-[#ffc752] text-black font-medium'>
                  {t('ourServices.ourServices')}
                </span>
                <h1 className='text-3xl mb-5 font-bold'>
                    {t('ourServices.title')}
                </h1>
                <p className='text-gray-700 md:w-3/6 mx-auto'>
                    {t('ourServices.desc')}
                </p>
            </div>

            {/* Grid of services */}
            <div className="container mx-auto mt-16 grid md:grid-cols-2 gap-8 md:gap-16 border-b-2 border-gray-300 pb-10">
                {serviceKeys.map((key, index) => {
                    const service = t(`ourServices.${key}`, {returnObjects: true});
                    const isReversed = index % 2 === 1;

                    return (
                        <div
                            key={key}
                            className={`flex flex-col ${isReversed ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-6`}
                        >
                            {/* Image */}
                            <div className="md:w-1/3 flex justify-center">
                                <img
                                    src={service.img}
                                    alt={service.title}
                                    className="max-w-[120px] md:max-w-[160px] xl:max-w-[180px]"
                                />
                            </div>

                            {/* Text */}
                            <div className="md:w-2/3 text-center md:text-left">
                                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">
                                    {service.title}
                                </h3>
                                <p className="text-gray-700 mb-2">{service.desc}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className="container mx-auto mt-12 flex flex-col sm:flex-row items-center justify-center gap-12 space-y-4 sm:space-y-0">
                <button className="bg-[#ff5823] text-white font-semibold px-6 py-3 hover:bg-[#e64a17] transition">
                    {t("bringToLife.bookBtn")}
                </button>
                <a
                    href={`tel:${t("bringToLife.phone").replace(/\s+/g, '')}`} // Удаляем пробелы
                    className="flex items-center text-gray-900 font-semibold text-lg space-x-2 hover:text-[#ff5823] transition"
                >
                    <FaPhoneAlt className="text-[#ff5823]"/>
                    <span>{t("bringToLife.phone")}</span>
                </a>
            </div>

            <div className='mt-32'>
                <h3 className='container mx-auto text-3xl text-center'>
                    {t("ourServices.types")}
                </h3>
                <div className="relative w-full overflow-hidden bg-white py-10">
                    <motion.div
                        className="flex space-x-12 whitespace-nowrap"
                        style={{width: "200%"}}
                        animate={{x: isPaused ? 0 : "-50%"}}
                        transition={{
                            repeat: Infinity,
                            ease: "linear",
                            duration: 20,
                        }}
                    >
                        {[...brands, ...brands].map((brand, idx) => (
                            <div
                                key={`${brand.name}-${idx}`}
                                className="flex flex-col items-center justify-center relative cursor-pointer select-none"
                                onMouseEnter={() => {
                                    setIsPaused(true);
                                    setHoveredBrand(brand.name);
                                }}
                                onMouseLeave={() => {
                                    setIsPaused(false);
                                    setHoveredBrand(null);
                                }}
                            >
                                <img
                                    src={brand.logo}
                                    alt={brand.name}
                                    className="h-32 w-auto object-contain"
                                    loading="lazy"
                                />
                                {hoveredBrand === brand.name && (
                                    <div
                                        className="absolute top-0 bg-black text-white text-sm px-3 py-1 rounded shadow-lg whitespace-nowrap">
                                        {brand.name}
                                    </div>
                                )}
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
