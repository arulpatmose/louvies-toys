import React, { useState } from 'react';
import { Slider, Radio } from 'antd';
import { useRouter } from 'next/router';
 
const priceOptions = [
    { label: 'All Price', value: [0, 2000] },
    { label: 'Under $20', value: [0, 20] },
    { label: '$25 to $100', value: [25, 100] },
    { label: '$100 to $300', value: [100, 300] },
    { label: '$300 to $500', value: [300, 500] },
    { label: '$500 to $1,000', value: [500, 1000] },
    { label: '$1,000 to $10,000', value: [1000, 10000] },
];

const WidgetShopFilterByPriceRange = () => {
    const Router = useRouter();
    const [value, setValue] = useState([0, 2000]);

    function handleChangeRange(value) {
        setValue(value);
        Router.push(`/shop?price_gt=${value[0]}&price_lt=${value[1]}`);
    }

    function handleRadioChange(e) {
        const selectedValue = e.target.value;
        setValue(selectedValue);
        Router.push(`/shop?price_gt=${selectedValue[0]}&price_lt=${selectedValue[1]}`);
    }

    function handleInputChange(index, e) {
        const newValue = [...value];
        newValue[index] = Number(e.target.value);
        setValue(newValue);
        Router.push(`/shop?price_gt=${newValue[0]}&price_lt=${newValue[1]}`);
    }

    return (
        <aside className="widget widget_shop">
            <figure>
                <h4 className="widget-title">Price Range</h4>
                <Slider
                    range
                    defaultValue={value}
                    max={2000}
                    value={value}
                    onChange={handleChangeRange}
                />
                <div className="price-range-inputs">
                    <input
                        type="text"
                        value={value[0]}
                        placeholder="Min price"
                        onChange={(e) => handleInputChange(0, e)}
                    />
                    <span> - </span>
                    <input
                        type="text"
                        value={value[1]}
                        placeholder="Max price"
                        onChange={(e) => handleInputChange(1, e)}
                    />
                </div>
                <Radio.Group onChange={handleRadioChange} value={value} className="price-options">
                    {priceOptions.map((option, index) => (
                        <Radio key={index} value={option.value}>{option.label}</Radio>
                    ))}
                </Radio.Group>
            </figure>
        </aside>
    );
};

export default WidgetShopFilterByPriceRange;
