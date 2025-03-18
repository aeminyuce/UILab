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
const generateCode = (name, data) => {
    let fileName = name.split('.')[0];

    fileName = fileName.split('-').map((part) => {
        return part.charAt(0).toUpperCase() + part.slice(1);
    }).join('');

    var code = `'use strict';
var  React = require('react');

module.exports.Icon${fileName} = function (props) {
    return React.createElement(
        'svg',
        Object.assign({}, props, { viewBox: '0 0 264 264' }),
        React.createElement('path', { d: '${data}' })
    );
}`
    return code;
};

// get svg path
const getPath = (data) => {
    const pathMatch = data.match(/<path d="([^"]*)"/);
    const pathAttribute = pathMatch ? pathMatch[1] : null;

    return pathAttribute;
}

// save json file
const saveJsonFile = (results) => {
    const resultsStr = JSON.stringify(results, null, 2);

    fs.writeFile('icons-list.json', resultsStr.toString(), (e) => {
        if (e) throw e;
        console.log('icons-list.json file saved!');
    });
}

// read and update json file
const updateJsonFile = (categoryJson) => {
    fs.readFile('icons-list.json', {encoding: 'utf-8'}, (err, data) => {
        if (!err) {
            try {
                const results = JSON.parse(data);
                let categoryMatch = false;

                results.forEach((item) => {
                    if (item.category === args.cName) {
                        item.icons = categoryJson.icons;
                        item.length = categoryJson.icons.length;
                        categoryMatch = true;
                    }
                });

                if (!categoryMatch) {
                    results.push(categoryJson);
                }

                saveJsonFile(results);
            }
            catch (e) {
                const results = [].concat(categoryJson);
                saveJsonFile(results);
            }
        } else throw err;
    });
}

const addJson = (iconsList) => {
    // create category json
    const categoryJson = {
        category: args.cName, // category name
        icons: iconsList
    };

    // add icons json to main json
    updateJsonFile(categoryJson);
}

const newIconsList = []; // new icons list array

const addIcon = (name, isFinished) => {
    newIconsList.push(name);

    if (isFinished) {
        addJson(newIconsList);
    }
}

// read files from folder
const directoryPath = path.join(__dirname, args.src); // source folder name

fs.readdir(directoryPath, (err, files) => {
    if (err) throw `Unable to scan directory: ${err}`;

    // read SVG files
    files.forEach((fileName, index) => {
        const iconPath = `${directoryPath}\\${fileName}`;

        fs.readFile(iconPath, {encoding: 'utf-8'}, (err, data) => {
            if (!err) {

                // create JS files
                const name = fileName.split('.')[0];
                const code = generateCode(fileName, getPath(data));
                const jsFilename = `${name}.js`;

                const outputPath = path.join(__dirname, args.dest, jsFilename); // destination folder name
                fs.writeFile(outputPath, code, (e) => {
                    if (e) throw e;
                    console.log(`${jsFilename} created in ${outputPath} folder!`);
                });

                // add icons for json file
                addIcon(name, index + 1 === files.length);

            } else throw err;
        });
    });
});
