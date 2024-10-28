import React from 'react';
import { FaInfoCircle } from 'react-icons/fa';

const NavBar = () => {
    return (
        <nav className="nav-bar">
            <ul className="nav-list">
                <li className="nav-item">Home</li>
                <li className="nav-item">Educational Toys</li>
                <li className="nav-item">Activity Toys</li>
                <li className="nav-item">Baby & Toddler</li>
                <li className="nav-item">Action Figures</li>
                <li className="nav-item">Who we are</li>
                <li className="nav-item need-help">
                    <FaInfoCircle className="icon" /> Need Help
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;
