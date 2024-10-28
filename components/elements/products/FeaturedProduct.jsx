import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import useProduct from '~/hooks/useProduct';
import Rating from '../Rating';
import Link from 'next/link';

const FeaturedProduct = ({ product, index }) => {
    const { thumbnailImage, badge, title } = useProduct();
    console.log("product.images", product.images)
    const discount = (product.regular_price - product.price) / product.regular_price * 100;
    const formattedDiscount = discount.toFixed(2);
    return (
        <Link href={`/product/${product.id}`} key={product.id}>
            <div
                className='featured-product-item'
                style={{
                    border: '1px solid #c8c8c8',
                    borderRadius: '2px',
                }}>
                <div className="product-thumbnail">
                    {product.status && product.status === 'SOLD OUT' ? (
                        <span
                            className={`product-status ${product.status} ${product.status === 'SOLD OUT' ? 'sold-out' : ''
                                }`}>
                            {product.status.replace('-', ' ')}
                        </span>
                    ) : (<span />)}

                    {product.regular_price > product.price && (
                        <span className="product-discount">{formattedDiscount}%</span>
                    )}

                    <img
                        className="image"
                        src={(product.images && product.images[0]) ? product.images[0].src : 'https://jkfenner.com/wp-content/uploads/2019/11/default.jpg'}
                        alt={product.name}
                    />

                    <div className="product-hover-icons">
                        <button className="hover-icon1">
                            <img src="/static/img/icons/love.png" alt="Wishlist" />
                        </button>
                        <button className="hover-icon2">
                            <img src="/static/img/icons/shopping.png" alt="Shopping Cart" style={{ width: '24px', height: '24px' }} />
                        </button>
                        <button className="hover-icon2">
                            <img src="/static/img/icons/open-eye.png" alt="eyes" style={{ width: '24px', height: '24px' }} />
                        </button>
                    </div>
                </div>
                <div className="product-details px-3 py-2 d-flex flex-column align-items-start">
                    <div><Rating rating={product.rating} />  <span className='text-muted mx-2'>({product.rating_count})</span></div>

                    <p style={{ 'fontWeight': '500' }}>
                        {product.name != undefined ? (
                            product.name.length > 15 ? product.name.substring(0, 15) : product.name
                        ) : (
                            product.title.length > 15 ? product.title.substring(0, 15) : product.title
                        )}
                    </p>
                    <div className="price">
                        {product.regular_price > product.price && (<p className="old">
                            <s>${product.regular_price}</s>
                        </p>)}
                        &nbsp;
                        <p className="new">${product.price} </p>
                    </div>
                </div>
            </div>
        </Link>
    );
};

FeaturedProduct.propTypes = {
    product: PropTypes.shape({
        image: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        price: PropTypes.string.isRequired,
        status: PropTypes.string,
        discount: PropTypes.string,
    }).isRequired,
};

export default connect()(FeaturedProduct);
