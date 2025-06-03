document.addEventListener("DOMContentLoaded", function () {
  const animatedElements = document.querySelectorAll(".scroll-animate");

  const revealOnScroll = () => {
    const triggerBottom = window.innerHeight * 0.85;

    animatedElements.forEach((el) => {
      const boxTop = el.getBoundingClientRect().top;

      if (boxTop < triggerBottom) {
        el.classList.add("visible");
      }
    });
  };

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll(); // run on page load too
});

// Theme
const toggleBtn = document.getElementById("theme-toggle");
const body = document.body;

// Save theme between sessions
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "light") {
  body.classList.add("light");
  toggleBtn.textContent = "🌙";
}

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("light");
  const isLight = body.classList.contains("light");

  // Update icon
  toggleBtn.textContent = isLight ? "🌙" : "☀️";

  // Save preference
  localStorage.setItem("theme", isLight ? "light" : "dark");
});

// Foodtek
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  if (slides.length > 0) {
    slides[slideIndex - 1].style.display = "block";
  }
  if (dots.length > 0) {
    dots[slideIndex - 1].className += " active";
  }
  setTimeout(showSlides, 2000);
}
/*Shared Parts*/
function loadSharedContent() {
  const includes = document.querySelectorAll("[data-include]");

  includes.forEach((el) => {
    const file = el.getAttribute("data-include");
    fetch(file)
      .then((response) => response.text())
      .then((data) => {
        el.innerHTML = data;
      });
  });
}

document.addEventListener("DOMContentLoaded", loadSharedContent);
