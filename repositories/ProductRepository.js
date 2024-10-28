import axios from 'axios';

const baseUrl = process.env.API_URL+'/wp-json/wc/v3'; // Replace with your WooCommerce store URL
const consumerKey = process.env.API_USERNAME;
const consumerSecret = process.env.API_PASSWORD;

const Repository = axios.create({
    baseURL: baseUrl,
    auth: {
        username: consumerKey,
        password: consumerSecret
    },
    headers: {
        'Content-Type': 'application/json'
    }
});

const serializeQuery = (params) => {
    return new URLSearchParams(params).toString();
};

class ProductRepository {
    async getRecords(params) {
        try {
            const response = await Repository.get(`/products?${serializeQuery(params)}`);
            return response.data;
        } catch (error) {
            console.error('Error fetching records:', error);
            return { error: JSON.stringify(error) };
        }
    }

    async getProducts(params) {
        try {
            const response = await Repository.get(`/products?${serializeQuery(params)}`);
            return response.data.length > 0 ? response.data : null;
        } catch (error) {
            console.error('Error fetching products:', error);
            return null;
        }
    }

    async getBrands() {
        try {
            const response = await Repository.get('/products/attributes/pa_brand'); // Adjust if needed
            return response.data;
        } catch (error) {
            console.error('Error fetching brands:', error);
            return { error: JSON.stringify(error) };
        }
    }

    async getProductCategories() {
        try {
            const response = await Repository.get('/products/categories');
            return response.data;
        } catch (error) {
            console.error('Error fetching product categories:', error);
            return { error: JSON.stringify(error) };
        }
    }

    async getTotalRecords() {
        try {
            const response = await Repository.get('/products?per_page=1'); // Workaround to get total count from headers
            const totalRecords = response.headers['x-wp-total'];
            return { count: totalRecords };
        } catch (error) {
            console.error('Error fetching total records:', error);
            return { error: JSON.stringify(error) };
        }
    }

    async getProductsById(productId) {
        try {
            const response = await Repository.get(`/products/${productId}`);
            return response.data;
        } catch (error) {
            console.error('Error fetching product by ID:', error);
            return { error: JSON.stringify(error) };
        }
    }

    async getCategoryIdBySlug(slug) {
        try {
            // Fetch categories using the provided slug
            const response = await Repository.get(`/products/categories?slug=${slug}`);
            
            // Check if any category matches the slug and return the ID
            if (response.data.length > 0) {
                return response.data[0].id; // Return the first category ID that matches the slug
            } else {
                return null; // No category found with the provided slug
            }
        } catch (error) {
            console.error('Error fetching category ID by slug:', error);
            return { error: JSON.stringify(error) };
        }
    }

    async getProductsByCategory(slug) {
        try {
            // Step 1: Get the category ID using the slug
            const categoryResponse = await Repository.get(`/products/categories?slug=${slug}`);
            if (categoryResponse.data.length > 0) {
                const categoryId = categoryResponse.data[0].id;

                console.log(`categoryId '${categoryId}'`);

                // Step 2: Fetch products that belong to the category ID
                const productsResponse = await Repository.get(`/products?category=${categoryId}`);
                return productsResponse.data.length > 0 ? productsResponse.data : [];
            } else {
                console.log(`No category found with the slug '${slug}'`);
                return [];
            }
        } catch (error) {
            console.error('Error fetching products by category slug:', error);
            return { error: JSON.stringify(error) };
        }
    }

    async getProductsByBrand(slug) {
        try {
            const response = await Repository.get(`/products/attributes/pa_brand?slug=${slug}`); // Adjust if needed
            return response.data.length > 0 ? response.data[0] : null;
        } catch (error) {
            console.error('Error fetching products by brand:', error);
            return null;
        }
    }

    async getProductsByIds(ids) {
        console.log("ids",ids);
        try {
            const endPoint = `/products?include=${ids}`;
            const response = await Repository.get(endPoint);
            console.log("res",response.data.length);
            return response.data.length > 0 ? response.data : null;
        } catch (error) {
            console.error('Error fetching products by IDs:', error);
            return null;
        }
    }

    async getProductsByBestSelling() {
        try {
            const endPoint = `/products?orderby=popularity&order=desc&per_page=9`;
            const response = await Repository.get(endPoint);
            console.log("getProductsByBestSelling",response.data.length);
            return response.data.length > 0 ? response.data : null;
        } catch (error) {
            console.error('Error fetching products by IDs:', error);
            return null;
        }
    }
    async getProductsByNewArrival() {
        try {
            const endPoint = `/products?orderby=date&per_page=10`;
            const response = await Repository.get(endPoint);
            console.log("getProductsByNewArrival",response.data.length);
            return response.data.length > 0 ? response.data : null;
        } catch (error) {
            console.error('Error fetching products by New Arrival:', error);
            return null;
        }
    }
}

export default new ProductRepository();
