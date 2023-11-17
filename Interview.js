// 1.  What is React?
// answer - React is an open source javascript library.
// React is used for building user interfaces (UI)
// React is simplifies the creation of Single Page Application by using reusable components. 

// 2. What is Single Page Application ?
// On web page if many component updated or new component added the page will never reload or refreshed and only the same page updated everytime. 
// --A SPA is a web application that have only one single web page.
// Whenever user do some action on website, then in response content is dynamically updated without refreshing or loading a new page. 

// 3. What are the advantages of React ?
// Simple to build Single Page Application 
// React is cross platform and open source 
// Lightweight and very fast (virtual DOM)
// React is supported by large community and Ecosystem. 

// Disadvantages ........
// React is not good choice for very small application

// 4. Difference between React and Angular 

// React and Angular both are used to create single page UI applications using components.  
// React is a javascript library                    Angular is a complete framework. 
// React uses virtual DOM which makes it faster.    Angular uses a real DOM 
// React is smaller in size and lightweight and      Angular is bigger because it is a complete framework.
// therefore faster sometime. 
// React depends on external libraries for many       Angular is a complete framework , therefore it provide built-in-support for features like routing , forms, validation, and HTTP Requests. 
// complex features

// 5. What is DOM ? (Document Object Model)
// DOM represents the web page as a tree like structure  which allow Javascript to dynamically access and manipulate the content and structure of a web page. 

// 6. Difference between DOM and virtual DOM 
// React uses a virtual DOM to efficiently update the UI without re-render the entire page , which helps improve performance and make the application more responsive. 

// 7. What are data types in JS? What are primitive data types? 
// Primitive data types are immutable, which means their values cannot be changed or modified if they are created. They can hold only single value.

// 8. Difference between Primitive and Non-Primitive data types ? 
// Primitive- 1. Number, string, boolean, null, undefined are primitive data types 
//            2.It hold only single value 



// Non-Primitive- 1. Object, array, function, date, RegExp are non-primitive data types 
//                2. It hold multiple values and methods


/////// Hooks ////////////
// Hooks were added to react in version 16.8
// Hooks allow function components to have access to state and other react features. Because of this , class components are generally on needed.


///// Higher Order component /////
// higher-order component is a function that takes a component and returns a new component.

//// Pure Component
//// React pure components are the components that do not re-render when the value of props and state has been updated with the same values. Since these components do not cause re-rendering when the same values are passed thus they improve performance.


///Q. 1 What are the new tags in HTML5 ?
//// Like article, details, audio, figure, footer, header, canvas, command
// New types of <input> tag - color, date, datetime-local, datetime, email, month, number, range, search

///Q. 2 Should we inject div inside a span tag? Will HTML give error?
// In HTML, it is generally not considered proper or semantic to place a block-level element like <div> inside an inline-level element like <span>. The <div> element is used for creating block-level containers that typically represent larger sections of content, while the <span> element is used for applying styles or inline-level formatting to specific portions of text.

///Q. 3 What is event delegation and event bubbling?

///How different is React’s ES6 syntax when compared to ES5?

//1.  require vs import  
//ES5   var React = require('react');
//ES6   import React from 'react'

// 2. export vs exports
// ES5    module.exports = Component;
// ES6    export default Component;

////////////    Formula   ///////////////
///  BabyLonian Method /////

///// Square Root
///  xn+1 = (xn + S / xn) / 2

//// Qube Root
////xn+1 = (2*xn + (S / (xn*xn))) / 3


/////    Q:  Provide some examples of non-boolean value coercion to a boolean one
///  The specific list of "falsy" values in javascript :
// 1. ""(empty string) 
// 2. 0, -0, NaN  (invalid number)
// 3. null, undefined
// 4. false

///  Any value that's not on this "falsy" list is "truthy". Here are some examples of those:
// 1. "hello"
// 2. 42
// 3. true
// 4. [], [1, "2", 3] (array)
// 5. {}, {a: 42} (objects)
// 6. function foo() {...}  (function)


////////    Q:  Javscript async/await
// We use the async keyword with a function to represent that the function is an asynchronous function. The async function returns a promise.
// async function f() {
//     console.log('Async function.');
//     return Promise.resolve(1);
// }

// f();       ///// output: Async function.


//  Since this function returns a promise, you can use the chaining method then() like this:

// async function f() {
//      console.log('Async function.');
//      return Promise.resolve(1)
// }

// f().then(function(result){
//     console.log(result);
// })                                                 /////   output:  Async function
                                                    ///              1
//////   In the above program, the f() function is resolved and the then() method gets executed.                                                    

  
////   JavaScript await Keyword
///   The await keyword is used inside the async function to wait for the asynchronous operation.
//  Syntax:     let result = await promise;


                             //////       JavaScript Recursion

// Recursion is a process of calling itself. A function that calls itself is called a recursive function.
// function recurse() {
//     // function code
//     recurse();
//     // function code
// }

// recurse();   

//  A recursive function must have a condition to stop calling itself. Otherwise, the function is called indefinitely.To prevent infinite recursion, you can use if...else statement (or similar approach) where one branch makes the recursive call, and the other doesn't.
// function recurse() {
//     if(condition) {
//         recurse();
//     }
//     else {
//         // stop calling recurse()
//     }
// }

// recurse();


///////////////////////  Q:  Explain what is hoisting in Javascript
// Hoisting is the concept in which Javascript, by default, moves all declarations to the topof the current scope. As such, a variable can be used before it has been declared. Note thatJavascript only hoists declarations and not initializations


///////////////////////  Q:  Explain event bubbling and how one may prevent it
//   Event bubbling is the concept in which an event triggers at the deepest possible element,and triggers on parent elements in nesting order. As a result, when clicking on a child elementone may exhibit the handler of the parent activating.One way to prevent event bubbling is using `event.stopPropagation()` or `event.cancelBubble`on IE < 9

