// import React from 'react';
// import Image from 'next/image';

// const newsItems = [
//     {
//         id: 1,
//         title: 'Lorem Ipsum dolor sit amet construct quis',
//         date: '27 Dec, 2023',
//         category: 'Top Toys',
//         image: '/static/img/categories/images/fam.png',
//         author: 'Admin'
//     },
//     {
//         id: 2,
//         title: 'Lorem Ipsum dolor sit amet construct quis',
//         date: '21 Dec, 2023',
//         category: 'Family Fun',
//         image: '/static/img/categories/images/fam.png',
//         author: 'Admin'
//     },
//     {
//         id: 3,
//         title: 'Lorem Ipsum dolor sit amet construct quis',
//         date: '21 Dec, 2023',
//         category: 'Kids Activities',
//         image: '/static/img/categories/images/fam.png',
//         author: 'Admin'
//     },
//     {
//         id: 4,
//         title: 'Lorem Ipsum dolor sit amet construct quis',
//         date: '21 Dec, 2023',
//         category: 'Learn & Inspire',
//         image: '/static/img/categories/images/fam.png',
//         author: 'Admin'
//     },
// ];

// const LatestNews = () => {
//     return (
//         <div className="latestNews">
//             <h2>Latest News</h2>
//             <p>Lorem ipsum dolor sit amet consectetur. Id fames there are many vulputate eget dolor.</p>
//             <div className="newsGrid">
//                 {newsItems.map(item => (
//                     <div key={item.id} className="newsItem">
//                         <Image src={item.image} alt={item.title} width={300} height={230} />
//                         <h3>{item.title}</h3>
//                         <div className="newsMeta">
//                             <span>{item.date}</span> | <span>{item.category}</span>
//                         </div>
//                         <p>Lorem ipsum dolor sit amet construct.Quis vel nunc est aliquam luctus.</p>
//                         <div className="newsAuthor">
//                             <Image src="/static/img/categories/images/user.png" alt={item.author} width={30} height={30} />
//                             <span>Posted By: {item.author}</span>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default LatestNews;



import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import NextArrow from '~/components/elements/carousel/NextArrow';
import PrevArrow from '~/components/elements/carousel/PrevArrow';

const newsItems = [
    {
        id: 1,
        title: 'Lorem Ipsum dolor sit amet construct quis',
        date: '27 Dec, 2023',
        category: 'Top Toys',
        image: '/static/img/categories/images/fam.png',
        author: 'Admin'
    },
    {
        id: 2,
        title: 'Lorem Ipsum dolor sit amet construct quis',
        date: '21 Dec, 2023',
        category: 'Family Fun',
        image: '/static/img/categories/images/fam.png',
        author: 'Admin'
    },
    {
        id: 3,
        title: 'Lorem Ipsum dolor sit amet construct quis',
        date: '21 Dec, 2023',
        category: 'Kids Activities',
        image: '/static/img/categories/images/fam.png',
        author: 'Admin'
    },
    {
        id: 4,
        title: 'Lorem Ipsum dolor sit amet construct quis',
        date: '21 Dec, 2023',
        category: 'Learn & Inspire',
        image: '/static/img/categories/images/fam.png',
        author: 'Admin'
    },
    {
        id: 5,
        title: 'Lorem Ipsum dolor sit amet construct quis',
        date: '21 Dec, 2023',
        category: 'Learn & Inspire',
        image: '/static/img/categories/images/fam.png',
        author: 'Admin'
    },
];

