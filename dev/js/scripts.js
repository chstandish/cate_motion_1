import { gsap } from "gsap";

import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { GSDevTools } from "gsap/GSDevTools";

gsap.registerPlugin(DrawSVGPlugin, GSDevTools);

function simpleMotion(){

  var tl = gsap.timeline();
  tl.fromTo("#leftStar", {fill:"rgba(0,0,0,0)", drawSVG:"0% 0%", x:560}, {duration:2, drawSVG:"0% 100%"})
  .to("#leftStar", {duration:1, fill:"#1D8BAE", x:0, transformOrigin:"center", rotate:-360}, "rollOut")
  .fromTo("#rightStar",{x:-560, fill:"rgba(0,0,0,0)", stroke:"rgba(0,0,0,0)"}, {duration:1, fill:"#1D8BAE", stroke:"#1D8BAE", x:0, transformOrigin:"center", rotate:360}, "rollOut")
  .fromTo("#faceBackground", {fill:"rgba(255,255,255,0)", drawSVG:"75% 75%"},{drawSVG:"25% -75%"})
  .to("#faceBackground",{duration:1, fill:"#F9D143"})
  .from(".eyes", {duration:1, alpha:0})
  .from("#mouth", {duration:1, alpha:0, transformOrigin:"center", rotation:360})
  return tl;

}

function patternMotion(){

    var tl = gsap.timeline();

    tl.fromTo(".odd",{drawSVG: "0% 0%"}, {duration:3, drawSVG:"0% 100%", stagger:0.25, rotate:360, transformOrigin:"top left"},"spin")
    .fromTo(".even",{drawSVG:"0% 0%"}, {duration:3, drawSVG:"0% -100%", stagger:0.25, rotate:360, transformOrigin:"bottom right"},"spin");
    return tl

}

var mainTL = gsap.timeline();
mainTL.add(simpleMotion())
.add(patternMotion());



GSDevTools.create();