// (function() {
// var a=b=3
// })();

// console.warn(typeof a)
// console.warn(typeof b)

// question 2

// function test(){
//     return {
//         name : 'archana'
//     }
// }
// console.warn(test())

// function foo(){

// }




// fetch("https://fakestoreapi.com/products/" ,{     method: 'GET', // *GET, POST, PUT, DELETE, etc.
// mode: 'cors', // no-cors, *cors, same-origin
// cache: 'no-cache' }).then((item)=>{ 
//     return item.json()
// }).then((result)=>{
//     console.warn("data>>", result)
// })

//------------**----------//
// console.log(!!10+20)  // output 21

//-----------//----------//

// let x=0;
// console.log(x++)  // output 0

//---------------------//

// console.warn(2- -'3')   // output 5

//-----------------**-------------------//

// const obj = { 
//     a:'one',
//     b:'two',
//     a:'three'
// }
// console.log(obj)     // output {a:'three', b:'two'}


//-------**-----------//


// let person = {name:'sks'}
// const member =[person]
// person=null
// console.log(member)     // output [{name:'sks'}]


//////------------

// var num = 8;
// var num = 10;
// console.log(num)    // output 10

// function doSomething() {
//     console.log(this);
//   }

//   doSomething();

// var obj = {
//     name:  "vivek",
//     getName: function(){
//     console.log(this.name);
//   }
// }

// obj.getName();

///////************************//////////

//  var obj = {
//     name: "srk",
//     address: "mumbai",
//     getName: function(){
// console.log(this.address);
//     }
//  }
//  var getName = obj.getName;
//  var obj2 = {name:"ssg", getName};
//  obj2.getName();


//Scope Chain
// var y = 24;

// function favFunction(){
//   var x = 667;
//   var anotherFavFunction = function(){
//     console.log(x); // Does not find x inside anotherFavFunction, so looks for variable inside favFunction, outputs 667
//   }

//   var yetAnotherFavFunction = function(){
//     console.log(y); // Does not find y inside yetAnotherFavFunction, so looks for variable inside favFunction and does not find it, so looks for variable in global scope, finds it and outputs 24
//   }

//   anotherFavFunction();
//   yetAnotherFavFunction();
// }
// favFunction();


/////Closure

// var Person = function(pName){
//     var name = pName;

//     this.getName = function(){
//       return name;
//     }
//   }

//   var person = new Person("Neelesh");
//   console.log(person.getName());

//**************************//

// function randomFunc(){
//     var obj1 = {name:"Vivian", age:45};

//     return function(){
//       console.log(obj1.name + " is "+ "awesome"); // Has access to obj1 even when the randomFunc function is executed

//     }
//   }

//   var initialiseClosure = randomFunc(); // Returns a function

//   initialiseClosure(); 

/////***********************///
// console.warn(+true);
// console.warn(typeof +true);

//////****************////

// console.warn(!!"arc");
// console.warn(typeof (!"arc"));

////1
// for(let i=0; i<3; i++){          /////Block Scope
//   setTimeout(()=> console.log(i),1)
// }             //////output 0,1,2

////2
// for(var i=0; i<3; i++){          /////Global Scope
//   setTimeout(()=> console.log(i),1)
// }             //////output  three times 3


/////3
// function sum(a,b) {
//   return a+b;
// }
// console.log(sum(1, "2"))

////4
// let num = 0
// console.log(num++)  // output 0 2 2
// console.log(++num)
// console.log(num)

////5
// const sum = eval('10*10+5')
// console.log(sum)

////6
// const obj = {1: "a", 2:"b", 3:"c"}
// console.log(obj.hasOwnProperty("1"))
// console.log(obj.hasOwnProperty(1))

////7
// for(let i=1; i<5; i++){
//   if(i===3) continue;     ///output 1 2 4
//   console.log(i);
// }

////8

// function sayHi(){
//   return(() => "Hello")()          //////output  string
// }
// console.log(typeof sayHi())

////9

// function sayHi(){
//     return () => 0;           ////output function
//   }
//   console.log(typeof sayHi())

/////10
// function sayHi(){
//     return () => 0;           ////output number
//   }
//   console.log(typeof sayHi()())

/////11


// function random(num) {
//     const square = (n, i, j) => {
//         let mid = (i + j) / 2;
//         let mul = mid * mid;
//         if ((mul === n) || (Math.abs(mul - n) < 0.00001)){
//            return mid;
//         }else if (mul < n){
//            return square(n, mid, j);
//         }else{
//            return square(n, i, mid);
//         }
//      }
// let i = 1;
// const found = false;
// while(!found){
//     if(i * i === num){
//         return i;
//     }else if(i * i > num){
//         let res = square(num, i - 1, i)
//         return res;
//     };
//     i++
// }
// }

// console.log(random(36))

// function sqrt(num){
//     for(var i = 0; i*i <= num; i++){
//         if(i * i === num)
//         return i;
//     }
// }
// console.log(sqrt(81))

// function qb(num){
// for(int i = 0; i < num; i++){
//     if(i * i  === num)
//     return i;
// }
// }
// console.log(qb(60))

// function sqrt(num){
//     var temp,
//      sr = num / 2;

//      do {
//         temp = sr;
//         sr = (temp + (num / temp)) / 2
//      } while (temp !== sr);
//      return temp ;

// }
// console.log(sqrt(81))

// function Table(){
//     for(var i = 1; i <=10; i++ ){

//     }
// }

// const { createHmac } = await import('node:crypto');

