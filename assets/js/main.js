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

// --------------------------------------------------------------------
// Highlight current page in menu

document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll(".menu ul li a");
    const currentUrl = window.location.pathname;

    links.forEach(link => {
        if (link.getAttribute("href") === currentUrl) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });
});

// --------------------------------------------------------------------

function toggleSection(header) {
    const content = header.nextElementSibling;
    const arrow = header.querySelector('.arrow');

    if (content && content.classList.contains('collapsible-content')) {
        const isCollapsed = content.style.display === 'none';
        content.style.display = isCollapsed ? 'block' : 'none';

        // Toggle CSS classes for rotation
        arrow.classList.toggle('collapsed', !isCollapsed);
        arrow.classList.toggle('expanded', isCollapsed);
    }
}

// --------------------------------------------------------------------

function toggleContent(header) {
  const content = header.nextElementSibling;
  const isOpen = header.classList.toggle('open');
  
  if (isOpen) {
    content.style.maxHeight = content.scrollHeight + "px"; // Smoothly expand
    header.scrollIntoView({ behavior: 'smooth', block: 'nearest' }); // Adjust view
  } else {
    content.style.maxHeight = 0; // Smoothly collapse
  }
}


function filterCards(category) {
  const cards = document.querySelectorAll('.skill-card');
  const buttons = document.querySelectorAll('.filter-btn');

  // Reset active button
  buttons.forEach((btn) => btn.classList.remove('active'));

  // Set active button
  event.currentTarget.classList.add('active');

  // Show or hide cards
  cards.forEach((card) => {
    if (category === 'all' || card.dataset.category.split(' ').includes(category)) {
      card.style.visibility = 'visible';
      card.style.position = 'relative';
    } else {
      card.style.visibility = 'hidden';
      card.style.position = 'absolute';
    }
  });
}
