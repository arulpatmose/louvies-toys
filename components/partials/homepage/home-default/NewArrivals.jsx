import React, { useEffect, useState } from 'react';
import ProductRepository from '~/repositories/ProductRepository';
import Link from 'next/link';
import Rating from '~/components/elements/Rating';
import ProductDealOfDay from '~/components/elements/products/ProductDealOfDay';
import FeaturedProduct from '~/components/elements/products/FeaturedProduct';

const productData = [
    {
        id: 1,
        title: 'Product 1',
        price: '$70',
        status: 'hot',
        discount: null,
        rating: true,

        image: '/static/img/categories/images/d1.png',
    },
    {
        id: 2,
        title: 'Product 2',
        price: '$2300',
        status: null,
        discount: null,
        rating: true,

        image: '/static/img/categories/images/d2.png',
    },
    {
        id: 3,
        title: 'Product 3',
        price: '$360',
        status: null,
        rating: true,

        image: '/static/img/categories/images/d3.png',
    },
    {
        id: 4,
        title: 'Product 4',
        price: '$80',
        rating: true,

        image: '/static/img/categories/images/d4.png',
    },
    {
        id: 5,
        title: 'Product 5',
        price: '$1200',
        status: null,
        discount: null,
        rating: true,

        image: '/static/img/categories/images/d5.png',
    },
    {
        id: 6,
        title: 'Product 6',
        price: '$800',
        rating: true,

        status: 'sale',
        image: '/static/img/categories/images/d6.png',
    },
    {
        id: 7,
        title: 'Product 7',
        price: '$150',
        status: 'hot',
        rating: true,

        image: '/static/img/categories/images/d7.png',
    },
    {
        id: 8,
        title: 'Product 8',
        price: '$250',
        status: null,
        rating: true,

        image: '/static/img/categories/images/d8.png',
    },
];

const NewArrivals = ({ collectionSlug }) => {
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState(productData);

    async function getProducts() {
        setLoading(true);
        const responseData = await ProductRepository.getProductsByNewArrival();
        if (responseData) {
            setProducts(responseData);
            setLoading(false);
        }
    }

    useEffect(() => {
        getProducts();
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    }, [collectionSlug]);


    // Determine how many items to display based on screen width
    const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;
    const displayedItems = isMobile ? products.slice(0, 3) : products;

    return (
        <div className="ps-product-list ps-new-arrivals">
            <div className="ps-container">
                <div className="row">
                    {/* Discount Banner Section */}
                    <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12 discount-banner">
                        <div className="discount-content">
                            <div className="top">
                                <h3>Toys Lorem Ipsum</h3>
                                <h2>32% Discount</h2>
                                <p>For all Toys Products</p>
                                <p>Offers ends in:</p>
                                <p>ENDS OF CHRISTMAS</p>
                                <button className="shop-now-btn">
                                    SHOP NOW
                                </button>
                            </div>
                            <img
                                src={'/static/img/categories/images/d3.png'}
                                alt=""
                            />
                        </div>
                    </div>
                    {/* New Arrivals Section */}
                    <div className="col-xl-9 col-lg-8 col-md-8 col-sm-6 col-12">
                        <div className="ps-section__header">
                            <h3>New Products</h3>
                            <ul className="ps-section__links">
                                <li>
                                    <Link href="/shop">
                                        <a>All Product</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/shop">
                                        <a>Teddies</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/shop">
                                        <a>Carts</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/shop">
                                        <a>Blocks</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/shop?category=health-and-beauty">
                                        <a>Ball</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/shop">
                                        <a>Browse All Product →</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="ps-section__content">
                            <div className="new-products-grid">
                                {displayedItems.map((item) => (
                                    <FeaturedProduct
                                        product={item}
                                        key={item.id}
                                        index={item.id}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewArrivals;
