/*
 UI Code JS
 Requires UI Core JS
*/

ui.code = {

    // targets
    target: 'code-holder',

    // main classnames
    nameForms: 'code-forms',
    nameToggler: 'code-toggle',
    nameSize: 'code-size',

    nameGenerateBtn: 'code-btn',
    nameImport: 'code-import',
    nameCopy: 'code-copy',
    nameClear: 'code-clear',
    nameMin: 'code-min',

    // outer classnames
    nameBtn: 'ui-btn',

    // data attributes
    dataType: 'data-ui-type',

    // values
    readFileCharset: 'UTF-8',

    // messages
    msgFileSize: 'kb',
    msgNofileSize: '0.00',

    msgReadSuccess: 'File read successfully!',
    msgReadFail: 'File not supported!'

};

(function () {

    function fileSize(code) {

        var fileSize = encodeURI(code).split(/%..|./).length - 1;

        fileSize = fileSize / 1000;
        fileSize = fileSize.toFixed(2);

        return fileSize;

    }

    function pullFiles(that) {

        var holder, list, result, pullResults, count, type, countFnc;

        holder = ui.closest(that, '.' + ui.code.target)[0];

        list = ui.find('input:checked:not(.' + ui.code.nameToggler + ')', holder);
        result = ui.find('textarea', holder)[0];

        pullResults = '';
        count = 0;

        type = that.getAttribute(ui.code.dataType);

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

                                pullResults = pullResults.replace(/ @import \(reference\) '..\/core.less';/g, ''); // remove repeated core file
                                pullResults = pullResults.replace(/\/\/ out: false+(\n|\r)+\/\*/g, '/*'); // remove less settings

                                pullResults = pullResults.replace(/(\n\n|\r\r)/g, ''); // remove duplicate line breaks
                                pullResults = pullResults.replace(/(\n|\r)+\/\*/g, '\n\n/*'); // add line break before titles/

                            } else if (type === 'icons') {
                                pullResults = '<svg style="display: none;">\n' + pullResults + '</svg>'
                            }

                            result.value = pullResults;

                            result.scrollTop = 0; // IE, EDGE: scrollTo() not supported for textarea element
                            result.rows = 24;

                            ui.find('.' + ui.code.nameSize, holder)[0].innerHTML = fileSize(pullResults) + ' ' + ui.code.msgFileSize;

                            setTimeout(function () {
                                ui.loadingMask.toggle(that); // hide loading

                            }, ui.globals.ease);

                            // empty variables
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

        holder = ui.closest(that, '.' + ui.code.target)[0];

        elems = ui.find('input', holder);
        list = ui.find('input:not(.' + ui.code.nameToggler + ')', holder);

        reader = new FileReader(); // filereader API

        file = that.files[0];
        if (file === null) {

            that.value = '';
            return;

        }

        btn = that.parentElement;
        btn = ui.find('.' + ui.code.nameBtn, btn)[0];

        ui.loadingMask.toggle(btn); // show loading

        ui.each(elems,

            function () {
                this.checked = false;
            });

        ext = file.name.match(/\.[0-9a-z]+$/i)[0];
        if (ext === '.' + that.name) {

            reader.readAsText(file, ui.code.readFileCharset);
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

                window.scrollTo(0, 0);

                ui.alerts.message({
                    msg: ui.code.msgReadSuccess,
                    theme: 'success'
                });

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
                    forms = ui.find('.' + ui.code.nameForms, holder);
                    ui.each(forms,

                        function () {

                            count = 0;

                            elems = ui.find('input:not(.' + ui.code.nameToggler + ')', this);
                            toggler = ui.find('.' + ui.code.nameToggler, this)[0];

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

                }, ui.globals.ease * 5); // wait for scrollto

            };

        } else {

            setTimeout(function () {

                ui.loadingMask.toggle(btn); // hide loading

                ui.alerts.message({
                    msg: ui.code.msgReadFail,
                    theme: 'danger'
                });

            }, ui.globals.ease);

        }

        that.value = '';

    }

    function generator() {

        // Event Listeners
        ui.on('.' + ui.code.nameImport,
            'change',

            function () {
                readFiles(this);
            });

        ui.on('.' + ui.code.nameGenerateBtn,
            'click',

            function () {
                pullFiles(this);
            });

        ui.on('.' + ui.code.nameClear,
            'click',

            function () {

                var holder, result;

                holder = ui.closest(this, '.' + ui.code.target)[0];
                result = ui.find('textarea', holder)[0];

                result.value = '';
                result.rows = 6;

                ui.find('.' + ui.code.nameSize, holder)[0].innerHTML = ui.code.msgNofileSize + ' ' + ui.code.msgFileSize;

            });

        ui.on('.' + ui.code.nameMin,
            'click',

            function () {

                var holder, result, code;

                holder = ui.closest(this, '.' + ui.code.target)[0];
                result = ui.find('textarea', holder)[0];

                code = result.value;
                if (code.length === 0) { return; }

                // comments
                code = code.replace(/\/\*[\s\S]*?\*\/|([^\\:]|^)\/\/.*$/gm, ''); // remove // /*
                code = code.replace(/(<!--.*?-->)|(<!--[\w\W\n\s]+?-->)/gm, ''); // remove <!-- -->

                // line breaks and multiple spaces
                if (this.name === 'js') {
                    code = code.replace(/\n/g, ' ').replace(/\s+\s/g, ' ');

                } else {
                    code = code.replace(/\n/g, '').replace(/\s+\s/g, '').replace(/^\s|\s+$/g, '');
                }

                code = code.replace(/^\s|\s+$/g, '');

                result.value = code;
                result.scrollTop = 0; // IE, EDGE: scrollTo() not supported for textarea element
                result.rows = 12;

                ui.find('.' + ui.code.nameSize, holder)[0].innerHTML = fileSize(code) + ' ' + ui.code.msgFileSize;

            });

        ui.on(document,
            'paste keydown',

            '.' + ui.code.target + ' textarea',

            function () {

                var that, holder, result;

                that = this;
                setTimeout(function () {

                    holder = ui.closest(that, '.' + ui.code.target)[0];
                    result = ui.find('textarea', holder)[0];

                    ui.find('.' + ui.code.nameSize, holder)[0].innerHTML = fileSize(result.value) + ' ' + ui.code.msgFileSize;

                }, 0);

            });

        ui.on('.' + ui.code.nameCopy,
            'click',

            function () {

                var holder, form;

                holder = ui.closest(this, '.' + ui.code.target)[0];
                form = ui.find('textarea', holder)[0];

                if (form.value.length === 0) { return; }

                form.select();
                document.execCommand('copy');

            });

        ui.on('.' + ui.code.nameToggler,
            'change',

            function () {

                var forms, elems;

                forms = ui.closest(this, '.' + ui.code.nameForms)[0];
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

        ui.on('.' + ui.code.nameForms + ' input:not(.' + ui.code.nameToggler + ')',
            'change',

            function () {

                var forms, elems, count, toggler;
                count = 0;

                forms = ui.closest(this, '.' + ui.code.nameForms)[0];
                elems = ui.find('input:not(.' + ui.code.nameToggler + ')', forms);

                toggler = ui.find('.' + ui.code.nameToggler, forms)[0];

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

    // Loaders
    ui.onload(generator);

}());