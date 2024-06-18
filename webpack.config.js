const path = require("path");
const webpack = require('webpack');

const CopyPlugin = require("copy-webpack-plugin");
const HtmlWebPackPlugin = require("html-webpack-plugin");

const config = {
    output: {
        filename: 'js/[name].[contenthash].js',
        chunkFilename: 'js/[name].[contenthash].js',
        publicPath: 'auto', // for page refresh for BrowserRouter
        clean: true, // clean the output directory before emit.
    },
    optimization: {
        splitChunks: {
            chunks: 'all', // required for code splitting files!
        },
    },
    resolve: {
        extensions: ['.js', '.ts', '.tsx', '.less'], // file types
        alias: {
            '@ui': path.resolve(__dirname, 'js/core/globals'),
            '@layouts': path.resolve(__dirname, './src/layouts/'),
            '@components': path.resolve(__dirname, './src/components/'),
            '@utils': path.resolve(__dirname, './src/utils/'),
            '@icon': path.resolve(__dirname, './icon/'),
            '@less': path.resolve(__dirname, './less/'),
            '@js': path.resolve(__dirname, './js/'),
        },
    },
    performance: {
        maxEntrypointSize: 1000000, // rendered js size limit
        maxAssetSize: 1000000 // single asset size limit
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/, // use only js/ts loader!
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"],
                    },
                },
            },
            {
                test: /\.(ts|tsx)?$/,
                exclude: /node_modules/, // use only js/ts loader!
                use: "ts-loader",
            },
            { // do not use exclude!
                test: /\.less$/i,
                use: [
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
            { // do not use exclude!
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            { // do not use exclude!
                test: /\.svg$/,
                use: "svg-url-loader",
            },
        ],
    },
}

module.exports = (env, argv) => {

    // shared variables
    const htmlWebpackPlugin = { // add files to build
        template: "./src/index.html",
        favicon: "./public/favicon.ico",
    }

    // set build folder
    const build = 'build'; // default build folder
    let setFolder = env.mode ? build + '_' + env.mode : build; // get custom build folders from --env with package.json

    config.output.path = path.resolve(__dirname, setFolder); // when script not serve mode!

    // production configs
    if (argv.mode === 'production') {
        config.devtool = false; // disable when production mode for reducing output file sizes
    }

    // development configs
    if (argv.mode === 'development') {

        // server
        config.devServer = {
            host: 'localhost', // localhost
            port: 3000, // port number
            open: true, // Opens browser on a new tab automatically
            historyApiFallback: true, // enable page refresh
            hot: true, // always make hot refresh when code updated
        };

    }

    // send custom variables to process.env
    const customVars = {
        SERVICE_URL: JSON.stringify('mockoon'),
    };

    // plugins
    config.plugins = [
        new HtmlWebPackPlugin( htmlWebpackPlugin ),
        new webpack.DefinePlugin({
            process: { env: customVars }
        }),
        new CopyPlugin({
            patterns: [{ from: "public" }], // copy files from public folder
        }),
    ]

    return config;

};