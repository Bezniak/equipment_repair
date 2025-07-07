import React, {useEffect} from 'react';
import {motion, AnimatePresence} from 'framer-motion';
import {TiTickOutline} from "react-icons/ti";
import {useTranslation} from "react-i18next";

export const ModalWindow = ({service, onClose}) => {
    const {t} = useTranslation();

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') onClose();
        };

        window.addEventListener('keydown', handleKeyDown);
        document.body.classList.add('overflow-hidden');
        document.body.style.overflow = 'hidden'; // ← важно

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            document.body.classList.remove('overflow-hidden');
            document.body.style.overflow = ''; // сбрасываем
        };
    }, [onClose]);


    // Закрытие по клику вне модального окна
    const handleBackdropClick = (e) => {
        if (e.target.id === 'modal-backdrop') {
            onClose();
        }
    };

    return (
        <AnimatePresence>
            <motion.div
                id="modal-backdrop"
                className="fixed inset-0 bg-gradient-to-br from-black/40 via-gray-900/20 to-black/10 flex justify-center items-center z-50 px-4"
                onClick={handleBackdropClick}
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                exit={{opacity: 0}}
            >

                <motion.div
                    className="bg-white rounded-3xl shadow-2xl w-full max-w-3xl p-8 relative overflow-hidden"
                    initial={{scale: 0.8, opacity: 0}}
                    animate={{scale: 1, opacity: 1}}
                    exit={{scale: 0.8, opacity: 0}}
                    transition={{type: 'spring', stiffness: 300, damping: 25}}
                >
                    {/* Кнопка закрытия */}
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 text-gray-500 hover:text-red-500 text-4xl cursor-pointer font-bold z-10"
                        aria-label="Закрыть"
                    >
                        &times;
                    </button>

                    {/* Шапка */}
                    <div className="flex flex-col md:flex-row items-center gap-6 mb-6">
                        {service.img && (
                            <div className="w-full md:w-1/3 flex justify-center">
                                <img
                                    src={service.img}
                                    alt={service.title}
                                    className="max-h-40 object-contain"
                                />
                            </div>
                        )}
                        <div className={`${service.img ? "w-full md:w-2/3" : "w-full" } text-center md:text-left`}>
                            <h2 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h2>
                            <p className="text-gray-700 text-sm leading-relaxed">{service.desc}</p>
                        </div>
                    </div>


                    {/* Список услуг */}
                    {service.services?.length > 0 && (
                        <div className="p-5">
                            <h3 className="text-lg font-semibold text-gray-800 mb-4">
                                {t("repairDetails")}
                            </h3>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 list-none">
                                {service.services.map((item, idx) => (
                                    <li
                                        key={idx}
                                        className="flex items-center gap-2 text-gray-800 text-sm"
                                    >
                                        <span className="text-red-500 text-2xl">
                                            <TiTickOutline />
                                        </span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};
