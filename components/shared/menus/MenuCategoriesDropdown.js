import React from 'react';
import menuData from '~/public/static/data/menu.json';
import Menu from '~/components/elements/menu/Menu';
import Link from 'next/link';

const MenuCategoriesDropdown = () => {
    return (
        <div className="menu--product-categories">
            <div>
                <img src="/static/img/logo_light.png" alt="" />
            </div>
            {/* <div className="menu__toggle">
                <span>Shop by Department</span>
            </div> */}
            {/* <div className="menu__content">
                <Menu
                    source={menuData.product_categories}
                    className="menu--dropdown"
                />
            </div> */}
        </div>
    );
};

export default MenuCategoriesDropdown;
