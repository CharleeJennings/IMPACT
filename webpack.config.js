var path = require("path");
var webpack = require("webpack");
var nodeExternals = require("webpack-node-externals");
var extendRequire = require("isomorphic-loader/lib/extend-require");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

var browserConfig = {
	mode: process.env.NODE_ENV || "development",
	entry: "./src/client/index.js",
	output: {
		path: path.resolve(__dirname, "public"),
		filename: "client.js",
		publicPath: "/",
	},
	module: {
		rules: [
			{
				test: /\.mjs$/,
				include: /node_modules/,
				type: "javascript/auto",
			},
			{
				test: /\.(jsx?)$/,
				exclude: /(node_modules)/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["@babel/preset-env"],
						plugins: ["@babel/plugin-proposal-object-rest-spread"],
					},
				},
			},
			{
				test: /\.(gif|png|jpe?g|svg)$/i,
				use: [
					"file-loader",
					{
						loader: "image-webpack-loader",
						options: {
							bypassOnDebug: true, // webpack@1.x
							disable: true, // webpack@2.x and newer
							publicPath: "/images",
						},
					},
				],
			},
			{
				test: /\.(woff|woff2|eot|ttf)$/i,
				loader: "file-loader?name=fonts/[name]-[hash].[ext]",
			},
			{
				test: /\.css$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
					},
					"css-loader",
				],
			},
		],
	},
	plugins: [
		new webpack.DefinePlugin({
			__isBrowser__: "true",
		}),
		new MiniCssExtractPlugin({
			// Options similar to the same options in webpackOptions.output
			// both options are optional
			filename: "./[name].css",
			chunkFilename: "[id].css",
		}),
	],
};

var serverConfig = {
	//
	// Proxy request to server from React Router to Express
	devServer: {
		proxy: {
			"/api": {
				target: "http://localhost:3000/api",
				secure: false,
			},
			"/login": {
				target: "http://localhost:3000/login",
				secure: false,
			},
			"/": {},
		},
	},
	mode: process.env.NODE_ENV || "development",
	entry: ["@babel/polyfill", "./src/server/index.js"],
	target: "node",
	externals: [nodeExternals()],
	output: {
		path: path.resolve(__dirname, "functions"),
		filename: "server.js",
		publicPath: "/",
	},
	module: {
		rules: [
			{test: /\.(jsx?)$/, loader: "babel-loader", exclude: /(node_modules)/},

			{
				test: /\.css$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
					},
					"css-loader",
				],
			},
			{
				test: /\.(gif|png|jpe?g|svg)$/i,
				use: "ignore-loader",
			},
		],
	},
	plugins: [
		new webpack.DefinePlugin({
			__isBrowser__: "false",
		}),
		new MiniCssExtractPlugin({
			// Options similar to the same options in webpackOptions.output
			// both options are optional
			filename: "./[name].css",
			chunkFilename: "[id].css",
		}),
	],
};

module.exports = [browserConfig, serverConfig];
