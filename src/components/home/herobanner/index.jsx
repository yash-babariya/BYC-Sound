import React from 'react';
import './herobanner.scss';

export default function Herobanner() {
    return (
        <header className="hero-banner" role="banner" aria-label="The Sound Supply Brand Days Promotion">
            <div className="container">
                <section>
                    <article className="content">
                        <h1><span>The Sound Supply</span> Brand Days</h1>
                        <p>Up to 50% Off on Your Favourite Products. Bestsellers</p>
                        <div className="shop-now-btn">
                            <button aria-label="Shop Now Button">Shop Now</button>
                        </div>
                    </article>
                </section>
            </div>
        </header>
    );
}
