import React from 'react';
import Link from 'next/link';
import Rating from '~/components/elements/Rating';

const ModuleDetailTopInformation = ({ product }) => {
    // Views
    let priceView;

    if (product.is_sale) {
        priceView = (
            <h4 className="ps-product__price sale">
                <del className="mr-2">&{product.sale_price}</del>$
                {product.price}
            </h4>
        );
    } else {
        priceView = <h4 className="ps-product__price">${product.price}</h4>;
    }
    return (
        <header>
            <div className="ps-product__meta">
                {/* <p>
                    Brand:
                    <Link href="/shop">
                        <a className="ml-2 text-capitalize">{product.vendor}</a>
                    </Link>
                </p> */}
                <div className="ps-product__rating">
                    <Rating rating={Math.round(product.average_rating)}/>
                    <span />
                    ({product.average_rating} Start Rating)
                    <span>(21.9226 User Feedback)</span>
                </div>
            </div>
            <h1>
                {product.name}
            </h1>
            {/* <h1>{product.title}</h1> */}
        </header>
    );
};

export default ModuleDetailTopInformation;
