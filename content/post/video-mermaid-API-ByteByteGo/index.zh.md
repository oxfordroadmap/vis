---
title: 🛂 API 学习路线图 (ByteByteGo) 📽
date: 2025-06-25T12:18:50+08:00
authors:
  - admin
tags:
  - recommendations
  - '學習路線圖'
  - API
image:
  caption: '来源： [ByteByteGo](https://bytebytego.com/)'
---

聚焦现代 Web API， [ByteByteGo](https://bytebytego.com/)  整理并当今 API 的核心概念和实现，系统性地更新细节。对于希望深入理解并开启学习之旅的人而言，这是强烈推荐的资源。

<!-- more -->

## 推荐

强烈推荐！👍🏽👍🏻👍🏿

{{< youtube id=hltLrjabkiY title="API 学习路线图 (ByteByteGo)" class="yt_learning w-[100]" start=10 >}}

{{< icon name="brands/ByteByteGo" >}} [ByteByteGo](https://bytebytego.com/) 系统性地总结了进入现代 AI 与 Web 生态系统前需要掌握的 API 知识。

## 用途

以下学习路线图总结了上方视频中的核心内容。

### 路线图摘要

```markmap {height="480px"}
# API 概念

## 定义
- API = 系统间通信传播的接口

### 类型（商业组织角度）
- 公共 API
- 私有 API
- 合作伙伴 API

### 风格（技术角度）
- REST（见下方）
- GraphQL
- gRPC
- SOAP
- WebSockets

## 术语
- REST = 表现层状态转换（REpresentational State Transfer）
- HTTP
  - HTTP = 超文本传输协议（Hypertext Transfer Protocol）
  - 方法
    - GET
      - 创建
    - POST
      - 读取
    - PUT
      - 更新
    - DELETE
      - 删除
  - 状态码
    - 200 段（成功）
    - 400 段（客户端错误）
    - 500 段（服务器错误）
  - 上下文
    - Headers
    - Cookies
    - Cache-Control
    - ETag

### 安全性
- 基本身份认证
- Token 认证
- JWT 认证
- OAuth 认证
- 基于会话的认证

## 文档工具
- Swagger / OpenAPI
- Postman

## 常见功能
- 分页
- 参数传递
- 幂等性
- 接口版本控制

## 性能优化
- 缓存
- 限流
- 负载均衡
- 数据库索引
- 可扩展性

### API 网关
- AWS
- Kong
- Apigee

### 常见框架
- Express.js（Node）
- Spring Boot（Java）
- Flask / Django（Python）
- FastAPI（Python）

## 通信方式
- 同步（实时）
- 异步（后台）
- Webhooks（回调）
- 批处理
- 消息队列
```

## API 学习待办清单

- [x] 掌握 API 学习路线图
    - [x] 来自 ByteByteGo
- [ ] 从 API 走向 `平台经济`（例如 `AI 利益相关者协同`）
- [ ] 从 API 走向 `AI Agent 设计`（例如链式操作与 `MCP`）
- [ ] 从 API 走向 `可视化 API 编排器`（如 n8n）或其他无代码 / 低代码自动化工具