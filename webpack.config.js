const webpack = require('webpack');
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './client/index.js',
	mode: 'development',
  output: {
    path: path.join(__dirname, './build'),
    filename: 'bundle.js'
  },
	devServer: {
			static: {
					directory: path.join(__dirname, './build'),
					publicPath: '/',
			},
			compress: true,
			hot: true,
			// port: 8080, 
			allowedHosts: ['auto'],
			// proxy: [
			// 		{
			// 				context: ['/api'],
			// 				target: 'http://localhost:3000',
			// 				secure: false,
			// 		}
			// ]
	},
	plugins: [new HtmlWebpackPlugin({
			template: './client/index.html'
	}
	)
	],
	module: {
			rules: [
					{
						test: /\.jsx?$/,
						exclude: /node_modules/,
						use: {
							loader: 'babel-loader',
							options: {
								presets: [
									['@babel/preset-env', {targets: "defaults"}],
									['@babel/preset-react', {targets: "defaults"}]
								]
							}
						}
					},
					{
						test: /\.s?css$/,
						exclude: /node_modules/,
						use: [
							'style-loader',
							'css-loader',
							'sass-loader'
						]
					}
			]
	},
	resolve: {
		extensions: ['.js', '.jsx']
	}
	}