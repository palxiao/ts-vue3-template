# Vue3 + vite + vuex + vue-router + axios + vantUI + postCss

需注意vant3部分组件与2不兼容 [UI by youzan Vant](https://youzan.github.io/vant/v3/#/zh-CN/button)

- 切换分支查看其他模板

- 项目为vue-cli初始化，故可以使用webpack的功能，但推荐vite运行和打包

- 全局变量(src/config)目前没有兼容处理，只能手动切换(vite与webpack不同)

- 项目整合装饰器混合开发模式，可以class形式开发页面和组件

- 整合Gzip打包压缩

- 整合 postCss to viewport 移动端适配

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
