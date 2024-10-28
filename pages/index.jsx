import React, { useEffect, useState } from 'react';
import SiteFeatures from '~/components/partials/homepage/home-default/SiteFeatures';
import HomeAdsColumns from '~/components/partials/homepage/home-default/HomeAdsColumns';
import HomeAds from '~/components/partials/homepage/home-default/HomeAds';
import DownLoadApp from '~/components/partials/commons/DownLoadApp';
import NewArrivals from '~/components/partials/homepage/home-default/NewArrivals';
import Newletters from '~/components/partials/commons/Newletters';
import HomeDefaultDealOfDay from '~/components/partials/homepage/home-default/HomeDefaultDealOfDay';
import HomeDefaultTopCategories from '~/components/partials/homepage/home-default/HomeDefaultTopCategories';
import HomeDefaultProductListing from '~/components/partials/homepage/home-default/HomeDefaultProductListing';
import HomeDefaultBanner from '~/components/partials/homepage/home-default/HomeDefaultBanner';
import PageContainer from '~/components/layouts/PageContainer';
import HeaderMobile from '~/components/shared/headers/HeaderMobile';
import ShopByCharacter from '~/components/elements/skeletons/shop-by-character';
import FeaturedProducts from '~/components/elements/skeletons/FeaturedProducts';
import ToyStore from '~/components/elements/skeletons/ToyStore';
import ProductCarousel from '~/components/elements/skeletons/ProductCarousel';
import ShopByAge from '~/components/elements/skeletons/ShopByAge';
import PopularBrand from '~/components/elements/skeletons/PopularBrand';
import Banner from '~/components/elements/skeletons/Banner';
import LatestNews from '~/components/elements/skeletons/LatestNews';
import HomeBestSellingProductListing from '~/components/partials/homepage/home-default/HomeBestSelling';
import FeaturedProductSingle from '~/components/elements/skeletons/FeaturedProductsSingle';
import FeaturedList from '~/components/partials/homepage/home-default/FeaturedList';
import FeaturedProductSingleTwo from '~/components/elements/skeletons/FeaturedProductsSingleTwo';
import CategoryRepository from '~/repositories/CategoryRepository';

const HomepageDefaultPage = () => {

    const [loading, setLoading] = useState(true);
    const [categories, setCategories] = useState([]);
    const fetchCategories = async () => {
        try {
            setLoading(true);
            const categories = await CategoryRepository.getRecords();
            setCategories(categories);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching categories:', error);
        }
    };

    useEffect(() => {
        console.log('Tryng');
        fetchCategories();
    }, []);

    return (
        <>
            <PageContainer title="">
                <main id="homepage-1">
                    {!loading && <HomeDefaultBanner categories={categories} />}
                    <SiteFeatures />
                    {!loading && <HomeDefaultTopCategories categories={categories} />}
                    <HomeDefaultDealOfDay collectionSlug="deal-of-the-day" />
                    {/* <HomeAdsColumns /> */}
                    <HomeDefaultProductListing
                        collectionSlug="Dolls"
                        title="Dolls"
                    />
                    <ShopByCharacter />
                    <FeaturedProducts />

                    <HomeBestSellingProductListing
                        collectionSlug="BestSellingProducts"
                        title="Best Selling Products"
                    />

                    <FeaturedProductSingle />

                    <FeaturedList collectionSlug={"NewArrivals"} />


                    {/* <ToyStore /> */}
                    <ShopByAge />
                    {/* <HomeAds /> */}
                    <NewArrivals collectionSlug="new-arrivals-products" />
                    <PopularBrand />
                    {/* <Banner /> */}

                    <FeaturedProductSingleTwo />

                    <LatestNews />
                    {/* <Newletters /> */}
                    {/* <DownLoadApp /> */}
                </main>
            </PageContainer>
        </>
    );
};

export default HomepageDefaultPage;
