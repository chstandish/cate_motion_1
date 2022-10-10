import { gsap } from "gsap";


var mainTL = gsap.timeline();
mainTL.add(buttonsEnter());

let meetBtn = document.querySelector("#meet-btn");
let listenBtn = document.querySelector("#listen-btn");
let showsBtn = document.querySelector("#shows-btn");

gsap.from("#line-1",{duration:1, x:-300, color: 'var(--red)'});
gsap.from("#line-2",{duration:1, x:500, color: 'var(--white)'});

function buttonsEnter(){
    var tl = gsap.timeline();
    tl.from("#meet-btn",{duration:0.5, alpha:0, y:50, delay:1})
    .from("#listen-btn",{duration:0.5, alpha:0, y:50})
    .from("#shows-btn",{duration:0.5, alpha:0, y:50});
    return tl;
}


// var buttonArray = [meetBtn, listenBtn,showsBtn];

// var meetButtonAnimation = gsap.timeline({paused:true});


// for( var i = 0; i < buttonArray.length; i++) {
//     console.log(i);

//     meetButtonAnimation.to(buttonArray[i], {duration:0.25, scale:1.25, backgroundColor:"var(--white)"});

//     buttonArray[i].addEventListener("mouseover",function(){
//         console.log("hello");
//         meetButtonAnimation.play();
//     });
// }





var meetButtonAnimation = gsap.timeline({paused:true});
meetButtonAnimation.to("#meet-btn", {duration:0.25, scale:1.25, backgroundColor:"var(--white)"});
meetBtn.addEventListener("mouseover",function(){
    meetButtonAnimation.play();
});
meetBtn.addEventListener("mouseout",function(){
    meetButtonAnimation.reverse();
});

var listenButtonAnimation = gsap.timeline({paused:true});
listenButtonAnimation.to("#listen-btn", {duration:0.25, scale:1.25, backgroundColor:"var(--white)"});
listenBtn.addEventListener("mouseover",function(){
    listenButtonAnimation.play();
});
listenBtn.addEventListener("mouseout",function(){
    listenButtonAnimation.reverse();
});

var showsButtonAnimation = gsap.timeline({paused:true});
showsButtonAnimation.to("#shows-btn", {duration:0.25, scale:1.25, backgroundColor:"var(--white)"});
showsBtn.addEventListener("mouseover",function(){
    showsButtonAnimation.play();
});
showsBtn.addEventListener("mouseout",function(){
    showsButtonAnimation.reverse();
});