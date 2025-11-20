// Get ?code= from URL
const params = new URLSearchParams(window.location.search);
const code = params.get("code");

if (code) {
  document.getElementById("username").textContent = "Logged in! Code:";
  document.getElementById("userid").textContent = code;
  document.getElementById("email").textContent = "Use a server to exchange this code for a token.";
} else {
  document.getElementById("username").textContent = "Error: No login code found.";
}
