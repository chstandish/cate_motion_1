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
    return tl;

}

function uiMotion(){

  var tl = gsap.timeline({repeat: 3});

  tl.fromTo("#black", {fill:"rgba(255,255,255,0)", drawSVG:"75% 75%", y:0}, {duration: 0.75, drawSVG:"25% -75%"})
  .to("#black", {duration:0.25, fill:"#000"})
  .to("#black",{duration:1, y:-410})
  .fromTo("#red", {fill:"rgba(255,255,255,0)", drawSVG:"75% 75%"}, {duration: 0.25, drawSVG:"25% -75%"})
  .to("#red", {fill:"#C00000"})
  .from("#redOrange", {duration:0.1, alpha:0})
  .from("#yellowOrange", {duration:0.1, alpha:0})
  .from("#yellow", {duration:0.1, alpha:0})
  .from("#yellowGreen", {duration:0.1, alpha:0})
  .from("#lightGreen", {duration:0.1, alpha:0})
  .from("#green", {duration:0.1, alpha:0})
  .from("#greenBlue", {duration:0.1, alpha:0})
  .from("#teal", {duration:0.1, alpha:0})
  .from("#lightBlue", {duration:0.1, alpha:0})
  .from("#blue", {duration:0.1, alpha:0})
  .from("#blueViolet", {duration:0.1, alpha:0})
  .from("#violet", {duration:0.1, alpha:0})
  .from("#lightViolet", {duration:0.1, alpha:0})
  .from("#redViolet", {duration:0.1, alpha:0})
  .from("#pink", {duration:0.1, alpha:0})
  .to("#red", {duration:0.1, alpha:0})
  .to("#redOrange", {duration:0.1, alpha:0})
  .to("#yellowOrange", {duration:0.1, alpha:0})
  .to("#yellow", {duration:0.1, alpha:0})
  .to("#yellowGreen", {duration:0.1, alpha:0})
  .to("#lightGreen", {duration:0.1, alpha:0})
  .to("#green", {duration:0.1, alpha:0})
  .to("#greenBlue", {duration:0.1, alpha:0})
  .to("#teal", {duration:0.1, alpha:0})
  .to("#lightBlue", {duration:0.1, alpha:0})
  .to("#blue", {duration:0.1, alpha:0})
  .to("#blueViolet", {duration:0.1, alpha:0})
  .to("#violet", {duration:0.1, alpha:0})
  .to("#lightViolet", {duration:0.1, alpha:0})
  .to("#redViolet", {duration:0.1, alpha:0})
  .to("#pink", {duration:0.1, alpha:0})
  .from("#black", {duration:1, y:-410})
  .fromTo("#black", {drawSVG:"25% -75%"}, {fill:"rgba(0,0,0,0)", drawSVG:"75% 75%"})
  return tl;

}

var mainTL = gsap.timeline();
mainTL.add(simpleMotion())
.add(patternMotion())
.add(uiMotion());



GSDevTools.create();