//I. Study
/* EX1: Let vs var vs const
1. What are var and const in javascript?
- Var:
+ The JavaScript variables statement is used to declare a variable and, optionally, we can initialize the value of that variable.
+ Variable declarations are processed before the execution of the code.
+ The scope of a JavaScript variable declared with var is its current execution context.
+ The scope of a JavaScript variable declared outside the function is global.
Let:
- The let statement declares a local variable in a block scope. It is similar to var, in that we can optionally initialize the variable.
+ The let statement allows you to create a variable with the scope limited to the block on which it is used.
2. What are the differences between let and var?
- Main difference is scoping rules. Variables declared by var keyword are scoped to the immediate function body 
(hence the function scope) while let variables are scoped to the immediate enclosing block denoted by { } (hence the block scope).
3. What are the differences between let and const?
- The const keyword does not allow a variable name to be reused anywhere within your code. This means that if you assign a variable 
a name using the const keyword later on you cannot reset that variable to be equal to something else
- The let keyword is useable in instances where the variable is going to be reassigned. The let keyword allows a new variable to be 
assigned within the scope of a function or loop while not changing a variable that uses the same name that is outside of the scope 
of that function or loop
4. What to use in what cases?
- Use var in cases: Scope essentially means where these variables are available for use. var declarations are globally scoped 
or function/locally scoped. It is globally scoped when a var variable is declared outside a function. This means that any variable 
that is declared with var outside a function block is available for use in the whole window. var is function scoped when 
it is declared within a function. This means that it is available and can be accessed only within that function. 
- Use const in cases: const is used to declare a constant - a value that cannot be changed during run.
- Use let in cases: let creates a variable accessible only in the block surrounding it, different from var - creates a variable with 
access scope throughout the function that contains it.
*/
/* Ex2: Boolean
1. What is Boolean?
- Boolean is a primitive data type commonly used in computer programming languages. By definition, a boolean has two possible values: 
true or false .
*/
/*Ex3 write program tp print out
a. 7 numbers, starting from 0 (no user input)
for(let i = 0; i<8; i++){
   console.log(i)
}
b. n​ numbers​, starting from 0, ​n​ entered by user
let n = Number(prompt("enter a number"))
for (let i = 0;i <= n;i++){
    console.log(i)
}
c. A sequence of numbers, starting from 3, ​ending before ​n​, ​n​ entered by user
let n = Number(prompt("enter a number > 3"))
for(let i = 3; i<=n;i++){
    console.log(i)
}
d. A sequence of numbers,​ starting from ​c​, ending before ​n​, ​c​ and n​ user entered by
let n = Number(prompt('enter ending number'))
let c = Number(prompt('enter starting number'))
for(let i=c;i<=n;i += 3){
    console.log(i)
}
e. A sequence of numbers, starting from ​c​, ending before ​n​, ​stepping by 3​, ​c​ and n​ entered by user
let n = Number(prompt('enter ending number'))
let c = Number(prompt('enter starting number'))
let s = Number(prompt('enter stepping number'))
for(let i=c;i<=n;i += s){
    console.log(i)
}
*/
/* Ex4: Write a program to calculate the factorial of ​n​: (1 * 2 * 3 *... *n), n enter by user
let n = Number(prompt('enter number'))
let a = 1
for(let i=1;i<=n;i++){
    a = a*i
}
alert(`Factorial of ${n} is ${a}`)
*/
/*Ex5: Write a program asking users their age, and then decide if they are old enough to view a 14+ content
let n = Number(prompt('How old are you'));
if(n<=14){
    alert("You haven't enough age to access this website")
}else{
    alert("Welcome to us")
}
*/
/*Ex6: Write a program asking user to enter a number, ​x​, then check if ​x​ is in the lower half or higher half of 0 - 9 range
let n = Number(prompt('enter number'));
if(0<n && n<4.5){
    alert('lower half of 9')
}else if(4.5<n && n<9){
    alert('Higher half of 9')
}
*/
/*Ex7: Write a program asking user to enter two numbers, ​x​ and ​n​, then check if ​x​ is in lower half or higher half of ​n
let n = Number(prompt('n='))
let x = Number(prompt('x='))
if((n/2)>x){
    alert(`${x} is in lower half of ${n}`)
}else{
    alert(`${x} is in higher half of${n}`)
}
*/
/*Ex8: Write a script to check if a number is even (divisible by 2) or odd number
let x = Number(prompt('x='))
if(x%2==0){
    alert(`${x} is even number`)
}else{
    alert(`${x} is odd number`)
}
*/
/* Ex 9: Write a program to print out
a. 6 L’s and H’s, half L’s, half H’s ​(L means low, H means high)
let x = 6
let L = 0
let H = 0
for(let i = 0;i<x;i++){
    if(i<x/2){
        L+=1

    }else{
        H+=1
    }
}
console.log(`${L} L, ${H} H`)
b. n​ L’s and H’s in total, n entered by user
let x = prompt('enter the total number of l and H)
let L = 0
let H = 0
for(let i = 0;i<x;i++){
    if(i<x/2){
        L+=1

    }else{
        H+=1
    }
}
console.log(`${L} L, ${H} H`)
c. 8 1’s and 0’s in total, consecutively
let x = 8
for(let i = 0;i<x;i++){
    if(i%2 === 0){
        console.log('0')
    }
    else {
        console.log('1')
    }
}
d. n​ 1’s and 0’s in total, consecutively, ​n​ entered by user
let x = Number(prompt('Enter the total number of 1 and 0'))
for(let i = 0;i<x;i++){
    if(i%2 === 0){
        console.log('0')
    }
    else {
        console.log('1')
    }
}
*/
/*Ex10: Write a script to calculate the BMI (Body Mass Index) of a person, the formula is as follows
let mass = prompt('Your weight in kg?')
let height = prompt('Your height in cm?')
let BMI = mass / ((height/100))**2
alert(Your BMI is ${BMI})
if (BMI<16){
    console.log('Severely underweight')
}else if(16<=BMI && BMI<18.5){
    console.log('Underweight')
}else if(18.5<=BMI  && BMI<25){
    console.log('Normal')
}else if(25<=BMI  && BMI<30){
    console.log('Overweight')
}else {
    console.log('Obese')
}
*/