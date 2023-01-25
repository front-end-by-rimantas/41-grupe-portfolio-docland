const slidesContainer = document.querySelector(".course-benefits");
const slide = document.querySelector(".slide");
const prevButton = document.querySelector(".prev-button");
const nextButton = document.querySelector(".next-button");
const hiddenTiles = document.querySelectorAll(".benefit-tile");
const firstActiveTile = document.querySelectorAll(".active-first");

console.log(hiddenTiles)

function carousel() {
   
  

   nextButton.addEventListener("click", function () {
     hiddenTiles.forEach(e => e.classList.remove('hidden'))
     
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft += slideWidth+30;
  
});


   prevButton.addEventListener("click", function () {
      const newSlide = slidesContainer.firstElementChild;
      slidesContainer.append(newSlide)
     

      // kodel neveikia??
      //  newSlide.style.transition = 'all 2s'
      const slideWidth = newSlide.clientWidth;
      console.log(slideWidth)
      slidesContainer.scrollLeft -= slideWidth+30;
        
   
});

}

export { carousel }

 