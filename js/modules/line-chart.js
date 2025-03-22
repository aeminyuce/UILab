/* line chart */

import { ui } from './../core/globals.js';
export default () => ui;

ui.lineChart = {

    // targets
    target: 'ui-line-chart-holder',

    // main classnames
    nameLines: 'ui-line-chart',

    nameGridRoot: 'ui-line-root-grid',
    nameGridX: 'ui-line-x-grid',
    nameGridY: 'ui-line-y-grid',

    nameInfo: 'ui-line-chart-info',

    // ids
    idGradient: 'ui-gradient',

    // tags
    tagLines: 'li',

    tagInfoColor: 'span',
    tagInfoStat: 'b',

    // values
    colors: [
        'hsl(30, 100%, 63%)',
        'hsl(347, 100%, 69%)',
        'hsl(260, 100%, 70%)',
        'hsl(180, 48%, 52%)',
        'hsl(42, 100%, 67%)',
        'hsl(13, 26%, 41%)',
        'hsl(65, 49%, 54%)',
        'hsl(0, 0%, 42%)',
        'hsl(225, 43%, 57%)'
    ],

    includeZero: true,

    showGrid: true,
    showGridRootsOnly: false,
    showGridText: true,

    showInfo: true,
    showInfoStats: true,

    rows: 5,
    rowsHeight: 50,

    curveSize: 1,

    gridStroke: 1,
    gridStrokeArray: 4,
    gridXTextSpace: 10,
    gridYTextSpace: 5,

    lineStroke: 2,
    circleSize: 4,

    top: 15,
    right: 25,
    bottom: 15,

    sepSize : 3,
    sepSpace : 6,
    showInfoSpace: 10,

    dotted: 'dotted',
    dashed: 'dashed',
    curved: 'curved',
    filled: 'filled',

    // data attributes
    dataX: 'data-ui-x',
    dataY: 'data-ui-y',

    dataPrefix: 'data-ui-prefix',
    dataSuffix: 'data-ui-suffix',
    dataSep: 'data-ui-sep',

    dataSize: 'data-ui-size',
    dataLink: 'data-ui-url',
    dataType: 'data-ui-type',
    dataName: 'data-ui-name',
    dataNoSelected: 'data-ui-no-selected',
    dataStep: 'data-ui-step',

    dataNoCircles: 'data-ui-no-circles',
    dataNoRepeatedCircles: 'data-ui-no-repeated-circles',

    dataOnlyRepeated: 'data-ui-only-repeated',

};

