
import React from 'react';

const ProductList = ({ products }) => {
    return (
        <div>
            {products.map((product, index) => (
                <div key={index} className="product">
                    <h2>{product.name}</h2>
                    <p>Category: {product.category}</p>
                    <p>Price: ${product.price}</p>
                </div>
            ))}
        </div>
    );
};

export default ProductList;
