# 每日速递 - 2026-07-15

> 从 27 条内容中筛选出 14 条重要资讯。

---

1. [温哥华警察局网站新增快速退出按钮保障安全](https://vpd.ca/) ⭐️ 8.0/10
2. [Tailscale SSH 漏洞允许通过前导破折号获取 root 权限](https://tailscale.com/security-bulletins) ⭐️ 8.0/10
3. [Bonsai 27B：通过极端量化在手机上运行 270 亿参数模型](https://prismml.com/news/bonsai-27b) ⭐️ 8.0/10
4. [AI 提升个人效率，但软件项目面临协调限制](https://lucumr.pocoo.org/2026/7/13/the-tower-keeps-rising/) ⭐️ 8.0/10
5. [Cursor IDE 零日漏洞：六个月后全面披露](https://mindgard.ai/blog/cursor-0day-when-full-disclosure-becomes-the-only-protection-left) ⭐️ 8.0/10
6. [并行 Codex 账户解决 20 个 Erdős 问题](https://www.starfleetmath.com/) ⭐️ 8.0/10
7. [Lobste.rs 从 MariaDB 迁移到 SQLite](https://simonwillison.net/2026/Jul/14/lobsters-sqlite/#atom-everything) ⭐️ 8.0/10
8. [Armin Ronacher：摩擦维持软件中的共同理解](https://simonwillison.net/2026/Jul/14/armin-ronacher/#atom-everything) ⭐️ 8.0/10
9. [新指标揭示提示包装格式影响 LLM 基准测试](https://arxiv.org/abs/2607.09665) ⭐️ 8.0/10
10. [综述统一图神经网络与知识图谱技术](https://arxiv.org/abs/2607.09666) ⭐️ 8.0/10
11. [地面真值数据集是人类构建的，而非客观真理](https://arxiv.org/abs/2607.09668) ⭐️ 8.0/10
12. [CLIR-Bench：面向不规则临床时间序列问答的新基准](https://arxiv.org/abs/2607.09880) ⭐️ 8.0/10
13. [国际清算银行报告警告 AI 债务融资风险](https://www.bis.org/publ/bisbull120.pdf) ⭐️ 7.0/10
14. [如何在 Go 中使用 HTMX](https://www.alexedwards.net/blog/how-i-use-htmx-with-go) ⭐️ 7.0/10

---

## [温哥华警察局网站新增快速退出按钮保障安全](https://vpd.ca/) ⭐️ 8.0/10

温哥华警察局网站现在包含一个快速退出按钮，点击后会清除浏览器历史记录、将页面标题改为“新标签页”，并重定向到天气网站。 该功能帮助家庭暴力受害者安全离开网站而不留痕迹，通过降低施暴者发现其寻求帮助的风险，可能挽救生命。 该按钮使用 JavaScript 将 document.body.style.opacity 设为 0，将 document.title 改为“新标签页”，在新窗口中打开 weather.gc.ca，并用天气网站 URL 替换当前地址。

hackernews · LookAtThatBacon · 7月15日 00:15 · [社区讨论](https://news.ycombinator.com/item?id=48914644)

**背景**: 快速退出按钮常见于处理家庭暴力等敏感话题的网站。它们提供快速隐藏页面的方式，但实际并不清除浏览器历史记录——仅掩盖当前页面。温哥华警察局的实现更进一步，还修改了页面标题并使用 location.replace 来防止后退按钮显示原始页面。

**参考链接**:
- [GitHub - bboyle/quick-exit: Button to protect privacy when ... Click Here to Exit: An Evaluation of Quick Exit Buttons GitHub - ngt-om/safety-button: A Wordpress plugin that adds ... Quick exit | NSW Design System Escape button for quickly leaving webpage - CodePen Website “Quick Escape” Button | Will Myers | Squarespace Plugins](https://github.com/bboyle/quick-exit)
- [Click Here to Exit: An Evaluation of Quick Exit Buttons](https://dl.acm.org/doi/fullHtml/10.1145/3544548.3581078)
- [How to clear browsing history using JavaScript? - Stack Overflow](https://stackoverflow.com/questions/20044554/how-to-clear-browsing-history-using-javascript)

**社区讨论**: 评论者称赞该功能，并将其与新西兰政府网站使用的 Shielded Site 弹出窗口进行比较。一些人担心网站是否真的能清除自身历史记录，指出了技术限制。

**标签**: `#web development`, `#UX design`, `#safety`, `#domestic violence`, `#privacy`

---

## [Tailscale SSH 漏洞允许通过前导破折号获取 root 权限](https://tailscale.com/security-bulletins) ⭐️ 8.0/10

Tailscale 披露了其 SSH 实现中的一个漏洞（TS-2026-009），不安全的参数处理允许攻击者通过使用前导破折号的用户名（如 '-i'）获取 root 权限。该修复已在 Tailscale 1.66.0 版本中发布，拒绝带有前导破折号的用户名。 该漏洞非常严重，因为任何通过 Tailscale ACL 拥有 SSH 访问权限的用户都可能提升至 root 权限，绕过预期的访问控制。它凸显了实现自定义 SSH 功能的风险以及安全参数解析的重要性。 该漏洞的发现得益于 Hakan Ergan 的报告。修复还包括一个服务器端更新，更改了 'src': '*' 的解释以缓解出口节点的问题。该漏洞是一个经典的参数注入缺陷，类似于在 AIX 3 等旧系统中看到的缺陷。

hackernews · jervant · 7月15日 01:08 · [社区讨论](https://news.ycombinator.com/item?id=48915004)

**背景**: Tailscale SSH 是一项功能，允许用户使用 Tailscale 的身份验证和 ACL 而非传统 SSH 密钥，SSH 进入其 Tailscale 网络上的设备。该漏洞利用了这样一个事实：SSH 命令是通过将用户名直接拼接到参数列表中而构建的，没有进行适当的清理，从而允许像 '-i' 这样的用户名被解释为 SSH 选项标志。

**参考链接**:
- [Security Bulletins - Tailscale](https://tailscale.com/security-bulletins)
- [Changelog - Tailscale](https://tailscale.com/changelog)
- [TS-2026-009：Tailscale SSH 中的参数处理不安全导致允许 Root 访问](https://memedata.com/post/132184)

**社区讨论**: 社区评论表达了对 Tailscale 的信任和对修复的怀疑。一些用户指出该漏洞是经典、古老的漏洞类别，而另一些用户则质疑为什么 Tailscale 使用自己的编号而不是 CVE。一位评论者批评修复不充分，建议使用 '--' 来分隔参数才是正确的解决方案。

**标签**: `#security`, `#vulnerability`, `#Tailscale`, `#SSH`, `#networking`

---

## [Bonsai 27B：通过极端量化在手机上运行 270 亿参数模型](https://prismml.com/news/bonsai-27b) ⭐️ 8.0/10

PrismML 发布了 Bonsai 27B，这是一个基于 Qwen3.6 27B 的 270 亿参数多模态模型，经过极端的 1 比特和三值权重量化后，内存占用从约 50GB 降至约 4GB，可在移动设备上运行。 这一突破使得 270 亿参数级别的模型能在手机上本地运行，将高级推理和工具使用能力带入设备端 AI，无需依赖云端，可能加速强大 AI 在消费设备上的普及。 该模型在所有组件（嵌入、注意力、MLP、LM 头）上使用 1 比特或三值权重，每个权重的有效比特数为 1.125，相比 FP16 实现约 14.2 倍压缩；视觉编码器单独量化为 4 比特。此外，它对 KV 缓存量化表现出异常的鲁棒性，支持设备上数万 tokens 的多轮上下文。

hackernews · xenova · 7月14日 17:50 · [社区讨论](https://news.ycombinator.com/item?id=48910545)

**背景**: 量化通过降低模型权重的精度（例如 1 比特或三值）来减少内存占用并加速推理。极端量化（1-2 比特）可将模型压缩高达 50 倍，同时保留大部分准确性。Bonsai 27B 基于 Qwen3.6 27B（一个大型多模态模型），并采用新颖的量化方案实现手机级部署。

**参考链接**:
- [PrismML — Announcing Bonsai 27B: The First 27B-Class Model to ...](https://prismml.com/news/bonsai-27b)
- [prism-ml/Bonsai-27B-gguf · Hugging Face](https://huggingface.co/prism-ml/Bonsai-27B-gguf)
- [Bonsai 27B - Bonsai - docs.prismml.com](https://docs.prismml.com/models/bonsai-27b)

**社区讨论**: 社区评论将 Bonsai 27B 与 Gemma 4 12B 4-bit QAT 进行比较，指出两者均小于 7GB 且可在现代设备上运行，但工具调用性能令人担忧。据报道苹果正在与 PrismML 洽谈。一些用户在 Hugging Face 上尝试了模型，但无法在 LM Studio 中运行，还有评论者对演示食谱的准确性提出质疑。

**标签**: `#AI/ML`, `#model compression`, `#quantization`, `#on-device AI`, `#open source`

---

## [AI 提升个人效率，但软件项目面临协调限制](https://lucumr.pocoo.org/2026/7/13/the-tower-keeps-rising/) ⭐️ 8.0/10

一篇论文指出，虽然 AI 工具极大提升了个人的代码生成速度，但大型软件项目的根本限制在于协调和可组合性，而不仅仅是代码编写速度。 这挑战了 AI 将很快实现更宏大软件项目的流行说法，强调人类协调和共同理解仍然是关键瓶颈。 该论文引用了“Lisp 诅咒”概念，即强大的个人工具减少了协作的动机，导致通用软件生态系统较差。

hackernews · cdrnsf · 7月14日 16:57 · [社区讨论](https://news.ycombinator.com/item?id=48909785)

**背景**: 可组合性是一种系统设计原则，组件可以被选择和组装成各种组合以满足用户需求。在软件工程中，高可组合性实现了复用和灵活性，但实现它需要开发者之间的仔细协调和共同理解。

**参考链接**:
- [Composability - Wikipedia](https://en.wikipedia.org/wiki/Composability)
- [What is composability? - MuleSoft](https://www.mulesoft.com/integration/what-is-composability)
- [What is composability and why it matters in tech today](https://www.contentstack.com/blog/composable/what-is-composability-and-why-it-matters-in-tech-today)

**社区讨论**: 评论者赞同这一论点，指出 AI 代理常常通过将过多功能折叠到自身而违反可组合性，且经验不足的开发者的架构直觉可能加剧问题。一些人将其与 Lisp 诅咒相类比，即强大的个人工具减少了协作产出。

**标签**: `#software engineering`, `#AI-assisted programming`, `#composability`, `#coordination`, `#programming languages`

---

## [Cursor IDE 零日漏洞：六个月后全面披露](https://mindgard.ai/blog/cursor-0day-when-full-disclosure-becomes-the-only-protection-left) ⭐️ 8.0/10

Mindgard 披露了 Cursor IDE 中的一个零日漏洞：当项目文件夹中存在恶意的 git.exe 时，Cursor 会自动执行该文件，无需用户交互，从而导致任意代码执行。尽管于 2025 年 12 月 15 日报告该问题并多次跟进，Cursor 在 197 多个版本后仍未修复此漏洞。 该漏洞影响广泛使用的 AI 编码工具 Cursor 的所有 Windows 用户，而供应商的沉默引发了关于负责任披露和用户安全的严重担忧。此次披露迫使各组织评估自身风险并实施补偿性控制措施。 攻击者需要在仓库根目录放置一个名为 git.exe 的恶意可执行文件；由于 Windows 的当前目录搜索顺序，Cursor 会自动执行该文件。该漏洞通过 HackerOne 报告，最初被标记为“信息性”并关闭，后重新打开并确认，但至今未发布修复。

hackernews · Synthetic7346 · 7月14日 17:58 · [社区讨论](https://news.ycombinator.com/item?id=48910676)

**背景**: Cursor 是一款基于 VS Code 的 AI 驱动代码编辑器，因其集成的 AI 功能而深受开发者欢迎。零日漏洞是指供应商未知且未修补的缺陷。任意代码执行（ACE）允许攻击者在受害者机器上运行恶意代码。Windows 的可执行文件搜索顺序优先于当前目录而非系统 PATH，此攻击正是利用了这一点。

**参考链接**:
- [Cursor 0day: When Full Disclosure Becomes the Only Protection ...](https://mindgard.ai/blog/cursor-0day-when-full-disclosure-becomes-the-only-protection-left)
- [Cursor 0day: When Full Disclosure Becomes the Only...](https://daily.dev/posts/cursor-0day-when-full-disclosure-becomes-the-only-protection-left-dxmpfvbvn)
- [Arbitrary code execution - Wikipedia](https://en.wikipedia.org/wiki/Arbitrary_code_execution)

**社区讨论**: 一些评论者认为该漏洞并不严重，因为需要系统中已存在恶意可执行文件，并将其与替换 .bashrc 相类比。另一些人则对 Cursor 在无提示下运行可执行文件以及供应商数月忽视报告感到震惊。关于这是 Cursor 的漏洞还是 Windows 的特性存在争议。

**标签**: `#security`, `#vulnerability`, `#AI tools`, `#responsible disclosure`, `#Cursor`

---

## [并行 Codex 账户解决 20 个 Erdős 问题](https://www.starfleetmath.com/) ⭐️ 8.0/10

一个项目使用 20 个并行的 OpenAI Codex 账户，借助大量计算资源和搜索框架，为 20 个未解决的 Erdős 问题生成了 Lean 4 证明。 这展示了一种可扩展的 AI 辅助形式定理证明方法，可能加速数学发现，并引发关于计算成本和开放获取的讨论。 该系统使用了数千个 vCPU、嵌入证明数据库，Lean 4 证明由 Fable 审核并由 Chat 5.6 Sol 生成。该项目托管在 starfleetmath.com。

hackernews · colin7snyder · 7月15日 00:15 · [社区讨论](https://news.ycombinator.com/item?id=48914646)

**背景**: Erdős 问题是 Paul Erdős 提出的数学猜想，通常带有奖金。Lean 4 是一个用于形式验证的证明助手和函数式编程语言。OpenAI Codex 是一个能生成代码和证明的 AI 系统。

**参考链接**:
- [Erdős problems](https://en.wikipedia.org/wiki/Erdős_problems)
- [Lean theorem prover](https://en.wikipedia.org/wiki/Lean_theorem_prover)
- [OpenAI Codex - Wikipedia](https://en.wikipedia.org/wiki/OpenAI_Codex)

**社区讨论**: 评论者对技术框架和计算规模表示兴趣，质疑资金来源，并询问代码和证明语料库是否开源。

**标签**: `#AI`, `#theorem proving`, `#Lean 4`, `#parallel computing`, `#mathematics`

---

## [Lobste.rs 从 MariaDB 迁移到 SQLite](https://simonwillison.net/2026/Jul/14/lobsters-sqlite/#atom-everything) ⭐️ 8.0/10

社区新闻网站 Lobste.rs 已成功将其生产环境的 Rails 应用从 MariaDB 迁移到 SQLite，完成了自 2018 年开始规划的迁移。 此次迁移证明了 SQLite 作为中等规模 Web 应用主数据库的可行性，可降低 CPU 和内存使用率、减少成本并简化架构。 该站点现在运行在单个 VPS 上，主 SQLite 数据库文件约 3.8GB，另有独立的缓存、队列和 rack-attack 数据库。迁移 PR 在 30 次提交中增加了 735 行代码，删除了 593 行。

rss · Simon Willison · 7月14日 19:44

**背景**: SQLite 是一种嵌入式、无服务器的 SQL 数据库引擎，通常用于本地存储，但历史上不推荐用于高并发 Web 应用。然而，通过适当配置（如 WAL 模式），对于中等流量的网站，SQLite 可以成为 MariaDB 或 PostgreSQL 等客户端-服务器数据库的高性能且经济高效的替代方案。

**参考链接**:
- [lobste.rs is now running on SQLite | Lobsters](https://lobste.rs/s/ko1ji1/lobste_rs_is_now_running_on_sqlite)
- [Migrate to SQLite by thomasdziedzic · Pull Request #1705 · lobsters/lobsters](https://github.com/lobsters/lobsters/pull/1705)
- [Appropriate Uses For SQLite](https://sqlite.org/whentouse.html)

**社区讨论**: 社区讨论强调了技术细节，例如使用 NOCASE 排序规则（仅支持 ASCII）与 MariaDB 的 utf8mb4_general_ci 的对比，以及倾向于使用 Contentless-Delete FTS 表。总体情绪积极，许多人称赞资源使用减少和运维简化。

**标签**: `#SQLite`, `#Rails`, `#database migration`, `#web performance`

---

## [Armin Ronacher：摩擦维持软件中的共同理解](https://simonwillison.net/2026/Jul/14/armin-ronacher/#atom-everything) ⭐️ 8.0/10

Armin Ronacher 认为，软件项目中的共同理解是通过摩擦来维持的，而 AI 代理可能会绕过缓慢但必要的知识传递过程，从而侵蚀这种理解。 这一见解挑战了 AI 代理纯粹加速开发的普遍说法，揭示了潜在的隐性成本：因协作摩擦而产生的隐性知识和团队协调的丧失。 Ronacher 强调，共同语言包括对概念、边界、不变量、所有权和系统形态的理解，这些存在于代码审查、对话以及解释变更的经验中。

rss · Simon Willison · 7月14日 18:04

**背景**: 在软件工程中，共同理解对于有效协作和系统一致性至关重要。摩擦，例如需要阅读他人代码和提问，迫使知识传递和协调。能够自主进行更改的 AI 代理可能会绕过这种摩擦，可能导致团队理解碎片化。

**标签**: `#software engineering`, `#AI agents`, `#knowledge transfer`, `#software design`, `#team dynamics`

---

## [新指标揭示提示包装格式影响 LLM 基准测试](https://arxiv.org/abs/2607.09665) ⭐️ 8.0/10

一篇新论文引入了格式敏感指数（FSI）和可解析性敏感指数（PSI），用于量化提示包装格式如何影响 LLM 基准测试分数，发现准确率方差足以颠覆排行榜结论。 这项研究揭示了 LLM 评估中的一个关键方法论缺陷：提示包装中的微小格式差异可能显著改变模型排名，削弱了排行榜和比较的可靠性。 该研究分析了跨越 7 个 QA 任务、5 个包装家族和 4 个模型（7B-72B 参数）的 14 万次生成，发现平均 FSI 在不同模型间变化超过 30 倍，且主要由可解析性失败驱动。

rss · arXiv cs.AI · 7月14日 04:00

**背景**: 提示包装是结构化 LLM 输入的模板，通常包含输出格式的指令。即使措辞或标点的微小变化也会影响模型行为。该论文认为，不考虑包装方差而报告准确率在统计上是脆弱的。

**参考链接**:
- [[2607.09665] Format Sensitivity Index: Token-Controlled ...](https://arxiv.org/abs/2607.09665)
- [Format Sensitivity Index: Token-Controlled Prompt Wrapper ...](https://arxiv.org/pdf/2607.09665)

**标签**: `#LLM`, `#benchmarking`, `#prompt engineering`, `#evaluation`, `#AI safety`

---

## [综述统一图神经网络与知识图谱技术](https://arxiv.org/abs/2607.09666) ⭐️ 8.0/10

一篇全面综述提出了基于图神经网络的知识图谱技术的双层分类法，涵盖知识图谱构建、嵌入、推理和应用。 该综述填补了知识图谱全流程中 GNN 方法系统综述的空白，提供了一个统一框架，将指导人工智能和机器学习领域的未来研究与应用。 分类法包括知识图谱技术流程（构建、嵌入、推理、应用）和基于 GNN 的视角（GCN、GAT、HGNN）。论文分析了 GNN 在不同知识图谱生命周期任务中的优势，并讨论了未解决的挑战。

rss · arXiv cs.LG · 7月14日 04:00

**背景**: 图神经网络（GNN）是设计用于处理图结构数据的深度学习模型，其中节点代表实体，边代表关系。知识图谱（KG）存储关于实体及其相互连接的结构化信息。GCN 和 GAT 是流行的 GNN 架构，它们聚合邻居信息，其中 GAT 使用注意力机制对不同邻居的贡献进行加权。

**参考链接**:
- [Graph neural network - Wikipedia](https://en.wikipedia.org/wiki/Graph_neural_network)
- [Graph Convolutional Networks (GCNs): Architectural Insights ...](https://www.geeksforgeeks.org/deep-learning/graph-convolutional-networks-gcns-architectural-insights-and-applications/)
- [[1710.10903] Graph Attention Networks](https://arxiv.org/abs/1710.10903)

**标签**: `#Graph Neural Networks`, `#Knowledge Graphs`, `#Survey`, `#Machine Learning`, `#AI`

---

## [地面真值数据集是人类构建的，而非客观真理](https://arxiv.org/abs/2607.09668) ⭐️ 8.0/10

arXiv 上的一篇新立场论文认为，机器学习中的地面真值数据集并非客观中立的测量结果，而是由人类和技术的安排构建的，并主张承认其情境性以提高 ML 的可靠性。 这挑战了机器学习中关于地面真值客观性的基本假设，可能影响数据集的构建和模型的评估方式，并有助于构建更透明、负责任和可靠的人工智能系统。 该论文引入了“情境可靠性”的概念，包括阐明模型及其真理主张的局限性和优势，并认为更多地关注地面真值的构建可以支持透明度、问责制和跨学科工作。

rss · arXiv cs.LG · 7月14日 04:00

**背景**: 地面真值数据集被用作训练和评估机器学习模型的参考值。传统上，它们被视为客观基准，但本文认为它们受到人类选择和技术限制的影响，因此是偶然的且依赖于情境的。

**参考链接**:
- [Ground Truth Data: What It Is and How to Build It Right](https://labelyourdata.com/articles/machine-learning/ground-truth-data)
- [Ground Truth Data Topics, Benchmarks, Analysis - Springer](https://link.springer.com/chapter/10.1007/978-981-99-3393-8_7)

**标签**: `#machine learning`, `#datasets`, `#bias`, `#epistemology`, `#reliability`

---

## [CLIR-Bench：面向不规则临床时间序列问答的新基准](https://arxiv.org/abs/2607.09880) ⭐️ 8.0/10

研究人员推出了 CLIR-Bench，这是一个针对不规则临床时间序列的多模态问答基准，基于去标识化的 ICU 记录构建，包含 6600 个实例，覆盖 11 个临床变量和 4 个能力维度。 该基准填补了评估 AI 模型对稀疏、不规则采样临床数据进行推理能力的空白，这对于可靠的临床决策支持系统至关重要。 CLIR-Bench 中的每个问题都关联了明确的时间证据和任务特定的答案推导规则，从而能够评估答案准确性和证据使用情况。实验表明，现有的通用模型难以检索和推理稀疏的临床证据。

rss · arXiv cs.CL · 7月14日 04:00

**背景**: 临床时间序列数据（如生命体征和实验室结果）常因临床需求不同而不规则采样。现有的问答基准大多关注规则采样的时间序列或静态医疗数据，未能测试模型在真实不规则模式上的表现。CLIR-Bench 通过提供带有明确时间证据的原则性基准填补了这一空白。

**参考链接**:
- [[2607.09880] CLIR-Bench: Benchmarking Multimodal Question ...](https://arxiv.org/abs/2607.09880)
- [Clinical QA: Tackling Irregular Time Series with CLIR-Bench](https://www.machinebrief.com/news/clinical-qa-tackling-irregular-time-series-with-clir-bench-5203)

**标签**: `#clinical time series`, `#question answering`, `#benchmark`, `#healthcare AI`, `#irregular sampling`

---

## [国际清算银行报告警告 AI 债务融资风险](https://www.bis.org/publ/bisbull120.pdf) ⭐️ 7.0/10

国际清算银行（BIS）发布了一份简报，分析 AI 投资的融资情况，警告科技巨头通过债务融资扩张对全球经济构成风险，并质疑 AI 能否在基础设施提供商之外产生足够利润。 这项分析意义重大，因为它指出了主要 AI 公司大规模债务积累可能带来的系统性风险——如果 AI 未能实现预期回报，可能导致金融不稳定。同时，它也挑战了 AI 将广泛提升生产力和盈利能力的普遍说法。 该简报指出，顶级 AI 基础设施公司（Alphabet、亚马逊、Meta、微软、甲骨文）在过去五年中增加了约 3500 亿美元债务，用于数据中心扩张。报告给出了高增长和中等增长情景，但未包含低增长情景，一些评论者对此表示担忧。

hackernews · 1vuio0pswjnm7 · 7月14日 21:58 · [社区讨论](https://news.ycombinator.com/item?id=48913443)

**背景**: BIS 常被称为“央行的央行”，发布关于全球金融稳定的研究。AI 投资激增，科技公司大量举债建设数据中心和购买 GPU，押注 AI 将推动未来收入。然而，除了销售 AI 基础设施的公司外，大多数企业的盈利能力尚未得到证实。

**参考链接**:
- [BIS Bulletins](https://www.bis.org/bisbulletins/index.htm)
- [Tech giants are piling on debt to fund AI expansion](https://www.businessreport.com/article/tech-giants-are-piling-on-debt-to-fund-ai-expansion)
- [Tech companies tap debt markets to fund AI and cloud expansion | Reuters](https://www.reuters.com/business/media-telecom/tech-companies-tap-debt-markets-fund-ai-cloud-expansion-2026-05-11/)

**社区讨论**: 评论者就 AI 的盈利能力展开辩论，有人指出除了基础设施提供商外，很少有公司能从 AI 中获利，并以 Duolingo 作为潜在反例。另一人质疑 BIS 图表中缺少低增长情景，还有人推测，如果数据中心使用量崩溃，已建成的基础设施带来的廉价电力可能成为一线希望。

**标签**: `#AI`, `#finance`, `#economics`, `#risk`, `#BIS`

---

## [如何在 Go 中使用 HTMX](https://www.alexedwards.net/blog/how-i-use-htmx-with-go) ⭐️ 7.0/10

Alex Edwards 发布了一篇实用指南，介绍如何将 HTMX 与 Go 集成，通过服务端渲染和 HTMX 属性，用最少的 JavaScript 构建响应式 Web 应用。 该指南帮助 Go 开发者采用超媒体驱动的 Web 开发方式，降低前端复杂性和 JavaScript 依赖，同时利用 Go 的性能和简洁性。 文章涵盖了如何使用 Go 标准库设置 HTMX、处理部分页面更新，以及使用 hx-get 和 hx-target 等 HTMX 属性创建动态交互，无需编写自定义 JavaScript。

hackernews · gnabgib · 7月14日 19:55 · [社区讨论](https://news.ycombinator.com/item?id=48912175)

**背景**: HTMX 是一个轻量级 JavaScript 库，通过自定义属性扩展 HTML，直接在标记中支持 AJAX、CSS 过渡和 WebSocket。Go 是一种静态类型、编译型语言，以构建 Web 服务器的简洁性和高性能著称。将 HTMX 与 Go 结合，开发者可以在保持后端逻辑用 Go 编写的同时，创建现代、响应式的用户界面。

**参考链接**:
- [Htmx](https://en.wikipedia.org/wiki/Htmx)
- [htmx - high power tools for html](https://htmx.org/)

**社区讨论**: 评论者称赞了这种方法，有人分享了补充工具如 templ（用于类型安全模板）和“GUS 栈”（Go、Unix、SQLite）。其他人表示欣赏减少 JavaScript 样板代码的做法，并指出与现代框架相比的简洁性。

**标签**: `#Go`, `#HTMX`, `#web development`, `#templating`, `#full-stack`

---

