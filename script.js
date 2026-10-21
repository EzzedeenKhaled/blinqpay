const toggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".navigation-links");

toggle.addEventListener("click", () => {
  const open = navigation.classList.toggle("is-open");
});
