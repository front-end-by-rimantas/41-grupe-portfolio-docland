
const slides = document.querySelector('.goal-tile');
const slidesContainer = document.querySelector('.goals-group');
const prevBtn = document.querySelector('.prevBtn')
const nextBtn = document.querySelector('.nextBtn');
const hiddenTiles= document.querySelectorAll('.hidden-tile')


 let currentSilde = 0;

function goalsCarousel() {
     

 nextBtn.addEventListener('click', function () {
    // slides.forEach(e => e.classList.remove('hidden'));
   const newElement = slidesContainer.firstElementChild;
   newElement.appendChild(slides);
      currentSilde++;
       slides.forEach((s) => s.style.transform = `translateX(-100% `);
       slidesContainer.style.overflow = 'hidden';
  })

    prevBtn.addEventListener('click', function () {
      currentSilde--;
        slides.forEach((s) => s.style.transform = `translateX(+100%`);
      slidesContainer.style.overflow = 'hidden';
  })
 }






 
export { goalsCarousel }