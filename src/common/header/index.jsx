import React, { useState } from 'react';
import './header.scss';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css'; // Add an effect for better UX

import logo from '../../assets/logo/logo.webp'; // Existing import
import { PiHeartStraight } from "react-icons/pi";
import { GiHandTruck } from "react-icons/gi";
import { TfiSearch } from "react-icons/tfi";
import { SlUser } from "react-icons/sl";
import categoryApi from '../../categoryApi/categoryApi';
import { HiMenu } from "react-icons/hi";
import { Link } from 'react-router-dom';
import { FaCaretDown } from 'react-icons/fa';

const categories = categoryApi;

export default function Header() {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const openNav = () => {
        setIsNavOpen(true);
    };

    const closeNav = () => {
        setIsNavOpen(false);
    };

    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    return (
        <div className="header">
            <div className={`sidenav ${isNavOpen ? 'open' : ''}`}>
                <div className="closebtn" onClick={closeNav}>&times;</div>
                <Link className="menu-item" to={"/"}>Home</Link>
                <div className='menu-item category' onClick={toggleDropdown}>Category<FaCaretDown /></div>
                <div className={`dropdown-category ${dropdownOpen ? 'open' : ''}`}>
                    {categories.map((item, index) => (
                        <Link to={item.path} key={index} onClick={closeNav}>{item.category}</Link>
                    ))}
                </div>
                <Link className="menu-item" to={"/shop"} onClick={closeNav}>Shop</Link>
                <Link className="menu-item" to={"/profile"} onClick={closeNav}>Profile</Link>
            </div>
            <div className="container">
                <header>
                    <Link to="/" className="logo">
                        <LazyLoadImage
                            src={logo}
                            alt="Company logo"
                            effect="blur" // You can also use 'opacity' or 'black-and-white'
                        />
                    </Link>
                    <div className="nav">
                        {categories.map((item, index) => (
                            <Link to={item.path} key={index}>{item.category}</Link>
                        ))}
                    </div>
                    <div className="icons">
                        <div className="icons-content">
                            <PiHeartStraight className='icon heart' />
                            <p>Wishlist</p>
                        </div>
                        <div className="icons-content">
                            <GiHandTruck className='icon truck' />
                            <p>Cart</p>
                        </div>
                        <div className="icons-content">
                            <TfiSearch className='icon search' />
                            <p>Search</p>
                        </div>
                        <Link to="/signup" className="icons-content">
                            <SlUser className='icon user' />
                            <p>Account</p>
                        </Link>
                    </div>
                    <div onClick={openNav} className="menu">
                        <HiMenu className='icon menu' />
                    </div>
                </header>
            </div>
        </div>
    );
}
