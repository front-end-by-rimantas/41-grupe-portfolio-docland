const courseInstructor = function (data) {

    if (data.length === 0 || !Array.isArray(data)) {
        throw new error('This array cannot be empty');
    }
    
    const courseInstructorDOM = document.querySelector('.course-row');
    if (courseInstructorDOM === null) {
        throw error('Cannot find DOM element');
    }
    

    let HTML = '';
    for (const item of data) {
        if (typeof item !== 'object' || item === null || Array.isArray(item) || !item.header || !item.subHeader || !item.icon1 || !item.icon2 || !item.icon3 || !textIcon1 || !textIcon2 || !textIcon3 || !paragraph || typeof item.icon1 !== 'string' || typeof item.icon2 !=='string'|| typeof item.icon3 !== 'string' || typeof item.textIcon1 !== 'string' || typeof item.textIcon2 !=='string' || typeof item.textIcon3 !== 'string' || typeof item.paragraph!== 'string') {
            continue;
         }
        
        HTML += `<div class="col-12 col-lg-6 course-instr-background">
                    <div class="course-in-flex">
                        <img
                            src=${item.img}
                            alt="Sarah Taylor photo"
                            style="background-color: #fff"
                        />
                        <div style="background-color: #fff">
                            <h4>${item.header}</h4>
                            <p class="sub-title">${item.subHeader}</p>
                            <ul style="background-color: #fff">
                                <li>
                                    <i
                                        class="fa fa-${item.icon1}"
                                        aria-hidden="true"
                                    ></i
                                    >${item.textIcon1}
                                </li>
                                <li>
                                    <i
                                        class="fa fa-${item.icon2}"
                                        aria-hidden="true"
                                    ></i
                                    >${item.textIcon2}
                                </li>
                                <li>
                                    <i class="fa fa-${item.icon3}" aria-hidden="true"></i
                                    >${item.textIcon3}
                                </li>
                            </ul>
                        </div>
                    </div>
                    <p>
                        ${item.paragraph}
                    </p>
                </div>
                   </div>
                `
    }

    courseInstructorDOM.innerHTML = HTML;
}

export {courseInstructor}