// const secret = 'abcdefg';
// const hash = createHmac('sha256', secret)
//                .update('I love cupcakes')
//                .digest('hex');
// console.log(hash);

// let i = 0;

// queueMicrotask(function test() {
//   i++;
//   console.log("microtask", i);
//   if (i < 3) {
//     queueMicrotask(test);
//   }
// });

// (async () => {
//     console.log("async function start");
//     for (let i = 1; i < 3; i++) {
//       await null;
//       console.log("async function resume", i);
//     }
//     await null;
//     console.log("async function end");
//   })();

//   queueMicrotask(() => {
//     console.log("queueMicrotask() after calling async function");
//   });

//   console.log("script sync part end");       

///***Output ***///

//   async function start
//   script sync part end
//    microtask 1
//    async function resume 1
//    queueMicrotask() after calling async function
//    microtask 2
//    async function resume 2
//    microtask 3
//    async function end



/////88//// Block statement

// var x = 1;
// let y = 1;

// if (true) {
//   var x = 2;
//   let y = 2;
// }

// console.log(x);   
// console.log(y);    
////// output x=2    ////// output y=1

//   var full_name_split = "Paul StevePanakkal".split(" ");
// var first_name = full_name_split[0];
// var last_name = full_name_split.length > 1 ? full_name_split[full_name_split.length - 1] : null;
// console.log(full_name_split, 'test')

// let name = {firstName:'Test', secondName: 'Admin'};
// const fullName = name.firstName + ' ' + name.secondName
// console.log('Test>>>', fullName);


// function sort(array) {
// var done = false;
// while (!done) {
//   done = true;
//   for (var i = 1; i < array.length; i += 1) {
//     if (array[i - 1] > array[i]) {
//       done = false;
//       var tmp = array[i - 1];
//       array[i - 1] = array[i];
//       array[i] = tmp;
//     }
//   }
// }

// return array;
// }

// var array = [12, 10, 15, 11, 14, 13, 16];
// console.log(sort(array));

///*************////

// let a = [20]
// let b = ['20']
// console.log(a[0] == b[0]);
// console.log(a[0] === b[0]);  // check value and type

///*************////
//  let a = [1,4,10, 3]
// let z = {name : 'archana'}
// console.log(...z);

///*************////
// console.log(typeof NaN);

///*************////
//  let data = 10 - - 10
//  console.log(data);

///*************////
//  const data = new Set([1, 2,2,3, 3, 4])
//  console.log(data);


/////////////////


// hoisteFunction = 5
//   console.log(hoisteFunction);

//   var hoisteFunction;


/////////////////////Closures

// function hello(name){
//   var message = "hello " + name ;
//   return function hello(){
//     console.log(message);
//   }
// }

// var helloWorld = hello("World");
// helloWorld()


/////////////////////Remove Duplicates from a JavaScript Array

// function data (arr){
// const result = []

// for(const i of arr){
//   let noReapeat = true;

//   for(const j of result){
// if(i == j){
//   noReapeat = false;
//   break;
// }
//   }
//   if(noReapeat){
// result.push(i)
//   }
// }
// return result;

// }

// console.log(data([1,2,2,4,6,5,5,4]));

///////////////////////////////OR

// function data(arr){

// const result = arr.filter((ele, index)=> arr.indexOf(ele)==index)
// return result

// }
//OR//

// function data(arr){

//   return [...new set(arr)]
// }
// console.log(data([1,2,2,4,6,5,5,4]))



///////////////////////////******* */

// var arr = [4, 3, 6, 12, 45, 2, 8] //// Increasing Order

// function sort() {
//   var done = false;
//   while (!done) {
//     done = true;
//     for (var i = 1; i < arr.length; i += 1) {
//       if (arr[i - 1] > arr[i]) {
//         done = false;
//         var temp = arr[i - 1];
//         arr[i - 1] = arr[i];
//         arr[i] = temp;
//       }
//     }
//   }
//   return arr;
// }


// var arr = [4, 3, 6, 12, 45, 2, 8]   //// Decreasing order

// function sort() {
//   var done = false;
//   while (!done) {
//     done = true;
//     for (var i = 1; i < arr.length; i += 1) {
//       if (arr[i] > arr[i-1]) {
//         done = false;
//         var temp = arr[i];
//         arr[i] = arr[i-1];
//         arr[i-1] = temp;
//       }
//     }
//   }
//   return arr;
// }

// console.log(sort(arr));



// function sqrt(num){
//       var temp,
//        sr = num / 2;

//        do {
//           temp = sr;
//           sr = (temp + (num / temp)) / 2
//        } while (temp !== sr);
//        return temp ;

//   }
//   console.log(sqrt(81))



// //////////Question


// const obj2 = {
//     name: "rakhi",
//     email: "rakhi@094"
// }

// const obj5 = {
//     name: "archana",
//     email: "22222"

// }

// const obj = [obj2, obj5]

// // const joinobj = JSON.stringify(obj2)
// console.log(obj)



//////////////////Question


// const  obj4 = 
//    [ {name: "rakhi" , amount : 90000},
//     {name: "riya" , amount: 700000 },
//     {name: "archana" , amount: 600000 }
// ]

// // const total = obj4.reduce((sum, obj) => sum + obj.amount, 0)

//  //// or

// const data = obj4.map((ele) => ele.amount)
// const total = data.reduce((a, b) => a+b)

// console.log(total);


/////////////Question

// const inp1 = {a:1, b:2, c:3, d:10, e:12}
// const inp2 = {a:2, e:12, f:6, d:10}

