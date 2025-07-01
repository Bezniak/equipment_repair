import React from 'react';
import {
    FaMapMarkerAlt,
    FaPhoneAlt,
    FaEnvelope,
    FaFacebookF,
    FaTwitter,
    FaLinkedinIn,
    FaInstagram, FaClock,
} from 'react-icons/fa';
import {useTranslation} from "react-i18next";
import {NavLink} from "react-router-dom";
import {ROUTES} from "../../config/routes.js";
import {handleClick} from "../../common/helpers.js";

export const Footer = () => {
    const {t} = useTranslation();
    const year = new Date().getFullYear();

    return (
        <footer className="bg-[#0A0C1B] text-white">
            <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Contact Info */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">
                        {t("contactInfo")}
                    </h3>
                    <ul className="space-y-3">
                        <li className="flex items-center">
                            <FaMapMarkerAlt className="text-[#ffc752] mr-2"/>
                            <a
                                href="https://www.google.com/maps/search/?api=1&query=пр-т.+Космонавтов,+2А,+Гродно"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-orange-500 transition cursor-pointer"
                            >
                                пр-т. Космонавтов, 2А, Гродно
                            </a>
                        </li>
                        <li className="flex items-center">
                            <FaPhoneAlt className="text-[#ffc752] mr-2"/>
                            <a href="tel:+375333600854" className="hover:text-orange-500 transition cursor-pointer">
                                +375 33 36 00 854
                            </a>
                        </li>
                        <li className="flex items-center">
                            <FaEnvelope className="text-[#ffc752] mr-2"/>
                            <a href="mailto:info@example.com"
                               className="hover:text-orange-500 transition cursor-pointer">
                                info@example.com
                            </a>
                        </li>
                    </ul>

                </div>

                {/* Business Hours */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">
                        {t("businessHours")}
                    </h3>
                    <ul className="space-y-3">
                        <li className="flex items-center">
                            <FaClock className="text-[#ffc752] mr-2"/>
                            {t("workingHours1")}
                        </li>
                        <li className="flex items-center">
                            <FaClock className="text-[#ffc752] mr-2"/>
                            {t("workingHours2")}
                        </li>
                        <li className="flex items-center">
                            <FaClock className="text-[#ffc752] mr-2"/>
                            {t("closed")}
                        </li>
                    </ul>
                </div>

                {/* Information */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">
                        {t("information")}
                    </h3>
                    <ul className="flex flex-col space-y-3 w-fit">
                        <NavLink to={ROUTES.ABOUT_US} onClick={handleClick} className="hover:text-orange-500 transition cursor-pointer">
                            {t("navbar.about")}
                        </NavLink>
                        <NavLink to={ROUTES.ABOUT_US} onClick={handleClick} className="hover:text-orange-500 transition cursor-pointer">
                            {t("navbar.services")}
                        </NavLink>
                        <NavLink to={ROUTES.ABOUT_US} onClick={handleClick} className="hover:text-orange-500 transition cursor-pointer">
                            {t("navbar.contact")}
                        </NavLink>
                        <NavLink to={ROUTES.PP} onClick={handleClick} className="hover:text-orange-500 transition cursor-pointer">
                            {t("navbar.privacyPolicy")}
                        </NavLink>
                    </ul>
                </div>

                {/* Instagram */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Instagram</h3>
                    <div className="grid grid-cols-3 gap-2">
                        {[
                            'footer1.jpg',
                            'footer2.jpg',
                            'footer3.jpg',
                            'footer4.jpg',
                            'background.jpg',
                            'bringToLife.jpg'
                        ].map((img, i) => (
                            <a
                                key={i}
                                href="https://www.instagram.com/ivan_bezniak"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block w-20 h-20 rounded-md overflow-hidden"
                            >
                                <img
                                    src={`/${img}`} // если изображения в public/
                                    alt={`Instagram ${i + 1}`}
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                />
                            </a>
                        ))}
                    </div>
                </div>

                <div className='flex items-center justify-center gap-6'>
                    <button
                        className="bg-orange-500 cursor-pointer hover:bg-orange-600 transition px-6 py-2 font-semibold">
                        {t("bookBtn")}
                    </button>
                    <div className="flex space-x-4 text-xl">
                        <FaFacebookF className="cursor-pointer hover:text-orange-500"/>
                        <FaTwitter className="cursor-pointer hover:text-orange-500"/>
                        <FaLinkedinIn className="cursor-pointer hover:text-orange-500"/>
                        <FaInstagram className="cursor-pointer hover:text-orange-500"/>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div
                className="bg-[#1D1E2C] text-center white py-6 px-4 mx-auto">
                <p className=" text-sm">
                    {t("developed_by")}&nbsp;
                    <a
                        href="https://t.me/ivan_bezniak"
                        rel="noreferrer"
                        target="_blank"
                        className="hover:text-orange-500 transition"
                    >
                        {t("ivan_bezniak")}
                    </a>
                </p>
                <p className="">
                    <a
                        href="tel:+375295210417"
                        className="text-дп md:text-sm mt-2 block hover:text-orange-500 transition"
                    >
                        +375 29 521 04 17
                    </a>
                </p>

                <div className='text-left text-sm mt-10 md:mt-0'>
                    {year} RBT-SERWIS. &nbsp;
                    {t("rightsReserved")}
                </div>
            </div>
        </footer>
    );
};
