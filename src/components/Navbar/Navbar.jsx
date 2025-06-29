import {Button, Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle,} from "flowbite-react";
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {useAuth} from "../../context/AuthContext.jsx";
import byFlag from "../../assets/by.svg";
import usaFlag from "../../assets/usa.png";

export function NavbarComponent() {
    const {t} = useTranslation();
    const {locale, changeLocale} = useAuth();

    const toggleLanguage = () => {
        changeLocale(locale === "ru" ? "en" : "ru");
    };


    return (
        <Navbar fluid className='!bg-white opacity-70 absolute z-50 top-10 right-0 w-full'>
            <NavbarBrand as={Link} to="/">
                <img src="/logo.jpg" className="mr-3 h-18" alt="ремонт техники гродно"/>
                {/*<span className="hidden md:block self-center whitespace-nowrap text-xl font-semibold">*/}
                {/*    RBT-SERWIS*/}
                {/*</span>*/}
            </NavbarBrand>
            <div className="flex gap-4 md:order-2">
                <Button className='btn'>
                    {t("navbar.leaveRequest")}
                </Button>
                <button onClick={toggleLanguage}>
                    {locale === "ru" ? (
                        <img src={byFlag} alt="BY" className="size-10"/>
                    ) : (
                        <img src={usaFlag} alt="BY" className="size-10"/>
                    )}
                </button>
                <NavbarToggle/>
            </div>
            <NavbarCollapse>
                <NavbarLink as={Link} to="/" active>
                    {t("navbar.home")}
                </NavbarLink>
                <NavbarLink as={Link} to="/about">
                    {t("navbar.about")}
                </NavbarLink>
                <NavbarLink as={Link} to="/services">
                    {t("navbar.services")}
                </NavbarLink>
                <NavbarLink as={Link} to="/contact">
                    {t("navbar.contact")}
                </NavbarLink>
            </NavbarCollapse>
        </Navbar>
    );
}
