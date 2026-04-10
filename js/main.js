// Main JavaScript for Atom VPN Website

// Current language state
let currentLang = 'zh';

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    // Initialize notice bar
    initNoticeBar();

    // Initialize language
    initLanguage();

    // Initialize navbar scroll effect
    initNavbarScroll();

    // Initialize smooth scrolling
    initSmoothScroll();

    // Initialize animations
    initAnimations();
});

// Initialize notice bar
function initNoticeBar() {
    const noticeBar = document.getElementById('noticeBar');
    const noticeMessage = document.getElementById('noticeMessage');
    const navbar = document.getElementById('navbar');

    if (!noticeBar || !noticeMessage || !window.noticeConfig) return;

    const config = window.noticeConfig;

    // Check if notice should be shown
    if (!config.enabled) return;

    // Get current language from html tag
    const lang = document.documentElement.lang === 'zh-CN' ? 'zh' : 'en';
    const message = config.message[lang] || config.message.en;

    // Hide if no message
    if (!message || message.trim() === '') return;

    // Set message content
    noticeMessage.textContent = message;

    // Add type class
    noticeBar.classList.add(`notice-${config.type || 'info'}`);

    // Show notice bar
    noticeBar.style.display = 'block';

    // Adjust navbar position
    if (navbar) {
        navbar.classList.add('with-notice');
    }
}

// Initialize navbar scroll effect
function initNavbarScroll() {
    const navbar = document.getElementById('navbar');

    if (!navbar) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

// Initialize smooth scrolling for anchor links
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');

            // Skip if href is just "#"
            if (href === '#') return;

            e.preventDefault();

            const target = document.querySelector(href);
            if (target) {
                const offsetTop = target.offsetTop - 80; // Account for fixed navbar

                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Initialize scroll animations
function initAnimations() {
    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                // Optionally unobserve after animation
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe feature cards
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach(card => {
        observer.observe(card);
    });

    // Observe privacy items
    const privacyItems = document.querySelectorAll('.privacy-item');
    privacyItems.forEach(item => {
        observer.observe(item);
    });

    // Observe download cards
    const downloadCards = document.querySelectorAll('.download-card');
    downloadCards.forEach(card => {
        observer.observe(card);
    });
}



// Handle external links security
document.addEventListener('DOMContentLoaded', () => {
    const externalLinks = document.querySelectorAll('a[target="_blank"]');
    externalLinks.forEach(link => {
        // Ensure noopener and noreferrer for security
        const rel = link.getAttribute('rel') || '';
        if (!rel.includes('noopener')) {
            link.setAttribute('rel', rel + ' noopener noreferrer');
        }
    });
});

// Log page analytics (optional - remove if not needed)
console.log('%c🚀 Atom VPN Website', 'color: #1a73e8; font-size: 20px; font-weight: bold;');
console.log('%cSecure, Fast, Free VPN for Android', 'color: #8b5cf6; font-size: 14px;');
console.log('%cTip: Press Alt + L to quickly switch language', 'color: #6b7280; font-size: 12px;');
