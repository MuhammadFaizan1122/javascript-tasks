// Task 1
var city;
city = prompt("Type a city name of pakistan");
if (city === "Karachi" || city === "karachi") {

    alert("Welcome to the city of lights");

}

//Task 2
var gender;
gender = prompt("Input your gender");
if (gender === "Male" || gender === "male") {
    alert("Goof Morning Sir!");

}

if (gender === "Female" || gender === "female") {
    alert("Goof Morning Madam!");

}



// task 3
var color;
color = prompt("Input the road traffic signal color");
if (color === "Red") {
    alert("Must Stop");
}

if (color === "Green") {
    alert("Move now");
}
if (color === "Yellow") {
    alert("Ready to move");
}

// Task 4
var fuel;
fuel = prompt("Input the fuel quantity in litres");
if (fuel < 0.25) {
    alert("Please refill the fuel in car");

}

// Task 5(a)
var a = 4;
if (++a === 5) {
    alert("given condition for variable a is true");
}

// Task 5(b)
var b = 82;
if (b++ === 82) {

    alert("given condition for variable a is true");
}

// Task 5(c)
var c = 12;
if (c++ === 13) {
    alert("condition 1 is true");
}

if (c === 13) {
    alert("condition 2 is true");
}
if (++c < 14) {
    alert("condition 3 is true");
}
if (c === 14) {
    alert("condition 4 is true");
}
// Task 5(d)
var materialCost = 20000;
var laborCost = 2000,
    totalCost;
totalCost = materialCost + laborCost;

if (totalCost = materialCost + laborCost) {
    alert("The cost equals");

}

// Task 5(e)
if (true) {
    alert("True");
}

if (false) {
    alert("False");

}
// Task 5(f)
if ("car" < "cat") {
    alert("car is smaller than cat");

}


// Task 6


var grade, remarks, sub1mark, sub2mark, sub3mark, obtain, total = 300,
    totalPerc;
var sub1mark = +prompt("Enter the marks of 1st subject ");
var sub2mark = +prompt("Enter the marks of 2nd subject ");
var sub3mark = +prompt("Enter the marks of 3rd subject ");

obtain = sub3mark + sub2mark + sub1mark;
totalPerc = obtain / total * 100;



document.write("<h3>" + " Marks Sheet " + "</h3>" + "<br>");
document.write("Total marks : " + total + "<br>");
document.write("Marks obtained : " + obtain + "<br>");
document.write("Percentage : " + totalPerc + "<br>");

if (totalPerc >= 80) {
    grade = "A-one";
    remarks = "Excellent";
    document.write("Grade : " + grade + "<br>");
    document.write("Remarks : " + remarks + "<br>");
} else if (totalPerc >= 70 && totalPerc < 80) {
    grade = "A";
    remarks = "Good";
    document.write("Grade : " + grade + "<br>");
    document.write("Remarks : " + remarks + "<br>");
} else if (totalPerc >= 60 && totalPerc < 70) {
    grade = "B";
    remarks = "You need to improve";
    document.write("Grade : " + grade + "<br>");
    document.write("Remarks : " + remarks + "<br>");
} else {
    grade = "Fail";
    remarks = "Sorry";
    document.write("Grade : " + grade + "<br>");
    document.write("Remarks : " + remarks + "<br>");
}


// Task 7
document.write("<h3>Guess Game</h3>");
var secNum = 5,
    user;
user = +prompt("Guess number from 1 to 10");
if (user === secNum) {
    document.write("Bingo! Correct answer" + "<br>");

}
if (user === secNum + 1) {
    document.write("Close enough to the correct answer" + "<br>");

}

// Task 8
var divide, check;
divide = +prompt("Input a number to check (divisible by 3 )");
if (divide % 3 == 0) {
    document.write("It is divisible by 3" + "<br>");

}

// Task 9
var num_check;
document.write("<h3>Even and Odd number checker</h3> " + "<br>");
num_check = +prompt("Input number to check whether it is Even or Odd");
if (num_check % 2 == 0) {
    document.write(num_check + " is even" + "<br>");

}

if (num_check % 2 == 1) {
    document.write(num_check + " is odd" + "<br>");

}

// Task 10
var temp;
temp = +prompt("Input temperature");
if (temp > 40) {
    alert("It is too hot outside.");
    // document.write("It is too hot outside.");

} else if (temp > 30 && temp < 40) {

    alert("The wheather today is Normal.");
    // document.write("The wheather today is Normal.");
} else if (temp > 20 && temp < 30) {
    alert("Today's Weather is cool.");
    // document.write("Today's Weather is cool.");
} else
// if(temp>10&&temp<20)
{
    alert("OMG! Today's Weather is so Cool.");
    // document.write("OMG! Today's Weather is so Cool.");

}

// Task 11
var input1, input2, operator, result;
input1 = +prompt("Input first value");
input2 = +prompt("Input Second value");
operator = prompt("Input the operator");

if (operator == '+') {
    result = input1 + input2;
    document.write(input1 + operator + input2 + " = " + result);
}

if (operator == '-') {
    result = input1 - input2;
    document.write(input1 + operator + input2 + " = " + result);
}
if (operator == '*') {
    result = input1 * input2;
    document.write(input1 + operator + input2 + " = " + result);
}
if (operator == '/') {
    result = input1 / input2;
    document.write(input1 + operator + input2 + " = " + result);
}
if (operator == '%') {
    result = input1 % input2;
    document.write(input1 + operator + input2 + " = " + result);
}