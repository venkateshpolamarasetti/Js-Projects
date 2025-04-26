//BMI Calculator
//Take height in cm
//take weight in kg
//calculate BMI
//results by range
const prompt = require('prompt-sync')();
console.log("BMI Calculator");
let age = prompt("Enter Your age: ");
let height = prompt("Enter your height in cm: ");
let weight = prompt("Enter your weight in kg: ");

function bmiCalculator(age, height, weight) {
    let heightInMeters = height/100;
    let bmi =weight/(Math.pow(heightInMeters, 2));
    return bmi;
}

let bmiValue = bmiCalculator(age, height, weight);
//bmi results
console.log("Your age is: "+age);
console.log("Your BMI Is "+Math.round(bmiValue));
//your BMI condtion
if (bmiValue <=16) {
    console.log("Your Severe thickness");
}
else if (bmiValue >=16 && bmiValue<=17) {
    console.log("Your Modarate thickness");
}
else if (bmiValue >=17.1 && bmiValue <=18.5) {
    console.log("Your Mild thickness");
}
else if (bmiValue >=18.6 && bmiValue <=25) {
    console.log("Your Normal");
}
else if (bmiValue >=26 && bmiValue <=30) {
    console.log("Your Over weight");
}
else if (bmiValue >=31 && bmiValue <=40) {
    console.log("You have obessity");
}
else {
     console.log("You have severe obessity");
 }

