import { increaseCounter } from './util.js';


var counter30 = document.getElementById("30");
var counter40 = document.getElementById("40");
var counter8 = document.getElementById("8");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            setTimeout(function () {
                increaseCounter(counter30, 32, "Sales per year");
                increaseCounter(counter40, 42, "Car brands");
                increaseCounter(counter8, 10, "Shop branches");
            }, 500)
        }
    })
})

const fadeUpObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            setTimeout(function () {
                entry.target.classList.remove('hide');
                entry.target.classList.add('show')
            }, 500)
        } else {
            entry.target.classList.add('hide');
            entry.target.classList.remove('show')
        }
    })
})

const elements = document.querySelectorAll('.orange');
elements.forEach((el) => observer.observe(el));

const fadeElements = document.querySelectorAll('.fade');
fadeElements.forEach((el) => fadeUpObserver.observe(el));
