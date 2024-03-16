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

server-nodejs-template/
│
├── package.json    // 项目依赖配置文件
├── .env            // 环境变量配置文件
│
├── src/            // 源代码目录
│   ├── app.js          // 应用启动和配置的入口文件
│   │
│   ├── config/         // 配置层
│   │   ├── index.js    // 主配置文件，用于汇总各种配置
│   │   └── db.js       // 数据库配置
│   │
│   ├── routes/         // 路由层
│   │   ├── index.js    // 总路由配置，汇总各个模块的路由
│   │   └── users.js    // 用户模块路由
│   │
│   ├── controllers/    // 控制层
│   │   ├── userController.js
│   │   └── productController.js
│   │
│   ├── services/       // 服务层
│   │   ├── userService.js
│   │   └── productService.js
│   │
│   ├── models/         // 模型层
│   │   ├── User.js
│   │   └── Product.js
│   │
│   ├── dal/            // 数据访问层 (可选)
│   │   ├── userRepository.js
│   │   └── productRepository.js
│   │
│   ├── middlewares/    // 中间件层
│   │   ├── auth.js     // 身份验证中间件
│   │   └── errorLogger.js // 错误日志中间件
│   │
│   └── utils/          // 工具类
│       ├── logger.js   // 日志工具
│       └── validator.js // 验证工具
│
├── public/         // 静态资源目录
│   ├── images/
│   ├── css/
│   └── js/
│
└── tests/          // 测试代码目录
    └── userTests.js