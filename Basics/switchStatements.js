var fizzBuzz = function(number) {
    switch (true) {
        case ((number % 3 == 0) && (number % 5 == 0)):
            console.log("FizzBuzz");
            return "FizzBuzz";
            break;
        case (number % 3 == 0):
            console.log("Fizz");
            return "Fizz";
            break;
        case (number % 5 == 0):
            console.log("Buzz");
            return "Buzz";
            break;
        default:
            // console.log("Unknown weather type!");
            break;
    }
};


var result = fizzBuzz(30);

document.getElementById("result").innerText = result;