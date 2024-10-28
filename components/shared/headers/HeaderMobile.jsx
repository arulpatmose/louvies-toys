import React, { Component } from 'react';
import CurrencyDropdown from './modules/CurrencyDropdown';
import Link from 'next/link';
import LanguageSwicher from './modules/LanguageSwicher';
import MobileHeaderActions from './modules/MobileHeaderActions';
import { Drawer } from 'antd';
import PanelCartMobile from '../panel/PanelCartMobile';
import PanelCategories from '../panel/PanelCategories';

class HeaderMobile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menuDrawer: false,
            cartDrawer: false,
            searchDrawer: false,
            categoriesDrawer: false,
        };
    }

    handleDrawerClose = () => {
        this.setState({
            menuDrawer: false,
            cartDrawer: false,
            searchDrawer: false,
            categoriesDrawer: false,
        });
    };

    handleShowCategoriesDrawer = () => {
        this.setState({
            menuDrawer: false,
            cartDrawer: false,
            searchDrawer: false,
            categoriesDrawer: !this.state.categoriesDrawer,
        });
    };

    handleShowCartDrawer = () => {
        this.setState({
            menuDrawer: false,
            cartDrawer: !this.state.cartDrawer,
            searchDrawer: false,
            categoriesDrawer: false,
        });
    };

    render() {
        const { categoriesDrawer, cartDrawer } = this.state;

        return (
            <>
                <Drawer
                    className="ps-panel--mobile"
                    placement="right"
                    closable={false}
                    onClose={this.handleDrawerClose}
                    visible={this.state.categoriesDrawer}>
                    <div className="ps-panel--wrapper">
                        <div className="ps-panel__header">
                            <h3>Category</h3>

                            <span
                                className="ps-panel__close"
                                onClick={this.handleDrawerClose}>
                                <i className="icon-cross"></i>
                            </span>
                        </div>
                        <div className="ps-panel__content">
                            <PanelCategories />
                        </div>
                    </div>
                </Drawer>

                <Drawer
                    className="ps-panel--mobile"
                    placement="right"
                    closable={false}
                    onClose={this.handleDrawerClose}
                    visible={this.state.cartDrawer}>
                    <div className="ps-panel--wrapper">
                        <div className="ps-panel__header">
                            <h3>Shopping Cart</h3>
                            <span
                                className="ps-panel__close"
                                onClick={this.handleDrawerClose}>
                                <i className="icon-cross"></i>
                            </span>
                        </div>
                        <div className="ps-panel__content">
                            <PanelCartMobile />
                        </div>
                    </div>
                </Drawer>

                <header className="header header--mobile">
                    <div className="header__top">
                        <div className="header__left">
                            <p>Welcome to louvie Online Shopping Store !</p>
                        </div>
                        <div className="header__right">
                            <ul className="navigation__extra">
                                <li>
                                    <Link href="/vendor/become-a-vendor">
                                        <a>Sell on louvie </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/account/order-tracking">
                                        <a>Tract your order</a>
                                    </Link>
                                </li>
                                <li>
                                    <CurrencyDropdown />
                                </li>
                                <li>
                                    <LanguageSwicher />
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="navigation--mobile">
                        <a
                            className={`navigation__item ${
                                categoriesDrawer === true ? 'active' : ''
                            }`}
                            onClick={this.handleShowCategoriesDrawer}>
                            <i className="icon-menu"></i>
                        </a>

                        <div className="navigation__left">
                            <Link href="/">
                                <a className="ps-logo">
                                    <img
                                        src="/static/img/logo_light.png"
                                        alt="louvie "
                                    />
                                </a>
                            </Link>
                        </div>

                        <a
                            className={`navigation__item ${
                                cartDrawer === true ? 'active' : ''
                            }`}
                            onClick={this.handleShowCartDrawer}>
                            <i className="icon-bag2"></i>
                        </a>
                        {/* <MobileHeaderActions /> */}
                    </div>
                    <div className="ps-search--mobile">
                        <form
                            className="ps-form--search-mobile"
                            action="/"
                            method="get">
                            <div className="form-group--nest">
                                <input
                                    className="form-control"
                                    type="text"
                                    placeholder="Search something..."
                                />
                                <button>
                                    <i className="icon-magnifier"></i>
                                </button>
                            </div>
                        </form>
                    </div>
                </header>
            </>
        );
    }
}

export default HeaderMobile;
