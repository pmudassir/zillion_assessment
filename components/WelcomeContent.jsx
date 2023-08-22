import React from 'react'
import './welcomecontent.css'

const WelcomeContent = () => {
    return (
        <section className="welcome">
            <div className="welcome-text">
                <h2>Welcome to Our Website</h2>
                <p>Discover amazing products and services...</p>
                <p>This is a very simple example for a home page</p>
            </div>
            <div className="welcome-image">
                <img src="https://images.unsplash.com/photo-1685450128423-6d095fe29832?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=928&q=80" alt="Welcome" />
            </div>
        </section>
    )
}

export default WelcomeContent
