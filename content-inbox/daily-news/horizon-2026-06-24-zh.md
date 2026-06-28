# 每日速递 - 2026-06-24

> 从 30 条内容中筛选出 12 条重要资讯。

---

1. Karpathy 提出的第三范式：LLM 作为持久团队成员 ⭐️ 9.0/10
2. LLM 淹没漏洞报告，稀释其价值 ⭐️ 8.0/10
3. Qwen-AgentWorld：面向通用智能体的语言世界模型 ⭐️ 8.0/10
4. Bunny DNS 免费：无查询费，支持最多 500 个域名 ⭐️ 7.0/10
5. 树莓派 Pico W 固件实现免驱 USB Wi-Fi 适配器 ⭐️ 7.0/10
6. FUTO Swipe：开源滑行输入模型发布 ⭐️ 7.0/10
7. Datasette 1.0a35 新增创建/修改表的 JSON API ⭐️ 7.0/10
8. Memos：轻量级自托管笔记工具 ⭐️ 7.0/10
9. 杰瑞的地图：60 多年的虚构地图绘制 ⭐️ 6.0/10
10. 纪念 Word 拼写检查红色波浪线的创造者 Tony Krueger ⭐️ 6.0/10
11. 用 OPFS 和 Pyodide 测试 Datasette Lite ⭐️ 6.0/10
12. DeepSeek 缓存命中率达 95% ⭐️ 6.0/10

---

## [Karpathy 提出的第三范式：LLM 作为持久团队成员](https://twitter.com/karpathy/status/tweet-2069547676849557725) ⭐️ 9.0/10

Andrej Karpathy 描述了一种与 LLM 交互的新范式，其中 Claude 成为一个持久的、异步的实体，拥有组织范围的工具和上下文，与人类团队协同工作。这是继网站和应用范式之后的第三次 LLM UI/UX 重大重新设计。 这种范式转变可能从根本上改变 AI 融入企业工作流程的方式，从孤立的工具转变为无缝的团队成员。它代表了 AI 集成的新水平，可能重新定义组织中的生产力和协作。 Karpathy 强调，这不是简单的通过 Slack 进行 RAG 问答，而是一个深度集成的多人系统，其中 Claude 编写大部分代码，每个人都感觉像管理者。该产品需要大量的工程工作才能跨工具、集成、计算环境、内存和安全性实现“无缝工作”。

twitter · Andrej Karpathy · 6月23日 22:26

**背景**: LLM 交互已从使用网站（如 ChatGPT）发展到下载桌面应用（如 Claude 应用）。新范式将 LLM 视为一个持久的、异步的团队成员，能够访问组织工具和上下文，使其能够持续与人类一起工作。这一概念与新兴技术如 LLM 代理的持久运行时和企业集成的模型上下文协议（MCP）相一致。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://x.com/karpathy/status/2069547676849557725">This is a new paradigm for interacting with Claude that is ...</a></li>
<li><a href="https://arxiv.org/pdf/2604.04660">Springdrift: An Auditable Persistent Runtime for LLM Agents ...</a></li>
<li><a href="https://www.strategy.com/software/blog/model-context-protocol-mcp-for-enterprise-ai-integration">Model context protocol (MCP) for enterprise AI integration</a></li>

</ul>
</details>

**社区讨论**: Twitter 上的讨论显示出高度参与（14.7k 点赞，752 条回复），许多用户对这一范式转变表示兴奋。一些评论者指出这与他们内部正在构建的内容相似，而另一些人则质疑企业部署的实用性。Karpathy 澄清说，这不是一个简单的黑客马拉松项目，而是一个深度工程化的产品。

**标签**: `#LLM`, `#UI/UX`, `#AI integration`, `#paradigm shift`, `#Claude`

---

## [LLM 淹没漏洞报告，稀释其价值](https://words.filippo.io/vuln-reports/) ⭐️ 8.0/10

