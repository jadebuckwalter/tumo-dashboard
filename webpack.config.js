const path = require("path");
const entryFile = path.resolve(__dirname, "client", "src", "index.tsx");
const outputDir = path.resolve(__dirname, "client", "dist");

module.exports = {
	mode: "development",
  	entry: {
		app: entryFile,
	},
  	output: {
		path: outputDir,
		publicPath: "/",
		filename: "bundle.js",
  	},
	devtool: "inline-source-map",
	module: {
    	rules: [
      		{
				test: /\.(js|jsx|ts|tsx)?$/,
				loader: "babel-loader",
				exclude: /node_modules/,
			},
			{
				test: /\.(scss|css)$/,
				use: ["style-loader", "css-loader", "postcss-loader"],
			},
      		{
				test: /\.(png|svg|jpg|gif)$/,
				use: [
					{
						loader: "url-loader",
					},
				],
			},
		],
  	},
	resolve: {
		extensions: [".*", ".js", ".jsx", ".ts", ".tsx"],
	},
	devServer: {
		historyApiFallback: true,
		static: "./client/dist",
		proxy: [{
			context: ["/api"],
			target: "http://localhost:3000"
		}],
	},
};