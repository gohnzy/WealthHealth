module.exports = {
	babel: {
		presets: ['@babel/preset-react'],
	},
	webpack: {
		configure: webpackConfig => {
			webpackConfig.module.rules.push({
				test: /\.js$/,
				include: /node_modules\/react-version-datatables-by-gna/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-react'],
					},
				},
			});
			return webpackConfig;
		},
	},
};
