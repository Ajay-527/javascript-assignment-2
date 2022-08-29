let marks = "";
let grade = "";
function studentGrade(marks) {
  marks = marks;
  switch (true) {
    case marks <= 100 && marks >= 90:
      grade = "S grade";
      break;
    case marks <= 89 && marks >= 80:
      grade = "A grade";
      break;
    case marks <= 79 && marks >= 70:
      grade = "B grade";
      break;
    case marks <= 69 && marks >= 60:
      grade = "C grade";
      break;
    case marks <= 59 && marks >= 50:
      grade = "D grade";
      break;
    case marks <= 49 && marks >= 40:
      grade = "E grade";
      break;
    case marks < 39 && marks >= 0:
      grade = "Student has failed";
      break;
    default:
      grade = "Invalid marks";
      break;
  }
  alert(grade);
}

marks = prompt("Enter the student marks");
studentGrade(parseInt(marks));
