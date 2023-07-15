async function fetchData() {
    try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();

        const productList = document.getElementById("product-list");

        data.forEach(product => {
            const card = document.createElement("div");
            card.classList.add("card");

            const img = document.createElement("img");
            img.src = product.image;
            img.alt = product.title;

            const title = document.createElement("h3");
            title.textContent = product.title;

            const price = document.createElement("p");
            price.textContent = `Price: ${product.price}`;

            const button = document.createElement("button");
            button.textContent = "Add to Cart";

            button.addEventListener("click", () => {
                // Add the selected product to the cart in sessionStorage
                const selectedProduct = {
                    id: product.id,
                    title: product.title,
                    price: product.price,
                    image: product.image
                };

                const cartItems = JSON.parse(sessionStorage.getItem("cartItems")) || [];
                cartItems.push(selectedProduct);
                sessionStorage.setItem("cartItems", JSON.stringify(cartItems));

                // Redirect to the "cart" page (change 'cart.html' to your desired page)
                window.location.href = "cart.html";
            });

            card.appendChild(img);
            card.appendChild(title);
            card.appendChild(price);
            card.appendChild(button);

            productList.appendChild(card);
        });
    } catch (error) {
        console.log("Error:", error);
    }
}

fetchData();
async function fetchData() {
    try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();

        const productList = document.getElementById("product-list");

        data.forEach(product => {
            const card = document.createElement("div");
            card.classList.add("card");

            const img = document.createElement("img");
            img.src = product.image;
            img.alt = product.title;

            const title = document.createElement("h3");
            title.textContent = product.title;

            const price = document.createElement("p");
            price.textContent = `Price: ${product.price}`;

            const button = document.createElement("button");
            button.textContent = "Add to Cart";

            button.addEventListener("click", () => {
                // Add the selected product to the cart in sessionStorage
                const selectedProduct = {
                    id: product.id,
                    title: product.title,
                    price: product.price,
                    image: product.image
                };

                const cartItems = JSON.parse(sessionStorage.getItem("cartItems")) || [];
                cartItems.push(selectedProduct);
                sessionStorage.setItem("cartItems", JSON.stringify(cartItems));

                // Redirect to the "cart" page (change 'cart.html' to your desired page)
                window.location.href = "cart.html";
            });

            card.appendChild(img);
            card.appendChild(title);
            card.appendChild(price);
            card.appendChild(button);

            productList.appendChild(card);
        });
    } catch (error) {
        console.log("Error:", error);
    }
}

fetchData();