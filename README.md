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
    ```

# 2. 目录结构

├─src

│  ├─configs

│  ├─controllers
│  ├─dal
│  ├─keys
│  ├─middlewares
│  ├─models
│  │  ├─mariadb

│  │  └─mongodb
│  ├─routers
│  ├─services
│  └─utils
└─uploads