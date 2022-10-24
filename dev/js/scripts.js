import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

//timeline animations
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

//gallery button animations - these are really repetitive but i'm not sure how to fit them all together
var galleryOneAnimation = gsap.timeline({paused:false});
galleryOneAnimation.to("#gallery-1", {duration: 0.25, scale: 1.07});

let galleryItemOne = document.querySelector("#gallery-1")

galleryItemOne.addEventListener("mouseover", function(){
    galleryOneAnimation.play();
});

galleryItemOne.addEventListener("mouseout", function(){
    galleryOneAnimation.reverse();
});


var galleryTwoAnimation = gsap.timeline({paused:false});
galleryTwoAnimation.to("#gallery-2", {duration: 0.25, scale: 1.07});

let galleryItemTwo = document.querySelector("#gallery-2")

galleryItemTwo.addEventListener("mouseover", function(){
    galleryTwoAnimation.play();
});

galleryItemTwo.addEventListener("mouseout", function(){
    galleryTwoAnimation.reverse();
});


var galleryThreeAnimation = gsap.timeline({paused:false});
galleryThreeAnimation.to("#gallery-3", {duration: 0.25, scale: 1.05});

let galleryItemThree = document.querySelector("#gallery-3")

galleryItemThree.addEventListener("mouseover", function(){
    galleryThreeAnimation.play();
});

galleryItemThree.addEventListener("mouseout", function(){
    galleryThreeAnimation.reverse();
});


var galleryFourAnimation = gsap.timeline({paused:false});
galleryFourAnimation.to("#gallery-4", {duration: 0.25, scale: 1.05});

let galleryItemFour = document.querySelector("#gallery-4")

galleryItemFour.addEventListener("mouseover", function(){
    galleryFourAnimation.play();
});

galleryItemFour.addEventListener("mouseout", function(){
    galleryFourAnimation.reverse();
});


var galleryFiveAnimation = gsap.timeline({paused:false});
galleryFiveAnimation.to("#gallery-5", {duration: 0.25, scale: 1.07});

let galleryItemFive = document.querySelector("#gallery-5")

galleryItemFive.addEventListener("mouseover", function(){
    galleryFiveAnimation.play();
});

galleryItemFive.addEventListener("mouseout", function(){
    galleryFiveAnimation.reverse();
});


var gallerySixAnimation = gsap.timeline({paused:false});
gallerySixAnimation.to("#gallery-6", {duration: 0.25, scale: 1.07});

let galleryItemSix = document.querySelector("#gallery-6")

galleryItemSix.addEventListener("mouseover", function(){
    gallerySixAnimation.play();
});

galleryItemSix.addEventListener("mouseout", function(){
     gallerySixAnimation.reverse();
});


var gallerySevenAnimation = gsap.timeline({paused:false});
gallerySevenAnimation.to("#gallery-7", {duration: 0.25, scale: 1.07});

let galleryItemSeven = document.querySelector("#gallery-7")

galleryItemSeven.addEventListener("mouseover", function(){
    gallerySevenAnimation.play();
});

galleryItemSeven.addEventListener("mouseout", function(){
    gallerySevenAnimation.reverse();
});
