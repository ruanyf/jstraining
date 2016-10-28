# 培训准备

参加培训的学员，事先应该做好以下准备工作。

## 知识准备

- 掌握 HTML、CSS、JS 的基本用法
- 掌握命令行的基本用法

## 环境准备

- 安装 Git，官网 [git-scm.com](https://git-scm.com/)
- 安装 Node，见后文
- 安装 Postman，参考这篇文章[dwz.cn/4sdo4Q](http://dwz.cn/4sdo4Q)
- 安装示例库，见后文

## Node 的安装

1. 去 Node 官网 nodejs.org，或者国内镜像 npm.taobao.org/mirrors/node，下载安装包。
1. 推荐安装最新的稳定版 v6.9.1。
1. 安装完成后，在命令行执行下面的命令，确认是否安装成功。

```bash
$ node -v
v6.9.1
```

## 切换 npm 源

由于官网太慢，模块仓库需要切换成阿里的源。

```bash
$ npm config set registry https://registry.npm.taobao.org/
```

然后，执行下面的命令，确认是否切换成功。

```bash
$ npm config get registry
```

## 安装示例库

执行下面的命令，将示例库拷贝到硬盘上。

```bash
$ git clone git@github.com:ruanyf/jstraining.git
```

如果因为种种原因，Git 无法使用，也可以直接下载压缩包，地址如下。

https://github.com/ruanyf/jstraining/archive/master.zip
