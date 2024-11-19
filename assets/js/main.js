// Scroll to Top Button Functionality

// Get the button
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

// Show the button when the user scrolls down 200px
window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
});

// Scroll to top when the button is clicked
scrollToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth" // Smooth scrolling
  });
});