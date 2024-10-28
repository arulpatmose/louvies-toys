import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Form, Input, Button, message } from 'antd';
import axios from 'axios';

// Assuming you have environment variables set up
const API_URL = process.env.API_URL+'/wp-json/wc/v3/customers';
const API_USERNAME = process.env.API_USERNAME;
const API_PASSWORD = process.env.API_PASSWORD;


const Register = () => {
    const [form] = Form.useForm();
    const router = useRouter();

    const handleSubmit = async values => {
        try {
            await form.validateFields();
            const response = await axios.post(API_URL, {
                username: values.username,
                email: values.email,
                password: values.password,
                name: values.username
            }, {
                auth: {
                    username: API_USERNAME,
                    password: API_PASSWORD
                }
            });

            // Handle successful registration
            message.success('Registration successful!');
            router.push('/account/login');
        } catch (error) {
            console.error('Error registering user:', error);
            message.error('Registration failed. Please try again.');
        }
    };

    return (
        <div className="ps-my-account">
            <div className="container">
                <Form
                    form={form}
                    className="ps-form--account"
                    onFinish={handleSubmit}
                >
                    <ul className="ps-tab-list">
                        <li>
                            <Link href="/account/login">
                                <a>Login</a>
                            </Link>
                        </li>
                        <li className="active">
                            <Link href="/account/register">
                                <a>Register</a>
                            </Link>
                        </li>
                    </ul>
                    <div className="ps-tab active" id="register">
                        <div className="ps-form__content">
                            <h5>Register An Account</h5>
                            <Form.Item
                                name="username"
                                rules={[
                                    { required: true, message: 'Please input your username!' }
                                ]}
                            >
                                <Input
                                    className="form-control"
                                    type="text"
                                    placeholder="Username"
                                />
                            </Form.Item>
                            <Form.Item
                                name="email"
                                rules={[
                                    { required: true, type: 'email', message: 'Please input a valid email!' }
                                ]}
                            >
                                <Input
                                    className="form-control"
                                    type="email"
                                    placeholder="Email address"
                                />
                            </Form.Item>
                            <Form.Item
                                name="password"
                                rules={[
                                    { required: true, message: 'Please input your password!' }
                                ]}
                            >
                                <Input
                                    className="form-control"
                                    type="password"
                                    placeholder="Password"
                                />
                            </Form.Item>
                            <Form.Item>
                                <Button
                                    type="primary"
                                    htmlType="submit"
                                    className="ps-btn ps-btn--fullwidth"
                                >
                                    Register
                                </Button>
                            </Form.Item>
                        </div>
                        <div className="ps-form__footer">
                            <p>Connect with:</p>
                            <ul className="ps-list--social">
                                <li>
                                    <a className="facebook" href="#">
                                        <i className="fa fa-facebook"></i>
                                    </a>
                                </li>
                                <li>
                                    <a className="google" href="#">
                                        <i className="fa fa-google-plus"></i>
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
                            </ul>
                        </div>
                    </div>
                </Form>
            </div>
        </div>
    );
};

export default Register;
