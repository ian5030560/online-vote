const path = require('path');

module.exports = {
  entry: {
    create: "./static/js/Create/index.ts",
    home: "./static/js/Home/index.ts",
    record: "./static/js/Record/index.ts"
  },
  module: {
    rules: [
        {
            test: /\.ts$/,
            use: "ts-loader",
            include: [
              path.resolve(__dirname, "static/js"),
              path.resolve(__dirname, "static/js/**"),
            ]
        }
    ]
  },
  resolve: {
    extensions: [".ts", ".js"]
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'static', "dist"),
  },
};