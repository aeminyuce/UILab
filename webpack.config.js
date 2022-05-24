const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: path.resolve(__dirname, "./src/index.js"),
    output: {
        path: path.resolve(__dirname, "bundle")
    },
    devServer: { // https://webpack.js.org/configuration/dev-server/
        port: 3000, // Opens http://localhost:3000/
        open: true, // Opens browser on a new tab automatically
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