// load charts
ui.lineChart.Start = () => {

    ui.lineChart.Init = function (method, resizer) {

        let charts;

        if (method === ui.globals.nameLoaded) {
            charts = ui.find('.' + ui.lineChart.target + '.' + ui.globals.nameLoaded);

        } else if (method === ui.globals.eventDomChange) {
            charts = ui.find('.' + ui.lineChart.target + ':not(.' + ui.globals.nameLoaded + '):not(.' + ui.globals.nameResized + ')');

        } else charts = ui.find('.' + ui.lineChart.target + ':not(.' + ui.globals.nameLoaded + ')');

        if (charts.length === 0) return;

        let html = '';

        Array.prototype.forEach.call(charts,

            el => {

                const lines = ui.find('.' + ui.lineChart.nameLines, el);
                if (lines.length === 0) return;

                let data = [];

                data.name = [];
                data.selected = [];
                data.color = [];

                if (resizer !== undefined && resizer) {
                    ui.addClass(el, ui.globals.nameLoaded + ' ' + ui.globals.nameResized);

                } else {
                    ui.addClass(el, ui.globals.nameLoaded);
                }

                // calculate height of chart
                let size = el.getAttribute(ui.lineChart.dataSize);

                let rows = ui.lineChart.rows;
                let rowsHeight = ui.lineChart.rowsHeight;

                if (size !== null && size !== '') {

                    size = size.split(',');
                    if (!isNaN(size[0]) && !isNaN(size[1])) {

                        rows = parseInt(size[0]);
                        rowsHeight = size[1];

                    }

                }

                data.width = el.offsetWidth;
                data.height = rows * rowsHeight;

                // read all x parameters
                let x = el.getAttribute(ui.lineChart.dataX);

                if (x !== null && x !== '') data.x = x.split(','); else return;
                x = data.x;

                // read all y parameters
                let yMax = [];

                Array.prototype.forEach.call(lines,

                    (el, i) => {

                        data[i] = [];

                        data[i].y = [];
                        data[i].links = [];

                        Array.prototype.forEach.call(ui.find(ui.lineChart.tagLines, el),

                            (item) => {

                                const y = item.getAttribute(ui.lineChart.dataY);
                                data[i].y.push(y);

                                const link = item.getAttribute(ui.lineChart.dataLink);

                                if (link !== null && link !== '') {
                                    data[i].links.push(link);

                                } else data[i].links.push('');

                            });

                        yMax.push(data[i].y); // push y datas to calculate the max value of all datas

                    });

                // include zero
                if (ui.lineChart.includeZero) yMax.push(0);

                // get min and max values of all y datas
                yMax = yMax.toString().split(',');

                yMax = yMax.filter((item, pos) => { // convert array as unique (ignore empty items!)
                    return (item !== '' && yMax.indexOf(item) === pos)
                });

                yMax = yMax.sort((a, b) => b - a); // convert array as desc

                let yMin = yMax[yMax.length - 1];

                if (yMin.indexOf('.') === 0) yMin = Math.floor(yMin); // convert only decimal data. ex: .00
                yMin = parseInt(yMin);

                // convert yMax to divide with rows
                if (parseInt(yMax[1]) > 0) { // decimals

                    yMax = Math.ceil((parseInt(yMax[0]) - yMin) / rows) * rows + yMin;
                    yMax++;

                } else yMax = Math.ceil((parseInt(yMax[0]) - yMin) / rows) * rows + yMin;

                // start html
                data.svgHeight = data.height;

                if (ui.lineChart.showInfo) data.svgHeight += ui.lineChart.showInfoSpace;
                if (ui.lineChart.showGridText) data.svgHeight += ui.lineChart.gridYTextSpace;

                html = '<svg style="width: ' + data.width + 'px; height: ' + data.svgHeight + 'px;">';

                // check column stepping
                data.step = el.getAttribute(ui.lineChart.dataStep);

                if (data.step !== null && data.step !== '' && data.step !== '0') {

                    if (isNaN(data.step)) data.step = false;
                    else {

                        data.stepArr = [];

                        for (let m = 0; m < Math.ceil(x.length / data.step); m++) {
                            data.stepArr.push(m * data.step);
                        }

                    }

                } else data.step = false;

                // calculate chart left space
                let prefix = el.getAttribute(ui.lineChart.dataPrefix);
                if (prefix === null) prefix = '';

                let suffix = el.getAttribute(ui.lineChart.dataSuffix);
                if (suffix === null) suffix = '';

                let seperator = el.getAttribute(ui.lineChart.dataSep);
                if (seperator === null && seperator === '') seperator = null;

                const yMaxLength = yMax.toString().length; // for positive number datas
                const yMinLength = yMin.toString().length; // for negative number datas
                const dataLength = yMaxLength > yMinLength ? yMaxLength : yMinLength;

                let chartLeftSpace = ui.lineChart.gridStroke + (ui.lineChart.gridXTextSpace * 2);
                chartLeftSpace += dataLength * ui.lineChart.sepSpace;

                if (prefix) chartLeftSpace += (prefix.length * ui.lineChart.sepSpace);
                if (suffix) chartLeftSpace += (suffix.length * ui.lineChart.sepSpace);
                if (seperator) chartLeftSpace += ui.lineChart.sepSpace;

                let sepRex = '\\B(?=(\\d{' + ui.lineChart.sepSize + '})+(?!\\d))';
                sepRex = new RegExp(sepRex, 'g');

                // create grids
                let col = (data.width - (ui.lineChart.right + chartLeftSpace));

                let rowLength = x.length - 1;
                if (rowLength === 0) rowLength = 1; // ignore infinity

                col = col / rowLength;

                html += '<g class="' + ui.lineChart.nameGridX + '">';

                let posX = 0;
                let posY = 0;

                for (let k = 0; k < x.length; k++) {

                    posX = (k * col) + chartLeftSpace;

                    if (ui.lineChart.showGridText) {

                        if (data.step) {

                            if (data.stepArr.indexOf(k) > -1) {

                                html += '<text ' +
                                            'x="' + posX + '" ' +
                                            'y="' + (data.height + ui.lineChart.gridYTextSpace) +
                                        '">' +
                                            x[k] +
                                        '</text>';
                            }

                        } else {

                            html += '<text ' +
                                        'x="' + posX + '" ' +
                                        'y="' + (data.height + ui.lineChart.gridYTextSpace) +
                                    '">' +
                                        x[k] +
                                    '</text>';
                        }

                    }

                    if (ui.lineChart.showGrid) {

                        if (ui.lineChart.showGridRootsOnly) { // root of x grid

                            if (k === 0) html += '<line ' +
                                        'x1="' + posX + '" ' +
                                        'x2="' + posX + '" ' +
                                        'y1="' + ui.lineChart.top + '" ' +
                                        'y2="' + Math.ceil(data.height - (ui.lineChart.bottom + (ui.lineChart.gridStroke / 2))) + '" ' +
                                        'class="' + ui.lineChart.nameGridRoot + '" ' +
                                        'stroke-width="' + ui.lineChart.gridStroke + '">' +
                                    '</line>'

                        } else {

                            html += '<line ' +
                                        'x1="' + posX + '" ' +
                                        'x2="' + posX + '" ' +
                                        'y1="' + ui.lineChart.top + '" ';

                            if (k === 0) { // root of x grid

                                html += 'y2="' + Math.ceil(data.height - (ui.lineChart.bottom + (ui.lineChart.gridStroke / 2))) + '" ' +
                                        'class="' + ui.lineChart.nameGridRoot + '" ' +
                                        'stroke-width="' + ui.lineChart.gridStroke + '"';

                            } else {

                                html += 'y2="' + Math.ceil(data.height - (ui.lineChart.bottom + (ui.lineChart.gridStroke / 2))) + '" ' +
                                        'stroke-dasharray="' + ui.lineChart.gridStrokeArray + '"';

                            }

                            html += '></line>';

                        }

                    }

                }

                html += '</g>' +
                    '<g class="' + ui.lineChart.nameGridY + '">';

                for (let l = 0; l <= rows; l++) {

                    posY = (l * (data.height - (ui.lineChart.top + ui.lineChart.bottom)) / rows) + ui.lineChart.top;

                    if (ui.lineChart.showGridText) {

                        let val = parseInt(((yMax - yMin) / rows) * (rows - l) + yMin);

                        // multiple of 10
                        if (yMax >= 50 && val > 10) val = Math.round(val / 10) * 10;
                        if (yMax <= -50 && val < -10) val = Math.floor(val / 10) * 10;

                        // multiple of 5
                        if (yMax <= 50 && val > 5) val = Math.round(val / 5) * 5;
                        if (yMax >= -50 && val < -5) val = Math.floor(val / 5) * 5;

                        if (seperator) val = val.toString().replace(sepRex, seperator);

                        html += '<text ' +
                                    'x="' + (chartLeftSpace - ui.lineChart.gridXTextSpace) + '" ' +
                                    'y="' + (posY + 4) +
                                '">' +
                                    prefix + val + suffix +
                                '</text>';
                    }

                    if (ui.lineChart.showGrid) {

                        if (ui.lineChart.showGridRootsOnly) { // root of y grid

                            if (l >= rows) html += '<line ' +
                                        'x2="' + (data.width - ui.lineChart.right) + '" ' +
                                        'y1="' + posY + '" ' +
                                        'y2="' + posY + '" ' +
                                        'x1="' + Math.ceil(chartLeftSpace - (ui.lineChart.gridStroke / 2)) + '" ' +
                                        'class="' + ui.lineChart.nameGridRoot + '" ' +
                                        'stroke-width="' + ui.lineChart.gridStroke + '">' +
                                    '</line>';

                        } else {

                            html += '<line ' +
                                    'x2="' + (data.width - ui.lineChart.right) + '" ' +
                                    'y1="' + posY + '" ' +
                                    'y2="' + posY + '" ';

                            if (l >= rows) { // root of y grid

                                html += 'x1="' + Math.ceil(chartLeftSpace - (ui.lineChart.gridStroke / 2)) + '" ' +
                                        'class="' + ui.lineChart.nameGridRoot + '" ' +
                                        'stroke-width="' + ui.lineChart.gridStroke + '"';

                            } else {

                                html += 'x1="' + Math.floor(chartLeftSpace + ui.lineChart.gridStroke) + '" ' +
                                        'stroke-dasharray="' + ui.lineChart.gridStrokeArray + '"';

                            }

                            html += '></line>';

                        }

                    }

                }

                html += '</g>';

                // create svg contents
                let circles = '';
                const pathStart = [];

                html += '<g>';

                Array.prototype.forEach.call(lines,

                    (el, j) => {

                        let paths = '';

                        const y = data[j].y;

                        // set color
                        if (j > ui.lineChart.colors.length - 1) {
                            data.color.push(ui.lineChart.colors[j - ui.lineChart.colors.length]);

                        } else data.color.push(ui.lineChart.colors[j]);

                        // get data names
                        const dataName = el.getAttribute(ui.lineChart.dataName);

                        if (dataName !== null && dataName !== '') data.name.push(dataName);
                        else data.name.push('');

                        // selected or no selected
                        let selected = el.getAttribute(ui.lineChart.dataNoSelected);

                        selected = selected !== null && selected === 'true' ? false : true; // check selected
                        data.selected.push(lines.length === 1 ? '' : selected);

                        // create paths and circles
                        let noCircles = el.getAttribute(ui.lineChart.dataNoCircles);
                        noCircles = noCircles === null || noCircles === '' ? false : true;

                        let noRepeatedCircles = el.getAttribute(ui.lineChart.dataNoRepeatedCircles);
                        noRepeatedCircles = noRepeatedCircles === null || noRepeatedCircles === '' ? false : true;

                        let onlyRepeated = el.getAttribute(ui.lineChart.dataOnlyRepeated);
                        onlyRepeated = onlyRepeated === null || onlyRepeated === '' ? false : true;

                        // get line type
                        let type = el.getAttribute(ui.lineChart.dataType);
                        if (type === null || type === undefined) { type = ''; }

                        const createCircles = (n) => {

                            if (noCircles) return;

                            circles += '<circle ' +
                                            'cx="' + posX + '" ' +
                                            'cy="' + posY + '" ' +
                                            'r="' + ui.lineChart.circleSize + '" ' +
                                            'fill="' + data.color[j] + '" ' +
                                            'stroke="' + data.color[j] + '" ' +
                                            'stroke-width="0" ';

                            if (dataName !== null && dataName !== '') circles += ' data-name="' + dataName + '"'; // add data-name
                            if (!selected) circles += ' class="' + ui.globals.nameHide + '"'; // add no selected

                            if (data[j].links[n] !== '') { // check links
                                circles += 'onclick="location.href = \'' + data[j].links[n] + '\';"';
                            }

                            let val = y[n] ? y[n] : 0;
                            val = prefix + val + suffix;

                            if (seperator) val = val.toString().replace(sepRex, seperator);

                            if (ui.tooltip === undefined) {

                                circles += '/>' +
                                        '<title>' + val + '</title>';

                            } else { // Optional!
                                circles += ui.tooltip.dataTooltip + ' name="' + val + '" />';
                            }

                            '</circle>';

                        }

                        const removeReTypedCurves = (data) => {
                            return data.replace(/M L |M C +[\d\s\.]+\, +[\d\s\.]+\, |M S +[\d\s\.]+\, /g, 'M ');
                        }

                        const createPaths = (pathsData, fromStart) => {

                            let classes = '';

                            if (type.indexOf(ui.lineChart.dashed) > -1) { // dashed

                                classes += ui.globals.prefix + ui.lineChart.dashed;
                                if (!selected) classes += ' ui-hidden'; // add no selected

                                html += '<path class="' + classes + '" ';

                            } else if (type.indexOf(ui.lineChart.dotted) > -1) { // dotted

                                classes += ui.globals.prefix + ui.lineChart.dotted;
                                if (!selected) classes += ' ui-hidden'; // add no selected

                                html += '<path class="' + classes + '" ';

                            }
                            else if (!selected) html += '<path class="ui-hidden" ';
                            else html += '<path ';

                            if (dataName !== null && dataName !== '') html += ' data-name="' + dataName + '"'; // add data-name

                            html += 'd="M';
                            if (fromStart) html += ' ' + pathStart.x + ' ' + pathStart.y;

                            html += pathsData + '" ' +
                                    'stroke="' + data.color[j] + '" ' +
                                    'stroke-width="' + ui.lineChart.lineStroke + '" ' +
                                '/>';

                            html = removeReTypedCurves(html);

                        }

                        const createFilledPaths = (id, pathsData, fromStart, cutted) => {

                            if (type.indexOf(ui.lineChart.filled) > -1) {

                                html += '<linearGradient';

                                if (dataName !== null && dataName !== '') html += ' data-name="' + dataName + '"'; // add data-name
                                if (!selected) html += ' class="' + ui.globals.nameHide + '"'; // add no selected

                                html += ' id="' + ui.lineChart.idGradient + id + '" x1="0" y1="0" x2="0" y2="100%">' +
                                            '<stop offset="0" stop-color="' + data.color[j] + '"></stop>' +
                                            '<stop offset="100%" stop-color="' + data.color[j] + '" stop-opacity="0.0"></stop>' +
                                        '</linearGradient>';

                                html += '<path d="M';
                                if (fromStart) html += ' ' + (pathStart.x + (ui.lineChart.gridStroke / 2)) + ' ' + pathStart.y;

                                const cuttedStart = cutted ? cutted : (ui.lineChart.gridStroke / 2) + chartLeftSpace

                                html += pathsData +

                                        ' V ' + (data.height - ui.lineChart.bottom - (ui.lineChart.gridStroke / 2)) +
                                        ' H ' + cuttedStart + ' Z" ' +

                                        'stroke="0" ' +
                                        'fill="url(#' + ui.lineChart.idGradient + id + ')" ' +
                                        'stroke-width="' + ui.lineChart.lineStroke + '" ' +
                                        'class="' + ui.globals.prefix + ui.lineChart.filled + '" ' +

                                    '/>';

                                html = removeReTypedCurves(html);

                            }

                        }

                        if (y.length === 0) { // no y datas

                            posX = chartLeftSpace;
                            posY = (data.svgHeight - (ui.lineChart.top + ui.lineChart.bottom));

                            pathStart.x = posX;
                            pathStart.y = posY;

                            createCircles(0);

                        }

                        // random id
                        let randomId = new Date().getTime().toString();
                        randomId = randomId.substring(randomId.length - 4, randomId.length) + j;

                        // create lines, circles and paths
                        let repeatedPaths = [];
                        let repeatedIndex = 0;

                        let repeatedMultiple = false;
                        let repeatedFromStart = false;

                        let filledPathCuts = [];

                        for (let n = 0; n < y.length; n++) {

                            posX = (n * col) + chartLeftSpace;

                            let range = yMax - yMin; // ignore infinity
                            if (range === 0) range = 1;

                            if (yMax + yMin === 0) { // repeated zero datas
                                posY = (data.svgHeight - (ui.lineChart.top + ui.lineChart.bottom));

                            } else { // default
                                posY = data.height - (data.height + (((data.height - (ui.lineChart.top + ui.lineChart.bottom)) * (y[n] - yMax)) / range)) + ui.lineChart.top;
                            }

                            // create lines
                            if (n === 0) {

                                // start points
                                pathStart.x = posX;
                                pathStart.y = posY;

                            }

                            if (type.indexOf(ui.lineChart.curved) > -1) { // curved

                                const percent = parseInt((ui.lineChart.curveSize * (n * col)) / 100);

                                if (n === 1) { // start curves

                                    paths += ' C ' + (col + percent) + ' ' + (posY - percent) + ',' +
                                            ' ' + (col + percent) + ' ' + posY + ',' +
                                            ' ' + posX + ' ' + posY;

                                } else if (n > 0) { // other curves

                                    paths += ' S ' + ((n * col) - percent) + ' ' + posY + ',' +
                                            ' ' + posX + ' ' + posY;

                                }

                            } else if (n > 0) paths += ' L ' + posX + ' ' + posY; // not curved

                            // create circles and paths
                            if (noRepeatedCircles) {
                                if (n < y.length - 1 && (y[n - 1] !== y[n] || y[n] !== y[n + 1])) createCircles(n);

                            } else if (onlyRepeated) {

                                const clearBeforeRepeat = () => {

                                    paths = '';
                                    repeatedIndex += 1;

                                }

                                if (

                                    (n === 0 && y[n] === y[n + 1]) ||
                                    (n > 0 && y[n - 1] === y[n]) ||

                                    (n < y.length - 1 && y[n + 1] === y[n]) ||
                                    (n === y.length - 1 && y[n - 1] === y[n])

                                ) {

                                    if (n > 0 && n < y.length - 1 && y[n - 1] === y[n] && y[n] !== y[n + 1] && y[n + 1] === y[n + 2]) { // multi&multi

                                        repeatedPaths[repeatedIndex] = paths + ' L ' + (((n + 1) * col) + chartLeftSpace) + ' ' + posY;

                                        clearBeforeRepeat();
                                        repeatedMultiple = true;

                                    } else { // not multi&multi

                                        repeatedPaths[repeatedIndex] = paths;
                                        if (y[n - 1] !== y[n]) createCircles(n); // only start circles

                                    }

                                    if (n === 0 && posX === pathStart.x) repeatedFromStart = true;
                                    if (y[n - 1] !== y[n] && y[n] === y[n + 1]) filledPathCuts[repeatedIndex] = (n * col) + chartLeftSpace; // filled path cut start points

                                } else clearBeforeRepeat();

                            } else createCircles(n);

                        }

                        if (onlyRepeated) {

                            const clearEmptyItems = (arr) => { // clear empty array items

                                return arr.filter(item => {
                                    if (item !== 0 || item !== null || item !== '') return item;
                                });

                            }

                            repeatedPaths = clearEmptyItems(repeatedPaths);
                            filledPathCuts = clearEmptyItems(filledPathCuts);

                            for (let r in repeatedPaths) {

                                const path = repeatedPaths[r];
                                const pathCut = filledPathCuts[r];

                                const fromStart = (r > 0 && repeatedMultiple) ? false : repeatedFromStart;

                                createPaths(path, fromStart);
                                createFilledPaths((randomId + r), path, fromStart, pathCut);

                            }

                        } else {

                            createPaths(paths, true);
                            createFilledPaths(randomId, paths, true);

                        }

                    });

                // close svg tag
                html += circles + '</g></svg>';

                if (data.width === 0) {
                    ui.removeClass(el, ui.globals.nameLoaded + ' ' + ui.globals.nameResized);
                }

                // create info
                if (ui.lineChart.showInfo) {

                    html += '<ul class="' + ui.lineChart.nameInfo + '">';

                    for (let p = 0; p < lines.length; p++) {

                        let total = 0;

                        for (let n = 0; n < data[p].y.length; n++) {
                            total += parseInt(data[p].y[n]);

                        }

                        if (data.name[p] !== '') {

                            const selected = data.selected[p];

                            html += '<li name="' + data.name[p] + '"';

                            if (selected !== '') {

                                html += ' class="' + ui.globals.nameToggle;
                                if (selected) html += ' ' + ui.globals.nameSelected;
                                html += '"';

                            }

                            html += ' style="background: ' + data.color[p] + '"';
                            html += '>' + data.name[p];

                            if (ui.lineChart.showInfoStats) {

                                html += ': <' + ui.lineChart.tagInfoStat + '>' +
                                            total +
                                    '</' + ui.lineChart.tagInfoStat + '>';

                            }

                            html += '</li>';

                        }

                    }

                    html += '</ul>';

                }

                // parse html
                const svg = ui.find('svg', el)[0];
                if (svg) el.removeChild(svg);

                const info = ui.find('.' + ui.lineChart.nameInfo, el)[0];
                if (info) el.removeChild(info);

                el.insertAdjacentHTML('beforeEnd', html);

                // empty variables
                data = [];
                html = '';

            });

    };

    ui.lineChart.Init(ui.globals.nameNotLoaded); // show not loaded charts

};

