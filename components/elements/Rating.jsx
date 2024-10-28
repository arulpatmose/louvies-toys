import React from 'react';

const Rating = ({ rating }) => {
    // Create an array to represent filled and empty stars based on the rating
    const stars = Array.from({ length: 5 }, (_, index) => {
        // Filled star if index is less than rating, else empty star
        return index < rating ? 'fa fa-star' : 'fa fa-star-o';
    });

    return (
        <span className="ps-rating">
            {stars.map((starClass, index) => (
                <i key={index} className={starClass}></i>
            ))}
        </span>
    );
};

export default Rating;
