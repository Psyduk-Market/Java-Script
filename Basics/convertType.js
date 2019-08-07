var stringNumMinMax = function(listOfNumbers) {
    for (var i=0; i < listOfNumbers.length; i++) {
        listOfNumbers[i] = parseInt(listOfNumbers[i]);
        // console.log(typeof(listOfNumbers[i]));
    }
    // console.log(typeof (listOfNumbers));
    console.log(Math.min.apply(null, listOfNumbers));
    console.log(Math.max.apply(null, listOfNumbers));
};

var result = stringNumMinMax(["1", "12", "56", "-64", "802"]);

document.getElementById("result").innerText = result;