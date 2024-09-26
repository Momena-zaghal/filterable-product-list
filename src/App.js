// src/App.js
import React, { useState } from 'react';
import ProductList from './ProductList';
import './App.css';
const App = () => {
    const [products] = useState([
        { name: 'Laptop', category: 'Electronics', price: 999 },
        { name: 'Shirt', category: 'Clothing', price: 29 },
        { name: 'Phone', category: 'Electronics', price: 799 },
        { name: 'Pants', category: 'Clothing', price: 49 },
        // Add more products as needed
    ]);

    const [activeFilter, setActiveFilter] = useState('All');

    // Filter products based on the active filter
    const filteredProducts = activeFilter === 'All'
        ? products
        : products.filter(product => product.category === activeFilter);

    return (
        <div className="container">
            <h1>Product List</h1>
            <div>
                <button onClick={() => setActiveFilter('All')}>All</button>
                <button onClick={() => setActiveFilter('Electronics')}>Electronics</button>
                <button onClick={() => setActiveFilter('Clothing')}>Clothing</button>
            </div>
            <ProductList products={filteredProducts} />
        </div>
    );
};

export default App;
