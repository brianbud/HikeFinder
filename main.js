/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
const hamburgerEl = document.getElementById("hamburgerMenuIcon");

hamburgerEl.addEventListener("click", function () {
  let linksEl = document.getElementById("myLinks");
  if (linksEl.style.display === "block") {
    linksEl.style.display = "none";
  } else {
    linksEl.style.display = "block";
  }
});
