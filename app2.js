var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },

     // Autoplay settings
     autoplay: {
        delay: 4250, // 3 seconds delay between slides
        disableOnInteraction: false, // Continue autoplay after interaction
               },

    pagination: {
      el: ".swiper-pagination",
    },
  });


  
document.addEventListener("DOMContentLoaded", function() {
  // Get all nav links
  const navLinks2 = document.querySelectorAll("link-btn");

  // Get the current URL path
  const currentPath = window.location.pathname;
  console.log("object");

  alert("it is working");

  // Loop through the links and add 'active' class to the matching link
  navLinks2.forEach(link => {
      if (link.getAttribute("href") === currentPath) {
          link.classList.add("active");
      }
  });
});