const HomeDefaultBanner = () => {
    const [news, setNews] = useState([]);

    useEffect(() => {
        setNews(newsItems);
    }, []);

    const carouselSetting = {
        dots: true,
        infinite: true,
        speed: 750,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1024, // Laptop and monitor screens
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768, // Tablet screens
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 480, // Mobile screens
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            }
        ]
    };

    return (
        <div className="ps-carousel">
            <div className="latestNews">
                <h2>Latest News</h2>
                <p className='subtitle'>Lorem ipsum dolor sit amet consectetur. Id</p>
                <Slider {...carouselSetting} className="ps-carousel newsGrid">
                    {news.map(item => (
                        <div key={item.id} className="newsItem" style={{ width: 'unset' }}>
                            <Image src={item.image} alt={item.title} width={300} height={230} />
                            <h3>{item.title}</h3>
                            <div className="newsMeta">
                                <span className='newsMeta-item d-inline-flex align-items-center mr-4 p-3 border border-secondary' style={{ borderRadius: '5px' }}>
                                    <svg className='mr-2' width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_284_7842)">
                                            <path d="M12.1845 1.81799H10.5325V1.27199C10.5325 1.12266 10.4765 0.996656 10.3645 0.89399C10.2525 0.791323 10.1265 0.73999 9.98654 0.73999C9.84654 0.73999 9.72054 0.791323 9.60854 0.89399C9.49654 0.996656 9.44054 1.12266 9.44054 1.27199V1.81799H3.95254V1.27199C3.95254 1.13199 3.89887 1.00832 3.79154 0.90099C3.68421 0.793656 3.55354 0.73999 3.39954 0.73999C3.24554 0.73999 3.11487 0.78899 3.00754 0.88699C2.90021 0.98499 2.84654 1.11332 2.84654 1.27199V1.81799H1.19454C0.905206 1.81799 0.650872 1.92299 0.431539 2.13299C0.212206 2.34299 0.102539 2.59732 0.102539 2.89599V13.662C0.102539 13.9607 0.212206 14.215 0.431539 14.425C0.650872 14.635 0.905206 14.74 1.19454 14.74H12.1845C12.4925 14.74 12.7515 14.635 12.9615 14.425C13.1715 14.215 13.2765 13.9607 13.2765 13.662V2.89599C13.2765 2.59732 13.1715 2.34299 12.9615 2.13299C12.7515 1.92299 12.4925 1.81799 12.1845 1.81799ZM2.84654 2.89599V3.42799C2.84654 3.57732 2.90021 3.70566 3.00754 3.81299C3.11487 3.92032 3.24787 3.97399 3.40654 3.97399C3.56521 3.97399 3.69587 3.91799 3.79854 3.80599C3.90121 3.69399 3.95254 3.56799 3.95254 3.42799V2.89599H9.44054V3.42799C9.44054 3.57732 9.49421 3.70566 9.60154 3.81299C9.70887 3.92032 9.83721 3.97399 9.98654 3.97399C10.1359 3.97399 10.2642 3.92032 10.3715 3.81299C10.4789 3.70566 10.5325 3.57732 10.5325 3.42799V2.89599H12.1845V5.05199H1.19454V2.89599H2.84654ZM12.1845 13.662H1.19454V6.12999H12.1845V13.662Z" fill="#00BBAE" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_284_7842">
                                                <rect width="13.38" height="14" fill="white" transform="matrix(1 0 0 -1 0 14.74)" />
                                            </clipPath>
                                        </defs>
                                    </svg>

                                    <span>{item.date}</span>
                                </span>
                                <span className='newsMeta-item d-inline-flex align-items-center  p-3 border border-secondary' style={{ borderRadius: '5px' }}>
                                    <svg className='mr-2' width="15" height="11" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M13.0674 1.98999C13.7783 1.98999 14.3799 2.59155 14.3799 3.30249V9.42749C14.3799 10.1658 13.7783 10.74 13.0674 10.74H1.69238C0.954102 10.74 0.379883 10.1658 0.379883 9.42749V1.55249C0.379883 0.841553 0.954102 0.23999 1.69238 0.23999H5.68457C5.93066 0.23999 6.14941 0.349365 6.31348 0.513428L7.81738 1.98999H13.0674ZM13.0674 9.42749V3.30249H7.62598C7.37988 3.30249 7.16113 3.22046 6.99707 3.0564L5.52051 1.55249H1.69238V9.42749H13.0674Z" fill="#00BBAE" />
                                    </svg>
                                    <span> {item.category}</span>
                                </span>
                            </div>
                            <p>Lorem ipsum dolor sit amet construct.Quis vel nunc est aliquam luctus.</p>
                            <hr className='my-3' />
                            <div className="newsAuthor">
                                <Image src="/static/img/categories/images/user.png" alt={item.author} width={30} height={30} />
                                <span className='ml-3'>Posted By: {item.author}</span>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default HomeDefaultBanner;
