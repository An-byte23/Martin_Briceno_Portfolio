function show(){
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);

    // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
      }, // we don't have to define a scrollLeft because we're only scrolling vertically.
      getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
      },
      // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
      pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });

    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();
}
show()

function circle_(){
  var circle = document.getElementById('circle')
  document.addEventListener('mousemove',function(dets){
    circle.style.left = dets.pageX + 'px'
    circle.style.top = dets.pageY + 'px'
  })
  document.querySelector("#nav1>button").addEventListener("mouseenter",function(){
    // circle.style.height = "30px"
    // circle.style.width = "30px"
    circle.style.transform = "scale(5)"
  })
  document.querySelector("#nav1>button").addEventListener("mouseleave",function(){
    // circle.style.height = "15px"
    // circle.style.width = "15px"
    circle.style.transform = "scale(1)"

  })
  
}
circle_()

var x  = document.querySelector("#loader>h2 span")
var l = document.querySelector("#loader")

setTimeout(function(){
  l.style.transform = "translateY(-100%)"
},3000)
var grow = 0
setInterval(function(){
  if(grow<=100){
    x.innerHTML = `${grow++}`
  }
},30)

gsap.to("#one>h1",{
    x:"-100vw",
    duration:4,
    repeat:-1,
    ease: Power0.easeNone
})
gsap.to("#two>h1",{
    // delay:2,
    x:"-100vw",
    duration:3,
    repeat:-1,
    ease: Power0.easeNone
})
var elem = document.querySelectorAll(".elem")
elem.forEach(function(element){
    element.addEventListener("mousemove",function(dets){
        element.children[1].style.opacity = 1
        element.children[1].style.transform = `translate(-50%,-50%) translate(${dets.screenX*0.8}px,${dets.screenY*0.3}px)`

    })
    element.addEventListener("mouseleave",function(dets){
        element.children[1].style.opacity = 0
    })
})

gsap.from("#nav1",{
  // onStatrt : function(){
  //   $("#nav1").textillate({
  //     in : {effect : 'fade'}
  //   })
  // },
  y:20,
  opacity:0,
  duration : 1,
  delay:3.5
})
gsap.from("#nav2",{
  // onStatrt : function(){
  //   $("#nav1").textillate({
  //     in : {effect : 'fade'}
  //   })
  // },
  y:-30,
  opacity:0,
  duration : 1,
  delay:3.5

})
gsap.from("#side>h1",{
  y:-30,
  opacity:0,
  duration : 1,
  delay : 4.5
})
gsap.from("#side>p",{
  y:-30,
  opacity:0,
  duration : 1,
  delay : 4.3
})

gsap.from("#page2 h1",{
  scrollTrigger:{
    trigger:"#page2 h1",
    scroller:"#main",
    // markers:true,
    start:"top 70%",
    end:"top 20%"
  },
  y:40,
  opacity:0,
  duration : 1,
  // delay : 0.8
})
gsap.from("#page2 h6",{
  scrollTrigger:{
    trigger:"#page2 h6",
    scroller:"#main",
    // markers:true,
    start:"top 70%",
    end:"top 20%"
  },
  y:40,
  opacity:0,
  duration : 1,
  // delay : 0.8
})
gsap.from("#page41>p",{
  scrollTrigger:{
    trigger : "#page41>p",
    scroller : "#main",
    // markers : true,
    start: "top 90%"
  },
  opacity:0,
  y:20,
  duration : 0.5
})

gsap.from("#page6 h3",{
  scrollTrigger:{
    trigger:"#page6 h3",
    scroller:"#main",
    // markers:true,
    start:"top 70%",
    // end:"top 20%"
  },
  opacity:0,
  y:30,
  duration:1
})
gsap.from("#page6 h4",{
  scrollTrigger:{
    trigger:"#page6 h4",
    scroller:"#main",
    // markers:true,
    start:"top 80%",
    // end:"top 20%"
  },
  opacity:0,
  x:-20,
  duration:1
})
gsap.from("#page6 p",{
  scrollTrigger:{
    trigger:"#page6 p",
    scroller:"#main",
    // markers:true,
    start:"top 80%",
    // end:"top 20%"
  },
  opacity:0,
  x:-20,
  duration:1
})
gsap.from(".box h4",{
  scrollTrigger:{
    trigger:".box h4",
    scroller:"#main",
    // markers:true,
    start:"top 90%",
    // end:"top 20%"
  },
  opacity:0,
  y:20,
  duration:1
})
gsap.from(".box p",{
  scrollTrigger:{
    trigger:".box p",
    scroller:"#main",
    // markers:true,
    start:"top 95%",
    // end:"top 20%"
  },
  opacity:0,
  y:20,
  duration:1
})
gsap.from("#page2 button",{
  scrollTrigger:{
    trigger:"#page2 button",
    scroller:"#main",
    // markers:true,
    start:"top 95%",
    // end:"top 20%"
  },
  opacity:0,
  y:20,
  duration:1
})