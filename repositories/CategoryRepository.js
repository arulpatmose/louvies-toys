import axios from 'axios';

const baseUrl = process.env.API_URL + '/wp-json/wc/v3'; // Replace with your WooCommerce store URL
const consumerKey = process.env.API_USERNAME;
const consumerSecret = process.env.API_PASSWORD;

const Repository = axios.create({
    baseURL: baseUrl,
    auth: {
        username: consumerKey,
        password: consumerSecret,
    },
    headers: {
        'Content-Type': 'application/json',
    },
});

const serializeQuery = (params) => {
    return new URLSearchParams(params).toString();
};

 class CategoryRepository {
    async getRecords() {
        try {
            const response = await Repository.get('products/categories');
            return response.data;
        } catch (error) {
            console.error('Error fetching records:', error);
            return { error: JSON.stringify(error) };
        }
    }
}

export default new CategoryRepository();
