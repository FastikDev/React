import React from "react";

const ProductRow = ({ product }) => {
    const name = product.stoсked ? product.name :
        <span style={{color: 'red'}}>
            {product.name}
        </span>;

    return (
        <tr>
            <td>{name}</td>
            <td>{product.price}</td>
        </tr>
    );
};

export default ProductRow;