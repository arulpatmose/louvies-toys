import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import SkeletonProduct from '~/components/elements/skeletons/SkeletonProduct';
import { generateTempArray } from '~/utilities/common-helpers';
import ProductDealOfDay from '~/components/elements/products/ProductDealOfDay';
import '@fortawesome/fontawesome-free/css/all.css';
import ProductRepository from '~/repositories/ProductRepository';

// Mock products array
const mockProducts = [
    {
        id: 1,
        title: 'In publishing and graphic design, Lorem ipsum is ',
        price: '$2300',
        status: 'sold-out',
        discount: null,
        image: '/static/img/categories/images/d1.png',
        description:
            'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate',
        old_price: '$1,200',
    },
    {
        id: 2,
        title: 'In publishing and graphic design, Lorem ipsum is ',
        price: '$220',
        old_price: '$1,200',
        status: null,
        discount: null,
        image: '/static/img/categories/images/d2.png',
    },
    {
        id: 3,
        title: 'In publishing and graphic design, Lorem ipsum is ',
        price: '$150',
        status: null,
        discount: '19% OFF',
        image: '/static/img/categories/images/d3.png',
    },
    {
        id: 4,
        title: 'In publishing and graphic design, Lorem ipsum is ',
        price: '$1200',
        status: null,
        discount: null,
        image: '/static/img/categories/images/d4.png',
    },
    {
        id: 5,
        title: 'In publishing and graphic design, Lorem ipsum is ',
        price: '$800',
        old_price: '$1,200',
        status: 'HOT',
        discount: '32% OFF',
        image: '/static/img/categories/images/d5.png',
    },
    {
        id: 6,
        title: 'In publishing and graphic design, Lorem ipsum is ',
        price: '$400',
        status: null,
        discount: null,
        image: '/static/img/categories/images/d6.png',
    },
    {
        id: 7,
        title: 'In publishing and graphic design, Lorem ipsum is ',
        price: '$1000',
        discount: null,
        image: '/static/img/categories/images/d7.png',
    },
    {
        id: 8,
        title: 'In publishing and graphic design, Lorem ipsum is',
        old_price: '$1,200',
        price: '$500',
        status: null,
        discount: '15% OFF',
        image: '/static/img/categories/images/d8.png',
    },
    {
        id: 9,
        title: 'Product 9',
        price: '$600',
        status: 'HOT',
        discount: '15% OFF',
        image: '/static/img/categories/images/d9.png',
        description:
            'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate',
        old_price: '$1,200',
    },
];

const HomeDefaultProductListing = ({ collectionSlug, title }) => {
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState(mockProducts);
    const [category, setCategory] = useState(null);

    async function getCategry() {
        setLoading(true);
        const responseData = await ProductRepository.getProductsByCategory('Dolls');
        if (responseData) {
            setProducts(responseData);
            console.log("Dolls",responseData);
            setLoading(false);
        }
    }

    useEffect(() => {
        const updateProductsForScreenSize = () => {
            const isMobile = window.innerWidth <= 768;
            const updatedProducts = [...mockProducts];
            if (isMobile) {
                console.warn('mob');

                updatedProducts[0].featured = true;
                updatedProducts[updatedProducts.length - 1].featured = false;
            } else {
                console.warn('lap');

                updatedProducts[0].featured = false;
                updatedProducts[updatedProducts.length - 1].featured = true;
            }
            getCategry();
        };

        updateProductsForScreenSize();
        window.addEventListener('resize', updateProductsForScreenSize);

        return () => window.removeEventListener('resize', updateProductsForScreenSize);
    }, []);

    useEffect(() => {
        // Simulate a loading delay
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    }, [collectionSlug]);

    // Views
    let productItemsView;
    if (!loading) {
        productItemsView = products.map((item, index) => (
            <ProductDealOfDay product={item} key={item.id} index={index} />
        ));
    } else {
        const skeletons = generateTempArray(10).map((item) => (
            <div className="col-xl-2 col-lg-3 col-sm-3 col-6" key={item}>
                <SkeletonProduct />
            </div>
        ));
        productItemsView = <div className="row">{skeletons}</div>;
    }

    return (
        <div className="ps-product-list">
            <div className="ps-container">
                <div className="ps-section__header">
                    <h3>{title}</h3>
                    <div className="shop-now">
                        <Link href="/shop">
                            <a className="shop-now-button">
                                Shop Now &nbsp;{' '}
                                <i className="fa-solid fa-arrow-right"></i>{' '}
                            </a>
                        </Link>
                    </div>
                </div>
                <div className="grid-container">{productItemsView}</div>

                <div className="ps-section__footer">
                    <div className="shop-now">
                        <Link href="/shop">
                            <a className="shop-now-button">
                                Shop Now &nbsp;{' '}
                                <i className="fa-solid fa-arrow-right"></i>{' '}
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeDefaultProductListing;