// // const output = {d:10, e:12}
// //  const CommonKeyValue = ({inp1, inp2}) => {

// //     const output = {}

// //     Object.keys(inp1).filter((key)=> inp2.hasOwnProperty(key) && inp1[key] === inp2[key]).forEach(key => output[key] = inp1[key])
// //  }

// const output = {}

// for (const key in inp1){
//     if(inp2.hasOwnProperty(key) && inp1[key] === inp2[key]){
//         output[key] = inp1[key]
//     }
// }

// console.log(output)


//////////Question 

// const inp = [1, 2, -2, 11, 7, 1] // output 7
// const inp1 = [1, 4, 7, 2, 4, 7]// output 4

// // const largestvalue = (arr) => {
// //     const largest = Math.max(...arr)

// //     const secondLargest = Math.max(...arr.filter(num => num !== largest))
// //     return  secondLargest ;
// // }

// // console.log(largestvalue(inp));
// // console.log(largestvalue(inp1))


// or-------------

// const largestVal = (arr) => {
//     var done = false
//     while (!done) {
//         done = true
//         for (var i = 0; i < arr.length; i++) {
//             if (arr[i] > arr[i - 1]) {
//                 done = false
//                 var temp = arr[i - 1]
//                 arr[i - 1] = arr[i]
//                 arr[i] = temp

//             }

//         }
//     }
//     return arr[1]
// }

// console.log(largestVal(inp));

////////////Question- Rotate array by 2 place

// const inp = [2, 7, 11, 4, -2]

// const RotateArr = (arr) => {

//     const rotation = 2 % arr.length /// Calculate effective number of rotation

//     const rotateVal = arr.slice(rotation).concat(arr.slice(0, rotation))

//         return rotateVal


// } 

// console.log(RotateArr(inp));


///////////Question - create an array of SUM : At any index put sum of all elements except that index element 

// const inp = [2, 7, 11, 4, -2]  //// result [20, 15, 11, 18, 24]

// const sumArray = (arr) => {

//     const data = arr.map((item, ind) => {
//         const sum = arr.reduce((a,b,i)=> {
//             if(i !== ind){
//                 return a + b
//             } 
//                 return a

//         }, 0);
//         return sum
//     })
//     return data

// }

// console.log(sumArray(inp));

//////////////Question missing odd number

// const inp = [3, 5, 7, 9, 11, 15]

// const OddArr = (arr) => {
//     for(let i = 1; i < arr.length; i += 2){
//         if(arr[i] !== arr[i-1] + 2){
//            return arr[i-1] + 2
//         }
//     }


// } 

// console.log(OddArr(inp));

// /////or

// for(let i = 0; i < inp.length; i++){
//     let current = inp[i]
//     let next = current + 2
//     if(inp[i+1] === next) continue;
//     else {
//         console.log(next);
//     }
// }

////////////Question - Reverse the string


// const str = "This is Javascript code"

// const revrseString = (str) => {
//     const reverseArr = str.split("").reverse().join("")
//     // const data = reverseArr.join("")
//     return reverseArr
// }

// console.log(revrseString(str));


//////////////// Pure component

// var sum = 0;

// const add = (num) => {
//     return sum+= num
// } 

// console.log(add(10));
// console.log(add(10));


////////// Useref


// function sum (num1, num2 = 2, num3 = 3){
//     return num1 + num2 + num3;
// }
// let values = [1,5];
// let total = sum(4, ...values);

// console.log(total);

// var obj;
// console.log(obj);


// //////Printing triangle star pattern using a single loop

// const design = (n) => {
//     var i;
//     var j;
//     var k;
//     for (i = 0; i < n; i++) {
//         var row = '';
//         for (j = 0; j <= n-i; j++) {
//             row += ' ';
//         }
//         for (k = 0; k<= 2*i; k++){
//             row += '*';
//         }
//         console.log(row);
//     }

// }
// design(5)


// var n= 7;
// const pattern = (n) => {
//     var i, j, flag=1 ;
//     for(i=1, j=0; i<= 2*n-1; i++){
//         if(i<n-j){
//             var row = '';
//         }else{
//             if(flag){
//                 row += '*';
//             }else{
//                 row = '';
//             }
//             flag = 1-flag
//         }
//         if(i=== n+j){
//             j++;
//             if(i===2*n-1) break;
//             i=0;
//             flag = 1;
//             console.log(row);
//         }
//     }
// }

// // console.log(pattern(7));
// pattern(7)

// function printTriangle(n) {
//     for (let i = 1; i <= n; i++) {
//         console.log(' '.repeat(n - i) + '*'.repeat(2 * i - 1));
//     }
// }

// // Call the function with n=7 to create the triangle pattern
// printTriangle(7);

// const tri = (n) => {
//     for (let i = 1; i <= n; i++) {
//         let row = '';
//         for (let j = 1; j <= n - i; j++) {
//             row += ' ';
//         }
//         for (let k = 1; k <= 2 * i - 1; k++) {
//             row += '*'
//         }
//         console.log(row);
//     }
// }
// tri(6)

// const square = (n) => {
//     for (let i = 1; i <= n; i++) {
//         let row = '';
//         for (let j = 1; j <= n; j++) {
//             row += ' * ';
//         }
//         console.log(row);
//     }
// }
// square(4)


// const num = (t) => {
//     var t = this.top - 1;
//   while(t >= 0) {
//     console.log(this.data[t]);
//     t--;
//   }
// }
// console.log(num(5));

