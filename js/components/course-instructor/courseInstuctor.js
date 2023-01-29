const courseInstructor = function (data) {
    
    const courseInstructorDOM = document.querySelector('.course-row');
    

    let HTML = '';
    for (const item of data) {
        
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