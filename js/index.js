// Your code goes here
const logo = document.querySelector(".logo-heading");
const navLinks = document.querySelectorAll(".nav a");
const body = document.body;

body.addEventListener("scroll", e => {
  console.log(e);
});

// Mouseover
logo.addEventListener("mouseover", () => {
  TweenMax.to(logo, 1.5, { rotation: 360 });
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
  console.log(e.code);
});

// Wheel
const contentImg = document.querySelectorAll(".img-content");

console.log(contentImg);

contentImg.forEach(x => {
  x.addEventListener("drag", e => {
    e.preventDefault();
    TweenMax.to(contentImg, 2, { x: e.x, y: e.y });
  });
});
