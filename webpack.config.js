const path = require('path');
const webpack = require('webpack');

module.exports={
    entry: './src/main.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'src/main.js')
    },
    plugins: [
        /*new webpack.optimize.UglifyJsPlugin({
            minimize: true,
            compress: {
            warnings: false
        }
    })*/
    ],
    module: {
        rules: [
        {
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader?cacheDirectory=true',
                options: {
                presets: ['env']
            }
            }
        }
        ]
    }
};
