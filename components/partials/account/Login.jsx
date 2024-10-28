import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Form, Input, Button, message } from 'antd';
import axios from 'axios';

const API_URL = 'https://toywebu.bj-isl.com/wp-json/jwt-auth/v1/token';

const Login = () => {
    const [form] = Form.useForm();
    const router = useRouter();

    const handleSubmit = async values => {
        try {
            const response = await axios.post(API_URL, {
                username: values.username,
                password: values.password
            });

            const { token } = response.data;

            // Store the token securely (e.g., localStorage)
            localStorage.setItem('token', token);

            // Handle successful login
            message.success('Login successful!');
            router.push('/');
        } catch (error) {
            console.error('Error logging in:', error);
            message.error('Login failed. Please check your credentials and try again.');
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
                        <li className="active">
                            <Link href="/account/login">
                                <a>Login</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/account/register">
                                <a>Register</a>
                            </Link>
                        </li>
                    </ul>
                    <div className="ps-tab active" id="sign-in">
                        <div className="ps-form__content">
                            <h5>Log In Your Account</h5>
                            <Form.Item
                                name="username"
                                rules={[
                                    { required: true, message: 'Please input your username!' }
                                ]}
                            >
                                <Input
                                    className="form-control"
                                    type="text"
                                    placeholder="Username or email address"
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
                                    placeholder="Password..."
                                />
                            </Form.Item>
                            <Form.Item>
                                <Button
                                    type="primary"
                                    htmlType="submit"
                                    className="ps-btn ps-btn--fullwidth"
                                >
                                    Login
                                </Button>
                            </Form.Item>
                        </div>
                        <div className="ps-form__footer">
                            <p>Connect with:</p>
                            <ul className="ps-list--social">
                                <li>
                                    <a
                                        className="facebook"
                                        href="#"
                                        onClick={e => e.preventDefault()}
                                    >
                                        <i className="fa fa-facebook"></i>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="google"
                                        href="#"
                                        onClick={e => e.preventDefault()}
                                    >
                                        <i className="fa fa-google-plus"></i>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="twitter"
                                        href="#"
                                        onClick={e => e.preventDefault()}
                                    >
                                        <i className="fa fa-twitter"></i>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="instagram"
                                        href="#"
                                        onClick={e => e.preventDefault()}
                                    >
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

export default Login;
