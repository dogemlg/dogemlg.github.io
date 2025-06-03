function setUserName() {
  const myName = prompt("Please enter your name!");
  if (myName === null) {
    return 1;
  }
  if (myName.trim() === "") {
    return setUserName();
  }
  localStorage.setItem("name", myName);
  mytext.textContent = `Hello ${myName}, my fellow mustard superfan!`;
  return 0;
}

let mybutton = document.querySelector("button");
let mytext = document.querySelector(".user");

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
  let namecheck = setUserName();
  if (!localStorage.getItem("name") && namecheck === 1) {
    mytext.textContent = `Dont wanna share your name huh? Hope you arent a diddy ahh blud!`;
  }
});
