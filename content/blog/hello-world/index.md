---
title: "JavaScript Basics For React"
date: "2015-05-01T22:12:03.284Z"
description: "concepts used in react"
---

- Functions
- Closure
- Array methods
- Destructuring

## Functions

In Javascript, you can do a lot more with functions. Because they are **first class functions**( Ya! it is a big thing ). To put it simply, a function acts like a variable in javascript.

It can :

1. be stored in variables. 2. be returned from a function. 3. be passed as arguments into another function.

I will tell you why it is a big thing.

I bet you have seen this thing(class) in other programming languages.

<code>
class Myclass{
constructor(value){
this.value = value;
}
}
<code>

What exactly is a class.It is sort of like template for creating objects and can be used to create multiple instances of objects.

Meaning i can do this:
<code>
const newValue = new Myclass("one");
const newValue2 = new Myclass("two");
console.log(newValue.value) // one
console.log(newValue2.value) // two
</code>

Now here is how classes were written in javascript before es2016

function IamClass(value){
this.value = value;
// we can learn about **this** later
}

const newValue = new IamClass("one");
const newValue2 = new IamClass("two");
console.log(newValue.value) // one
console.log(newValue2.value) // two

You see a function doesn't neccessarily need to return anything.These types of functions is called constructor functions.

<code>
const dispatch = someFunction();
// you see you can store the return value of a function
// you can also do this 
const dispatch = someFunction;
const dispatch = someFunction()()();

const funky = (cb) => cb();
</code>

### Closure

Let's see a common example for understanding closure a little bit.
A lot of things happen in this snippet.For understanding this snippet you need to think about the scope and the call stack.

<code>
function counter(){
let count = 0;
// here we initialised a variable with a value 
return function countIt(){
 count = count + 1;
 // we changed the value of variable,but the resulting value depends where  
 // the function is invoked.
 return count;
 }
}
</code>

By the definition of w3schools (this made more sense than others for me)
JavaScript variables can belong to the local or global scope.
Global variables can be made local (private) with closures.

Now let's define a react component and how these javascript concepts are used:
<code>

import React, { useState } from 'react';

function MyFirstArticle(){

const [ toggle,setToggle ] = useState(true);

const handleToggle = () => setToggle(!toggle);

return (<React.Fragment>

<h1>{I am open && toggle}</h1>
<h1>{I am closed && !toggle}</h1>
<button onClick={handleToggle} >switch the toggle</button>
</React.Fragment>)
}

</code>
