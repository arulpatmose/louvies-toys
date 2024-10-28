import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import ProductRepository from '~/repositories/ProductRepository';
import SkeletonProductDetail from '~/components/elements/skeletons/SkeletonProductDetail';
import BreadCrumb from '~/components/elements/BreadCrumb';
import ProductWidgets from '~/components/partials/product/ProductWidgets';
import ProductDetailFullwidth from '~/components/elements/detail/ProductDetailFullwidth';
import CustomerBought from '~/components/partials/product/CustomerBought';
import RelatedProduct from '~/components/partials/product/RelatedProduct';
import HeaderProduct from '~/components/shared/headers/HeaderProduct';
import HeaderDefault from '~/components/shared/headers/HeaderDefault';
import PageContainer from '~/components/layouts/PageContainer';
import Newletters from '~/components/partials/commons/Newletters';
import HeaderMobileProduct from '~/components/shared/header-mobile/HeaderMobileProduct';
import NavBar from '~/components/shared/widgets/NavBar';
import Menu from '~/components/elements/menu/Menu';
import axios from 'axios';

const ProductDefaultPage = () => {
    const router = useRouter();
    const { pid } = router.query;
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(false);

    const API_USERNAME = process.env.API_USERNAME;
    const API_PASSWORD = process.env.API_PASSWORD;

    async function getProduct(pid) {
        if (!pid) return;

        setLoading(true);
        try {
            const response = await axios.get(`${process.env.API_URL}/wp-json/wc/v3/products/${pid}`, {
                auth: {
                    username: API_USERNAME,
                    password: API_PASSWORD,
                },
            });
            setProduct(response.data);
            console.log("response.data",response.data);
        } catch (error) {
            console.error('Error fetching product:', error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getProduct(pid);
    }, [pid]);

    const breadCrumb = [
        {
            text: 'Home',
            url: '/',
        },
        {
            text: 'Shop',
            url: '/shop',
        },
        {
            text: product ? product.title : 'Loading...',
        },
    ];
    // Views
    let productView, headerView;
    if (!loading) {
        if (product) {
            productView = <ProductDetailFullwidth product={product} />;
            headerView = (
                <>
                    <HeaderProduct product={product} />
                    <HeaderMobileProduct />
                </>
            );
        } else {
            headerView = (
                <>
                    <HeaderDefault />
                    <HeaderMobileProduct />
                </>
            );
        }
    } else {
        productView = <SkeletonProductDetail />;
    }

    return (
        <PageContainer title={product ? product.title : 'Loading...'}>
            <BreadCrumb breacrumb={breadCrumb} layout="fullwidth" />
            <div className="ps-page--product">
                <div className="ps-container">
                    <div className="ps-page__container">
                        <div className="ps-page">{productView}</div>
                        {/* <div className="ps-page__right">
                            <ProductWidgets />
                        </div> */}
                    </div>

                    {/* <CustomerBought
                        layout="fullwidth"
                        collectionSlug="deal-of-the-day"
                    /> */}
                    {/* <RelatedProduct collectionSlug="shop-recommend-items" /> */}
                </div>
            </div>
            <Newletters />
        </PageContainer>
    );
};

export default ProductDefaultPage;
