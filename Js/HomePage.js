// var interval;
// var counter = 0;
// var images = ["1.jpg", "2.jpg", "3.jpg"];
// var image = document.getElementById("img");

// setInterval(function () {
//   counter = (counter + 1) % images.length;
//   image.src = "../Resources/" + images[counter];
// }, 2000);

//Navigation Section
function Navigateto(page) {
  window.location.assign(`../Pages/${page}.html`);
}
function logout() {
  sessionStorage.removeItem("userToken");

  window.location.replace("../Pages/index.html");
}

// Reduced Code

// Main Function
function getData(url, targetElement, fun) {
  let xhr = new XMLHttpRequest();
  xhr.open("GET", url);
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      let Data = JSON.parse(xhr.response);
      fun(Data, targetElement);
    }
  };
  xhr.send();
}

// Categories Name
let selectedCategory = document.querySelector(".categoriesList");
function selectCategory(categories, tag) {
  // Adding Category Data to the select options
  for (const key of categories) {
    tag.innerHTML += `<option value=${key.slug}>${key.name}</option>`;
  }
  tag.addEventListener("change", function (event) {
    const selectedValue = event.target.value; // Get the selected option value
    sessionStorage.setItem("Category", selectedValue.toLowerCase());
    const CategoryData = {
      CategoryName: selectedValue.toLocaleLowerCase(),
    };

    sessionStorage.setItem("category", JSON.stringify(CategoryData));
    window.location.href = `../Pages/CategoryPage.html?id=${CategoryData.CategoryName}`;
  });
}

getData(
  "https://dummyjson.com/products/categories",
  selectedCategory,
  selectCategory
);

// Showing Products
const divsWithClass = document.querySelectorAll(".products");
const randomOffset = Math.floor(Math.random() * 100);
const randomOffsets = Math.floor(Math.random() * 100);
const url1 = `https://dummyjson.com/products?limit=10&skip=${randomOffset}&select=title,price,description,thumbnail,images,description,brand,sku,weight,rating,discountPercentage,reviews,returnPolicy,availabilityStatus,shippingInformation,warrantyInformation,dimensions,stock`;
const url2 = `https://dummyjson.com/products?limit=10&skip=${randomOffsets}&select=title,price,description,thumbnail,images,description,brand,sku,weight,rating,discountPercentage,reviews,returnPolicy,availabilityStatus,shippingInformation,warrantyInformation,dimensions,stock`;
function showProduct(list, tag) {
  const productContainer = tag;
  console.log(list.products[0]);
  list.products.forEach((product) => {
    var description = product.description;
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");
    productCard.innerHTML = `
          <i class="fa-solid fa-heart fav-button"></i>
          <img src="${product.thumbnail}" alt="${product.title}" height="100px" width="100px">
          <p class="Price">Price: $${product.price}</p>
          <p>${product.title}</p>
       <p class="description"> ${description}.</p>
      <button class="add-to-cart-btn">Add to Cart</button>
        `;

    productContainer.appendChild(productCard);

    // Add to Cart Button Event
    const addToCartButton = productCard.querySelector(".add-to-cart-btn");
    addToCartButton.addEventListener("click", (event) => {
      event.stopPropagation(); // Prevent card click event from triggering

      AddToCart({
        id: product.id,
        name: product.title,
        price: product.price,
        thumbnail: product.thumbnail,
      });
    });
/////////////////////////////////////wishlist////////////////
const favButton = productCard.querySelector(".fav-button");
favButton.addEventListener("click", (event) => {
  event.stopPropagation();
  addToWishlist(product);
});

function addToWishlist(product) {
  let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
  const isProductInWishlist = wishlist.some((item) => item.id === product.id);

  if (!isProductInWishlist) {
    wishlist.push({
      id: product.id,
      name: product.title,
      price: product.price,
      thumbnail: product.thumbnail,
    });
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
    alert("Product added to wishlist!");
  } else {
    alert("Product is already in your wishlist.");
  }
}
///////////////////////////////////////////////////////////////////////
    // Click Event
    productCard.addEventListener("click", () => {
      const productData = {
        title: product.title,
        price: product.price,
        discountPrice: (product.price -=
          product.price * product.discountPercentage),
        description: product.description,
        thumbnail: product.thumbnail,
        images: product.images,
        sku: product.sku,
        weight: product.weight,
        rating: product.rating,
        discountPercentage: product.discountPercentage,
        reviews: product.reviews,
        returnPolicy: product.returnPolicy,
        availabilityStatus: product.availabilityStatus,
        shippingInformation: product.shippingInformation,
        warrantyInformation: product.warrantyInformation,
        dimensions: product.dimensions,
        stock: product.stock,
      };

      sessionStorage.setItem("product", JSON.stringify(productData));
      window.location.href = `../Pages/product-details.html?id=${productData.title}`;
    });
  });
}
getData(url1, divsWithClass[0], showProduct);
getData(url2, divsWithClass[1], showProduct);

