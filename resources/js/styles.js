const slideshow = document.querySelector(".slideshow");
const slides = slideshow.querySelectorAll(".slide");
const prevBtn = slideshow.querySelector(".prev-btn");
const nextBtn = slideshow.querySelector(".next-btn");
let currentIndex = 0;

// Show the first slide by default
slides[currentIndex].classList.add("active");

// Handle click events for the previous button
prevBtn.addEventListener("click", () => {
  slides[currentIndex].classList.remove("active");
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  slides[currentIndex].classList.add("active");
});

// Handle click events for the next button
nextBtn.addEventListener("click", () => {
  slides[currentIndex].classList.remove("active");
  currentIndex = (currentIndex + 1) % slides.length;
  slides[currentIndex].classList.add("active");
});
