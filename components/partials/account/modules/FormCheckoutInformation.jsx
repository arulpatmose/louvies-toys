import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import { connect } from 'react-redux';
import useEcomerce from '~/hooks/useEcomerce';
import { Form, Input, Select, Checkbox, Button, Radio } from 'antd';
import { calculateAmount } from '~/utilities/ecomerce-helpers';
import '@fortawesome/fontawesome-free/css/all.css';
import { createWooCommerceOrder, updateOrderSetPaid } from '~/utilities/woocommerce'; // Import the service
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import axios from 'axios';

const stripePromise = loadStripe(process.env.STRIPE_PUBLISH_KEY);

const { Option } = Select;

const FormCheckoutInformation = ({ ecomerce, shipping, isSubmit }) => {

    const [paymentMethod, setPaymentMethod] = useState('cashOnDelivery');
    const { products, getProducts, removeItems } = useEcomerce();
    const [form] = Form.useForm();


    useEffect(() => {
        if (isSubmit) {
            form.submit();
        }
        if (ecomerce.cartItems) {
            getProducts(ecomerce.cartItems, 'cart');
        }
    }, [ecomerce, isSubmit]);





    let amount = 0;
    const discount = 24;
    const shippingFee = shipping ? 20 : 0;

    if (products && products.length > 0) {
        amount = calculateAmount(products);
    }

    const handlePaymentMethodChange = (e) => {
        setPaymentMethod(e.target.value);
    };


    const handleFormSubmit = async (values) => {
        try {
            const orderData = {
                payment_method: paymentMethod === 'cashOnDelivery' ? 'cod' : 'stripe',
                payment_method_title: paymentMethod === 'cashOnDelivery' ? 'cod' : 'stripe',
                set_paid: paymentMethod === 'cashOnDelivery',
                billing: {
                    first_name: values.firstName,
                    last_name: values.last_name,
                    address_1: values.buildingName,
                    address_2: values.flatVilla,
                    city: values.city,
                    state: values.streetName,
                    postcode: values.zipCode,
                    country: values.country,
                    email: values.email,
                    phone: values.phoneNumber
                },
                shipping: {
                    first_name: values.firstName,
                    last_name: values.last_name,
                    address_1: values.buildingName,
                    address_2: values.flatVilla,
                    city: values.city,
                    state: values.streetName,
                    postcode: values.zipCode,
                    country: values.country,
                },
                line_items: products.map((item) => ({
                    product_id: item.id,
                    quantity: item.quantity
                })),
                shipping_lines: [
                    {
                        method_id: 'flat_rate',
                        method_title: 'Flat Rate',
                        total: shippingFee.toString()
                    }
                ]
            };
            const newOrder = await createWooCommerceOrder(orderData);
            console.log('successfully: ---------------------------------------------', newOrder);
            if (paymentMethod == "stripe") {
                handleStipeCheckout(newOrder);
            } else {
                Router.push('/order-success');
            }
        } catch (error) {
            console.error('Error creating order:', error);
        }
    };

    const handleStipeCheckout = async (Order) => {
        const stripe = await stripePromise;


        // Create a Checkout Session
        const response = await axios.post('/api/create-checkout-session', {
            items: products.map(product => ({
                name: product.name,
                price: product.price, // Convert to cents
                quantity: product.quantity, // Assuming each item is bought once for simplicity
            })),
        });

        console.log('Order created successfully: ---------------------------------------------', Order, response);
        if (response.statusText == 'OK') {
            await updateOrderSetPaid(Order.id, true, response);
            removeItems('cart');
        }

        const { sessionId } = response.data;

        // Redirect to Stripe Checkout
        const result = await stripe.redirectToCheckout({
            sessionId: sessionId,
        });


        if (result.error) {
            console.error(result.error.message);
        }
    };

    return (
        <Form
            form={form}
            className="ps-form__billing-info"
            id='formCheckoutInformation'
            onFinish={handleFormSubmit}
            onSubmit={handleFormSubmit}
            initialValues={{ paymentMethod }}>
            <h3 className="ps-form__heading">Billing Information</h3>
            <div className="row">
                <div className="col-sm-6">
                    <div className="form-group">
                        <h5>User name </h5>
                        <div className="row">
                            <div className="col-sm-6">
                                <Form.Item
                                    name="firstName"
                                    rules={[{ required: true, message: 'Enter your first name!' }]}>
                                    <Input className="form-control" type="text" placeholder="First name" />
                                </Form.Item>
                            </div>
                            <div className="col-sm-6">
                                <Form.Item
                                    name="lastName"
                                    rules={[{ required: true, message: 'Enter your last name!' }]}>
                                    <Input className="form-control" type="text" placeholder="Last name" />
                                </Form.Item>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="form-group">
                        <h5>Company Name (Optional)</h5>
                        <Form.Item name="companyName">
                            <Input className="form-control" type="text" placeholder="Company Name (Optional)" />
                        </Form.Item>
                    </div>
                </div>
            </div>
            <div className="form-group">
                <h5>Address</h5>
                <div className="row">
                    <div className="col-sm-6">
                        <Form.Item
                            name="flatVilla"
                            rules={[{ required: true, message: 'Enter your flat/villa number!' }]}>
                            <Input className="form-control" type="text" placeholder="Flat/Villa Number" />
                        </Form.Item>
                    </div>
                    <div className="col-sm-6">
                        <Form.Item
                            name="buildingName"
                            rules={[{ required: true, message: 'Enter your building name/number!' }]}>
                            <Input className="form-control" type="text" placeholder="Building Name/Number" />
                        </Form.Item>
                    </div>
                    <div className="col-sm-6">
                        <Form.Item
                            name="streetName"
                            rules={[{ required: true, message: 'Enter your street name!' }]}>
                            <Input className="form-control" type="text" placeholder="Street Name" />
                        </Form.Item>
                    </div>
                    <div className="col-sm-6">
                        <Form.Item
                            name="cityName"
                            rules={[{ required: true, message: 'Enter your city name!' }]}>
                            <Input className="form-control" type="text" placeholder="City" />
                        </Form.Item>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-3">
                    <div className="form-group">
                        <h5>Country</h5>
                        <Form.Item
                            name="country"
                            rules={[{ required: true, message: 'Select your country!' }]}>
                            <Select className="form-control" placeholder="Select Country">
                                <Option value="usa">USA</Option>
                                <Option value="canada">Canada</Option>
                                <Option value="uk">UK</Option>
                                {/* Add more countries as needed */}
                            </Select>
                        </Form.Item>
                    </div>
                </div>
                <div className="col-sm-3">
                    <div className="form-group">
                        <h5>Region/State</h5>
                        <Form.Item
                            name="regionState"
                            rules={[{ required: true, message: 'Select your region/state!' }]}>
                            <Select className="form-control" placeholder="Select Region/State">
                                <Option value="california">California</Option>
                                <Option value="texas">Texas</Option>
                                <Option value="newYork">New York</Option>
                                {/* Add more regions/states as needed */}
                            </Select>
                        </Form.Item>
                    </div>
                </div>
                <div className="col-sm-3">
                    <div className="form-group">
                        <h5>City</h5>
                        <Form.Item
                            name="city"
                            rules={[{ required: true, message: 'Select your city!' }]}>
                            <Select className="form-control" placeholder="Select City">
                                <Option value="losAngeles">Los Angeles</Option>
                                <Option value="houston">Houston</Option>
                                <Option value="newYorkCity">New York City</Option>
                                {/* Add more cities as needed */}
                            </Select>
                        </Form.Item>
                    </div>
                </div>
                <div className="col-sm-3">
                    <div className="form-group">
                        <h5>Zip Code</h5>
                        <Form.Item
                            name="zipCode"
                            rules={[{ required: true, message: 'Enter your zip code!' }]}>
                            <Input className="form-control" type="text" placeholder="Zip Code" />
                        </Form.Item>
                    </div>
                </div>
            </div>
            <div className="form-group">
                <h5>Email</h5>
                <div className="row">
                    <div className="col-sm-6">
                        <Form.Item
                            name="email"
                            rules={[{ required: true, message: 'Enter your Email!' }]}>
                            <Input className="form-control" type="text" placeholder="Email" />
                        </Form.Item>
                    </div>
                    <div className="col-sm-6">
                        <Form.Item
                            name="phoneNumber"
                            rules={[{ required: true, message: 'Enter your Phone number!' }]}>
                            <Input className="form-control" type="text" placeholder="Phone Number" />
                        </Form.Item>
                    </div>
                </div>
            </div>
            <div className="form-group text-left">
                <Checkbox id="shipDifferentAddress">
                    Ship to different address
                </Checkbox>
            </div>

            <div className="payment_option">
                <h3 className="ps-form__heading">Payment Option</h3>

                <div className="ps-form__body">
                    <Radio.Group
                        onChange={(e) => handlePaymentMethodChange(e)}
                        value={paymentMethod}>
                        <div className="payment-option">
                            <Radio value="cashOnDelivery">
                                <img
                                    src="/static/img/categories/images/icons/cash.png"
                                    alt="Cash on Delivery"
                                />
                                <span>Cash on Delivery</span>
                            </Radio>
                        </div>
                        <div className="payment-option">
                            <Radio value="stripe">
                                <img
                                    src="/static/img/categories/images/icons/card.png"
                                    alt="Stripe"
                                />
                                <span>Stripe</span>
                            </Radio>
                        </div>
                        {/* <div className="payment-option">
                            <Radio value="debitCreditCard">
                                <img
                                    src="/static/img/categories/images/icons/card.png"
                                    alt="Debit/Credit Card"
                                />
                                <span>Debit/Credit Card</span>
                            </Radio>
                        </div> */}
                    </Radio.Group>
                </div>
            </div>
            {paymentMethod === 'stripe' && (
                <>
                    <h5>Name on Card</h5>
                    <Form.Item name="nameOnCard">
                        <Input placeholder="Name on Card" />
                    </Form.Item>
                    <h5>Card Number</h5>
                    <Form.Item name="cardNumber">
                        <Input placeholder="Card Number" />
                    </Form.Item>
                    <div className="row">
                        <div className="col-sm-6">
                            <h5>Expire Date</h5>
                            <Form.Item name="expiryDate">
                                <Input placeholder="Expire Date (MM/YY)" />
                            </Form.Item>
                        </div>
                        <div className="col-sm-6">
                            <h5>CVC</h5>
                            <Form.Item name="cvc">
                                <Input placeholder="CVC" />
                            </Form.Item>
                        </div>
                    </div>
                </>
            )}
            <h3 className="ps-form__heading">Additional Information</h3>
            <h5>
                Order Notes <span>(Optional)</span>
            </h5>

            <Form.Item name="orderNotes">
                <Input.TextArea placeholder="Notes about your order, e.g. special notes for delivery" />
            </Form.Item>
            {/* <div className="form-group submit">
                <Button type="primary" htmlType="submit" className="ps-btn">
                    Proceed to Checkout
                </Button>
            </div> */}
        </Form>
    );
};

const mapStateToProps = (state) => ({
    ecomerce: state.ecomerce,
    shipping: state.shipping,
});

export default connect(mapStateToProps)(FormCheckoutInformation);
