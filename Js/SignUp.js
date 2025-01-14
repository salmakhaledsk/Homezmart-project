document
  .getElementById("signupForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); 

  
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const phoneNumber = document.getElementById("phoneNumber").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const rememberMe = document.getElementById("check").checked;

    
    const newUser = {
      firstName: firstName,
      lastName: lastName,
      phoneNumber: phoneNumber,
      email: email,
      password: password,
      rememberMe: rememberMe,
    };

    
    const usersCookie = getCookie("users");
    const users = usersCookie ? JSON.parse(usersCookie) : [];

    
    const isEmailRegistered = users.some((user) => user.email === email);
    if (isEmailRegistered) {
      alert("This email is already registered. Please use a different email.");
      return; 
    }

    
    users.push(newUser);

    
    setCookie("users", JSON.stringify(users), 7); 

    
    alert("Signup successful! You can now login.");

    
    window.location.href = "../Pages/index.html"; 
  });


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
