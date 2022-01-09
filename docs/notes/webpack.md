# webpack

## 安装 webpack

```bash
yarn add webpack webpack-cli -D
```

## 使用 webpack

在项目的 package.json 文件中，加入以下配置：

```json
{
  "scripts": {
    "build": "webpack"
  }
}
```

新建 src/add/add.js - 定义求和函数导出

```javascript
export const addFn = (a, b) => a + b;
```

新建 src/index.js 导入使用

```javascript
import { addFn } from "./add/add";

console.log(addFn(10, 20));
```

然后终端中运行命令：

```bash
yarn build
```

## webpack 配置

```javascript
const path = require("path");

module.exports = {
  entry: "./src/index.js", //入口
  output: {
    //输出
    path: path.resolve(__dirname, "dist"), //输出位置
    filename: "bundle.js", //文件名
  },
};
```

## 自动生成 html 文件

安装 HtmlWebpackPlugin 插件

```bash
yarn add html-webpack-plugin -D
```

在 webpack.config.js 文件中引入并使用

```javascript
// 引入自动生成 html 的插件
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  // ...省略其他代码
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html", // 以此为基准生成打包后html文件
    }),
  ],
};
```

重新打包

## 加载 css 文件

安装 css-loader 和 style-loader，

```bash
yarn add css-loader style-loader -D
```

css-loader 的作用是在 js 文件中加载 css 文件，style-loader 的作用是将 css 样式插入到 DOM 中。

修改 webpack.config.js

```javascript
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  // ...其他代码
  module: {
    rules: [
      // loader的规则
      {
        test: /\.css$/, // 匹配所有的css文件
        // use数组里从右向左运行
        // 先用 css-loader 让webpack能够识别 css 文件的内容并打包
        // 再用 style-loader 将样式, 把css插入到dom中
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
```

修改 index.js

```javascript
import "./css/index.css";
```

重新打包

## 加载 less 文件

安装 less、less-loader

```bash
yarn add less less-loader -D
```

修改 webpack.config.js

```javascript
module: {
  rules: [
    // loader的规则
    // ...省略其他
    {
      test: /\.less$/,
      // 使用less-loader, 让webpack处理less文件, 内置还会用less翻译less代码成css内容
      use: ["style-loader", "css-loader", "less-loader"],
    },
  ];
}
```

## 加载图片资源

修改webpack.config.js (webpack5版本)

```javascript
module: {
  rules: [
    // loader的规则
    // ...省略其他
   {
    test: /\.(png|jpg|gif|jpeg)$/i,
    type: 'asset'
   }
  ];
}
```

## 加载字体图标

修改webpack.config.js

```javascript
{ // webpack5默认内部不认识这些文件, 所以当做静态资源直接输出即可
    test: /\.(eot|svg|ttf|woff|woff2)$/,
    type: 'asset/resource',
    generator: {
    	filename: 'font/[name].[hash:6][ext]'
    }
}
```

在main.js引入iconfont.css

```javascript
// 引入字体图标文件
import './assets/fonts/iconfont.css'
```

在public/index.html使用字体图标样式

```html
<i class="iconfont icon-weixin"></i>
```
