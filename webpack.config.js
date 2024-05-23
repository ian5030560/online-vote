const path = require('path');
const fs = require('fs');

const dir = path.resolve(__dirname, "static", "js");
let entry = (() => {
  const files = fs.readdirSync(dir).filter(item => {
    const filePath = path.resolve(dir, item);
    const stat = fs.statSync(filePath);
    return stat.isFile();
  });

  let obj = {};
  for (let file of files) {
    let [_, ...name] = file.split(".").reverse();
    let fileName = name.reverse().join("_");
    obj[fileName] = path.resolve(dir, file);
  }

  return obj;
})()

module.exports = {
  entry: entry,
  mode: "development",
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

  cache: true,
  devServer: {
    port: 4001,
    hot: true,
    static: "static/js"
  }
};