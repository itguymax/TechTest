const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;



module.exports = {
    
    devtool:'source-map',
    entry: {
        index:path.resolve(__dirname,'src/index.js'),
        timer:path.resolve(__dirname,'src/timer.js')
    },
    output:{
        path:  path.resolve(__dirname,'dist'),
        filename: '[name][contenthash].js',
        clean: true,
        assetModuleFilename:'[name][ext]',
    },
    module: {
        rules:[
            {
                test:/\.scss$/,
                use:['style-loader','css-loader','sass-loader'],
            },
            {
                test:/\.js$/,
                exclude:/node_modules/,
                use: {
                    loader: 'babel-loader',
                    options:{
                        presets:['@babel/preset-env'],
                    },
                },
            },
            {
                test:/\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            }
        ],
    },
  
    plugins:[
        new HtmlWebpackPlugin(
            {
                title:'тех работы',
                filename:'index.html',
                template:'src/index.html'
            }
        ),
        new BundleAnalyzerPlugin(),
    ]

}