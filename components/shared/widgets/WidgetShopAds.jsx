import React from 'react';
import Link from 'next/link';

const WidgetShopAds = () => {
    return (
        <aside className="widget widget_ads">
            <Link href="/shop">
                <a>
                    <img src="/static/img/ads/product-ads.png" alt="louvie " />
                </a>
            </Link>
        </aside>
    );
};

export default WidgetShopAds;
