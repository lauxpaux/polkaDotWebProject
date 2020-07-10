const carousels = document.querySelectorAll("header h1, header h2, body")


const fadeInTimeLine = gsap.timeline()

fadeInTimeLine
    .set(carousels, {opacity: 0})
    .to(carousels, {opacity: 1, delay:1, stagger: 1, direction: 3})

    carousels.forEach(carousel => {


        const spanTag = carousel.querySelector("span")
        const spanWidth = spanTag.clientWidth
        
        for(let i = 0; i < 20; i++) {
            carousel.appendChild(spanTag.cloneNode(true))
        }

        const movementTimeLine = gsap.timeline({
            repeat: -1  
        })

        movementTimeLine
            .set(carousel, { x: 0 })
            .to(carousel, { x: spanWidth * -1, duration: 5, ease: "linear" } )
    })