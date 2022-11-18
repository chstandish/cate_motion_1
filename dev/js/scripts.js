import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { GSDevTools } from "gsap/GSDevTools";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";

gsap.registerPlugin(MotionPathPlugin, DrawSVGPlugin, GSDevTools, MorphSVGPlugin);

function wAnimation(){
  var tl = gsap.timeline();
  tl.from("#middle", {duration:3, morphSVG:"#middleStart"});
  tl.fromTo("#left",{fill:"rgba(0,0,0,0", drawSVG: "0% 0%"}, {duration: 2, drawSVG:"0% 100%"}, "<50%");
  tl.fromTo("#right",{fill:"rgba(0,0,0,0", drawSVG: "54% 54%"}, {duration: 2, drawSVG:"54% -54%"}, "<0%");
  return tl;
}

var mainTL = gsap.timeline();
mainTL.add(wAnimation());


GSDevTools.create();