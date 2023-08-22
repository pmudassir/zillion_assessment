'use client'
import React, { useEffect, useState } from 'react';
import './bodyslider.css'; // Import your CSS file

const BodySlider = () => {

    const [activeSlide, setActiveSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveSlide((prevSlide) => (prevSlide + 1) % 3);
        }, 5000); // Change slide every 5 seconds

        return () => clearInterval(interval); // Clear interval on unmount
    }, []);

    const slideContainerStyle = {
        display: 'flex',
        width: '300%', // Display three slides in a row
        transition: 'transform 0.5s ease-in-out', // Add smooth transition
        marginLeft: `-${activeSlide * 100}%`, // Adjust the slide position
    };

    return (
        <section className="banner">
            <div style={slideContainerStyle}>
                <div className="slide">
                    <img src="https://images.unsplash.com/photo-1690957388018-f7f45098f659?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" alt="Slide 1" />
                </div>
                <div className="slide">
                    <img src="https://images.unsplash.com/photo-1689894755862-730f4be37a6d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1742&q=80" alt="Slide 2" />
                </div>
                <div className="slide">
                    <img src="https://images.unsplash.com/photo-1688827493901-a32c102b5075?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1746&q=80" alt="Slide 3" />
                </div>
            </div>
        </section>
    );
};

export default BodySlider;