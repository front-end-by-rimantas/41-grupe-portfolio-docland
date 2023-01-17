const burgerMenu = document.querySelector('.burger-menu');
const burgerButton = document.getElementById('burger-button');
const burgerDropdownMenu = document.querySelectorAll('.burger-dropdown');
const burgerLink = document.querySelectorAll('.burger-link');
const overlay = document.querySelector('#overlay');
const exitBtn = document.querySelector('.exit-burger');

function burger() {
    for (let i = 0; i < burgerLink.length; i++) {
        burgerLink[i].addEventListener('click', function () {
            burgerDropdownMenu[i].classList.toggle('hidden');
        });
    }

    burgerButton.addEventListener('click', function () {
        burgerMenu.classList.toggle('hidden');
        overlay.classList.toggle('gray-overlay');
    });

    exitBtn.addEventListener('click', function () {
        burgerMenu.classList.toggle('hidden');
        overlay.classList.toggle('gray-overlay');
    });
    overlay.addEventListener('click', function () {
        burgerMenu.classList.toggle('hidden');
        overlay.classList.toggle('gray-overlay');
    });
}

export { burger };
