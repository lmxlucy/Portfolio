// intro animation
const hero = document.querySelector('.hero');
const tl = new TimelineMax();

tl.fromTo(hero, 1, { height: "0%" }, { height: "80%", ease: Power2.easeInOut })
    .fromTo(hero, 1.2, { width: "100%" }, { width: "80%", ease: Power2.easeInOut })

// scroll animation
ScrollReveal({
    reset: false,
    distance: '30px',
    duration: 1000,
    delay: 10,
    easing: 'ease-in-out'
});
ScrollReveal().reveal('#scroll-arrow', { reset: false, delay: 1400, distance: '150px', origin: 'bottom' });
ScrollReveal().reveal('.top', { origin: 'top' });
ScrollReveal().reveal('.from_right', {
    delay: 100,
    duration: 1000,
    distance: '100%',
    origin: 'right'
});
ScrollReveal().reveal('.from_left', {
    delay: 100,
    duration: 1000,
    distance: '100%',
    origin: 'left'
});
ScrollReveal().reveal('.timeline_block_title', { distance: '50px', origin: 'left' });
ScrollReveal().reveal('.timeline_block_body', { distance: '100px', origin: 'right' });

// link to individual work page
$('#sparktalk').click(function() {
    window.open('user_research.html', '_self', false)
});

$('#funfactor').click(function() {
    window.open('ios_app.html', '_self', false)
});

// image fullscreen on click
// reference: https://stackoverflow.com/a/50430187
$('img[data-enlargeable]').addClass('img-enlargeable').click(function() {
    var src = $(this).attr('src');
    var modal;

    function removeModal() {
        modal.remove();
        $('body').off('keyup.modal-close');
    }
    modal = $('<div>').css({
        background: 'RGBA(0,0,0,.5) url(' + src + ') no-repeat center',
        backgroundSize: 'contain',
        width: '100%',
        height: '100%',
        position: 'fixed',
        zIndex: '10000',
        top: '0',
        left: '0',
        cursor: 'zoom-out'
    }).click(function() {
        removeModal();
    }).appendTo('body');
    //handling ESC
    $('body').on('keyup.modal-close', function(e) {
        if (e.key === 'Escape') {
            removeModal();
        }
    });
});