/*
* louvie  - Multipurpose Marketplace louvie's Toys eCommerce v2.2.0
* Author: nouthemes
* Homepage: https://themeforest.net/user/nouthemes/portfolio
* Created at: 2019-11-15T08:00:00+07:00
* Update at: 2021-07-13T00:11:04+07:00

* */

const nextSettings = {
    optimizeFonts: false,
    // disable eslint
    eslint: {
        ignoreDuringBuilds: true,
    },
    // Change your site title here
    env: {
        title: 'LouvisToyas ',
        titleDescription: '',
        API_URL: process.env.API_URL,
        API_USERNAME: process.env.API_USERNAME,
        API_PASSWORD: process.env.API_PASSWORD,
        STRIPE_PUBLISH_KEY : process.env.STRIPE_PUBLISH_KEY,
        STRIPE_SECRECT_KEY : process.env.STRIPE_SECRECT_KEY,
    },
};

module.exports = nextSettings;
