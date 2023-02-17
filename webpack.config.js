const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");

// Instantiate the plugin.
// The `template` property defines the source
// of a template file that this plugin will use.
// We will create it later.
const htmlPlugin = new HtmlWebPackPlugin({
    template: "./public/index.html",
});

module.exports = {
    entry: "./src/index.tsx",
    mode: process.env.NODE_ENV === 'production' ? "production" : "development",

    performance: {
        hints: process.env.NODE_ENV === 'production' ? "warning" : false
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
    },
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"),
    },

    plugins: [htmlPlugin],
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
        },
        liveReload:true,
        compress: true,
        port: 3000,
    },
};