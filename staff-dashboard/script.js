const params = new URLSearchParams(window.location.search);
const code = params.get("code");

if (code) {
  fetch(`/api/auth?code=${code}`)
    .then(res => res.json())
    .then(user => {
      document.getElementById("username").textContent = `Welcome, ${user.username}`;
      document.getElementById("userid").textContent = `ID: ${user.id}`;
      document.getElementById("email").textContent = `Email: ${user.email}`;
    })
    .catch(() => {
      document.getElementById("username").textContent = "Failed to fetch user info.";
    });
} else {
  document.getElementById("username").textContent = "Not logged in. Please use the login page.";
}
