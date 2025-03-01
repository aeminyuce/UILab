const fs = require('fs');
const path = require('path');

// cli arguments
const getArgs = () =>
    process.argv.reduce((args, arg) => {

    if (arg.slice(0, 2) === "--") {
        const arr = arg.split("=");
        const flag = arr[0].slice(2);
        const val = arr.length > 1 ? arr[1] : true;

        args[flag] = val;
    }

    return args;
}, {});

const args = getArgs();

// code template
const generateCode = (name, data) => `
    'use strict';
    var  React = require('react');

    var ${name} = function (props) {
        return React.createElement(
            'svg',
            Object.assign({}, props, { viewBox: '0 0 264 264' }),
            React.createElement('path', { d: '${data}' })
        );
    }

    module.exports = ${name};
`;

// get svg path
const getPath = (data) => {
    const pathMatch = data.match(/<path d="([^"]*)"/);
    const pathAttribute = pathMatch ? pathMatch[1] : null;

    return pathAttribute;
}

// read files from folder
const directoryPath = path.join(__dirname, args.src); // source folder name

fs.readdir(directoryPath, (err, files) => {
    if (err) throw `Unable to scan directory: ${err}`;

    // read SVG files
    files.forEach((fileName) => {
        const iconPath = `${directoryPath}\\${fileName}`;

        fs.readFile(iconPath, {encoding: 'utf-8'}, (err, data) => {
            if (!err) {

                // create JS files
                const name = fileName.split('.')[0];
                const code = generateCode(name, getPath(data));

                const jsFilename = `${fileName.split('.')[0]}.js`;

                const outputPath = path.join(__dirname, args.dest, jsFilename); // destination folder name
                fs.writeFile(outputPath, code, (e) => {
                    if (e) throw e;
                    console.log(`${jsFilename} created in ${outputPath} folder!`);
                });

            } else throw err;
        });
    });
});