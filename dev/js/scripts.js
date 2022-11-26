import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { GSDevTools } from "gsap/GSDevTools";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";

gsap.registerPlugin(MotionPathPlugin, DrawSVGPlugin, GSDevTools, MorphSVGPlugin);

function morphEyeBack(){
  var tl = gsap.timeline();
  
  return tl;
}

function morphText(){
  var tl = gsap.timeline();
    tl.from("#eOneLeftF", {duration:0.5, morphSVG:"#eOneLeft", alpha:0})
    .from("#eOneTopF", {duration:0.5, morphSVG:"#eOneTop", alpha:0},"<25%")
    .from("#eOneMiddleF", {duration:0.5, morphSVG:"#eOneMiddle", alpha:0},"<25%")
    .from("#eOneBottomF", {duration:0.5, morphSVG:"#eOneBottom", alpha:0},"<25%")
    .from("#yLeftF", {duration:0.5, morphSVG:"#yLeft", alpha:0},"<0%")
    .from("#yTopF", {duration:0.5, morphSVG:"#yTop", alpha:0},"<25%")
    .from("#yBottomF", {duration:0.5, morphSVG:"#yBottom", alpha:0},"<25%")
    .from("#eTwoLeftF", {duration:0.5, morphSVG:"#eTwoLeft", alpha:0},"<0%")
    .from("#eTwoRightF", {duration:0.5, morphSVG:"#eTwoRight", alpha:0},"<25%")
    .from("#dashF", {duration:0.5, morphSVG:"#dash", alpha:0},"<0%")
    .from("#cOneLeftF", {duration:0.5, morphSVG:"#cOneLeft", alpha:0},"<25%")
    .from("#cOneTopF", {duration:0.5, morphSVG:"#cOneTop", alpha:0},"<10%")
    .from("#cOneBottomF", {duration:0.5, morphSVG:"#cOneBottom", alpha:0},"<10%")
    .from("#aBottomF", {duration:0.5, morphSVG:"#aBottom", alpha:0},"<0%")
    .from("#aTopF", {duration:0.5, morphSVG:"#aTop", alpha:0},"<25%")
    .from("#aRightF", {duration:0.5, morphSVG:"#aRight", alpha:0},"<25%")
    .from("#tF", {duration:0.5, morphSVG:"#t", alpha:0},"<0%")
    .from("#cTwoLeftF", {duration:0.5, morphSVG:"#cTwoLeft", alpha:0},"<0%")
    .from("#cTwoRightF", {duration:0.5, morphSVG:"#cTwoRight", alpha:0},"<25%")
    .from("#hLeftF", {duration:0.5, morphSVG:"#hLeft", alpha:0},"<0%")
    .from("#hRightF", {duration:0.5, morphSVG:"#hRight", alpha:0},"<0%")
    .from("#eThreeLeftF", {duration:0.5, morphSVG:"#eThreeLeft", alpha:0},"<0%")
    .from("#eThreeRightF", {duration:0.5, morphSVG:"#eThreeRight", alpha:0},"<25%")
    .from("#rLeftF", {duration:0.5, morphSVG:"#rLeft", alpha:0},"<0%")
    .from("#rRightF", {duration:0.5, morphSVG:"#rRight", alpha:0},"<25%")
  return tl;
}

var mainTL = gsap.timeline();
mainTL.add(morphEyeBack());
mainTL.add(morphText());

GSDevTools.create();