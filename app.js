const allcontainer = gsap.utils.toArray(".container-item")
const venueImageWrap = document.querySelector(".container-img-wrap")
const venueImage = document.querySelector(".container-img")

function initcontainer() {
	allcontainer.forEach((link) => {
		link.addEventListener("mouseenter", venueHover)
		link.addEventListener("mouseleave", venueHover)
		link.addEventListener("mousemove", moveVenueImage)
	})
}

function moveVenueImage(e) {
    let ypos = e.clientY
    let xpos = e.clientX
	const tl = gsap.timeline()
	tl.to(venueImageWrap, {
		x: xpos,
		y: ypos,
	})
}

function venueHover(e) {
	if (e.type === "mouseenter") {
		const targetImage = e.target.dataset.img

		const tl = gsap.timeline()
		tl.set(venueImage, {
			backgroundImage: `url(${targetImage})`,
		}).to(venueImageWrap, {
					duration: 0.5,
					autoAlpha: 1,
		})
	} else if (e.type === "mouseleave") {
		const tl = gsap.timeline()
		tl.to(venueImageWrap, {
			duration: 0.5,
			autoAlpha: 0,
	    })
	}
}

function init() {
	initcontainer()
}

window.addEventListener("load", function () {
	init()
})

tl = new TimelineMax()

tl.from(".projects-digits > div", 1, {
	opacity: 0,
	y: 60,
	ease: Expo.easeOut,
	delay: 0.6,
},
0.2
)
