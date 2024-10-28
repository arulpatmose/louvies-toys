import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import NextArrow from '~/components/elements/carousel/NextArrow';
import PrevArrow from '~/components/elements/carousel/PrevArrow';
import Link from 'next/link';
import Menu from '~/components/elements/menu/Menu';
import menuData from '~/public/static/data/menu.json';

// Import the local images
import bannerImage1 from '~/public/static/img/banner/banner1.jpg';
import bannerImage2 from '~/public/static/img/banner/banner2.png';

const HomeDefaultBanner = ({ categories }) => {
    const [bannerItems, setBannerItems] = useState([]);

    useEffect(() => {
        // Set local images to state
        const localBanners = [
            { id: 1, image: bannerImage1 },
            { id: 2, image: bannerImage2 },
        ];
        setBannerItems(localBanners);
    }, []);

    const carouselSetting = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 750,
        fade: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };

    // Views
    let mainCarouselView;
    if (bannerItems.length > 0) {
        const carouseItems = bannerItems.map((item) => (
            <div className="slide-item" key={item.id}>
                <Link href="/shop">
                   <img src={item.image.src} alt="" style={{objectFit: 'cover'}} />
                </Link>

                {/* <div className="banner-overlay">
                    <div className="banner-overlay-content">
                        <div className="banner-text">
                            - THE BEST PLACE OF PLAY
                        </div>
                        <h1>Banner Heading</h1>
                        <p className="banner-description">
                            This is the banner description text.
                        </p>
                        <a className="ps-btn ps-btn--black" href="#">
                            SHOP NOW &nbsp;
                            <i className="fa-solid fa-arrow-right"></i>
                        </a>
                    </div>
                </div> */}
            </div>
        ));
        mainCarouselView = (
            <Slider {...carouselSetting} className="ps-carousel flex-fill">
                {carouseItems}
            </Slider>
        );
    }

    return (
        <div className="ps-home-banner ps-home-banner--1">
            <div className="ps-container">
                <div className="ps-section__left">
                    <div className="menu__content">
                        <Menu
                            source={menuData.product_categories}
                            className="menu--dropdown"
                            categories={categories}
                        />
                    </div>
                </div>
                <div className="ps-section__right d-flex flex-column">
                    <div className="nav-bar flex-1">
                        <ul>
                            <li>
                                <Link href={`/`}>
                                    <a>
                                        Home
                                    </a>
                                </Link>
                            </li>
                            {categories.slice(0,3).map((category) => (
                                <li key={category.id}>
                                    <Link href={`/category/${category.slug}`}>
                                        <a>
                                            {category.name}
                                        </a>
                                    </Link>
                                </li>
                            ))}
                            {/* <li>
                                <a>
                                    <i className="fas fa-info-circle"></i> Need
                                    Help
                                </a>
                            </li> */}
                        </ul>
                    </div>
                    {mainCarouselView}
                </div>
            </div>
        </div>
    );
};

export default HomeDefaultBanner;
