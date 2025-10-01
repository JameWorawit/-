import "../src/output.css";
import "@flaticon/flaticon-uicons/css/solid/all.css";
import "@flaticon/flaticon-uicons/css/regular/all.css";

const sideBar = document.getElementById("side-bar");
const menuSidebar = document.getElementById("menu-sidebar");
const menuNavbar = document.getElementById("menu-navbar");

const openSearchBar = document.getElementById("open-search-bar");
const mobileSearchBar = document.getElementById("mobile-search-bar");
const backToNavbar = document.getElementById("back-to-navbar");

openSearchBar.addEventListener("click", () => {
  if (mobileSearchBar.classList.contains("hidden")) {
    mobileSearchBar.classList.remove("hidden");
    mobileSearchBar.classList.add("flex");
  }
  setTimeout(() => mobileSearchBar.classList.add("opacity-100"), 10);
});

backToNavbar.addEventListener("click", () => {
  mobileSearchBar.classList.remove("opacity-100");
  setTimeout(() => {
    mobileSearchBar.classList.add("hidden");
    mobileSearchBar.classList.remove("flex");
  }, 300); // duration ต้องตรงกับ transition
});

menuNavbar.addEventListener("click", () => {
  sideBar.classList.remove("-translate-x-full"); // เปิด sidebar เสมอ
});

menuSidebar.addEventListener("click", () => {
  sideBar.classList.toggle("-translate-x-full"); // toggle ซ่อน/โชว์
});
