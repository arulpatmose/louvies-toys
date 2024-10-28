import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import '@fortawesome/fontawesome-free/css/all.css';

const AboutUs = () => {
    return (
        <div className="aboutUs">
            <div className="textSection">
                <h4>About Us</h4>
                <h1>Lorem Ipsum Dolar Sumit Lorem</h1>
                <p className="description">
                    Louvie's Toys is a premier online destination for quality
                    toys and games, catering to children of all ages. Founded in
                    2024 in the vibrant market of the UAE, our shop brings joy
                    and creativity to families across the region. With a
                    carefully curated selection of toys from trusted brands, we
                    strive to provide an unparalleled shopping experience,
                    combining convenience with exceptional customer service. As
                    we continue to grow, our commitment to delivering happiness
                    through play remains unwavering.
                </p>
                <p className="mission">
                    <h4>Mission</h4>
                    <span>
                        To spark imagination, foster learning, and create
                        unforgettable moments through the power of play.
                    </span>
                </p>
                <a className="ps-btn ps-btn--black" href="#">
                    SHOP NOW &nbsp;
                    <i className="fa-solid fa-arrow-right"></i>
                </a>
            </div>
            <div className="imageSection">
                <img src="/static/img/categories/images/r1.png" alt="Robot" />
            </div>
        </div>
    );
};

export default AboutUs;
