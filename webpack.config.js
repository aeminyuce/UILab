const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");

const config = {
    output: {
        filename: '[contenthash].js',
        path: path.resolve(__dirname, 'bundle'), // when script not serve mode!
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendors: {
                    chunks: 'all', // split all output files
                    test: /\/node_modules\//, // reduce random numbered files
                    enforce: true,
                }

            }
        },
    },
    devServer: {
        port: 3000, // Opens http://localhost:3000/
        open: true, // Opens browser on a new tab automatically
        historyApiFallback: true, // running routes when page refresh
    },
    resolve: {
        extensions: ['.js', '.tsx', '.less'], // file types
        alias: {
            '@': path.resolve(__dirname, './'),
            '@components': path.resolve(__dirname, './src/components/'),
            '@utils': path.resolve(__dirname, './src/utils/'),
            '@icon': path.resolve(__dirname, './icon/'),
            '@less': path.resolve(__dirname, './less/'),
            '@js': path.resolve(__dirname, './js/'),
        },
    },
    devtool: "eval-cheap-source-map", // ignore source mapping files from node_modules
    performance: {
        maxEntrypointSize: 1000000, // rendered js size limit
        maxAssetSize: 1000000 // single asset size limit
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
                test: /\.(ts|tsx)?$/,
                exclude: /node_modules/,
                use: 'ts-loader',
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