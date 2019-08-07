var lengthOfName = function(firstName, middleName, lastName) {
    var fullName = firstName + middleName + lastName;
    return fullName.length;
};

var testNameLength = lengthOfName("Joe", "Fred", "Bloggs");

// console.log(testNameLength);

document.getElementById("result").innerText = testNameLength;

