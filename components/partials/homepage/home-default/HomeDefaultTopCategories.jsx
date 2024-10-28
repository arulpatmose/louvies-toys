import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import NextArrow from '~/components/elements/arrow/NextArrow';
import PrevArrow from '~/components/elements/arrow/PrevArrow';
import Link from 'next/link';


const HomeDefaultTopCategories = ({categories}) => {
    
    console.log("categories",categories)
    const carouselSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className="ps-top-categories">
            <div className="ps-container">
                <h3>Shop with Category</h3>
                <Slider {...carouselSettings} className="ps-carousel">
                    {categories.map((category) => (
                        <div className="ps-block--category" key={category.id}>
                            <Link href={`/category/${category.slug}`}>
                                <a className="ps-block__overlay"></a>
                            </Link>
                            <img
                                src={category.image ? category.image.src : 'https://jkfenner.com/wp-content/uploads/2019/11/default.jpg'}
                                alt="louvie"
                                width={180}
                                height={180}
                            />
                            <p>{category.name}</p>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default HomeDefaultTopCategories;



