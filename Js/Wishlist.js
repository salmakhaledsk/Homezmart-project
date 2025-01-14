const wishlistContainer = document.querySelector(".wishlist-container");
const emptyWishlistDiv = document.createElement("div");
emptyWishlistDiv.className = "empty_wishlist"; 
emptyWishlistDiv.innerHTML = `
  <h1>Your Wishlist Is Empty</h1>
  <br>
  <img src="../Resources/empty wishlist.webp"  width="200px" style="opacity: 0.5;">
  <br>
  <a href="./HomePage.html"><button class="Explore">Home Page</button></a>
`;

let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

function renderWishlist() {
  wishlistContainer.innerHTML = "";

  if (wishlist.length === 0) {
    wishlistContainer.appendChild(emptyWishlistDiv);
  } else {
    wishlist.forEach((product) => {
      const productCard = document.createElement("div");
      productCard.className = "wishlist-product-card";

      productCard.innerHTML = `
        <img src="${product.thumbnail}" alt="${product.name}">
        <h2>${product.name}</h2>
        <p>Price: $${product.price}</p>
        <button class="remove-button" data-id="${product.id}">Remove</button>
      `;

      wishlistContainer.appendChild(productCard);
    });

    const removeButtons = document.querySelectorAll(".remove-button");
    removeButtons.forEach((button) => {
      button.addEventListener("click", (event) => {
        const productId = +event.target.dataset.id;
        removeFromWishlist(productId);
      });
    });
  }
}

function removeFromWishlist(productId) {
  wishlist = wishlist.filter(function(item) {
    return item.id !== productId;
  });
  localStorage.setItem("wishlist", JSON.stringify(wishlist));
  renderWishlist();
}

renderWishlist();