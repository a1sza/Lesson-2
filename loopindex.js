console.log('Step 6a');
// A while loop that prints all even numbers from 0 to 100
var numbera = 0
    
while (numbera <= 100){
   
    if (numbera % 2 == 0) {
    
    console.log(numbera);
    
    } 
    numbera ++; 
    
}
   


console.log('Step 6b');
// A while loop that prints every 3rd number going backwards from 100 until we reach 0
var numberb = 100 

while (numberb > 0){
    console.log(numberb);
    numberb = numberb - 3;
   

}


 
console.log('Step 6c');
// A for loop that prints every other number from 1 to 100
for (let i = 1; i <= 100; i ++)  {
    if (i % 2 == 1) {

    console.log (i);
    
    }
    
}

console.log('Step 6d');
// A for loop that prints every number from 0 to 100, but if the number is divisible by 3, it prints “Hello” instead of the number, and if the number is divisible by 5, it prints “World” instead of the number, and if it is divisible by both 3 and 5, it prints “HelloWorld” instead of the number.

for (let i = 0; i <= 100; i++) {
     
    if (i % 3 && i % 5 == 0) {
        console.log ('Hello World');
    
    } 
    else if (i % 3 == 0) { 
        console.log('Hello');
    
    }
    else  if (i % 5 == 0) {
        console.log('World');

    }

}