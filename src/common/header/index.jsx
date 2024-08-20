import React from 'react';
import './header.scss';
import logo from '../../assets/logo/logo.webp'
import { PiHeartStraight } from "react-icons/pi";
import { GiHandTruck } from "react-icons/gi";
import { TfiSearch } from "react-icons/tfi";
import { SlUser } from "react-icons/sl";
import categoryApi from '../../categoryApi/categoryApi';
import { HiMenu } from "react-icons/hi";
import { Link } from 'react-router-dom';

const catogories = categoryApi;

export default function Header() {
    return (
        <div className="header">
            <div className="container">
                <header>
                    <Link to="/" className="logo">
                        <img src={logo} alt="A compnay logo" />
                    </Link>
                    <div className="nav">
                        {
                            catogories.map((item, index) => {
                                return (
                                    <Link to={item.path} key={index} href={item.category}>{item.category}</Link>
                                )
                            })
                        }
                    </div>
                    <div className="icons ">
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
                    <div className="menu">
                        <HiMenu className='icon menu' />
                    </div>
                </header>
            </div >
        </div >
    )
}
