const childProcess = require('child_process')
const path = require('path')

const filePath = {
  service: path.join(__dirname, '../service'),
  vue2: path.join(__dirname, '../vue2'),
  // todo 打开
  // vue3: path.join(__dirname, '../vue3'),
  react15: path.join(__dirname, '../react15'),
  react16: path.join(__dirname, '../react16'),
  main: path.join(__dirname, '../main')
}
// cd 子应用的目录 npm start 启动项目
function runChild () {
  Object.values(filePath).forEach(item => {
    childProcess.spawn(`cd ${item} && npm start`, { stdio: "inherit", shell: true })
  })
}
// cd 子应用的目录 删除node_modules
// function uninstallChildModules () {
//   Object.values(filePath).forEach(item => {
//     childProcess.spawn(`cd ${item} && rm -rf node_modules`, { stdio: "inherit", shell: true })
//   })
// }
function uninstallChildModules () {
  Object.values(filePath).forEach(item => {
    childProcess.spawn(`cd ${item} && npm un node-sass`, { stdio: "inherit", shell: true })
  })
}
// npm install --save -dev sass
// 安装子应用项目依赖
// function installChild () {
//   Object.values(filePath).forEach(item => {
//     // childProcess.spawn(`cd ${item} && npm i`, { stdio: "inherit", shell: true })
//     childProcess.spawn(`cd ${item} && npm i --legacy-peer-deps`, { stdio: "inherit", shell: true })
//   })
// }

function installChild () {
  Object.values(filePath).forEach(item => {
    childProcess.spawn(`cd ${item} && npm install sass -D --legacy-peer-deps`, { stdio: "inherit", shell: true })
  })
}
// installChild()
// runChild()
uninstallChildModules()
