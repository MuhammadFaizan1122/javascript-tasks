// Task 1
var age;
age = 20;
alert("I am " + age + " years old");

// Task 2
var num = 20;
alert("You have visited this site " + num + " times")

// Task 3
var birthYear = 1999;

document.write("My birth year is " + birthYear + "<br>" + "Data type of my declared variable is " + typeof(birthYear) + "<br>");

// Task 4
var name, title, quan;
name = prompt("Type your name here!");
title = prompt("Type the product title");
quan = +prompt("Type the product quantity");
document.write(
    "<b>" + name + "</b>" + " ordered" + " <b>" + quan + " " + title + "</b>" + "(s) on Designable Clothing store"
);