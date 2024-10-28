import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';

const ageGroups = [
    {
        id: 1,
        label: '0-3 years',
        color: '#000',
        src: '/static/img/group/g1.png',
    },
    {
        id: 2,
        label: '4-5 years',
        color: '#FF69B4',
        src: '/static/img/group/g2.png',
    },
    {
        id: 3,
        label: '6-7 years',
        color: '#008000',
        src: '/static/img/group/g3.png',
    },
    {
        id: 4,
        label: '8-9 years',
        color: '#FF6347',
        src: '/static/img/group/g4.png',
    },
    {
        id: 5,
        label: '10-11 years',
        color: '#1E90FF',
        src: '/static/img/group/g5.png',
    },
    {
        id: 6,
        label: '12+ years',
        color: '#FFA500',
        src: '/static/img/group/g6.png',
    },
];

const ShopByAge = () => {
    const [visibleItems, setVisibleItems] = useState(ageGroups);

    useEffect(() => {
        const handleResize = () => {
            const isMobile = window.innerWidth <= 600;
            setVisibleItems(isMobile ? ageGroups.slice(0, 4) : ageGroups);
        };

        handleResize(); // Set initial state
        window.addEventListener('resize', handleResize); // Update on resize

        return () => {
            window.removeEventListener('resize', handleResize); // Clean up
        };
    }, []); // Empty dependency array means this runs once on mount and on resize

    return (
        <div className="shop-by-age">
            <div className="container-fluid">
                <div className="section-header">
                    <h2>Shop by Age</h2>
                    <p className='subtitle'>
                        Lorem ipsum dolor sit amet consectetur. Id fames there<br></br>
                        {/* <span className="second-line">are many vulputate eget dolor.</span> */}
                    </p>
                </div>

                <div className="ageGrid">
                    {visibleItems.map((item) => (
                        <Link href="/shop" key={item.id}>
                            <div key={item.id} className="ageItem">
                                <Image
                                    src={item.src}
                                    alt={item.label} // Adjust alt text
                                    width={150}
                                    height={150}
                                />
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ShopByAge;
