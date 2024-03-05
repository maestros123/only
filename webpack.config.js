const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: "./src/index.tsx",
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.js'
    },
    resolve:
        {
            extensions: [ '.tsx', '.ts', '.js', 'css', 'scss'],
        },
    devServer: {
        port: 3002
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                loader: 'ts-loader'
            },
            {
                test: /\.s?css$/,
                oneOf: [
                    {
                        test: /\.module\.s?css$/,
                        use: [
                            MiniCssExtractPlugin.loader,
                            {
                                loader: "css-loader",
                                options: {
                                    modules: true,
                                    importLoaders: 1,
                                    sourceMap: true
                                }
                            },
                            "sass-loader"
                        ]
                    },
                    {
                        test: /\.s?css$/,
                        use: [
                            MiniCssExtractPlugin.loader,
                            "css-loader",
                            "sass-loader"
                        ]
                    }
                ]
            },
            {
                test: /\.svg$/i,
                issuer: /\.[jt]sx?$/,
                use: [{ loader: '@svgr/webpack', options: { icon: true } }],
            },

        ]
    },

    plugins:[
        new HtmlWebpackPlugin({
            template: path.join(__dirname,'/src/index.html')
        }),
        new MiniCssExtractPlugin()
    ]
}