// const hollowsqr = (n) => {
//     for (let i = 0; i < n; i++) {
//         let row = '  ';
//         for (let j = 0; j < n; j++) {
//           if (i === 0 || i === n - 1 || j === 0 || j === n - 1) {
//             row += '  *';
//           } else {
//             row += '   ';
//           }
//         }
//         console.log(row);
//     }

// }

// hollowsqr(5)

///// Square Root //////

// const sqrt = (n) => {
// var temp,
// sr = n/2

// do{
//     temp = sr
//     sr= (temp + (n/temp))/2
// }while(temp!== sr)
// return  temp
// }
// console.log(sqrt(15));

//////////////  Qube Root //////////////

// const qr = (n) => {
//     var temp,
//         sr = n / 2
//     do {
//         temp = sr
//         sr = (2 * temp + (n / (temp * temp))) / 3
//     } while (temp !== sr)
//     return temp
// }

// console.log(qr(68));


/////////  JavaScript array literal   ////////
// const arr = () => {
//     // var emp = ["Sonoo","Vimal","Ratan"]; 
//     // for (var i=0; i < emp.length; i++){
//     //     console.log(emp[i]);
//     // }
// }
// arr()


/////1. copyWithin() Array //////

// const arr = () => {
//      var arr = ["AngularJS", "Node.js", "JQuery", "Bootstrap"];
//     var result = arr.copyWithin(1,2);
//     console.log(result);
// }
// arr()

/////2.  Array entries() Method // array.entries()  | The entries() method creates a new iterator object of an array, holding the key/value pairs for every value in the array. It does not have any parameters. ////

// const arr = () => {
//     var arr = ['John', 'Michael', 'Embrose', 'Herry', 'Lewis'];
//     var result = arr.entries();
//     // for (var data of result) {
//     //     console.log(data);
//     // }
//     for (let data of result) {   // let declares a variable, but its scope is within the block.  
//         console.log(data);
//     }
// }
// arr()

/////3. Array  every() method /////   array.every(callback(currentvalue,index,arr),thisArg)  /
// var marks = [50, 40, 45, 37, 20];
// const arr = (element, index, array) => {
//     // return index < 5;  //// True
//     return element > 30  //// return false, as marks[4]=20 
// }
// console.log(marks.every(arr))

/////4. Array  flat() method /////   var newArr=arr.flat(<depth>);  The flat() method is an inbuilt array method that flattens a given array into a newly created one-dimensional array. It concatenates all the elements of the given multidimensional array, and flats upto the specified depth.  /

// const arr = () => {
//     // var arr=['a','b',['c','d']]; //given 2D array  
//     // var newArr=arr.flat();
//     var arr = ['John', 'Peter', , 'Tomy', ['Eni', , 'Kerry']]; //given 2D array with holes in between.  
//     var newArr = arr.flat(); //using flat() method.  
//     console.log(newArr)
// }
// arr()

/////5.  Array flatMap() Method // var newArr=arr.flatMap(function callback(currentValue[ , index[ , array]])  
// {    return element  } [ , thisArg])
//        | The flatMap() method is a combination of flat() and map() methods. This method initially maps each array element through a mapping function, then flatten up the array with depth value as 1. ////


// var arr=[2,4,6,8];  

//     console.log(arr.flatMap(x=>[[x/2]]));

// var arr1 = ['a', 'b', 'c', 'd'];
// var arr2 = [1, 2, 3, 4];
// var newArr = arr1.flatMap((arr1, index) => [arr1, arr2[index]]);

// var arr = ["This is", , "JavaTpoint.com"];  
// var newArr=arr.flatMap(x => x.split(" "));  
// console.log(newArr);

/////6. Array  fill() method /////   arr.fill(value[, start[, end]]) /

// const arr = () => {
//     var arr = ["AngularJS", "Node.js", "JQuery"];
//     var result = arr.fill("Bootstrap");
//     console.log(result)
// }
// arr()

// var arr=Array.from("You are viewing an example of string");
// console.log(arr)

// var func = function () {
//     var arr = Array.from(arguments);
//     console.log(arr)
// }
// func('John', 'Roy', 'Jess', 'Mary')

// var set = new Set(['C','C++','Java','C','Java','C++','Python','Perl']);
// console.log(Array.from(set));  /////  In the output, we can see that each value occurred only once.

// var arr=["AngularJS","Node.js","JQuery"]; 
// console.log(arr)
// console.log(arr.pop())
// console.log(arr) 

// var arr=["AngulaJS","Node.js","JQuery"];  
// var len=arr.length;  

// for(var x=1;x<=len;x++)  
//   {  
//     console.log(arr.pop()) 
//   }  

// var arr=["AngularJS","Node.js"];  
// arr.push("JQuery","Bootstrap"); 
// console.log(arr) 

////////// Array slice() method    //////  array.slice(start,end)  /

// var arr=["AngularJS","Node.js","JQuery","Bootstrap"]  
// var result=arr.slice(-4, -2);  
// console.log(result);
// console.log(arr.length);


///////   Array splice() method    //////// array.splice(start,delete,element1,element2,?,elementn) 

// var arr=["Monday","Tuesday","Thursday","Friday"];  
// var result=arr.splice(2,2,"Wednesday")  
// console.log(arr);
// console.log(result);


///////   Array values() method    //////// array.values();   


// var arr = ["John","Mary","Tom","Harry","Sheero"]; //Intializing array elements  
// var itr = arr.values(); //Using values() method.  
// for (let x of itr) {   
//     console.log(x); 
// }

