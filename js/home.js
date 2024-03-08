document.addEventListener('DOMContentLoaded', function () {
    let currentImage = 1;
    const totalImages = document.querySelectorAll('.image').length;
    const sliderContainer = document.querySelector('.slider-container');

    function showImage(index) {
        const offset = (index - 1) * 100;
        sliderContainer.style.transform = `translateX(-${offset}%)`;
    }

    function nextImage() {
        currentImage = (currentImage % totalImages) + 1;
        showImage(currentImage);
    }

    // Auto-slide images every 3 seconds
    setInterval(nextImage, 3000);
});