const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: path.resolve(__dirname, "./src/index.js"),
    devServer: { // https://webpack.js.org/configuration/dev-server/
        port: 3000, // Opens http://localhost:3000/
        open: true, // Opens browser on a new tab automatically
    },
    resolve: { // https://webpack.js.org/configuration/resolve/
        extensions: ['.js', '.less', '.css'], // file types
        alias: { // custom aliases
            styles: path.resolve(__dirname, './less/styles.less'),
            scripts: path.resolve(__dirname, './js/scripts'),

            styleModule: path.resolve(__dirname, './less/modules/'),
            scriptModule: path.resolve(__dirname, './js/modules/'),

            ui: path.resolve(__dirname, './js/core/globals'),
            utils: path.resolve(__dirname, './src/utils/'),
            components: path.resolve(__dirname, './src/components/'),
        },
    },
    performance: {
        maxEntrypointSize: 512000, // rendered main.js size limit
        maxAssetSize: 512000 // single asset size limit
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: { // loads JSX files
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"],
                    },
                },
            },
            {
                test: /\.css$/,
                include: path.resolve(__dirname, "public"),
                use: [ // loads CSS
                    "style-loader",
                    "css-loader"
                ],
            },
            {
                test: /\.less$/i,
                include: path.resolve(__dirname, "less"),
                use: [ // compiles Less to CSS
                    { loader: "style-loader" },
                    { loader: "css-loader" },
                    {
                        loader: "less-loader",
                        options: {
                            lessOptions: {
                                strictMath: true, // true: requires math with parentheses
                            },
                        },
                    },
                ],
            },
            {
                test: /\.svg$/,
                use: [ // loads SVG
                    {
                        loader: 'svg-url-loader',
                        options: {
                            limit: 10000,
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/index.html",
        }),
    ],
};