**@ftsukic/utils**

***

<p align="center">
  <img alt="logo" src="https://avatars.githubusercontent.com/u/96568061?s=200&v=4" width="120" height="120" style="margin-bottom: 10px;">
</p>

<h1 align="center">@ftsukic/utils</h1>

<p align="center">日常工作中常用的工具函数</p>

<p align="center">
  <a href="https://www.npmjs.org/package/@ftsukic/utils">
     <img src="https://img.shields.io/npm/v/@ftsukic/utils.svg" alt="npm version" />
  </a>
  <a href="https://npmcharts.com/compare/@ftsukic/utils">
    <img src="https://img.shields.io/npm/dm/@ftsukic/utils.svg">
  </a>
</p>

## 持续更新中

## 使用

- 安装
```shell
npm install @ftsukic/utils

# or
yarn add @ftsukic/utils
```

- 引入
```js
import { debounce } from '@ftsukic/utils'
```

## 详情 API 文档

[点我查看](_media/globals.md)

## 注意事项

```json
{
  "exports": {
     ".": {
      "import": "./es/index.js",
      "require": "./lib/index.cjs"
    },
    "./*": "./*"
  },
  "main": "lib/index.cjs",
  "module": "es/index.js",
  "types": "es/index.d.ts",
  "typesVersions": {
    "*": {
      "*": [
        "./lib/*",
        "./es/*",
        "./*"
      ]
    }
  },
}
```
