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
//     var result = arr.copyWithin(2,3);
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

// reverseBySeparator(string, " ");


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
var inpstack = [];
var outstaack = [];

function enqueue(inpstack, item) {
    return inpstack.push(item)
}
enqueue(inpstack)


function dequeue(stackinp, stackout) {
    if (stackout.length <= 0) {
        while (stackinp.length > 0) {
            var element = stackinp.pop();
            stackout.push(element)
        }
    }
    return element.pop()
}
