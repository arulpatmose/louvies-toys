import React from 'react';
import Link from 'next/link';

const ModuleProductDetailSpecification = ({ product }) => {
    const formattedPrice = Number(product.price).toFixed(2);
    const formattedRegPrice = Number(product.regular_price).toFixed(2);
    const discountPercentage =
        ((product.regular_price - product.price) / product.regular_price) * 100;
    const formattedDiscount =
        discountPercentage > 0 ? discountPercentage.toFixed(0) : null;
    const tagNames = product.tags.map((tag) => tag.name);
    const isSale = Number(formattedRegPrice > Number(formattedPrice));
    // Views
    let priceView;

    // if (product.is_sale) {
    //     priceView = (
    //         <h4 className="ps-product__price sale">
    //             <del className="mr-2">&{product.sale_price}</del>$
    //             {product.price}
    //         </h4>
    //     );
    // } else {
    //     priceView = <h4 className="ps-product__price">${product.price}</h4>;
    // }

    priceView = (
        <h4 className="ps-product__price sale text-dark d-flex align-items-center">
            ${formattedPrice}&nbsp;
            {isSale && <del className="mr-2">{formattedRegPrice}</del>}
            {formattedDiscount != null && (
                <span className="product-discount-auto">
                    {formattedDiscount}% OFF
                </span>
            )}
        </h4>
    );

    return (
        <div>
            <div className="ps-product__specification">
                {/* <Link href="/page/blank">
            <a className="report">Report Abuse</a>
        </Link> */}

                <div>
                    <p>
                        <strong>SKU:</strong> {product.sku}
                    </p>

                    <p className="tags">
                        <strong>Tags: </strong>
                        {tagNames.length > 0
                            ? tagNames.join(', ')
                            : 'No tags available'}
                    </p>
                </div>

                <div>
                    <p className="tags">
                        <strong> Availability</strong>
                        <a>
                            {product.stock_status == 'instock'
                                ? 'In Stock'
                                : 'Sold Out'}
                        </a>
                    </p>

                    <p className="categories">
                        <strong> Categories:</strong>
                        {product.categories.map((category) => (
                            <Link
                                href={`/shop/${category.slug}`}
                                key={category.id}>
                                <a>{category.name}</a>
                            </Link>
                        ))}
                    </p>
                </div>
            </div>

            {priceView}
        </div>
    );
};

export default ModuleProductDetailSpecification;
