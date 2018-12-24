import path from "path";
import webpack from "webpack";
import WebpackDevServer from "webpack-dev-server";
import {TsConfigPathsPlugin} from "awesome-typescript-loader";
import HtmlWebpackPlugin from "html-webpack-plugin";

const config: webpack.Configuration & WebpackDevServer.Configuration = {
	mode: "development",
	devtool: "inline-source-map",
	entry: path.resolve(__dirname, "../test/index.tsx"),
    output: {
        path: path.resolve(__dirname, "../dist"),
        chunkFilename: 'js/[name].[hash:5].js',
        filename: "js/[name].[hash:5].js"
    },
	devServer: {
		open: true,
		disableHostCheck: true,
	},
	resolve: {
		extensions: [".ts", ".tsx", ".js", ".jsx", "json"],
        plugins: [
            new TsConfigPathsPlugin()
        ]
	},
	plugins: [
        new HtmlWebpackPlugin({
            template: "public/index.html",
            favicon: 'public/favicon.ico'
        })
    ],
	module: {
		rules: [
			{ test: /\.tsx?$/, loader: "awesome-typescript-loader" },
			{
				test: /\.(css|less)$/,
				use: ["style-loader", "css-loader", "less-loader"]
			},
			{
				test: /\.(png|jpg|jpeg|gif|svg)$/,
				use: [
					{
						loader: "url-loader",
						options: {
                            limit: 8192,
                            name: "img/[name].[ext]"
						}
					}
				]
			},
			{
				test: /\.(png|jpg|jpeg|gif|svg)$/,
				use: [
					{
						loader: "url-loader",
						options: {
                            limit: 8192,
                            name: "img/[name].[ext]"
						}
					}
				]
            },
            {
				test: /\.(woff|woff2|eot|ttf)\??.*$/,
				use: [
					{
						loader: "file-loader",
						options: {
							name: "font/[name].[ext]"
						}
					}
				]
			}
		]
	}
};

export default config;
