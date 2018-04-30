const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const PurifyCSSPlugin = require('purifycss-webpack');

exports.purifyCSS = ( { paths } ) => ({
	plugins: [new PurifyCSSPlugin( { paths } )]
})

exports.clean = path  => ({
	plugins: [new CleanWebpackPlugin([path])]
})

exports.autoprefix = () => ({
	loader: 'postcss-loader',
	options: {	
		plugins: [autoprefixer]
	}
})

exports.extractCSS = () => {
	const plugin = new ExtractTextPlugin({
		filename: '[name].css',
	});

	return {
		module: {
			rules: [
				{
					test: /\.css$/,
					use: plugin.extract({
						use: ['css-loader',
						{
							loader: 'postcss-loader',
							options: {
								plugins: [autoprefixer]
							}
						}],
						fallback: 'style-loader'
					}),
				}
			]
		},
		plugins: [plugin]
	}
}

exports.extractSCSS = () => {
	const plugin = new ExtractTextPlugin({
		filename: '[name].css',
	});

	return {
		module: {
			rules: [
				{
					test: /\.scss$/,
					use: plugin.extract({
						use: ['css-loader',
						{
							loader: 'postcss-loader',
							options: {
								plugins: [autoprefixer]
							}
						}, 'sass-loader'],
						fallback: 'style-loader'
					}),
				}
			]
		},
		plugins: [plugin]
	}
}

exports.devServer = () => ({
	devServer: {
		hot: true
	}
})

exports.loadJS = () => ({
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				use: 'babel-loader'
			}
		]
	}
})

exports.loadCSS = () => ({
	module: {
		rules: [
			{
				test: /\.(css)$/,
				use: ['style-loader', 'css-loader']
			}
		]
	}
})

exports.loadSCSS = () => ({
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: ['style-loader', 'css-loader', 'sass-loader']
			}
		]
	}
})

