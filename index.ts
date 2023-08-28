// 1--Create a function that takes an array, an index, and a value as parameters.
// Inside the function, use the splice method to insert the value at the specified index in the array.
// Return the modified array.
/*
let arr:string[] = ["ali","umair","haseeb","najeeb"];
var ind:number = 2;
var valu:string = "usman";

function modif(arr:string[],indx:number,value:string) {
    arr.splice(indx,0,value);
    return arr
}
console.log(modif(arr,ind,valu));
*/


// 2-- Implement a simple shopping cart program using an array. Create functions to add items, remove items, 
// and update quantities using the splice method. Print the cart's contents after each operation
/*
let cart:string[] = [];
function addtocart(arr:string[],indx:number,item:string){
    arr.splice(indx,0,item);
    console.log(arr);
}

function removecart(arr:string[],indx:number){
    arr.splice(indx,1);
    console.log(arr);
}

addtocart(cart,0,"watch");
addtocart(cart,0,"handsfree");
addtocart(cart,0,"mobile");
addtocart(cart,0,"trimer");
removecart(cart,1);
*/



// 3-- Write a program that uses a while loop to print the first 25 integers.

// var a = 1;
// while(a<=25){
//     console.log("The number is "+ a);
//     a++;
// }



// 4--  Write a program that uses a while loop to print the first 10 even numbers.

// var a = 1;
// while(a<21){
//      if (a%2==0){
//         console.log('the value of '+a+'is an even number');
//      } 
//      a++;
// }


// 5-- Create a function that takes a positive integer as parameter and uses a 
//while loop to calculate and return the factorial of that number.
/*
function fact(name:number){
    let facto:number = 1;
    while(name>0){
        facto *= name 
        name--;
    }
    console.log(facto)

}
fact(6);
*/


// 6-- Write a program having an array of numbers if the number is negative it should 
//     remove the negative number from the array.
/*
let num:number[] = [-1,-3,5,2,-4];
for (let a = 0; a < num.length; a++) {
    if (num[a]<0) {
        num.splice(a,1)
        console.log("number is negatve");
        a--;
    }
    else{
        console.log("number is positive");
    }
}
console.log(num);
*/



// 7-- Create a function that takes an array of numbers as parameter. Use a while loop to
// calculate and return the sum of all the numbers in the array.

/*
let arr:number[] = [5,4,7,3,9,3];
function sumofArr(para:number[]){
    let element:number = 0
    for (let a = 0; a < para.length; a++) {
        element += para[a];
    }
    console.log(element);
}
sumofArr(arr);
*/



// 8-- Implement a program that takes a list of temperatures in Celsius as input from the user.
// Convert each temperature to Fahrenheit using the formula F = (C * 9/5) + 32 and store the converted 
// temperatures in an array. Use a while loop to perform the conversion for each temperature

let tempC:number[]=[0,23,54,62,32,45];
var a:number = 0;
while (a<tempC.length) {
    tempC[a] = (tempC[a]*9/5)+32;
    a++;
}
console.table(tempC);