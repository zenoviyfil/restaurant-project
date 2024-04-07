"use strict"

const preloader = document.querySelector("[data-preload]")
window.addEventListener("load", () => {
    preloader.classList.add("loaded")
    document.body.classList.add("loaded")
})

const addEventOnElements = (elements, eventType, callback) => {
    for (let i = 0, len = elements.length; i < len; i++) {
        elements[i].addEventListener(eventType, callback)
    }
}

const navbar = document.querySelector("[data-navbar]")
const navTogglers = document.querySelectorAll("[data-nav-toggler]")
const overlay = document.querySelector("[data-overlay]")

const toggleNavbar = () => {
    navbar.classList.toggle("active")
    overlay.classList.toggle("active")
    document.body.classList.toggle("nav-active")
}

addEventOnElements(navTogglers, "click", toggleNavbar)