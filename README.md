# react-session-gdsc-2024
GDSC Web React Session Demo with Documention &amp; Materials.

# What are we going to do in this Session ? 
- Discuss fundamentals for React (History Included) 
- Setting up Node on your machine + React Setup using Vite.
- Getting our hands dirty by writing some React Code
- A short brief on the API (Application Programming Interface) that we will be using as a server to handle Request.

# Pre-requisite:
- Should know/have worked with HTML,CSS,JS
- Git, Github (not mandatory,but definitely a ++)
- Basics of Node.js 

---------------------------------------------------------------------------------------------------------

# What is React ? 

- A frontend Library to help developers(us) to create fast,performant applications for browsers.

A library is a bunch of code written by other developers whose functions you can import in your project and use it to make a bunch of cool stuff    

React what is being perceived as , is not what it actually is.
It works as a bunch of tools working together in sync to get the work done 
eg :Babel,Nodejs ,NPM,WebPack,JSX

# JSX
Simply , it allows you to put your Javascript code in your HTML and also HTML code in Javascript.

eg: 

```jsx
import React from 'react';

// A Javascript Function !!
function MyComponent() {
  return (
    // You are returning HTML !! 
    <div>
      <h1>Hello, world!</h1>
      ![Alt text](image.png)
      <p>This is a simple example of a React JSX component.</p>
    </div>
  );
};

export default MyComponent;


```