import React, { useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { connect } from 'react-redux';
import useEcomerce from '~/hooks/useEcomerce';
import { calculateAmount } from '~/utilities/ecomerce-helpers';
import '@fortawesome/fontawesome-free/css/all.css';
import { createWooCommerceOrder } from '~/utilities/woocommerce'; // Import the function

const ModulePaymentOrderSummary = ({ ecomerce, shipping, callBack }) => {
    const { products, getProducts } = useEcomerce();
    const router = useRouter();

    useEffect(() => {
        if (ecomerce.cartItems) {
            getProducts(ecomerce.cartItems, 'cart');
        }
    }, [ecomerce]);

    let listItemsView, shippingView, discountView, totalView;
    let amount = 0;
    const discount = 0;
    const tax = 0;
    const shippingFee = shipping ? 20 : 0;

    if (products && products.length > 0) {
        amount = calculateAmount(products);
        listItemsView = products.map((item) => (
            <div key={item.id} className="ps-product--cart-mobile">
                <div className="ps-product__thumbnail">
                    <Link href="/product/[pid]" as={`/product/${item.id}`}>
                        <a>
                            <img
                                src={
                                    item.images && item.images[0]
                                        ? item.images[0].src
                                        : 'https://jkfenner.com/wp-content/uploads/2019/11/default.jpg'
                                }
                                alt={item.title}
                            />
                        </a>
                    </Link>
                </div>
                <div className="ps-product__content">
                    <Link href="/product/[pid]" as={`/product/${item.id}`}>
                        <a className="ps-product__title">
                            {item.title} x {item.quantity}
                        </a>
                    </Link>
                    <p>
                        <strong>Price:</strong> ${item.price * item.quantity}
                    </p>
                </div>
            </div>
        ));
    } else {
        listItemsView = <p>No Product.</p>;
    }

    shippingView = (
        <p>
            Shipping <span>{shipping ? `$${shippingFee}.00` : 'Free'}</span>
        </p>
    );

    discountView = (
        <p className="discount-row">
            Discount <span>${discount}.00</span>
        </p>
    );

    totalView = (
        <h3>
            Total <span>${amount + shippingFee - discount + tax}.00</span>
        </h3>
    );

    const handleCheckoutCart = () => {
        router.push('/account/checkout');
    };
    const handleCheckout = async () => {
        callBack();
    };

    return (
        <div className="ps-block--checkout-order">
            <div className="ps-block__content">
                {router.pathname === '/account/shopping-cart' && (
                    <>
                        <h3>Card Totals</h3>
                        <div className="ps-block__product">{listItemsView}</div>
                        <div className="ps-block__footer">
                            <p>
                                Sub-total <span>${amount}.00</span>
                            </p>
                            {shippingView}
                            {/* {discountView} */}
                            {/* <p>
                                Tax <span>${tax}</span>
                            </p> */}
                            {totalView}
                            <div className="ps-block__footer-button mt-3">
                                <button
                                    className="checkout-btn"
                                    onClick={handleCheckoutCart}>
                                    PROCEED TO CHECKOUT{' '}
                                    <i className="fa-solid fa-arrow-right"></i>
                                </button>
                            </div>
                        </div>
                    </>
                )}

                {router.pathname === '/account/checkout' && (
                    <>
                        <h3>Order Summary</h3>
                        <div className="ps-block__product">{listItemsView}</div>
                        <div className="ps-block__footer">
                            <p>
                                Sub-total <span>${amount}.00</span>
                            </p>
                            {shippingView}
                            {/* {discountView} */}
                            {/* <p>
                                Tax <span>${tax}</span>
                            </p> */}
                            {totalView}
                            <div className="ps-block__footer-button">
                                <button
                                    className="checkout-btn"
                                    onClick={handleCheckout}>
                                    PROCEED TO CHECKOUT{' '}
                                    <i className="fa-solid fa-arrow-right"></i>
                                </button>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default connect((state) => state)(ModulePaymentOrderSummary);
