import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
const featuredProductSingle = [
    {
        id: 1,
        title: 'Teddy Bear Toy',
        description:
            'Lorem ipsum dolor sit Lorem ipsum dolor sit amet, consectetur adipiscing',
        image: '/static/img/categories/images/d1.png',
        status: 'SAVE UP TO $200.00',
        price: null,
    },
];

const FeaturedProductSingle = () => {
    return (
        <div className="featuredProductSingle">
            {featuredProductSingle.map((product) => (
                <div className="productCard" key={product.id}>
                    <div className="productContent">
                        <span className="productStatus">{product.status}</span>
                        <h2>{product.title}</h2>
                        <p className='description'>{product.description}</p>

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
                        {/* <Image
                            src={product.image}
                            alt={product.title}
                            width={200}
                            height={200}
                        /> */}
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

export default FeaturedProductSingle;
