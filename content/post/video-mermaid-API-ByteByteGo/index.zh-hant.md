---
title: 🛂 API 學習路線圖 (ByteByteGo) 📽
date: 2025-06-25T12:18:50+08:00
authors:
  - admin
tags:
  - recommendations
  - 'RoadmapLearning'
  - API
image:
  caption: '來源：[ByteByteGo](https://bytebytego.com/)'
---

聚焦現代 Web API， [ByteByteGo](https://bytebytego.com/)  整理並當今 API 的核心概念和實現，系統性地更新細節。對於希望深入理解並開啟學習之旅的人而言，這是強烈推薦的資源。

<!-- more -->

## 推薦

強烈推薦！👍🏽👍🏻👍🏿

{{< youtube id=hltLrjabkiY title="API 學習路線圖 (ByteByteGo)" class="yt_learning w-[100]" start=10 >}}

{{< icon name="brands/ByteByteGo" >}} [ByteByteGo](https://bytebytego.com/) 系統性地總結了進入現代 AI 與 Web 生態系統前需要掌握的 API 知識。

## 用途

以下學習路線圖總結了上方視頻中的核心內容。

### 路線圖摘要

```markmap {height="480px"}
# API 概念

## 定義
- API = 系統間通信傳播的接口

### 類型（商業組織角度）
- 公共 API
- 私有 API
- 合作伙伴 API

### 風格（技術角度）
- REST（見下方）
- GraphQL
- gRPC
- SOAP
- WebSockets

## 術語
- REST = 表現層狀態轉換（REpresentational State Transfer）
- HTTP
  - HTTP = 超文本傳輸協議（Hypertext Transfer Protocol）
  - 方法
    - GET
      - 創建
    - POST
      - 讀取
    - PUT
      - 更新
    - DELETE
      - 刪除
  - 狀態碼
    - 200 段（成功）
    - 400 段（客戶端錯誤）
    - 500 段（服務器錯誤）
  - 上下文
    - Headers
    - Cookies
    - Cache-Control
    - ETag

### 安全性
- 基本身份認證
- Token 認證
- JWT 認證
- OAuth 認證
- 基於會話的認證

## 文檔工具
- Swagger / OpenAPI
- Postman

## 常見功能
- 分頁
- 參數傳遞
- 冪等性
- 接口版本控制

## 性能優化
- 緩存
- 限流
- 負載均衡
- 數據庫索引
- 可擴展性

### API 網關
- AWS
- Kong
- Apigee

### 常見框架
- Express.js（Node）
- Spring Boot（Java）
- Flask / Django（Python）
- FastAPI（Python）

## 通信方式
- 同步（實時）
- 異步（後台）
- Webhooks（回調）
- 批處理
- 消息隊列
```

## API 學習待辦清單

- [x] 掌握 API 學習路線圖
    - [x] 來自 ByteByteGo
- [ ] 從 API 走向 `平台經濟`（例如 `AI 利益相關者協同`）
- [ ] 從 API 走向 `AI Agent 設計`（例如鏈式操作與 `MCP`）
- [ ] 從 API 走向 `可視化 API 編排器`（如 n8n）或其他無代碼 / 低代碼自動化工具