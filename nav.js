const primaryNav = document.querySelector('.header-home-nav ul');
const navtoggle = document.querySelector('.header-dropdown');

navtoggle.addEventListener('click', (e) => {
    const visibility = primaryNav.getAttribute('data-visible');

    if (visibility === "false") {
        primaryNav.setAttribute('data-visible', true);
        navtoggle.setAttribute('aria-expanded', true);
    }

    else if (visibility === "true") {
        primaryNav.setAttribute('data-visible', false);
        navtoggle.setAttribute('aria-expanded', false);
    }
});