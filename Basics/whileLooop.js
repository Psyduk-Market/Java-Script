var sumNumbers = function(arrayOfNumbers) {
    var i = 0;
    var total = 0;
    while (i < arrayOfNumbers.length) {
        total += arrayOfNumbers[i];
        i++;
        // console.log(total);
    }
    return total;
};

var result = sumNumbers([1, 2, 3, 4, 5]);
console.log(result);

document.getElementById("result").innerText = result;