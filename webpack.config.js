var webpack = require("webpack");
var path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	cache: false,
	context: __dirname,
	devtool: 'source-map',
	entry: path.resolve(__dirname,'./client/index.module.js'),
	output : {
		filename: '[name].bundle.js',
		publicPath: './',
		path: path.resolve(__dirname, 'dist')
	},
	module: {
		loaders: [
			{test: /\.js$/, exclude: [/dist|node_modules/], loader: 'babel-loader', query:{presets: ['es2015']} },
			{test: /\.html$/,use:{loader: 'html-loader',options: { attrs: [':data-src']}} }
			//{test: /\.(scss|sass)$/, exclude: [/dist/, /node_modules/], loader: "style!css!sass"},
			// {test: /\.scss$/, exclude: [/dist/, /node_modules/], loader: "sass-loader"}
			
		],
		rules: [{
		        test: /\.scss$/,
		        loaders: ['style-loader','css-loader','sass-loader']
		    }]
	},

	plugins: [
		new HtmlWebpackPlugin({
			template: './client/index.html',
			inject: 'body',
			hash: true
		}),
		new webpack.optimize.CommonsChunkPlugin({
			name: 'vendor',
			minChunks: function(module, count){
				// console.log(module.resource);
				return module.resource && module.resource.indexOf(path.resolve(__dirname, 'node_modules')) == -1;
			}
		})
	]
}