// 1. Select the elements from the DOM
const totalGpaDisplay = document.getElementById("total-gpa-display");
const courseList = document.getElementById("course-list");
const addBtn = document.getElementById("submit-addition");
const gradeInput = document.querySelector("#grade");
const weightInput = document.querySelector("#course-weight");
const className= document.querySelector("#classname");

let allClasses = [];
let gradePoints = {
    "a": 4.0,
    "b": 3.0,
    "c": 2.0,
    "d": 1.0
};
let bonus = [0.0,0.5,1.0];
// 2. Add the event listener
addBtn.addEventListener("click", function() {
    const courseGrade = gradeInput.value;
    let courseWeight = weightInput.value;
    let gpa=bonus[0];
    let courseName= className.value;

    if (courseWeight=="regular") {
        gpa=bonus[0];
        gpa+=gradePoints[courseGrade];
    }
    if (courseWeight=="honors") {
        gpa=bonus[1];
        gpa+=gradePoints[courseGrade];
    }
    if (courseWeight=="ap") {
        gpa=bonus[2];
        gpa+=gradePoints[courseGrade];
    }
    console.log(courseGrade);
    console.log("Your GPA in "+courseName + " is a " +gpa);
    // 1. Create a new paragraph element
    let currentClass = {
    name: courseName,
    grade: courseGrade,
    points: gpa
    };

    allClasses.push(currentClass);
    console.log(allClasses);

    let newCourseCard = document.createElement("p");

    // 2. Add your text to it
    newCourseCard.textContent = "Your GPA in " + courseName + " is a " + gpa;

    // 3. Append it to the container on the page
    courseList.appendChild(newCourseCard);

    // 1. Create a bucket for the total points
    let sum = 0;

    // 2. Loop through every class in the array (just like Python!)
    for (let c of allClasses) {
        sum += c.points;
    }

    // 3. Calculate the average
    let finalGpa = sum / allClasses.length;

    // 4. Update the text on the screen (the .toFixed(2) forces it to have 2 decimal places)
    totalGpaDisplay.textContent = "Total GPA: " + finalGpa.toFixed(2);
});