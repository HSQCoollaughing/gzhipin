# 2018-12-19
## 项目描述
![Image text](https://m.qpic.cn/psb?/V14221aQ3M7XeB/fTDmFRLq92KATlMX3QA*fABRDOPmHINVGNbB5nMcK68!/b/dL8AAAAAAAAA&bo=lQIjAZUCIwEDCSw!&rf=viewer_4)

## 技术选型
![Image text](https://m.qpic.cn/psb?/V14221aQ3M7XeB/Qj5C.AjQGGubm.mF8bsnVUXshLq.MvwqbxAyW9by8Tw!/b/dFQBAAAAAAAA&bo=LAMrAiwDKwIDCSw!&rf=viewer_4)

## 项目源码目录设计
![Image text](https://m.qpic.cn/psb?/V14221aQ3M7XeB/idyh9N5WcUhHRxcVgqz6BAjfb4N8Rqc31xBe0Gvfalk!/b/dL8AAAAAAAAA&bo=WALhAVgC4QEDCSw!&rf=viewer_4)

## 引入antd-mobile(UI组件库)
* npm install antd-mobile --save
* 解决移动端点击300ms延迟问题。https://blog.csdn.net/qq_36742720/article/details/85099416

## 实现按需引用组件
* npm install --save-dev babel-plugin-import react-app-rewired
* 安装好了之后，需修改package.json，然后还要再项目的根目录添加一个config-overrides.js文件。详情请看：https://www.jianshu.com/p/93946e0cbc9e

## 引入路由
* npm install --save react-router-dom
* 创建了login、register、main组件，并配置了路由
* Switch是用于展示非同时显示的路由组件，可以进行组件间的切换

## 引入redux
* npm install --save redux@3.7.2 react-redux redux-thunk
* npm install --save-dev redux-devtools-extension
* 创建redux文件夹下的各个js文件，并写上相关代码
* 在index.js中引入redux

## 封装登录、注册中的logo组件
* 在components中创建logo文件夹，并创建logo.jsx文件
* 在logo.jsx文件中创建组件时，应该用function创建组件而不是class，因为这个组件是一个非常简单的组件，不涉及到store数据
* 创建logo.less作为logo组件的内部样式。在logo.jsx中 import './logo.less'引入

## 封装注册register组件
* 按需导入了antd-moblie中的组件，写好了register组件。一点都不用自己去写样式
* 定义点击事件...  文本框内容改变事件  路由跳转  this.props.history.replace('/login') //会替换掉原来的页面，你回不去原来的了

# 2018-12-20
## node.js+MongoDB后台接口跳过，后面有时间可以回来学习

## ajax
* 下载axios    npm install --save axios

# 2018-12-23
## 在api目录下，新建ajax.js。使用axios封装了一个ajax方法，用于发ajax请求

## 在api目录下，新建index.js。封装各个请求接口

## 在redux目录下，封装各个js

# 2018-12-25
## 请求跨域问题解决，解决方式：配置代理
* 配置ajax请求的代理：package.json
* "proxy":"http://localhost:4000"  (请求时请求的是 http://localhost:3000(也就是跟当前网站运行的域名端口不变，所以也就自然不会跨域)    配置了此项代理之后，代理会帮我们转发到http://localhost:4000)



