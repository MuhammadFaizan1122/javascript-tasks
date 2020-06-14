// Task 1
var student = [];

// Task 2
var student1 = ["Faizan", "Uzair", "Usama", "Haseeb"];

// Task 3
var strng = ["Cat", "Dog", "Fox"];

// Task 4
var bool = [false, true];

// Task 5
var mixArray = ["Ramiz", 22, true];

// Task 6
var i, edu = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil", "PhD"]

// Task 7
document.write("<h3>Qualifications:</h3>" + "<br>");

for (i = 0; i < edu.length; i++) {
    document.write("<h5>" + edu[i] + "</h5>");

}
// Task 8
var stuArray = ["Faizan", "Basit", "Ali"];
var stuScore = ["320", "200", "400"];
var total = 500,
    stuPerc;

for (i = 0; i < stuArray.length; i++) {
    stuPerc = stuScore[i] / total * 100;
    document.write("Score of " + stuArray[i] + " is " + stuScore[i] + ". Percentage: " + stuPerc + "%" + "<br>");

}
// Task 9
var i, colorNames = ["Red", "Orange", "Blue", "Yellow"];
document.write("<h3>Color Names</h3><br>");
for (i = 0; i < colorNames.length; i++) {
    document.write(colorNames[i] + "<br>");
}

// Task 10
var score = ["420", "300", "470", "490"];
document.write("<br>Scores of Students : " + score + "<br>");
score.sort();
document.write("Ordered Scores of Students : " + score + "<br>");

// Task 11
var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
var copyCities = cities.slice(2, 4);
document.write("Cities list :<br> " + cities + "<br>");
document.write("Selected cities list :<br> " + copyCities);

// Task 12
var arr = ["This", "is", "my", "cat"];
document.write("<br>" + arr.join() + "<br><br>");

// Task 13
var i, storeArray = [];
storeArray[0] = prompt("Input first value");
storeArray[1] = prompt("Input second value");
storeArray[2] = prompt("Input third value");
storeArray[3] = prompt("Input fourth value");
for (i = 0; i < storeArray.length; i++) {


    document.write("Out:<br>" + storeArray[i] + "<br>");
}

// Task 14

var i, storeArray1 = [];
storeArray1[0] = prompt("Input first value");
storeArray1[1] = prompt("Input second value");
storeArray1[2] = prompt("Input third value");
storeArray1[3] = prompt("Input fourth value");
document.write("<br>");
for (i = storeArray1.length - 1; i >= 0; i--) {


    document.write("Out:<br>" + storeArray1[i] + "<br>");
}

// Task 15
var manufac = ["Apple", "Samsung", "Nokia", "Sony", "Motorola", "Haier"];
document.write("<br>" + "<select ><option value=''>" + manufac[0] +
    "</option><option value=''>" + manufac[1] +
    "</option><option value=''>" + manufac[2] +
    "</option><option value=''>" + manufac[3] +
    "</option><option value=''>" + manufac[4] +
    "</option><option value=''>" + manufac[5] +
    "</option></select>");