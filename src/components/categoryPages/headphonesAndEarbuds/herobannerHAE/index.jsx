import React from 'react';
import './herobannerHAE.scss';
import HerobannerHAEImg from '../../../../assets/images/hero-HAE.png';
import HerobannerMDHAEImg from '../../../../assets/images/heroMD-HAE.png';

export default function HerobannerHAE() {
    return (
        <div className='herobannerHAE'>
            <section>
                <div className="banner">
                    <picture class="banner-picture">
                        <source media="(max-width: 900px)" srcset={HerobannerMDHAEImg} />
                        <source media="(min-width: 901px)" srcset={HerobannerHAEImg} />
                        <img alt="null" src={HerobannerHAEImg} loading="lazy" />
                    </picture>
                </div>
            </section>
        </div>
    )
}
