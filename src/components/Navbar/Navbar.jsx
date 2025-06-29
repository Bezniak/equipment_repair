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
        <Navbar fluid className="!bg-white opacity-90 absolute z-50 top-10 w-full">
            <NavbarBrand as={Link} to="/">
                <img src="/logo.jpg" className="mr-3 h-18" alt="ремонт техники гродно" />
            </NavbarBrand>

            <div className="flex gap-4 md:order-2">
                <Button className="btn">{t("navbar.leaveRequest")}</Button>
                <button onClick={toggleLanguage}>
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
                    to="/"
                    className={`!text-black ${isActive("/") ? "!text-orange-700 font-bold" : ""}`}
                >
                    {t("navbar.home")}
                </NavbarLink>
                <NavbarLink
                    as={Link}
                    to="/about"
                    className={`!text-black ${isActive("/about") ? "!text-orange-700 font-bold" : ""}`}
                >
                    {t("navbar.about")}
                </NavbarLink>
                <NavbarLink
                    as={Link}
                    to="/services"
                    className={`!text-black ${isActive("/services") ? "!text-orange-700 font-bold" : ""}`}
                >
                    {t("navbar.services")}
                </NavbarLink>
                <NavbarLink
                    as={Link}
                    to="/contact"
                    className={`!text-black ${isActive("/contact") ? "!text-orange-700 font-bold" : ""}`}
                >
                    {t("navbar.contact")}
                </NavbarLink>

            </NavbarCollapse>
        </Navbar>
    );
}
