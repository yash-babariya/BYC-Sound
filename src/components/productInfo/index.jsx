import React from 'react';
import Slider from 'react-slick';
import categoryApi from '../../categoryApi/categoryApi';
import './ProductInfo.scss'; // Import the SCSS file for styling

export default function ProductInfo() {
    const HAE_DATA = categoryApi[3].product[0].items;
    const id = localStorage.getItem('id');

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div className='product-info'>
            <div className="container">
                <section>
                    <div className="cart">
                        {
                            HAE_DATA.map((item) => {
                                if (item.id == id) {
                                    return (
                                        <div className="product-detail">
                                            <div className="img-slider">
                                                <Slider {...settings}>
                                                    {item.headphoneImg.map((img, index) => (
                                                        <div key={index} className="slide">
                                                            <img src={img} alt={`headphone img ${index + 1}`} />
                                                        </div>
                                                    ))}
                                                </Slider>
                                            </div>
                                            <div className="product-info-details">
                                                <h1>{item.name}</h1>
                                                <p>{item.desc}</p>
                                                <div className="rating">
                                                    <span>Rating: {item.rating}</span>
                                                    <span>Reviews: {item.review}</span>
                                                </div>
                                                <div className="price-info">
                                                    <span className="discount-price">₹{item.discountprice}</span>
                                                    <span className="mrp">₹{item.mrp}</span>
                                                    <span className="offer">{item.offer}</span>
                                                </div>
                                                <ul className="features">
                                                    {item.fature.map((feature, index) => (
                                                        <li key={index}>{feature}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    )
                                }
                                return null; // Added a return null to handle the case where no item matches
                            })
                        }
                    </div>
                </section>
            </div>
        </div>
    );
}
