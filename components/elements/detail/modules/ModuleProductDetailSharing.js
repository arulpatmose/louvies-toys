import React from 'react';
import { Modal } from 'antd';
import useEcomerce from '~/hooks/useEcomerce';
import { connect } from 'react-redux';

const ModuleProductDetailSharing = ({product , ecomerce}) => {

    const { addItem } = useEcomerce();

    function handleAddItemToWishlist(e) {
        e.preventDefault();
        addItem({ id: product.id }, ecomerce.wishlistItems, 'wishlist');
        const modal = Modal.success({
            centered: true,
            title: 'Success!',
            content: `This item has been added to your wishlist`,
        });
        modal.update;
    }

    return (
        <div className="row-flex justify-content-start align-items-center">
            <div className="ps-product__actions row-flex">
                <div style={{ marginRight: '20px' }}>
                    <a href="#" onClick={(e) => handleAddItemToWishlist(e)}>
                        <i className="icon-heart"></i> Add to Wishlist
                    </a>
                </div>

                <div style={{ marginRight: '20px' }}>
                    <a href="#" onClick={(e) => handleAddItemToCompare(e)}>
                        <i className="fa fa-refresh" aria-hidden="true"></i> Add to
                        Compare
                    </a>
                </div>
            </div>

            <div className="ps-product__sharing">
                Share Product &nbsp;
                <a href="#">
                    <i className="fa fa-clone" aria-hidden="true"></i>
                </a>
                <a href="#">
                    <i className="fa fa-refresh" aria-hidden="true"></i>
                </a>
                {/* <a href="#">
                <i className="fa fa-refresh" aria-hidden="true"></i>
            </a>
            <a href="#">
                <i className="fa fa-refresh" aria-hidden="true"></i>
            </a>
            <a href="#">
                <i className="fa fa-twitter" aria-hidden="true"></i>
            </a>
            <a href="#">
                <i className="fa fa-pinterest" aria-hidden="true"></i>
            </a>
            <a className="facebook" href="#">
                <i className="fa fa-clone" aria-hidden="true"></i>
            </a>
            <a className="twitter" href="#">
                <i className="fa fa-twitter"></i>
            </a>
            <a className="google" href="#">
                <i className="fa fa-google-plus"></i>
            </a> 
             <a className="instagram" href="#">
                <i className="fa fa-instagram"></i>
            </a> */}
            </div>
        </div>
    )
};

export default connect((state) => state)(ModuleProductDetailSharing);
