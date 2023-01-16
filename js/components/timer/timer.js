const daysTill = document.querySelector('.days-left');
const hoursTill = document.querySelector('.h-left');
const minTill = document.querySelector('.min-left');
const secTill = document.querySelector('.sec-left');


const countDown = function () {
    const todayDate = new Date().getTime();
    const dateTill = new Date('April 12 2023 00:00:00').getTime();
    const timeGap = dateTill - todayDate;
    

    const sec = 1000;
    const min = sec * 60;
    const h = min * 60;
    const days = h * 24;

    const countDay = Math.floor(timeGap / days);
    const countHours = Math.floor((timeGap % days) / h);
    const countMin = Math.floor((timeGap % h) / min);
    const countSec = Math.floor((timeGap % min) / sec);


    daysTill.textContent = `${countDay}`;
    hoursTill.textContent = `${countHours}`;
    minTill.textContent = `${countMin}`;
    secTill.textContent = `${countSec.toString().padStart(2, 0)}`

}

setInterval(countDown, 1000)


export default countDown