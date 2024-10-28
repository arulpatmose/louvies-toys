// pages/api/create-checkout-session.js
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRECT_KEY); // Replace with your Stripe secret key

export default async (req, res) => {
    if (req.method === 'POST') {
        const { items } = req.body; // Assuming you're sending products/items in the request body

        try {
            const session = await stripe.checkout.sessions.create({
                payment_method_types: ['card'],
                line_items: items.map(item => ({
                    price_data: {
                        currency: 'usd',
                        product_data: {
                            name: item.name,
                        },
                        unit_amount: item.price * 100, // Stripe expects the amount in cents
                    },
                    quantity: item.quantity,
                })),
                mode: 'payment',
                success_url: `${req.headers.origin}/order-success/success?session_id={CHECKOUT_SESSION_ID}`,
                cancel_url: `${req.headers.origin}/cancel`,
            });

            res.status(200).json({ sessionId: session.id });
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    } else {
        res.setHeader('Allow', 'POST');
        res.status(405).end('Method Not Allowed');
    }
};