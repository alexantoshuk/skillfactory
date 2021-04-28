const path = require('path');
const miniCss = require('mini-css-extract-plugin');
module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {

        rules: [{
            test: /\.(s*)css$/,

            use: [
                miniCss.loader,
                {
                    loader: 'css-loader',
                    options: {
                        url: false
                    }
                },
                'sass-loader',

            ]
        }]
    },
    plugins: [
        new miniCss({
            filename: 'style.css',
        }),
    ]
};