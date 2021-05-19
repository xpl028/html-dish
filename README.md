# html-dish

[![npm](https://img.shields.io/npm/v/html-dish.svg)](https://www.npmjs.com/package/html-dish)
[![npm](https://img.shields.io/npm/dt/html-dish.svg)](https://www.npmjs.com/package/html-dish)

- 一个react小组件
- 渲染带有html标签的富文本、转义字符等，使其在页面正常展示
- 使用简单、方便

## 属性

| Property      | Type     | Default | Description                              |
| :------------ | :------- | :------ | :--------------------------------------- |
| type          | string   |         | html标签，如：'span'、'div'等               |
| html          | String   |         | 需要渲染的内容                              |


## 快速使用

### 安装

```shell
npm add digital-keyboard --dev
```

### 使用示例

```jsx
import React from 'react';
import HtmlDish from 'html-dish';

function Dish() {
  return (
    <HtmlDish type="div" html={`<span style="color: red">html-dish</span>`} />
  )
}
```
