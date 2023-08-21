import React from 'react'
import './mainmenu.css'

const MainMenu = () => {
    return (
        <nav className="main-menu">
            <ul className="menu-items">
                <li><a href="#">Home</a></li>
                <li><a href="#">About Us</a></li>
                <li className="mega-menu">
                    <a href="#">Products</a>
                    <div className="mega-content">
                        {/* Mega menu content */}
                    </div>
                </li>
                <li><a href="#">Contact Us</a></li>
            </ul>
        </nav>
    )
}

export default MainMenu