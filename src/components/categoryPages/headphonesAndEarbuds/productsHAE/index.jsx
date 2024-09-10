import React from 'react';
import './productsHAE.scss';
import categoryApi from '../../../../categoryApi/categoryApi';
import { MdVerified } from "react-icons/md";
import { RiStarSFill } from "react-icons/ri";

export default function ProductsHeadphonesAndEarbuds() {

    const HAE_DATA = categoryApi[3].product[0].items
    console.log(HAE_DATA)

    return (
        <div className='products-headphones-and-earbuds'>
            <div className="container">
                <section>
                    <div className="carts">
                        {
                            HAE_DATA.map((item) => {
                                return (
                                    <div className="cart" key={item.id}>
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
                                            <img src={item.headphoneImg[0]} alt="headphone img" />
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
                                    </div>
                                )
                            })
                        }
                    </div>
                </section>
            </div>
        </div>
    )
}
