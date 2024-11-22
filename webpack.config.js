const path = require('path');

module.exports = {
    entry: './src/main.js', // 入口文件
    output: {
        filename: 'bundle.js', // 输出文件名
        path: path.resolve(__dirname, 'dist') // 输出路径
    },
    mode: 'production', // 生产模式
    module: {
        rules: [
            {
                test: /\.css$/, // 处理 CSS 文件
                use: ['style-loader', 'css-loader']
            }
        ]
    }
};