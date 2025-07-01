import {useTranslation} from 'react-i18next';

export default function FeaturedProjects() {
    const {t} = useTranslation();

    const projects = [
        {id: 1, image: '/project1.jpg', alt: 'Repairing coffee machine', label: 'Coffee Machine Repair'},
        {id: 2, image: '/project2.jpg', alt: 'Oven repair', label: 'Oven and Stove Success'},
        {id: 3, image: '/project3.jpg', alt: 'Fridge repair', label: 'Fridge Fixing'},
        {id: 4, image: '/project4.jpg', alt: 'Washing machine repair', label: 'Washing Machine Service'},
    ];

    return (
        <section className="bg-white py-20">
            <div className="container mx-auto px-6 text-center">
                {/* Section Tag */}
                <span className="bg-[#ffc752] text-black font-semibold text-sm px-4 py-3 rounded">
                    {t('featured_projects')}
                </span>

                {/* Title */}
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-6">
                    {t('featured_showcase')}
                </h2>

                {/* Description */}
                <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                    {t('featured_description')}
                </p>

                {/* Gallery */}
                <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="relative rounded overflow-hidden shadow-md hover:shadow-lg transition duration-300 cursor-pointer group"
                        >
                            <img
                                src={project.image}
                                alt={t(project.alt)}
                                className="w-full h-64 object-cover transition-transform duration-1000 group-hover:scale-120"
                            />
                            {/* Overlay label */}
                            <div
                                className="absolute bottom-0 left-0 right-0 bg-[#ffc752] bg-opacity-90 text-black text-center py-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                {project.label}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Buttons */}
                <div className="mt-10 flex justify-center gap-4 flex-wrap">
                    <button
                        className="bg-orange-500 hover:bg-orange-600 cursor-pointer text-white font-semibold px-6 py-3 rounded shadow">
                        {t('book_service')}
                    </button>
                </div>
            </div>
        </section>
    );
}
