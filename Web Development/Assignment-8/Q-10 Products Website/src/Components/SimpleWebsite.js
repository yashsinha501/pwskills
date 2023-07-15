import React, { useEffect } from 'react';

const SimpleWebsite = () => {
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
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

        const buttonContainer = document.createElement("div");
        buttonContainer.classList.add("button-container");

        const addToCartButton = document.createElement("button");
        addToCartButton.textContent = "Add to Cart";
        addToCartButton.classList.add("styled-button"); // Add CSS class to the button

        const buyNowButton = document.createElement("button");
        buyNowButton.textContent = "Buy Now";
        buyNowButton.classList.add("styled-button"); // Add CSS class to the button

        addToCartButton.addEventListener("click", () => {
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
          buyButton.classList.add("styled-button"); // Add CSS class to the button

          cartItem.appendChild(img);
          cartItem.appendChild(cartTitle);
          cartItem.appendChild(cartPrice);
          cartItem.appendChild(buyButton);

          cartList.appendChild(cartItem);
        });

        buttonContainer.appendChild(addToCartButton);
        buttonContainer.appendChild(buyNowButton);

        card.appendChild(img);
        card.appendChild(title);
        card.appendChild(price);
        card.appendChild(buttonContainer);

        productList.appendChild(card);
      });
    } catch (error) {
      console.log("Error:", error);
    }
  };

  return (
    <div className="container">
      <div id="product-list" className="row"></div>
      <div className="cart-container">
        <h1>Cart items</h1>
        <div id="cart-list" className="row"></div>
      </div>
    </div>
  );
};

export default SimpleWebsite;