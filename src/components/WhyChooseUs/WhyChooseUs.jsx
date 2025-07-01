import { useTranslation } from 'react-i18next';
import { FaShieldAlt, FaClock, FaCalendarAlt, FaTools } from 'react-icons/fa';

export default function WhyChooseUs() {
    const { t } = useTranslation();

    return (
        <section className="bg-[#f4f2fd] py-16 relative overflow-hidden">
            <div className="container mx-auto px-6 relative flex flex-col md:flex-row items-center gap-10">
                {/* Картинка */}
                <div className="w-full md:w-1/2 relative z-0">
                    <img
                        src="/whyChooseUs.jpg"
                        alt={t('repairman_alt')}
                        className="w-full h-[500px] md:h-[700px] object-cover"
                    />
                </div>

                {/* Контент: перекрытие на десктопе */}
                <div className="w-full md:w-1/2 bg-white p-4 md:p-6 space-y-6 relative z-10 -mt-10 md:mt-0 md:-ml-40">
                    <div>
                        <span className="bg-yellow-400 text-black font-semibold text-sm px-3 py-2 rounded">
                            {t('why_choose_us')}
                        </span>
                        <h2 className="text-3xl md:text-4xl font-extrabold mt-6 text-gray-900">
                            {t('we_bring_appliances_back')}
                        </h2>
                        <p className="mt-4 text-gray-700">
                            {t('we_provide_comprehensive_repair')}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <Feature
                            icon={<FaShieldAlt className="text-indigo-600 text-xl" />}
                            title={t('guaranteed_warranties')}
                            description={t('warranties_description')}
                        />
                        <Feature
                            icon={<FaClock className="text-indigo-600 text-xl" />}
                            title={t('service_24_7')}
                            description={t('service_24_7_description')}
                        />
                        <Feature
                            icon={<FaCalendarAlt className="text-indigo-600 text-xl" />}
                            title={t('convenient_booking')}
                            description={t('convenient_booking_description')}
                        />
                        <Feature
                            icon={<FaTools className="text-indigo-600 text-xl" />}
                            title={t('quality_parts')}
                            description={t('quality_parts_description')}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

function Feature({ icon, title, description }) {
    return (
        <div className="flex items-start gap-4">
            <div className="bg-indigo-100 p-3 rounded-full">{icon}</div>
            <div>
                <h4 className="font-semibold text-lg">{title}</h4>
                <p className="text-gray-600">{description}</p>
            </div>
        </div>
    );
}
