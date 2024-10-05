// information --> print

// function information(firstName: string | null, lastName: string | null, fatherName: string | null, age: number): void {
//   console.log(`My first name is ${firstName} and my last name is ${lastName}. My father's name is ${fatherName} and I am ${age} years old`);
// }

// function contact(firstName: string | null, lastName: string | null, fatherName: string | null, age: number): string {
//   return `My first name is ${firstName} and my last name is ${lastName}. My father's name is ${fatherName} and I am ${age} years old`;
// }

// let first: string | null = prompt("Enter your first name:");
// let last: string | null = prompt("Enter your last name:");
// let father: string | null = prompt("Enter your father's name:");
// let age: number = Number(prompt("Enter your age:"));
// information(first, last, father, age);
// console.log(contact(first, last, father, age));
//****************************************************************************************
// age --> birth year

// function yearCalculator(age:number):void{
//   let year:number=1403-age
//   console.log(`You were born in ${year}/${year+621}`);
// }
// function ageYear(age:number):string{
//   let year:number=1403-age
//   return `You were born in ${year}/${year+621}`
// }

// let age:number=Number(prompt("How old are you?"))
// yearCalculator(age)
// console.log(ageYear(age));
//*****************************************************************************************
// weight,height --> bmi
// let weight: number = Number(prompt("Enter your weight"));
// let height: number = Number(prompt("Enter your height in meter"));

// function bmiCalc(weight: number, height: number): void {
//   let bmi: number = weight / height ** 2;
//   if (bmi <= 18) {
//     console.log(`Your bmi: ${bmi}. You are underweight`);
//   } else if (bmi <= 24) {
//     console.log(`Your bmi: ${bmi}. You are normal`);
//   } else if (bmi <= 39.9) {
//     console.log(`Your bmi: ${bmi}. You are overweight`);
//   } else if (bmi >= 40) {
//     console.log(`Your bmi: ${bmi}. You are obese`);
//   } else{
//     console.log("Invalid input");
//   }
// }
// function bmi(weight: number, height: number):string|undefined{
//   let bmi: number = weight / height ** 2;
//   if (bmi <= 18) {
//    return `Your bmi: ${bmi}. You are underweight`
//   } else if (bmi <= 24) {
//     return `Your bmi: ${bmi}. You are normal`
//   } else if (bmi <= 39.9) {
//     return `Your bmi: ${bmi}. You are overweight`
//   } else if (bmi >= 40) {
//     return `Your bmi: ${bmi}. You are obese`
//   } else{
//     return `Invalid input`
//   }
// }
// bmiCalc(weight, height);
// console.log(bmi(weight,height));
//****************************************************************************************
//number --> day of week
// function week(num:number):void{
//   switch(num){
//     case 1:{
//       console.log("Saturday");
//       break;
//     }
//     case 2:{
//       console.log("Sunday");
//       break;
//     }
//     case 3:{
//       console.log("Monday");
//       break;
//     }
//     case 4:{
//       console.log("Tuesday");
//       break;
//     }
//     case 5:{
//       console.log("Wednesday");
//       break;
//     }
//     case 6:{
//       console.log("Thursday");
//       break;
//     }
//     case 7:{
//       console.log("Friday");
//       break;
//     }
//     default:{
//       console.log("Invalid Input");
//       break;
//     }
//   }
// }
// function weekDay(num:number):string{
//   switch(num){
//     case 1:{
//       return "Saturday"
//     }
//     case 2:{
//       return "Sunday"
//     }
//     case 3:{
//       return "Monday"
//     }
//     case 4:{
//       return "Tuesday"
//     }
//     case 5:{
//       return "Wednesday"
//     }
//     case 6:{
//       return "Thursday"
//     }
//     case 7:{
//       return "Friday"
//     }
//     default:{
//       return "Invalid Input"
//     }
//   }
// }
// let num:number=Number(prompt("Enter a number: 1-7"))
// week(num)
// console.log(weekDay(num));
//****************************************************************************************
//triangle
// let x: number = Number(prompt("Enter x:"));
// let y: number = Number(prompt("Enter y:"));
// let z: number = Number(prompt("Enter z:"));