// var arr=["John","Tom","Sheero","Romy","Tomy"]; //Initialized array  
// var itr=arr.values(); 
// console.log(itr.next().value); 
// console.log(itr.next().value);  
// console.log(itr.next().value);  
// console.log(itr.next().value);  
// console.log(itr.next().value);  


///////   Array unshift() method    //////// array. unshift(element1,element2,....,elementn)    |   The JavaScript array unshift() method adds one or more elements in the beginning of the given array and returns the updated array.

// var arr=["AngularJS","Node.js"];  
// var result=arr.unshift("JQuery");  
// console.log(arr);

// var arr=["AngularJS","Node.js"];  
// console.log(arr.length);
// arr.unshift("JQuery","Bootstrap");  
// console.log(arr.length);
// console.log(arr);


///////////////////////////    While Loop   ////

// var i = 11
// while (i<=15){
//     console.log(i);
//     i++
// }

// var i = 21;
// do{
//     console.log(i);
//     i++
// }while(i<=25)




// var arr = [3, 2, 11, 4, 7, 1, 15]
// var sortArr = []
// const acsd = (num) => {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             let temp = 0;
//             if (arr[i] > arr[j]) {
//                 temp = arr[i];
//                 arr[i] = arr[j];
//                 arr[j] = temp
//             }
//         }
//         sortArr.push(arr[i])
//     }
//     console.log(sortArr);
// }
// acsd(arr)


// var arr = [3, 2, 11, 4, 7, 1, 15]
// const ascnum = () => {
//     let done = false
//     while (!done) {
//         done = true
//         for (let i = 0; i < arr.length; i++) {
//             if (arr[i] > arr[i + 1]) {
//                 done = false
//                 var temp = arr[i + 1]
//                 arr[i + 1] = arr[i]
//                 arr[i] = temp
//             }
//         }
//     }
//     console.log(arr);
// }

// ascnum(arr)


// Q1: Given a string , reverse each word in the sentence?

// var  string = "Welcome to this Javascript Guide!"

// const reverseBySeparator = (string, separator) => {
// var result = string.split(separator).reverse().join(separator);

// console.log(result);   
// }
// reverseBySeparator(string, "")   /////   !ediuG tpircsavaJ siht ot emocleW
// reverseBySeparator(string, " ")    /////  Guide! Javascript this to Welcome


// var string = "Welcome to this Javascript Guide!"

// const reverseBySeparator = (string, separator) => {
//   var words = string.split(separator);
//   var reversedWords = words.map(word => word.split("").reverse().join(""));
//   var result = reversedWords.join(separator);
//   console.log(result);   
// }

// reverseBySeparator(string, " ");     ////////   emocleW ot siht tpircsavaJ !ediuG


///    Q2: How to check if an object is an array or not? Provide some code.


// var arrList = "Welcome to this Javascript Guide!"
// var arr = [2, 3, 1, 4]
// function great(param) {
// if(typeof param === "string"){
// console.log("Array!");
// }else{
//     console.log("Array");

// }
// }

///////   OR    //////

// function great() {
//     if(Object.prototype.toString.call(arrList) === '[object Array]'){
//     console.log("Array");
//     }
//     else{
//             console.log("!Array");

//         }
//     }

// great(arrList)

///////   OR    //////

// console.log(Array.isArray(arrList));   /// false
// console.log(Array.isArray(arr));    ///// True



////   Q3:  How to empty an array in javascript?

// var arrList = ['a', 'b', 'c', 'd', 'e', 'f']
// var result = arrList.splice(0, arrList.length)
// console.log(arrList);

// const emptyArray = () => {
//     while(arrList.length){
//         arrList.pop()
//     }
//     console.log(arrList);

// //     for(let x=7; x <= arrList.length; x++)  
// //   {  
// //     console.log(arrList.pop()) 

// //   }  
// }
// emptyArray(arrList)


//////    Q4: How would you check if a number is an integer?

// console.log(typeof 2);

// const num = (data) => {
// if (data){
//     return console.log(data % 1 === 0);
// }
// }
// num(3.2)


//////    Q5:  Implement enqueue and dequeue using only two stacks

// Enqueue means to add an element and dequeue means to remove an element
// var inpstack = [];
// var outstack = [];

// function enqueue(inpstack, item) {
//     return inpstack.push(item)
// }
// console.log(enqueue(inpstack, 1));
// console.log(enqueue(inpstack, 2));
// console.log(enqueue(inpstack, 3));
// console.log(enqueue(inpstack, 4));



// function dequeue(stackinp, stackout) {
//     if (stackout.length <= 0) {
//         while (stackinp.length > 0) {
//             var element = stackinp.pop();
//             stackout.push(element)
//             console.log(element);
//             console.log(stackout);
//         }
//         console.log(stackout); 
//     }
//     return stackout.pop()
// }

// console.log(dequeue(inpstack, outstack));
// console.log(dequeue(inpstack, outstack));
// console.log(dequeue(inpstack, outstack));
// console.log(dequeue(inpstack, outstack));


/////    Q6:   Write a "mul" function which will property when invoked as below

// function mul (x) {          ///// anonymous function 
//     return function (y) {
//         return function (z) {
//             return x*y*z
//         }
//     }
// }
// console.log(mul (2)(4)(5));


//////    Q7:   FizzBuzz Challenge   /////   Create a for loop that iterates up to 100 while outputting "fizz" at multiples of 3, "buzz" at multiples of 5 and "fizzbuzz" at multiples of 3 and 5.

