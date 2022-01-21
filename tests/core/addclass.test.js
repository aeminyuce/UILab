// requires
const assert = require("chai").assert;
import * as ui from '../../js/ui.js';

// test
const classname = 'test-classname';
const el = document.querySelector("div");

ui.addClass(el, classname);

// asserts
describe("Core AddClass", () => {

    it("Adding single classname to single element", () => {
        assert.equal(el.className, classname);
    });

});