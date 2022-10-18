import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function mythAnimation(){
    var tl = gsap.timeline();
    tl.from("#hekate", {duration:1, x:-500})
    return tl;
}

var mainTimeline = gsap.timeline();
mainTimeline.add(mythAnimation());
