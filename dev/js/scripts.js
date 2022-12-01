import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { GSDevTools } from "gsap/GSDevTools";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
// import { reverseSegment } from "gsap/utils/paths";

gsap.registerPlugin(MotionPathPlugin, DrawSVGPlugin, GSDevTools, MorphSVGPlugin);

function eyeMotion(){
  gsap.set("#eyeMotionPath", {alpha:0})
  gsap.set("#eye", {scale:0.5, x:50, y:175, rotation:45})
  var tl = gsap.timeline();
    tl.to("#eye", {duration:0.5, x:-85, y:75, scale:1})
    .from("#lowerEyelid", {duration:0.5, alpha:0}, "<0%")
    .from("#upperEyelid", {duration:0.5, alpha:0}, "<25%")
    .from("#iris", {duration:0.5, alpha:0}, "<25%")
    .to("#eye", {duration:1, rotation:65, motionPath:{path:"#eyeMotionPath", align:"#eyeMotionPath"}})
    .to("#iris", {duration:1, x:25, y:-25}, "<0%")
  return tl;
}

function eyeClose(){
  var tl = gsap.timeline();
  tl.to("#upperEyelid", {duration:0.25, morphSVG:"#middleEyelidTop"}, {morphSVG:"#upperEyelid"})
  .to("#lowerEyelid", {duration:0.25, morphSVG:"#middleEyelidBot"}, "<0%")
  .to("#iris", {duration:0.25, morphSVG:"#irisClosed"}, "<0%")
  return tl
}

function eyeOpen(){
  var tl = gsap.timeline();
  tl.to("#lowerEyelid", {duration:0.25, morphSVG:"#lowerEyelid"})
  .to("#upperEyelid", {duration:0.25, morphSVG:"#upperEyelid"}, {morphSVG:"#upperEyelid"}, "<0%")
  .to("#iris", {duration:0.25, morphSVG:"#iris"}, "<20%")
  return tl
}

function eyeFinalMove(){
  var tl = gsap.timeline();
    tl.to("#eye", {duration:1, rotation:0, x:0, y:0})
    .to("#iris", {duration:1, x:0, y:0}, "<0%")
  return tl
}

function morphEyeBack(){
  var tl = gsap.timeline();
    tl.from("#eyeSevenEnd", {duration:0.35, morphSVG:"#eyeSeven", alpha:0})
    .from("#eyeEightEnd", {duration:0.35, morphSVG:"#eyeEight", alpha:0}, "<10%")
    .from("#eyeNineEnd", {duration:0.35, morphSVG:"#eyeNine", alpha:0}, "<10%")
    .from("#eyeElevenEnd", {duration:0.35, morphSVG:"#eyeEleven", alpha:0}, "<10%")
    .from("#eyeTenEnd", {duration:0.35, morphSVG:"#eyeTen", alpha:0}, "<10%")
    .from("#eyeFiveEnd", {duration:0.35, morphSVG:"#eyeFive", alpha:0}, "<10%")
    .from("#eyeSixEnd", {duration:0.35, morphSVG:"#eyeSix", alpha:0}, "<10%")
    .from("#eyeTwelveEnd", {duration:0.35, morphSVG:"#eyeTwelve", alpha:0}, "<10%")
    .from("#eyeThirteenEnd", {duration:0.35, morphSVG:"#eyeThirteen", alpha:0}, "<10%")
    .from("#eyeThreeEnd", {duration:0.35, morphSVG:"#eyeThree", alpha:0}, "<10%")
    .from("#eyeTwoEnd", {duration:0.35, morphSVG:"#eyeTwo", alpha:0}, "<10%")
    .from("#eyeFourEnd", {duration:0.35, morphSVG:"#eyeFour", alpha:0}, "<10%")
    .from("#eyeFourteenEnd", {duration:0.35, morphSVG:"#eyeFourteen", alpha:0}, "<10%")
    .from("#eyeSeventeenEnd", {duration:0.35, morphSVG:"#eyeSeventeen", alpha:0}, "<10%")
    .from("#eyeOneEnd", {duration:0.35, morphSVG:"#eyeOne", alpha:0}, "<10%")
    .from("#eyeFifteenEnd", {duration:0.35, morphSVG:"#eyeFifteen", alpha:0}, "<10%")
    .from("#eyeSixteenEnd", {duration:0.35, morphSVG:"#eyeSixteen", alpha:0}, "<10%")
  return tl;
}

