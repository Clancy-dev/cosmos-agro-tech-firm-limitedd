const popUp = document.querySelector(".pop-up-menu");
const overlay = document.querySelector(".overlay");
const btnOpenPopUpAndShowOverlay = document.querySelector(".nav-icon");
const btnClosePopUpAndHideOverlay = document.querySelector(".top-menu");
const linkBtns = document.querySelectorAll(".link-btn");
const allLinks = document.querySelectorAll('.nav-link');
const windowPathname = window.location.pathname;


document.addEventListener("DOMContentLoaded", function() {
    // Get all nav links
    const navLinks = document.querySelectorAll("nav a");

    // Get the current URL path
    const currentPath = window.location.pathname;

    // Loop through the links and add 'active' class to the matching link
    navLinks.forEach(link => {
        if (link.getAttribute("href") === currentPath) {
            link.classList.add("active");
        }
    });
});


document.addEventListener("DOMContentLoaded", function() {
  let lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));

  if ("IntersectionObserver" in window) {
      let lazyImageObserver = new IntersectionObserver(function(entries, observer) {
          entries.forEach(function(entry) {
              if (entry.isIntersecting) {
                  let lazyImage = entry.target;
                  lazyImage.src = lazyImage.dataset.src;
                  lazyImage.classList.remove("lazy");
                  lazyImageObserver.unobserve(lazyImage);
              }
          });
      });

      lazyImages.forEach(function(lazyImage) {
          lazyImageObserver.observe(lazyImage);
      });
  } else {
      // Fallback for browsers without IntersectionObserver support
      let lazyLoadThrottleTimeout;
      function lazyLoad() {
          if(lazyLoadThrottleTimeout) {
              clearTimeout(lazyLoadThrottleTimeout);
          }

          lazyLoadThrottleTimeout = setTimeout(function() {
              let scrollTop = window.pageYOffset;
              lazyImages.forEach(function(img) {
                  if(img.offsetTop < (window.innerHeight + scrollTop)) {
                      img.src = img.dataset.src;
                      img.classList.remove('lazy');
                  }
              });
              if(lazyImages.length == 0) { 
                  document.removeEventListener("scroll", lazyLoad);
                  window.removeEventListener("resize", lazyLoad);
                  window.removeEventListener("orientationChange", lazyLoad);
              }
          }, 20);
      }

      document.addEventListener("scroll", lazyLoad);
      window.addEventListener("resize", lazyLoad);
      window.addEventListener("orientationChange", lazyLoad);
  }
});

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
    
    ga('create', 'G-ELPG4FB0QN', 'auto');
    ga('send', 'pageview');

document.addEventListener("DOMContentLoaded", function() {
  document.title = "Cosmos Agro Tech Firm Ltd - Innovative Agricultural Solutions";
  const metaDescription = document.createElement('meta');
  metaDescription.name = "description";
  metaDescription.content = "Cosmos Agro-Tech Firm Limited offers cutting-edge agricultural technology and solutions to enhance productivity and sustainability in farming.";
  document.head.appendChild(metaDescription);
});

fetch("https://www.google.com/ping?sitemap=https://cosmos-agro-tech-firm-ltd.netlify.app/sitemap.xml")
    .then(response => console.log("Sitemap submitted"))
    .catch(error => console.error("Error submitting sitemap:", error));




































function closePopUpAndHideOverlay(){
    popUp.classList.add("close-pop-up-menu");
    overlay.classList.add("hide-overlay");
}
closePopUpAndHideOverlay()

function openPopUpAndShowOverlay(){
    popUp.classList.remove("close-pop-up-menu");
    overlay.classList.remove("hide-overlay");
}

btnOpenPopUpAndShowOverlay.addEventListener("click",openPopUpAndShowOverlay);
btnClosePopUpAndHideOverlay.addEventListener("click",closePopUpAndHideOverlay);
linkBtns.forEach((linkBtn) => {
    linkBtn.addEventListener("click",closePopUpAndHideOverlay);
    
});


//SWIPER
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

     // Autoplay settings
    autoplay: {
     delay: 3000, // 3 seconds delay between slides
     disableOnInteraction: false, // Continue autoplay after interaction
            },
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
  });

  /****
   * MAKE LINK ACTIVE
   */
  //get the window path name using the window object
// const windowPathname = window.location.pathname;

//select all the nav links
// const allLinks = document.querySelectorAll('.nav-link');

//loop through the link pathname and then we compare it with the window pathname

// function removeBrownColorOnLink(){
//   allLinks.forEach((oneLink)=>{
//     const navLinkPathname = new URL(oneLink.href).pathname;
//     if(navLinkPathname === windowPathname){
//         oneLink.classList.remove("active");
//     }


// });
// }