// for (let i = 1; i <= 100; i++){
//     let f = i % 3 === 0,
//     b = i % 5 === 0;
//     console.log(f ? (b ? "FizzBuzz" : "Fizz") : b? "Buzz" : i);
// }


//////  Q8:   Given two strings , return true if they are anagrams of one another .   For example :   "Mary" is an anagram of "Army"

// var firstWors = "Mary";
// var secondWords = "Army"

// const isAnagram = (first, second) => {
// var a = first.toLowerCase();
// var b = second.toLowerCase();

// a = a.split("").sort().join("");
// b = b.split("").sort().join("");

// return console.log(a === b); ;

// }

// isAnagram(firstWors, secondWords)


///////    Q9:   How would you use a closure to create a private counter ?

//You can create a function within an outer function (a clouser) that allows you to update a private variable wouldn't be accessible from outside the function without the use of a helper function.

///  A closure is a feature of JavaScript that allows inner functions to access the outer scope of a function. Closure helps in binding a function to its outer boundary and is created automatically whenever a function is created.

// function counter() {
//     var count = 0;
//     return {
//         add: function (inc) {
//             count += inc;
//             console.log(count);
//         },
//         retrieve: function () {
//             return 'The counter is currently at: ' + count;
//         }
//     }
// }

// var result = counter();
// result.add(5);
// result.add(9);
// console.log(result.retrieve());;


/////   Q10:  What will be the output of the following code ?

// var y = 1;
// if(function f() {}) {
//     y += typeof f;
// }

// console.log(y);  /// 1undefined

///   If condition statement evaluate using "eval" so "eval(function f() {})" which return "function f() {}""  Which is true so inside if statement  code execute. "typeof f" return undefined because if statement code execute at run time , so statement inside "if" condition evaluate at run time.   

// var k = 1;
// if(1) {
//     eval (function foo() {});
//     k += typeof foo;
//  }
//  console.log(k)    /////  1undefined

// var k = 1;
// if(1) {
//     function foo() {}
//     k += typeof foo;
// }
// console.log(k)    /////   1function


//////    Q11:  What will the following code output?

// (function () {
//     var a = b = 5;
// })();
// console.log(b);   ////  output 5,   even though it seems as if the variable was declared within a function and can't be accessed outside of it. But "b" is not declared anywhere in the function with "var" so it is set equal to 5 in the global scope.


//////     Q12:   Write a function that would allow you to do this

// function mul(a) {
//     return function (b) {
//         return a*b
//     }
// }

// console.log(mul(5)(6));


/////   Q13:  How does the "this" keyword work? Provide some examples

// function foo () {
//     console.log(this.bar);
// }

// var bar = "Global";
// var obj1 = {
//     bar: "object1",
//     data : foo
// }

// var obj2 = {
//     bar: "object2"
// }

// foo();  /// "Global"
// obj1.data()   ////  "object1"
// foo.call(obj2)     /////   "object2"
// new foo()    /////   undefined


/////   Q14:   How would you create a private variable in Javascript?
// To create a private variable in javascript that cannot be changed you need to create it as a local variable within a function. Even if the function is executed the variable cannot be accessed outside of the function.

// function variable () {
//     var priv = "secret code"
// }

// console.log(variable(priv));  ////   Throw error

////  To access the variable , a helper function would need to be created tha return the private variable.

// function variable() {
//     var priv = "secret code"
//     return function () {
//         return priv
//     }
// }

// var getdata = variable()

// console.log(getdata());


//////       Async/await

// class Thenable {
//     constructor(num) {
//       this.num = num;
//     }
//     then(resolve, reject) {
//       alert(resolve);
//       setTimeout(() => resolve(this.num * 2), 1000); // (*)
//     }
//   }

//   async function f() {
//     // waits for 1 second, then result becomes 4
//     let result = await new Thenable(2);
//     // alert(result);
//     console.log(result);
//   }

//   console.log(f());


// class Waiter {
//   async Wait() {
//     return await Promise.resolve(2)
//   }
// }

// new Waiter().Wait().then(alert)
// ////    OR
// new Waiter().Wait().then(result => alert(result))



// async function f() {
//   try{
//     let response = await fetch("http://no-such-url")
//     let result = await response.json()
//   }catch(err){
//     alert (err)
//   }
// }
// f()



// function loadJson(url) {
//   return fetch(url)
//     .then(response => {
//       if (response.status == 200) {
//         return response.json();
//       } else {
//         throw new Error(response.status);
//       }
//     });
// }

// loadJson('https://javascript.info/no-such-user.json')
//   .catch(alert); // Error: 404




// // class HttpError extends Error {
// //   constructor(response) {
// //     super(`${response.status} for ${response.url}`);
// //     this.name = 'HttpError';
// //     this.response = response;
// //   }
// // }

// // function loadJson(url) {
// //   return fetch(url)
// //     .then(response => {
// //       if (response.status === 200) {
// //         return response.json();
// //       } else {
// //         throw new HttpError(response);
// //       }
// //     });
// // }

// // // Ask for a user name until github returns a valid user
// // function demoGithubUser() {
// //   let name = prompt("Enter a name?", "iliakan");

// //   return loadJson(`https://api.github.com/users/${name}`)
// //     .then(user => {
// //       alert(`Full name: ${user.name}.`);
// //       return user;
// //     })
// //     .catch(err => {
// //       if (err instanceof HttpError && err.response.status === 404) {
// //         alert("No such user, please re-enter.");
// //         return demoGithubUser();
// //       } else {
// //         throw err;
// //       }
// //     });
// // }

