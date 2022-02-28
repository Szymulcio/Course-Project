var backdrop = document.querySelector('.backdrop');
var modal = document.querySelector('.modal');
var selectPlanButtons = document.querySelectorAll('.plan button');
var modalNoButton = document.querySelector('.modal__action--negative');
var toggleButton = document.querySelector('.toggle-button');
var mobileNav = document.querySelector('.mobile-nav');
var ctaButton = document.querySelector(".main-nav__item--cta");

for (var i = 0; i < selectPlanButtons.length; i++) {
    selectPlanButtons[i].addEventListener('click', function() {
        modal.classList.add('open');
        backdrop.style.display = 'block';
        setTimeout(function() {
            backdrop.classList.add('open');
        }, 10)
    })
}

backdrop.addEventListener('click', function() {
    mobileNav.classList.remove('open');
    closeModal();
});

if (modalNoButton) {
    modalNoButton.addEventListener('click', closeModal);
}

function closeModal() {
    if (modalNoButton) {
        modal.classList.remove('open');
    }
    backdrop.classList.remove('open');
    setTimeout(function() {
        backdrop.style.display = 'none';
    }, 200)
}

toggleButton.addEventListener('click', function() {
    mobileNav.classList.add('open');
    backdrop.classList.display = 'block';
    setTimeout(function() {
        backdrop.classList.add('open');
    }, 10)
});

ctaButton.addEventListener('animationstart', function(event) {
    console.log('Animation started', event);
})

ctaButton.addEventListener('animationend', function(event) {
    console.log('Animation ended', event);
})

ctaButton.addEventListener('animationiterate', function(event) {
    console.log('Animation iteration', event);
})
