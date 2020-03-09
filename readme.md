# Usage

```js
// webpack
export default {
  module: {
    rules: [
      {
        test: /\.(js|mjs|jsx|ts|tsx)$/,
        enforce: 'pre',
        use: [
          {
            loader: '@geeeger/webpack-remove-loader',
            options: {
              start: '/* remove-start */',
              end: '/* remove-end */'
            },
          },
        ],
        include: appPath,
      }
    }
}

```