import {
    Button,
    Navbar,
    NavbarBrand,
    NavbarCollapse,
    NavbarLink,
    NavbarToggle,
} from "flowbite-react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useAuth } from "../../context/AuthContext.jsx";
import byFlag from "../../assets/by.svg";
import usaFlag from "../../assets/usa.png";
import React from "react";
import {handleClick} from "../../common/helpers.js";

export function NavbarComponent() {
    const { t } = useTranslation();
    const { locale, changeLocale } = useAuth();
    const location = useLocation();

    const toggleLanguage = () => {
        changeLocale(locale === "ru" ? "en" : "ru");
    };

    // Функция для проверки активной ссылки
    const isActive = (path) => location.pathname === path;

    return (
        <Navbar fluid className="!bg-white fixed z-50 top-0 w-full border-b border-gray-300">
            <NavbarBrand as={Link} to="/">
                <img src="/logo.jpg" className="mr-3 h-18" alt="ремонт техники гродно" />
            </NavbarBrand>

            <div className="flex gap-4 md:order-2">
                <button className="bg-[#ff5823] text-white font-semibold px-4 py-1 cursor-pointer shadow hover:bg-[#e64a17] transition">
                    {t("bookBtn")}
                </button>
                <button onClick={toggleLanguage} className='cursor-pointer'>
                    <img
                        src={locale === "ru" ? byFlag : usaFlag}
                        alt="Lang"
                        className="size-10"
                    />
                </button>
                <NavbarToggle />
            </div>

            <NavbarCollapse>
                <NavbarLink
                    as={Link}
                    onClick={handleClick}
                    to="/"
                    className={`!text-black ${isActive("/") ? "!text-[#ff5823] font-bold" : ""}`}
                >
                    {t("navbar.home")}
                </NavbarLink>
                <NavbarLink
                    as={Link}
                    onClick={handleClick}
                    to="/about"
                    className={`!text-black ${isActive("/about") ? "!text-[#ff5823] font-bold" : ""}`}
                >
                    {t("navbar.about")}
                </NavbarLink>
                <NavbarLink
                    as={Link}
                    onClick={handleClick}
                    to="/services"
                    className={`!text-black ${isActive("/services") ? "!text-[#ff5823] font-bold" : ""}`}
                >
                    {t("navbar.services")}
                </NavbarLink>
                <NavbarLink
                    as={Link}
                    onClick={handleClick}
                    to="/contact"
                    className={`!text-black ${isActive("/contact") ? "!text-[#ff5823] font-bold" : ""}`}
                >
                    {t("navbar.contact")}
                </NavbarLink>

            </NavbarCollapse>
        </Navbar>
    );
}
