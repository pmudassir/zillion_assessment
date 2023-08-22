import React from 'react';
import './mainmenu.css';

const MainMenu = () => {
    return (
        <nav className="main-menu">
            <ul className="menu-items">
                <li><a href="#">Home</a></li>
                <li><a href="#">About Us</a></li>
                <li className="mega-menu">
                    <a href="#">Products</a>
                    <div className="mega-content">
                        <div className="mega-column">
                            <h3>Categories</h3>
                            <ul>
                                <li><a href="#">Category 1</a></li>
                                <li><a href="#">Category 2</a></li>
                                <li><a href="#">Category 3</a></li>
                            </ul>
                        </div>
                        <div className="mega-column">
                            <h3>Brands</h3>
                            <ul>
                                <li><a href="#">Brand 1</a></li>
                                <li><a href="#">Brand 2</a></li>
                                <li><a href="#">Brand 3</a></li>
                            </ul>
                        </div>
                        <div className="mega-column">
                            <h3>Specials</h3>
                            <ul>
                                <li><a href="#">Deal 1</a></li>
                                <li><a href="#">Deal 2</a></li>
                                <li><a href="#">Deal 3</a></li>
                            </ul>
                        </div>
                    </div>
                </li>
                <li><a href="#">Contact Us</a></li>
            </ul>
        </nav>
    );
};

export default MainMenu;
