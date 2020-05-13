const { resolve } = require('path')
const Dotenv = require('dotenv-webpack')

process.env.NODE_ENV = 'production'

module.exports = function (env, options) {
  return {
    mode: 'production',
    entry: './src/index.ts',
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/
        }
      ]
    },
    devtool: 'source-map',
    target: 'node',
    resolve: {
      extensions: ['.ts', '.js', '.tsx'],
      alias: {
        entities: resolve(__dirname, '../src/entities/'),
        routes: resolve(__dirname, '../src/routes/'),
        controllers: resolve(__dirname, '../src/controllers/'),
        utils: resolve(__dirname, '../src/utils/'),
        repositories: resolve(__dirname, '../src/repositories/'),
        subscribers: resolve(__dirname, '../src/subscribers/'),
        factories: resolve(__dirname, '../src/factories/'),
        seeds: resolve(__dirname, '../src/seeds/'),
        tests: resolve(__dirname, '../src/tests/')
      }
    },
    output: {
      filename: 'bundle.js',
      path: resolve(__dirname, '../dist')
    },
    plugins: [new Dotenv({ path: resolve(__dirname, '../.env') })],
    externals: {
      'pg-native': {},
      '@sap/hdbext': {},
      ioredis: {},
      mongodb: {},
      mssql: {},
      mysql2: {},
      oracledb: {},
      pg: {},
      'pg-query-stream': {},
      'react-native-sqlite-storage': {},
      'sql.js': {},
      sqlite3: {},
      'typeorm-aurora-data-api-driver': {},
      'koa-bodyparser': {},
      kcors: {},
      'koa-multer': {},
      'koa-router': {},
      koa: {}
    }
  }
}
