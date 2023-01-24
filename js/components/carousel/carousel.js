const slidesContainer = document.querySelector(".course-benefits");
const slide = document.querySelector(".slide");
const prevButton = document.querySelector(".prev-button");
const nextButton = document.querySelector(".next-button");



function carousel() {
    
    


nextButton.addEventListener("click", function() {
    console.log('nextla')
//   const slideWidth = slide.clientWidth;
//     slidesContainer.scrollLeft += slideWidth;
});


    prevButton.addEventListener("click", function() {
    
        console.log('prevla')
        const slideWidth = slide.clientWidth;
        
        slidesContainer.scrollLeft -= slideWidth;
        console.log(slidesContainer)
});

}

export {carousel}