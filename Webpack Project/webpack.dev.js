const path = require('path');
const common = require('./webpack.common')
const { merge } = require("webpack-merge")

module.exports = merge(common, {
    //DEV
    mode:"development",
    devtool: 'source-map',
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 8080,
    },

    //OUT
    output:{
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "distDev")
    }
});