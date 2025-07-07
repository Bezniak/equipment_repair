import {Dropdown, Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle} from "flowbite-react";
import {Link, NavLink, useLocation} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {useAuth} from "../../context/AuthContext.jsx";
import byFlag from "../../assets/by.svg";
import usaFlag from "../../assets/usa.png";
import chinaFlag from "../../assets/zh.jpg";
import React from "react";
import {handleClick} from "../../common/helpers.js";
import {ROUTES} from "../../config/routes.js";
import Select from "react-select";

export function NavbarComponent() {
    const {t} = useTranslation();
    const {locale, changeLocale} = useAuth();
    const location = useLocation();

    const languageOptions = [
        {code: "ru", label: "Русский", flag: byFlag},
        {code: "en", label: "English", flag: usaFlag},
        {code: "zh", label: "中文", flag: chinaFlag},
    ];

    const options = languageOptions.map((lang) => ({
        value: lang.code,
        label: (
            <div className="flex items-center gap-2">
                <img src={lang.flag} alt={lang.label} className="size-10" />
                <span className='hidden md:block'>{lang.label}</span>
            </div>
        ),
        flag: lang.flag,
    }));

    const currentLang = languageOptions.find(lang => lang.code === locale) || languageOptions[0];

    const selectedOption = options.find(option => option.value === currentLang.code);

    const customStyles = {
        control: (base) => ({
            ...base,
            padding: '6px 4px',
            minHeight: 'unset',
            border: 'none',
            outline: 'none',
            cursor: 'pointer',
            width: 'auto',
        }),
        valueContainer: (base) => ({
            ...base,
            padding: '0 4px',
        }),
        indicatorsContainer: (base) => ({
            ...base,
            padding: 0,
        }),
        singleValue: (base, { data }) => ({
            ...base,
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
        }),
        option: (base, state) => ({
            ...base,
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            backgroundColor: state.isFocused ? '#f3f4f6' : 'white',
            color: 'black',
        }),
    };

    // Функция для проверки активной ссылки
    const isActive = (path) => location.pathname === path;

    return (
        <Navbar fluid className="!bg-white  fixed z-50 top-0 w-full border-b border-gray-300">
            <NavbarBrand as={Link} to="/" className='flex items-center'>
                <img src="/logo.svg" className="mr-3 h-18 inline-block" alt="ремонт техники гродно"/>
                <span className='inline-block text-sm md:font-bold md:text-2xl md:ml-5'>
                    {t("companyName")}
                </span>
            </NavbarBrand>

            <div className="flex gap-4 md:order-2 items-center">
                {/* Выпадающий список языков */}
                <Select
                    value={selectedOption}
                    onChange={(selected) => changeLocale(selected.value)}
                    options={options}
                    styles={customStyles}
                    isSearchable={false}
                />

                <NavbarToggle/>
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
