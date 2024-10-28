import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import MenuDropdown from '~/components/elements/menu/MenuDropdown';
import MegaMenu from '~/components/elements/menu/MegaMenu';
import axios from 'axios';

const Menu = ({ className,categories }) => {


    // Views
    let menuView;
    if (categories.length > 0) {
        menuView = categories.map((item) => {
            // Assuming item includes subcategories or a megaContent structure
            if (item.subcategories) {
                return <MenuDropdown source={item} key={item.id} />;
            } else if (item.megaContent) {
                return <MegaMenu source={item} key={item.id} />;
            } else {
                return (
                    <li key={item.id}>
                        <Link href={`/category/${item.slug}`}>
                            <a>
                                {item.icon && <i className={item.icon}></i>}
                                {item.name}
                            </a>
                        </Link>
                    </li>
                );
            }
        });
    } else {
        menuView = (
            <li>
                <a href="#" onClick={(e) => e.preventDefault()}>
                    No menu item.
                </a>
            </li>
        );
    }

    return (
        <div className="menu">
            <div className="menu-title">
                Top Categories <i className="fa fa-caret-up"></i>
            </div>
            <ul className={className}>{menuView}</ul>
        </div>
    );
};

export default Menu;
