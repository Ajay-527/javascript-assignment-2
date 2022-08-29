let primenumber = [];
function getPrimeNumber(firstnum, secondnum) {
  for (i = firstnum; i < secondnum; i++) {
    if (i % 2 !== 0) {
      primenumber.push(i);
    }
  }
  alert(
    "This are the prime number between " +
      firstnum +
      " and " +
      secondnum +
      ":\n" +
      primenumber
  );
}
let firstnum = parseInt(prompt("Enter the first number"));
let secondnum = parseInt(prompt("Enter the second number"));

getPrimeNumber(firstnum, secondnum);
