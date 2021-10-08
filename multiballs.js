"use strict";
console.log(gsap);

// let time1 = gsap.timeline({ repeat: 3 });

gsap.to(".ball", {
  duration: 2,
  y: "-400",
  ease: "ease-in-out",
  stagger: {
    each: 0.2,
    repeat: Infinity,
    yoyo: true,
  },
});
