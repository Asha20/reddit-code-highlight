/* eslint-env node */
/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");
const { DefinePlugin } = require("webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

const babelOptions = {
	presets: [
		[
			"@babel/preset-env",
			{ targets: "defaults", useBuiltIns: "usage", corejs: 3 },
		],
		["@babel/preset-typescript"],
	],
};

module.exports = function (_, argv) {
	const production = argv.mode === "production";

	return {
		context: path.resolve(__dirname),
		stats: production ? "normal" : "minimal",
		mode: production ? "production" : "development",
		entry: "./src/main.ts",
		output: {
			path: path.resolve(__dirname, "dist"),
			filename: "[name].js",
		},

		resolve: {
			extensions: [".js", ".ts"],
		},

		module: {
			rules: [
				{
					test: /\.ts$/,
					loader: "babel-loader",
					exclude: /node_modules/,
					options: babelOptions,
				},
			],
		},

		plugins: [
			new DefinePlugin({
				PRODUCTION: JSON.stringify(production),
			}),
			new ForkTsCheckerWebpackPlugin({
				typescript: {
					diagnosticOptions: {
						semantic: true,
						syntactic: true,
					},
				},
			}),

			production && new CleanWebpackPlugin(),
		].filter(Boolean),
	};
};
