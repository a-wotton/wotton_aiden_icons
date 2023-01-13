console.log('Javascript is running');

/* const is a type of variable - a bit of memory that can hold a value 

JS can use any valid CSS selector to make a connection to any element on the page - it works the same way as CSS selectors do, because it's using css selectors to find matching elements. 

the document is the DOM = the web page and all it's elements

querySelector is the method (function) that makes the connection between JS and the DOM (the elements)
*/

//step 1 - make the connection to the elements you want to interact with
const jpgGraphic = document.querySelector("#bitmap");

const vectorGraphic = document.querySelector("#vector");


function logID() {
    console.log('click on this element:', this.id);
}

//step 2 decide how you want the user to interact with the object created in step 1
jpgGraphic.addEventListener('click', logID);

vectorGraphic.addEventListener('click', logID);

