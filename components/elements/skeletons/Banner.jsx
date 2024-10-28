import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Banner = () => {
    return (
        <div className="banner1">
            <div className="bannerText">
                <span className="discount">SAVE UP TO $200.00</span>
                <h1>Lorem Ipsum Dolar</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                <Link href="/shop">
                    <a className="shopNowButton">Shop Now &#8594;</a>
                </Link>
            </div>
            <div className="bannerImage">
                <Image 
                    src="/static/img/categories/images/d1.png" 
                    alt="Banner Image" 
                    width={600} 
                    height={400} 
                />
                <div className="priceTag">$1999</div>
            </div>
        </div>
    );
};

export default Banner;
