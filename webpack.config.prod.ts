import webpack from "webpack";
import merge from "webpack-merge";
import CleanWebpackPlugin from "clean-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import autoprefixer from "autoprefixer";

import common from "./webpack.common";

const config: webpack.Configuration = merge(common, {
	mode: "production",
	devtool: "source-map",
	module: {
		rules: [
			{
				test: /\.(css|less)$/,
				use: [
					MiniCssExtractPlugin.loader,
					{
						loader: "css-loader",
                        options: {
                            importLoaders: 1 
                        }
					},
					{
						loader: "postcss-loader",
						options: {
							ident: "postcss",
							plugins: () => [
								autoprefixer({
									browsers: [
										">1%",
										"last 4 versions",
										"Firefox ESR",
										"not ie < 9"
									],
									flexbox: "no-2009"
                                }),
                                require("cssnano")(),
							]
						}
					},
					"less-loader"
				]
			}
		]
	},
	plugins: [
		new CleanWebpackPlugin(["dist"]),
		new MiniCssExtractPlugin({
			filename: "css/[name]-[hash:5].css",
			chunkFilename: "css/[id].css"
		})
	]
});

export default config;
