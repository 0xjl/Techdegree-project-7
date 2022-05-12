const closeButton = document.querySelector(".close");
const alert = document.querySelector(".alert");

closeButton.addEventListener("click", () => {
  alert.style.visibility = "hidden";
  alert.style.display = "none";
});
