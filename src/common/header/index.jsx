import React, { useState, useEffect } from 'react';
import './header.scss';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css'; // Lazy load effect
import logo from '../../assets/logo/logo.webp'; // Existing import

// Icon Imports
import { PiHeartStraight } from "react-icons/pi";
import { GiHandTruck } from "react-icons/gi";
import { TfiSearch } from "react-icons/tfi";
import { SlUser } from "react-icons/sl";
import { HiMenu } from "react-icons/hi";
import { FaCaretDown } from 'react-icons/fa';
import { PiTranslate } from "react-icons/pi";

import categoryApi from '../../categoryApi/headermenu.json';
import { Link } from 'react-router-dom';
import { translateText } from '../../utils/translate.js'; // Import translate function
import { useLanguage } from '../../utils/LanguageContext.jsx'; // Import language context

const categories = categoryApi.categoryApi;

// Define a Map for language options
const languageOptions = new Map([
    ['en', 'English'],
    ['ar', 'العربية'],
    ['zh', '中文'],
    ['de', 'Deutsche'],
    ['hi', 'हिन्दी'],
    ['guj', 'ગુજરાતી']
]);

export default function Header({ isHomePage }) {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [languageDropdownOpen, setLanguageDropdownOpen] = useState(false); // New state for language dropdown
    const { selectedLanguage, changeLanguage } = useLanguage(); // Access global language state
    const [translatedCategories, setTranslatedCategories] = useState(categories);
    const [translatedLabels, setTranslatedLabels] = useState({
        translate: 'Translate',
        wishlist: 'Wishlist',
        cart: 'Cart',
        search: 'Search',
        account: 'Account',
    });

    // Open/Close navigation sidebar
    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    // Toggle category dropdown
    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    // Toggle language dropdown
    const toggleLanguageDropdown = () => {
        setLanguageDropdownOpen(!languageDropdownOpen);
    };

    // Handle scroll event for the home page
    useEffect(() => {
        if (isHomePage) {
            const handleScroll = () => {
                setIsScrolled(window.scrollY > 10);
            };
            window.addEventListener('scroll', handleScroll);

            return () => {
                window.removeEventListener('scroll', handleScroll);
            };
        }
    }, [isHomePage]);

    // Translate categories and labels when language changes
    useEffect(() => {
        const fetchTranslations = async () => {
            // Translate category names
            const translatedCategories = await Promise.all(categories.map(async (item) => ({
                ...item,
                category: await translateText(item.category, selectedLanguage),
            })));
            setTranslatedCategories(translatedCategories);

            // Translate labels
            const translatedLabels = {
                translate: await translateText('Translate', selectedLanguage),
                wishlist: await translateText('Wishlist', selectedLanguage),
                cart: await translateText('Cart', selectedLanguage),
                search: await translateText('Search', selectedLanguage),
                account: await translateText('Account', selectedLanguage),
            };
            setTranslatedLabels(translatedLabels);
        };

        fetchTranslations();
    }, [selectedLanguage]);

    return (
        <div className={`header ${isHomePage && isScrolled ? 'scrolled' : ''} ${isHomePage ? 'home-header' : ''}`}>
            {/* Side navigation */}
            <nav className={`sidenav ${isNavOpen ? 'open' : ''}`} aria-label="Side navigation">
                <button className="closebtn" onClick={toggleNav} aria-label="Close navigation">&times;</button>
                <Link className="menu-item" to="/" onClick={toggleNav}>Home</Link>
                <div className="menu-item category" onClick={toggleDropdown}>Category <FaCaretDown /></div>
                <div className={`dropdown-category ${dropdownOpen ? 'open' : ''}`}>
                    {translatedCategories.map((item, index) => (
                        <Link to={item.path} key={index} onClick={toggleNav}>{item.category}</Link>
                    ))}
                </div>
                <Link className="menu-item" to="/shop" onClick={toggleNav}>Shop</Link>
                <Link className="menu-item" to="/profile" onClick={toggleNav}>Profile</Link>
            </nav>

            {/* Main Header Section */}
            <div className="container">
                <header>
                    <Link to="/" className="logo">
                        <LazyLoadImage
                            src={logo}
                            alt="Company logo"
                            effect="blur"
                        />
                    </Link>

                    <div className="nav">
                        {translatedCategories.map((item, index) => (
                            <Link to={item.path} key={index}>{item.category}</Link>
                        ))}
                    </div>

                    <div className="icons">
                        <div className="icons-content" onClick={toggleLanguageDropdown}>
                            <PiTranslate className='icon translate' />
                            <p>{translatedLabels.translate}</p>
                            {languageDropdownOpen && (
                                <div className="language-dropdown">
                                    {[...languageOptions.entries()].map(([code, name]) => (
                                        <div
                                            key={code}
                                            className={`language-option ${selectedLanguage === code ? 'selected' : ''}`}
                                            onClick={() => changeLanguage(code)}
                                        >
                                            {name}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                        <div className="icons-content">
                            <PiHeartStraight className='icon heart' />
                            <p>{translatedLabels.wishlist}</p>
                        </div>
                        <div className="icons-content">
                            <GiHandTruck className='icon truck' />
                            <p>{translatedLabels.cart}</p>
                        </div>
                        <div className="icons-content">
                            <TfiSearch className='icon search' />
                            <p>{translatedLabels.search}</p>
                        </div>
                        <Link to="/signup" className="icons-content">
                            <SlUser className='icon user' />
                            <p>{translatedLabels.account}</p>
                        </Link>
                    </div>

                    <div onClick={toggleNav} className="menu">
                        <HiMenu className='icon menu' />
                    </div>
                </header>
            </div>
        </div>
    );
}
