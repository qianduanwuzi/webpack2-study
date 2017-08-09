var webpack = require('webpack'),
       path = require('path');

module.exports = {
    entry:{
        app:'./app/app.js',
        // vendor:[]             // 抽取第三方库，减少打包体积
    },
    output:{
        path: path.resolve(__dirname,'./dist'),  //绝对路径
        filename: '[name].js'
    },
    module:{
        rules: [
            {
                test: /\.css$/,
                use: [
                    {loader: 'style-loader'},
                    {loader: 'css-loader',
                     options: {
                         modules: true
                     }
                    }
                ]
            }

        ]
    },
    plugins: [
        // 打包入口的vendor数组
        // new webpack.optimize.CommonsChunkPlugin('vendor','vendors.js'),

        // 代码压缩，减少打包体积 --编译速度会变慢，所以一般在生产环境启用
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ]
}