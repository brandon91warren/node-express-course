document.getElementById('fetchProductsBtn').addEventListener('click', () => {
    fetch('/api/v1/products')
        .then((response) => response.json())
        .then((data) => {
            const productListDiv = document.getElementById('productList');
            productListDiv.innerHTML = ''; 
            data.forEach((product) => {
                const productDiv = document.createElement('div');
                productDiv.classList.add('product-item');
                productDiv.innerHTML = `
                    <h3>${product.name}</h3>
                    <img src="${product.image}" alt="${product.name}" style="width: 100px;">
                    <p>Price: $${product.price}</p>
                    <p>Description: ${product.desc}</p>
                `;
                productListDiv.appendChild(productDiv);
            });
        })
        .catch((error) => {
            console.error('Error fetching products:', error);
        });
});
