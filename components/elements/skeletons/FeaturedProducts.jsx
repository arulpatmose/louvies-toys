import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const featuredProducts = [
    {
        id: 1,
        title: 'Lorem ipsum dolor sit amet  ipsum dolor sit',
        description:
            'Lorem ipsum dolor sit Lorem ipsum dolor sit amet, consectetur adipiscing',
        image: '/static/img/categories/images/d14.png',
        status: 'New Coming',
        price: null,
    },
    {
        id: 2,
        title: 'Lorem ipsum dolor sit amet  ipsum dolor sit',
        description:
            'Lorem ipsum dolor sit Lorem ipsum dolor sit amet, consectetur adipiscing',
        image: '/static/img/categories/images/d13.png',
        status: 'New Coming',
        price: '$590',
    },
];

const FeaturedProducts = () => {
    return (
        <div className="featuredProducts">
            {featuredProducts.map((product) => (
                <div className="productCard" key={product.id}>
                    <div className="productContent">
                        <span className="productStatus">{product.status}</span>
                        <h3>{product.title}</h3>
                        <p>{product.description}</p>

                        <a
                            className={`ps-btn ps-btn--black ${
                                product.id == 2 ? 'ps-btn-white--outline' : ''
                            }`}
                            href="#">
                            SHOP NOW &nbsp;
                            <i className="fa-solid fa-arrow-right"></i>
                        </a>
                        {/* <Link href="/shop">
                        <a className="shopNowButton">Shop Now <i className="icon-chevron-right"></i> </a>
                       
                        </Link> */}
                    </div>
                    <div className="productImage">
                        <Image
                            src={product.image}
                            alt={product.title}
                            width={200}
                            height={200}
                        />
                        {product.price && (
                            <span className="productPrice">
                                {product.price}
                            </span>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default FeaturedProducts;