// function triangle(x: number, y: number, z: number): void {
//   if (x ** 2 === y ** 2 + z ** 2) {
//     console.log("Ghaem");
//   } else if (y ** 2 === x ** 2 + z ** 2) {
//     console.log("Ghaem");
//   } else if (z ** 2 === x ** 2 + y ** 2) {
//     console.log("Ghaem");
//   } else {
//     console.log("Not ghaem");
//   }
// }
// function triangleCheck(x: number, y: number, z: number): string {
//   if (x ** 2 === y ** 2 + z ** 2) {
//     return "Ghaem";
//   } else if (y ** 2 === x ** 2 + z ** 2) {
//     return "Ghaem";
//   } else if (z ** 2 === x ** 2 + y ** 2) {
//     return "Ghaem";
//   } else {
//     return "Not ghaem";
//   }
// }
// triangle(x, y, z);
// console.log(triangleCheck(x, y, z));
//****************************************************************************************
//compare two numbers
// let num1:number=Number(prompt("Enter the first number:"))
// let num2:number=Number(prompt("Enter the second number:"))

// function compare(num1:number, num2:number):void{
//   if (num1>num2){
//     console.log(`${num1}\n${num2}\nFirst number is greater than the second one`);
//   }
//   else if (num2>num1){
//     console.log(`${num1}\n${num2}\nFirst number is smaller than the second one`);

//   } else if (num1==num2){
//     console.log(`${num1}\n${num2}\nFirst number is equal to the second one`);
//   } else{
//     console.log("Invalid Input");
//   }
// }
// function compareTwo(num1:number, num2:number):string{
//   if (num1>num2){
//     return `${num1}\n${num2}\nFirst number is greater than the second one`
//   }
//   else if (num2>num1){
//     return `${num1}\n${num2}\nFirst number is smaller than the second one`

//   } else if (num1==num2){
//     return `${num1}\n${num2}\nFirst number is equal to the second one`
//   } else{
//     return "Invalid Input"
//   }
// }
// compare(num1,num2)
// console.log(compareTwo(num1,num2));
//****************************************************************************************
//compare three numbers
// let a:number=Number(prompt("Enter a"))
// let b:number=Number(prompt("Enter b"))
// let c:number=Number(prompt("Enter c"))

// function compare(num1:number,num2:number,num3:number):void{
//     if (num1>num2 && num1>num3 && num2>num3){
//         console.log(`a:${num1}>b:${num2}>c:${num3}`);
//     } else if(num1>num2 && num1>num3 && num3>num2){
//         console.log(`a:${num1}>c:${num3}>b:${num2}`);
//     } else if(num2>num1 && num2>num3 && num1>num3){
//         console.log(`b:${num2}>a:${num1}>c:${num3}`);
//     } else if(num2>num1 && num2>num3 && num3>num1){
//         console.log(`b:${num2}>c:${num3}>a:${num1}`);
//     } else if(num3>num1 && num3>num2 && num1>num2){
//         console.log(`c:${num3}>a:${num1}>b:${num2}`);
//     } else if(num3>num1 && num3>num2 && num2>num1){
//         console.log(`c:${num3}>b:${num2}>a:${num1}`);
//     } else if (num1===num2  && num1===num3){
//         console.log(`a:${num1}=b:${num2}=c:${num3}`);
//     } else{
//         console.log("Invalid input")
//     }
// }
// function compareThree(num1:number,num2:number,num3:number):string{
//     if (num1>num2 && num1>num3 && num2>num3){
//        return `a:${num1}>b:${num2}>c:${num3}`
//     } else if(num1>num2 && num1>num3 && num3>num2){
//         return `a:${num1}>c:${num3}>b:${num2}`
//     } else if(num2>num1 && num2>num3 && num1>num3){
//         return `b:${num2}>a:${num1}>c:${num3}`
//     } else if(num2>num1 && num2>num3 && num3>num1){
//         return `b:${num2}>c:${num3}>a:${num1}`
//     } else if(num3>num1 && num3>num2 && num1>num2){
//         return `c:${num3}>a:${num1}>b:${num2}`
//     } else if(num3>num1 && num3>num2 && num2>num1){
//         return `c:${num3}>b:${num2}>a:${num1}`
//     } else if (num1===num2  && num1===num3){
//         return `a:${num1}=b:${num2}=c:${num3}`
//     } else{
//         return "Invalid input"
//     }
// }
// compare(a,b,c)
// console.log(compareThree(a,b,c));
//****************************************************************************************
//calculator
// let operand1:number=Number(prompt("Enter the first operand"))
// let operator:string|null=prompt("Enter the operator -+*/%^")
// let operand2:number=Number(prompt("Enter the second operand"))

