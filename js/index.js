// Your code goes here
const navLinks = document.querySelectorAll(".nav a");
const body = document.body;

body.addEventListener("scroll", e => {
  console.log(e);
});

// Mouseover
const header = document.querySelector("header");
const contentImg = document.querySelectorAll(".img-content");

header.style.zIndex = 2;

header.addEventListener("mouseenter", e => {
  TweenMax.to(header, 1, { backgroundColor: "#7ebfc3" });
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
  TweenMax.to(contentImg, 1, { scale: 1.3, ease: Power2.easeInOut, repeat: 2 });
});

// Wheel

contentImg.forEach(x => {
  x.addEventListener("wheel", e => {
    e.preventDefault();
    TweenMax.to(contentImg, 2, { y: -50 });
  });
});

// Load
const logo = document.querySelector(".logo-heading");

window.addEventListener("load", x => {
  TweenMax.to(logo, 1.5, { rotation: 360 });
  TweenMax.from(contentImg, 2, { opacity: 0, x: -60 });
  TweenMax.to(contentImg, 2, {
    opacity: 1,
    y: 0
  });
});

// Drag
contentImg.forEach(x => {
  x.addEventListener("drag", e => {
    TweenMax.to(contentImg, 2, { x: e.clientX, y: e.clientY });
    console.log(e);
  });
});

// preventDefault

navLinks.forEach(x => {
  x.addEventListener("click", e => {
    e.preventDefault();
  });
});
