import React from 'react';
import { Rate } from 'antd';
import Rating from '~/components/elements/Rating';

const PartialReview = ({ product }) => {
    // Extract ratings data from product
    const { average_rating, rating_counts = {} } = product;
    
    // Helper function to calculate percentage
    const calculatePercentage = (count, total) => {
        return total === 0 ? 0 : (count / total) * 100;
    };

    // Total number of reviews
    const totalReviews = Object.values(rating_counts).reduce((acc, count) => acc + count, 0);

    return (
        <div className="row">
            <div className="col-xl-5 col-lg-5 col-md-12 col-sm-12 col-12">
                <div className="ps-block--average-rating">
                    <div className="ps-block__header">
                        <h3>{average_rating || 'No rating yet'}</h3>
                        <Rating />

                        <span>{totalReviews} Review{totalReviews !== 1 ? 's' : ''}</span>
                    </div>
                    {[5, 4, 3, 2, 1].map((star) => (
                        <div className="ps-block__star" key={star}>
                            <span>{star} Star</span>
                            <div className="ps-progress" data-value={calculatePercentage(rating_counts[star] || 0, totalReviews)}>
                                <span></span>
                            </div>
                            <span>{rating_counts[star] || 0}</span>
                        </div>
                    ))}
                </div>
            </div>
            <div className="col-xl-7 col-lg-7 col-md-12 col-sm-12 col-12">
                <form className="ps-form--review" action="/" method="get">
                    <h4>Submit Your Review</h4>
                    <p>
                        Your email address will not be published. Required fields
                        are marked
                        <sup>*</sup>
                    </p>
                    <div className="form-group form-group__rating">
                        <label>Your rating of this product</label>
                        <Rate defaultValue={1} />
                    </div>
                    <div className="form-group">
                        <textarea
                            className="form-control"
                            rows="6"
                            placeholder="Write your review here"></textarea>
                    </div>
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                            <div className="form-group">
                                <input
                                    className="form-control"
                                    type="text"
                                    placeholder="Your Name"
                                />
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                            <div className="form-group">
                                <input
                                    className="form-control"
                                    type="email"
                                    placeholder="Your Email"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="form-group submit">
                        <button className="ps-btn">Submit Review</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default PartialReview;
