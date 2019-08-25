const path = require("path");

module.exports = {
  // webpack 4 からは必須
  // 'production' | 'development' | 'none'
  mode: "development",
  // メインとなるファイル
  entry: "./index.js",
  // 出力に関する設定
  output: {
    // 出力先のディレクトリ
    path: path.resolve(__dirname, "dist/js"),
    // 出力ファイル名
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        // 対象ファイル
        test: /\.js$/,
        // 除外するディレクトリ
        exclude: /node_modules/,
        use: [
          {
            // 利用するローダー
            loader: "babel-loader",
            options: {
              babelrc: false,
              presets: [
                [
                  "@babel/preset-env",
                  {
                    modules: false,
                    useBuiltIns: "usage"
                  }
                ]
              ]
            }
          }
        ]
      }
    ]
  }
};
