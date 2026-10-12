const productsContainer = document.getElementById("products");

async function fetchProducts() {
    try {
        const response = await fetch("https://fakestoreapi.com/products");

        if (!response.ok) {
            throw new Error("Failed to fetch products");
        }

        const products = await response.json();

        productsContainer.innerHTML = "";

        products.forEach(product => {
            const card = document.createElement("div");
            card.className = "product-card";

            card.innerHTML = `
                <img src="${product.image}" alt="Product">
                <h3>${product.title}</h3>
                <p class="price">$${product.price}</p>
                <p>Category: ${product.category}</p>
            `;

            productsContainer.appendChild(card);
        });

    } catch (error) {
        productsContainer.innerHTML =
            "<p>Failed to load products. Please try again later.</p>";
    }
}

fetchProducts();