var fizzBuzz = function(number) {

    if ((number % 3 == 0) && (number % 5 == 0)){
        console.log("FizzBuzz");
        return "FizzBuzz";
    } else if (number % 5 == 0){
        console.log("Buzz");
        return "Buzz";
    } else if (number % 3 == 0) {
        console.log("Fizz");
        return "Fizz";
    }

};

var result = fizzBuzz(30);

document.getElementById("result").innerText = result;