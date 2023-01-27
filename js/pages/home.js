/* Import */

import { countDown } from "../components/timer/timer.js";
import { carousel } from "../components/carousel/carousel-benefit.js";
import { courseInstructor } from "../components/course-instructor/courseInstuctor.js";

import { burger } from '../components/header/burger.js';
import { courseInstructorData } from "../data/courseInstructorData.js";

/* Execution */

/* header start */
burger();
/* header end */

/* hero start */
/* hero end */

/* timer start */
countDown();
/* timer end */

/* section course benefit start */
carousel();
/* section course benefit end */

/* section start */
/* section end */

/* section course instructor start*/
courseInstructor(courseInstructorData);
/* section course instructor end*/

/* footer start */
/* footer end */