import React from 'react'
import './banner.css';

const Banner = () => {
    return (
        <section className="banner">
            <div className="slide">
                <img src="banner1.jpg" alt="Slide 1" />
            </div>
            <div className="slide">
                <img src="banner2.jpg" alt="Slide 2" />
            </div>
            {/* Add more slides */}
        </section>
    )
}

export default Banner
