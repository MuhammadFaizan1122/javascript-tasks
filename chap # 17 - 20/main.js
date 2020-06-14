//Task 1
var arr = [
    ["", ""],
    ["", ""],
    ["", ""]
];

// Task 2
var i, j, arr1 = [
    [0, 1, 2, 3],
    [1, 0, 1, 2],
    [2, 1, 0, 1]
];

for (i = 0; i < 3; i++) {
    for (j = 0; j < 4; j++) {

        document.write(arr1[i][j] + " ");
    }
    document.write("<br>");
}

// Task 3
var i;
for (i = 1; i <= 10; i++) {

    document.write("<br>" + i);
}


// Task 4
var table, leng, i, mulResult;

table = prompt("Enter a number to show its multiplication table");
leng = prompt("Enter length multiplication table");

document.write("<br>Multiplication table of " + table + " length " + leng + "<br>");

for (i = 1; i <= leng; i++) {
    mulResult = table * i;
    document.write(table + " x " + i + " = " + mulResult + "<br>");

}

// Task 5

var i, fruits = ["apple", "banana", "mango", "orange", "strawberry"];

for (i = 0; i < fruits.length; i++) {
    document.write(fruits[i] + "<br>");
}

for (i = 0; i < fruits.length; i++) {
    document.write("Element at index " + i + " is " + fruits[i] + "<br>");
}


// Task 6
var i;
document.write("<br> <h3>Counting:</h3>");
for (i = 1; i <= 17; i++) {
    document.write(i + " ");
}
document.write("<br> <h3>Reverse counting:</h3>");
for (i = 17; i >= 1; i--) {
    document.write(i + " ");
}

document.write("<br> <h3>Even:</h3>");
for (i = 2; i <= 20; i) {

    document.write(i + " ");
    i = i + 2;
}

document.write("<br> <h3>Odd:</h3>");
for (i = 1; i <= 20; i) {

    document.write(i + " ");
    i = i + 2;
}
document.write("<br> <h3>Series:</h3>");
for (i = 2; i <= 20; i) {

    document.write(i + "K ");
    i = i + 2;
}


// Task 7
var i, user, A = ["cake", "apple pie", "cookie", "chips", "patties"];

user = prompt("Search Bakery item");
for (i = 0; i <= 10; i++) {
    if (user === A[i]) {
        document.write(user + " is availaible at index " + i + " in our bakery");
        break;
    } else {
        document.write("We are Sorry " + user + " is not availaible in our bakery");
        break;
    }

}
// Task 8
var i, largest, B = [24, 53, 78, 91, 12];
document.write("<br><br>Array items: " + B + "<br>");
largest = B[0];
for (i = 1; i < B.length; i++) {

    if (largest < B[i]) {
        largest = B[i];
        value = B[i];

    }
}
document.write("The largest number is " + value);


// Task 9
var i, largest, B = [24, 53, 78, 91, 12];
document.write("<br><br>Array items: " + B + "<br>");
largest = B[0];
for (i = 1; i < B.length; i++) {

    if (largest > B[i]) {
        largest = B[i];
        value = B[i];

    }
}
document.write("The smallest number is " + value);


// Task 10
var num3 = 5;
document.write("<br>");
for (num3 = 5; num3 <= 100;) {

    document.write(num3 + ", ");
    num3 = num3 + 5;
}