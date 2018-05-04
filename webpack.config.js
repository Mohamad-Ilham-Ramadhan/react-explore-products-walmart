const webpack = require('webpack'); 
const merge = require('webpack-merge');
const path = require('path');
const glob = require('glob');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// parts config
const parts = require('./webpack.parts');

const PATHS = {
	app: path.join(__dirname, 'app'),
	build: path.join(__dirname, 'build')
}

const common = merge([
	{
		entry: {
			app: PATHS.app,
		},
		output: {
			path: PATHS.build,
			filename: '[name].js',
		},
		resolve: {
			extensions: ['*', '.js', '.jsx']
		},
		plugins: [
			new HtmlWebpackPlugin({
				title: 'explore products Walmart',
				template: require('html-webpack-template'),
				inject: false, // remove duplicates css tags and script tags
				appMountId: 'app'
			}),
			new webpack.ProvidePlugin({
				$: 'jquery',
				jQuery: 'jquery'
			}),
			new webpack.HotModuleReplacementPlugin()
		]
	},
]);

const development = merge([
	parts.loadJS(),
	parts.loadSCSS(),
	parts.devServer()
]);

const production = merge([
	// parts.clean( PATHS.build ),
	parts.loadJS(),
	parts.extractSCSS(),
	// Ngebug bootstrap
	// parts.purifyCSS( {
	// 	paths: glob.sync(`${PATHS.app}/**/*.js`, { nodir: true} )
	// } )
]);

module.exports = mode => {
	if ( mode === "production" ) {
		return merge( common, production, { mode });
	}

	return merge( common, development, { mode });
}