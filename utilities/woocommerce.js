import axios from 'axios';

// Replace with your actual site URL and WooCommerce credentials


const siteUrl = process.env.API_URL;
const API_USERNAME = process.env.API_USERNAME;
const API_PASSWORD = process.env.API_PASSWORD;

export const createWooCommerceOrder = async (orderData) => {
    try {
        const response = await axios.post(
            `${siteUrl}/wp-json/wc/v3/orders`,
            orderData,
            {
                auth: {
                    username: API_USERNAME,
                    password: API_PASSWORD,
                },
            }
        );
        return response.data;
    } catch (error) {
        console.error('Error creating WooCommerce order:', error);
        throw error;
    }
};


export const updateOrderSetPaid = async (orderId, setPaid , stripeData) => {
    try {
        const response = await axios.put(
            `${siteUrl}/wp-json/wc/v3/orders/${orderId}`,
            {
                set_paid: setPaid,
                status : 'completed',
                meta_data: [
                    { key: 'stripe_payment_session_id', value: stripeData.data.sessionId },
                    { key: 'stripe_payment_status', value: stripeData.status },
                    // Add any other Stripe data as needed
                ],
            },
            {
                auth: {
                    username: API_USERNAME,
                    password: API_PASSWORD,
                },
            }
        );
        return response.data;
    } catch (error) {
        console.error('Error updating WooCommerce order set_paid:', error);
        throw error;
    }
};