// requires
const assert = require("chai").assert;
const { JSDOM } = require("jsdom");

// create dom
const dom = new JSDOM(`

    <!DOCTYPE html>
    <div></div>

`);

// test js file
import * as ui from '../../js/ui.js';

const classname = 'test-classname';
const el = dom.window.document.querySelector("div");

ui.addClass(el, classname);

// asserts
describe("Core AddClass", () => {

    it("Adding single classname to single element", () => {
        assert.equal(el.className, classname);
    });

});