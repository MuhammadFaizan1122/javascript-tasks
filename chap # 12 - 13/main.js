// Task 1
var num;
num = prompt("Input the number or string");
num = num.charCodeAt();


if (num >= 65 && num <= 90) {

    alert("Given input is a Uppercase letter");

}
if (num >= 97 && num <= 122) {

    alert("Given input is a Lowercase letter");

}

if (num >= 48 && num <= 57) {

    alert("Given input is a number");

}


// Task 2
var int1, int2;
int1 = prompt("Input first number");
int2 = prompt("Input second number");
if (int1 > int2) {
    alert(int1 + " is greater than " + int2);
}

if (int2 > int1) {
    alert(int2 + " is greater than " + int1);
}

if (int1 === int2) {
    alert(int1 + " is equal to " + int2);
}


// Task 3
var num1;
num1 = prompt("Input a number to check whether the number is positive, negative or zero")

if (num1 >= 1 && num1 <= 9) {
    alert("Given number is a positive number");

}

if (num1 >= "-1" && num1 <= "-9") {
    alert("Given number is a negative number");

}

if (num1 == 0) {
    alert("Given number is zero");

}


// Task 4
var vowel;
vowel = prompt("Input a charater to check whether it is vowel or not");
if (vowel == 'a' || vowel == 'A' || vowel == 'e' || vowel == 'E' || vowel == 'i' || vowel == 'I' || vowel == 'o' && vowel == 'O' || vowel == 'u' || vowel == 'U') {

    alert("Your input character is a vowel");
} else {
    alert("Your input character is not vowel");
}

// Task 5
var password, password1;
password = prompt("Create your password");
password1 = prompt("Enter your password");
if (password1 == "" || password1 == null) {
    prompt("Please Re-Enter your password ");

}
if (password === password1) {
    alert("Your password is correct");

} else {
    alert("Your password is incorrect");

}


// Task 6
var greeting;
var hour = 13;
if (hour < 18) {
    greeting = "Good day";
    alert(greeting);

} else {
    greeting = "Good evening";
    alert(greeting);
}

// Task 7
var time;
time = prompt("Input time");
if (time >= 0000 && time < 1200) {
    alert("Good Morning");
}
if (time >= 1200 && time < 1700) {
    alert("Good afternoon");
}
if (time >= 1700 && time < 2100) {
    alert("Good Evening");
}

if (time >= 2100 && time < 2359) {
    alert("Good Night");
}