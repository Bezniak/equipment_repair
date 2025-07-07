import { useTranslation } from 'react-i18next';
import { NavLink } from "react-router-dom";
import { ROUTES } from "../../config/routes.js";
import { handleClick } from "../../common/helpers.js";

export default function FeaturedProjects() {
    const { t } = useTranslation();

    const projects = [
        {
            id: 1,
            image: '/project1.jpg',
            alt: t("ourServices.coffeeMachineRepair.title"),
            label: t("ourServices.coffeeMachineRepair.title"),
        },
        {
            id: 2,
            image: '/project2.jpg',
            alt: t("ourServices.microwaveRepair.title"),
            label: t("ourServices.microwaveRepair.title"),
        },
        {
            id: 3,
            image: '/project3.jpg',
            alt: t("ourServices.vacuumRepair.title"),
            label: t("ourServices.vacuumRepair.title"),
        },
        {
            id: 4,
            image: '/project4.jpg',
            alt: t("ourServices.toasterRepair.title"),
            label: t("ourServices.toasterRepair.title"),
        },
    ];

    return (
        <section className="bg-white pb-10">
            <div className="container mx-auto px-6 text-center">
                <span className="bg-[#ffc752] text-black font-semibold text-sm px-4 py-3 rounded">
                    {t('featured_projects')}
                </span>

                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-6">
                    {t('featured_showcase')}
                </h2>

                <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                    {t('featured_description')}
                </p>

                {/* Семантический список */}
                <ul className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4" role="list">
                    {projects.map((project) => (
                        <li key={project.id} className="relative rounded overflow-hidden shadow-md hover:shadow-lg transition duration-300 cursor-pointer group">
                            <img
                                src={project.image}
                                alt={project.alt}
                                className="w-full h-64 object-cover transition-transform duration-1000 group-hover:scale-110"
                                loading="lazy"
                            />
                            <div
                                className="absolute bottom-0 left-0 right-0 bg-[#ffc752] bg-opacity-90 text-black text-center py-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                aria-hidden="true"
                            >
                                {project.label}
                            </div>
                        </li>
                    ))}
                </ul>

                <div className="mt-10 flex justify-center gap-4 flex-wrap">
                    <NavLink
                        to={ROUTES.BOOK}
                        onClick={handleClick}
                        className="bg-orange-500 hover:bg-orange-600 cursor-pointer text-white font-semibold px-6 py-3 rounded shadow"
                        aria-label={t('book_service')}
                    >
                        {t('book_service')}
                    </NavLink>
                </div>
            </div>
        </section>
    );
}
