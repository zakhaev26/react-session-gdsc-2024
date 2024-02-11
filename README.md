# React-session-gdsc-2024
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
<!-- 
# What is React ? 

- A frontend Library to help developers(us) to create fast,performant applications for browsers.

A library is a bunch of code written by other developers whose functions you can import in your project and use it to make a bunch of cool stuff    

React what is being perceived as , is not what it actually is.
It works as a bunch of tools working together in sync to get the work done 
eg :Babel,Nodejs ,NPM,WebPack,JSX

# JSX
Simply , it allows you to put your Javascript code in your HTML and also HTML code in Javascript.

eg: 

In Html,

```html
<h1>
    This is your reminder to give your girl some flowers in valentine's day    
</h1>
```

```jsx
import React from 'react';

// A Javascript Function !!
function MyComponent() {
  return (
    // You are returning HTML !! 
    <div>
      <h1>This is also a reminder to give your girl some flowers in valentine's day</h1>
      <p>But,from React.js!</p>
    </div>
  );
};

export default MyComponent;
```

This JSX then compiles down to Plain Javascript , utilizing the methods of the `React` Class,something like : 

```js
import React from 'react';

// A Javascript Function !!
function MyComponent() {
  return React.createElement("div", null,React.createElement("h1", null, "This is also a reminder to give your girl some flowers in valentine's day"),React.createElement("p", null, "But,from React.js!")
  );
};
```

This transformed code is what React understands and renders onto the DOM.


# Let's Talk about Babel.

When you are learning Javascript , There are TONS of new features coming out daily in the JS Ecosystem.

Don't Trust me ? 
Here's a link that tells you about days since the last JS Framework came out,check : 

You need to keep in mind that there are some browsers how don't understand this Javascript and the browser might not support these.

This is where `Babel` Comes in.
It transpiles your code to a Older JS version 


Babel can also convert JSX into Plain JS

Babel has a feature called Preset and react has a Preset called @babel/preset-react

# Webpack (Parcel is the best)

It traverses your Source Tree and bundles all your files in a few files 

# What is NodeJS ? 
It is a ...

# What is NPM ? 
- bit on react scripts build ...

build made it to your disk,
run start/dev keeps those files in your RAM

facebook react app scripts 

NOde allows this Js to run 

React makes a virtual Copy of the DOM and when you make changes it creates a new Virtual dom and then it uses internally a Diffing algorithm 
and if it finds any differences in the 2 VDOMS it gets those and updates the ACTUAL DOM
That is what react does . -->
To Be Updated, Soon.
