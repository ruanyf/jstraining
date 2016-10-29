# 培训准备

参加培训的学员，事先应该做好以下准备工作。

## 知识准备

- 掌握 HTML、CSS、JS 的基本用法
- 掌握命令行的基本用法

## 安装 Git

请到官网 [git-scm.com](https://git-scm.com/) 或国内的下载站，下载安装包。

## 安装 Node

请到 Node 官网[nodejs.org](https://nodejs.org)，或者国内镜像[npm.taobao.org/mirrors/node](https://npm.taobao.org/mirrors/node)，下载安装包。推荐安装最新的稳定版，目前是v6.x。

安装完成后，命令行执行下面的命令，确认是否安装成功。

```bash
$ node -v
v6.9.1
```

Node 的模块管理器 npm 会一起安装好。由于 Node 的官方模块仓库网速太慢，模块仓库需要切换到阿里的源。

```bash
$ npm config set registry https://registry.npm.taobao.org/
```

执行下面的命令，确认是否切换成功。

```bash
$ npm config get registry
```

## 安装 Postman

Postman 是一个 HTTP 通信测试工具，REST API 的练习会用到它。

请到官网 [GetPostman.com](https://www.getpostman.com/) 下载独立安装包；也可以参考这篇文章[dwz.cn/4sdo4Q](http://dwz.cn/4sdo4Q)，下载 Chrome 浏览器的插件，它们的效果一样。

## 安装示例库

所有的讲义和练习源码，都是开源的，网址是 [github.com/ruanyf/jstraining](https://github.com/ruanyf/jstraining)。执行下面的命令，将这个库拷贝到你的硬盘上。

```bash
$ git clone git@github.com:ruanyf/jstraining.git
```

如果因为种种原因，Git 命令行无法使用，也可以直接下载压缩包，地址是 https://github.com/ruanyf/jstraining/archive/master.zip 。

