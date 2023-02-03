/* Import */

import { countDown } from "../components/timer/timer.js";
import { carousel } from "../components/carousel/carousel-benefit.js";


import { burger } from '../components/header/burger.js';

import { goalsCarousel } from '../components/timer/goals-carousel.js'

import { stickyNav} from '../components/navigation/sticky-nav.js'


/* Execution */

/* header start */
burger();
stickyNav();
/* header end */

/* hero start */
/* hero end */

/* timer start */
countDown();
/* timer end */

/* section course benefit start */
carousel();
/* section course benefit end */

/* what-you-will-learn carousel start */
goalsCarousel();
/* what-you-will-learn carousel end */

/* section start */
/* section end */

/* footer start */
/* footer end */