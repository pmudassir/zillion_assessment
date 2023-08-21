'use client'

import React, { useEffect } from 'react';
import Swiper from 'swiper';
// import 'swiper/css/swiper.min.css';
import './bodyslider.css'; // Import your CSS file

const BodySlider = () => {
    useEffect(() => {
        new Swiper('.body-slider', {
            // Swiper configuration
        });
    }, []);

    return (
        <section className="body-slider">
            <div className="swiper-wrapper">
                <div className="swiper-slide">
                    <img src="slider-image1.jpg" alt="Slide 1" />
                </div>
                <div className="swiper-slide">
                    <img src="slider-image2.jpg" alt="Slide 2" />
                </div>
                {/* Add more slides */}
            </div>
        </section>
    );
};

export default BodySlider;