# 1. 安装

## 1.1 初始化

* ```bash
    npm init -y
    ```

## 1.2 koa

* ```bash
    npm install koa @koa/router koa-bodyparser @koa/multer multer koa-static
    ```

## 1.3 token、cookie session

* ```bash
    npm install jsonwebtoken koa-session
    ```

## 1.4 mariab、mongodb

* ```bash
    npm install sequelize mariadb mongoose
    ```

## 1.5 Other

* ```bash
    npm install nodemon dotenv
    npm install svg-captcha  # 验证码
    ```

# 2. 目录结构

├─public  静态web文件

├─src

│  ├─configs    配置，全局配置，数据库配置

│  ├─controllers  控制层

│  ├─dal   数据访问层

│  ├─keys    token的公钥和私钥

│  ├─middlewares   其他复用中间件

│  ├─models     数据库模型

│  │  ├─mariadb    mariadb数据库

│  │  └─mongodb    mongodb数据库

│  ├─routers    路由层,所有API接口都在这里

│  ├─services   服务层

│  └─utils       工具函数包含密码加密验证等

└─uploads    上传文件保存文件夹

└─.env          全局配置文件，服务器地址和端口