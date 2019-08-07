var fizzBuzz = function(number) {
    switch (true) {
        case ((number % 3 == 0) && (number % 5 == 0)):
            console.log("FizzBuzz");
            break;
        case (number % 3 == 0):
            console.log("Fizz");
            break;
        case (number % 5 == 0):
            console.log("Buzz");
            break;
        default:
            // console.log("Unknown weather type!");
            break;
    }
};


var result = fizzBuzz(30);

document.getElementById("result").innerText = result;