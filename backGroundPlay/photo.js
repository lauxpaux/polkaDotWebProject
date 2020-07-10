const slides = document.querySelector("section div.images ")

slides.forEach(slide => {
    let current = 0;
    let z = 100000000;

    const photos = slide.querySelectorAll("img")

    photos.forEach(photo => {
        z = z - 1
        photo.style.zIndex = z
    })

    slides.addEventListener("click", function() {
        z = z - 1;

        const currentImage = photos[current]
    })



})