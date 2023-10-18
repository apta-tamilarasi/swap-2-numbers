let a=parseInt(prompt("Enter the number"))
let b=parseInt(prompt("Enter the number"))
let temp;

document.write(`Write a program in JS to swap two numbers using a function. <br><br>
Input 1st number : ${a}<br>
Input 2nd number :  ${b} <br><br>
`)
const swap=(a,b)=>{
temp=a
a=b
b=temp

document.write(`OUTPUT:<br>
Input 1st number : ${a}<br>
Input 2nd number :  ${b} <br>`)
}

swap(a,b)