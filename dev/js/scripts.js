import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function mythAnimation(){
    var tl = gsap.timeline();
    tl.from("#hekate", {duration:1.5, alpha:0, x: -500})
    .from("#goddess", {duration:1.5, alpha:0, x: 500});
    return tl;
}

function imageAnimation(){
    var tl = gsap.timeline();
    tl.from("#hero-2", {duration:3, clipPath:"inset(0 50%)"})
}

var mainTimeline = gsap.timeline();
mainTimeline.add(mythAnimation())
.add(imageAnimation());

