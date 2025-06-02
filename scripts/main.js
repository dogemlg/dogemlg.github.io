function setUserName() {
  const myName = prompt("Please enter your name!");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    mytext.textContent = `Hello ${myName}, my fellow mustard superfan!`;
  }
}

let mybutton = document.querySelector("button");
let mytext = document.querySelector("p");

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storeduser = localStorage.getItem("name");
  mytext.textContent = `Hello ${storeduser}, my fellow mustard superfan!`;
}

const myhead = document.querySelector("h1");
myhead.addEventListener("mouseover", () => {
  myhead.textContent = "MUSTAAAAAAAAAAARD!";
});
myhead.addEventListener("mouseout", () => {
  myhead.textContent = "WELCOME TO AYMUSTARD!!";
});
const myimg = document.querySelector("img");
myimg.addEventListener("click", () => {
  const source = myimg.getAttribute("src");
  if (source === "assets/pics/mustard.png") {
    myimg.setAttribute("src", "assets/pics/transtard.jpg");
  } else {
    myimg.setAttribute("src", "assets/pics/mustard.png");
  }
});
mybutton.addEventListener("click", () => {
  setUserName();
});
