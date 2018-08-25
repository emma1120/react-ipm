####  介绍
```
   技术栈 react + redux + antd  移动端小demo
```
####  创建项目
```
create-react-app
npm run eject 
```
####  修改webpack 配置
 需要抽空 阅读 官网讲解 create-react-app
```
//1 简化路径  通过webpackpe配置     https://www.jianshu.com/p/e09b2c57cf20
import ** from   '@/**/'

修改 alias

/*
  添加scss    
 npm install sass-loader node-sass --save-dev
*/
```
####  react相关知识点
官方文档https://reactjs.org/
react核心 vitural DOM   Diff 算法

阮一峰老师的编写的教程http://www.ruanyifeng.com/blog/2015/03/react.html

```
react view层语法注意点 class 要写成className；变量用{} 包裹
组件间数据传递  ： props
组件内： state列表渲染 需要key

```
难点Redux  阮一峰老师的编写的教程http://www.ruanyifeng.com/blog/2016/09/redux_tutorial_part_one_basic_usages.html
           　官网https://redux.js.org/
```
dispatch action reducer state 单边数据流
```

####  react-router
https://github.com/ReactTraining/react-router
https://segmentfault.com/a/1190000010174260
https://segmentfault.com/a/1190000014294604
注意 react4  与 react 3 的不同点

