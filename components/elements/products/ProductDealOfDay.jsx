import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import Link from 'next/link';
import useProduct from '~/hooks/useProduct';
import useEcomerce from '~/hooks/useEcomerce';
import Rating from '../Rating';
import { Modal } from 'antd';
import Link from 'next/link';
// import { StrapiProductPriceExpanded } from '~/utilities/product-helper';
// import ModuleProductActions from '~/components/elements/products/modules/ModuleProductActions';
// import ModuleProductProgressbar from '~/components/elements/products/modules/ModuleProductProgressbar';

const ProductDealOfDay = ({ product, index, ecomerce }) => {
    const { thumbnailImage, badge, title } = useProduct();

    const { addItem } = useEcomerce();

    function handleAddItemToWishlist() {
        console.log({ id: product.id }, ecomerce.wishlistItems, 'wishlist');
        addItem({ id: product.id }, ecomerce.wishlistItems, 'wishlist');
        const modal = Modal.success({
            centered: true,
            title: 'Success!',
            content: `This item has been added to your wishlist`,
        });
        modal.update;
    }

    function handleAddItemToCart(e) {
        e.preventDefault();
        addItem(
            { id: product.id, quantity: 1 },
            ecomerce.cartItems,
            'cart'
        );
    }

    const discount = (product.regular_price - product.price) / product.regular_price * 100;
    const formattedDiscount = discount.toFixed(2);
    return (
        <div className={`product item${index + 1}`}>
            <div className="product-thumbnail">
                {product.status === "publish" && product.stock_status === 'sold-out' ? (
                    <span
                        className={`product-status ${product.stock_status} ${product.stock_status === 'instock' ? 'In Stock' : 'Sold Out'
                            }`}>
                        {product.stock_status}
                    </span>
                ) : (<span></span>)}

                {product.regular_price > product.price && (
                    <span className="product-discount">{formattedDiscount}%</span>
                )}

                {product.featured ? (
                    <img
                        className="feature-image"
                        src={product && product.images && product.images[0] && product.images[0].src}
                        alt={product.name}
                    />
                ) : (
                    <img
                        className="image"
                        src={product && product.images && product.images[0] && product.images.length > 0 ? product.images[0].src : 'https://jkfenner.com/wp-content/uploads/2019/11/default.jpg'}
                        alt={product.name}
                    />
                )}
                <div className="product-hover-icons">
                    <button className="hover-icon1">
                        <img src="/static/img/icons/love.png" alt="Wishlist" onClick={() => handleAddItemToWishlist()} />
                    </button>
                    <button className="hover-icon2">
                        <img src="/static/img/icons/shopping.png" alt="Shopping Cart" style={{ width: '24px', height: '24px' }} onClick={(e) => handleAddItemToCart(e)} />
                    </button>
                    <Link href={`/product/${product.id}`}>
                        <button className="hover-icon2">
                            <img src="/static/img/icons/open-eye.png" alt="eyes" style={{ width: '24px', height: '24px' }} />
                        </button>
                    </Link>
                </div>
            </div>
            {product?.featured ? (
                <div className='ps-product__content__feature'>
                    <div className="ps-product__content">
                        <div className="ps-product__rating">
                            <Rating rating={product.rating} />
                            <span className='text-muted mx-2'>({product.rating_count})</span>
                        </div>
                    </div>
                    <div className="ps-product__content hover">
                        <span className="bold">{product.name}</span>
                        <div className="price">
                            {product.regular_price > product.price && (<p className="old">
                                <s>${product.regular_price}</s>
                            </p>)}
                            &nbsp;
                            <p className="new">${product.price} </p>
                        </div>
                    </div>

                    <p
                        style={{
                            maxWidth: '300px',
                            wordWrap: 'break-word',
                        }}>
                        <div className="new" dangerouslySetInnerHTML={{ __html: product.description }} />
                    </p>

                    <div className="d-flex align-items-center">
                        <a className="ps-btn ps-btn--white" href="#" onClick={() => handleAddItemToWishlist()}>
                            <i className="icon-heart"></i>
                        </a>

                        <a className="ps-btn ps-btn--black flex-fill text-center" href="#" onClick={(e) => handleAddItemToCart(e)}>
                            <i className="fas fa-shopping-cart"></i>
                            &nbsp; ADD TO CART
                        </a>

                        <a className="ps-btn ps-btn--white" href={`/product/${product.id}`}>
                            <i className="fas fa-eye"></i>
                        </a>

                    </div>

                    {/* <button className="hover-icon ps-btn--white">
                        <i className="fas fa-eye"></i>
                    </button> */}
                </div>
            ) : (
                <div className="product-details">
                    {product.rating ? <Rating /> : null}

                    <p
                        style={{
                            maxWidth: '200px',
                            wordWrap: 'break-word',
                            fontWeight: '500 '
                        }}>
                        {product.name}
                    </p>

                    <div className="price">
                        {product.regular_price > product.price && (<p className="old">
                            <s>${product.regular_price}</s>
                        </p>)}
                        &nbsp;
                        <p className="new">${product.price} </p>
                    </div>
                </div>
            )}
        </div>
    );
};

ProductDealOfDay.propTypes = {
    product: PropTypes.shape({
        image: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        price: PropTypes.string.isRequired,
        status: PropTypes.string,
        discount: PropTypes.string,
    }).isRequired,
};

export default connect((state) => state)(ProductDealOfDay);
