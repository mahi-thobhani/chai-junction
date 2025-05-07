// Simple functionality to initialize carousel (if needed for testimonials)
document.addEventListener("DOMContentLoaded", function () {
  const testimonialsCarousel = document.querySelector('.carousel');
  if (testimonialsCarousel) {
    const carousel = new bootstrap.Carousel(testimonialsCarousel, {
      interval: 2000
    });
  }
});
