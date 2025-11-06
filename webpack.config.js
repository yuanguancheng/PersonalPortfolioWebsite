// webpack.config.js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production';
  // 获取仓库名称，用于GitHub Pages部署
  const repoName = process.env.REPO_NAME || 'PersonalPortfolioWebsite'; // 替换为您的仓库名
  return {
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: isProduction ? '[name].[contenthash].js' : 'bundle.js',
      clean: true,
      // GitHub Pages需要特定的publicPath
      publicPath: isProduction ? `/${repoName}/` : '/',
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                ['@babel/preset-env', {
                  targets: 'defaults',
                  modules: false,
                  useBuiltIns: 'usage',
                  corejs: 3
                }],
                '@babel/preset-react'
              ]
            }
          }
        },
        {
          test: /\.css$/,
          use: [
            isProduction ? 'style-loader' : 'style-loader',
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1,
                sourceMap: !isProduction
              }
            }
          ]
        },
        // 图片和字体优化
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: 'asset/resource',
          generator: {
            filename: 'images/[name].[hash][ext]'
          }
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/i,
          type: 'asset/resource',
          generator: {
            filename: 'fonts/[name].[hash][ext]'
          }
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './public/index.html',
        minify: isProduction ? {
          removeComments: true,
          collapseWhitespace: true,
          removeRedundantAttributes: true,
          useShortDoctype: true,
          removeEmptyAttributes: true,
          removeStyleLinkTypeAttributes: true,
          keepClosingSlash: true,
          minifyJS: true,
          minifyCSS: true,
          minifyURLs: true,
        } : false
      }),
      // 复制public目录下的静态文件到dist目录
      ...(isProduction ? [
        new CopyWebpackPlugin({
          patterns: [
            {
              from: 'public/images',
              to: 'images',
              noErrorOnMissing: true,
            },
          ],
        })
      ] : [])
    ],
    // 生产环境优化
    optimization: isProduction ? {
      usedExports: true,
      sideEffects: false,
      splitChunks: {
        chunks: 'all',
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
          },
        },
      },
    } : {},
    devServer: {
      static: path.join(__dirname, 'dist'),
      port: 3000,
      hot: true,
      historyApiFallback: true,
    },
    resolve: {
      extensions: ['.js', '.jsx']
    },
    // 生产环境不生成source map
    devtool: isProduction ? false : 'eval-source-map'
  };
};
