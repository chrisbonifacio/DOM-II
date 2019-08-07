// Your code goes here

// Body
const body = document.body;

// Container
const container = document.querySelector(".container.home");

// Header
const header = document.querySelector("header");
header.style.zIndex = 2;

// Nav Bar
const navLinks = document.querySelectorAll(".nav a");

// Logo
const logo = document.querySelector(".logo-heading");

// Content Img
const imgContainer = document.querySelectorAll(".img-content");

// Content Img
const contentImg = document.querySelectorAll(".img-content img");

// Text Content
const textContent = document.querySelectorAll(".text-content");

// Email Input Creation
const emailContainer = document.createElement("div");
const emailElement = document.createElement("input");
const emailLabel = document.createElement("label");

emailContainer.classList.add("email");

container.append(emailContainer);

emailContainer.append(emailLabel);
emailContainer.append(emailElement);

emailElement.setAttribute("type", "text");
emailElement.setAttribute("placeholder", "First Name");
emailElement.setAttribute("name", "firstname");

// Email Container
emailContainer.style.display = "flex";
emailContainer.style.justifyContent = "center";
emailContainer.style.alignItems = "center";
emailContainer.style.margin = "1em auto 2em";

// Email Label
emailLabel.setAttribute("for", "firstname");
emailLabel.textContent = "First Name: ";
emailLabel.style.fontSize = "1.5em";
emailLabel.style.marginRight = ".5em";

// Email Input
const emailField = document.querySelector("input[type='text']");

// Select
const selectDemo = document.createElement("p");
emailContainer.append(selectDemo);

selectDemo.id = "log";

function logSelection(event) {
  const log = document.getElementById("log");
  const selection = event.target.value.substring(
    event.target.selectionStart,
    event.target.selectionEnd
  );
  console.log(event.target.selectionStart);
  log.textContent = `You selected: ${selection}`;
}

emailField.addEventListener("select", logSelection);

// Mouseover

header.addEventListener("mouseenter", e => {
  TweenMax.to(header, 1, { backgroundColor: "#7ebfc3" });
  e.stopPropagation();
});

header.addEventListener("mouseleave", e => {
  if (window.pageYOffset === 0) {
    TweenMax.to(header, 1, { backgroundColor: "#fff" });
  }
  e.stopPropagation();
});

navLinks.forEach(x => {
  x.addEventListener("mouseenter", e => {
    TweenMax.to(e.target, 0, {
      paddingBottom: 3,
      borderBottom: "2px solid orange"
    });
  });
  x.addEventListener("mouseleave", e => {
    TweenMax.to(e.target, 0, { borderBottom: "none" });
  });
});

// Keydown
document.body.addEventListener("keydown", e => {
  //   TweenMax.to(contentImg, 1, { scale: 1.3, ease: Power2.easeInOut, repeat: 2 });
  console.log(e.code);
});

// Wheel
window.addEventListener("wheel", e => {
  textContent.forEach(x => {
    TweenMax.to(textContent, 2, { color: "#17A2B8" });
  });
});

// Scroll

window.addEventListener("scroll", e => {
  if (window.pageYOffset === 0) {
    header.style.backgroundColor = "#fff";
  } else if (window.pageYOffset >= 330) {
    TweenMax.to(header, 2, { backgroundColor: "#7ebfc3" });
  }

  e.stopPropagation();
});

// Load

window.addEventListener("load", x => {
  TweenMax.to(logo, 1.5, { rotation: 360 });
  TweenMax.from(contentImg, 2, { opacity: 0, x: -60 });
  TweenMax.to(contentImg, 2, {
    opacity: 1,
    y: 0
  });
});

// Focus

emailField.addEventListener("focus", e => {
  e.target.style.padding = ".5em 0";
  e.target.style.width = "50%";
  e.target.style.backgroundColor = "#17A2B8";
  e.target.style.color = "#fff";
  e.target.value = "Try selecting some text in this field";
});

// Dblclick
document.querySelectorAll("img").forEach(x => {
  x.addEventListener("dblclick", e => {
    TweenMax.to(e.target, 1, { opacity: 0, display: "none" });
  });
});

// Drag

contentImg[0].addEventListener("drag", function(event) {
  console.log("dragged");
});

// Drop
function dragstart_handler(event) {
  console.log("dragStart");
  // Change the source element's scale to signify the drag has started
  event.target.style.scale = 1.2;
  // Set the drag's format and data. Use the event target's id for the data
  event.dataTransfer.setData("text/plain");
}

function dragover_handler(event) {
  console.log("dragOver");
  event.preventDefault();
}

function drop_handler(event) {
  console.log("dragOver");
  event.preventDefault();
  // Get the data, which is the id of the drop target
  const data = event.dataTransfer.getData("text");
  event.target.src = data;
  // Clear the drag data cache (for all formats/types)
  event.dataTransfer.clearData();
}

// preventDefault

navLinks.forEach(x => {
  x.addEventListener("click", e => {
    e.preventDefault();
  });
});
