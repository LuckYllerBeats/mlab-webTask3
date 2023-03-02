//Get the html text elements using querySelectorAll
const myTextElements = document.querySelectorAll("h1, h2, h3, h4, h5, p, li ");

//Now we create an object in which we must store the text contents
const myTextContents = {} ;

//Lopp/search through All the text elements and keep its contentents in the object
myTextElements.forEach((element, index) => {
    myTextContents['text${index}'] = element.myTextContents

});

//check to see if the code runs as intended using console.log
console.log(myTextContents + "it is working");

