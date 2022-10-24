import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function mythAnimation(){
    var tl = gsap.timeline({scrollTrigger:{trigger: "#hekate", markers:false, scrub: true, end: "bottom 40%", start: "top 90%"}});
    tl.from("#myth-title", {duration: 1.5, alpha: 0, y: -30})
    .from("#hekate", {duration:1.5, alpha:0, x: -100})
    .from("#goddess", {duration:1.5, alpha:0, x: 100})
    .from("#myth-content", {duration: 1.5, alpha: 0, y: 50});
    return tl;
}

function heroTwoAnimation(){
    var tl = gsap.timeline({scrollTrigger:{trigger: "#hero-2", markers:false, scrub: true, end: "bottom 40%", start: "top 90%"}});
    tl.from("#hero-2", {duration:3, clipPath:"inset(0 50%)"})
}

function aboutAnimation(){
    var tl = gsap.timeline({scrollTrigger:{trigger: "#about-content", markers: false, scrub: true, end: "bottom 40%", start: "top 90%"}});
    tl.from("#about-content", {duration: 1, alpha: 0, y: -50})
}

function galleryAnimation(){
    var tl = gsap.timeline({scrollTrigger:{trigger: "#gallery-2"}});
    tl.from("#more", {delay: 1, duration: 1, alpha: 0, y: 100})
    .from("#gallery-5", {duration: 0.5, alpha: 0})
    .from("#gallery-4", {duration: 0.5, alpha: 0, y: 20})
    .from("#gallery-6", {duration: 0.5, alpha: 0, x: 25})
    .from("#gallery-7", {duration: 0.5, alpha: 0, x: 50})
    .from("#gallery-3", {duration: 0.5, alpha: 0, y: -20})
    .from("#gallery-2", {duration: 0.5, alpha:0, x: -25})
    .from("#gallery-1", {duration: 0.5, alpha: 0, x: -50});
}

function writersAnimation(){
    var tl = gsap.timeline({scrollTrigger:{trigger: "#writers-head"}});
    tl.from("#writers-head", {delay: 2, duration: 1, alpha: 0, y: 50})
    .from("#aeschylus", {duration: 0.5, alpha: 0, y: 50})
    .from("#aristophanes", {duration: 0.5, alpha: 0, y: 50})
    .from("#euripides", {duration: 0.5, alpha: 0, y: 50})
    .from("#hesiod", {duration: 0.5, alpha: 0, y: 50})
    .from("#homer", {duration: 0.5, alpha: 0, y: 50})
    .from("#sophocles", {duration: 0.5, alpha: 0, y: 50})
    .from("#sappho", {duration: 0.5, alpha: 0, y: 50})
}


var mainTimeline = gsap.timeline();
mainTimeline.add(mythAnimation())
.add(heroTwoAnimation())
.add(aboutAnimation())
.add(galleryAnimation())
.add(writersAnimation());

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
