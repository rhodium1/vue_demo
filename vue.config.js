module.exports = {
    configureWebpack: {
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use:[
                        'babel-loader',
                        {
                            loader: 'ts-loader',
                        }
                    ],
                    exclude: /node_modules/,
                    // options: {
                    //     appendTsSuffixTo: [/.vue$/],
                    // }
                }
            ]
        }
    }
}