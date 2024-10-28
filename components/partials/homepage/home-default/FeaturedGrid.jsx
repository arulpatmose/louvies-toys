import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import SkeletonProduct from '~/components/elements/skeletons/SkeletonProduct';
import { generateTempArray } from '~/utilities/common-helpers';
import ProductDealOfDay from '~/components/elements/products/ProductDealOfDay';
import '@fortawesome/fontawesome-free/css/all.css';
import FeaturedProduct from '~/components/elements/products/FeaturedProduct';
import NextArrow from '~/components/elements/arrow/NextArrow';
import PrevArrow from '~/components/elements/arrow/PrevArrow';
import axios from 'axios';


const FeaturedListGrid = ({ collectionSlug, title }) => {

    const API_USERNAME = process.env.API_USERNAME;
    const API_PASSWORD = process.env.API_PASSWORD;

    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get(`${process.env.API_URL}/wp-json/wc/v3/products`, {
                    auth: {
                        username: API_USERNAME,
                        password: API_PASSWORD,
                    },
                    params: {
                        per_page: 10, // Adjust this as needed
                    },
                });
                console.log("response.data",response.data)
                setProducts(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching products:', error);
                setLoading(false);
            }
        };

        fetchProducts();
    }, [collectionSlug]);

    let productItemsView;
    if (!loading) {
        productItemsView = products.map((item, index) => (
            <FeaturedProduct product={item} key={item.id} index={index} />
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
                <div className="grid-container__similar">
                    {productItemsView}
                </div>
            </div>
        </div>
    );
};

export default FeaturedListGrid;