// function calculator(operand1:number,operand2:number,operator:string|null):void{
//     switch(operator){
//         case "+":{
//             console.log(`${operand1}+${operand2}=${operand1+operand2}`);
//             break;
//         }
//         case "-":{
//             console.log(`${operand1}-${operand2}=${operand1-operand2}`);
//             break;
//         }
//         case "*":{
//             console.log(`${operand1}*${operand2}=${operand1*operand2}`);
//             break;
//         }
//         case "/":{
//             console.log(`${operand1}/${operand2}=${operand1/operand2}`);
//             break;
//         }
//         case "%":{
//             console.log(`${operand1}%${operand2}=${operand1%operand2}`);
//             break;
//         }
//         case "^":{
//             console.log(`${operand1}^${operand2}=${operand1**operand2}`);
//             break;
//         }
//         default:{
//             console.log("Invalid Input")
//             break
//         }
//     }
// }
// function calc(operand1:number,operand2:number,operator:string|null):string{
//     switch(operator){
//         case "+":{
//             return `${operand1}+${operand2}=${operand1+operand2}`
//         }
//         case "-":{
//             return `${operand1}-${operand2}=${operand1-operand2}`
//         }
//         case "*":{
//             return `${operand1}*${operand2}=${operand1*operand2}`
//         }
//         case "/":{
//             return `${operand1}/${operand2}=${operand1/operand2}`
//         }
//         case "%":{
//             return `${operand1}%${operand2}=${operand1%operand2}`
//         }
//         case "^":{
//             return `${operand1}^${operand2}=${operand1**operand2}`
//         }
//         default:{
//             return "Invalid Input"
//         }
//     }
// }

// calculator(operand1,operand2,operator)
// console.log(calc(operand1,operand2,operator));
//****************************************************************************************
//minimum
// let x:number=Number(prompt("Enter x"))
// let y:number=Number(prompt("Enter y"))
// let z:number=Number(prompt("Enter z"))

// function min(x:number,y:number,z:number):void{
//     if (z<x && z<y){
//         console.log(`z:${z}`);
//     } else if (y>x && z>x){
//         console.log(`x:${x}`);
//     } else if(y<x && y<z){
//         console.log(`y:${y}`);
//     } else {
//         console.log("Something went wrong");
//     }
// }
// function minimum(x:number,y:number,z:number):string{
//     if (z<x && z<y){
//        return `z:${z}`
//     } else if (y>x && z>x){
//         return `x:${x}`
//     } else if(y<x && y<z){
//         return `y:${y}`
//     } else {
//         return "Something went wrong"
//     }
// }

// min(x,y,z)
// console.log(minimum(x,y,z));
//****************************************************************************************
//cube
// let x: number = Number(prompt("Enter x"));
// let y: number = Number(prompt("Enter y"));
// let z: number = Number(prompt("Enter z"));

// function cube(x: number, y: number, z: number):void {
//   for (let i: number = 1; i <= z; i++) {
//     document.write(`<div class='axisZ' style='top:calc(50% + ${i*10}px); left:calc(50% - ${i*10}px);'>`);
//     for (let j: number = 1; j <= y; j++) {
//       document.write(`<div class='axisY'>`);
//       for (let k: number = 1; k <= x; k++) {
//         document.write(`<span class='axisX' style='background-color:rgb(${Math.round(Math.random()*255)},${Math.round(Math.random()*255)},${Math.round(Math.random()*255)})'>${k}</span>`);
//       }
//       document.write(`</div>`);
//     }
//     document.write(`</div>`);
//   }
// }
// cube(x,y,z)
//****************************************************************************************
//salary
// function salary(tax: number = 0.1):void {
//     let name: string | null = prompt("Enter your name");
//     let hour: number = Number(prompt("Enter the hours"));
//     let degree: string | null = prompt("Enter your degree");
//     switch (degree) {
//       case "phd": {
//         process(name, hour, tax, 400000);
//         break;
//       }
//       case "master": {
//         process(name, hour, tax, 300000);
//         break;
//       }
//       case "bachelor": {
//         process(name, hour, tax, 200000);
//         break;
//       }
//       case "diploma": {
//         process(name, hour, tax, 100000);
//         break;
//       }
//       default: {
//         process(name, hour, tax, 50000);
//         break;
//       }
//     }

