function getGrades(inputSelector) {
    // get grades from the input box
    const grades = document.querySelector(inputSelector).value;
    
    // split them into an array (String.split(',')), clean up spaces, and make uppercase
    const cleanGrades = grades
      .split(",") // Split by comma
      .map((grade) => grade.trim().toUpperCase()) // Clean spaces and make uppercase
      .filter((grade) => grade); // Remove any empty strings
    
    console.log("Cleaned Grades:", cleanGrades); // Debugging line
    return cleanGrades;
  }
  
  function lookupGrade(grade) {
    // converts the letter grade to its GPA point value and returns it
    let points = null;
    
    if (grade === "A") {
      points = 4;
    } else if (grade === "B") {
      points = 3;
    } else if (grade === "C") {
      points = 2;
    } else if (grade === "D") {
      points = 1;
    } else if (grade === "F") {
      points = 0;
    } else {
      console.log("Invalid Grade:", grade); // Debugging line for invalid input
      points = null;
    }
    
    return points;
  }
  
  function calculateGpa(grades) {
    // gets a list of grades passed in
    // convert the letter grades to gpa points
    const gradePoints = grades
      .map((grade) => lookupGrade(grade))
      .filter((point) => point !== null); // Filter out invalid grades
    
    console.log("Grade Points:", gradePoints); // Debugging line
    
    // calculates the GPA
    const total = gradePoints.reduce((sum, num) => sum + num, 0);
    const gpa = gradePoints.length > 0 ? (total / gradePoints.length).toFixed(2) : 0;
    
    console.log("Total Points:", total); // Debugging line
    console.log("Calculated GPA:", gpa); // Debugging line
    
    return gpa;
  }
  
  function outputGpa(gpa, selector) {
    // takes a gpa value and displays it in the HTML in the element identified by the selector passed in
    const outputElement = document.querySelector(selector);
    outputElement.innerText = `GPA: ${gpa}`;
  }
  
  function clickHandler() {
    // when the button in our html is clicked
    // get the grades entered into the input
    const grades = getGrades("#grades");
    
    // calculate the gpa from the grades entered
    const gpa = calculateGpa(grades);
    
    // display the gpa
    outputGpa(gpa, "#output");
  }
  
  // Add event listener when DOM is ready
  document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("#submitButton").addEventListener("click", clickHandler);
  });
  