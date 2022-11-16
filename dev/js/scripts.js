import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { GSDevTools } from "gsap/GSDevTools";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";

gsap.registerPlugin(MotionPathPlugin, DrawSVGPlugin, GSDevTools, MorphSVGPlugin);

function morphText(){
  var tl = gsap.timeline();
    tl.from("#eOneLeftF", {duration:0.75, morphSVG:"#eOneLeft", alpha:0});
    tl.from("#eOneTopF", {duration:0.75, morphSVG:"#eOneTop", alpha:0},">-0.5");
    tl.from("#eOneMiddleF", {duration:0.75, morphSVG:"#eOneMiddle", alpha:0},">-0.5");
    tl.from("#eOneBottomF", {duration:0.75, morphSVG:"#eOneBottom", alpha:0},">-0.5");
    tl.from("#yLeftF", {duration:0.75, morphSVG:"#yLeft", alpha:0},">-0.5");
    tl.from("#yTopF", {duration:0.75, morphSVG:"#yTop", alpha:0},">-0.65");
    tl.from("#yBottomF", {duration:0.75, morphSVG:"#yBottom", alpha:0},">-0.5");
  return tl;
}

var mainTL = gsap.timeline();
mainTL.add(morphText());

GSDevTools.create();