// Event Listeners
ui.on(document,
    'click',

    '.' + ui.lineChart.nameInfo + ' li.' + ui.globals.nameToggle,

    function () {

        const name = this.getAttribute('name');

        const parent = ui.closest(this, '.' + ui.lineChart.target)[0];
        const items = ui.find('[data-name="' + name + '"]:not(li)', parent);

        if (items.length > 0) {

            ui.addClass(parent, ui.globals.nameResized);

            if (ui.hasClass(this, ui.globals.nameSelected)) {

                // hide
                ui.removeClass(this, ui.globals.nameSelected);
                ui.addClass(items, ui.globals.nameHide);

            } else {

                // show
                ui.addClass(this, ui.globals.nameSelected);
                ui.removeClass(items, ui.globals.nameHide);

            }

        }

    });

// loaders
ui.onload(ui.lineChart.Start);

ui.on(window,
    'resize',

    () => {
        ui.lineChart.Init(ui.globals.nameLoaded, true); // resize loaded charts
    });

ui.on(document,
    ui.globals.eventDomChange,

    () => {
        ui.lineChart.Init(ui.globals.eventDomChange); // resize loaded charts
    });

// ajax callback loader
ui.on(document,
    ui.globals.eventAjaxCallback,

    () => {

        if (ui.ajax.classNames.indexOf(ui.lineChart.target) > -1) {
            ui.lineChart.Init(ui.globals.nameNotLoaded); // show not loaded charts
        }

    });