import { increaseCounter } from './util.js';

gsap.registerPlugin(ScrollTrigger);

var counter30 = document.getElementById("30");
var counter40 = document.getElementById("40");
var counter8 = document.getElementById("8");

gsap.fromTo('#fade', {
    opacity: 0, 
    translateY: "150px"
}, {
    opacity: 1,
    translateY: "0px",
    delay: .25,
    duration: 1,
    scrollTrigger: {
        trigger: "#fade",
    }
})


const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if(entry.isIntersecting){
            increaseCounter(counter30, 32, "Sales per year");
            increaseCounter(counter40, 42, "Car brands");
            increaseCounter(counter8, 10, "Shop branches");
        }
    })
})

const elements = document.querySelectorAll('.orange');
elements.forEach((el) => observer.observe(el));