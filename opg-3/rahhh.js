// Defines an array of student objects
let students = [
    { name: "Bloom", age: 25, course: "Defence" },
    { name: "Flora", age: 25, course: "Potions" },
    { name: "Stella", age: 25, course: "Spellcasting" }
];

// Selects the HTML element where student details will be displayed
let studentListDiv = document.querySelector(".winx-list");

// Loops through each student in the array
students.forEach(student => {

    // Creates a new div element for each student
    let studentDiv = document.createElement("div");

    // Adds a class to the <div> (for styling)
    studentDiv.classList.add("student");

    // Creates an <h2> element for the student’s name
    let studentHeadline = document.createElement("h2");

    // Sets the text content of the <h2> to the student's name
    studentHeadline.textContent = student.name;

    // Creates a <p> element for additional student info
    let studentInfo = document.createElement("p");

    // Sets the text content of the <p> element with the student's age and course
    studentInfo.textContent = `Alder: ${student.age}, Uddannelse: ${student.course}`;

    // Appends the headline and info paragraph to the student div
    studentDiv.append(studentHeadline, studentInfo);

    // Appends the student div to the main container
    studentListDiv.appendChild(studentDiv);
});
