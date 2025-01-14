function returnHome() {
  window.location.assign("HomePage.html");
  return false;
}

function logout() {
  sessionStorage.removeItem("userToken");

  window.location.replace("../Pages/index.html");
}

var SelectedCategory = sessionStorage.getItem("category");

if (SelectedCategory) {
  var category = JSON.parse(SelectedCategory);

  // Create a container for the products
  var originalTag = document.createElement("div");
  originalTag.classList.add("product-container");
  document.body.appendChild(originalTag);

  // Fetch product data
  let xhr = new XMLHttpRequest();
  xhr.open(
    "GET",
    `https://dummyjson.com/products/category/${category.CategoryName}`
  );
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      let Data = JSON.parse(xhr.response);
      showProduct(Data, originalTag);
      appendFooter();
    }
  };
  xhr.send();

  // Function to display products
  function showProduct(list, tag) {
    console.log(list);
    const productContainer = tag;

    productContainer.innerHTML = "";                             

    list.products.forEach((product) => {
      var description = product.description;
      const productCard = document.createElement("div");
      productCard.classList.add("product-card");
      productCard.setAttribute("data-id", product.id);           

      productCard.innerHTML = `
          <i class="fa-solid fa-heart fav-button" data-id="${product.id}"></i>              
          <img src="${product.thumbnail}" alt="${product.title}" height="100px" width="100px">
          <h2>${product.title}</h2>
          <p>${description}</p>
          <p class="Price">Price: $${product.price}</p>
          <button>Add to Cart</button>
        `;
      productContainer.appendChild(productCard);

           // //////////////////////////////////////////////wishlist//////////////////////////////////////////////////////////
       // Click Event for the fav button
       const favButton = productCard.querySelector(".fav-button");
       favButton.addEventListener("click", (event) => {
         event.stopPropagation();
         addToWishlist(product);
       });
    // add to wishlist
    function addToWishlist(product) {
     let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
     const isProductInWishlist = wishlist.some(function(item) {
       return item.id === product.id;
     });
 
  
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
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////

      const button = productCard.querySelector("button");
      button.addEventListener("click", (event) => {
        event.stopPropagation();
        AddToCart({
          id: product.id,
          name: product.title,
          price: product.price,
          thumbnail: product.thumbnail,
        });
      });
      
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



  // Function to add items to the cart
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

  // Function to update the cart counter
  function updateCartCounter() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const cartCounter = document.getElementById("cartCounter");
    if (cartCounter) {
      cartCounter.textContent = cart.length;
    }
  }
  updateCartCounter();
  

  // Function to append the footer
  function appendFooter() {
    const footer = document.createElement("footer");
    footer.innerHTML = `
      <div class="container">
        <div class="row">
          <div class="col">
            <h3>About Us</h3>
            <p>Learn more about HomeZmart and our mission.</p>
            <ul>
              <li><a href="#">Our Story</a></li>
              <li><a href="#">Team</a></li>
              <li><a href="#">Careers</a></li>
            </ul>
          </div>
          <div class="col">
            <h3>Contact Us</h3>
            <p>Get in touch with us for any inquiries.</p>
            <ul>
              <li><a href="#">Email: support@homezmart.com</a></li>
              <li><a href="#">Phone: +1 234 567 890</a></li>
              <li><a href="#">Address: 123 Main St, Anytown, USA</a></li>
            </ul>
          </div>
          <div class="col">
            <h3>Customer Service</h3>
            <ul>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Order Tracking</a></li>
              <li><a href="#">Returns & Refunds</a></li>
            </ul>
          </div>
          <div class="col">
            <h3>Legal</h3>
            <ul>
              <li><a href="#">Terms & Conditions</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        <p class="copyright">&copy; 2024 HomeZmart. All rights reserved.</p>
      </div>
    `;
    document.body.appendChild(footer);
  }
}
