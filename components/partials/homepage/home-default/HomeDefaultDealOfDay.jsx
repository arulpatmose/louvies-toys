import React, { useEffect } from 'react';
import Link from 'next/link';
import Slider from 'react-slick';
import SkeletonProduct from '~/components/elements/skeletons/SkeletonProduct';
import { carouselFullwidth } from '~/utilities/carousel-helpers';
import ProductDealOfDay from '~/components/elements/products/ProductDealOfDay';
import { generateTempArray } from '~/utilities/common-helpers';
import useGetProducts from '~/hooks/useGetProducts';

const HomeDefaultDealOfDay = ({ collectionSlug }) => {
    const { productItems, loading, getProductsByCollection } = useGetProducts();

    useEffect(() => {
        getProductsByCollection(collectionSlug);
    }, [collectionSlug]);

    // Views
    let productItemsView;
    if (!loading) {
        if (productItems && productItems.length > 0) {
            const slideItems = productItems.map((item) => (
                <ProductDealOfDay product={item} key={item.id} />
            ));
            productItemsView = (
                <Slider {...carouselFullwidth} className="ps-carousel outside">
                    {slideItems}
                </Slider>
            );
        } else {
            productItemsView = <p>No product(s) found.</p>;
        }
    } else {
        const skeletons = generateTempArray(6).map((item) => (
            <div className="col-xl-2 col-lg-3 col-sm-3 col-6" key={item}>
                <SkeletonProduct />
            </div>
        ));
     }

    return (
        <div className="ps-container">
            <div className="ps-section__content">{productItemsView}</div>
        </div>
    );
};

export default HomeDefaultDealOfDay;
