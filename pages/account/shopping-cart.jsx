import React, { useEffect } from 'react';
import BreadCrumb from '~/components/elements/BreadCrumb';
import PageContainer from '~/components/layouts/PageContainer';
import FooterDefault from '~/components/shared/footers/FooterDefault';
import Newletters from '~/components/partials/commons/Newletters';
import { connect } from 'react-redux';
import useEcomerce from '~/hooks/useEcomerce';
import ModuleEcomerceCartItems from '~/components/ecomerce/modules/ModuleEcomerceCartItems';
import Link from 'next/link';
import ModuleCartSummary from '~/components/ecomerce/modules/ModuleCartSummary';
import ModulePaymentMethods from '~/components/ecomerce/modules/ModulePaymentMethods';
import ModulePaymentOrderSummary from '~/components/partials/account/modules/ModulePaymentOrderSummary';

const ShoppingCartScreen = ({ ecomerce }) => {
    const { products, getProducts } = useEcomerce();

    useEffect(() => {
        if (ecomerce.cartItems) {
            getProducts(ecomerce.cartItems, 'cart');
        }
    }, [ecomerce]);

    const breadCrumb = [
        {
            text: 'Home',
            url: '/',
        },
        {
            text: 'Shopping Cart',
        },
    ];

    // View
    let contentView;
    // if (products) {
    //     if (products.length > 0) {
    contentView = (
        <>
            <div className="ps-section__footer">
                <div className="row">
                    <div className="col-xl-8 col-lg-4 col-md-12 col-sm-12 col-12">
                        <h5>Shopping Cart</h5>
                        <ModuleEcomerceCartItems cartItems={products} />
                        <div className="ps-section__cart-actions">
                            <Link href="/shop">
                                <a className="ps-btn">
                                    <i className="fa-solid fa-arrow-left"></i>{' '}
                                    RETURN TO SHOP
                                </a>
                            </Link>
                            <button className="update-btn">UPDATE CART</button>
                        </div>
                    </div>

                    <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
                        <ModulePaymentOrderSummary />
                    </div>

                    {/* <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
                        <div className="coupon-section">
                            <h3>Coupon Code</h3>
                            <input
                                className="form-control"
                                type="text"
                                placeholder="Email address"
                            />
                            <button className="apply-btn">APPLY COUPON</button>
                        </div>
                    </div> */}
                </div>
            </div>
        </>
    );

    //     } else {
    //         contentView = (
    //             <>
    //                 <div className="ps-section__content">
    //                     <div className="alert alert-info">
    //                         <p className="mb-0">
    //                             Your cart is currently empty.
    //                         </p>
    //                     </div>

    //                     <div className="ps-section__cart-actions">
    //                         <Link href="/shop">
    //                             <a className="ps-btn">Back to Shop</a>
    //                         </Link>
    //                     </div>
    //                 </div>
    //             </>
    //         );
    //     }
    // } else {
    // }

    return (
        <>
            {/* <PageContainer   title="Shopping Cart"> */}
            <PageContainer title="Shopping Cart">
                <div className="ps-page--simple">
                    <BreadCrumb breacrumb={breadCrumb} />
                    <div className="ps-section--shopping ps-shopping-cart">
                        <div className="container">
                            {/* <div className="ps-section__header"></div> */}
                            {contentView}
                        </div>
                    </div>
                </div>
                <Newletters layout="container" />
            </PageContainer>
        </>
    );
};

export default connect((state) => state)(ShoppingCartScreen);
