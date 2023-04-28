const menu = document.querySelector(".menu");
const options = document.querySelector(".nav-options");

function handleNavBar() {
  if (options.classList.contains("disabled")) {
    options.classList.remove("disabled");
  } else {
    options.classList.add("disabled");
  }
}

function closeMenu() {
  if (!options.classList.contains("disabled")) {
    options.classList.add("disabled");
  }
}

document.querySelector(".go-top-container").addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
