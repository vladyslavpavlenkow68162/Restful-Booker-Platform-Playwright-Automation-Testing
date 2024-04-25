const { PlaywrightTestConfig } = require('@playwright/test');

const config = {
    retries: 1,
    timeout: 60000,
    use: {
        headless: true,
        viewport: {width: 1280, height: 720},
        video: "off",
        screenshot: "off"
    },

    projects: [
        {
            name: "Chrome",
            use: {browserName: 'chromium'}
        },
        {
            name: "Firefox",
            use: {browserName: 'firefox'}
        }
    ]

}

module.exports = config;
