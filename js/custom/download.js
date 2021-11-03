/*globals document, ui, setTimeout, FileReader */

function fileSize(holder, code) {

    var fileSize = encodeURIComponent(code).match(/%[89ABab]/g);

    fileSize = code.length + (fileSize ? fileSize.length : 0);
    fileSize = fileSize / 1000;

    fileSize = fileSize.toFixed(2);
    ui.find('.generate-size', holder)[0].innerHTML = fileSize + ' kb';

}

function pullFiles(that) {

    var holder, list, result, pullResults, count, type, countFnc;

    holder = ui.closest(that, '.generate-holder')[0];
    list = ui.find('input:checked:not(.generate-toggle)', holder);
    result = ui.find('textarea', holder)[0];

    pullResults = '';
    count = 0;

    type = that.getAttribute('data-ui-type');

    countFnc = function () {

        ui.ajax({

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

                            pullResults = pullResults.replace(/ @import \(reference\) 'ui.less';/g, ''); // remove repeated main ui file
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
                            ui.loadingMask.toggle(that); // hide loading
                        }, ui.globals.ease);

                        pullResults = '';

                    }

                }

            }

        });

    };

    ui.loadingMask.toggle(that); // show loading
    if (list.length < 1) {

        setTimeout(function () {
            ui.loadingMask.toggle(that); // hide loading
        }, ui.globals.ease);

        return;

    }

    countFnc();

}

function readFiles(that) {

    var i, holder, forms, elems, list, btn, reader, ext, file, getTypes, count, toggler;

    holder = ui.closest(that, '.generate-holder')[0];
    elems = ui.find('input', holder);
    list = ui.find('input:not(.generate-toggle)', holder);

    reader = new FileReader(); // filereader API

    file = that.files[0];
    if (file === null) {

        that.value = '';
        return;

    }

    btn = that.parentElement;
    btn = ui.find('.ui-btn', btn)[0];

    ui.loadingMask.toggle(btn); // show loading

    ui.each(elems,

        function () {
            this.checked = false;
        });

    ext = file.name.match(/\.[0-9a-z]+$/i)[0];
    if (ext === '.' + that.name) {

        reader.readAsText(file, "UTF-8");
        reader.onload = function (ev) {

            getTypes = ev.target.result.match(/\/\*+[\w\d\s\,]+\*\//g);

            if (getTypes === null) {

                setTimeout(function () {
                    ui.loadingMask.toggle(btn); // hide loading
                }, ui.globals.ease);

                that.value = '';

                return;

            }

            for (i = 0; i < getTypes.length; i += 1) {

                getTypes[i] = getTypes[i].replace(/\/\* /g, '').replace(/ \*\//g, '');
                getTypes[i] = getTypes[i].toLowerCase();

            }

            setTimeout(function () {

                ui.each(list,

                    function () {

                        if (getTypes.toString().indexOf(this.name) > -1) {
                            this.checked = true;

                        } else {
                            this.checked = false;
                        }

                    });

                // check selected all properties
                forms = ui.find('.generate-forms', holder);
                ui.each(forms,

                    function () {

                        count = 0;

                        elems = ui.find('input:not(.generate-toggle)', this);
                        toggler = ui.find('.generate-toggle', this)[0];

                        ui.each(elems,

                            function () {
                                if (this.checked) { count += 1; }
                            });


                        if (elems.length > 0 && count === elems.length) {
                            toggler.checked = true;

                        } else {
                            toggler.checked = false;
                        }

                    });

                setTimeout(function () {
                    ui.loadingMask.toggle(btn); // hide loading
                }, ui.globals.ease);

                // empty variables
                getTypes = [];

            }, ui.globals.ease * 2);

        };

    } else {

        setTimeout(function () {
            ui.loadingMask.toggle(btn); // hide loading
        }, ui.globals.ease);

    }

    that.value = '';

}

function generator() {

    // Event Listeners
    ui.on('.generate-import',
        'change',

        function () {
            readFiles(this);
        });

    ui.on('.generate-btn',
        'click',

        function () {
            pullFiles(this);
        });

    ui.on('.generate-clear',
        'click',

        function () {

            var holder, form;

            holder = ui.closest(this, '.generate-holder')[0];
            form = ui.find('textarea', holder)[0];

            form.value = '';
            ui.find('.generate-size', holder)[0].innerHTML = '0 kb';

        });

    ui.on('.generate-min',
        'click',

        function () {

            var holder, result, code;

            holder = ui.closest(this, '.generate-holder')[0];
            result = ui.find('textarea', holder)[0];

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

    ui.on(document,
        'paste keydown blur',

        '.generate-holder textarea',

        function () {

            var that, holder, result, code;

            that = this;
            setTimeout(function () {

                holder = ui.closest(that, '.generate-holder')[0];
                result = ui.find('textarea', holder)[0];

                code = result.value;
                fileSize(holder, code);

            }, 0);

        });

    ui.on('.generate-copy',
        'click',

        function () {

            var holder, form;

            holder = ui.closest(this, '.generate-holder')[0];
            form = ui.find('textarea', holder)[0];

            if (form.value.length === 0) { return; }

            form.select();
            document.execCommand('copy');

        });

    ui.on('.generate-toggle',
        'change',

        function () {

            var forms, elems;

            forms = ui.closest(this, '.generate-forms')[0];
            elems = ui.find('input', forms);

            if (this.checked) {

                ui.each(elems,

                    function () {
                        this.checked = true;
                    });

            } else {

                ui.each(elems,

                    function () {
                        this.checked = false;
                    });

            }

        });

    ui.on('.generate-forms input:not(.generate-toggle)',
        'change',

        function () {

            var forms, elems, count, toggler;
            count = 0;

            forms = ui.closest(this, '.generate-forms')[0];
            elems = ui.find('input:not(.generate-toggle)', forms);

            toggler = ui.find('.generate-toggle', forms)[0];

            ui.each(elems,

                function () {
                    if (this.checked) { count += 1; }
                });

            if (count === elems.length) {
                toggler.checked = true;

            } else {
                toggler.checked = false;
            }

        });

}

ui.onload(generator);