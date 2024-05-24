let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }
    document.querySelector('.slides').style.transform = `translateX(${-currentSlide * 100}%)`;
}

function moveSlide(n) {
    showSlide(currentSlide + n);
}

// Auto slide
setInterval(() => {
    moveSlide(1);
}, 5000); // Change image every 5 seconds

// Initialize the slider
showSlide(currentSlide);


