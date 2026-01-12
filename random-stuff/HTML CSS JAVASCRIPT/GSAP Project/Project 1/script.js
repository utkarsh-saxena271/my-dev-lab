var tl = gsap.timeline();
tl.from("#nav h3",{
    y : -50,
    duration: 0.6 ,
    opacity: 0,
    stagger: 0.4

})
tl.from("#main h1",{
    x: -500,
    opacity: 0,
    duration: 0.7,
    stagger: 0.5
})
tl.from("#main #img1",{
    x: -500,
    rotate: -90,
    opacity: 0,
    duration: 0.7,
})
tl.from("#main #img2",{
    x: 500,
    rotate: 90,
    opacity: 0,
    duration: 0.7,
})
tl.from("#main #img3",{
    x: -500,
    rotate: -90,
    opacity: 0,
    duration: 0.7,
})
tl.from("#main footer",{
    y : 50,
    duration: 0.3 ,
    opacity: 0
})