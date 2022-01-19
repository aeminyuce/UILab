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
import * as ui from './../../dist/js/ui.js';

const classname = 'test-classname';
ui.addClass(el, classname);

// asserts
describe("Core AddClass", () => {

    it("Adding single classname to single element", () => {
        assert.equal(el.className, classname);
    });

});