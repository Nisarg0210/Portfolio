// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.nav-toggle');
    const mainNav = document.querySelector('.main-nav');

    if (navToggle && mainNav) {
        navToggle.addEventListener('click', function() {
            mainNav.classList.toggle('open');
        });

        // Close nav when clicking outside
        document.addEventListener('click', function(e) {
            if (!mainNav.contains(e.target) && !navToggle.contains(e.target)) {
                mainNav.classList.remove('open');
            }
        });
    }

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href.length > 1) {
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

    // Set active nav link based on current page
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.main-nav a').forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage || (currentPage === '' && linkPage === 'index.html')) {
            link.classList.add('active');
        }
    });

    // Language greeting animation
    const languageToggle = document.querySelector('.language-toggle');
    if (languageToggle) {
        const greetings = [
            { text: 'Hello', lang: 'English' },
            { text: 'Bonjour', lang: 'French' },
            { text: 'Hola', lang: 'Spanish' },
            { text: 'Guten Tag', lang: 'German' },
            { text: 'Ciao', lang: 'Italian' },
            { text: 'Namaste', lang: 'Hindi' },
            { text: 'Konnichiwa', lang: 'Japanese' },
            { text: 'Ni Hao', lang: 'Chinese' },
            { text: 'Salam', lang: 'Arabic' },
            { text: 'Olá', lang: 'Portuguese' }
        ];

        let currentIndex = 0;

        function updateGreeting() {
            const greeting = greetings[currentIndex];
            languageToggle.innerHTML = `<span class="greeting-word">${greeting.text}</span><span class="greeting-lang">(${greeting.lang})</span>`;
            languageToggle.style.opacity = '0';
            languageToggle.style.transform = 'translateY(-10px)';
            
            setTimeout(() => {
                languageToggle.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
                languageToggle.style.opacity = '1';
                languageToggle.style.transform = 'translateY(0)';
            }, 150);
            
            currentIndex = (currentIndex + 1) % greetings.length;
        }

        // Update every 3 seconds
        setInterval(updateGreeting, 3000);
    }
});