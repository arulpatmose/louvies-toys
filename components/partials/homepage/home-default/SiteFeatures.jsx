import React from 'react';
 
const SiteFeatures = () => (
    <div className="ps-site-features">
        <div className="ps-container">
            <div className="ps-block--site-features">
                <div className="ps-block__item">
                    <div className="ps-block__left">
                        <img src="/static/img/icons/fast-Delivery.png" alt="" />
                    </div>
                    <div className="ps-block__right">
                        <h4>FASTED DELIVERY</h4>
                        <p>Delivery in 24/H</p>
                    </div>
                </div>
                <div className="ps-block__item">
                    <div className="ps-block__left">
                        <img src="/static/img/icons/24H RETURN.png" alt="" />
                    </div>
                    <div className="ps-block__right">
                        <h4>24H RETURN</h4>
                        <p>100% money-back</p>
                    </div>
                </div>
                <div className="ps-block__item">
                    <div className="ps-block__left">
                        <img src="/static/img/icons/SECURE PAYMENT.png" alt="" />
                    </div>
                    <div className="ps-block__right">
                        <h4>SECURE PAYMENT</h4>
                        <p>Your money is safe</p>
                    </div>
                </div>
                <div className="ps-block__item">
                    <div className="ps-block__left">
                        <img src="/static/img/icons/247 Support.png" alt="" />
                    </div>
                    <div className="ps-block__right">
                        <h4>24/7 Support</h4>
                        <p>Live contact/message</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default SiteFeatures;
