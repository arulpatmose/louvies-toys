import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import SkeletonProduct from '~/components/elements/skeletons/SkeletonProduct';
import { generateTempArray } from '~/utilities/common-helpers';
import ProductDealOfDay from '~/components/elements/products/ProductDealOfDay';
import '@fortawesome/fontawesome-free/css/all.css';
import ProductRepository from '~/repositories/ProductRepository';
import FeaturedProduct from '~/components/elements/products/FeaturedProduct';

const FeaturedListTen = ({ collectionSlug, title }) => {
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);

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
            <FeaturedProduct product={item} key={item.id} index={index} />
        ));

        // productItemsView = mockProducts.map((item) => (
        //     <ProductDealOfDay product={item} key={item.id} />
        // ));
    }else {
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
                    <h3>Similar Products</h3>
                    <div className="shop-now">
                        <Link href="/shop">
                            <a className="shop-now-button">
                                Shop Now &nbsp;{' '}
                                <i className="fa-solid fa-arrow-right"></i>{' '}
                            </a>
                        </Link>
                    </div>
                </div>

                <div className="grid-container__similar">
                    {productItemsView}
                </div>
            </div>
        </div>
    );
};

export default FeaturedListTen;
