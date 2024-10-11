let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("slides");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex-1].style.display = "block";  
    setTimeout(showSlides, 3000); // Change image every 3 seconds
}

// Function for previous slide
function prevSlide() {
    slideIndex = (slideIndex === 1) ? slides.length : slideIndex - 1;
    updateSlides();
}

// Function for next slide
function nextSlide() {
    slideIndex = (slideIndex === slides.length) ? 1 : slideIndex + 1;
    updateSlides();
}

// Function to update slides manually
function updateSlides() {
    let slides = document.getElementsByClassName("slides");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slides[slideIndex - 1].style.display = "block";
}
