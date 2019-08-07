var power = function(base, exponent) {
    var result = Math.pow(base, exponent);
    return result
};

var testPower = power(2, 4);

console.log(testPower);

document.getElementById("result").innerText = testPower;