document.addEventListener('DOMContentLoaded', () => {
    const sliderItems = document.querySelectorAll('.slider__item')
    const sliderButtons = document.querySelectorAll('.slider__button')
    let currentImageIndex = 0
    let currentTranslate = 0

    sliderButtons.forEach((button) => {
        if (button.id == 'previousImage') {
            button.addEventListener('click', () => {
                currentImageIndex -= 1
                if (currentImageIndex > 0) {
                    currentImageIndex =  - (sliderItems.length - 1)
                }
                sliderItems.forEach((image) => {
                    image.style.transform = `translateX(${currentTranslate + (currentImageIndex * 100)}%)`
                    console.log(image.style.transform)
                })
                console.log(currentImageIndex)
            })}

        if (button.id == 'nextImage') {
            button.addEventListener('click', () => {
                currentImageIndex += 1
                if (currentImageIndex < -(sliderItems.length) || currentImageIndex == 0) {
                    currentImageIndex = 0
                }
                sliderItems.forEach((image) => {
                    image.style.transform = `translateX(${currentTranslate + (currentImageIndex * -100)}%)`
                    console.log(image.style.transform)
                })
                console.log(currentImageIndex)
            })}
    })
})