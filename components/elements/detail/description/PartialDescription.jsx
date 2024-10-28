import React from 'react';

const PartialDescription = ({ product }) => (
    <div className="ps-document">
        <div dangerouslySetInnerHTML={{ __html: product.description }} />
    </div>
);

export default PartialDescription;
