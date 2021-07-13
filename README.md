# Vue3 + vite + vuex + vue-router + axios + ElementPlus

整合vite按需引入elementPlus，未整合webpack，参考文档：[element-plus.org](https://element-plus.org/#/zh-CN/component/quickstart)

项目为vue-cli初始化，故可以使用webpack的功能，但推荐vite运行和打包

全局变量(src/config)目前没有兼容处理，只能手动切换(vite与webpack不同)

项目使用装饰器混合开发模式，可以class形式开发页面和组件

已整合Gzip打包压缩

## vite start
```
yarn dev
```
## vite build
```
yarn v-build
```
## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
