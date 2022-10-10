const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const FaviconsWebpackPlugin = require("favicons-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const CspHtmlWebpackPlugin = require("csp-html-webpack-plugin");
const HtmlWebpackInjectPreload = require("@principalstudio/html-webpack-inject-preload");

const contentImageLoader = (test, height) => {
  return {
    test: test,
    use: [
      {
        loader: "file-loader",
        options: {
          name: "[path][name][contenthash].[ext]",
        },
      },
      {
        loader: "image-webpack-loader",
        options: {
          mozjpeg: {
            enabled: false,
          },
          optipng: {
            enabled: false,
          },
          pngquant: {
            enabled: false,
          },
          svgo: {
            enabled: false,
          },
          gifsicle: {
            enabled: false,
          },
          webp: {
            preset: "picture",
            resize: {
              width: 900,
              height: height,
            },
          },
        },
      },
    ],
  };
};

module.exports = {
  entry: path.join(__dirname, "src", "index.tsx"),
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
    filename: "main.[contenthash].js",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: "ts-loader",
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\/assets\/organizations\/.+\.(png|jp(e*)g)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[path][name][contenthash].[ext]",
            },
          },
          {
            loader: "webpack-image-resize-loader",
            options: {
              width: 150,
            },
          },
          {
            loader: "webpack-image-resize-loader",
            options: {
              height: 60,
            },
          },
        ],
      },
      contentImageLoader(/\/assets\/content\/airflow\.png$/, 381),
      contentImageLoader(/\/assets\/content\/haplotype\.png$/, 231),
      contentImageLoader(/\/assets\/content\/metaflow\.jpg$/, 281),
      contentImageLoader(/\/assets\/content\/mlops-community\.jpg$/, 900),
      contentImageLoader(/\/assets\/content\/website\.png$/, 473),
      contentImageLoader(/\/assets\/content\/whitepaper\.png$/, 649),
      {
        test: /\/assets\/me\.jpg$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[path][name][contenthash].[ext]",
            },
          },
          {
            loader: "image-webpack-loader",
            options: {
              mozjpeg: {
                enabled: false,
              },
              optipng: {
                enabled: false,
              },
              pngquant: {
                enabled: false,
              },
              svgo: {
                enabled: false,
              },
              gifsicle: {
                enabled: false,
              },
              webp: {
                crop: {
                  x: 0,
                  y: 0,
                  width: 2912,
                  height: 2912,
                },
                resize: {
                  width: 600,
                  height: 600,
                },
                preset: "photo",
              },
            },
          },
        ],
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: "@svgr/webpack",
            options: {
              typescript: true,
              dimensions: false,
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  devServer: {
    historyApiFallback: true,
  },
  plugins: [
    new FaviconsWebpackPlugin({
      logo: "assets/favicon.png",
      favicons: { background: "#000000", theme_color: "#22b391" },
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src", "index.html"),
    }),
    new CopyPlugin({
      patterns: [{ from: "gh-pages", to: "." }],
    }),
    new CspHtmlWebpackPlugin(
      {
        "script-src": "'strict-dynamic' 'unsafe-eval' https: 'unsafe-inline'",
        "base-uri": "'none'",
        "style-src": "'unsafe-inline' fonts.googleapis.com",
      },
      {
        hashEnabled: {
          "style-src": false,
        },
        nonceEnabled: {
          "style-src": false,
        },
      }
    ),
    new HtmlWebpackInjectPreload({
      files: [
        {
          match: /assets\/me.+\.jpg/,
          attributes: { as: "image" },
        },
        {
          match: /assets\/content\/whitepaper.+\.png/,
          attributes: { as: "image" },
        },
      ],
    }),
  ],
};
