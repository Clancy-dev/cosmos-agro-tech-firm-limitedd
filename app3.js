/***************
 * SWIPER IMAGES CONTAINER
 */
var swiperTwo = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 4500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next2",
      prevEl: ".swiper-button-prev2",
    },
  });

/****************
 * FORM 2(IMAGES CONTAINER/IMAGES FORM)
 */
const imagesContainer = document.querySelector(".popup-images-container");
const overlayTwo = document.querySelector(".overlay");
const btnOpenPopUpAndShowOverlayTwo = document.querySelector(".more-images-btn");
const btnClosePopUpAndHideOverlayTwo = document.querySelector(".cancel-icon-container");

function closePopUpAndHideOverlayTwo(){
    imagesContainer.classList.add("hide-images-container");
    overlayTwo.classList.add("hide-overlay");
}
closePopUpAndHideOverlayTwo()
function openPopUpAndShowOverlayTwo(){
    imagesContainer.classList.remove("hide-images-container");
    overlayTwo.classList.remove("hide-overlay");
}
btnOpenPopUpAndShowOverlayTwo.addEventListener("click",openPopUpAndShowOverlayTwo);
btnClosePopUpAndHideOverlayTwo.addEventListener("click",closePopUpAndHideOverlayTwo);


/***************** 
 * FORM 3(MESSAGE FORM)
*/

// const messageForm = document.querySelector(".message-form");
// const overlayThree = document.querySelector(".overlay-3");
// const btnOpenPopUpAndShowOverlayThree = document.querySelector(".contact-agent-btn");
// const btnClosePopUpAndHideOverlayThree = document.querySelector(".x-container-2");

// function closePopUpAndHideOverlayThree(){
//     messageForm.classList.add("hide-message-form");
//     overlayThree.classList.add("hide-overlay-3");
// }
// closePopUpAndHideOverlayThree()
// function openPopUpAndShowOverlayThree(){
//     messageForm.classList.remove("hide-message-form");
//     overlayThree.classList.remove("hide-overlay-3");
// }
// btnOpenPopUpAndShowOverlayThree.addEventListener("click",openPopUpAndShowOverlayThree);
// btnClosePopUpAndHideOverlayThree.addEventListener("click",closePopUpAndHideOverlayThree);


