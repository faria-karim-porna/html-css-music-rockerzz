// toggle overlay navbar
function openNav() {
  document.getElementById("myNav").classList.toggle("menu-width");
  document.querySelector(".custom-menu-btn").classList.toggle("menu-btn-style");
}
document.getElementsByClassName("user-dropdown")[0].style.display = "none";

function openLoginDropdown() {
  document.getElementsByClassName("user-dropdown")[0].style.display = "flex";
}

window.onclick = function (event) {
  if (!(event.target.matches(".user-dropdown-button") || event.target.matches(".fa-user") || event.target.matches(".login-text"))) {
    document.getElementsByClassName("user-dropdown")[0].style.display = "none";
  }
};
