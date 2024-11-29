import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Define the Header component
export default function Header() {
    // State to control the visibility of the search bar on small screens
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div>
            <style>
                {`
                    /* Hide search input by default on smaller screens */
                    .search-bar input {
                        display: none;
                    }

                    /* Show search input on larger screens */
                    @media (min-width: 768px) {
                        .search-bar input {
                            display: block;
                        }
                    }

                    /* Show search icon on smaller screens */
                    @media (max-width: 768px) {
                        .search-bar input {
                            display: none;
                        }
                    }

                    /* Center links in the navbar */
                    .navbar-nav {
                        display: flex;
                        justify-content: center;
                        width: 100%;
                    }

                    .navbar-nav .nav-item {
                        margin: 0 10px;
                    }

                    /* Style for nav item when active or hovered */
                    .navbar-nav .nav-item:hover {
                        background-color: lightcoral; /* Change to desired color */
                        border-radius: 5px;
                    }

                    /* Style for active nav item */
                    .navbar-nav .nav-item.active {
                        background-color: coral; /* Change to desired color */
                        border-radius: 5px;
                    }

                    /* Adjust text color inside nav items to black */
                    .navbar-nav .nav-link {
                        color: black !important; /* Make sure the text color is black */
                    }

                    /* Background color change when the menu is open (mobile) */
                    .navbar-collapse {
                        background-color: ${isMenuOpen ? 'lightblue' : 'transparent'}; /* Change background color */
                    }
                `}
            </style>

            <nav className="navbar navbar-expand-lg pt-5 pb-5" style={{ color: "darkviolet", backgroundImage: "linear-gradient(to right, lightgreen , lightblue)" }}>
                <div className="container-fluid">
                    {/* Logo and Name */}
                    <div className="d-flex align-items-center" style={{ flex: 1 }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" className="bi bi-bank2 me-4" viewBox="0 0 16 16">
                            <path d="M8.277.084a.5.5 0 0 0-.554 0l-7.5 5A.5.5 0 0 0 .5 6h1.875v7H1.5a.5.5 0 0 0 0 1h13a.5.5 0 1 0 0-1h-.875V6H15.5a.5.5 0 0 0 .277-.916zM12.375 6v7h-1.25V6zm-2.5 0v7h-1.25V6zm-2.5 0v7h-1.25V6zm-2.5 0v7h-1.25V6zM8 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2" />
                        </svg>
                        <Link className="navbar-brand" to="/">
                            <h4 className="m-0" style={{ fontSize: '24px' }}>GADA ELECTRONICS</h4>
                        </Link>
                    </div>

                    {/* Search Form (visible on larger screens only) */}
                    <div className="d-flex w-50 search-bar" style={{ flex: 1, justifyContent: 'center' }}>
                        <input className="form-control me-2" type="search" placeholder="Search for Products" aria-label="Search" />
                    </div>

                    {/* Navbar Links */}
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" onClick={toggleMenu}>
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active me-5 mx-2" aria-current="page" to="/login" style={{ fontSize: '18px' }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" className="bi bi-person-circle me-2" viewBox="0 0 16 16">
                                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                                        <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
                                    </svg>
                                    <h4 style={{ fontSize: '18px' }}>Login</h4>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active me-5 mx-2" to="/cart" style={{ fontSize: '18px' }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" className="bi bi-cart me-2" viewBox="0 0 16 16">
                                        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-7 0h-2v3h2z" />
                                    </svg>
                                    <h4 style={{ fontSize: '18px' }}>Cart</h4>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active mx-2" to="/seller" style={{ fontSize: '18px' }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" className="bi bi-shop me-2" viewBox="0 0 16 16">
                                        <path d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.37 2.37 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.25 6.124a2.375 2.375 0 0 1-4.25-1.458v-.255a1.5 1.5 0 0 1 .61-.918L2.97 1.35z" />
                                    </svg>
                                    <h4 style={{ fontSize: '18px' }}>Seller</h4>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}
