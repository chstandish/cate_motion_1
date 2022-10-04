import { gsap } from "gsap";

gsap.set("form",{scaleX: 0, transformOrigin:"left center"});

gsap.from("#line-1",{
    duration:2,
    x:-700,
    color: 'var(--red)'
    });

gsap.from("#line-2",{
    duration:2,
    x:700,
    color: 'var(--white)'
})

let meetBtn = document.querySelector("#meet-btn");
meetBtn.addEventListener("mouseover",function(){
    gsap.to("#meet-btn", {
        duration:0.25, 
        scale:1.25, 
        backgroundColor:"var(--white)"});
})

meetBtn.addEventListener("mouseout",function(){
    gsap.to("#meet-btn",{
        duration:0.25,
        scale:1,
        backgroundColor:"var(--red)"}); 
})

let listenBtn = document.querySelector("#listen-btn");
listenBtn.addEventListener("mouseover",function(){
    gsap.to("#listen-btn", {
        duration:0.25, 
        scale:1.25, 
        backgroundColor:"var(--white)"});
})

listenBtn.addEventListener("mouseout",function(){
    gsap.to("#listen-btn",{
        duration:0.25,
        scale:1,
        backgroundColor:"var(--red)"}); 
})

let showsBtn = document.querySelector("#shows-btn");
showsBtn.addEventListener("mouseover",function(){
    gsap.to("#shows-btn", {
        duration:0.25, 
        scale:1.25, 
        backgroundColor:"var(--white)"});
})

showsBtn.addEventListener("mouseout",function(){
    gsap.to("#shows-btn",{
        duration:0.25,
        scale:1,
        backgroundColor:"var(--red)"}); 
})