/**
 * Notice Bar Configuration
 * 通知条配置文件
 *
 * 使用说明 / Usage:
 * 1. enabled: true/false - 开启或关闭通知条 / Enable or disable notice bar
 * 2. type: 'info' | 'warning' | 'success' | 'error' - 通知类型 / Notice type
 * 3. message: 设置中英文消息内容 / Set message content in Chinese and English
 * 4. 如果 enabled 为 false 或 message 为空，通知条将自动隐藏
 *    If enabled is false or message is empty, the notice bar will be hidden
 */

const noticeConfig = {
    // 是否启用通知条 / Enable notice bar
    enabled: true,

    // 通知类型 / Notice type
    // 可选值 / Options: 'info', 'warning', 'success', 'error'
    type: 'info',

    // 消息内容 / Message content
    message: {
        zh: '🎉 欢迎使用原子网络加速器！新版本已发布，立即下载体验更快速的连接。',
        en: '🎉 Welcome to Atom VPN! New version released, download now for faster connections.'
    }
};

/**
 * 示例配置 / Example Configurations:
 *
 * 1. 信息通知 / Info Notice:
 * {
 *     enabled: true,
 *     type: 'info',
 *     message: {
 *         zh: '📢 系统维护通知：2024年1月1日 02:00-04:00 将进行系统维护。',
 *         en: '📢 Maintenance Notice: System maintenance on Jan 1, 2024, 02:00-04:00 AM.'
 *     }
 * }
 *
 * 2. 警告通知 / Warning Notice:
 * {
 *     enabled: true,
 *     type: 'warning',
 *     message: {
 *         zh: '⚠️ 重要：请及时更新到最新版本以获得最佳性能。',
 *         en: '⚠️ Important: Please update to the latest version for best performance.'
 *     }
 * }
 *
 * 3. 成功通知 / Success Notice:
 * {
 *     enabled: true,
 *     type: 'success',
 *     message: {
 *         zh: '✅ 新功能上线：现已支持更多服务器节点！',
 *         en: '✅ New Feature: More server nodes now available!'
 *     }
 * }
 *
 * 4. 错误通知 / Error Notice:
 * {
 *     enabled: true,
 *     type: 'error',
 *     message: {
 *         zh: '❌ 部分服务器正在维护中，请稍后再试。',
 *         en: '❌ Some servers are under maintenance, please try again later.'
 *     }
 * }
 *
 * 5. 关闭通知 / Disable Notice:
 * {
 *     enabled: false,
 *     type: 'info',
 *     message: {
 *         zh: '',
 *         en: ''
 *     }
 * }
 */

// Export for use in main.js
window.noticeConfig = noticeConfig;
