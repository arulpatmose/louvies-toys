import React from 'react';

// import BreadCrumb from '~/components/elements/BreadCrumb';
import Newletters from '~/components/partials/commons/Newletters';
import PageContainer from '~/components/layouts/PageContainer';
import PopularBrand from '~/components/elements/skeletons/PopularBrand';
import AboutUs from '~/components/partials/page/about/AboutUs';
import AboutUsList from '~/components/partials/page/about/AboutUsList';
import AboutUsTable from '~/components/partials/page/about/AboutUsTable';



const AboutUsPage = () => {
    // const breadCrumb = [
    //     {
    //         text: 'Home',
    //         url: '/',
    //     },
    //     {
    //         text: 'About Us',
    //     },
    // ];
    return (
        <PageContainer title="About Us">
            <div className="ps-page--single">
                {/* <img src="/static/img/bg/about-us.jpg" alt="" /> */}
                {/* <BreadCrumb breacrumb={breadCrumb} /> */}
                <AboutUs />
                <AboutUsList />
                <AboutUsTable />
                <PopularBrand />
                {/* <OurTeam /> */}
                {/* <AboutAwards /> */}
            </div>
            <Newletters layout="container" />
        </PageContainer>
    );
};
export default AboutUsPage;
