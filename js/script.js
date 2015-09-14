$(document).ready(function() {
	// Determining what to append
	// Defining the function
	function fizzBuzzFun(num) {
		for (var i = 1; i <= num; i++) {
			if (i % 15 === 0) {
				$("#fizz").append("<li>FizzBuzz</li>")
			} else if (i % 3 === 0) {
				$("#fizz").append("<li>Fizz</li>");
			} else if (i % 5 === 0) {
				$("#fizz").append("<li>Buzz</li>");
			} else {
				$("#fizz").append("<li>" + i + "</li>");
			}
		}
	}

	alert("Let's get started!");

	// Invoking the function
	fizzBuzzFun(100);
});
