"use strict";
console.log(gsap);

const timeline = gsap.timeline();

timeline.to(".ball", {
  duration: 2,
  x: 400,
  rotation: 200,
});

timeline.to(".ball", {
  duration: 1.5,
  scale: 0,
  transform: "translate(100vw, -100vh)",
});
