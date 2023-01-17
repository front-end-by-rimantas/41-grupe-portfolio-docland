const burgerMenu = document.querySelector('.burger-menu');
const burgerButton = document.getElementById('burger-button');

function burgerClick() {
    burgerButton.addEventListener('click', function () {
        burgerMenu.classList.toggle('hidden');
    });
}

export { burgerClick };
