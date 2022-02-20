$(document).ready(function() {
    $('.parallax').parallax();
});

// scroll animation
ScrollReveal({
    reset: false,
    distance: '100px',
    duration: 1000,
    delay: 100,
    easing: 'ease-in-out'
});
ScrollReveal().reveal('.from_bottom', { origin: 'bottom' });
ScrollReveal().reveal('.from_right', { origin: 'right' });
ScrollReveal().reveal('.from_left', { origin: 'left' });