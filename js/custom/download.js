/*globals document, selector, events, setTimeout, ajax, FileReader, loadingMask */

function fileSize(holder, code) {

    var fileSize = encodeURIComponent(code).match(/%[89ABab]/g);

    fileSize = code.length + (fileSize ? fileSize.length : 0);
    fileSize = fileSize / 1000;

    fileSize = fileSize.toFixed(2);
    selector('.generate-size', holder)[0].innerHTML = fileSize + ' kb';

}

function pullFiles(that) {

    var holder, list, result, pullResults, count, type, countFnc;

    holder = events.closest(that, '.generate-holder')[0];
    list = selector('input:checked:not(.generate-toggle)', holder);
    result = selector('textarea', holder)[0];

    pullResults = '';
    count = 0;

    type = that.getAttribute('data-type');

    countFnc = function () {

        ajax({

            url : list[count].getAttribute('value') + '.' + that.name,
            callback: function (status, response) {

                if (status === 'success') {

                    pullResults += response;

                    if (count < list.length - 1) {

                        count += 1;
                        pullResults += '\n';
                        countFnc();

                    } else {

                        if (that.name === 'less') {

                            pullResults = pullResults.replace(/ @import '_settings.less';/g, ''); // remove repeated import settings file
                            pullResults = pullResults.replace(/\/\/ out: false/g, ''); // remove less settings

                        }

                        if (type === 'icons') { // icons
                            pullResults = '<svg style="display: none;">\n' + pullResults + '</svg>'
                        }

                        result.value = pullResults;
                        result.scrollTop = 0; // IE, EDGE: scrollTo() not supported for textarea element

                        fileSize(holder, pullResults);

                        // empty variables
                        setTimeout(function () {
                            loadingMask.toggle(that); // hide loading
                        }, 150);

                        pullResults = '';

                    }

                }

            }

        });

    };

    loadingMask.toggle(that); // show loading
    if (list.length < 1) {

        setTimeout(function () {
            loadingMask.toggle(that); // hide loading
        }, 150);

        return;

    }

    if (that.name === 'less') { // firstly, import settings file

        ajax({

            url : '../css/_settings.less',
            callback: function (status, response) {

                if (status === 'success') {

                    pullResults += response;
                    pullResults += '\n';

                    countFnc();

                }

            }

        });

    } else { countFnc(); }

}

