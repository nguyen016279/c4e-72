//I Study
/*Ex1: Variable swap
Swapping variable is to exchange the values of two variable so that at the end, one
variable contains the value of the other
let a = 5;
let b = 6;
console.log(a, b);
let tmp = b;
b = a;
a = tmp;
console.log(a, b);
*/
/*Ex2: Split String into Array
Using type conversion from String to Array
const s = 'Hello beauty there';
const a = s.split(" ");
console.log(a)
*/
/*Ex3: In JavaScript, the spread operator (three dots): … can be useful in several tasks. Of
these tasks is to log (print out) an array without using loops, try it:
const a = [4, 5, 7, -8];
for (let i = 0; i < a.length; i++) {
    console.log(a[i])
}
*/
/*Ex4: Write a script to simulate a clothes shop, asking and performing certain tasks from users
let brand = ['Jeans', 'T-Shirt', 'Socks']
let brand = ['Jeans', 'T-Shirt', 'Socks']
let a = prompt("Hi there,welcome to shop admin panel, what do you want(C,R,U,D)").toUpperCase()
if(a == 'C' ){
    let b = prompt("What do you want to add")
    brand.push(b) 
    alert('Done')
    console.log(brand)
}else if(a == 'R'){
    console.log('The current items are:')
}else if(a == 'U'){
    let c = Number(prompt("Enter the posituion you want to edit")) - 1
    if (Number.isNaN(c)) {
        console.log("Pls enter number")
    }else{
        if ( c >= brand.length) {
            console.log('nhap so be thoi')           
        }else{
        let c1 = prompt("Enter new name")
        brand[c] = c1
        alert('Done')
        console.log(brand)
        }
    }
}else if(a == 'D'){
    let d = prompt("Ban muon xoa cho nao") - 1
    brand.splice(d,1)
    alert('Done')
    console.log(brand)
}else{
    alert("This command is not supported")
}
for(let i = 0;i < brand.length;i++){ 
    console.log(i+1, brand[i])
}
*/
// Serious exercies
/*Ex5: Write a script to ask users enter a sequence of numbers, the Numbers are separated by
commas, calculate the sum of the numbers and show it to users.

const nums = prompt('Enter sequence numbers').split(",");
let sumofnums = 0;
      for (i = 0; i < nums.length; i++) {
        sumofnums += parseInt(nums[i]);
      }
console.log('Sum of Numbers:',sumofnums)
*/
/*Ex6: Write a script asking users to enter a sequence of numbers, the numbers are separated
by commas, find the smallest number and log it out to users.

const nums = prompt('Enter sequence numbers').split(",");
let minNum = Math.min.apply(Math,nums);
console.log('Min number is:', minNum)
*/
/*Ex7: Create an array containing at least 5 numbers, then ask users enter a number, perform a
search to look for the number in the array, if the number is found, tell user that with the
index of it in the array, if not, also tell them so.
const arr = [3, 4, 6, -9, 10, -88, 2];
let nums = Number(prompt("Enter a number"));
if (!arr.includes(nums)) {
  alert(`${nums} is not Found in my array`);
} else {
  alert(`${nums} is Found at index of ${arr.indexOf(nums)}`);
}
*/
/*Ex8: You are a shepherd who owns a flock of sheep
1. Create an array to represent the sizes of your flock, and log all of your flock size,
expected screen output:

const sheeps = [5,7,300,90,24,75]
console.log('Hell, my name is nguyen and here is my sheep sizes:')
console.log(sheeps)

2. At the end of each month, you have to choose one and only one sheep to shear
and thus you want to choose the biggest one to maximize your profit. Add scripts
to search for the biggest sheep in your list:

const sheeps = [5,7,300,90,24,75]
console.log('Hell, my name is nguyen and here is my sheep sizes:')
console.log(sheeps)
maxSheep = Math.max.apply(Math,sheeps)
console.log(`Now my biggest sheep has size ${maxSheep}, let's shave it`);

3. When your biggest sheer, its size will return to the default size, which is 8.

const sheeps = [5,7,300,90,24,75]
console.log('Hell, my name is nguyen and here is my sheep sizes:')
console.log(sheeps)
maxSheep = Math.max.apply(Math,sheeps)
console.log(`Now my biggest sheep has size ${maxSheep}, let's shave it`);
sheeps[sheeps.indexOf(maxSheep)] = 8;
console.log("after shearing here is my size of flock");
console.log(sheeps);

4. In the following month, EVERY sheep in your flock grow, they have their size
increased by 50. Log them out

const sheeps = [5,7,300,90,24,75]
console.log('Hell, my name is nguyen and here is my sheep sizes:')
console.log(sheeps)
maxSheep = Math.max.apply(Math,sheeps)
console.log(`Now my biggest sheep has size ${maxSheep}, let's shave it`);
sheeps[sheeps.indexOf(maxSheep)] = 8;
console.log("after shearing here is my size of flock");
console.log(sheeps);
for (var i = 0; i < sheeps.length; i++) {
    sheeps[i]+=50;
}
console.log(`Month 1`)
console.log('One month has, passed my sheeps have grown, here are their sizes')
console.log(sheeps)
5.
const sheeps = [5,7,300,90,24,75]
console.log('Hell, my name is nguyen and here is my sheep sizes:')
console.log(sheeps)
maxSheep = Math.max.apply(Math,sheeps)
console.log(`Now my biggest sheep has size ${maxSheep}, let's shave it`);
sheeps[sheeps.indexOf(maxSheep)] = 8;
console.log("after shearing here is my size of flock");
console.log(sheeps);
for(let i = 1; i<4;i++){
for (let i = 0; i < sheeps.length; i++) {
    sheeps[i]+=50;
}
console.log(`Month ${i}`)
console.log('One month has, passed my sheeps have grown, here are their sizes')
console.log(sheeps)
}
6. 
const sheeps = [5,7,300,90,24,50,75]
console.log('Hell, my name is nguyen and here is my sheep sizes:')
console.log(sheeps)
maxSheep = Math.max.apply(Math,sheeps)
console.log(`Now my biggest sheep has size ${maxSheep}, let's shave it`);
sheeps[sheeps.indexOf(maxSheep)] = 8;
console.log("after shearing here is my size of flock");
console.log(sheeps);
for (let i = 1; i < 3; i++) {
  for (let i = 0; i < sheeps.length; i++) {
    sheeps[i] += 50;
  }
  console.log(`Month ${i}`);
  console.log("One month has passed this is the size of sheep");
  console.log(sheeps);
  maxSheep = Math.max.apply(Math,sheeps)
  console.log(`Now my biggest sheep has size ${maxSheep}, let's shave it`);
  sheeps[sheeps.indexOf(maxSheep)] = 8;
  console.log("after shearing here is my size of flock");
  console.log(sheeps);
}
console.log('Month 3')
for (let i = 0; i < sheeps.length; i++) {
    sheeps[i] += 50;
  }
  console.log("One month has passed this is the size of sheep");
  console.log(sheeps);
let totalSize = 0;
for (let size of sheeps) {
    totalSize +=size
}
let money = totalSize * 2;
*/

console.log(`My flock has total size of ${totalSize}`);
console.log(`I would get ${totalSize} * 2$ = ${money}`);
/*Ex9:
let size = 50;
const colors = ['red', 'gray', 'blue', 'purple', 'cyan'];
for(let i =0 ; i < colors.length ; i++) {
  for(let j = 0 ; j < 4; j++) {
  color(colors[i]);
  fd(size);
  rt(90);
  }
  size += 50;
}
*/
/*Ex10
const arrayName = prompt("Enter a sequences of name seperated by commas").split(
  ","
);
const newArray = arrayName.map((name) => {
  return `<${name}>`;
});
alert(`${arrayName} => ${newArray}`);
*/
/*Ex11
const numbers = prompt("Enter a sequences of number seperated by commas").split(
  ","
);
const newArray = number.map((num) => {
  return Number(num);
});
const oddNumber = newArray.filter((num) => {
  return num % 2 == 0;
});
alert(`${newArray} => ${oddNumber}`);
*/