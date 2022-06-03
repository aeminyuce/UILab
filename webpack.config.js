const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");

const config = {
    entry: {
        bundle: { import: './src/index.js' }, // main autput file name
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'bundle'), // when script not serve mode!
    },
    optimization: {
        splitChunks: {
            chunks: 'all', // split all output files
        },
    },
    devServer: {
        port: 3000, // Opens http://localhost:3000/
        open: true, // Opens browser on a new tab automatically
        historyApiFallback: true, // running routes when page refresh
    },
    resolve: {
        extensions: ['.js', '.less'], // file types
        alias: {
            style: path.resolve(__dirname, './less/'),
            script: path.resolve(__dirname, './js/'),

            ui: path.resolve(__dirname, './js/core/globals'),
            utils: path.resolve(__dirname, './src/utils/'),
            icon: path.resolve(__dirname, './icon/'),
            components: path.resolve(__dirname, './src/components/'),
        },
    },
    devtool: "eval-cheap-source-map", // ignore source mapping files from node_modules
    performance: {
        maxEntrypointSize: 100000, // rendered main.js size limit
        maxAssetSize: 100000 // single asset size limit
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
                test: /\.less$/i,
                include: [
                    path.resolve(__dirname, "less"),
                ],
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
                include: [
                    path.resolve(__dirname, "icon"),
                    path.resolve(__dirname, "dist"),
                ],
                use: [ // loads SVG
                    {
                        loader: 'svg-url-loader',
                        options: {
                            iesafe: true, // make all svg images to work in IE
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
}

module.exports = (env, argv) => {

    if (argv.mode === 'production') {
        config.devtool = false; // disable when production mode for reducing output file sizes
    }

    return config;

};