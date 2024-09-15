// Preload images to avoid delay
const images = ["image1.jpg", "image2.jpg", "image3.jpg", "image4.jpg", "image5.jpg"];
images.forEach(image => {
    const img = new Image();
    img.src = image;
});

// Function to change the full image on thumbnail click
function myFunction(smallImg) {
    var fullImg = document.getElementById("bigImg");

    // Adding a fade-in effect when the image changes
    fullImg.style.opacity = 0;
    setTimeout(function () {
        fullImg.src = smallImg.src;
        fullImg.style.opacity = 1;
    }, 200); // Delay for smooth transition
}

// Function to zoom the image
function zoomImage() {
    var fullImg = document.getElementById("bigImg");
    if (fullImg.style.transform === "scale(1.5)") {
        fullImg.style.transform = "scale(1)";
    } else {
        fullImg.style.transform = "scale(1.5)";
    }
}
