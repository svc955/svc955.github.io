// Site configuration - centralized URL management
window.siteConfig = {
    downloads: {
        apk: 'https://github.com/svc955/svc955.github.io/releases/download/fusion-1.0.1/atom-fusion-1.0.1.apk',
        googlePlay: 'https://play.google.com/store/apps/details?id=net.lab.flying'
    }
};

// Apply download URLs to elements with data-download attribute
function initDownloadLinks() {
    const config = window.siteConfig.downloads;
    document.querySelectorAll('[data-download]').forEach(el => {
        const key = el.getAttribute('data-download');
        if (config[key]) {
            el.setAttribute('href', config[key]);
        }
    });
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initDownloadLinks);
} else {
    initDownloadLinks();
}
