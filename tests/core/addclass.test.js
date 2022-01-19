// requires
const assert = require("chai").assert;
const { JSDOM } = require("jsdom");

// create dom
const options = {}

const { window } = new JSDOM(`

    <!DOCTYPE html>
    <div></div>

`, options);

global.window = window;
global.document = window.document;

const el = global.document.querySelector("div");

// test js file
import { default as addClass } from './../../js/core/addClass.js';

const classname = 'test-classname';
addClass(el, classname);

// asserts
describe("Core AddClass", () => {

    it("Adding single classname to single element", () => {
        assert.equal(el.className, classname);
    });

});