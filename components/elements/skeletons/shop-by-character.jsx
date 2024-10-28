// import React, { useState } from 'react';

// const mockCharacters = [
//     { id: 1, name: 'Lorem Ipsum', image: '/static/img/categories/images/c1.png' },
//     { id: 2, name: 'Lorem Ipsum', image: '/static/img/categories/images/c2.png' },
//     { id: 3, name: 'Lorem Ipsum', image: '/static/img/categories/images/c3.png' },
//     { id: 4, name: 'Lorem Ipsum', image: '/static/img/categories/images/c4.png' },
// ];

// const ShopByCharacter = () => {
//     const [currentCharacterIndex, setCurrentCharacterIndex] = useState(0);

//     const prevCharacter = () => {
//         setCurrentCharacterIndex((prevIndex) => (prevIndex === 0 ? mockCharacters.length - 1 : prevIndex - 1));
//     };

//     const nextCharacter = () => {
//         setCurrentCharacterIndex((prevIndex) => (prevIndex === mockCharacters.length - 1 ? 0 : prevIndex + 1));
//     };

//     return (
//         <div className="shop-by-character">
//             <div className="container">
//                 <div className="section-header">
//                     <h2>Shop by Character</h2>
//                     <p>Lorem ipsum dolor sit amet consectetur. Id fames there are many vulputate eget dolor.</p>
//                 </div>
//                 <div className="character-grid-wrapper">
//                     <button className="nav-button prev" onClick={prevCharacter}></button>
//                     <div className="character-grid">
//                         {mockCharacters.map((character, index) => (
//                             <div className="character-card-wrapper" key={character.id}>
//                                 <div className={`character-card ${index === currentCharacterIndex ? 'active' : ''}`}>
//                                     <img src={character.image} alt={character.name} />
//                                 </div>
//                                 <p className="character-name">{character.name}</p>
//                             </div>
//                         ))}
//                     </div>
//                     <button className="nav-button next" onClick={nextCharacter}></button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ShopByCharacter;

import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import NextArrow from '~/components/elements/arrow/NextArrow';
import PrevArrow from '~/components/elements/arrow/PrevArrow';
import Link from 'next/link';

// Sample category data
const categories = [
    { id: 1, img: '/static/img/categories/1.png', label: 'Dolls' },
    { id: 2, img: '/static/img/categories/2.png', label: 'Educational Toy' },
    { id: 3, img: '/static/img/categories/3.png', label: 'Puzzle' },
    { id: 4, img: '/static/img/categories/4.png', label: 'Indoor Play' },
    { id: 6, img: '/static/img/categories/6.png', label: 'Outdoor Toy' },
    { id: 7, img: '/static/img/categories/7.png', label: 'Rockers & Rides' },
    { id: 8, img: '/static/img/categories/8.png', label: 'Toy Figure' },
    { id: 9, img: '/static/img/categories/1.png', label: 'Dolls' },
    { id: 10, img: '/static/img/categories/2.png', label: 'Educational Toy' },
    { id: 11, img: '/static/img/categories/3.png', label: 'Puzzle' },
    { id: 12, img: '/static/img/categories/4.png', label: 'Indoor Play' },
];

const HomeDefaultTopCategories = () => {
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
        <div className="shop-by-character">
            <div className="container-fluid">
                <div className="section-header">
                    <h2>Shop by Character</h2>
                    <p className='subtitle'>
                        Lorem ipsum dolor sit amet consectetur. Id fames there<br></br>
                        {/* <span className="second-line">are many vulputate eget dolor.</span> */}
                    </p>

                </div>

                <Slider {...carouselSettings} className="ps-carousel">
                    {categories.map((character) => (
                        <Link href="/shop" key={character.id}>
                            <div className="character-grid-wrapper">
                                <div className="character-grid">
                                    <div
                                        className="character-card-wrapper"
                                        key={character.id}>
                                        <div className={`character-card`}>
                                            <img
                                                src={character.img}
                                                alt={character.name}
                                            />
                                        </div>
                                        <p className="character-name">
                                            {character.name}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default HomeDefaultTopCategories;
