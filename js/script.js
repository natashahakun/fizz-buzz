//fizz-buzz refactored

function fizzbuzz(max) {
  while (isNaN(max) === true || max == "" || max == " ") {
    var max = prompt("Please enter a number");
  }
    var num = parseInt(max);
    for (var i = 1; i <= num; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      document.write(" Fizz-Buzz" + "<br />")
    } else if (i % 3 == 0) {
      document.write(" Fizz" + "<br />")
    } else if (i % 5 == 0) {
      document.write(" Buzz" + "<br />")
    } else {
      document.write(" " + i + "<br />")
    }
  };
};

var max = prompt("Please enter a number");

fizzbuzz(max);

//fizz-buzz standard

// for (var i = 1; i <= 100; i++) {
//   if (i % 3 == 0 && i % 5 == 0) {
//     document.write(" Fizz-Buzz" + "<br />")
//   } else if (i % 3 == 0) {
//     document.write(" Fizz" + "<br />")
//   } else if (i % 5 == 0) {
//     document.write(" Buzz" + "<br />")
//   } else {
//     document.write(" " + i + "<br />")
//   }
// };
