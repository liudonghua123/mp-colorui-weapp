/* eslint-disable import/no-commonjs */
// babel-preset-taro 更多选项和默认值：
// https://github.com/NervJS/taro/blob/next/packages/babel-preset-taro/README.md

const plugins = [
  ["module-resolver", {
    "root": ["./src"],
    alias: {
      'mp-colorui': '@liudonghua123/mp-colorui',
    },
  }]
];

module.exports = {
  presets: [
    ['taro', {
      framework: 'react',
      ts: false
    }]
  ],
  "env": {
    "development": {
      plugins
    },
    "production": {
      plugins
    }
  }
}
