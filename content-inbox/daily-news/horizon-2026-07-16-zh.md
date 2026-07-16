# 每日速递 - 2026-07-16

> 从 26 条内容中筛选出 14 条重要资讯。

---

1. [xAI 在数据上传争议后开源 Grok Build](https://simonwillison.net/2026/Jul/15/grok-build/#atom-everything) ⭐️ 9.0/10
2. [Inkling：Thinking Machines AI 推出的开放权重多模态模型](https://thinkingmachines.ai/news/introducing-inkling/) ⭐️ 8.0/10
3. [Stripe 与 Advent 联合出价超 530 亿美元收购 PayPal](https://www.reuters.com/business/finance/stripe-advent-offer-buy-paypal-more-than-53-billion-sources-say-2026-07-15/) ⭐️ 8.0/10
4. [Claude web_fetch 漏洞导致记忆数据泄露](https://simonwillison.net/2026/Jul/15/claude-web-fetch-exfiltration/#atom-everything) ⭐️ 8.0/10
5. [半直傅里叶 Delta 注意力：相位控制的线性记忆](https://arxiv.org/abs/2607.11897) ⭐️ 8.0/10
6. [扩展时间点语言模型缩小性能差距](https://arxiv.org/abs/2607.11889) ⭐️ 8.0/10
7. [AgentSociety 2：社会科学集成研究环境](https://arxiv.org/abs/2607.11895) ⭐️ 8.0/10
8. [压力测试揭示后点调整指标仍可被操纵](https://arxiv.org/abs/2607.11969) ⭐️ 8.0/10
9. [SQLite 应引入 Rust 风格的版本机制来管理默认行为](https://mort.coffee/home/sqlite-editions/) ⭐️ 7.0/10
10. [Gemma 4 26B 在 13 年前的 Xeon CPU 上以 5 tokens/秒运行](https://www.neomindlabs.com/2026/06/08/running-gemma-4-26b-at-5-tokens-sec-on-a-13-year-old-xeon-with-no-gpu/) ⭐️ 7.0/10
11. [SQLite 中 NUL 字符处理的不一致性](https://sqlite.org/nulinstr.html) ⭐️ 7.0/10
12. [政策文件呼吁公共投资开源 AI](https://www.siegelendowment.org/wp-content/uploads/2026/07/fortune-david-siegel-open-source-ai.pdf) ⭐️ 6.0/10
13. [金属有机框架：化学界的奇迹材料](https://chemistry.berkeley.edu/news/meet-metal-organic-frameworks-chemistry%E2%80%99s-new-miracle-materials) ⭐️ 6.0/10
14. [LLM 驱动的 MikroTik 路由器配置](https://blog.greg.technology/2026/07/14/llm-networking-with-mikrotik.html) ⭐️ 6.0/10

---

## [xAI 在数据上传争议后开源 Grok Build](https://simonwillison.net/2026/Jul/15/grok-build/#atom-everything) ⭐️ 9.0/10

xAI 在发现其 CLI 工具将整个目录（包括 SSH 密钥和密码数据库）上传到云端后，以 Apache 2.0 许可证开源了整个 Grok Build 代码库。该公司删除了所有先前保留的用户数据，并禁用了默认数据保留。 此事件凸显了 AI 编码工具中的关键隐私风险以及透明度的重要性。在宽松许可证下开源代码库可能有助于恢复信任并实现社区审计，但数据泄露造成的品牌损害可能会使用户望而却步。 Grok Build 仓库包含 844,530 行 Rust 代码，其中仅约 3% 是第三方依赖，以单个提交发布。代码库包含一个自包含的 Mermaid 图表渲染器，以及受 Codex 和 OpenCode 启发的工具实现。

rss · Simon Willison · 7月15日 23:59

**背景**: Grok Build 是 xAI 的 AI 辅助编码 CLI 工具，类似于 GitHub Copilot 或 Cursor。Apache 2.0 许可证是一种宽松的开源许可证，允许任何人免费使用、修改和分发该软件。

**参考链接**:
- [Grok Build | SpaceXAI](https://x.ai/cli)
- [Apache License](https://en.wikipedia.org/wiki/Apache_License)

**社区讨论**: 社区反应不一：一些人赞赏开源举措，并已创建了注重隐私的分支如 'gork-build'，而另一些人则批评品牌损害，认为开源是战术性回应而非真诚善意。一些用户尽管存在隐私泄露，仍称赞模型质量和工具的流畅性。

**标签**: `#security`, `#open source`, `#AI`, `#privacy`, `#xAI`

---

## [Inkling：Thinking Machines AI 推出的开放权重多模态模型](https://thinkingmachines.ai/news/introducing-inkling/) ⭐️ 8.0/10

Thinking Machines AI 发布了 Inkling，一款新的开放权重多模态模型，支持文本、图像和音频，定位为可定制的微调基础模型，而非追求顶尖性能。 Inkling 为企业提供了一种经济高效的方式来拥有和定制自己的 AI 模型，通过微调可能在特定任务上达到前沿水平，从而可能使先进 AI 能力更加普及。 Inkling 被描述为支持音频输入的最大开放权重模型，并可在 Tinker 平台上进行微调，社区资源如 llama.cpp 和 Unsloth 提供了本地运行支持。

hackernews · vimarsh6739 · 7月15日 18:12 · [社区讨论](https://news.ycombinator.com/item?id=48924912)

**背景**: 开放权重模型是指其训练参数公开发布的 AI 模型，任何人都可以下载和定制。多模态模型能同时处理文本、图像和音频等多种数据类型，实现更丰富的理解。Inkling 顺应这一趋势，强调可定制性而非原始基准性能。

**参考链接**:
- [Open Weights: not quite what you’ve been told](https://opensource.org/ai/open-weights)
- [What is an Open-Weight Model? - Stanford HAI](https://hai.stanford.edu/ai-definitions/what-is-an-open-weight-model)
- [Multimodal model](https://en.wikipedia.org/wiki/Multimodal_model)

**社区讨论**: 社区成员称赞 Inkling 是支持音频的最大开放权重模型，并强调了其本地部署和微调的潜力。一些人希望 Thinking Machines 能成为类似 DeepSeek 或 Z.ai 的领先开源 AI 提供商。

**标签**: `#open-weights`, `#multimodal`, `#AI model`, `#fine-tuning`, `#machine learning`

---

## [Stripe 与 Advent 联合出价超 530 亿美元收购 PayPal](https://www.reuters.com/business/finance/stripe-advent-offer-buy-paypal-more-than-53-billion-sources-say-2026-07-15/) ⭐️ 8.0/10

据路透社援引消息人士称，Stripe 与私募股权公司 Advent International 已联合出价超过 530 亿美元收购 PayPal。 此次潜在收购将把多个主要支付平台整合到一起，引发重大反垄断担忧，并可能重塑在线支付格局。 合并后的实体将拥有 Stripe、PayPal、Venmo、Braintree 和 Xoom，导致在线无卡支付市场的赫芬达尔-赫希曼指数（HHI）极高，可能需要剥离 Venmo 或 Braintree 等资产才能通过监管审查。

hackernews · rvz · 7月15日 03:32 · [社区讨论](https://news.ycombinator.com/item?id=48915953)

**背景**: Stripe 是全球最大的私有金融科技公司，估值约 1590 亿美元，2025 年处理支付金额超过 1.9 万亿美元。Advent International 是一家全球私募股权公司，管理资产约 1000 亿美元。PayPal 是上市的数字支付巨头，市值约 700 亿美元。

**参考链接**:
- [Stripe, Inc. - Wikipedia](https://en.wikipedia.org/wiki/Stripe,_Inc.)
- [Advent International](https://en.wikipedia.org/wiki/Advent_International)

**社区讨论**: 评论者表达了对竞争减少和费用可能上涨的担忧，一些人指出 Stripe 对某些行业（如大麻、成人内容）的限制性政策可能对目前由 PayPal 服务的商家产生负面影响。其他人则认为这种整合是不可避免的，因为直接支付系统正在减少对中介的依赖。

**标签**: `#fintech`, `#acquisition`, `#antitrust`, `#payments`, `#stripe`

---

## [Claude web_fetch 漏洞导致记忆数据泄露](https://simonwillison.net/2026/Jul/15/claude-web-fetch-exfiltration/#atom-everything) ⭐️ 8.0/10

安全研究员 Ayush Paul 发现了 Claude 的 web_fetch 工具中的一个漏洞，通过诱使代理从精心构造的蜜罐页面跟踪嵌套链接，实现了用户记忆数据的泄露。 该攻击绕过了 Anthropic 针对“致命三重奏”（私有数据、不可信内容和外部通信）设计的保护措施，凸显了保护 LLM 代理免受提示注入和数据泄露的持续挑战。 该攻击利用了 web_fetch 可以跟踪先前获取页面中嵌入的链接这一特性，并且蜜罐站点仅向带有 'Claude-User' 用户代理的客户端提供恶意提示以逃避检测。Anthropic 已在内部发现该问题，并通过移除从获取内容中导航到其他链接的能力来修复漏洞。

rss · Simon Willison · 7月15日 14:21

**背景**: “致命三重奏”指的是 LLM 代理中的危险组合：访问私有数据、处理不可信内容（例如来自网络的内容）以及进行外部通信（例如通过 URL）的能力。提示注入攻击可以通过将私有数据嵌入 URL 来诱使代理泄露数据。Claude 的 web_fetch 工具原本设计为仅访问用户明确提供或从其 web_search 工具返回的 URL，但嵌套链接漏洞绕过了这一限制。

**参考链接**:
- [Web fetch tool - Claude Platform Docs](https://platform.claude.com/docs/en/agents-and-tools/tool-use/web-fetch-tool)
- [The lethal trifecta for AI agents: private data, untrusted content, and external communication](https://simonwillison.net/2025/Jun/16/the-lethal-trifecta/)

**社区讨论**: Hacker News 的评论者对 Anthropic 防御措施的稳健性表示担忧，并指出其他 LLM 产品中也发现了类似的攻击。一些人认为修复应阻止从获取内容中进行任何后续导航，而另一些人则争论拒绝漏洞赏金是否合理。

**标签**: `#AI safety`, `#LLM security`, `#data exfiltration`, `#Claude`, `#prompt injection`

---

## [半直傅里叶 Delta 注意力：相位控制的线性记忆](https://arxiv.org/abs/2607.11897) ⭐️ 8.0/10

该论文提出了半直傅里叶 Delta 注意力（SFDA），它是 Kimi Delta Attention 的相位控制泛化，用块旋转傅里叶控制取代实对角衰减，实现了循环记忆和精确仿射块传输。 SFDA 解决了线性注意力的一个关键限制——无法跟踪循环状态模式，这对于模运算和长上下文推理等任务至关重要，有望在不牺牲效率的情况下改进 Transformer 的记忆能力。 核心贡献是对形式为Λ_t - u_t r_t^*的矩阵乘积的构造性块 WY 分解，该分解提供了形式化的稳定性和复杂度界限，以及紧凑的相位加低秩记忆表示。

rss · arXiv cs.LG · 7月15日 04:00

**背景**: 线性注意力机制用固定大小的循环状态取代了 softmax 注意力中不断增长的 KV 缓存，但这种压缩限制了精确的状态跟踪。Kimi Delta Attention（KDA）引入了每通道对角门控以提高表达能力，但仍使用实值衰减。SFDA 通过块旋转傅里叶参数添加复数相位控制来扩展 KDA，使模型能够学习循环模式。

**参考链接**:
- [Kimi Linear: An Expressive, Efficient Attention Architecture](https://arxiv.org/abs/2510.26692)
- [Kimi Delta Attention (KDA) - Educational Implementation - GitHub](https://github.com/hwilner/kimi-delta-attention)
- [GitHub - MoonshotAI/Kimi-Linear](https://github.com/MoonshotAI/Kimi-Linear)

**标签**: `#attention mechanisms`, `#linear attention`, `#long-context memory`, `#transformers`, `#theoretical machine learning`

---

## [扩展时间点语言模型缩小性能差距](https://arxiv.org/abs/2607.11889) ⭐️ 8.0/10

研究人员在来自 FineWeb 的 1 万亿个按时间顺序过滤的 token 上训练了多达 40 亿参数的仅解码器 Transformer，创建了 2013 年至 2024 年的月度模型检查点。这些时间点模型在常识推理和语言理解基准测试上几乎达到了标准 LLM（如 Gemma-3-4B 和 LLaMA-7B）的性能水平。 这项工作消除了 LLM 中的前瞻偏差，这是金融和社会科学中因果推断和回测的关键问题。通过证明扩展的时间点模型可以接近最先进的性能，它实现了在不牺牲准确性的情况下进行可靠的时间分析。 模型在按时间顺序过滤的 token 上进行训练，以确保没有未来信息泄露，通过 LoRA 进行的指令微调进一步提高了下游可用性。完整的流程——包括数据集构建、训练基础设施和评估代码——已发布以支持可重复研究。

rss · arXiv cs.CL · 7月15日 04:00

**背景**: 标准大型语言模型在包含未来信息的无限制互联网数据上训练，用于历史分析时会导致前瞻偏差。时间点语言模型通过仅训练每个日期之前可用的数据来避免这一问题，但之前的模型在性能上显著落后。本文证明，扩大模型规模和数据量可以大幅缩小这一差距。

**参考链接**:
- [Scaling Point-in-Time Language Models | NBER](https://www.nber.org/papers/w35247)
- [Point-in-Time-Language-Model - GitHub](https://github.com/michaelweihaosong/Point-in-Time-Language-Model)
- [PiT Inference — Point-in-Time LLMs for Finance](https://www.pitinference.com/)

**标签**: `#large language models`, `#point-in-time`, `#lookahead bias`, `#finance`, `#causal inference`

---

## [AgentSociety 2：社会科学集成研究环境](https://arxiv.org/abs/2607.11895) ⭐️ 8.0/10

AgentSociety 2 是一个集成研究环境，将 AI 社会科学家和硅基参与者耦合在同一运行时中，自动化从假设生成到论文撰写的整个社会科学研究流程。 这项工作弥合了孤立研究任务与模拟社会之间的鸿沟，实现了人机协同的可执行社会科学，可能加速社会科学中 AI 驱动的科学发现。 该系统支持微观实验室实验、中观社交媒体动态和宏观城市场景，再现了先前研究的主要定性模式，同时识别出有信息价值的偏差。

rss · arXiv cs.MA · 7月15日 04:00

**背景**: 传统社会科学研究通常依赖人类被试和手动流程，成本高且规模受限。AI 科学家系统已开始自动化部分科学研究，但社会科学因其关注情境化参与者和交互背景而面临独特挑战。基于智能体的建模（ABM）通过模拟自主智能体来理解系统行为，但先前的工作往往将研究流程与模拟社会脱钩。

**参考链接**:
- [[2604.01520] LLM Agents as Social Scientists: A Human-AI Collaborative Platform for Social Science Automation](https://arxiv.org/abs/2604.01520)
- [Agent-based model - Wikipedia](https://en.wikipedia.org/wiki/Agent-based_model)

**标签**: `#AI Scientist`, `#Social Science`, `#LLM Agents`, `#Research Automation`, `#Simulation`

---

## [压力测试揭示后点调整指标仍可被操纵](https://arxiv.org/abs/2607.11969) ⭐️ 8.0/10

该论文首次对时间序列异常检测的 12 种后点调整评估指标进行了独立的对抗性压力测试，发现 affiliation-F1 和所有基于 ROC 的指标在 UCR 异常档案及其他五个基准上仍可被无技能检测器操纵。 这项工作表明，该领域从点调整指标的迁移仅部分解决了鲁棒性问题，因为广泛采用的指标如 affiliation-F1 和 VUS-ROC 仍然可被操纵，可能使许多已发表的结果无效并误导未来研究。 该研究使用预注册的 SOTA 相对可操纵性标准：如果无技能生成器达到最佳真实检测器得分的≥90%，则该指标被操纵。Affiliation-F1 在 99%的序列上被操纵，VUS-ROC 约 62-64%，而基于 PR 的指标和 PA%K 抵抗（14-18%）。作者发布了一个可通过 pip 安装的压力测试工具和一个指标选择决策协议。

rss · arXiv stat.ML · 7月15日 04:00

**背景**: 点调整（PA）曾是时间序列异常检测（TSAD）的默认评分协议，但 Kim 等人（2022）表明它会给随机分数授予近乎完美的 F1。该领域随后采用了替代指标，如 PA%K、基于范围的精确率/召回率、affiliation 精确率/召回率以及 Volume-Under-the-Surface（VUS）ROC/PR。然而，在这篇论文之前，对这些新指标没有独立的对抗性审计。

**参考链接**:
- [(PDF) Navigating the metric maze: a taxonomy of evaluation metrics ...](https://www.researchgate.net/publication/375746182_Navigating_the_metric_maze_a_taxonomy_of_evaluation_metrics_for_anomaly_detection_in_time_series)
- [NeurIPS Towards Unbiased Evaluation of Time - series Anomaly ...](https://neurips.cc/virtual/2024/103044)
- [GitHub - ahstat/affiliation-metrics-py: Python 3 implementation of the ...](https://github.com/ahstat/affiliation-metrics-py)

**标签**: `#time-series anomaly detection`, `#evaluation metrics`, `#adversarial testing`, `#robustness`, `#machine learning`

---

## [SQLite 应引入 Rust 风格的版本机制来管理默认行为](https://mort.coffee/home/sqlite-editions/) ⭐️ 7.0/10

一篇博文建议 SQLite 采用 Rust 风格的版本机制，允许用户通过 PRAGMA edition = 2026 等语句选择一组改进的默认行为（例如启用外键、设置忙超时），同时保持对现有数据库的完全向后兼容。 该提案解决了 SQLite 用户长期以来必须手动配置合理默认值的痛点，如果被采纳，可以简化数据库设置、减少错误并提高安全性，同时不破坏现有应用程序。 提议的版本机制是自愿选择而非自动的，仅影响新数据库或连接；现有数据库保持不变。文章列出了几个可以改进的默认行为，例如默认启用外键和设置非零忙超时。

hackernews · gnyeki · 7月15日 22:42 · [社区讨论](https://news.ycombinator.com/item?id=48928135)

**背景**: SQLite 是一个广泛使用的嵌入式数据库，优先考虑向后兼容性，因此很难更改许多用户认为不理想的默认行为。Rust 版本是一种机制，允许 Rust 语言以可控的方式引入破坏性变更，每个版本是一组变更，每个 crate 可以选择加入，确保旧代码继续编译。

**参考链接**:
- [What are editions? - The Rust Edition Guide](https://doc.rust-lang.org/edition-guide/editions/index.html)
- [SQLite Documentation](https://www.sqlite.org/docs.html?ref=srccodes.com)

**社区讨论**: 评论反应不一：有人认为现有默认行为就是特性，不同意就应该换用其他数据库；另一些人支持这个想法，认为这是在不破坏兼容性的前提下改进默认值的务实方式。一个值得注意的担忧是，版本机制可能会破坏用旧工具读取 SQLite 文件的能力，因为 SQLite 文件经常在不同机器之间移动。

**标签**: `#SQLite`, `#database design`, `#backward compatibility`, `#software evolution`

---

## [Gemma 4 26B 在 13 年前的 Xeon CPU 上以 5 tokens/秒运行](https://www.neomindlabs.com/2026/06/08/running-gemma-4-26b-at-5-tokens-sec-on-a-13-year-old-xeon-with-no-gpu/) ⭐️ 7.0/10

一篇博客文章展示了通过极致的 CPU 推理优化，在无 GPU 的 13 年前双 Xeon 服务器上以每秒 5 个 token 的速度运行 Google 的 Gemma 4 26B 混合专家模型。 这表明即使是大型现代 LLM 也可以在老旧、低成本的硬件上运行，可能降低私有本地推理的门槛，并引发关于成本效率与云 API 的讨论。 Gemma 4 26B 模型采用混合专家架构，每个 token 仅激活 4B 参数，这使得 CPU 推理成为可能。该设置可能使用了量化技术和优化的运行时（如 llama.cpp 或类似框架）。

hackernews · neomindryan · 7月15日 15:34 · [社区讨论](https://news.ycombinator.com/item?id=48922434)

**背景**: 大型语言模型通常需要强大的 GPU 才能快速推理，但通过激进优化、量化和高效架构（如混合专家模型），仅用 CPU 推理也是可能的。Gemma 4 是 Google 最新的开放模型系列，其中 26B 变体每个 token 仅激活 4B 参数，在质量和速度之间取得平衡。

**参考链接**:
- [Gemma 4 — Google DeepMind](https://gemma4.com/)
- [gemma 4](https://ollama.com/library/gemma4)
- [Gemma 4 - a google Collection](https://huggingface.co/collections/google/gemma-4)

**社区讨论**: 评论者就本地推理的成本效益展开辩论：有人计算此类老旧硬件的电费超过 API 定价，而其他人则分享自己的 CPU 推理速度，并预测到 2027 年，超过 200B 的 MoE 模型将在消费级硬件上运行。

**标签**: `#local-llm`, `#inference-optimization`, `#hardware`, `#cost-analysis`, `#gemma`

---

## [SQLite 中 NUL 字符处理的不一致性](https://sqlite.org/nulinstr.html) ⭐️ 7.0/10

SQLite 官方文档揭示，字符串中的 NUL 字符（0x00）会导致 length() 和 quote() 等函数在第一个 NUL 处停止，CLI 在输出中会忽略第一个 NUL 之后的所有内容。 这种行为可能导致数据截断、安全漏洞，以及在 SQLite 中存储包含 NUL 字符的二进制数据或用户输入时出现难以察觉的错误。 length() 函数仅统计到第一个 NUL 为止，quote() 仅显示到第一个 NUL，.dump 命令会忽略第一个 NUL 之后的所有内容。要安全存储二进制数据，应使用 BLOB 类型而非 TEXT。

hackernews · basilikum · 7月15日 23:03 · [社区讨论](https://news.ycombinator.com/item?id=48928343)

**背景**: SQLite 允许在 TEXT 字符串中包含 NUL 字符（ASCII 0x00），但许多内部函数和 CLI 将字符串视为以 null 结尾，从而导致不一致。这是一个已知的边缘情况，开发者必须谨慎处理。

**参考链接**:
- [NUL Characters In Strings - SQLite](https://sqlite.org/nulinstr.html)
- [Fixing Data Truncation with NULs in SQLite - Runebook.dev](https://runebook.dev/en/docs/sqlite/nulinstr)
- [Nul Characters in Strings in SQLite | Hasty Briefs](https://hb.int2inf.com/en/s/item/JE7PokbqVxqJwcYxiN2bSv-sqlite-nul-characters-string-handling)

**社区讨论**: 一位评论者对这种不一致性表示担忧，指出虽然目前没有更好的策略，但当前行为令人担忧。

**标签**: `#SQLite`, `#database`, `#string handling`, `#edge cases`

---

## [政策文件呼吁公共投资开源 AI](https://www.siegelendowment.org/wp-content/uploads/2026/07/fortune-david-siegel-open-source-ai.pdf) ⭐️ 6.0/10

Siegel Family Endowment 发布的一份政策文件主张政府、企业和非营利组织应投资于免费的开源 AI，并将其与早期的开源软件运动相类比。 这一论点可能影响公共资金分配优先级，并塑造 AI 开发的未来，有望使先进 AI 更易获取，减少对专有模型的依赖。 该文件由 David Siegel 撰写，发布在 Siegel Family Endowment 网站上，评论版刊登于《财富》杂志。它强调开源 AI 可以促进创新并防止垄断。

hackernews · bilsbie · 7月15日 21:16 · [社区讨论](https://news.ycombinator.com/item?id=48927095)

**背景**: 开源 AI 指其源代码和权重公开可用的 AI 模型和工具，任何人都可以使用、修改和分发。这一争论与早期关于开源软件的讨论相似，支持者认为它能加速进步，而批评者则担心安全性和可持续性。

**社区讨论**: 社区评论意见不一：有人质疑公共资金是否应支持他们眼中的“业余爱好”，而另一些人则认为开源模型已经更便宜、更好。还有人建议使用诱导性奖金来激励开放模型的开发。

**标签**: `#open source`, `#AI policy`, `#public investment`, `#LLMs`

---

## [金属有机框架：化学界的奇迹材料](https://chemistry.berkeley.edu/news/meet-metal-organic-frameworks-chemistry%E2%80%99s-new-miracle-materials) ⭐️ 6.0/10

一篇 2018 年的文章介绍了金属有机框架（MOFs）作为一种多功能多孔材料，在催化和气体储存方面具有潜在应用。 MOFs 可以通过实现高效催化剂和先进的气体储存解决方案来革新工业，影响能源和环境领域。 MOFs 是由有机配体连接金属簇形成的配位聚合物，具有多孔结构。其可调性允许定制应用。

hackernews · andsoitis · 7月15日 23:00 · [社区讨论](https://news.ycombinator.com/item?id=48928313)

**背景**: 金属有机框架（MOFs）是一类由金属离子和有机连接体构成的多孔材料。它们具有高比表面积和可调的孔径，因此在气体储存、分离和催化方面具有前景。自 20 世纪 90 年代以来，该领域发展迅速，Omar Yaghi 等研究人员开创了其发展。

**参考链接**:
- [Metal-organic frameworks](https://en.wikipedia.org/wiki/Metal-organic_frameworks)
- [Metal–Organic Frameworks ( MOFs ): The Next Generation of Materials...](https://link.springer.com/article/10.1007/s10904-023-02657-1)

**社区讨论**: 评论简短：一位用户称赞 MOFs 是催化的“奇迹材料”，另一位指出文章来自某杂志期刊。第三条评论简单地说“沸石更好”，表明一些怀疑态度。

**标签**: `#chemistry`, `#materials science`, `#MOFs`, `#catalysis`

---

## [LLM 驱动的 MikroTik 路由器配置](https://blog.greg.technology/2026/07/14/llm-networking-with-mikrotik.html) ⭐️ 6.0/10

一篇博客文章展示了利用大型语言模型（LLM）配置 MikroTik 路由器，借助 MikroTik 的 Markdown 文档和稳定的 CLI 实现网络部署和运维自动化。 这种方法可以显著加快网络配置速度并减少人为错误，使管理 MikroTik 设备的网络工程师和 IT 专业人员受益。它还突显了 LLM 在网络自动化中的实际应用，而这一领域传统上依赖手动脚本。 MikroTik 发布了适合 LLM 摄入的 Markdown 参考文档，其 CLI 命令在不同版本间保持稳定，使其成为基于 LLM 配置的理想目标。作者的代理编写幂等脚本来应用更改，确保可重复性并作为意图记忆。

hackernews · gregsadetsky · 7月15日 22:23 · [社区讨论](https://news.ycombinator.com/item?id=48927915)

**背景**: MikroTik RouterOS 是一种流行的网络路由器和交换机操作系统，提供 GUI 和 CLI 两种配置方式。像 GPT-4 这样的大型语言模型（LLM）能够理解自然语言并生成命令，使用户可以用普通英语描述期望的网络状态，然后由 LLM 生成相应的 RouterOS 命令。

**参考链接**:
- [MikroTik Solutions: Markdown Formatting Rules](https://tangentsoft.com/mikrotik/md_rules)
- [MikroTik initial Basic Configuration - Manual Step by Step](https://getlabsdone.com/mikrotik-basic-manual-configuration-step-by-step/)

**社区讨论**: 评论者普遍认为使用 LLM 配置 MikroTik 很有前景，并指出 MikroTik 的 Markdown 文档和稳定的 CLI 是优势。一些人认为大多数问题源于用户规格不明确，另一些人则分享了使用 LLM 连接不同网络系统或审计家庭配置的经验。

**标签**: `#LLM`, `#networking`, `#MikroTik`, `#automation`

---

