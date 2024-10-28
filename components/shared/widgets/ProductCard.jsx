import React from 'react';

const ProductCard = () => {
    return (
        <div className="product-card">
            <div className="product-image">
                <img src="static/img/categories/images/d4.png" alt="Product" />
            </div>
            <p className="product-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </p>
            <div className="product-price-container">
                <span className="product-price-label">Only for:</span>
                <span className="product-price">$299 USD</span>
            </div>
            <button className="product-add-to-cart">
                <span className="cart-icon"></span>
                ADD TO CART &nbsp;
                <i className="fa fa-shopping-cart" aria-hidden="true"></i>
            </button>
            <button className="product-view-details">VIEW DETAILS →</button>
        </div>
    );
};

export default ProductCard;
