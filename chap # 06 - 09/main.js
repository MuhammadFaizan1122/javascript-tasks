// Task 1
var a = 10;
document.write("The value of a is: " + a + "<br>" + "<br>");
++a;
document.write("The value of ++a is: " + a + "<br>");
document.write("Now the value of a is: " + a + "<br>" + "<br>");

document.write("The value of a++ is: " + (a++) + "<br>");
document.write("Now the value of a is: " + a + "<br>" + "<br>");


document.write("The value of --a is: " + (--a) + "<br>");
document.write("Now the value of a is: " + a + "<br>" + "<br>");

document.write("The value of a-- is: " + (a--) + "<br>");
document.write("Now the value of a is: " + a + "<br>" + "<br>");

// Task 2

var a = 2,
    b = 1,
    result1, result2, result3, result4;
//  result=--a - --b + ++b +b--;

result1 = --a;
document.write(result1 + "<br>");
a = 2, b = 1
result2 = --a - --b;
document.write(result2 + "<br>");
a = 2, b = 1
result3 = --a - --b + ++b;
document.write(result3 + "<br>");
a = 2, b = 1
result4 = --a - --b + ++b + b--;
document.write(result4 + "<br>");

// Task 3

var name = prompt("Input Your Name: ");
alert("Hello! " + name);

// Task 5
var table, i, mul;
table = 5;
table = prompt("Enter the number for the table", table);
for (i = 1; i <= 10; i++) {
    mul = table * i;
    document.write(table + "x" + i + "=" + mul + "<br>");

}



// Task 6
var sub1, sub2, sub3, sub1mark, sub2mark, sub3mark, obtain, total = 100,
    totalPerc;
sub1 = prompt("Enter the name of 1st subject ");
sub2 = prompt("Enter the name of 2nd subject ");
sub3 = prompt("Enter the name of 3rd subject ");



var sub1mark = +prompt(" Enter " + sub1 + " Marks : ");
var sub2mark = +prompt(" Enter " + sub2 + " Marks : ");
var sub3mark = +prompt(" Enter " + sub3 + " Marks : ");



document.write("<h3>" + " Subject " + " Total Marks " + " Obtained Marks " + " Percentage " + "</h3>");
document.write(sub1 + "  " + total + "  " + sub1mark + "  " + (sub1mark / total * 100) + "%" + "<br>");
document.write(sub2 + "  " + total + "  " + sub2mark + "  " + (sub2mark / total * 100) + "%" + "<br>");
document.write(sub3 + "  " + total + "  " + sub3mark + "  " + (sub3mark / total * 100) + "%" + "<br>");

total = 300;
obtain = sub1mark + sub2mark + sub3mark;
totalPerc = obtain / total * 100;

document.write(" " + "  " + total + "  " + obtain + "  " + (obtain / total * 100) + "%" + "<br>");