# ESLint 的用法

## 简介

ESLint 是代码静态检查的工具，可以检查写法不符合规范的代码。

## 操作步骤

第一步，进入`demos/eslint-demo`目录。

第二步，安装 ESLint。

```bash
$ npm install eslint --save-dev
```

通常，我们会使用别人已经写好的代码检查规则，这里使用的是 Airbnb 公司的规则。所以，还要安装 ESLint 这个规则模块。

```bash
$ npm install eslint-plugin-import eslint-config-airbnb-base --save-dev
```

上面代码中，`eslint-plugin-import`是运行这个规则集必须的，所以也要一起安装。

第三步，ESLint 的配置文件是`.eslintrc.json`，放置在项目的根目录下面。新建这个文件，在里面指定使用 Airbnb 的规则。

```javascript
{
  "extends": "airbnb-base"
}
```

第四步，打开项目的`package.json`，在`scripts`字段里面添加三个脚本。

```javascript
{
  // ...
  "scripts" : {
    "test": "echo \"Error: no test specified\" && exit 1",
    "lint": "eslint **/*.js",
    "lint-html": "eslint **/*.js -f html -o ./reports/lint-results.html",
    "lint-fix": "eslint --fix **/*.js"
  },
  // ...
}
```

除了原有的`test`脚本，上面代码新定义了三个脚本，它们的作用如下。

- `lint`：检查所有`js`文件的代码
- `lint-html`：将检查结果写入一个网页文件`./reports/lint-results.html`
- `lint-fix`：自动修正某些不规范的代码

第五步，运行静态检查命令。

```bash
$ npm run lint

  1:5  error    Unexpected var, use let or const instead  no-var
  2:5  warning  Unexpected console statement              no-console

✖ 2 problems (1 error, 1 warning)
```

正常情况下，该命令会从`index.js`脚本里面，检查出来两个错误：一个是不应该使用`var`命令，另一个是不应该在生产环境使用`console.log`方法。

第六步，修正错误。

```bash
$ npm run lint-fix
```

运行上面的命令以后，再查看`index.js`，可以看到`var x = 1;`被自动改成了`const x = 1;`。这样就消除了一个错误，但是还留下一个错误。

第七步，修改规则。

由于我们想要允许使用`console.log`方法，因此可以修改`.eslintrc.json`，改变`no-console`规则。请将`.eslintrc.json`改成下面的样子。

```javascript
{
  "extends": "airbnb-base",

  "rules": {
    "no-console": "off"
  }
}
```

再运行`npm run lint`，就不会报错了。

```bash
$ npm run lint
```

## 参考链接

- [Streamline JavaScript Development with ESLint](https://nodesource.com/blog/streamline-javascript-development-with-eslint/), by Tierney Coren