function morphText(){
  var tl = gsap.timeline();
    tl.from("#eOneLeftF", {duration:0.25, morphSVG:"#eOneLeft", alpha:0})
    .from("#eOneTopF", {duration:0.25, morphSVG:"#eOneTop", alpha:0},"<25%")
    .from("#eOneMiddleF", {duration:0.25, morphSVG:"#eOneMiddle", alpha:0},"<25%")
    .from("#eOneBottomF", {duration:0.25, morphSVG:"#eOneBottom", alpha:0},"<25%")
    .from("#yLeftF", {duration:0.25, morphSVG:"#yLeft", alpha:0},"<0%")
    .from("#yTopF", {duration:0.25, morphSVG:"#yTop", alpha:0},"<25%")
    .from("#yBottomF", {duration:0.25, morphSVG:"#yBottom", alpha:0},"<25%")
    .from("#eTwoLeftF", {duration:0.25, morphSVG:"#eTwoLeft", alpha:0},"<0%")
    .from("#eTwoRightF", {duration:0.25, morphSVG:"#eTwoRight", alpha:0},"<25%")
    .from("#dashF", {duration:0.25, morphSVG:"#dash", alpha:0},"<0%")
    .from("#cOneLeftF", {duration:0.25, morphSVG:"#cOneLeft", alpha:0},"<25%")
    .from("#cOneTopF", {duration:0.25, morphSVG:"#cOneTop", alpha:0},"<10%")
    .from("#cOneBottomF", {duration:0.25, morphSVG:"#cOneBottom", alpha:0},"<10%")
    .from("#aBottomF", {duration:0.25, morphSVG:"#aBottom", alpha:0},"<0%")
    .from("#aTopF", {duration:0.25, morphSVG:"#aTop", alpha:0},"<25%")
    .from("#aRightF", {duration:0.25, morphSVG:"#aRight", alpha:0},"<25%")
    .from("#tF", {duration:0.25, morphSVG:"#t", alpha:0},"<0%")
    .from("#cTwoLeftF", {duration:0.25, morphSVG:"#cTwoLeft", alpha:0},"<0%")
    .from("#cTwoRightF", {duration:0.25, morphSVG:"#cTwoRight", alpha:0},"<25%")
    .from("#hLeftF", {duration:0.25, morphSVG:"#hLeft", alpha:0},"<0%")
    .from("#hRightF", {duration:0.25, morphSVG:"#hRight", alpha:0},"<0%")
    .from("#eThreeLeftF", {duration:0.25, morphSVG:"#eThreeLeft", alpha:0},"<0%")
    .from("#eThreeRightF", {duration:0.25, morphSVG:"#eThreeRight", alpha:0},"<25%")
    .from("#rLeftF", {duration:0.25, morphSVG:"#rLeft", alpha:0},"<0%")
    .from("#rRightF", {duration:0.25, morphSVG:"#rRight", alpha:0},"<25%")
  return tl;
}

var mainTL = gsap.timeline();
mainTL.add(eyeMotion());
mainTL.add(eyeClose(), "<50%");
mainTL.add(eyeOpen(), "<99%");
mainTL.add(eyeFinalMove());
mainTL.add(eyeClose(), "<0%");
mainTL.add(eyeOpen(), "<99%");
mainTL.add(morphEyeBack(), "<99%");
mainTL.add(morphText(), "<50%");

GSDevTools.create();