import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const bestSellingProducts = [
    {
        id: 1,
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        image: '/static/img/categories/images/d1.png',
        status: '32% OFF',
        price: '$442.12',
        originalPrice: '$665.99',
    },
    {
        id: 2,
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        image: '/static/img/categories/images/d2.png',
        status: 'SOLD OUT',
        price: '$2,300',
    },
    {
        id: 3,
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        image: '/static/img/categories/images/d3.png',
        status: '19% OFF',
        price: '$1.50',
        originalPrice: '$865',
    },
    {
        id: 4,
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        image: '/static/img/categories/images/d4.png',
        status: '',
        price: '$1,200',
    },
    {
        id: 5,
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        image: '/static/img/categories/images/d5.png',
        status: '',
        price: '$1,200',
    },
    {
        id: 6,
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        image: '/static/img/categories/images/d6.png',
        status: 'HOT',
        price: '$1,200',
    },
    {
        id: 7,
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        image: '/static/img/categories/images/d7.png',
        status: 'HOT',
        price: '$1,200',
    },
    {
        id: 8,
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        image: '/static/img/categories/images/d8.png',
        status: 'HOT',
        price: '$1,200',
    },
];

const bannerProduct = {
    title: 'Teddy Bear Toys',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    image: '/static/img/categories/images/c1.png',
    price: '$1999',
};

const ToyStore = () => {
    return (
        <div className="toyStore">
            <div className="header">
                <h1>Best Selling Products</h1>
            </div>
            <div className="productGrid">
                {bestSellingProducts.map((product) => (
                    <div className="productCard2" key={product.id}>
                        {product.status && <span className={`status ${product.status === 'SOLD OUT' ? 'soldOut' : ''}`}>{product.status}</span>}
                        <div className="product-thumbnail">
                            <Image src={product.image} alt={product.title} width={200} height={200} />
                            <div className="product-hover-icons">
                                <button className="hover-icon"><i className="fas fa-shopping-cart"></i></button>
                                <button className="hover-icon"><i className="fas fa-list-alt"></i></button>
                                <button className="hover-icon"><i className="fas fa-eye"></i></button>
                            </div>
                        </div>
                        <h3>{product.title}</h3>
                        <p className="price">{product.price}</p>
                        {product.originalPrice && <p className="originalPrice">{product.originalPrice}</p>}
                    </div>
                ))}
            </div>
            <div className="banner">
                <div className="banner-content">
                    <span className="discount">SAVE UP TO $200.00</span>
                    <h2>{bannerProduct.title}</h2>
                    <p>{bannerProduct.description}</p>
                    <Link href="/shop">
                    <a className="shopNowButton">Shop Now 🡆</a>
                    </Link>
                </div>
                <div className="banner-image">
                    <Image src={bannerProduct.image} alt={bannerProduct.title} width={400} height={400} />
                    <div className="priceTag">{bannerProduct.price}</div>
                </div>
            </div>
        </div>
    );
};

export default ToyStore;
