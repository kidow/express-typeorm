const { resolve } = require('path')

process.env.NODE_ENV = 'production'

module.exports = function (env, options) {
  console.log('env', env)
  const isEnvDevelopment = env === 'development'
  const isEnvProduction = env === 'production'
  return {
    mode: isEnvProduction ? 'production' : isEnvDevelopment ? 'development' : 'none',
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
      extensions: ['.ts', '.js']
    },
    output: {
      filename: 'bundle.js',
      path: resolve(__dirname, '../dist')
    }
  }
}
