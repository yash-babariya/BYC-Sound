import React from 'react';
import './productsHAE.scss';
import categoryApi from '../../../../categoryApi/categoryApi';
import { MdVerified } from "react-icons/md";
import { RiStarSFill } from "react-icons/ri";
import { Link } from 'react-router-dom';

export default function ProductsHeadphonesAndEarbuds() {
    const HAE_DATA = categoryApi[3].product[0].items;

    const showInfo = (id) => {
        localStorage.setItem('id', JSON.stringify(id));
    }

    return (
        <div className='products-headphones-and-earbuds'>
            <div className="container">
                <section>
                    <div className="carts">
                        {HAE_DATA.map((item) => (
                            <Link
                                to={'/productinfo'}
                                className="cart"
                                onClick={() => showInfo(item.id)}
                                key={item.id}
                            >
                                <div className="rating-and-review">
                                    <div className="rating">
                                        <RiStarSFill className='icon' />
                                        <p>{item.rating}</p>
                                    </div>
                                    <div className="review">
                                        <MdVerified className='icon' />
                                        <p>{item.review} reviews</p>
                                    </div>
                                </div>
                                <div className="img">
                                    <img
                                        src={item.headphoneImg[0]}
                                        alt={`Image of ${item.name}`}
                                    />
                                </div>
                                <div className="details">
                                    <div className="title">
                                        <h3>{item.name}</h3>
                                    </div>
                                    <div className="rate">
                                        <p>₹{item.discountprice}</p>
                                        <del>₹{item.price}</del>
                                        <span>{item.offer}</span>
                                    </div>
                                </div>
                                <div className="add-to-cart">
                                    <button>Add To Cart</button>
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
}
