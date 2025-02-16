module.exports = { // https://github.com/svg/svgo

    multipass: true,

    js2svg: {
        pretty: true
    },

    plugins: [

        {
            name: 'removeAttrs',
            params: { attrs: '(class|id|data-name|fill|stroke|stroke-linecap|stroke-linejoin|stroke-width|clip-path)' }
        },
        {
            name: 'cleanupNumericValues',
            params: { floatPrecision: 1 }
        },

        'removeDoctype',
        'removeXMLProcInst',
        'removeComments',
        'removeMetadata',
        'removeEditorsNSData',
        'cleanupAttrs',
        'mergeStyles',
        'inlineStyles',
        'minifyStyles',
        'removeUnknownsAndDefaults',
        'cleanupIds',
        'removeStyleElement',
        'removeUselessDefs',
        'convertColors',
        'collapseGroups',
        'removeRasterImages',
        'removeUnknownsAndDefaults',
        'removeNonInheritableGroupAttrs',
        'removeUselessStrokeAndFill',
        'removeDimensions',
        'cleanupEnableBackground',
        'removeHiddenElems',
        'removeEmptyText',
        'convertShapeToPath',
        'convertEllipseToCircle',
        'moveElemsAttrsToGroup',
        'moveGroupAttrsToElems',
        'convertPathData',
        'convertTransform',
        'removeEmptyAttrs',
        'removeEmptyContainers',
        'mergePaths',
        'removeUnusedNS',
        'removeTitle',
        'removeDesc'

    ]

};