// // demoGithubUser();



// // class HttpError extends Error {
// //   constructor(response) {
// //     super(`${response.status} for ${response.url}`)
// //     this.name = "HttpError";
// //     this.response = response;
// //   }
// // }

// // async function loadJson(url) {
// //   let response = await fetch(url)
// //   if (response.status === 200) {
// //     return response.json();
// //   } else {
// //     throw new HttpError(response)
// //   }
// // }

// // async function demoGithubUser() {
// //   let user;
// //   while (true) {
// //     let name = prompt("Enter a name?", "iliakan")
// //     try {
// //       user = await loadJson(`https://api.github.com/users/${name}`)
// //       break;
// //     } catch (err) {
// //       if (err instanceof HttpError && err.response.status === 404) {
// //         alert("No such user, please re-enter")
// //       } else {
// //         throw err
// //       }
// //     }
// //   }

// //   alert(`Full name: ${user.name}.`);
// //   return user;
// // }

// // demoGithubUser();


// ///////    Call async from non-async

// async function wait() {
//   await new Promise(response => setTimeout(response, 1000))
//   return 10
// }

// function f() {
//   wait().then(result => alert(result))
// }

// f()



// let promise = new Promise(function(resolve, reject) {
//   setTimeout(() => resolve('Promise resolved'), 4000);
// })

// async function asyncFunc(){
//   let result = await promise;
//   console.log(result);
//   console.log("Hello");
// }

// asyncFunc()


///////     Q15: What is clouser in javascript?

////   A Clouser is a function defined inside another function and has access to the variable  which is declared and defined in parent function scope.

// var globalVar = "Clouser";

// (function outerFunction(outerArg) {
//   var outerFuncVar = "x";
//    (function innerFunction(innerArg) {
//     var innerFuncVar = "y";
//      console.log(
//       "outerArg = " + outerArg + "\n",
//       "innerArg = " + innerArg + "\n",
//       "outerFuncVar = " + outerFuncVar + "\n",
//       "innerFuncVar = " + innerFuncVar + "\n",
//       "globalVar = " + globalVar + "\n"
//     );
//   })(5);
// })(7)



//////   Q16: What will be the output of the following code?

// var output = (function(x) {
//   delete x;
//   return x;
// })(0)

// console.log(output);    //////    output: 0



// var Employee = {
//   company: 'xyz'
// }

// var output = (function () {
//   var emp = Object.create(Employee)
//   console.log(emp);
//   delete emp.company;
//   console.log(emp.company);   //////   output: xyz,    Delete operator doesn't delete prototype property, In this example 'emp' object got company as prototype property.
//   console.log(emp.hasOwnProperty('company'));      //////   output: false
// })()

// console.log(output);



///////   Q17: When would you use the  'bind' function?
//  The bind method creates a new function 

//  const fullName = function() {
//   var result = "Hello, this is " + this.first + " " + this.last;
//   console.log(result);
//  }
//  console.log(fullName());

//  var person = {first: "Foo", last: "Bar"};
//  console.log(fullName.bind(person)());

////////////////// OR

// function fullName (){
//   return "Hello, this is " + this.first + " " + this.last;
// }
// console.log(fullName());

// var person = {
//   first : "Foo",
//   last : "Bar"
// }

// console.log(fullName.bind(person)());


///////  Q18:  write a recursive function that performs a binary search

///   Recursion is a process of calling itself. A function that calls itself is called a recursive function.A recursive function must have a condition to stop calling itself. Otherwise, the function is called indefinitely.
//  Syntax:
// function recurse () {
//   // function code
//   recurse();
//   // function code
// }

// recurse()

// function countDown (num) {
// console.log(num);
// const newNum = num - 1;
// if (newNum > 0){
//   countDown(newNum)
// }
// }
// countDown(4)


///  Example 2: Find Factorial
// function factorial(num) {
//   if (num === 0) {
//     return 1;
//   } else {
//     return num * factorial(num - 1);
//   }
// }

// const number = 3;
// if(number > 0){
//   let result = factorial(number);
//   console.log(`The factorail of ${number} is ${result}`);
// }



// function recursion (arr, val, leftVal, rightVal) {
// if(leftVal > rightVal ){
//   return -1;
// }
// var middlePivot = Math.floor((leftVal + rightVal)/2);
// if(arr[middlePivot] === val){
//   return middlePivot;
// }else if(arr[middlePivot] > val){
//   return recursion (arr, val, leftVal, middlePivot - 1);
// }else {
//   return recursion (arr, val, middlePivot + 1, rightVal);
// }
// }

// console.log(recursion(8, 5, 6, 7));



///// Q: Write a recursive function that returns the binary string of a given decimal number

// console.log(decimalToBinary(3)); // 11
// console.log(decimalToBinary(8)); // 1000
// console.log(decimalToBinary(1000)); // 1111101000

// function decimalToBinary(digit) {
//   if (digit >= 1) {
//     // If digit is not divisible by 2 then recursively return proceeding
//     // binary of the digit minus 1, 1 is added for the leftover 1 digit
//     if (digit % 2) {
//       return decimalToBinary((digit - 1) / 2) + 1;
//     } else {
//       // Recursively return proceeding binary digits
//       return decimalToBinary(digit / 2) + 0;
//     }
//   } else {
//     // Exit condition
//     return '';
//   }
// }



//////   Q:   Given an integer, determine if it is a power of 2. If so, return that number, else return -1. (0 is not a power of two)

