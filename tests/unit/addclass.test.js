const assert = require("chai").assert;
const puppeteer = require('puppeteer');
const path = require('path');

import 'regenerator-runtime/runtime';

describe("Add Classname Test", () => {

    let browser, page, classname;

    before(async function () {

        // create dom
        browser = await puppeteer.launch();
        page = await browser.newPage();

        // load visual test file
        await page.goto(`file:${path.join(__dirname, '../visual/addclass.html')}`);

        // adding single classname to single element
        classname = await page.evaluate(() => document.querySelector('#single').className);

    });

    after(async function () {

        await page.close();
        await browser.close();

    });

    it("Adding single classname to single element", () => {
        assert.equal(classname, 'single-classname');
    });

});