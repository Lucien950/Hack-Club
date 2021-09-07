const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry:{
        app:"./src/central.js",
        lesson1:"./src/LESSON_1/lesson1.js",
        lesson2:"./src/LESSON_2/lesson2.js"
    },
    plugins:[
        new HTMLWebpackPlugin({
            hash: true,
            title: 'Main App',
            myPageHeader: 'App header',
            template: './src/index.html',
            chunks: ['app'],
            filename: './index.html' //relative to root of the application
        }),
        new HTMLWebpackPlugin({
            hash: true,
            title: 'Lesson 1',
            myPageHeader: 'Lesson 1 header',
            template: './src/LESSON_1/lesson1.html',
            chunks: ['app', 'lesson1'],
            filename: './lesson1/index.html' 
        }),
        new HTMLWebpackPlugin({
            hash: true,
            title: 'Lesson 2',
            myPageHeader: 'Lesson 2 header',
            template: './src/LESSON_2/lesson2.html',
            chunks: ['app', 'lesson2'],
            filename: './lesson2/index.html' 
        })
    ],
    // resolve: { extensions: [".js", ".ts"] },
    module:{
        rules:[
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.html$/,
                use:["html-loader"]
            },
            // {
            //     test: /\.html$/,
            //     use:{
            //         loader:"file-loader",
            //         options:{
            //             name:"[name].[ext]",
            //             outputPath: "html"
            //         }
            //     },
            //     exclude: path.resolve(__dirname, 'src/index.html')
            // },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                use:{
                    loader:"file-loader",
                    options:{
                        name:"[name].[ext]",
                        outputPath: "img"
                    }
                }
            }
        ]
    }
}