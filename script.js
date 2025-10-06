const headerLogo = document.querySelector('.header-logo');
const logoImg = document.querySelector('.logo-box img');
const logoName = document.querySelector('.logo-name');

window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;

    // Rotate logo based on scroll position
    const rotation = scrollPosition * 0.5;
    logoImg.style.transform = `rotate(${rotation}deg)`;

    // Collapse name and shrink logo on scroll
    if (scrollPosition > 50) {
        logoName.classList.add('collapsing');
        headerLogo.classList.add('scrolled');
    } else {
        logoName.classList.remove('collapsing');
        headerLogo.classList.remove('scrolled');
    }
});
