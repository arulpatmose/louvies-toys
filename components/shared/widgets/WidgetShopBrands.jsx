import React, { useEffect, useState } from 'react';
import { Checkbox, Tag } from 'antd';
import { useRouter } from 'next/router';
 
const WidgetShopBrands = () => {
    const Router = useRouter();
    const { slug } = Router.query;
    const [brands, setBrands] = useState([]);
    const [loading, setLoading] = useState(false);

    const brandOptions = [
        { label: 'Lorem', value: 'lorem1' },
        { label: 'Lorem', value: 'lorem2' },
        { label: 'Lorem', value: 'lorem3' },
        { label: 'Lorem', value: 'lorem4' },
        { label: 'Lorem', value: 'lorem5' },
        { label: 'Lorem', value: 'lorem6' }
    ];

    function handleBrandChange(checkedValues) {
        console.log('Checked Brands: ', checkedValues);
    }

    function handleTagClick(tag) {
        console.log('Tag Clicked: ', tag);
    }

    const sampleTags = ['Lorem', 'Lorem', 'Lorem', 'Lorem', 'Lorem', 'Lorem', 'Lorem', 'Lorem', 'Lorem bb'];

    return (
        <aside className="widget widget_shop widget_shop--brand">
            <h4 className="widget-title">Popular Brands</h4>
            <Checkbox.Group
                options={brandOptions}
                onChange={handleBrandChange}
                className="brand-checkbox-group"
            />
            <h4 className="widget-title2">Popular Tag</h4>
            <div className="tag-container">
                {sampleTags.map((tag, index) => (
                    <Tag key={index} onClick={() => handleTagClick(tag)} className="custom-tag">
                        {tag}
                    </Tag>
                ))}
            </div>
        </aside>
    );
};

export default WidgetShopBrands;
