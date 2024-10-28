import React from 'react';
import Link from 'next/link';
import Newsletters from '~/components/partials/commons/Newletters';

const FooterWidgets = () => (
    <>
        <Newsletters />

        <div className="ps-footer__widgets">
            <aside className="widget widget_footer widget_contact-us">
                <div className="logo">
                    <img src="/static/img/logo_light.png" alt="Logo" />
                </div>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
                <ul className="contact-info">
                    <li>
                        <i className="fa fa-map-marker"></i>
                        <span>6391 sample address, address</span>
                    </li>
                    <li>
                        <i className="fa fa-phone"></i>
                        <span>+000-1234-456 789</span>
                    </li>
                    <li>
                        <i className="fa fa-envelope"></i>
                        <span>Toystore@gmail.com</span>
                    </li>
                </ul>
                <ul className="ps-list--social">
                    {/* <li>
                    <a className="facebook" href="#">
                        <i className="fa fa-facebook"></i>
                    </a>
                </li>
                <li>
                    <a className="twitter" href="#">
                        <i className="fa fa-twitter"></i>
                    </a>
                </li>
                <li>
                    <a className="instagram" href="#">
                        <i className="fa fa-instagram"></i>
                    </a>
                </li>
                <li>
                    <a className="youtube" href="#">
                        <i className="fa fa-youtube"></i>
                    </a>
                </li> */}
                </ul>
            </aside>
            <aside className="widget widget_footer">
                <h4 className="widget-title">Account</h4>
                <ul className="ps-list--link">
                    <li>
                        <Link href="/page/my-account">
                            <a>My Account</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/page/order-history">
                            <a>Order History</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/page/addresses">
                            <a>Addresses</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/page/downloads">
                            <a>Downloads</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/page/account-details">
                            <a>Account Details</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/page/login-register">
                            <a>Login Register</a>
                        </Link>
                    </li>
                </ul>
            </aside>
            <aside className="widget widget_footer">
                <h4 className="widget-title">Pages</h4>
                <ul className="ps-list--link">
                    <li>
                        <Link href="/page/about-us">
                            <a>Who we are</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/page/products">
                            <a>Products</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/page/need-help">
                            <a>Need Help</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/page/service-areas">
                            <a>Service Areas</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/page/service-faqs">
                            <a>Service FAQs</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/page/contact-information">
                            <a>Contact Information</a>
                        </Link>
                    </li>
                </ul>
            </aside>
            <aside className="widget widget_footer">
                <h4 className="widget-title">Customer Support</h4>
                <ul className="ps-list--link">
                    <li>
                        <Link href="/page/contact-us">
                            <a>Contact Us</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/page/store-list">
                            <a>Store List</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/page/opening-hours">
                            <a>Opening Hours</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/page/returns-exchanges">
                            <a>Returns & Exchanges</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/page/refund-and-returns">
                            <a>Refund and Returns</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/page/privacy-policy">
                            <a>Privacy Policy</a>
                        </Link>
                    </li>
                </ul>
            </aside>
        </div>
    </>
);

export default FooterWidgets;
