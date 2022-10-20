import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function mythAnimation(){
    var tl = gsap.timeline({scrollTrigger:{trigger: "#myth-title", markers:false, scrub: true, end: "bottom 40%", start: "top 90%"}});
    tl.from("#hekate", {duration:1.5, alpha:0, x: -500})
    .from("#goddess", {duration:1.5, alpha:0, x: 500});
    return tl;
}

function heroTwoAnimation(){
    var tl = gsap.timeline({scrollTrigger:{trigger: "#hero-2"}});
    tl.from("#hero-2", {duration:3, clipPath:"inset(0 50%)"})
}

function galleryAnimation(){
    var tl = gsap.timeline({scrollTrigger:{trigger: "#gallery-5"}});
    tl.from("#gallery-5", {duration: 1, alpha: 0})
    .from("#gallery-4", {duration: 1, alpha: 0, y: 10})
    .from("#gallery-6", {duration: 1, alpha: 0, x: 15})
    .from("#gallery-7", {duration: 1, alpha: 0, x: 25})
    .from("#gallery-3", {duration: 1, alpha: 0, y: -10})
    .from("#gallery-2", {duration: 1, alpha:0, x: -15})
    .from("#gallery-1", {duration: 1, alpha: 0, x: -25});
}

var mainTimeline = gsap.timeline();
mainTimeline.add(mythAnimation())
.add(heroTwoAnimation())
.add(galleryAnimation());

// let galleryItemOne = document.querySelector("#gallery-1")

// var buttonSize=1;

// matchMedia.add("(min-width: 800px)", () => {
//     buttonSize = 2;
// });

// matchMedia.add("(max-width: 799px)", () => {
//     buttonSize = 1.25;
// });

// var galleryOne = gsap.timeline({paused:true});
// galleryOne.to("#gallery-1", {duration: 0.25, scale: buttonSize});

// galleryItemOne.addEventListener("mouseover", function(){
//     galleryOne.play();
// });
