/* ===================================
   Preview Mode - Mobile Menu Toggle
   =================================== */

document.addEventListener('DOMContentLoaded', function() {
    const burgerBtn = document.getElementById('vt-burger-btn');
    const mobileMenu = document.getElementById('vt-mobile-menu');

    if (burgerBtn) {
        burgerBtn.addEventListener('click', function() {
            mobileMenu.classList.toggle('vt-menu-active');
            // Toggle hamburger to X icon
            const icon = burgerBtn.querySelector('i');
            if (mobileMenu.classList.contains('vt-menu-active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });

        // Close menu when clicking on links
        const menuLinks = mobileMenu.querySelectorAll('a');
        menuLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileMenu.classList.remove('vt-menu-active');
                const icon = burgerBtn.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            });
        });
    }
});
