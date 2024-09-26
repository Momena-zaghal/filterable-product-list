const products = [
    { name: 'Laptop', category: 'electronics', price: 999 },
    { name: 'Shirt', category: 'clothing', price: 25 },
    { name: 'Smartphone', category: 'electronics', price: 699 },
    { name: 'Pants', category: 'clothing', price: 45 },
    { name: 'Headphones', category: 'electronics', price: 199 },
    { name: 'Jacket', category: 'clothing', price: 75 },
    // Add more products as needed
];

const productDisplay = document.getElementById('product-display');

function displayProducts(filteredProducts) {
    productDisplay.innerHTML = ''; // Clear previous products
    filteredProducts.forEach(product => {
        const productItem = document.createElement('div');
        productItem.classList.add('product-item');
        productItem.innerHTML = `
            <h3>${product.name}</h3>
            <p>Category: ${product.category}</p>
            <p>Price: $${product.price}</p>
        `;
        productDisplay.appendChild(productItem);
    });
}

// Initial display of all products
displayProducts(products);

// Event listener for filter buttons
const filterButtons = document.querySelectorAll('.filter-button');
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const category = button.getAttribute('data-category');
        const filteredProducts = category === 'all'
            ? products
            : products.filter(product => product.category === category);
        displayProducts(filteredProducts);
    });
});
