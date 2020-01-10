//this is a self-invoking annonymous function
//also called an (function() {
//also called a module

(() => {
  //print {"some message"}

console.log("some message - from JavaScript");
//find the button element on the page by its ID with JavaScript

let theButton = document.querySelector("#myButton"),
    theheading=document.querySelector('h1'),
    svgImage=document.querySelector("#svggraphic");
//this function changes the heading text
function changetext(){
  theheading.textContent="hello there from the console";
}
function logSVG() {
  console.log(this.id);
}


theButton.addEventlistner("click",changeText);
svgImage.addEventlistner("mouserover",logSVG);
//document.queryselector('h1').textcontent="hello there from the console";
})();
