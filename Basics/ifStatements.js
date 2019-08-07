var fizzBuzz = function(number) {

    if ((number % 3 == 0) && (number % 5 == 0)){
        console.log("FizzBuzz");
    } else if (number % 5 == 0){
        console.log("Buzz");
    } else if (number % 3 == 0) {
        console.log("Fizz");
    }

};

var result = fizzBuzz(30);

document.getElementById("result").innerText = result;