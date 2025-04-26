// Greeting Logic
function updateGreeting() {
    const now = new Date();
    const hours = now.getHours();
    let greetingText = "";

    if (hours < 12) {
        greetingText = "Good Morning Tarun!";
    } else if (hours < 18) {
        greetingText = "Good Afternoon Tarun!";
    } else {
        greetingText = "Good Evening Tarun!";
    }

    document.getElementById("greeting").innerText = greetingText;
}

updateGreeting();

setInterval(updateGreeting, 60000);  // Update every minute

const nav = document.getElementById('navBar');
const leftArrow = document.getElementById('leftArrow');
const rightArrow = document.getElementById('rightArrow');
const progressFill = document.getElementById('sliderProgress');

function scrollNavBar(direction) {
    const scrollAmount = 100;
    nav.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });
    setTimeout(checkArrows, 300); // Wait for smooth scroll
}

function checkArrows() {
    const scrollLeft = nav.scrollLeft;
    const maxScroll = nav.scrollWidth - nav.clientWidth;

    // Show/hide arrows
    leftArrow.classList.toggle('hidden', scrollLeft <= 0);
    rightArrow.classList.toggle('hidden', scrollLeft >= maxScroll - 5);

    // Update progress
    const progress = (scrollLeft / maxScroll) * 100;
    progressFill.style.width = `${progress}%`;
}

// Initialize arrows and add event listeners
window.addEventListener('load', () => {
    setTimeout(() => {
        checkArrows();
        nav.addEventListener('scroll', checkArrows);
    }, 100);
});

window.addEventListener('resize', checkArrows);

// Add click event listeners for arrows
leftArrow.addEventListener('click', () => scrollNavBar(-1));
rightArrow.addEventListener('click', () => scrollNavBar(1));