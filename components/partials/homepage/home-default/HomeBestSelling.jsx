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
        title: 'In publishing ',
        price: '$2300',
        status: 'sold-out',
        discount: null,
        feature: true,
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
        image: '/static/img/categories/images/d9.png',
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
        image: '/static/img/categories/images/d2.png',
        feature: false,
        description:
            'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate',
        old_price: '$1,200',
    },
];

const HomeBestSellingProductListing = ({ collectionSlug, title }) => {
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState(mockProducts);

    async function getProducts() {
        setLoading(true);
        const responseData = await ProductRepository.getProductsByBestSelling();
        if (responseData) {
            setProducts(responseData);
            console.log("Dolls",responseData);
            setLoading(false);
        }
    }

    useEffect(() => {
        getProducts();
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

        // productItemsView = mockProducts.map((item) => (
        //     <ProductDealOfDay product={item} key={item.id} />
        // ));
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
                <div className="grid-container__best_selling">
                    {/* <div className="ps-section__content"> */}
                    {productItemsView}
                </div>

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

export default HomeBestSellingProductListing;
