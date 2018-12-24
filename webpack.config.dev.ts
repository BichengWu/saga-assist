import webpack from "webpack";
import WebpackDevServer from "webpack-dev-server";
import merge from "webpack-merge";
import common from "./webpack.common";

const config: webpack.Configuration & WebpackDevServer.Configuration = merge(common, {
	mode: "development",
	devtool: "inline-source-map",
	devServer: {
		open: true,
	},
	module: {
		rules: [
			{
				test: /\.(css|less)$/,
				use: ["style-loader", "css-loader", "less-loader"]
			}
		]
	}
});

export default config;
