// Your code goes here

// Body
const body = document.body;

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

body.addEventListener("scroll", e => {
  console.log(e);
});

// Mouseover

header.addEventListener("mouseenter", e => {
  TweenMax.to(header, 1, { backgroundColor: "#7ebfc3" });
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

textContent.forEach(x => {
  x.addEventListener("wheel", e => {
    e.preventDefault();
    TweenMax.to(textContent, 2, { y: -20 });
  });
});

console.log();

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
