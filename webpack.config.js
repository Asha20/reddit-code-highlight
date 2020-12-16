/* eslint-env node */
/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");
const { DefinePlugin } = require("webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

const babelOptions = {
	presets: [
		["@babel/preset-env", { targets: "defaults" }],
		["@babel/preset-typescript"],
	],
};

module.exports = function (_, argv) {
	const production = argv.mode === "production";

	return {
		context: path.resolve(__dirname),
		stats: production ? "normal" : "minimal",
		mode: production ? "production" : "development",
		entry: {
			"content_scripts/index": "./src/content_scripts/index.ts",
		},
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

			new CopyWebpackPlugin({
				patterns: [
					{ from: "src/manifest.json", to: "manifest.json" },
					{ from: "src/vendor/prism.css", to: "vendor/prism.css" },
					{
						from: "src/content_scripts/index.css",
						to: "content_scripts/index.css",
					},
					{ from: "src/assets", to: "assets" },
				],
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
