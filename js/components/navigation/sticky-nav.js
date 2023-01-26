
const section1 = document.querySelector('.section1')


const nav = document.querySelector('.navigation');



const stickyNav = function () {

    let scroll = window.pageYOffset;
    console.log(scroll)
    window.onscroll = function () {
        let currentScroll = window.pageYOffset;
        if (scroll > currentScroll) {
console.log(currentScroll)
            nav.classList.add('sticky');
        } else if (currentScroll > scroll)  nav.classList.remove('sticky');

        scroll = currentScroll;
    }


}






export {stickyNav}