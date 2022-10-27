# 暂不能用，勿看

## 安装
打开 build/run.js中间中的installChild方法，执行下方命令，安装子应用依赖
`node ./build/run.js 1`

## 启动后端服务
```shell
cd service
npm i
npm start
```
## 启动前端项目
```shell
# 根目录下
npm start 正常启动
npm start-f 强制刷新依赖并启动
```

## 项目结构

- main 主项目。

## 子项目分类
- vue2子应用[http://localhost:9004]
- vue3子应用[http://localhost:9005]
- react15子应用
- react16子应用 [http://localhost:9003/#/rank]
- react16子应用 [http://localhost:9003/#/new-car]
- react16子应用 [http://localhost:9003/#/login] 报错
- service 服务端
- platform 发布平台