function readFiles(that) {

    var i, holder, forms, elems, list, btn, reader, ext, file, getTypes, count, toggler;

    holder = events.closest(that, '.generate-holder')[0];
    elems = selector('input', holder);
    list = selector('input:not(.generate-toggle)', holder);

    reader = new FileReader(); // filereader API

    file = that.files[0];
    if (file === null) {

        that.value = '';
        return;

    }

    btn = that.parentElement;
    btn = selector('.btn', btn)[0];

    loadingMask.toggle(btn); // show loading

    events.each(elems, function () {
        this.checked = false;
    });

    ext = file.name.match(/\.[0-9a-z]+$/i)[0];
    if (ext === '.' + that.name) {

        reader.readAsText(file, "UTF-8");
        reader.onload = function (ev) {

            getTypes = ev.target.result.match(/\/\*+[\w\d\s\,]+\*\//g);

            if (getTypes === null) {

                setTimeout(function () {
                    loadingMask.toggle(btn); // hide loading
                }, 150);

                that.value = '';

                return;

            }

            for (i = 0; i < getTypes.length; i += 1) {

                getTypes[i] = getTypes[i].replace(/\/\* /g, '').replace(/ \*\//g, '');
                getTypes[i] = getTypes[i].toLowerCase();

            }

            setTimeout(function () {

                events.each(list, function () {

                    if (getTypes.toString().indexOf(this.name) > -1) {
                        this.checked = true;

                    } else {
                        this.checked = false;
                    }

                });

                // check selected all properties
                forms = selector('.generate-forms', holder);
                events.each(forms, function () {

                    count = 0;

                    elems = selector('input:not(.generate-toggle)', this);
                    toggler = selector('.generate-toggle', this)[0];

                    events.each(elems, function () {
                        if (this.checked) { count += 1; }
                    });


                    if (elems.length > 0 && count === elems.length) {
                        toggler.checked = true;

                    } else {
                        toggler.checked = false;
                    }

                });

                setTimeout(function () {
                    loadingMask.toggle(btn); // hide loading
                }, 150);

                // empty variables
                getTypes = [];

            }, 300);

        };

    } else {

        setTimeout(function () {
            loadingMask.toggle(btn); // hide loading
        }, 150);

    }

    that.value = '';

}

function generator() {

    // Events
    events.on('.generate-import', 'change', function () {
        readFiles(this);
    });

    events.on('.generate-btn', 'click', function () {
        pullFiles(this);
    });

    events.on('.generate-clear', 'click', function () {

        var holder, form;

        holder = events.closest(this, '.generate-holder')[0];
        form = selector('textarea', holder)[0];

        form.value = '';
        selector('.generate-size', holder)[0].innerHTML = '0 kb';

    });

    events.on('.generate-min', 'click', function () {

        var holder, result, code;

        holder = events.closest(this, '.generate-holder')[0];
        result = selector('textarea', holder)[0];

        code = result.value;
        if (code.length === 0) { return; }

        // comments
        code = code.replace(/\/\*[\s\S]*?\*\/|([^\\:]|^)\/\/.*$/gm, ''); // remove // /*
        code = code.replace(/(<!--.*?-->)|(<!--[\w\W\n\s]+?-->)/gm, ''); // remove <!-- -->

        // line breaks and multiple spaces
        if (this.name === 'css') {

            code = code.replace(/ {/g, '{').replace(/: /g, ':');
            code = code.replace(/ >/g, '>').replace(/> /g, '>');
            code = code.replace(/, /g, ',');

        }

        if (this.name === 'js') {
            code = code.replace(/\n/g, ' ').replace(/\s+\s/g, ' ');

        } else {
            code = code.replace(/\n/g, '').replace(/\s+\s/g, '').replace(/^\s|\s+$/g, '');
        }

        code = code.replace(/^\s|\s+$/g, '');

        result.value = code;
        result.scrollTop = 0; // IE, EDGE: scrollTo() not supported for textarea element

        fileSize(holder, code);

    });

    events.on(document, 'paste keydown blur', '.generate-holder textarea', function () {

        var that, holder, result, code;

        that = this;
        setTimeout(function () {

            holder = events.closest(that, '.generate-holder')[0];
            result = selector('textarea', holder)[0];

            code = result.value;
            fileSize(holder, code);

        }, 0);

    });

    events.on('.generate-copy', 'click', function () {

        var holder, form;

        holder = events.closest(this, '.generate-holder')[0];
        form = selector('textarea', holder)[0];

        if (form.value.length === 0) { return; }

        form.select();
        document.execCommand('copy');

    });

    events.on('.generate-toggle', 'change', function () {

        var forms, elems;

        forms = events.closest(this, '.generate-forms')[0];
        elems = selector('input', forms);

        if (this.checked) {

            events.each(elems, function () {
                this.checked = true;
            });

        } else {

            events.each(elems, function () {
                this.checked = false;
            });

        }

    });

    events.on('.generate-forms input:not(.generate-toggle)', 'change', function () {

        var forms, elems, count, toggler;
        count = 0;

        forms = events.closest(this, '.generate-forms')[0];
        elems = selector('input:not(.generate-toggle)', forms);

        toggler = selector('.generate-toggle', forms)[0];

        events.each(elems, function () {
            if (this.checked) { count += 1; }
        });

        if (count === elems.length) {
            toggler.checked = true;

        } else {
            toggler.checked = false;
        }

    });

}

events.onload(generator);