// function isPowerofTwo(digit) {
//  return digit & (digit - 1) === 0;
// }

// function isPowerofTwoZeroCase(digit) {
// return (digit !== 0) && ((digit & (digit - 1)) === 0);
// }
// isPowerofTwo()

// // console.log(isPowerofTwo(0));
// // console.log(isPowerofTwo(0));
// console.log(isPowerofTwoZeroCase(4));


////////////////////    Q:  What is callback hell and what is the main cause of it?


////////////////////     Q: Buble short
// const bubbleShort = (array) => {
//   let swaps;
//   do {
//     swaps = false;
//     for (let i = 1; i < array.length; i++) {
//       if (array[i] < array[i - 1]) {
//         let temp = array[i - 1];
//         array[i - 1] = array[i];
//         array[i] = temp;
//         swaps = true;
//       }
//     }
//   } while (swaps)
//   console.log(array);
// }
// bubbleShort([4,3,5,2,8,7,6])



////////////////////////  Q:  Write a function called lucky_sevens which takes an array of integers and returns true if any three consecutive elements sum to 7.

// const lucky_sevens = (arr) => {
// if(arr.length < 3){
//   return "Not possible";
// }
// for(var i=2; i < arr.length; i++){
//   if(arr[i]+arr[i-1]+arr[i-2] === 7){
//     return true;
//   }
// }
// return false;
// }
// console.log(lucky_sevens([2, 1, 5, 1, 0]));



///////////////////   Q:   Clock angle -  You will be given a number N that represents where the minute hand currently is on a clock. Your program should return the angle that is formed by the minute hand and the 12 o'clock mark on the clock.

// const simpleClockAngle = (num) => {
//   return 6 * num
// }

// console.log(simpleClockAngle(60));



///////////////////////////  Q:   You will be given an array of several arrays that each contain integers and your goal is to write a function that will sum up all the numbers in all the arrays. For example, if the input is [[3, 2], [1], [4, 12]] then your program should output 22 because 3 + 2 + 1 + 4 + 12 = 22. Solve without and with reduce.

// const sumArr = (arr) => {
// var sum = 0;
// for(var i=0; i < arr.length; i++){
//   for(var j=0; j < arr[i].length; j++){
//     sum += arr[i][j];
//   }
// }
// return sum
// }

// console.log(sumArr([[3, 2], [1], [4, 12]]));



// function sumArray(arr) {
//   return arr.reduce((t, e) => t.concat(e)).reduce((t, e) => t + e)
// }
// console.log(sumArray([[3, 2], [1], [4, 12]]));



///////////////////////  Q:   You will be given 2 parameters: a low and high number. Your goal is to print all numbers between low and high, and for each of these numbers print whether or not the number is divisible by 3. If the number is divisible by 3, print the word "div3" directly after the number.

// const test_divisor = (low, high) => {
// var output = []
// for(var i=low; i <= high; i++){
//   output.push(i);
//   if(i % 3 === 0){
//      output.push('div3')
//   }
// }
// return output;
// }
// console.log(test_divisor(2,15));


///////////////////////  Q:   (Oddball Sum)  Write a function called oddball_sum which takes in a list of numbers and returns the sum of all the odd elements. Try to solve with and without reduce function.

// const oddball_sum = (arr) => {
// var sum = 0 ;
// for(var i=0; i < arr.length; i++){
//   if(arr[i] % 2 !== 0){
// sum += arr[i]
//   }
// }
// return sum;
// }
// console.log(oddball_sum([2, 3, 4, 6, 7, 9, 8, 1]));



///////////////////    Q:  Write a function that takes an array of integers and returns the sum of the integers after adding 1 to each.

// const intArr = (arr) => {
// var sum = 0;
// for(var i=0; i < arr.length; i++){
//    sum += arr[i]+1;
  
// }
// return sum ;
// }
// console.log(intArr([2, 3, 4, 6, 7, 9, 8, 1]));



// const intArr = (arr) => {
//   var sum = [];
//   for(var i=0; i < arr.length; i++){
//     let temp = arr[i]+1;
//     sum.push(temp)
//   }
//   return sum ;
//   }
//   console.log(intArr([2, 3, 4, 6, 7, 9, 8, 1]));


// const intArr = (arr) => {                        /////   add 2 on odd place and add 1 on even position
//   var sum = [];
//   for(var i=0; i < arr.length; i++){
//     if(i % 2 === 0){
//       var temp = arr[i]+1;
//       sum.push(temp)
//     }else {
//       temp = arr[i]+2;
//       sum.push(temp)
//     }
//   }
//   return sum ;
//   }
//   console.log(intArr([2, 3, 4, 6, 7, 9, 8, 1]));



//////////////////////   Q:   Find out if a string is a rotation of another string. E.g. ABCD is a rotation of BCDA but not ACBD.
// var string = 'ABCD'

// const rotation = (string) => {
// let rotate = string.split("")

// for (let i = 1; i < rotate.length; i++) {
//     rotate.unshift(rotate.pop());
// }
// console.log(rotate.join(''));
// }
// rotation(string)



//////////////////////////   Q:   Return the N-th value of the Fabonacci sequence Recursively.

// function fib(n) {
//     if (n < 2){
//       return n
//     }
//     return fib(n - 1) + fib (n - 2)
//   }

//   console.log(fib(7));


const fibo = (n) => {
let arr = [0, 1];
for(let i = 2; i < n+1; i++){
    arr.push(arr[i-2] + arr[i-1])
}
return arr[n]
}

console.log(fibo(4));


