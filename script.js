// gsap.to("#one", {
//     width: "100%",
//     ease: Expo.easeInOut,
//     duration: 2
// })
gsap.to(".image-container", {
        ease: Expo.easeInOut,
        width: "100%",
        duration: 2,
        stagger: 2
})

gsap.to(".text h1", {
    ease: Expo.easeInOut,
    duration: 2,
    stagger: 2,
    top: 0
})

gsap.to(".text h1", {
    ease: Expo.easeInOut,
    duration: 2,
    stagger: 2,
    top: "-100%"
})