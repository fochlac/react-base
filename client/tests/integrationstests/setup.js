import { S } from 'T_UI/base_selectors.js';
require('../../../server/config.js');

require("babel-polyfill");
require("./custom_wait_conditions.js");

const fs = require('fs'),
    path = require('path'),
    webdriver = require('selenium-webdriver'),
    chromedriver = require('chromedriver'),
    until = webdriver.until,
    chromeCapabilities = webdriver.Capabilities.chrome();

chromeCapabilities.set('chromeOptions', {args: ['--headless', '--no-sandbox', '--allow-insecure-localhost']});

const driver = new webdriver.Builder()
    .forBrowser('chrome')
    .withCapabilities(chromeCapabilities)
    .build();

driver
    .manage()
    .window()
    .setSize(1280, 1080);

driver
    .manage()
    .timeouts(10000)
    .pageLoadTimeout(10000);

    driver.refresh = function() {
        driver.executeScript('window.location.reload()');
        driver.wait(until.elementLocated(S.userframe));

        return driver.wait(until.elementIsVisible(driver.findElement(S.userframe)));
    }


before(async function() {
    this.timeout(10000);

    if (!this.driver) {
        this.driver = driver;
        this.path = global.root + '/client/tests/integrationtests';
    }

    return this.driver.get(`https://${global.host}:${global.port}/`);
});

after(async function() {
    await this.driver.quit();
});