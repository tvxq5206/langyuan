// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the header
const navbar = document.querySelector(".navbar");

// Get the offset position of the navbar
const sticky = navbar.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}