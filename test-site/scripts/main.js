
var myImage = document.querySelector("img");

myImage.onclick = function () {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "image/dog.jpg") {
    myImage.setAttribute("src", "image/goby.jpg");
  } else {
    myImage.setAttribute("src", "image/dog.jpg");
  }
};
var myButton = document.querySelector("button");
var myHeading = document.querySelector("h1");
function setUserName() {
  let myName = prompt("Please enter your name.");
  localStorage.setItem("name", myName);
  myHeading.innerHTML = "goby is cool, " + myName;
}
if (!localStorage.getItem("name")) {
  setUserName();
} else {
  let storedName = localStorage.getItem("name");
  myHeading.innerHTML = "goby is cool, " + storedName;
}
myButton.onclick = function () {
  setUserName();
};
function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName || myName === null) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'goby is cool, ' + myName; 
  }
}