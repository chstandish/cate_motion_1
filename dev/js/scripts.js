import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { GSDevTools } from "gsap/GSDevTools";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";

gsap.registerPlugin(MotionPathPlugin, DrawSVGPlugin, GSDevTools, MorphSVGPlugin);

function wAnimation(){
  var tl = gsap.timeline();
  tl.fromTo("#middle",{fill:"rgba(0,0,0,0", drawSVG: "10.5% 10.5%"}, {duration:1, drawSVG:"60.5% -39.5%"})
  .fromTo("#left",{fill:"rgba(0,0,0,0", drawSVG: "0% 0%"}, {duration: 1, drawSVG:"0% 100%"}, "<0%")
  .fromTo("#right",{fill:"rgba(0,0,0,0", drawSVG: "54% 54%"}, {duration: 1, drawSVG:"54% -54%"}, "<0%")
  .from("#wFillEnd", {duration:1, morphSVG:"#wFillStart"})
  .from("#leafLeft", {duration: 0.5, alpha:0, morphSVG:"#leafLeftStart"})
  .from("#leafRight", {duration: 0.5, alpha:0, morphSVG:"#leafRightStart"}, "<0%");
  return tl;
}

function dotAnimation(){
  var tl = gsap.timeline();
  tl.fromTo("#dotLeft", {fill:"rgba(0,0,0,0)", drawSVG:"0% 0%", x:150}, {duration:0.5, drawSVG:"0% 100%"})
  .fromTo("#dotRight", {fill:"rgba(0,0,0,0)", drawSVG:"0% 0%", x:-150}, {duration:0.5, drawSVG:"0% -100%"}, "<0%")
  .to("#dotLeft", {duration:0.5, fill:"#482011", x:0, transformOrigin:"center", rotate:-360}, "rollOut")
  .to("#dotRight", {duration:0.5, fill:"#482011", x:0, transformOrigin:"center", rotate:-360}, "rollOut")
  return tl;
}

function textAnimation(){
  var tl = gsap.timeline();
  tl.from("#wag", {duration:1.5,transformOrigin: "425 450",rotate:180})
  .from("#freeInst", {duration:1, alpha:0})
  return tl;
}

var mainTL = gsap.timeline();
mainTL.add(wAnimation());
mainTL.add(dotAnimation());
mainTL.add(textAnimation());


GSDevTools.create();