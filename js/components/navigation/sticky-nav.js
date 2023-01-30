const nav = document.querySelector('.navigation');


const stickyNav = function () {
    let scroll = window.pageYOffset;
    window.onscroll = function () {
     
        let currentScroll = window.pageYOffset;
        if (currentScroll > scroll) {
           nav.classList.remove('sticky');
        }
        else if (currentScroll === 0 ) {
           nav.classList.remove('sticky');
        }else {
           nav.classList.add('sticky');
        }
        scroll = currentScroll;
    }
}
     




export {stickyNav}