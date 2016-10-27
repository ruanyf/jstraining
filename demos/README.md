# 课堂练习的操作指导

## 目录

- [Backbone](#backbone)
- [Angular](#angular)
- [Vue](#vue)
- [JSX](#jsx)
- [React 组件语法]()
- [React 组件的参数]()
- [React 组件的状态]()
- [React 组件实战]()
- [React 组件的生命周期]()
- [ReCharts](#recharts)
- [MobX](#mobx)
- [Redux](#redux)
- [Simple App]()
- [REST API]()
- [Express](#express)

## Backbone

### 实验目的

1. 理解前端框架的路由组件（`router`）的作用

### 操作步骤

1. 浏览器打开[`demos/backbone-demo/index.html`](./backbone-demo/index.html)
1. 点击页面上的链接，注意浏览器 URL 的变化
1. 仔细查看`js/main.js`的源码，看懂 Router 组件的使用方式

## Angular

### 实验目的

1. 理解 Angular 的双向绑定机制

### 操作步骤

1. 浏览器打开[`demos/angular-demo/index.html`](./angular-demo/index.html)
1. 在输入框填入内容，注意页面变化
1. 查看`index.html`的源码，理解 Angular 对 HTML 标签的增强

## Vue

### 实验目的

1. 理解 Vue 的模板与数据的双向绑定

### 操作步骤

1. 浏览器打开[`demos/vue-demo/index1.html`](./vue-demo/index1.html)
1. 在输入框填入内容，注意页面变化
1. 查看[`app1.js`](./vue-demo/app1.js)，理解 Vue 组件的基本写法

注意事项

1. [`index2.html`](./vue-demo/index2.html)是一个稍微复杂的例子，模板如何绑定数据对象的一个字段。

## JSX

### 实验目的

1. 掌握 JSX 基本语法

### 操作步骤

1. 浏览器打开`demos/jsx-demo/index.html`，仔细查看源码。

### 注意事项

1. `ReactDOM.render`方法接受两个参数：一个虚拟 DOM 节点和一个真实 DOM 节点，作用是将虚拟 DOM 挂载到真实 DOM。

### 练习

1. 修改源码，将显示文字变为 ”Hello React!“。

## React Component

实验目的

1. 掌握 React 组件的基本写法

操作步骤

1. 浏览器打开`demos/react-component-demo/index1.html`，仔细查看源码。

注意事项

1. `class MyTitle extends React.Component`是 ES6 语法，表示自定义一个`MyTitle`类，该类继承了基类`React.Component`的所有属性和方法。
1. 每个组件都必须有`render`方法，定义输出的样式。
1. `<MyTitle/>`表示生成一个组件类的实例，每个实例一定要有闭合标签，写成`<MyTilte></MyTitle>`也可。

## React 组件的参数

实验目的

1. 学会向 React 组件传参数

操作步骤

1. 浏览器打开`demos/react-component-demo/index2.html`，仔细查看源码。

注意事项

1. 组件内部通过`this.props`对象获取参数。

练习

1. 将组件的颜色，从红色（`red`）换成黄色（`yellow`）。

## React 组件的状态

实验目的

1. 学会通过状态变动，引发组件的重新渲染。

操作步骤

1. 浏览器打开`demos/react-component-demo/index3.html`，仔细查看源码。

注意事项

```javascript
  class MyTitle extends React.Component {
    constructor(...args) {
      super(...args);
      this.state = {
        name: '访问者'
      };
    }
    // ...
```

`constructor`是组件的构造函数，会在创建实例时自动调用。`...args`表示组件参数，`super(...args)`是 ES6 规定的写法。`this.state`对象用来存放内部状态，这里是定义初始状态。

```html
<div>
  <input
    type="text"
    onChange={this.handleChange.bind(this)}
  />
  <p>你好，{this.state.name}</p>
</div>;
```

`this.state.name`表示读取`this.state`的`name`属性。每当输入框有变动，就会自动调用`onChange`指定的监听函数，这里是`this.handleChange`，`.bind(this)`表示该方法内部的`this`，绑定当前组件。

```javascript
handleChange(e) {
  let name = e.target.value;
  this.setState({
    name: name
  });
}
```

`this.setState`方法用来重置`this.state`，每次调用这个方法，就会引发组件的重新渲染。

## React 组件实战

实验目的

1. 学会自己写简单的 React 组件。

操作步骤

1. 浏览器打开`demos/react-component-demo/index4.html`。
1. 点击`Hello World`，看看会发生什么。

练习

1. 修改源码，使得点击`Hello World`后，会显示当前的日期，比如`Hello 2016年1月1日`。

提示

下面的代码可以得到当前日期。

```javascript
var d = new Date();
d.getFullYear() // 当前年份
d.getMonth() + 1 // 当前月份
d.getDate() // 当前是每个月的几号
```

2. 请在上一步练习的基础上，进一步修改。

现在`Hello World`点击一次，会改变内容，再点击就不会有反应了。请将其改成，再点击一次变回原样。

提示

可以在`this.state`里面设置一个开关变量`isClicked`。

```javascript
this.state = {
  text: 'World',
  isClicked: false
};
```

然后，在`this.handleClick`方法里面，做一个`toggle`效果。

```javascript
let isClicked = !this.state.isClicked;
this.setState({
  isClicked: isClicked,
  text: isClicked ? 'Clicked' : 'World'
});
```

## React 组件的生命周期

实验目的

1. 掌握钩子方法的基本用法
1. 掌握组件如何通过 Ajax 请求获取数据，并对数据进行处理

操作步骤

1. 打开`demos/react-lifecycle-demo/index.html`，仔细查看源码。

注意事项

```javascript
componentDidMount() {
  const url = '...';
  $.getJSON(url)
    .done()
    .fail();
}
```

- `componentDidMount`方法在组件加载后执行，只执行一次。本例在这个方法里向服务器请求数据，操作结束前，组件都显示`Loading`。
- `$.getJSON`方法用于向服务器请求 JSON 数据。本例的数据从 Github API 获取，可以打开源码里面的链接，看看原始的数据结构。

练习

1. 本例的 JSON 数据是 Github 上面最受欢迎的 JavaScript 项目。请在网页上显示一个列表，列出这些项目。

提示

1. `this.state.loading`记录数据加载是否结束。只要数据请求没有结束，`this.state.loading`就一直是`true`，网页上显示`loading`。
1. `this.state.error`保存数据请求失败时的错误信息。如果请求失败，`this.state.error`就是返回的错误对象，网页上显示报错信息。
1. `this.state.data`保存从服务器获取的数据。如果请求成功，可以先用`console.log`方法，将它在控制台里打印出来，看看数据结构。

```javascript
render() {
  // 加一行打印命令，看看数据结构
  console.log(this.state.data);
  return {
  // ...
```

1. `this.state.data`里面的`this.state.data.items`应该是一个数组，保存着每个项目的具体信息。可以使用`forEach`方法进行遍历处理。

```javascript
var projects = this.state.data.items;
var results = [];
projects.forEach(p => {
  var item = <li>{p.name}</li>;
    results.push(item);
});
```

1. 然后，将上一步的`results`插入网页即可。

```javascript
<div>
  <ul>{results}</ul>
</div>
```

## ReCharts

实验目的

1. 了解如何使用第三方组件库。

操作步骤

1. 浏览器打开`demos/recharts-demo/index.html`，查看效果。

## MobX

实验目的

1. 理解 MobX 框架

操作目的

1. 命令行进入`demos/mobx-demo/`目录，执行如下的命令。

```bash
$ npm install
$ npm start
```

1. 打开浏览器，访问 http://localhost:8080，查看结果，并仔细研究代码。

注意事项

```javascript
@observer
class App extends React.Component {
  render() {
    // ...
  }
}
```

`@observer`是一种新的语法，表示对整个类执行指定的函数。

数据保存在`Store`里面。`Store`的属性分成两种：被观察的属性（`@observable`），和自动计算得到的属性`@computed`。

```javascript
class Store {
  @observable name = 'Bartek';
  @computed get decorated() {
    return `${this.name} is awesome!`;
  }
}
```

`Store`的变化由用户引发。组件观察到`Store`的变化，自动重新渲染。

```javascript
<p>
  {this.props.store.decorated}
</p>
<input
  defaultValue={this.props.store.name}
  onChange={
    (event) =>
      this.props.store.name = event.currentTarget.value
  }
/>
```

## Redux

### 实验目的

1. 理解 Redux 架构

### 操作步骤

1. 命令行下进入`demos/redux-demo`目录，执行如下的命令。

```bash
$ npm install
$ npm start
```

1. 打开浏览器，访问 http://localhost:8080，查看结果，并仔细研究代码。

### 注意事项

1. Redux 要求 UI 的渲染组件都是纯组件，即不包含任何状态（`this.state`）的组件。

```javascript
<div className="index">
  <p>{this.props.text}</p>
  <input
    defaultValue={this.props.name}
    onChange={this.props.onChange}
  />
</div>
```

1. 进行数据处理、并包含状态的组件，称为”容器组件“。Redux 使用`connect`方法，自动生成 UI 组件对应的”容器组件“。

```javascript、
// MyComponent 是纯的 UI 组件
const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(MyComponent);
```

1. `mapStateToProps`函数返回一个对象，表示一种映射关系，将 UI 组件的参数映射到`state`。

```javascript
function mapStateToProps(state) {
  return {
    text: state.text,
    name: state.name
  };
}
```

1. `mapDispatchToProps`函数也是返回一个对象，表示一种映射关系，但定义的是哪些用户的操作应该当作`Action`，传给`Store`。

```javascript
function mapDispatchToProps(dispatch) {
  return {
    onChange: (e) => dispatch({
      type: 'change',
      payload: e.target.value
    })
  }
}
```

1. `reducer`函数用来接收`action`，算出新的`state`。

```javascript
function reducer(state = {
  text: '你好，访问者',
  name: '访问者'
}, action) {
  switch (action.type) {
    case 'change':
      return {
        name: action.payload,
        text: '你好，' + action.payload
      };
  }
}
```

`Store`由 Redux 提供的`createStore`方法生成，该方法接受`reducer`作为参数。

```javascript
const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.body.appendChild(document.createElement('div'))
);
```

为了把`Store`传入组件，必须使用 Redux 提供的`Provider`组件在应用的最外面，包裹一层。

## Simple App

### 实验目的

1. 学会使用 Node 编写简单的前端应用。

### 操作步骤

1. 新建一个目录

```bash
$ mkdir simple-app-demo
$ cd simple-app-demo
```

2. 在该目录下，新建一个`package.json`文件。

```bash
$ npm init -y
```

`package.json`是项目的配置文件。

3. 安装`jquery`和`webpack`这两个模块。

```bash
$ npm install -S jquery
$ npm install -S webpack
```

打开`package.json`文件，会发现`jquery`和`webpack`都加入了`dependencies`字段，并且带有版本号。

4. 在项目根目录下，新建一个网页文件`index.html`。

```html
<html>
  <body>
    <h1>Hello World</h1>
    <script src="bundle.js"></script>
  </body>
</html>
```

5. 在项目根目录下，新建一个脚本文件`app.js`。

```javascript
const $ = require('jquery');
$('h1').css({ color: 'red'});
```

上面代码中，`require`方法是 Node 特有的模块加载命令。

6. 打开`package.json`，在`scripts`字段里面，添加一行。

```javascript
"scripts": {
  "build": "webpack app.js bundle.js",
  "test": "...."
},
```

7. 在项目根目录下，执行下面的命令，将脚本打包。

```bash
$ npm run build
```

执行完成，可以发现项目根目录下，新生成了一个文件`bundle.js`。

8. 浏览器打开`index.html`，可以发现`Hello World`变成了红色。

### 练习

1. 修改样式，将标题变为蓝色，然后重新编译生成打包文件。

## REST API

### 实验目的

1. 熟悉 REST API 的基本用法

### 操作步骤

1. 命令行进入`rest-api-demo`目录，执行下面的命令。

```bash
$ npm install -S json-server
```

2. 在项目根目录下，新建一个 JSON 文件`db.json`。

```javascript
{
  "posts": [
    { "id": 1, "title": "json-server", "author": "typicode" }
  ],
  "comments": [
    { "id": 1, "body": "some comment", "postId": 1 }
  ],
  "profile": { "name": "typicode" }
}
```

3. 打开`package.json`，在`scripts`字段添加一行。

```javascript
"scripts": {
  "server": "json-server db.json",
  "test": "..."
},
```

4. 命令行下执行下面的命令，启动服务。

```bash
$ npm run server
```

5. 打开 Chrome 浏览器的 Postman 应用。依次向`http://127.0.0.1:3000/posts`、`http://127.0.0r.1:3000/posts/1`发出`GET`请求，查看结果。

6. 向`http://127.0.0.1:3000/comments`发出`POST`请求。注意，数据体`Body`要选择`x-www-form-urlencoded`编码，然后依次添加下面两个字段。

```javascript
body: "hello world"
postId: 1
```

发出该请求后，再向`http://127.0.0.1:3000/comments`发出`GET`请求，查看结果。

7. 向`http://127.0.0.1:3000/comments/2`发出`PUT`请求，数据体`Body`要选择`x-www-form-urlencoded`编码，然后添加下面的字段。

```javascript
body: "hello react"
```

发出该请求后，再向`http://127.0.0.1:3000/comments`发出`GET`请求，查看结果。

8. 向`http://127.0.0.1:3000/comments/2`发出`delete`请求。

发出该请求后，再向`http://127.0.0.1:3000/comments`发出`GET`请求，查看结果。

## Express

### 实验目的

1. 学会 Express 搭建 Web 应用的基本用法。

### 操作步骤

1. 进入`demos/express-demo`目录，命令行执行下面的命令，安装依赖。

```bash
$ cd demos/express-demo
$ npm install
```

2. 打开`app1.js`，尝试看懂这个脚本。

```javascript
var express    = require('express');
var app        = express();
```

上面代码调用`express`，生成一个 Web 应用的实例。

```javascript
var router = express.Router();

router.get('/', function(req, res) {
  res.send('<h1>Hello World</h1>');
});

app.use('/home', router);
```

上面代码新建了一个路由对象，该对象指定访问根路由（`/`）时，返回`Hello World`。然后，将该路由加载在`/home`路径，也就是说，访问`/home`会返回`Hello World`。

`router.get`方法的第二个参数是一个回调函数，当符合指定路由的请求进来，会被这个函数处理。该函数的两个参数，`req`和`res`都是Express 内置的对象，分别表示用户的请求和 Web 服务器的回应。`res.send`方法就表示服务器回应所送出的内容。

```javascript
var port = process.env.PORT || 8080;

app.listen(port);
console.log('Magic happens on port ' + port);
```

上面代码指定了外部访问的端口，如果环境变量没有指定，则端口默认为`8080`。最后两行是启动应用，并输出一行提示文字。

3. 在命令行下，启动这个应用。

```bash
$ node app1.js
```

浏览器访问`localhost:8080/home`，看看是否输出`Hello World`。

然后，命令行下按 Ctrl + C，退出这个进程。

4. 打开`app2.js`，查看新增的那个路由。

```javascript
router.get('/:name', function(req, res) {
  res.send('<h1>Hello ' + req.params.name + '</h1>');
});
```

上面代码新增了一个路由，这个路由的路径是一个命名参数`:name`，可以从`req.params.name`拿到这个传入的参数。

在命令行下，启动这个应用。

```bash
$ node app2.js
```

浏览器访问`localhost:8080/home/张三`，看看是否输出`Hello 张三`。

然后，命令行下按 Ctrl + C，退出这个进程。

5. 打开`app3.js`，先查看页面头部新增的两行代码。

```javascript
var express    = require('express');
var app        = express();

// 新增代码...
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

// ...
```

上面代码中，`body-parser`模块的作用，是对`POST`、`PUT`、`DELETE`等 HTTP 方法的数据体进行解析。`app.use`用来将这个模块加载到当前应用。有了这两句，就可以处理`POST`、`PUT`、`DELETE`等请求了。

下面查看新增的那个路由。

```javascript
router.post('/', function (req, res) {
  var name = req.body.name;
  res.json({message: 'Hello ' + name});
});
```

上面代码表示，如果收到了`/`路径（实际上是`/home`路径）的`POST`请求，先从数据体拿到`name`字段，然后返回一段 JSON 信息。

在命令行下，启动这个应用。

```bash
$ node app3.js
```

然后，在 Chrome 浏览器的 Postman 插件里面，向`http://127.0.0.1:8080/home`发出一个`POST`请求。数据体的编码方法设为`x-www-form-urlencoded`，里面设置一个`name`字段，值可以随便取，假定设为`Alice`。也就是说，发出这样一个请求。

```javascript
GET /home HTTP/1.1

name: Alice
```

如果一切正常，服务器会返回一段 JSON 信息。

```javascript
{
  "message": "Hello Alice"
}
```

6. 打开`app4.js`，查看在所有路由之前新增的那个函数。

```javascript
var router = express.Router();

// 新增的代码
router.use(function(req, res, next) {
  console.log('Thers is a requesting.');
  next();
});

router.get('/', function(req, res) {
  // ...
```

`router.use`的作用是加载一个函数。这个函数被称为中间件，作用是在请求被路由匹配之前，先进行一些处理。上面这个中间件起到 logging 的作用，每收到一个请求，就在命令行输出一条记录。请特别注意，这个函数内部的`next()`，它代表下一个中间件，表示将处理过的请求传递给下一个中间件。这个例子只有一个中间件，就进入路由匹配处理（实际上，`bodyparser`、`router`本质都是中间件，整个 Express 的设计哲学就是不断对 HTTP 请求加工，然后返回一个 HTTP 回应）。

### 练习

1. URL 的查询字符串，比如`localhost:8080?name=Alice`里面的`name`，可以用`req.query.name`拿到。请修改一个路由，使之可以收到查询字符串，然后输出`'Hello ' + req.query.name`。