//     function process(
//       name: string | null,
//       hour: number,
//       tax: number = 0.1,
//       hourly: number
//     ):void {
//       let pureSalary: number = hour * hourly;
//       let taxSalary: number = pureSalary - pureSalary * tax;
//       console.log(`Name: ${name}, Pure Salary: ${pureSalary}, Salary with tax: ${taxSalary}`);
//     }
//   }
// function salaryCalc(tax: number = 0.1):string {
//   let name: string | null = prompt("Enter your name");
//   let hour: number = Number(prompt("Enter the hours"));
//   let degree: string | null = prompt("Enter your degree");
//   switch (degree) {
//     case "phd": {
//       return process(name, hour, tax, 400000);
//     }
//     case "master": {
//       return process(name, hour, tax, 300000);
//     }
//     case "bachelor": {
//       return process(name, hour, tax, 200000);
//     }
//     case "diploma": {
//       return process(name, hour, tax, 100000);
//     }
//     default: {
//       return process(name, hour, tax, 50000);
//     }
//   }

//   function process(
//     name: string | null,
//     hour: number,
//     tax: number = 0.1,
//     hourly: number
//   ):string {
//     let pureSalary: number = hour * hourly;
//     let taxSalary: number = pureSalary - pureSalary * tax;
//     return `Name: ${name}, Pure Salary: ${pureSalary}, Salary with tax: ${taxSalary}`
//   }
// }
// salary()
// console.log(salaryCalc());
//****************************************************************************************
//prime
// function prime(num:number):void{
//     let count:number=0;
//     for (let i:number=1; i<=num; i++){
//         if (num%i==0){
//             count++
//             console.log(i);
//         }
//     }
//     if (count==2) console.log(`Prime: ${num}`);
//     else console.log(`Not Prime: ${num}`);
// }
// function primeCheck(num:number):string{
//     let count:number=0;
//     for (let i:number=1; i<=num; i++){
//         if (num%i==0){
//             count++
//             console.log(i);
//         }
//     }
//     if (count==2) return `Prime: ${num}`
//     else return `Not Prime: ${num}`
// }
// prime(Number(prompt("Enter a number")))
// console.log(primeCheck(Number(prompt("Enter a number"))));
//****************************************************************************************
//prime count
// function prime(num: number): void {
//   for (let i: number = 2; i <= num; i++) {
//     let count: number = 0;
//     for (let j: number = 1; j <= i; j++) {
//       if (i % j == 0) {
//         count++;
//         console.log(j);
//       }
//     }
//     if (count == 2) console.log(`Prime: ${i}`);
//     else console.log(`Not Prime: ${i}`);
//   }
// }
// prime(Number(prompt("Enter a number")));
//****************************************************************************************
//factorial
// function factorial(num: number):void {
//   for (let i: number = 2; i <= num; i++) {
//     let count: number = 1;
//     for (let j: number = 1; j <= i; j++) {
//       count *= j;
//     }
//     console.log(count);
//   }
// }
// factorial(Number(prompt("Enter a number:")));
//****************************************************************************************
//calculator
// function calculator(x: number, y: number, operator: string | null): void {
//   switch (operator) {
//     case "+": {
//       console.log(`${x} + ${y} = ${x + y}`);
//       break;
//     }
//     case "-": {
//       console.log(`${x} - ${y} = ${x - y}`);
//       break;
//     }
//     case "/": {
//       console.log(`${x} / ${y} = ${x / y}`);

//       break;
//     }
//     case "*": {
//       console.log(`${x} * ${y} = ${x * y}`);
//       break;
//     }
//     case "%": {
//       console.log(`${x} % ${y} = ${x % y}`);
//       break;
//     }
//     case "^": {
//       console.log(`${x} ^ ${y} = ${x ** y}`);
//       break;
//     }
//   }
// }
// function calculate(x: number, y: number, operator: string | null):number {
//     switch (operator) {
//       case "+": {
//         return x + y
//       }
//       case "-": {
//        return x - y
//       }
//       case "/": {
//        return x / y
//       }
//       case "*": {
//        return x * y
//       }
//       case "%": {
//        return x % y
//       }
//       case "^": {
//        return x ** y
//       }
//     }
//   }
// calculator(Number(prompt("Enter the first number")),Number(prompt("Enter the second number")),prompt("Enter the operator"))
// console.log(calculate(Number(prompt("Enter the first number")),Number(prompt("Enter the second number")),prompt("Enter the operator")));
