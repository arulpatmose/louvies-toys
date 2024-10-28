import React from 'react';
import Link from 'next/link';
import ModuleProductActions from '~/components/elements/products/modules/ModuleProductActions';
import useProduct from '~/hooks/useProduct';
import Rating from '~/components/elements/Rating';

const Product = ({ product }) => {
    const { thumbnailImage, price, badge, title } = useProduct();
    return (
        <a href={`/product/${product.id}`}>
            <div className="ps-product">
                <div className="ps-product__thumbnail">
                    <Link href="/product/[pid]" as={`/product/${product.id}`}>
                        <a>{thumbnailImage(product)}</a>
                    </Link>
                    {badge(product)}
                    <ModuleProductActions product={product} />
                </div>
                <div className="ps-product__container">
                    <Link href="/shop">
                        <a className="ps-product__vendor">{product.name}</a>
                    </Link>
                    <div className="ps-product__content">
                        {title(product)}
                        <div className="ps-product__rating">
                            <Rating />
                            <span>{product.average_rating}</span>
                        </div>
                        {price(product)}
                    </div>
                    <div className="ps-product__content hover">
                        {title(product)}
                        {price(product)}
                    </div>
                </div>
            </div>
        </a>
    );
};

export default Product;