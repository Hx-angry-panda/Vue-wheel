# 自制 Vue UI 组件
[![Build Status](https://travis-ci.org/Hx-angry-panda/Vue-wheel.svg?branch=master)](https://travis-ci.org/Hx-angry-panda/Vue-wheel)
## 介绍

## 开始使用

1. 添加 CSS 样式
    使用本组件前，请在 CSS 中开启 border-box
    ```
    *,*::before,*::after{box-sizing: border-box;}
    ```
    IE 15 及以上的浏览器都支持此样式。
    
    你还需要设置默认颜色等变量（后续会改为 SCSS 变量）
    ```
    :root{
        --button-height: 32px;
        --font-size: 14px;
        --button-bg: white;
        --button-active-bg: #eee;
        --border-radius: 4px;
        --color: #333;
        --border-color: #999;
        --border-color-hover: #666;
    }
    ```
    IE 15 及以上的浏览器都支持此样式。

2. 安装
    ```
    npm install panda-ui-demo-1
    ```
3. 引入
    ```
    import {Button, ButtonGroup, Icon} from 'panda-ui-demo-1'
    import 'panda-ui-demo-1/dist/index.css'
    
    export default {
      name: 'app',
      components: {
        HelloWorld,
        'g-button': Button,
        'g-button-group': ButtonGroup,
        'g-icon': Icon
      }
    }   
    ```

## 文档

## 提问

## 变更记录

## 联系方式

## 贡献代码