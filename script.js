document.addEventListener("DOMContentLoaded", () => {
    let photos = document.querySelectorAll(".photo");
    let index = 0;

    let audio = new Audio("assets/audio.mp3"); // Load your audio file
    function startCelebration() {
        launchConfetti();
        releaseBalloons();
    }

    // 🎉 Confetti Effect
    function launchConfetti() {
        if (typeof confetti !== "function") {
            console.error("Confetti.js is not loaded!");
            return;
        }

        let duration = 30 * 1000; // 30 seconds
        let end = Date.now() + duration;

        function frame() {
            confetti({
                particleCount: 5,
                spread: 80,
                origin: { x: Math.random(), y: Math.random() * 0.5 }
            });

            if (Date.now() < end) {
                requestAnimationFrame(frame);
            }
        }
        frame();
    }

    // 🎈 Balloon Effect (Improved)
    function releaseBalloons() {
        let container = document.getElementById("balloons-container");

        for (let i = 0; i < 20; i++) {
            let balloon = document.createElement("div");
            balloon.classList.add("balloon");

            let size = Math.random() * 20 + 30; // Random size between 60px - 100px
            balloon.style.width = `${size}px`;
            balloon.style.height = `${size * 1.3}px`; // Taller shape
            balloon.style.left = Math.random() * 90 + "vw";
            balloon.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 70%)`;
            balloon.style.animationDuration = 4 + Math.random() * 3 + "s";

            container.appendChild(balloon);

            setTimeout(() => balloon.remove(), 7000);
        }
    }

    // Make `startCelebration` available globally
    window.startCelebration = startCelebration;

    function revealPhoto() {
        if (index < photos.length) {
            if (index === 0) {
                playMusic(); // Start music when the first photo appears
                startCelebration();
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

