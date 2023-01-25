const slidesContainer = document.querySelector(".course-benefits");
const slide = document.querySelector(".slide");
const prevButton = document.querySelector(".prev-button");
const nextButton = document.querySelector(".next-button");
const hiddenTiles = document.querySelectorAll(".benefit-tile");




   function carousel() {
   

   nextButton.addEventListener("click", function () {
     hiddenTiles.forEach(e => e.classList.remove('hidden'))
     
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft += slideWidth+30;
  
});


   prevButton.addEventListener("click", function () {

      const slideWidth = slide.clientWidth;
      slidesContainer.scrollLeft -= slideWidth+30;
        
      // const newSlide = slidesContainer.firstElementChild;
      // slidesContainer.appendChild(newSlide);
      // slidesContainer.style.left = 0;
   
      
});

}

export { carousel }

 