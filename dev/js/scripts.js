import { gsap } from "gsap";

gsap.set("button i", {transformOrigin: "center bottom"});

gsap.from("#first-line", {duration:0.5, alpha:0, y:-100});
gsap.from("#second-line", {duration:0.5, alpha:0, y:-50, delay:0.25});
gsap.from("button", {duration:0.5, alpha:0, y:50, delay:0.35});
gsap.from("#button i", {duration:0.25, alpha:0, rotation:90, delay:0.45});

let button = document.querySelector("#button");
