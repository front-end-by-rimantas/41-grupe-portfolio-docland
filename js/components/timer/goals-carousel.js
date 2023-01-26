
const slides = document.querySelector('.goal-tile');
const slidesContainer = document.querySelector('.goals-group');
const prevBtn = document.querySelector('.prevBtn')
const nextBtn = document.querySelector('.nextBtn');
const hiddenTiles= document.querySelectorAll('.hidden-tile')


 let currentSilde = 0;

function goalsCarousel() {
     

 nextBtn.addEventListener('click', function () {
   
   const newElement = slidesContainer.firstElementChild;
   slidesContainer.appendChild(newElement);
      currentSilde++;
      //  slides.forEach((s) => s.style.transform = `translateX(-100% `);
       slidesContainer.style.overflow = 'hidden';
  })

  prevBtn.addEventListener('click', function () {
      
      const newElement = slidesContainer.firstElementChild;
   slidesContainer.appendChild(newElement);
      currentSilde--;
        // slides.forEach((s) => s.style.transform = `translateX(+100%`);
      slidesContainer.style.overflow = 'hidden';
  })
 }






 
export { goalsCarousel }