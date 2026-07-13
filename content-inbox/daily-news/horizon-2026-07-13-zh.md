# 每日速递 - 2026-07-13

> 从 35 条内容中筛选出 7 条重要资讯。

---

1. [陶哲轩用 AI 编程代理开发应用](https://terrytao.wordpress.com/2026/07/11/old-and-new-apps-via-modern-coding-agents/) ⭐️ 8.0/10
2. [Chromium 148 的 Math.tanh 可识别操作系统](https://scrapfly.dev/posts/browser-math-os-fingerprint/) ⭐️ 7.0/10
3. [浏览器中的微型循环精确 8 位模拟器](https://floooh.github.io/tiny8bit-preview/index.html) ⭐️ 7.0/10
4. [AI 代理不应成为直接责任人](https://simonwillison.net/2026/Jul/12/directly-responsible-individuals/#atom-everything) ⭐️ 7.0/10
5. [设计并组装我的第一块 PCB](https://vilkeliskis.com/b/2026/0711.html) ⭐️ 6.0/10
6. [开发者主张使用原生 JavaScript 而非框架](https://guseyn.com/html/posts/why-vanilla-js.html) ⭐️ 6.0/10
7. [Anthropic 因计算限制延长 Claude Fable 5 访问权限](https://simonwillison.net/2026/Jul/12/bump/#atom-everything) ⭐️ 6.0/10

---

## [陶哲轩用 AI 编程代理开发应用](https://terrytao.wordpress.com/2026/07/11/old-and-new-apps-via-modern-coding-agents/) ⭐️ 8.0/10

菲尔兹奖得主陶哲轩发表博客，展示了他如何利用基于 LLM 的现代编程代理快速构建交互式可视化和应用程序，凸显了传统软件领域之外的巨大潜在需求。 这表明即使是顶尖数学家也能利用 AI 编程代理创建实用工具，可能使软件开发民主化，并加速多个领域的创新。 陶哲轩通过与 LLM 代理的引导式交互生成可视化内容，作为研究论文的补充；他指出，虽然这些工具并非关键任务，但对于非核心补充内容，其风险是可接受的。

hackernews · subset · 7月12日 11:09 · [社区讨论](https://news.ycombinator.com/item?id=48880170)

**背景**: 现代编程代理是能够根据自然语言提示自主编写、调试和部署代码的 AI 工具。它们已从简单的自动补全演变为自主执行循环，2026 年由 Claude Code、GitHub Copilot 和 Cursor 等平台引领。

**参考链接**:
- [8 Best AI Coding Assistants [Updated May 2026] | Augment Code](https://www.augmentcode.com/tools/8-top-ai-coding-assistants-and-their-best-use-cases)
- [The State of AI Coding Agents (2026): From Pair Programming to Autonomous AI Teams | by Dave Patten | Medium](https://medium.com/@dave-patten/the-state-of-ai-coding-agents-2026-from-pair-programming-to-autonomous-ai-teams-b11f2b39232a)
- [The Best AI Coding Assistants: 20 Tools Reviewed for 2026](https://axify.io/blog/the-best-ai-coding-assistants-a-full-comparison-of-20-tools)

**社区讨论**: 评论者热情高涨，有人指出 LLM 让他们实现了一直想要但没时间构建的可视化。其他人幽默地将陶哲轩使用编程代理比作米其林星级厨师发现微波炉晚餐，并强调传统领域之外软件需求的无限潜力。

**标签**: `#LLM`, `#coding agents`, `#software development`, `#AI tools`, `#visualization`

---

## [Chromium 148 的 Math.tanh 可识别操作系统](https://scrapfly.dev/posts/browser-math-os-fingerprint/) ⭐️ 7.0/10

一种新的浏览器指纹识别技术利用了 Chromium 148 中 Math.tanh 实现因操作系统而异的特点，通过分析单个 tanh 调用的浮点输出，网站可以推断出底层操作系统。 这一发现增加了一个新的、难以伪造的指纹识别向量，即使修改了用户代理字符串也能揭示操作系统，引发了重大的隐私担忧，并凸显了 JavaScript 数学函数跨平台一致性的必要性。 差异源于不同的数学库：macOS 使用 Apple 的数学库，Linux 使用 glibc，Windows 使用 Universal C Runtime；这些库在大约四分之一的输入上结果不同，通常相差一个最小精度单位（1 ULP）。

hackernews · joahnn_s · 7月12日 21:12 · [社区讨论](https://news.ycombinator.com/item?id=48884853)

**背景**: 浏览器指纹识别通过收集设备特定信息来识别用户，无需使用 Cookie。Math.tanh 是 JavaScript 中的双曲正切函数；由于底层数学库不同，其浮点输出在不同平台上可能不同，从而产生潜在的指纹识别信号。

**参考链接**:
- [Your Browser Does Math Differently on Every OS, and Anti-Bot Systems Read the Bits · scrapfly.dev](https://scrapfly.dev/posts/browser-math-os-fingerprint/)
- [Browser fingerprinting](https://en.wikipedia.org/wiki/Browser_fingerprinting)
- [Math.tanh() - JavaScript - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/tanh)

**社区讨论**: 评论者反应不一：有人指出该技术还可以识别浏览器版本范围，而另一些人则批评文章由 AI 生成以及背后抓取公司的动机。少数人指出，即使是 Tor 浏览器也难以隐藏操作系统，表明这一挑战普遍存在。

**标签**: `#browser fingerprinting`, `#privacy`, `#Chromium`, `#JavaScript`, `#operating system`

---

## [浏览器中的微型循环精确 8 位模拟器](https://floooh.github.io/tiny8bit-preview/index.html) ⭐️ 7.0/10

一组针对 8 位计算机（如 ZX Spectrum、Commodore 64）的微型循环精确模拟器，完全在浏览器中运行，可瞬间加载游戏，无需等待。 该项目展示了在网页浏览器中实现高保真、循环精确模拟的可能性，使复古游戏更易访问，并保留了历史计算的精确性。 这些模拟器采用引脚级模拟模型，每个组件自包含且具有显式接口，从而实现灵活的互操作性。部分游戏默认音量较高，可能会让用户感到意外。

hackernews · naves · 7月12日 20:23 · [社区讨论](https://news.ycombinator.com/item?id=48884395)

**背景**: 循环精确模拟意味着模拟器精确复制每个 CPU 周期和组件交互的时序，与原始硬件完全一致。这计算成本高昂，但能确保行为准确。传统模拟器通常为了性能而采用批量更新，牺牲了准确性。

**参考链接**:
- [Cycle-accurate simulator](https://en.wikipedia.org/wiki/Cycle-accurate_simulator)
- [emulation - What exactly is a cycle - accurate emulator ?](https://retrocomputing.stackexchange.com/questions/1191/what-exactly-is-a-cycle-accurate-emulator/1199)
- [Emulation Accuracy Explained: Why Some Emulators Sound...](https://www.retrotechlab.com/emulation-accuracy-explained-why-emulators-sound-different/)

**社区讨论**: 评论者称赞了即时加载和引脚级模拟模型，认为这是实现互操作性的灵活方法。有人指出该项目已有 8 年历史但仍具相关性，另有一位用户请求支持 Oric。

**标签**: `#emulation`, `#retrocomputing`, `#webassembly`, `#javascript`, `#8-bit`

---

## [AI 代理不应成为直接责任人](https://simonwillison.net/2026/Jul/12/directly-responsible-individuals/#atom-everything) ⭐️ 7.0/10

Simon Willison 认为，AI 代理永远不应被视为直接责任人（DRI），因为它们无法为自己的行为负责。 随着 AI 代理变得越来越自主，这一区分对于组织问责制至关重要；将 DRI 身份赋予机器可能会模糊责任，并导致伦理和法律风险。 DRI 一词起源于苹果公司，在 GitLab 手册中被定义为最终对项目成败负责的人。Willison 引用了 IBM 1979 年的培训幻灯片，其中指出计算机绝不能做出管理决策。

rss · Simon Willison · 7月12日 23:57

**背景**: 直接责任人（DRI）是一种管理概念，即指定一个人对项目或计划承担最终责任，确保所有权清晰。这一理念已被苹果、GitLab 等科技公司广泛采用，以提高效率并减少模糊性。

**参考链接**:
- [Directly Responsible Individuals (DRI) | The GitLab Handbook](https://handbook.gitlab.com/handbook/people-group/directly-responsible-individuals/)
- [Directly Responsible Individual (DRI) | D. Brown Management](https://dbmteam.com/insights/directly-responsible-individual-dri/)
- [Directly Responsible Individuals: The What, How and Why of DRIs - Tettra](https://tettra.com/article/directly-responsible-individuals-guide/)

**标签**: `#accountability`, `#AI agents`, `#organizational culture`, `#LLM`

---

## [设计并组装我的第一块 PCB](https://vilkeliskis.com/b/2026/0711.html) ⭐️ 6.0/10

一篇博客文章详细描述了作者从原理图绘制到焊接元件，设计并组装第一块印刷电路板（PCB）的全过程。 这个个人项目凸显了定制 PCB 制造变得多么经济实惠且易于获取，使爱好者和工程师能够轻松进行硬件原型制作。 作者可能使用了 KiCad 或 EasyEDA 等免费 PCB 设计工具，并从 JLCPCB 等低成本制造商处订购电路板，后者提供起价 2 美元的原型 PCB。

hackernews · tadasv · 7月12日 22:56 · [社区讨论](https://news.ycombinator.com/item?id=48885728)

**背景**: 印刷电路板（PCB）通过导电线路机械支撑并电气连接电子元件。设计 PCB 包括创建原理图、布局元件以及生成用于制造的 Gerber 文件。像 JLCPCB 这样的服务已大幅降低了小批量 PCB 制造的成本和周转时间。

**参考链接**:
- [PCB Board Design: A Step-by-Step Guide for Beginners](https://jlcpcb.com/blog/pcb-board-design-beginners-guide)
- [PCB Design for Beginners: A Step by Step Guide to Creating Your First PCB](https://www.allpcb.com/allelectrohub/pcb-design-for-beginners-a-step-by-step-guide-to-creating-your-first-pcb)
- [PCB Design Steps & Complete Guide | Cirexx](https://www.cirexx.com/pcb-design-steps/)

**社区讨论**: 评论者称赞 JLCPCB 的可靠性和低成本，指出定制 PCB 制造现在非常实惠。一位用户建议通过团购来降低一次性电路板的最低订单成本。

**标签**: `#PCB design`, `#DIY electronics`, `#hardware`, `#manufacturing`

---

## [开发者主张使用原生 JavaScript 而非框架](https://guseyn.com/html/posts/why-vanilla-js.html) ⭐️ 6.0/10

一位开发者发表博客文章，认为浏览器本身就是一个足够的框架，而像 React 或 Angular 这样的前端框架引入了人为的复杂性。 这篇观点文章重新点燃了使用原生 JavaScript 与框架之间的长期争论，这影响着开发者如何为 Web 项目选择工具。 文章认为，浏览器的内置 API 足够强大，无需外部依赖即可构建复杂应用，而框架常常掩盖了底层平台。

hackernews · guseyn · 7月12日 22:53 · [社区讨论](https://news.ycombinator.com/item?id=48885705)

**背景**: 原生 JavaScript 指的是没有任何额外库或框架的纯 JavaScript。像 React、Vue 和 Angular 这样的前端框架在构建动态用户界面时变得流行，但一些开发者认为它们增加了不必要的复杂性。

**社区讨论**: 评论显示出不同的反应：一些人同意作者的观点，引用自己不用框架构建应用的经验，而另一些人则认为框架为大型项目提供了宝贵的便利，类似于使用 C 语言而非汇编。

**标签**: `#JavaScript`, `#frontend`, `#frameworks`, `#web development`

---

## [Anthropic 因计算限制延长 Claude Fable 5 访问权限](https://simonwillison.net/2026/Jul/12/bump/#atom-everything) ⭐️ 6.0/10

Anthropic 以计算资源限制为由，将 Claude Fable 5 在所有付费计划中的访问权限延长至 2026 年 7 月 19 日；而 OpenAI 则取消了 GPT-5.6 Sol 的使用限制，并宣布了效率改进。 此次延期凸显了前沿 AI 模型面临的计算挑战，可能影响用户采用率以及 Anthropic 与 OpenAI 之间的竞争格局。 用户每周可将一半的使用额度用于 Fable 5，之后可使用积分继续使用或切换模型。OpenAI 报告拥有 600 万活跃用户，并暂时取消了 GPT-5.6 Sol 的 5 小时使用限制。

rss · Simon Willison · 7月12日 21:20

**背景**: Claude Fable 5 是 Anthropic 最强大的通用模型，属于“Mythos 级”模型，经过安全处理后可公开使用。GPT-5.6 Sol 是 OpenAI 的旗舰前沿模型。两者均代表 AI 能力的顶尖水平，但其部署受到巨大计算需求的限制。

**参考链接**:
- [Claude Fable \ Anthropic](https://www.anthropic.com/claude/fable)
- [Previewing GPT-5.6 Sol: a next-generation model | OpenAI](https://openai.com/index/previewing-gpt-5-6-sol/)
- [Claude Fable 5: Anthropic's First Public Mythos - Class Model , and...](https://daehnhardt.com/blog/2026/07/11/claude-fable-5-first-mythos-class-model/)

**标签**: `#AI`, `#Anthropic`, `#Claude`, `#GPT-5`, `#compute`

---

