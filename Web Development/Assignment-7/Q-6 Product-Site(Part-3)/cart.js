window.addEventListener("DOMContentLoaded", () => {
    const cartItems = JSON.parse(sessionStorage.getItem("cartItems")) || [];
    const cartItemsContainer = document.getElementById("product-list");

    cartItems.forEach(item => {
        const card = createCard(item);
        cartItemsContainer.appendChild(card);
    });

    cartItemsContainer.addEventListener("click", event => {
        if (event.target.classList.contains("buy-button")) {
            const card = event.target.closest(".card");
            const itemId = card.dataset.itemId;
            console.log("Buy Now clicked for item:", itemId);
        } else if (event.target.classList.contains("delete-button")) {
            const card = event.target.closest(".card");
            const itemId = card.dataset.itemId;
            const updatedCartItems = cartItems.filter(cartItem => cartItem.id !== itemId);
            sessionStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
            card.remove();
        }
    });
});

function createCard(item) {
    const card = document.createElement("div");
    card.classList.add("card");
    card.dataset.itemId = item.id;

    const img = document.createElement("img");
    img.src = item.image;
    img.alt = item.title;

    const title = document.createElement("h3");
    title.textContent = item.title;

    const price = document.createElement("p");
    price.textContent = `Price: ${item.price}`;

    const buyButton = document.createElement("button");
    buyButton.classList.add("buy-button");
    buyButton.textContent = "Buy Now";

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-button");
    deleteButton.textContent = "Remove";

    card.appendChild(img);
    card.appendChild(title);
    card.appendChild(price);
    card.appendChild(buyButton);
    card.appendChild(deleteButton);

    return card;
}