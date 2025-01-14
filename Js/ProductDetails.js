function returnHome() {
  // Navigate to the index.html page
  window.location.href = "HomePage.html";
  // Prevent the default behavior of the link
  return false;
}
function logout() {
  sessionStorage.removeItem("userToken");

  window.location.replace("../Pages/index.html");
}

const storedProductData = sessionStorage.getItem("product");

if (storedProductData) {
  var product = JSON.parse(storedProductData);
  console.log(product);

  // Product Images
  var tag = document.querySelector(".images-Section");

  // Thumbnails
  const Thumbnails = document.createElement("div");
  Thumbnails.classList.add("thumbnail-images");
  for (const img of product.images) {
    Thumbnails.innerHTML += `<img src="${img}" alt="Thumbnail">`;
  }
  tag.appendChild(Thumbnails);

  // Main Image
  const MainImage = document.createElement("div");
  MainImage.classList.add("product-image");
  MainImage.innerHTML += `<img src="${product.thumbnail}" alt="Main Product Image">`;
  tag.appendChild(MainImage);

  // Product Info
  function generateStarRating(rating) {
    const maxStars = 5;
    let stars = "";
    for (let i = 1; i <= maxStars; i++) {
      if (i <= rating) {
        stars += "★"; // Filled star
      } else {
        stars += "☆"; // Empty star
      }
    }
    return stars;
  }

  // Update Product Title
  document.querySelector(".product-title").textContent = product.title;

  // Update Product Rating
  document.querySelector(".product-rating .stars").textContent =
    generateStarRating(product.rating);
  document.querySelector(
    ".product-rating .rating-value"
  ).textContent = `(${product.rating})`;

  // Update Product Description
  document.querySelector(".product-description p").textContent =
    product.description;

  // Update Product Specifications
  const specsList = document.querySelector(".product-specs ul");
  specsList.innerHTML = `
      ${
        product.brand ? `<li><strong>Brand:</strong> ${product.brand}</li>` : ""
      }
      <li><strong>Model:</strong> ${product.sku}</li>
      <li><strong>Weight:</strong> ${product.weight} lbs</li>
      <li><strong>Dimensions:</strong> ${product.dimensions.width}" (W) x ${
    product.dimensions.height
  }" (H) x ${product.dimensions.depth}" (D)</li>
      <li><strong>Stock:</strong> ${product.stock}</li>
    `;

  // Update Pricing Info
  const priceAfterDiscount = (
    product.price *
    (1 - product.discountPercentage / 100)
  ).toFixed(2);
  document.querySelector(
    ".current-price .price"
  ).textContent = `Now $${priceAfterDiscount}`;
  document.querySelector(
    ".current-price .oldPrice"
  ).textContent = `$${product.price}`;
  document.querySelector(".savings .save-amount").textContent = `$${(
    product.price - priceAfterDiscount
  ).toFixed(2)}`;

  // Update Shipping and Warranty
  const moreInfoList = document.querySelector(".more-info ul");
  moreInfoList.innerHTML = `
      <li><span class="uil uil-bus-school"></span>${product.shippingInformation}</li>
      <li><span class="uil uil-package"></span>${product.warrantyInformation}</li>
      <button class="cart-Button">Add To Cart</button>
    `;

  // Update Delivery Options
  const deliveryOptions = document.querySelector(
    ".delivery-options .options-grid"
  );
  deliveryOptions.innerHTML = `
      <div class="option">
        <img src="../Resources/Product Icons/shipped.png" alt="Shipping">
        <div class="details">
          <p class="title">Shipping</p>
          <p class="info">${product.shippingInformation}</p>
        </div>
      </div>
      <div class="option">
        <img src="../Resources/Product Icons/truck.png" alt="Pickup">
        <div class="details">
          <p class="title">Pickup</p>
          <p class="info">Not available</p>
        </div>
      </div>
      <div class="option">
        <img src="../Resources/Product Icons/delivery.png" alt="Delivery">
        <div class="details">
          <p class="title">Delivery</p>
          <p class="info">Not available</p>
        </div>
      </div>
    `;

  // Update Seller Info
  document.querySelector(
    ".seller-info p"
  ).innerHTML = `Sold and shipped by <strong>${
    product.brand || "Fengbin"
  }</strong>`;
  document.querySelector(".seller-rating .stars").textContent =
    generateStarRating(product.rating);
  document.querySelector(
    ".seller-rating .rating"
  ).textContent = `${product.rating} stars out of 5`;
  document.querySelector(
    ".seller-rating .reviews"
  ).textContent = `(${product.reviews.length} seller reviews)`;

  // Update Product Reviews
  const reviewsContainer = document.querySelector(".product-reviews");
  reviewsContainer.innerHTML = `
      <h2>Customer Reviews</h2>
      ${product.reviews
        .map(
          (review) => `
        <div class="review">
          <p class="reviewer">${review.reviewerName}</p>
          <p class="rating">${generateStarRating(review.rating)}</p>
          <p class="comment">${review.comment}</p>
          <p class="date">Reviewed on ${new Date(
            review.date
          ).toLocaleDateString()}</p>
        </div>
      `
        )
        .join("")}
    `;

  // Add To Cart Function
  const cartButton = document.querySelector(".cart-Button");
  if (cartButton)
  {
    cartButton.addEventListener("click", () => {
      AddToCart({
        id: product.id,
        name: product.title,
        price: product.price,
        thumbnail: product.thumbnail,
      });
    });
  }

 
} else {
  console.log("No product data found in session storage.");
}

// Add To Cart Function
function AddToCart(item) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  // Add the item to the cart
  cart.push(item);
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Product added to cart!");
  updateCartCounter();
}


// Update Cart Counter
function updateCartCounter() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const cartCounter = document.getElementById("cartCounter");
  if (cartCounter) {
    cartCounter.textContent = cart.length;
  }
}

updateCartCounter();



