// import React from 'react';
// import {useTranslation} from "react-i18next";
// import BookingForm from "../BookingForm/BookingForm.jsx";
//
// export const Slider = () => {
//     const {t} = useTranslation();
//
//
//     return (
//         <div
//             className="relative w-full md:h-screen bg-cover bg-center"
//             style={{backgroundImage: "url('/background.jpg')"}}
//         >
//             {/* Затемнение фона */}
//             <div className='overlay'></div>
//             {/* Контент поверх фона */}
//             <div
//                 className="container mx-auto py-44 relative z-20 flex flex-col md:flex-row items-center justify-between h-full px-8 md:px-16 text-white">
//                 {/* Левая часть с текстом */}
//                 <div className="max-w-xl">
//                     <div className="bg-white hidden text-black md:inline-block px-4 py-3 rounded mb-4 text-sm">
//                         🔧 {t("slider.subTitle")}
//                     </div>
//                     <h1 className="text-4xl md:text-5xl font-bold leading-tight">
//                         <span className="text-yellow-400">
//                             {t("slider.title")}
//                         </span>
//                         <br/>
//                         {t("slider.additionTitle")}
//                     </h1>
//                     <p className="mt-4 text-lg">
//                         {t("slider.desc")}
//                     </p>
//                     <div className="mt-6 flex items-center gap-4">
//                         <button
//                             className="bg-orange-600 cursor-pointer hover:bg-orange-700 text-white font-bold py-2 px-6">
//                             {t("bookBtn")}
//                         </button>
//                         <a href="tel:+375333600854"
//                            className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-6">
//                             +375 33 36 00 854
//                         </a>
//
//                     </div>
//                 </div>
//
//                 {/* Правая часть с формой */}
//                 <BookingForm/>
//             </div>
//         </div>
//     );
// };





import React from 'react';
import { useTranslation } from "react-i18next";
import BookingForm from "../BookingForm/BookingForm.jsx";

export const Slider = () => {
    const { t } = useTranslation();

    return (
        <div className="relative w-full md:h-screen overflow-hidden">
            {/* Видео фон */}
            <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover z-0"
            >
                <source src="/background-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Затемнение поверх видео */}
            <div className="overlay"></div>

            {/* Контент поверх фона */}
            <div
                className="container mx-auto py-44 relative z-20 flex flex-col md:flex-row items-center justify-between h-full px-5 md:px-16 text-white"
            >
                {/* Левая часть с текстом */}
                <div className="max-w-xl">
                    <div className="bg-white hidden text-black md:inline-block px-4 py-3 rounded mb-4 text-sm">
                        🔧 {t("slider.subTitle")}
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                        <span className="text-yellow-400">
                            {t("slider.title")}
                        </span>
                        <br />
                        {t("slider.additionTitle")}
                    </h1>
                    <p className="mt-4 text-lg">{t("slider.desc")}</p>
                    <div className="mt-6 flex flex-col md:flex-row w-full items-center gap-8">
                        <button className="w-fit bg-orange-600 cursor-pointer hover:bg-orange-700 text-white font-bold py-3 px-6">
                            {t("bookBtn")}
                        </button>
                        <a href="tel:+375333600854"
                           className="w-fit bg-orange-600 hover:bg-orange-700 text-white text-center font-bold py-3 px-6">
                            +375 33 36 00 854
                        </a>
                    </div>
                </div>

                {/* Правая часть с формой */}
                <BookingForm />
            </div>
        </div>
    );
};
