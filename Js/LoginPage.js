document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("loginEmail").value.trim();
  const password = document.getElementById("loginPassword").value;

  const users = JSON.parse(localStorage.getItem("users")) || [];

  const foundUser = users.find(
    (user) => user.email === email && user.password === password
  );

  if (foundUser) {
    alert(`Welcome back, ${foundUser.firstName}!`);
    window.location.href = "HomePage.html"; 
  } else {
    alert("Incorrect email or password.");
  }
});