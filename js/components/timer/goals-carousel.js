const slidesContainer = document.querySelector('.goals-group');
const prevBtn = document.querySelector('.prevBtn')
const nextBtn = document.querySelector('.nextBtn');


function goalsCarousel() {

 nextBtn.addEventListener('click', function () {
   const newElement = slidesContainer.firstElementChild;
   slidesContainer.appendChild(newElement);
  })

  prevBtn.addEventListener('click', function () {
    const newElement = slidesContainer.firstElementChild;
    slidesContainer.appendChild(newElement);
  })
 }

export { goalsCarousel }