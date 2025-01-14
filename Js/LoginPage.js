document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); 

    
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;
    const rememberMe = document.getElementById("rememberMe").checked;

    
    const usersCookie = getCookie("users");
    const users = usersCookie ? JSON.parse(usersCookie) : [];

    
    const user = users.find((user) => user.email === email);

    if (user) {
      
      if (user.password === password) {
        alert("Login successful!");

        
        if (rememberMe) {
          setCookie("rememberedEmail", email, 7); 
          setCookie("rememberedPassword", password, 7); 
        } else {
          
          setCookie("rememberedEmail", "", -1);
          setCookie("rememberedPassword", "", -1);
        }

      
        window.location.href = "HomePage.html"; 
      } else {
        alert("Incorrect password. Please try again.");
      }
    } else {
      alert("Email not found. Please sign up.");
    }
  });


window.onload = function () {
  const rememberedEmail = getCookie("rememberedEmail");
  const rememberedPassword = getCookie("rememberedPassword");

  if (rememberedEmail && rememberedPassword) {
    document.getElementById("loginEmail").value = rememberedEmail;
    document.getElementById("loginPassword").value = rememberedPassword;
    document.getElementById("rememberMe").checked = true;
  }
};


function setCookie(name, value, days) {
  const date = new Date();
  date.setTime(date.getTime() + days );
  const expires = `expires=${date.toUTCString()}`;
  document.cookie = `${name}=${encodeURIComponent(value)}; ${expires}; `;
}


function getCookie(name) {
  const cookies = document.cookie.split("; ");
  for (let i = 0; i < cookies.length; i++) {
    const [key, value] = cookies[i].split("=");
    if (key === name) {
      return decodeURIComponent(value);
    }
  }
  return null;
}
