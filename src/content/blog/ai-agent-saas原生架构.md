---
title: "AI Agent SaaS 原生架构"
description: "以 Task 为原子单位、通过共享状态层连接的分布式 Agent 平台：Task Mesh。"
publishedAt: 2026-05-04
draft: false
lang: zh
tags: ["AI Agent", "SaaS", "架构", "Task Mesh"]
---

4 月 30 日，Manus 正式发布了 Cloud Computer，支持 7×24 云执行，补齐了功能的短板。根据我们在上一篇文章中提到的生产级 Agent 的理想产品形态定义来看，Manus 在用户体验上确实做到了极致。

不过今天我们不打算聊用户界面和产品功能，而是想探讨现有的主流持久 VM、云电脑的问题有哪些，以及下一代 AI Agent SaaS 原生架构是什么样的。

## 一、主流 Agent SaaS 架构与痛点

以 Manus 为代表的主流 AI Agent SaaS 采用的是 **临时 Sandbox + 持久化 Cloud Computer + Scheduled Tasks** 的混合架构：

- 普通任务跑在 Sandbox，会话结束后清理，上下文独立、干净。
- 持续运行的任务塞进一个专属的 VM（Cloud Computer）中，其中文件系统、进程、数据库均常驻。
- 定时、周期任务通过 Scheduled Task 辅助实现。

这种设计在早期确实实现了“自然语言 → 立刻执行、持续执行、定时执行”的友好体验，但随着任务数增多、使用时间拉长，问题就会慢慢暴露出来：

**上下文膨胀与记忆衰减：** 单一窗口或 VM 的记忆会随时间迅速腐烂，AI 正确性快速下降，用户不得不手动维护目录、todo.md、定期总结。

**持久化与隔离的取舍难题：** Cloud Computer 提供了持久运行时，却容易互相污染；Scheduled Task / Sandbox 足够干净，却缺少共享状态和真正的 24/7 守护进程。

**运维思维与 Agent 思维：** 当前的 Agent SaaS 系统本质上是把传统的云服务器包装成 Agent 能操作的对象，但是用户对 Agent 的需求是实现结果，而不是一个需要维护的电脑。

我们还在用“上一代的云基础设施”去硬套 Agent，而不是为 Agent 重新设计基础设施。

## 二、下一代 AI Agent SaaS 原生架构

我认为下一代的 **AI Agent SaaS 架构**，应该是一个以 Task 为原子单位、通过共享状态层连接的分布式 Agent 平台：**Task Mesh**。

**Task Mesh** 以 **Task** 为最小可部署单元，通过 **Shared State Fabric** 连接，由 **Memory Orchestrator** 按照不同等级统一管理记忆，由 **Conductor** 统一指挥。它提供给用户一个由专注单一职责、独立运行的 Task 服务组成的网格。

每个 Task 之间松耦合，通过声明式的方式协同。它不是对现有方案的修补，而是 DevOps、Serverless、Agent 三者融合后的原生形态。

![Task Mesh 架构图](https://pbs.twimg.com/media/HHfsGUNbQAAvSMo.jpg)

Task Mesh 包含四大核心组件：

### Task Runtime

**Ephemeral：** 短任务，用完即毁，上下文永远干净。

**Scheduled：** 定时、事件触发任务，独立执行，上下文不累积。

**Persistent Cell：** 7×24 执行、长连接的轻量守护进程，按需分配 CPU、内存、端口，按秒计费。

### Shared State Fabric

平台自动托管隔离的 PostgreSQL、Redis、S3-like 对象存储、Message Queue。Task 之间通过 Connector 声明式通信，无需手动 mount、配置凭证或担心端口冲突。

### Memory Orchestrator

**短时记忆：** 单个 Task 内部上下文。

**中时记忆：** Project 级别，自动生成的架构图、README、todo.md。

**长时记忆：** 全局向量加图数据库，自动总结、裁剪、归档。

Orchestrator 的核心职责是 **只传递最小必要状态**。

### Conductor

用户主聊天窗口背后的 Agent。它负责：自然语言 → 自动拆解成 Task 依赖图 → 声明式部署 → 实时监控、健康检查、自愈、报警。

## 三、现有行业实践

目前已经有多个生产级框架朝着“微服务化 + 持久化状态 + 声明式编排”的方向演进：

**Agentic Mesh / AI Agent Service Mesh：** 把每个 AI Agent 当成微服务节点，用 Service Mesh 实现路由、安全、可观测性和任务分发。Agent 之间通过 MCP / A2A 协议共享信息。它提供共享状态管理的基础设施基础，但整体产品仍偏底层，缺少自然语言拆 Task 的 SaaS 体验。

**LangGraph：** 通过 DAG 定义 Agent 工作流，每个节点是一个 Task，内置 Checkpointer 实现跨会话状态持久化。LangGraph 虽然广泛用于企业生产，但仍是开发者框架，用户需要自己管理部署和基础设施。

**Temporal：** 开发者用普通 Python / TypeScript 等语言写 Workflow，Temporal 自动把每一步记录为 event history。即使遇到崩溃、机器重启、网络分区，也能从失败点续跑，无需重新执行。Temporal 证明了把 Agent 工作流做成可精确恢复的持久进程是可行的，但它仍然是底层引擎。普通用户无法通过自然语言直接生成 Task 网格，仍需开发者自己定义 Workflow。

**SmythOS、CrewAI、AutoGen：** 提供完整的 Agent 操作系统，支持多 Agent 并发、层次化任务和状态持久化。它们都有 Conductor 和共享上下文，但规模一大仍容易退化成一个巨大的 VM，面临 Manus Cloud Computer 同样的问题。

行业目前正在抛弃“单一大 Agent、单一大 VM”，转向 Task / Agent 微服务化、持久化状态和中央编排。我们希望这些优点彻底 SaaS 化：自然语言自动生成 Task 网格、按需轻量 Persistent Cell、分层 Memory Orchestrator、声明式 Shared State，让普通用户也能零代码拥有生产级架构。

## 四、商业化与定价模型

根据上述的架构拆分，SaaS 产品可以更好地进行商业化和定价，告别月费转向真正的“按需使用”。

**Ephemeral / Scheduled Task：** 按执行次数或 Token 计费。

**Persistent Cell：** 按实际资源（CPU、内存、网络）秒级计费。

**Shared State Fabric：** 按存储量计费。

## 五、总结

Task Mesh 将完成从 AI 执行 Demo 到工业级数字生产力的过渡，用户体感不再是“租一台云电脑让 AI 帮忙”，而是拥有一套可无限扩展、上下文干净的自动化任务网格。

这才是我理想中 Agent 时代基础设施该有的样子。

---

原文发布于 [X](https://x.com/0xJackYin/status/2051368111073562861)。
