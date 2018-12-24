import path from "path";
import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";

const config: webpack.Configuration = {
    entry: path.resolve(__dirname, "src/index.tsx"),
    output: {
        path: path.resolve(__dirname, "dist"),
        chunkFilename: 'js/[name].[hash:5].js',
        filename: "js/[name].[hash:5].js"
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", "jsx"]
    },
    module: {
        rules: [
            { test: /\.tsx?$/, loader: "ts-loader" },
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
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "public/index.html",
            favicon: 'public/favicon.ico'
        })
    ]
};

export default config;
