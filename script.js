document.addEventListener("DOMContentLoaded", () => {
    let photos = document.querySelectorAll(".photo");
    let index = 0;

    let audio = new Audio("assets/audio.mp3"); // Load your audio file

    function revealPhoto() {
        if (index < photos.length) {
            if (index === 0) {
                playMusic(); // Start music when the first photo appears
            }
            photos[index].classList.add("reveal");
            index++;
            setTimeout(revealPhoto, 1000); // Delay between each reveal
        }
    }

    // Reveal images on click
    document.body.addEventListener("click", () => {
        if (index === 0) {
            revealPhoto();
        }
    });
    // Function to play music with user interaction
    function playMusic() {
        audio.play().catch(error => console.log("Autoplay blocked:", error));
    }
    // Reveal on hover effect
    photos.forEach(photo => {
        photo.addEventListener("mouseover", () => {
            photo.style.transform = "scale(1.1)";
        });

        photo.addEventListener("mouseout", () => {
            photo.style.transform = "scale(1)";
        });
    });
});


