import React from 'react';
import {Slider} from "../../components/Slider/Slider.jsx";
import {BringToLife} from "../../components/BringToLife/BringToLife.jsx";
import {OurService} from "../../components/OurService/OurService.jsx";
import ApplianceRepairSection from "../../components/ApplianceRepairSection/ApplianceRepairSection.jsx";
import WhyChooseUs from "../../components/WhyChooseUs/WhyChooseUs.jsx";
import FeaturedProjects from "../../components/FeaturedProjects/FeaturedProjects.jsx";

const Home = () => {
    return (
        <>
            <main>
                <Slider/>
                <BringToLife/>
                <OurService/>
                <ApplianceRepairSection/>
                <WhyChooseUs/>
                <FeaturedProjects/>

            </main>
        </>
    );
};

export default Home;
