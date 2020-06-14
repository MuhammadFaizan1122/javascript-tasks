// Task 1
var val1, val2, sum;
val1 = +prompt("Enter first value");
val2 = +prompt("Enter second value");
sum = val1 + val2;
document.write("Sum of " + val1 + " and " + val2 + " is " + sum + "<br>");


// Task 2
var sub, mul, divide, mod, val3, val4;
val3 = prompt("Enter first value");
val4 = prompt("Enter second value");
sub = val3 - val4;
mul = val3 * val4;
divide = val3 / val4;
mod = val3 % val4;
document.write("<br>" + "Subtraction of " + val3 + " and " + val4 + " is " + sub + "<br>");
document.write("Division of " + val3 + " and " + val4 + " is " + divide + "<br>");
document.write("Multiplication of " + val3 + " and " + val4 + " is " + mul + "<br>");
document.write("Mode of " + val3 + " and " + val4 + " is " + mod + "<br>");

// Task 3
var a;

document.write("<br>" + "Value after variable declaration is: " + a + "<br>");
// a =+prompt("Initialize the value in variable");
a = 5;
document.write("Initial value: " + a + "<br>");
document.write("Value after increment is: " + (++a) + "<br>");
document.write("Value after addition is: " + (a = a + 7) + "<br>");
document.write("Value after decrement is: " + (--a) + "<br>");
document.write("The remainder is: " + (a % 3) + "<br>");

// Task 4
var ticket_price = 600;

var total = 5 * ticket_price;
document.write("<br>" + "Total cost to buy 5 tickets toa movie is " + total + "<br>");

// Task 5
var table, i, mul;
table = prompt("Enter the number for the table");
for (i = 1; i <= 10; i++) {
    mul = table * i;
    document.write(table + "x" + i + "=" + mul + "<br>");

}

// Task 6
var celcius, fahrenheit, temp1, temp2;
temp1 = +prompt("Enter a Celcius temperature: ");
temp2 = prompt("Enter a Fahrenheit temperature: ");

fahrenheit = ((temp1 * (9 / 5)) + 32);
celcius = (temp2 - 32) * (5 / 9);
document.write(temp1 + "&#176;C is " + fahrenheit + "<br>");
document.write(temp2 + "&#176;C is " + celcius + "<br>");

// Task 7
var item1, item2, quan1, quan2, shipping_charges, total_charges;
item1 = 650;
quan1 = 3;
item2 = 100;
quan2 = 2;
shipping_charges = 100;
total_charges = item1 * quan1 + item2 * quan2 + shipping_charges;

document.write("<br>" + "Price of item 1 is " + item1 + "<br>");
document.write("Quantity of item 1 is " + quan1 + "<br>");
document.write("Price of item 2 is " + item2 + "<br>");
document.write("Quantity of item 2 is " + quan2 + "<br>");
document.write("Shipping charges is " + shipping_charges + "<br>");
document.write("Total cost of your order is " + total_charges + "<br>");


// Task 8
var total_marks, obtain, perc;
total_marks = 650;
obtain = 400;
perc = obtain / total_marks * 100;
document.write("<br>" + "Total Marks: " + total_marks + "<br>" + "Marks Obtained: " + obtain + "<br>" + "Percentage: " + perc + "<br>"


);

// Task 9
var dollar = 104.80,
    riyal = 28,
    t_dollar, t_riyal, pakCurrency;
t_dollar = 10;
t_riyal = 25;
pakCurrency = dollar * t_dollar + riyal * t_riyal;
document.write("Toal currency in PKR: " + pakCurrency);

// Task 10
var some_num = 6;
var oper = ((some_num + 5) * 10) / 2
document.write(oper + "<br>");

// Task 11
document.write("<br> <h3>Age Calculator </h3>");
var curr_year = +prompt("Enter the current year");
var myage, birth_year = +prompt("Enter your birth year");
myage = curr_year - birth_year;
document.write("Current year: " + curr_year + "<br>");
document.write("Birth year: " + birth_year + "<br>");
document.write("Your Age: " + myage + "<br>");


// Task 12
document.write("<h3>The Geometrizer</h3>");
var area, radius, circum, pi = 3.147;
radius = 5;
circum = 2 * pi * radius;
area = pi * radius;


document.write(
    "Radius of a circle: " + radius + "<br>" +
    "The circumference is: " + circum + "<br>" + "The area is: " + area + "<br>"


);


// Task 13
document.write("<h3>The Geometrizer</h3>");
var currAge, maxAge, amountSnack, favSnack;
currAge = 20;
maxAge = 60;
amountSnack = 2;
favSnack = "Chocolate chip";
var ageDete = maxAge - currAge;
var ans = ageDete * amountSnack;
document.write("Favourite Snack: " + favSnack + "<br>" + "Current Age: " + currAge + "<br>" + "Estimated Maximum Age: " + maxAge + "<br>" + "Amount of snacks per day: " + amountSnack + "<br>" + "You will need " + ans + " chocolate chip to last you until the ripe old age of " + maxAge);