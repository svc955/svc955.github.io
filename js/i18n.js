// Internationalization translations
// English translations are automatically extracted from HTML
// Only maintain Chinese translations here

const translations = {
    zh: {
        // Navigation
        nav: {
            title: "原子网络加速器"
        },

        // Hero Section
        hero: {
            title: "安全、快速、免费的VPN",
            subtitle: "基于最新开源协议的Android VPN应用",
            googlePlay: "Google Play 下载",
            apkDownload: "下载 APK"
        },

        // Features Section
        features: {
            title: "核心功能",
            free: {
                title: "完全免费",
                desc: "永久免费使用，无需订阅，无流量限制"
            },
            encryption: {
                title: "TLS加密",
                desc: "所有网络流量采用TLS协议加密，确保数据安全"
            },
            noLogs: {
                title: "零日志",
                desc: "后台不记录任何访问日志，保护您的隐私"
            },
            openSource: {
                title: "开源透明",
                desc: "基于GitHub最新开源代码和协议实现"
            },
            lightweight: {
                title: "轻量快速",
                desc: "最小权限设计，低资源占用，运行流畅"
            },
            stable: {
                title: "稳定连接",
                desc: "优化的网络协议，提供稳定可靠的连接体验"
            }
        },

        // Privacy Section
        privacy: {
            title: "为什么选择原子VPN",
            item1: {
                title: "🔒 保护您的隐私",
                desc: "不记录任何访问日志，不收集个人信息，不追踪用户行为。公共WiFi下也能安全上网，防止数据泄露。"
            },
            item2: {
                title: "🌍 畅游全球网络",
                desc: "提供数十个全球服务器节点，享受无界网络体验。"
            },
            item3: {
                title: "🔓 开源透明",
                desc: "基于GitHub最新开源代码构建，安全可靠，持续更新优化。"
            },
            item4: {
                title: "🚫 极简体验",
                desc: "无需注册账号，无需提供邮箱或手机号。下载即用，一键连接，操作简单快捷。"
            }
        },

        // Download Section
        download: {
            title: "立即下载",
            desc: "选择适合您的下载方式",
            googlePlay: "Google Play",
            googlePlayDesc: "从官方应用商店下载（推荐）",
            apk: "APK 文件",
            apkDesc: "直接下载安装包"
        },

        // Footer
        footer: {
            tagline: "安全、快速、免费的VPN",
            features: "功能特性",
            privacy: "隐私安全",
            download: "立即下载",
            copyright: "© 2025 原子网络加速器. 保留所有权利."
        }
    }
};

// Store original English text from HTML (extracted on first load)
let englishTranslations = {};

// Extract English translations from HTML elements
function extractEnglishFromHTML() {
    const en = {};

    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        const text = element.textContent.trim();

        if (text) {
            // Build nested object structure
            const keys = key.split('.');
            let current = en;

            for (let i = 0; i < keys.length - 1; i++) {
                if (!current[keys[i]]) {
                    current[keys[i]] = {};
                }
                current = current[keys[i]];
            }

            current[keys[keys.length - 1]] = text;
        }
    });

    return en;
}

// Detect browser language
function detectLanguage() {
    // Check localStorage first
    const savedLang = localStorage.getItem('preferred-language');
    if (savedLang && (savedLang === 'zh' || savedLang === 'en')) {
        return savedLang;
    }

    // Detect from browser
    const browserLang = navigator.language || navigator.userLanguage;

    // Check if browser language is Chinese
    if (browserLang.startsWith('zh')) {
        return 'zh';
    }

    // Default to English
    return 'en';
}

// Get nested translation value
function getTranslation(lang, key) {
    const keys = key.split('.');

    // Use Chinese translations or English (from HTML)
    let value = lang === 'zh' ? translations.zh : englishTranslations;

    for (const k of keys) {
        if (value && typeof value === 'object') {
            value = value[k];
        } else {
            return null;
        }
    }

    return value || null;
}

// Apply translations to page
function applyTranslations(lang) {
    // Extract English on first run
    if (Object.keys(englishTranslations).length === 0) {
        englishTranslations = extractEnglishFromHTML();
    }

    // Update html lang attribute
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';

    // Update page title and meta description
    if (lang === 'zh') {
        document.title = '原子网络加速器 - 安全快速的免费VPN';
        document.querySelector('meta[name="description"]').content =
            '原子网络加速器 - 安全、快速、免费的VPN应用。基于开源协议，TLS加密，零日志，保护您的隐私。';
    } else {
        document.title = 'Atom VPN - Secure Fast Free VPN';
        document.querySelector('meta[name="description"]').content =
            'Atom VPN - Secure, fast, and free VPN application. Open-source protocols, TLS encryption, zero logs, protecting your privacy.';
    }

    // Update all elements with data-i18n attribute
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        const translation = getTranslation(lang, key);

        if (translation) {
            element.textContent = translation;
        }
    });

    // Update language switch button
    const langSwitch = document.getElementById('langSwitch');
    if (langSwitch) {
        const langText = langSwitch.querySelector('.lang-text');
        if (langText) {
            langText.textContent = lang === 'zh' ? 'EN' : '中文';
        }
    }

    // Save preference
    localStorage.setItem('preferred-language', lang);
}

// Export for use in main.js
window.i18n = {
    detectLanguage,
    applyTranslations,
    translations
};
