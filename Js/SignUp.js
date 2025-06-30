document.getElementById("signupForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const firstName = document.getElementById("firstName").value.trim();
  const lastName = document.getElementById("lastName").value.trim();
  const phoneNumber = document.getElementById("phoneNumber").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  const newUser = {
    firstName,
    lastName,
    phoneNumber,
    email,
    password,
  };

  const users = JSON.parse(localStorage.getItem("users")) || [];

  const userExists = users.some((user) => user.email === email);
  if (userExists) {
    alert("This email is already registered.");
    return;
  }

  users.push(newUser);
  localStorage.setItem("users", JSON.stringify(users));

  alert("Sign up successful!");
  window.location.href = "index.html"; 
});
