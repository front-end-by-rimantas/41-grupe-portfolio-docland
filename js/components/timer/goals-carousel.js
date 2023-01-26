
const slides = document.querySelectorAll('.goal-tile');
const slideContainer = document.querySelector('.goals-group');
const prevBtn = document.querySelector('.prevBtn')
const nextBtn = document.querySelector('.nextBtn')


let currentSilde = 0;

function goalsCarousel() {
     

     nextBtn.addEventListener('click', function () {
          slides.forEach(e => e.classList.remove('hidden'));
          currentSilde++;
          slides.forEach((s) => s.style.transform = `translateX(-350px `);
          slideContainer.style.overflow = 'hidden';
     })

         prevBtn.addEventListener('click', function () {
          currentSilde--;
          slides.forEach((s) => s.style.transform = `translateX(+350`);
          slideContainer.style.overflow = 'hidden';
     })
}
 
export { goalsCarousel }