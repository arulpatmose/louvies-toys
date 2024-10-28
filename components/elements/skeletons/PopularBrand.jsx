import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import NextArrow from '~/components/elements/carousel/NextArrow'; // Adjust path as needed
import PrevArrow from '~/components/elements/carousel/PrevArrow'; // Adjust path as needed

const brands = [
    { id: 1, src: '/static/img/brand/b1.png', alt: 'Kids Party' },
    { id: 2, src: '/static/img/brand/b2.png', alt: 'Kids Zone' },
    { id: 3, src: '/static/img/brand/b3.png', alt: 'Kidz Play the World' },
    { id: 4, src: '/static/img/brand/b4.png', alt: 'Game Room' },
    { id: 5, src: '/static/img/brand/b5.png', alt: 'Game Room' },
    { id: 6, src: '/static/img/brand/b1.png', alt: 'Kids Children Play' },
];

const PopularBrand = () => {
    const carouselSetting = {
        dots: true,
        infinite: true,
        speed: 750,
        slidesToShow: 6, // Show 2 items at a time
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1024, // Desktop screens
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 0,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 768, // Tablet screens
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 480, // Mobile screens
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true,
                },
            },
        ],
    };

    return (
        <div className="popularBrand">
            <h2>Popular Brands</h2>
            <p className='subtitle'>
                Lorem ipsum dolor sit amet consectetur. Id fames there<br></br>
                {/* are many vulputate eget dolor */}
            </p>
            <Slider {...carouselSetting} className="brandSlider">
                {brands.map((brand) => (
                    <div key={brand.id} className="brandItem">
                        <Image
                            src={brand.src}
                            alt={brand.alt}
                            width={150}
                            height={150}
                        />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default PopularBrand;
