import React from 'react';
import FormCheckoutInformation from './modules/FormCheckoutInformation';
import { useState } from 'react';
import ModulePaymentOrderSummary from '~/components/partials/account/modules/ModulePaymentOrderSummary';
const Checkout = () => {
    const [submitFromOutside, setSubmitFromOutside] = useState(false);
    return (
        <div className="ps-checkout ps-section--shopping">
            <div className="container">
                <div className="ps-section__content">
                    <div className="ps-form--checkout">
                        <div className="ps-form__content">
                            <div className="row">
                                <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12">
                                    <FormCheckoutInformation isSubmit={submitFromOutside} />
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12  ps-block--checkout-order">
                                    <div className="ps-form__orders">
                                        <ModulePaymentOrderSummary callBack={
                                            (e) => {
                                                setSubmitFromOutside(true);
                                            }
                                        } />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
