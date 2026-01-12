/* ===================================
   Blogger Theme - Main JavaScript
   Created: 2026
   =================================== */

(function() {
    'use strict';
    
    // Wait for DOM to be ready
    const ready = (callback) => {
        if (document.readyState !== 'loading') {
            callback();
        } else {
            document.addEventListener('DOMContentLoaded', callback);
        }
    };
    
    /* ===================================
       Mobile Navigation Toggle
       =================================== */
    const initMobileNav = () => {
        const navToggler = document.querySelector('.navbar-toggler');
        const navCollapse = document.querySelector('.navbar-collapse');
        
        if (!navToggler || !navCollapse) return;
        
        navToggler.addEventListener('click', function() {
            navCollapse.classList.toggle('show');
            this.classList.toggle('active');
        });
        
        // Close nav when clicking outside
        document.addEventListener('click', function(e) {
            if (!navToggler.contains(e.target) && !navCollapse.contains(e.target)) {
                navCollapse.classList.remove('show');
                navToggler.classList.remove('active');
            }
        });
    };
    
    /* ===================================
       Search Form Toggle
       =================================== */
    const initSearchForm = () => {
        const searchIcon = document.querySelector('.header-search-form');
        const searchWrapper = document.querySelector('.search-form-wrapper');
        const searchClose = document.querySelector('.search-close');
        
        if (!searchIcon || !searchWrapper) return;
        
        searchIcon.addEventListener('click', function(e) {
            e.preventDefault();
            searchWrapper.classList.add('active');
            document.body.style.overflow = 'hidden';
            
            // Focus on search input
            const searchInput = searchWrapper.querySelector('.search-input');
            if (searchInput) {
                setTimeout(() => searchInput.focus(), 300);
            }
        });
        
        if (searchClose) {
            searchClose.addEventListener('click', function() {
                searchWrapper.classList.remove('active');
                document.body.style.overflow = '';
            });
        }
        
        // Close on ESC key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && searchWrapper.classList.contains('active')) {
                searchWrapper.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    };
    
    /* ===================================
       Smooth Scroll for Anchor Links
       =================================== */
    const initSmoothScroll = () => {
        const links = document.querySelectorAll('a[href^="#"]');
        
        links.forEach(link => {
            link.addEventListener('click', function(e) {
                const href = this.getAttribute('href');
                
                // Skip if href is just "#"
                if (href === '#') {
                    e.preventDefault();
                    return;
                }
                
                const target = document.querySelector(href);
                
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    };
    
    /* ===================================
       Lazy Load Images
       =================================== */
    const initLazyLoad = () => {
        const images = document.querySelectorAll('img[data-src]');
        
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                        observer.unobserve(img);
                    }
                });
            });
            
            images.forEach(img => imageObserver.observe(img));
        } else {
            // Fallback for browsers without IntersectionObserver
            images.forEach(img => {
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
            });
        }
    };
    
    /* ===================================
       Sticky Header on Scroll
       =================================== */
    const initStickyHeader = () => {
        const header = document.querySelector('.header-with-topbar');
        
        if (!header) return;
        
        let lastScroll = 0;
        
        window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset;
            
            if (currentScroll <= 0) {
                header.classList.remove('scroll-up');
                return;
            }
            
            if (currentScroll > lastScroll && !header.classList.contains('scroll-down')) {
                // Scrolling down
                header.classList.remove('scroll-up');
                header.classList.add('scroll-down');
            } else if (currentScroll < lastScroll && header.classList.contains('scroll-down')) {
                // Scrolling up
                header.classList.remove('scroll-down');
                header.classList.add('scroll-up');
            }
            
            lastScroll = currentScroll;
        });
    };
    
    /* ===================================
       Handle External Links
       =================================== */
    const initExternalLinks = () => {
        const links = document.querySelectorAll('a[href^="http"]');
        
        links.forEach(link => {
            const href = link.getAttribute('href');
            const currentDomain = window.location.hostname;
            
            // Check if link is external
            if (!href.includes(currentDomain)) {
                link.setAttribute('target', '_blank');
                link.setAttribute('rel', 'noopener noreferrer');
            }
        });
    };
    
    /* ===================================
       Back to Top Button
       =================================== */
    const initBackToTop = () => {
        // Create button if it doesn't exist
        let backToTopBtn = document.getElementById('back-to-top');
        
        if (!backToTopBtn) {
            backToTopBtn = document.createElement('button');
            backToTopBtn.id = 'back-to-top';
            backToTopBtn.innerHTML = '↑';
            backToTopBtn.setAttribute('aria-label', 'Back to top');
            document.body.appendChild(backToTopBtn);
        }
        
        // Show/hide button based on scroll position
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                backToTopBtn.classList.add('show');
            } else {
                backToTopBtn.classList.remove('show');
            }
        });
        
        // Scroll to top on click
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    };
    
    /* ===================================
       Form Validation (Newsletter)
       =================================== */
    const initFormValidation = () => {
        const forms = document.querySelectorAll('.newsletter-email-form');
        
        forms.forEach(form => {
            form.addEventListener('submit', function(e) {
                const emailInput = this.querySelector('input[type="email"]');
                
                if (!emailInput) return;
                
                const email = emailInput.value.trim();
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                
                if (!emailRegex.test(email)) {
                    e.preventDefault();
                    alert('Please enter a valid email address.');
                    emailInput.focus();
                }
            });
        });
    };
    
    /* ===================================
       Initialize All Functions
       =================================== */
    ready(() => {
        initMobileNav();
        initSearchForm();
        initSmoothScroll();
        initLazyLoad();
        initStickyHeader();
        initExternalLinks();
        initBackToTop();
        initFormValidation();
        
        console.log('Blogger Theme initialized successfully!');
    });
    
})();
