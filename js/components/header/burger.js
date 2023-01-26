const burgerMenu = document.querySelector('.burger-menu');
const burgerButton = document.getElementById('burger-button');
const burgerDropdownMenu = document.querySelectorAll('.burger-dropdown');
const burgerLink = document.querySelectorAll('.burger-link');
const overlay = document.querySelector('#overlay');
const exitBtn = document.querySelector('.exit-burger');
const caretBtn = document.querySelectorAll('.burger-link > .fa-caret-right');

function burger() {
    for (let i = 0; i < burgerLink.length; i++) {
        burgerLink[i].addEventListener('click', function () {
            burgerDropdownMenu[i].classList.toggle('hidden');
            if (caretBtn[i].classList.contains('caret-right')) {
                caretBtn[i].classList.replace('caret-right', 'caret-down');
            } else {
                caretBtn[i].classList.add('caret-right');
            }
        });
    }

    burgerButton.addEventListener('click', function () {
        overlay.classList.toggle('gray-overlay');
        burgerMenu.classList.add('burger-slidein');
        burgerMenu.classList.remove('burger-slideout');
    });

    exitBtn.addEventListener('click', function () {
        overlay.classList.remove('gray-overlay');
        burgerMenu.classList.remove('burger-slidein');
        burgerMenu.classList.add('burger-slideout');
    });

    overlay.addEventListener('click', function () {
        overlay.classList.toggle('gray-overlay');
        burgerMenu.classList.add('burger-slideout');
        burgerMenu.classList.remove('burger-slidein');
    });
}

export { burger };
