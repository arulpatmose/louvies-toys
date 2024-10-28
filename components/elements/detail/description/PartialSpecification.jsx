import React from 'react';

const PartialSpecification = ({ product }) => {

    const attributes = product.attributes || [];
    const dimensions = product.dimensions || {};
    const weight = product.weight;

    return (
        <div className="table-responsive">
            <table className="table table-bordered ps-table ps-table--specification">
                <tbody>
                    {attributes.map((attribute) => (
                        <tr key={attribute.id}>
                            <td>{attribute.name}</td>
                            <td>{attribute.options.join(', ')}</td>
                        </tr>
                    ))}
                    {dimensions.height && (
                        <tr>
                            <td>Height</td>
                            <td>{dimensions.height} cm</td>
                        </tr>
                    )}
                    {dimensions.length && (
                        <tr>
                            <td>Length</td>
                            <td>{dimensions.length} cm</td>
                        </tr>
                    )}
                    {dimensions.width && (
                        <tr>
                            <td>Width</td>
                            <td>{dimensions.width} cm</td>
                        </tr>
                    )}
                    {weight && <tr>
                        <td>Weight</td>
                        <td>{weight} Kg</td>
                    </tr>}
                </tbody>
            </table>
        </div>
    )
}

export default PartialSpecification;
