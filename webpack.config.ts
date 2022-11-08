import ESLintPlugin from 'eslint-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import path from 'path'
import webpack from 'webpack'

const isProd = process.env.REACT_APP_NODE_ENV === 'production'

const config = {
  mode: isProd ? 'production' : 'development',
  output: {
    path: path.resolve(__dirname, './build'),
    filename: '[name].bundle.js',
  },
  entry: './src/index.tsx',
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      '@app': path.resolve(__dirname, './src/app'),
      '@components': path.resolve(__dirname, './src/views/components'),
      '@containers': path.resolve(__dirname, './src/views/containers'),
      '@utils': path.resolve(__dirname, './src/utils'),
      '@hooks': path.resolve(__dirname, './src/hooks'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/i,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react',
              '@babel/preset-typescript',
            ],
          },
        },
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.(s(a|c)ss)$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.m?js/,
        type: "javascript/auto",
      },
      {
        test: /\.m?js/,
        resolve: {
          fullySpecified: false,
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
    }),
    new ESLintPlugin({
      extensions: ['js', 'jsx', 'ts', 'tsx'],
    }),
    new webpack.ProvidePlugin({
      process: 'process/browser',
    }),
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(process.env),
    }),
    new MiniCssExtractPlugin({
      ignoreOrder: true,
    }),
  ],
  devtool: isProd ? 'hidden-source-map' : 'inline-source-map',
  devServer: {},
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  performance: {
    hints: false,
  },
}

if (!isProd) {
  config.devServer = {
    static: path.join(__dirname, 'build'),
    historyApiFallback: true,
    port: 3002,
    open: true,
    hot: true,
  }
}

module.exports = config
