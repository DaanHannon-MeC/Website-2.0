// ZEGET'IS - Interactive Enhancements
// Smooth scrolling, parallax effects, and micro-interactions

document.addEventListener('DOMContentLoaded', () => {
    // Smooth scroll for navigation links
    const navLinks = document.querySelectorAll('.nav-link, .cta-button');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // Parallax effect for hero section
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero-content');
        if (hero) {
            hero.style.transform = `translateY(${scrolled * 0.5}px)`;
            hero.style.opacity = 1 - (scrolled / 800);
        }
    });

    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe work items and sections
    const workItems = document.querySelectorAll('.work-item');
    const sections = document.querySelectorAll('.about, .contact');
    
    workItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(50px)';
        item.style.transition = `all 0.8s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.1}s`;
        observer.observe(item);
    });

    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(50px)';
        section.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
        observer.observe(section);
    });

    // Dynamic navigation background on scroll
    const nav = document.querySelector('.nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            nav.style.background = 'rgba(10, 10, 10, 0.98)';
        } else {
            nav.style.background = 'linear-gradient(180deg, rgba(10,10,10,0.95) 0%, rgba(10,10,10,0) 100%)';
        }
    });

    // Cursor effect for work items (optional enhancement)
    workItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
});
