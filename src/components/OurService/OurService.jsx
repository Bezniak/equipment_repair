import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';
import {FaPhoneAlt} from "react-icons/fa";
import {brands} from "../../store/data.js";
import {motion} from "framer-motion";
import {NavLink} from "react-router-dom";
import {ROUTES} from "../../config/routes.js";
import {handleClick} from "../../common/helpers.js";
import {useInView} from 'react-intersection-observer';

export const OurService = () => {
    const {t} = useTranslation();
    const [isPaused, setIsPaused] = useState(false);
    const [hoveredBrand, setHoveredBrand] = useState(null);

    const serviceKeys = [
        'fridgeRepair', 'ovenRepair', 'washerRepair', 'dryerRepair',
        'dishwasherRepair', 'microwaveRepair', 'kettleRepair', 'acRepair',
        'riceRepair', 'vacuumRepair', 'toasterRepair', 'blenderRepair'
    ];

    return (
        <section className='py-10 md:py-10'>

            {/* Schema.org разметка */}
            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "LocalBusiness",
                    "name": "RBT-SERWIS",
                    "description": "Ремонт бытовой техники: холодильников, стиральных машин, посудомоек, СВЧ и т.д.",
                    "telephone": "+375333600854",
                    "address": {
                        "@type": "PostalAddress",
                        "addressLocality": "Гродно",
                        "addressCountry": "BY"
                    },
                    "image": "/logo.png"
                })}
            </script>

            <header className='container mx-auto text-center border-b-2 border-gray-300 pb-10'>
        <span className='inline-block mb-5 py-2 px-5 bg-[#ffc752] text-black font-medium'>
          {t('ourServices.ourServices')}
        </span>
                <h1 className='text-3xl mb-5 font-bold'>
                    {t('ourServices.title')}
                </h1>
                <p className='text-gray-700 md:w-3/6 mx-auto'>
                    {t('ourServices.desc')}
                    <span className="sr-only">
            Ремонт холодильников, стиральных машин, микроволновок, посудомоек, кондиционеров и другой техники в Барановичах.
          </span>
                </p>
            </header>

            <main
                className="container mx-auto mt-16 grid md:grid-cols-2 gap-8 md:gap-16 border-b-2 border-gray-300 pb-10">
                {serviceKeys.map((key, index) => {
                    const service = t(`ourServices.${key}`, {returnObjects: true});
                    const isReversed = index % 2 === 1;

                    // Для каждого блока создаем ref и inView
                    const [ref, inView] = useInView({
                        triggerOnce: false,
                        threshold: 0.2,
                    });

                    return (
                        <motion.article
                            key={key}
                            ref={ref}
                            initial={{opacity: 0, y: 50}}
                            animate={inView ? {opacity: 1, y: 0} : {opacity: 0, y: 50}}
                            transition={{duration: 0.6, ease: 'easeOut'}}
                            className={`flex flex-col ${isReversed ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-6`}
                            itemScope
                            itemType="https://schema.org/Service"
                        >
                            <figure className="md:w-1/3 flex justify-center">
                                <img
                                    src={service.img}
                                    alt={`Ремонт: ${service.title}`}
                                    className="max-w-[120px] md:max-w-[160px] xl:max-w-[180px]"
                                    loading="lazy"
                                    itemProp="image"
                                />
                            </figure>

                            <div className="md:w-2/3 text-center md:text-left" itemProp="description">
                                <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-2" itemProp="name">
                                    {service.title}
                                </h2>
                                <p className="text-gray-700 mb-2">{service.desc}</p>
                                <div className="sr-only">
                                    {`Профессиональный ${service.title.toLowerCase()} в Барановичах. ${service.desc}`}
                                </div>
                            </div>
                        </motion.article>
                    );
                })}
            </main>

            <aside
                className="container mx-auto mt-12 flex flex-col sm:flex-row items-center justify-center gap-12 space-y-4 sm:space-y-0">
                <NavLink
                    to={ROUTES.BOOK}
                    onClick={handleClick}
                    className="bg-[#ff5823] text-white font-semibold px-6 py-3 hover:bg-[#e64a17] transition"
                >
                    {t("bringToLife.bookBtn")}
                </NavLink>
                <a
                    href={`tel:${t("bringToLife.phone").replace(/\s+/g, '')}`}
                    className="flex items-center text-gray-900 font-semibold text-lg space-x-2 hover:text-[#ff5823] transition"
                >
                    <FaPhoneAlt className="text-[#ff5823]"/>
                    <span>{t("bringToLife.phone")}</span>
                </a>
            </aside>

            <section className='mt-20'>
                <h3 className='container mx-auto text-3xl text-center'>
                    {t("ourServices.types")}
                </h3>
                <div className="relative w-full overflow-hidden bg-white mt-10" aria-label="Популярные бренды">
                    <motion.div
                        className="flex space-x-12 whitespace-nowrap"
                        style={{minWidth: "200%"}}
                        animate={{x: isPaused ? 0 : "-50%"}}
                        transition={{repeat: Infinity, ease: "linear", duration: 20}}
                    >
                        {[...brands, ...brands].map((brand, idx) => (
                            <div
                                key={`${brand.name}-${idx}`}
                                className="flex flex-col items-center justify-center relative cursor-pointer select-none min-w-[120px]"
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
                                    className="h-20 w-auto object-contain"
                                    loading="lazy"
                                />
                                {hoveredBrand === brand.name && (
                                    <div
                                        className="absolute top-0 bg-black text-white text-xs px-2 py-1 rounded shadow-lg">
                                        {brand.name}
                                    </div>
                                )}
                            </div>
                        ))}
                    </motion.div>
                </div>
            </section>
        </section>
    );
};
