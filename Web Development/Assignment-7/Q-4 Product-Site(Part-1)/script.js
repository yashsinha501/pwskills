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