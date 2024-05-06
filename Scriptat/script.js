let darkModeBtn = document.querySelector(".darkModeBtn");
let body = document.querySelector("body");
let image = document.querySelector(".image");

image.addEventListener("click", () => {
  body.classList.toggle("darkMode");
  if (image.src.includes("Foto/dark.png")) {
    image.removeAttribute("src");
    image.setAttribute("src", "Foto/light.png");
  } else {
    image.removeAttribute("src");
    image.setAttribute("src", "Foto/dark.png");
  }
});
