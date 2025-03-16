# 网页计算器应用

这是一个基于Flask的网页计算器应用，具有用户认证功能。用户需要注册并登录后才能使用科学计算器功能。

## 功能特点

- 用户注册与登录系统
- 密码哈希存储，保障用户安全
- 科学计算器功能，支持基本运算、百分比、平方根等
- 响应式界面设计，适配不同设备
- 实时错误提示和用户反馈
- 键盘支持，提升使用体验

## 技术栈

- Python Flask
- SQLite 数据库
- HTML/CSS/JavaScript
- Bootstrap 5

## 安装与运行

1. 克隆仓库
2. 安装依赖：
   ```bash
   pip install -r requirements.txt
   ```
3. 运行应用：
   ```bash
   python app.py
   ```
4. 访问 http://localhost:5000

## 使用说明

1. 注册新账户
2. 登录系统
3. 使用科学计算器进行运算
4. 支持键盘输入和鼠标点击操作
5. 点击右上角用户名可注销登录

## 项目结构

```
pywebtest/
├── app.py              # 主应用文件
├── static/             # 静态资源
│   ├── calculator.js   # 计算器逻辑
│   ├── style.css       # 样式表
│   └── favicon.ico     # 网站图标
├── templates/          # HTML模板
│   ├── base.html       # 基础模板
│   ├── calculator.html # 计算器页面
│   ├── index.html      # 首页
│   ├── login.html      # 登录页面
│   └── register.html   # 注册页面
└── instance/           # 数据库文件
    └── users.db        # SQLite数据库
```

## 许可证

MIT License
