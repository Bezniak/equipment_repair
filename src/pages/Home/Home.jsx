import React from 'react';
import {Slider} from "../../components/Slider/Slider.jsx";
import {BringToLife} from "../../components/BringToLife/BringToLife.jsx";
import {OurService} from "../../components/OurService/OurService.jsx";

const Home = () => {
    return (
        <>
            <main>
                <Slider/>
                <BringToLife/>
                <OurService/>
            </main>
        </>
    );
};

export default Home;
