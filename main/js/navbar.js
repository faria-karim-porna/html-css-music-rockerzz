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
    console.log(document.getElementById("user-option").onclick)
  if (!document.getElementById("user-option").onclick) {
    document.getElementsByClassName("user-dropdown")[0].style.display = "none";
  }
};