// Categories Page
const categoriesBar = document.querySelectorAll(".category");
categoriesBar.forEach((element) => {
  element.addEventListener("click", function () {
    const CategoryData = {
      CategoryName: element.children[1].textContent.toLocaleLowerCase(),
    };

    sessionStorage.setItem("category", JSON.stringify(CategoryData));
    // window.location.href = `../Pages/CategoryPage.html?id=${CategoryData.CategoryName}`;
    window.location.href = `../Pages/CategoryPage.html?id=${CategoryData.CategoryName}`;
  });
});

// Add to cart & Wishlist
function AddToCart(item) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const isProductInCart = cart.some((product) => product.id === item.id);

  if (!isProductInCart) {
    cart.push(item);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Product added to cart!");
  } else {
    alert("Product is already in the cart.");
  }
  updateCartCounter();
}

function updateCartCounter() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const cartCounter = document.getElementById("cartCounter");
  if (cartCounter) {
    cartCounter.textContent = cart.length;
  }
}
updateCartCounter();


const searchInput = document.getElementById("searchInput");
const searchResults = document.getElementById("searchResults");

// Searching Section
function searchProducts(query) {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", `https://dummyjson.com/products/search?q=${query}`);
  xhr.responseType = "json";

  xhr.onload = function () {
    if (xhr.status === 200) {
      displaySearchResults(xhr.response.products);
    } else {
      console.error("Request failed with status:", xhr.status);
    }
  };

  xhr.onerror = function () {
    console.error("Network error occurred.");
  };

  xhr.send();
}

function displaySearchResults(products) {
  searchResults.innerHTML = "";
  if (products.length === 0) {
    searchResults.innerHTML = "<li>No results found.</li>";
    searchResults.style.display = "block";
    return;
  }

  products.forEach((product) => {
    const listItem = document.createElement("li");
    listItem.textContent = product.title;
    listItem.addEventListener("click", () => {
      const productData = {
        title: product.title,
        price: product.price,
        discountPrice: (product.price -=
          product.price * product.discountPercentage),
        description: product.description,
        thumbnail: product.thumbnail,
        images: product.images,
        sku: product.sku,
        weight: product.weight,
        rating: product.rating,
        discountPercentage: product.discountPercentage,
        reviews: product.reviews,
        returnPolicy: product.returnPolicy,
        availabilityStatus: product.availabilityStatus,
        shippingInformation: product.shippingInformation,
        warrantyInformation: product.warrantyInformation,
        dimensions: product.dimensions,
        stock: product.stock,
      };

      sessionStorage.setItem("product", JSON.stringify(productData));
      window.location.href = `../Pages/product-details.html?id=${productData.title}`;
    });

    searchResults.appendChild(listItem);
  });

  searchResults.style.display = "block";
}

searchInput.addEventListener("input", (event) => {
  const query = event.target.value.trim();
  if (query.length > 0) {
    searchProducts(query);
  } else {
    searchResults.innerHTML = "";
    searchResults.style.display = "none";
  }
});

document.addEventListener("click", (event) => {
  if (!searchContainer.contains(event.target)) {
    searchResults.style.display = "none";
  }
});
