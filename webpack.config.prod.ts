import path from "path";
import webpack from "webpack";
import CleanWebpackPlugin from "clean-webpack-plugin";

const config: webpack.Configuration = {
	target: "node",
	mode: "production",
	devtool: "source-map",
	entry: path.resolve(__dirname, "lib/index.ts"),
    output: {
        path: path.resolve(__dirname, "dist"),
        chunkFilename: '[name].js',
        filename: "[name].js"
    },
	resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx", "json"],
    },
	module: {
		rules: [
			{ test: /\.tsx?$/, loader: "awesome-typescript-loader" },
		]
	},
	plugins: [
		new CleanWebpackPlugin(["dist"]),
	]
};

export default config;
