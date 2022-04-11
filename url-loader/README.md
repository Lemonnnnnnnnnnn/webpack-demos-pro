[url-loader](https://www.npmjs.com/package/url-loader)将文件转化为html标签

### 参数

**limit**： 
-   如果为**布尔值**：表示是否转换为base64格式
-   如果时**数字或字符串**： 如果大于限制大小，调用`file-loader`查找图片；若小于，转为base64格式

关于file-loader: 解析```import/require()```并转化为url地址输出到output文件夹

**[mimetype]**:
默认基于[mime-types](https://github.com/jshttp/mime-types)，根据文件名称判断文件类型
-   如果设为false，默认文件类型为`text/plain;charset=US-ASCII`
-   如果为字符串，则表示以什么类型来读取文件，如`mimetype: 'image/png',`

**encoding**:
默认为**base64**编码
-    支持参数：["utf8","utf16le","latin1","base64","hex","ascii","binary","ucs2"].

**generator**:
如何产生最终的url名
官方例子：
```
generator: (content, mimetype, encoding, resourcePath) => {
                if (/\.html$/i.test(resourcePath)) {
                  return `data:${mimetype},${content.toString()}`;
                }
 
                return `data:${mimetype}${
                  encoding ? `;${encoding}` : ''
                },${content.toString(encoding)}`;
              },
```

**fallback**:
默认使用**file-loader**， 当limit大于指定数值后选用什么加载器

**esModule**
默认使用esModule,如果要采用`CommonJS module`，将值设为false

### 关于svg
不要用base64编码，有更有效的编码
用` mini-svg-data-uri `,[例子](https://css-tricks.com/probably-dont-base64-svg/)
例：
```
module.exports = {
  module: {
    rules: [
      {
        test: /\.svg$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              generator: (content) => svgToMiniDataURI(content.toString()),
            },
          },
        ],
      },
    ],
  },
};
```


