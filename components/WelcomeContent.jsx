import React from 'react'
import './welcomecontent.css'

const WelcomeContent = () => {
    return (
        <section className="welcome">
            <div className="welcome-text">
                <h2>Welcome to Our Website</h2>
                <p>Discover amazing products and services...</p>
            </div>
            <div className="welcome-image">
                <img src="welcome-image.jpg" alt="Welcome" />
            </div>
        </section>
    )
}

export default WelcomeContent
