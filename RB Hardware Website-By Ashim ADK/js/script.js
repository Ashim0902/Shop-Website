fetch('productsimg/products.json')
    .then(response => response.json())
    .then(products => {
        const productContainer = document.getElementById('productContainer');

        products.forEach(product => {

            const productCard = document.createElement('div');
            productCard.className = 'product-card';
            productCard.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h2>${product.name}</h2>
                <p>${product.description}</p>
            `;
            productContainer.appendChild(productCard);
        });
    })
    