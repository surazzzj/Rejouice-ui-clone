// function locoScroll() {
//     gsap.registerPlugin(ScrollTrigger);

//     // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

//     const locoScroll = new LocomotiveScroll({
//         el: document.querySelector("#main"),
//         smooth: true
//     });
//     // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
//     locoScroll.on("scroll", ScrollTrigger.update);

//     // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
//     ScrollTrigger.scrollerProxy("#main", {
//         scrollTop(value) {
//             return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
//         }, // we don't have to define a scrollLeft because we're only scrolling vertically.
//         getBoundingClientRect() {
//             return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
//         },
//         // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
//         pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
//     });

//     // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
//     ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

//     // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
//     ScrollTrigger.refresh();

// }


// locoScroll();



var page1Content = document.querySelector("#page1-content")
var cursor = document.querySelector("#cursor")
function cursorEffect() {
    page1Content.addEventListener("mousemove", function (dets) {
        gsap.to("#cursor", {
            x: dets.x,
            y: dets.y
        })
    })

    page1Content.addEventListener("mouseenter", function (dets) {
        gsap.to("#cursor", {
            scale: 1,
            opacity: 1
        })
    })

    page1Content.addEventListener("mouseleave", function (dets) {
        gsap.to("#cursor", {
            scale: 0,
            opacity: 0
        })
    })
}
cursorEffect();


// var h1 = document.querySelector("#elem h1")
// function page2Animation() {
//     gsap.from("#elem h1", {
//         y: 350,
//         stagger: 0.2,
//         duration: 2,
//         scrollTrigger: {
//             trigger: "#page2",
//             scroller: "#main",
//             start: "top 90%",
//             end: "top 46%",
//             scrub: 4
//         }
//     })
// }
// page2Animation();


var elem1 = document.querySelector("#elem1")
function page2lineAnimation() {
    gsap.to("#elem1", {
        width: "94vw",
        stagger: 0.2,
        duration: 2,
        scrollTrigger: {
            trigger: "#elem1",
            scroller: "#main",
            start: "top 170%",
            ease: "cubic-bezier(0.7, 0, 0.84, 0)",
            end: "bottom 40%",
            scrub: 2
        }
    })
}
page2lineAnimation();

// var elem2h5 = document.querySelector("#elem2 h5")
// function page2H5Animation() {
//     gsap.from("#elem2 h5", {
//         y: 31,
//         stagger: 0.2,
//         duration: 1,
//         scrollTrigger: {
//             trigger: "#elem2 h5",
//             scroller: "#main",
//             start: "top 100%",
//             end: "top 46%",
//             scrub: 2
//         }
//     })
// }
// page2H5Animation();


// var nextH1 = document.querySelector("#elemlast h1");
// function page4Animation() {
//     gsap.from("#elemlast h1", {
//         y: 120,
//         stagger: 0.2,
//         duration: 1,
//         scrollTrigger: {
//             trigger: "#elemlast h1",
//             scroller: "#main",
//             start: "top 47%",
//             end: "top 46%",
//             scrub: 2
//         }
//     })
// }
// page4Animation();


// var elemOne = document.querySelector("#elemone")
// function page4LineAnimation() {
//     gsap.from("#elemone", {
//         width: 0,
//         stagger: 0.2,
//         duration: 2,
//         scrollTrigger: {
//             trigger: "#elemone",
//             scroller: "#main",
//             start: "top 170%",
//             ease: "cubic-bezier(0.7, 0, 0.84, 0)",
//             end: "bottom 40%",
//             scrub: 2
//         }
//     })
// }
// page4LineAnimation();

// var elemTwoH5 = document.querySelector("#elemtwo h5")
// function page4H5Animation() {
//     gsap.from("#elemtwo h5", {
//         y: 28,
//         stagger: 0.2,
//         duration: 1,
//         scrollTrigger: {
//             trigger: "#elemtwo h5",
//             scroller: "#main",
//             start: "top 100%",
//             end: "top 46%",
//             scrub: 2
//         }
//     })
// }
// page4H5Animation();


function sliderAniamtion() {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: true,
        },
    });
}

sliderAniamtion();


var tl = gsap.timeline();
tl.from("#loader h3", {
    x: 40,
    opacity: 0,
    duration: 1,
    stagger: 0.1,
})

tl.to("#loader h3", {
    opacity: 0,
    stagger: 0.1,
    x: -10,
    duration: 1
})

