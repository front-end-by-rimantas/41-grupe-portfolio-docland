const courseInstructor = function (data) {
    
    const courseInstructorDOM = document.querySelector('.course-row');
    

    let HTML = '';
    for (const item of data) {
        
        HTML += `<div class="col-12 col-lg-6 course-instr-background">
                    <div class="course-in-flex">
                        <img
                            src="./img/author01.png"
                            alt="Sarah Taylor photo"
                            style="background-color: #fff"
                        />
                        <div style="background-color: #fff">
                            <h4>${item.header}</h4>
                            <p class="sub-title">${item.subHeader}</p>
                            <ul style="background-color: #fff">
                                <li>
                                    <i
                                        class="fa fa-${item.icons.icon}"
                                        aria-hidden="true"
                                    ></i
                                    >${item.icons.text}
                                </li>
                                <li>
                                    <i
                                        class="fa fa-${item.icons.icon}"
                                        aria-hidden="true"
                                    ></i
                                    >${item.icons.text}
                                </li>
                                <li>
                                    <i class="fa fa-${item.icons.icon}" aria-hidden="true"></i
                                    >${item.icons.text}
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