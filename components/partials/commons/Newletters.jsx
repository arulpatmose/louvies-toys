import React from 'react';
import Image from 'next/image';  

const Newsletters = ({ layout }) => (
    <section className="ps-newsletter">
        <div className={layout && layout === 'container' ? 'container' : 'ps-container'}>
            <div className="newsletter-content">
                <div className="newsletter-image">
                    <Image src="/static/img/categories/images/mail.png" alt="Newsletter Background" layout="fill" objectFit="cover" />
                </div>
                <div className="newsletter-text">
                    <h3>Subscribe our newsletter to get latest news.</h3>
                </div>
                <form className="ps-form--newsletter" action="do_action" method="post">
                    <div className="form-group--nest">
                        <input
                            className="form-control"
                            type="email"
                            placeholder="Your Email Address"
                        />
                        <button className="ps-btn">Subscribe!</button>
                    </div>
                </form>
            </div>
        </div>
    </section>
);

export default Newsletters;
