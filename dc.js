const puppeteer = require('puppeteer');

const BASE_URL = 'https://discord.com';

const discord = {
    browser: null,
    page: null,

    initialize: async() => {
        discord.browser = await puppeteer.launch({ headless: false });
        discord.page = await discord.browser.newPage();

        await discord.page.goto(BASE_URL);
    },
    login: async() => {
        await discord.page.waitForSelector(".nav_button-wrap");
        await discord.page.click(".nav_button-wrap a");

        await discord.page.waitForSelector("#uid_7");
        await discord.page.type("#uid_7", "beta22715@gmail.com", { delay: 200 });
        await discord.page.waitForSelector("#uid_9");
        await discord.page.type("#uid_9", "#Pass123#", { delay: 100 });

        await discord.page.click("button[type=submit]");
    },

    moveTo: async(serverID, channelID) => {
        await discord.page.goto('https://discord.com/channels/' + serverID + '/' + channelID + '/');
    }
}

module.exports = discord;