// import LocomotiveScroll from 'locomotive-scroll';


function navigateTo(page) {
  window.location.href = page;
}

const scroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });
  function firstPageAnim()
{
   var tl =gsap.timeline();
   
   
   tl.from("#nav",{

  y: '-10' ,
  opacity: 0 ,
  duration:1.5,
  ease: Expo.easeInOut
})
.to(".boundingelem",{
  y: '0' ,
  duration:2,
  ease: Expo.easeInOut ,
  delay: -1,
  stagger:.2
})
.from("#herofooter",{

  y: '-10' ,
  opacity: 0 ,
  duration:1.5,
  delay: -1,
  ease: Expo.easeInOut
})
}

var timeout;

// jab mouse move ho toh hum log skew kar paaye aur max skew aur min skew kar paye 
function circlechaptakaro(){
  // define default scale value 
  var xscale = 1;
  var yscale = 1;
  
  var xprev = 0;
  var yprev= 0;
  
  window.addEventListener("mousemove",function(dets)
   {         
   clearTimeout(timeout);
    xscale = gsap.utils.clamp(0.8, 1.2,dets.clientX - xprev);
    yscale =  gsap.utils.clamp(0.8, 1.2, dets.clientY - yprev);   
          xprev = dets.clientX; 
         yprev = dets.clientY;
          
             
         circleMousefollower(xscale,yscale);                                   
        timeout = setTimeout(function(){
          document.querySelector("#minicricle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(1,1)`;
         }, 100);
        

        });
}
circlechaptakaro();


  function circleMousefollower(xscale,yscale){
    window.addEventListener("mousemove",function(dets){
    // console.log(dets.clientX,dets.clientY);
    document.querySelector("#minicricle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(${xscale},${yscale})`;
    })
}

circleMousefollower();
firstPageAnim();


document.querySelectorAll(".elem").forEach(function(elem)
{
  var rotate = 0;
  var diffrot = 0;
  elem.addEventListener("mouseleave",function(dets){
  gsap.to(elem.querySelector("img"), {
    opacity:0,
    ease: Power3,
    duration:0.5,
  });
});
elem.addEventListener("mousemove",function(dets){
   var diff = dets.clientY - elem.getBoundingClientRect().top;
  diffrot = dets.clientX - rotate;
  rotate = dets.clientX;

  
  gsap.to(elem.querySelector("img"), {
    opacity:1,
    ease: Power3,
    top:diff,
    left:dets.clientX,
    rotate:gsap.utils.clamp(-20,20,diffrot*0.5),
   
    // duration: 0.5,
  });
});
});