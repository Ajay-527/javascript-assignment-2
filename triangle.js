let stringValue = "";
function checkValue() {
  var firstangle = parseInt(document.getElementById("firstangle").value);
  var secondangle = parseInt(document.getElementById("secondangle").value);
  var thirdangle = parseInt(document.getElementById("thirdangle").value);

  if (firstangle + secondangle + thirdangle === 180) {
    if (firstangle != secondangle && secondangle != thirdangle) {
      stringValue = "Scalene Triangle";
    } else if (firstangle === secondangle && secondangle === thirdangle) {
      stringValue = "Equilateral Triangle";
    } else {
      stringValue = "Isosceles Triangle";
    }
  } else {
    if (isNaN(firstangle) || isNaN(secondangle) || isNaN(thirdangle)) {
      stringValue = "Enter the proper Angles";
    } else {
      stringValue = "Not a Triangle";
    }
  }
  document.getElementById("triangleStatus").innerHTML = stringValue;
}