Filippo Valsorda 指出，LLM 自动发现漏洞的能力使传统漏洞报告不再特殊，导致大量垃圾报告涌入，需要新的披露方法。 这一变化削弱了漏洞披露流程的信任和效率，迫使维护者筛选低质量报告，可能错过关键问题。 作者提到每周收到 2-5 份主动提交的漏洞报告，其中一半是 LLM 生成的误报（如不良 CSS），其余则像是勒索尝试。

hackernews · goranmoomin · 6月23日 23:42 · [社区讨论](https://news.ycombinator.com/item?id=48653216)

**背景**: 漏洞披露是安全研究人员向软件维护者报告漏洞、修复并公开披露的过程。LLM 现在可以自动扫描代码中的潜在漏洞，以低成本生成报告，这增加了报告数量但也带来了更多噪音。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://arxiv.org/abs/2605.21779">FuzzingBrain V2: A Multi-Agent LLM System for Automated ...</a></li>
<li><a href="https://cheatsheetseries.owasp.org/cheatsheets/Vulnerability_Disclosure_Cheat_Sheet.html">Vulnerability Disclosure - OWASP Cheat Sheet Series</a></li>

</ul>
</details>

**社区讨论**: 评论者普遍认同垃圾报告问题，有人认为这种情况是暂时的，因为 LLM 也将帮助修复漏洞并改进发布前检测。其他人则强调需要更好的工程实践和内存安全语言来减少漏洞类别。

**标签**: `#security`, `#vulnerability disclosure`, `#LLM`, `#automation`, `#software engineering`

---

## [Qwen-AgentWorld：面向通用智能体的语言世界模型](https://arxiv.org/abs/2606.24597) ⭐️ 8.0/10

Qwen-AgentWorld 提出了一个 350 亿参数的语言世界模型，通过长链式推理在七个领域（MCP、搜索、终端、SWE、Android、Web、OS）中模拟智能体环境，使智能体能够预测行动后果。 这解决了基于 LLM 的智能体的一个关键缺陷：无法理解其行动将导致的未来状态，而这对于安全有效的规划至关重要。它可能使复杂、开放式任务中的自主智能体更加稳健。 该模型从持续预训练开始（CPT → SFT → RL），以环境建模为训练目标，而非事后适配。它覆盖七个统一领域，并使用长链式推理进行模拟。

hackernews · ilreb · 6月24日 02:21 · [社区讨论](https://news.ycombinator.com/item?id=48654351)

**背景**: 世界模型根据当前观察和行动预测环境动态，是推理和规划的核心认知机制。传统的基于 LLM 的智能体缺乏这种能力，常常无法在动态环境中预见其行动的后果。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://arxiv.org/abs/2606.24597">[2606.24597] Qwen-AgentWorld: Language World Models for ...</a></li>
<li><a href="https://github.com/QwenLM/Qwen-AgentWorld/tree/main">GitHub - QwenLM/Qwen-AgentWorld: Qwen-AgentWorld: Language ...</a></li>
<li><a href="https://qwen.ai/research/">Qwen</a></li>

</ul>
</details>

**社区讨论**: 评论者指出了模拟抽象和复杂系统的挑战，并质疑世界模型如何融入智能体工作流——是作为在执行前审查行动的附加组件。一些人指出多模型编排是未来的方向。

**标签**: `#AI agents`, `#world models`, `#LLM`, `#reinforcement learning`, `#simulation`

---

## [Bunny DNS 免费：无查询费，支持最多 500 个域名](https://bunny.net/blog/were-making-bunny-dns-free/) ⭐️ 7.0/10

Bunny.net 宣布 Bunny DNS 现已免费，取消了所有 DNS 查询费用，并为每个账户提供最多 500 个域名的免费 DNS 托管，无查询限制或隐藏费用。 此举使 Bunny DNS 成为 Cloudflare 的强有力欧盟替代方案，通过消除 DNS 解析的成本障碍，可能加速互联网速度，并促进 DNS 市场的竞争。 免费层包括智能记录、健康监控和全球任播网络，没有关键功能被锁定在企业计划之后。Bunny.net 是一家私营公司，仅在 2022 年获得 600 万美元融资。

hackernews · dabinat · 6月24日 08:50 · [社区讨论](https://news.ycombinator.com/item?id=48657030)

**背景**: DNS（域名系统）将域名转换为 IP 地址。许多 DNS 提供商按查询量收费，这对高流量网站可能成本高昂。Bunny DNS 是一种权威 DNS 服务，运行在支持 IPv4 和 IPv6 的双栈任播网络上。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://bunny.net/dns/">Bunny DNS | The #1 Scriptable DNS Platform | bunny.net</a></li>
<li><a href="https://docs.bunny.net/dns">Bunny DNS - bunny.net Documentation</a></li>
<li><a href="https://en.wikipedia.org/wiki/DNS_hosting_service">DNS hosting service</a></li>

</ul>
</details>

**社区讨论**: 评论者称赞此举，一些人强调 Bunny 是 Cloudflare 急需的欧盟替代方案。其他人注意到公司的有机增长方式及其网站加载速度很快。还有用户指出 Terraform 提供商的可用性。

**标签**: `#DNS`, `#free service`, `#cloud infrastructure`, `#EU tech`, `#performance`

---

## [树莓派 Pico W 固件实现免驱 USB Wi-Fi 适配器](https://gitlab.com/baiyibai/pico-usb-wifi) ⭐️ 7.0/10

该项目为缺乏内置 Wi-Fi 的设备（如台式机或嵌入式系统）提供了一种低成本、实用的 Wi-Fi 连接方案。同时，它挑战了关于此类实现可行性的假设——此前 AI 模型曾认为不可行。 该固件使用 USB CDC-NCM（网络控制模型）将 Pico W 呈现为类似以太网的网络接口。项目托管在 GitLab 而非 GitHub 上，部分社区成员对此表示赞赏，认为这是对 GitHub 垄断的抵制。

hackernews · byb · 6月24日 03:17 · [社区讨论](https://news.ycombinator.com/item?id=48654676)

**背景**: USB CDC-NCM 是一种用于通过 USB 实现以太网连接的标准协议，常用于免驱网络适配器。树莓派 Pico W 是一款内置 Wi-Fi 的低成本微控制器板，该固件将其重新用作 USB Wi-Fi 适配器，无需在主机上安装自定义驱动。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://gitlab.com/baiyibai/pico-usb-wifi">白一百 / pico-usb-wifi · GitLab</a></li>
<li><a href="https://en.wikipedia.org/wiki/Ethernet_over_USB">Ethernet over USB - Wikipedia</a></li>
<li><a href="https://github.com/sidd-kishan/PicoPiFi">GitHub - sidd-kishan/PicoPiFi: A driverless usb rndis wifi ...</a></li>

</ul>
</details>

**社区讨论**: 社区评论提到了相关先例，例如在 BlueSCSI 和 PicoGUS 等项目中将 Pico W 用作以太网桥接器。一位用户计划使用树莓派配合 RaspAP 作为旅行路由器，另一位则提到了类似项目用于 DualSense 适配器。讨论中还赞扬了选择 GitLab 而非 GitHub 的做法。

**标签**: `#Raspberry Pi Pico`, `#USB Wi-Fi`, `#embedded`, `#open source`, `#networking`

---

## [FUTO Swipe：开源滑行输入模型发布](https://swipe.futo.tech/) ⭐️ 7.0/10

FUTO 发布了 FUTO Swipe，这是一系列用于手机键盘准确滑行输入的开源模型，包括一个布局无关的编码器、一个布局特定的解码器和一个轻量级上下文语言模型。 该项目解决了注重隐私的键盘中滑行输入准确率低这一长期痛点，为 Gboard 等专有解决方案提供了可行的开源替代方案。 这些模型完全在设备上离线运行，占用空间小，FUTO 还发布了用于训练的 100 万条滑行数据集。该系统与布局无关，意味着它可以与运行时提供的任何键盘布局配合使用。

hackernews · futohq · 6月23日 17:50 · [社区讨论](https://news.ycombinator.com/item?id=48648619)

**背景**: 滑行输入（也称为手势输入）允许用户通过在键盘上滑动手指而不抬起手指来输入单词。传统的滑行引擎经常出现单词重叠错误，并且需要大型专有模型。FUTO Swipe 旨在提供一种快速、准确且开放的替代方案。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://swipe.futo.tech/">FUTO Swipe</a></li>
<li><a href="https://huggingface.co/futo-org/futo-swipe">futo-org/futo-swipe · Hugging Face</a></li>
<li><a href="https://www.productcool.com/product/futo-swipe">FUTO Swipe - Open models for on-device swipe typing | ProductCool</a></li>

</ul>
</details>

**社区讨论**: 社区反馈总体积极，用户指出新模型接近 Gboard 的质量，但仍存在随机大写和缺乏上下文感知等问题。一些用户在更新后已完全切换到 FUTO Keyboard。

**标签**: `#mobile keyboard`, `#swipe typing`, `#machine learning`, `#open source`, `#user experience`

---

## [Datasette 1.0a35 新增创建/修改表的 JSON API](https://simonwillison.net/2026/Jun/23/datasette/#atom-everything) ⭐️ 7.0/10

Datasette 1.0a35 引入了新的“创建表”界面和 JSON API，以及“修改表”界面和 JSON API，使用户能够以编程方式定义和修改表结构。此版本还包含了自定义模板的稳定模板上下文文档。 这些新的 API 显著扩展了 Datasette 的功能，允许用户直接通过 Web 界面或编程方式管理数据库结构，这是迈向 1.0 版本的重要一步。这使得 Datasette 在数据探索和应用程序构建方面更加强大。 创建表 API 支持定义列、主键、自定义列类型、NOT NULL 约束、字面量和表达式默认值以及单列外键。修改表 API 支持添加、重命名、重新排序和删除列，以及更改列类型、默认值、约束、主键、外键和表名。

rss · Simon Willison · 6月23日 21:34

**背景**: Datasette 是一个基于 SQLite 的开源数据探索和发布工具，提供 Web 界面和 JSON API 用于查询数据库。此前，创建或修改表需要直接使用 SQLite 命令或外部插件；此 alpha 版本将这些功能原生集成到 Datasette 中。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://docs.datasette.io/en/latest/json_api.html">JSON API - Datasette documentation</a></li>
<li><a href="https://simonwillison.net/2026/Jun/23/datasette/">Release: datasette 1.0a35 - Simon Willison's Weblog</a></li>

</ul>
</details>

**标签**: `#datasette`, `#release`, `#database`, `#json-api`, `#open-source`

---

## [Memos：轻量级自托管笔记工具](https://twitter.com/FakeMaidenMaker/status/tweet-2069669098087145860) ⭐️ 7.0/10

Memos 是一款开源、自托管的笔记工具，以 Markdown 格式存储笔记，在 GitHub 上已获得超过 6.1 万颗星。它可以通过一条 Docker 命令部署，镜像大小仅为 20MB。 该工具解决了用户对数据所有权和隐私日益增长的担忧，让用户完全掌控自己的笔记，这与基于云的服务不同。其轻量级设计和简单部署使得个人和小团队能够轻松获得主流笔记应用的私有替代方案。 Memos 采用 MIT 许可证，具有时间线界面，可快速捕捉灵感、待办事项和片段。它支持零遥测、完整数据导出，并可使用 Docker Compose 在个人服务器上运行，实现持久化存储。

twitter · Ren · 6月24日 06:29

**背景**: 自托管软件允许用户在自己的服务器上运行应用程序，确保数据隐私和控制权。Markdown 是一种轻量级标记语言，用于格式化纯文本，常用于笔记。Docker 通过将应用程序打包到容器中简化了部署。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://github.com/usememos/memos">GitHub - usememos/memos: Open-source, self-hosted note-taking ...</a></li>
<li><a href="https://usememos.com/">Memos - Open-Source, Self-Hosted Note-Taking App</a></li>
<li><a href="https://usememos.com/docs/deploy/docker-compose">Docker Compose - Memos</a></li>

</ul>
</details>

**标签**: `#self-hosted`, `#note-taking`, `#privacy`, `#open-source`, `#Docker`

---

## [杰瑞的地图：60 多年的虚构地图绘制](http://www.jerrysmap.com/the-map) ⭐️ 6.0/10

艺术家杰瑞·格雷辛格自 1963 年以来持续绘制一幅虚构土地的地图，使用定制的卡片驱动系统指导每一块新图块的创作。该项目现已涵盖 3000 多块手绘面板，并拥有一个交互式网页版本。 这个持续数十年的项目展示了基于规则的系统如何维持并发展终身的创作实践。它还突出了艺术、程序生成和局外人艺术的交汇点，启发了艺术家和游戏设计师。 卡牌组包含诸如添加城市、河流或虚空等指令，杰瑞每次抽卡时都会绘制一个新面板。地图并非数字化，而是物理的，每块面板均为手绘，网页版本是数字复制品。

hackernews · turtleyacht · 6月23日 18:40 · [社区讨论](https://news.ycombinator.com/item?id=48649435)

**背景**: 杰瑞·格雷辛格最初只是随手涂鸦，后来用卡片系统规范了创作过程以克服创意瓶颈。该项目被视为局外人艺术，类似于亨利·达格的虚构世界或游戏《矮人要塞》，后者也使用程序生成。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Jerry_Gretzinger">Jerry Gretzinger - Wikipedia</a></li>
<li><a href="http://www.jerrysmap.com/the-map">The Map - Jerry's Map</a></li>

</ul>
</details>

**社区讨论**: 评论者分享了交互式网页版本和视频纪录片的链接，表达了对该项目冥想性和系统性的赞赏。一些人将其与《矮人要塞》和《诺姆》等其他程序生成作品相提并论。

**标签**: `#art`, `#map-making`, `#creative-process`, `#outsider-art`

---

## [纪念 Word 拼写检查红色波浪线的创造者 Tony Krueger](https://devblogs.microsoft.com/oldnewthing/20260622-00/?p=112451) ⭐️ 6.0/10

Raymond Chen 的博客文章向 Tony Krueger 致敬，他在 Microsoft Word 中实现了拼写检查的红色和绿色波浪下划线，突出了他意想不到的遗产。 这个故事说明了一个看似微小的功能如何成为普遍的用户体验，并引发了对软件遗产不可预测性以及多语言支持挑战的反思。 波浪下划线是在 Krueger 移植 Word for Windows 期间引入的，该功能后来成为许多文本编辑器的标准。社区评论指出，Amiga 的 Prowrite 更早就有类似功能。

hackernews · saikatsg · 6月23日 18:10 · [社区讨论](https://news.ycombinator.com/item?id=48648959)

**背景**: 拼写检查波浪下划线是实时视觉指示器，在用户输入时标记拼写错误的单词（红色）或语法错误（绿色）。Tony Krueger 是微软开发人员，参与了早期 Windows 版 Word 的开发，他的实现成为了标志性功能。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://support.microsoft.com/en-us/word/training/check-grammar-spelling-and-more-in-word">Check grammar, spelling, and more in Word | Microsoft Support</a></li>

</ul>
</details>

**社区讨论**: 评论者反思了遗产的不可预测性，指出开发者常常因意想不到的功能而闻名。其他人则强调了多语言环境中波浪线成为干扰的烦恼，还有人指出 Chen 的文章与维基百科之间存在循环引用。

**标签**: `#history`, `#spell-check`, `#Microsoft Word`, `#software legacy`

---

## [用 OPFS 和 Pyodide 测试 Datasette Lite](https://simonwillison.net/2026/Jun/23/opfs-pyodide/#atom-everything) ⭐️ 6.0/10

Simon Willison 构建了一个测试工具，探索将 Origin Private File System (OPFS) 与 Pyodide 结合使用，旨在让 Datasette Lite 能够编辑存储在浏览器中的持久化 SQLite 文件。 这一实验可能为 Datasette Lite 等 Web 应用实现完全客户端、持久化的数据编辑铺平道路，减少对服务器后端的依赖，并增强离线能力。 该测试工具是一个使用 Claude Code for Web 构建的交互式 UI，允许在不同浏览器中测试 OPFS。OPFS 提供了一个沙盒化、源私有的文件系统，可在会话间持久化，并支持来自 Web Worker 的同步 I/O。

rss · Simon Willison · 6月23日 18:58

**背景**: Datasette Lite 通过 Pyodide（CPython 到 WebAssembly 的移植）在浏览器中运行完整的 Datasette Python 应用。OPFS 是一种浏览器 API，为 Web 应用提供私有的、持久化的文件系统，对用户的操作系统不可见。将两者结合，可使 Datasette Lite 在本地加载和保存 SQLite 数据库，无需服务器。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://developer.mozilla.org/en-US/docs/Web/API/File_System_API/Origin_private_file_system">Origin private file system - Web APIs | MDN - MDN Web Docs</a></li>
<li><a href="https://web.dev/articles/origin-private-file-system">The origin private file system | Articles | web.dev</a></li>
<li><a href="https://github.com/simonw/datasette-lite">GitHub - simonw/datasette-lite: Datasette running in your ...</a></li>

</ul>
</details>

**标签**: `#Pyodide`, `#WebAssembly`, `#OPFS`, `#Datasette Lite`, `#browsers`

---

## [DeepSeek 缓存命中率达 95%](https://twitter.com/jakevin7/status/tweet-2069393507328966738) ⭐️ 6.0/10

一位用户报告称，在完成一项长达 18 小时、处理近 40 亿 token 的长上下文任务时，DeepSeek 的缓存命中率达到了 95%，成本仅为 33 美元。 这展示了 DeepSeek 在长上下文任务中卓越的成本效益，可能使其成为处理大规模 AI 任务的开发者和企业极具吸引力的选择。 该任务使用 Maka 代理框架运行，其缓存命中率与 DeepSeek V4 在生产工作负载中 92-95%的缓存命中率报告一致。

twitter · kabikabi · 6月23日 12:13

**背景**: DeepSeek 提供上下文缓存功能，重复的输入 token 会被缓存以降低成本。缓存命中的 token 计费低于未命中的 token，因此高命中率对节省成本至关重要。长上下文任务（如处理整个代码库或长文档）可能消耗数十亿 token。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://gist.github.com/zhanglpg/0d8235299938dc5e09ac21a26c3d7c5a">zhanglpg / DeepSeek V4 - The Cache Hit Rate Phenomenon.md</a></li>
<li><a href="https://api-docs.deepseek.com/guides/kv_cache/">Context Caching | DeepSeek API Docs</a></li>
<li><a href="https://github.com/maka-agent/maka-agent/issues/15">[Feature] Agent primitives: subagent, deferred tools, task ...</a></li>

</ul>
</details>

**社区讨论**: 该推文获得了 54 条回复，许多用户对 DeepSeek 的性能和成本效益表示满意。部分用户讨论了这对长上下文 AI 应用的影响。

**标签**: `#DeepSeek`, `#cache`, `#cost efficiency`, `#long-context`

---