tl.to("#loader", {
    opacity: 0
})

tl.from("#page1-content span", {
    y: 100,
    opacity: 0,
    stagger: 0.1,
    duration: .8,
    // delay:-.5
})

tl.to("#loader", {
    display: "none"
})

// var page3 = document.querySelector("#page3")
// var line1 = document.querySelector("#page3 #line1")
// var line2 = document.querySelector("#page3 #line2")
// var page3h2pri = document.querySelector("#page3 #pri")
// var page3h2sec = document.querySelector("#page3 #sec")


// var tl = gsap.timeline();


// page3.addEventListener("mouseenter", function () {
//     tl.from("#page3 #pri", {
//         y: 100,
//         duration: 1,
//         delay: 1,
//         scrollTrigger: {
//             trigger: "#page3 #pri",
//             scroller: "#page3",
//             start: "top 80%",
//             end: "top 46%",
//             scrub: 2
//         }
//     })

//     tl.from("#page3 #sec", {
//         y: 100,
//         duration: 2,
//         delay: 1,
//         stagger: .2,
//         yoyo: true,
//         scrollTrigger: {
//             trigger: "#page3 #sec",
//             scroller: "#page3",
//             start: "top 80%",
//             end: "top 46%",
//             scrub: 4
//         }
//     })
// })

// function page3_animation() {

//     gsap.from("#page3 #sec", {
//         y: 150,
//         duration: 1,
//         delay: 1,
//         scrollTrigger: {
//             trigger: "#page3 #pri",
//             scroller: "#main",
//             start: "top40%",
//             end: "top 46%",
//             scrub: 2
//         }
//     })

//     gsap.from("#page3 #pri", {
//         y: 150,
//         duration: 1,
//         delay: 1,
//         scrollTrigger: {
//             trigger: "#page3 #sec",
//             scroller: "#main",
//             start: "top40%",
//             end: "top 46%",
//             scrub: 2
//         }
//     })

// }

// page3_animation();




// var page7 = document.querySelector("#page7")
// var line3 = document.querySelector("#page7 h4")
// var line4 = document.querySelector("#page7 h2")
// var page7H4 = document.querySelector("#page7 h4")
// var page7H2 = document.querySelector("#page7 h2")


// var tl = gsap.timeline();


// page7.addEventListener("mouseenter", function () {
//     tl.from("#page7 h4", {
//         y: 80,
//         duration: 1,
//         delay: 1,
//         scrollTrigger: {
//             trigger: "#page7 h4",
//             scroller: "#page7",
//             start: "top 80%",
//             end: "top 46%",
//             scrub: 2
//         }
//     })

//     tl.from("#page7 h2", {
//         y: 40,
//         duration: 1,
//         delay: -.5,
//         stagger: .2,
//         yoyo: true,
//         scrollTrigger: {
//             trigger: "#page7 h2",
//             scroller: "#page7",
//             start: "top 80%",
//             end: "top 46%",
//             scrub: 2
//         }
//     })
// })





// function page7_animation() {

// gsap.from("#page7 h4", {
//     y: 300,
//     duration: 1,
//     delay: 1,
//     scrollTrigger: {
//         trigger: "#page7 h4",
//         scroller: "#main",
//         start: "top40%",
//         end: "top 46%",
//         scrub: 2
//     }
// })

// gsap.from("#page7 h2", {
//     y: 300,
//     duration: 1,
//     delay: 1,
//     scrollTrigger: {
//         trigger: "#page7 h2",
//         scroller: "#main",
//         start: "top40%",
//         end: "top 46%",
//         scrub: 2
//     }
// })

// }

// page7_animation();




// var footer = document.querySelector("footer")
// var sec3span = document.querySelector("#section3 span")

// var tl = gsap.timeline();

// gsap.from("#section3 span", {
//     y: -400,
//     duration: 1.5,
//     stagger: .1,
//     delay: 2,
//     scrollTrigger: {
//         trigger: "#section3 span",
//         scroller: "#main",
//         start: "top 30%",
//         end: "top 60%",
//         scrub: 4
//     }
// })

// gsap.from("footer", {
//     y: -200,
//     duration: 1.5,
//     scrollTrigger: {
//         trigger: "footer",
//         scroller: "#main",
//         start: "top 30%",
//         end: "top 60%",
//         scrub: 4
//     }
// })