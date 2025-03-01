// script.js

// Create a starry sky effect
const starsContainer = document.querySelector('.stars');
const starCount = 100; // Number of stars to generate

// Function to create a single star
function createStar() {
    const star = document.createElement('div');
    star.className = 'star';
    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`;
    star.style.animationDuration = `${Math.random() * 2 + 1}s`; // Random duration between 1s and 3s
    return star;
}

// Generate stars using DocumentFragment for better performance
function generateStars() {
    const fragment = document.createDocumentFragment();
    for (let i = 0; i < starCount; i++) {
        fragment.appendChild(createStar());
    }
    starsContainer.appendChild(fragment);
}

// Call the function to generate stars
generateStars();

// Add confetti effect on click
let isConfettiActive = false; // Flag to prevent multiple confetti bursts

document.addEventListener('click', () => {
    if (isConfettiActive) return; // Exit if confetti is already active
    isConfettiActive = true;

    const confetti = document.createElement('div');
    confetti.className = 'confetti';
    confetti.style.left = `${Math.random() * 100}%`;
    document.body.appendChild(confetti);

    // Remove confetti after animation ends
    confetti.addEventListener('animationend', () => {
        confetti.remove();
        isConfettiActive = false; // Reset the flag
    });
});

// Optional: Add a debounced click handler for better performance
function debounce(func, delay) {
    let timeout;
    return function (...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), delay);
    };
}

document.addEventListener('click', debounce(() => {
    console.log('Debounced click event');
}, 300));