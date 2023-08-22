'use client'
import React, { useState, useEffect } from 'react';
import './banner.css';

const Banner = () => {
    const [activeSlide, setActiveSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveSlide((prevSlide) => (prevSlide + 1) % 3);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    const slideContainerStyle = {
        display: 'flex',
        width: '300%',
        transition: 'transform 0.5s ease-in-out',
        marginLeft: `-${activeSlide * 100}%`,
    };

    return (
        <section className="banner">
            <div style={slideContainerStyle}>
                <div className="slide">
                    <img src="https://images.unsplash.com/photo-1674981208693-de5a9c4c4f44?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2898&q=80" alt="Slide 1" />
                </div>
                <div className="slide">
                    <img src="https://images.unsplash.com/photo-1678524493115-cc22b4789d24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1837&q=80" alt="Slide 2" />
                </div>
                <div className="slide">
                    <img src="https://images.unsplash.com/photo-1690547228131-086694146b42?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" alt="Slide 3" />
                </div>
            </div>
        </section>
    );
};

export default Banner;
