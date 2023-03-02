/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
const hamburgerEl = document.getElementById("hamburgerMenuIcon");
const bodyEl = document.getElementsByTagName("body")[0];

hamburgerEl.addEventListener("click", function () {
  if (bodyEl.offsetWidth < 700) {
    let linksEl = document.getElementById("myLinks");
    if (linksEl.style.display === "block") {
      linksEl.style.display = "none";
    } else {
      linksEl.style.display = "block";
    }
  }
});
