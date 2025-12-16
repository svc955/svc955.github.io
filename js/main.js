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

    // Initialize language switch button
    initLanguageSwitch();

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

    // Get current language
    const lang = window.i18n ? window.i18n.detectLanguage() : 'en';
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

// Update notice bar message when language changes
function updateNoticeBarLanguage(lang) {
    const noticeMessage = document.getElementById('noticeMessage');
    const noticeBar = document.getElementById('noticeBar');

    if (!noticeMessage || !noticeBar || !window.noticeConfig) return;

    const config = window.noticeConfig;

    // Only update if notice is visible
    if (noticeBar.style.display !== 'block') return;

    const message = config.message[lang] || config.message.zh;
    if (message && message.trim() !== '') {
        noticeMessage.textContent = message;
    }
}

// Initialize language based on detection
function initLanguage() {
    currentLang = window.i18n.detectLanguage();
    window.i18n.applyTranslations(currentLang);
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

// Initialize language switch functionality
function initLanguageSwitch() {
    const langSwitch = document.getElementById('langSwitch');

    if (!langSwitch) return;

    langSwitch.addEventListener('click', () => {
        // Toggle language
        currentLang = currentLang === 'zh' ? 'en' : 'zh';

        // Apply translations
        window.i18n.applyTranslations(currentLang);

        // Update notice bar language
        updateNoticeBarLanguage(currentLang);

        // Add animation effect
        langSwitch.style.transform = 'scale(0.95)';
        setTimeout(() => {
            langSwitch.style.transform = 'scale(1)';
        }, 150);
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

// Add keyboard navigation support
document.addEventListener('keydown', (e) => {
    // Alt + L to toggle language
    if (e.altKey && e.key === 'l') {
        e.preventDefault();
        const langSwitch = document.getElementById('langSwitch');
        if (langSwitch) {
            langSwitch.click();
        }
    }
});

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
