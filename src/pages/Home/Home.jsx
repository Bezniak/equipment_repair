import React from 'react';
import {Slider} from "../../components/Slider/Slider.jsx";
import {BringToLife} from "../../components/BringToLife/BringToLife.jsx";
import {OurService} from "../../components/OurService/OurService.jsx";
import ApplianceRepairSection from "../../components/ApplianceRepairSection/ApplianceRepairSection.jsx";
import WhyChooseUs from "../../components/WhyChooseUs/WhyChooseUs.jsx";
import FeaturedProjects from "../../components/FeaturedProjects/FeaturedProjects.jsx";
import {Conclusion} from "../../components/Conclusion/Conclusion.jsx";
import MetaTags from "../../common/MetaTags.jsx";

const Home = () => {
    return (
        <>
            <MetaTags page="home" canonicalUrl="https://yourdomain.com/" />
            <main>
                <Slider/>
                <BringToLife/>
                <OurService/>
                <ApplianceRepairSection/>
                <WhyChooseUs/>
                <FeaturedProjects/>
                <Conclusion/>

            </main>
        </>
    );
};

export default Home;
