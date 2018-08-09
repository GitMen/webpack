# bulid目录下文件说明
用于不同环境打包配置，已配置的环境有,对应的编译命令在package.json文件中
- local: 用于本地测试，无打包配置 eg: npm run project
- dev:   研发环境的打包配置 npm run bdp
- test:  测试环境的打包配置 npm run btp
- prod:  正式环境的打包配置 npm run bpp

> 解释：bdp 意思是 bulid dev project, project 是src/pages/project


## 需要自行修改的文件
- webpack.local.conf.js
- webpack.dev.conf.js
- webpack.test.conf.js
- webpack.prod.conf.js

以上配置文件中需要修改如下代码如下


```
    new webpack.DefinePlugin({
        'process.env': env,
        'process.api': '"https://xxx.xxx.com"',
    })
```

修改`https://xxx.xxx.com`为自己业务后台的不同环境api域名




