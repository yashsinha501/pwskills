async function fetchData() {
    try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();

        const productList = document.getElementById("product-list");
        const cartList = document.getElementById("cart-list");

        const slicedData = data.slice(0, 4);

        slicedData.forEach((product) => {
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
                const cartItem = document.createElement("div");
                cartItem.classList.add("cart-card");

                const cartTitle = document.createElement("h3");
                cartTitle.textContent = product.title;

                const cartPrice = document.createElement("p");
                cartPrice.textContent = `$${product.price}`;

                let img = document.createElement("img");
                img.src = product.image;
                img.alt = product.title;

                let buyButton = document.createElement("button");
                buyButton.textContent = "Buy Now";

                cartItem.appendChild(img);
                cartItem.appendChild(cartTitle);
                cartItem.appendChild(cartPrice);
                cartItem.appendChild(buyButton)

                cartList.appendChild(cartItem);
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