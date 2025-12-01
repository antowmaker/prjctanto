const btn = document.getElementById('menu-toggle');
const nav = document.getElementById('nav-links');

btn.addEventListener('click', () => {
  nav.classList.toggle('open');
});
function showHome() {
  console.log("Home clicked");
}

function showAbout() {
  console.log("About clicked");
}

function showContact() {
  console.log("Contact clicked");
  alert("Contact page coming soon!");
}
function openModal() {
  document.getElementById("modal").style.display = "block";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}
