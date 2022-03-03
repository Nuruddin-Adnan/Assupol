"use strict"

let tl = gsap.timeline({ defaults: { duration: 1, autoAlpha: 0 } })

function init() {
	tl.from(".logo", { x: -380, y: 300, scale: 0.1, duration: 1.3 })
	tl.from(".foreword-slogan", { x: 120, y: -30, scale: 0.2 }, "<")
	tl.from(".foreword-text > h2", { x: "-100%" }, "=")
	tl.from(".foreword-credits > div", { x: "-100%" }, "-=0.8")
	tl.from(".navigation", { x: "-100%", y: 0 }, "-=0.9")
	tl.from(".navi-slogan img", { x: 280, y: 80, scale: 2 }, "=")
	tl.from(".navi-content", { x: "-100%" }, "-=0.8")
	tl.from(".plan-footer__contact", { x: -350, y: -120 }, "=")
	tl.from(".plan-shape", { x: "-200%", y: -1200 }, "-= 0.5")
	tl.from(".plan-expand__shape .shape", { x: -450, y: "-20%" }, "-=.9")
	// tl.from(".plan-expand__block .heading", { y: "-100%" }, "=")
	tl.from(".contact-shape", { x: -240, y: -360, duration: 1.3 }, "=")
}

// window.addEventListener("load", function (e) {})

document.addEventListener("DOMContentLoaded", function () {
	// Initalization animation
	init()
	if (document.querySelector(".plan-expand__block")) {
		AOS.init({
			once: true,
			offset: "-450",
			delay: 1,
			mirror: false,
			duration: 1200,
			anchorPlacement: "top-center",
			easing: "ease-in-out-back",
		})
	}

	if (document.querySelector("#year")) {
		var year = (document.querySelector("#year").textContent =
			new Date().getFullYear())
	}

	if (document.querySelector("#titleSelect")) {
		var titleSelect = new BVSelect({
			selector: "#titleSelect",
			width: "100%",
			searchbox: false,
			offset: false,
			placeholder: "Title*",
			search_autofocus: false,
			breakpoint: 0,
		})
	}
	if (document.querySelector("#province")) {
		var provinceSelect = new BVSelect({
			selector: "#province",
			width: "100%",
			searchbox: false,
			offset: false,
			placeholder: "Province*",
			search_autofocus: false,
			breakpoint: 0,
		})
	}
})
