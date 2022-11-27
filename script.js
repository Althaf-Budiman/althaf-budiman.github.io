const hamburgerclick = document.querySelector(".hamburger-container");
const hamburgerLink = document.querySelector(".hamburger-link");

hamburgerclick.addEventListener("click", () => {
   if (hamburgerLink.style.display == "none") {
      hamburgerLink.style.display = "block";
   } else {
      hamburgerLink.style.display = "none";
   }
});

window.addEventListener("resize", () => {
   hamburgerLink.style.display = "none";
});
