const burgerMenu = document.querySelector('.burger-menu');
const burgerButton = document.getElementById('burger-button');
const burgerDropdownMenu = document.querySelectorAll('.burger-dropdown');
const burgerLink = document.querySelectorAll('.burger-link');

function burgerClick() {
    burgerButton.addEventListener('click', function () {
        burgerMenu.classList.toggle('hidden');
    });
}

function burgerDropdown() {
    for (let i = 0; i < burgerLink.length; i++) {
        burgerLink[i].addEventListener('click', function () {
            burgerDropdownMenu[i].classList.toggle('hidden');
        });
    }
}

export { burgerClick, burgerDropdown };
