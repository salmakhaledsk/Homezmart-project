var cartPage = document.getElementById("cartPage");

var emptycartDiv = document.createElement("div");
emptycartDiv.classList.add("empty_cart");
emptycartDiv.innerHTML = `
  <h1>Your cart Is Empty</h1>
  <br>
  <img src="../Resources/cartnone.jpg" alt="Empty Wishlist" width="200px" style="opacity: 0.5;">
  <br>
   <a href="./HomePage.html"><button class="Explore">Home Page</button></a>
`;

var container = document.getElementById("cartContainer");

var rightdiv = document.getElementById("rightdiv");

var cart = JSON.parse(localStorage.getItem("cart")) || [];

// Function to render the cart items
function renderCartItems() {
  container.innerHTML = "";
  
  if (cart.length === 0) {
    cartPage.innerHTML = "";
    cartPage.appendChild(emptycartDiv)
  } else {
    cart.forEach((item) => {
      // Ensure item has a valid quantity, defaulting to 1 if not set
      item.quantity = item.quantity || 1;

      var div = document.createElement("div");
      div.className = "itemsp";
      div.style.cssText = `
                border: 1px solid #ccc;
                padding: 5px;
                margin: 10px;
                display: inline-block;
                width: 100%;
                border-radius: 10px;
                background-color: white;
                position: relative;
            `;

      // div contain image of product
      var imgdiv = document.createElement("div");
      imgdiv.style.cssText = "display: inline-block; padding: 10px;";

      // div contain product information
      var productinfo = document.createElement("div");
      productinfo.style.cssText =
        "display: inline-block;  padding-bottom: 10px;";

      var img = document.createElement("img"); //image
      img.src = item.thumbnail;
      img.style.cssText = "width: 100px; height: 100px;";

      var title = document.createElement("h3"); //title
      title.textContent = item.name;

      var price = document.createElement("p"); //price
      price.textContent = "$" + item.price;
      price.style.fontWeight = "bold";

      var remove = document.createElement("button"); // remve item
      remove.setAttribute("class", "removebtn");
      remove.id=item.id;
      remove.textContent = "X";

      // Event listeners for remove item
      remove.addEventListener("click", () => removeFromCart(item));

      var numberofitem = document.createElement("div");
      numberofitem.setAttribute("class", "numberofitem");

      var plus = document.createElement("button");
      plus.setAttribute("class", "plus"); // + btn
      plus.textContent = "+";

      var itemcount = document.createElement("span");
      itemcount.textContent = item.quantity;
      itemcount.style.padding = "16px";

      var minus = document.createElement("button");
      minus.setAttribute("class", "minus"); // - btn
      minus.textContent = "-";

      // Event listeners for the plus and minus buttons

      plus.addEventListener("click", function () {
        let count = parseInt(itemcount.textContent);
        count += 1;
        itemcount.textContent = count.toString();
        item.quantity = count;
        updateItemQuantity();
      });

      minus.addEventListener("click", function () {
        let count = parseInt(itemcount.textContent);
        if (count > 0) {
          count -= 1;
          itemcount.textContent = count.toString();
          item.quantity = count;
          updateItemQuantity();
        }
      });

      numberofitem.appendChild(plus);
      numberofitem.appendChild(itemcount);
      numberofitem.appendChild(minus);

      imgdiv.appendChild(img);
      productinfo.appendChild(title);
      productinfo.appendChild(price);
      productinfo.appendChild(numberofitem);
      div.appendChild(remove);
      div.appendChild(imgdiv);
      div.appendChild(productinfo);
      container.appendChild(div);
    });

    
  }
  
  updateSubtotal();
}

//  Function to remove an item from the cart
function removeFromCart(itemToRemove) {
  cart = cart.filter((item) => item.id !== itemToRemove.id);
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCartItems();
}

// Function to update the quantity in localStorage and recalculate subtotal
function updateItemQuantity() {
  localStorage.setItem("cart", JSON.stringify(cart));
  updateSubtotal();
}

// Function to calculate the subtotal
function updateSubtotal() {
  let subtotal = 0;
  for (let i = 0; i < cart.length; i++) {
    subtotal += cart[i].price * cart[i].quantity;
  }
  document.getElementById("subtotal").textContent = "$" + subtotal;
}

// Initial render
renderCartItems();

   