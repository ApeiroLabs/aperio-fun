# 每日速递 - 2026-06-30

> 从 22 条内容中筛选出 9 条重要资讯。

---

1. [LongCat-2.0：1.6 万亿参数 MoE 模型，使用非英伟达 ASIC 训练](https://longcat.chat/blog/longcat-2.0/) ⭐️ 8.0/10
2. [火箭实验室收购铱星公司，达成历史性交易](https://investors.rocketlabcorp.com/news-releases/news-release-details/rocket-lab-acquire-iridium-historic-deal-creating-fully) ⭐️ 8.0/10
3. [Ornith-1.0：面向智能体编程的开源权重大语言模型](https://simonwillison.net/2026/Jun/29/ornith/#atom-everything) ⭐️ 8.0/10
4. [提议的.self 顶级域名旨在赋能自托管](https://hccf.onmy.cloud/2026/06/21/reclaiming-our-digital-selves-hccfs-vision-for-a-human-centered-top-level-domain/) ⭐️ 7.0/10
5. [Qwen 3.6 27B：开发者本地运行的最佳选择](https://quesma.com/blog/qwen-36-is-awesome/) ⭐️ 7.0/10
6. [Fil-C 实现内存安全的 setjmp/longjmp 上下文切换](https://fil-c.org/context_switches) ⭐️ 7.0/10
7. [探索 1960 年的 PDP-1 Lisp](https://obsolescence.dev/pdp1-lisp-introduction.html) ⭐️ 7.0/10
8. [液态水两种结构的分子证据](https://phys.org/news/2026-06-scientists-molecular-evidence-liquid.html) ⭐️ 7.0/10
9. [SSH 原生图形化 Shell](https://probablymarcus.com/blocks/2026/06/28/native-graphical-shell-for-SSH.html) ⭐️ 6.0/10

---

## [LongCat-2.0：1.6 万亿参数 MoE 模型，使用非英伟达 ASIC 训练](https://longcat.chat/blog/longcat-2.0/) ⭐️ 8.0/10

LongCat-2.0 是一个大规模混合专家（MoE）语言模型，总参数量达 1.6 万亿，每个 token 激活 480 亿参数，使用数万个 AI ASIC 超级计算集群（很可能是华为昇腾 910C 芯片）训练而成。 这表明在英伟达 GPU 生态系统之外进行大规模 AI 训练是可行的，凸显了华为昇腾等替代 AI 加速器日益增长的重要性以及相关的基础设施挑战。 该模型采用 MoE 架构，包含门控网络和多个专家子模型，每个 token 仅激活部分参数，从而实现高效率。训练基础设施需要在相对不成熟的软件生态上投入大量工程努力，以构建稳定、可扩展的平台。

hackernews · benjiro29 · 6月30日 00:30 · [社区讨论](https://news.ycombinator.com/item?id=48727116)

**背景**: 混合专家（MoE）是一种神经网络架构，将模型划分为多个“专家”子网络，并通过门控机制为每个输入仅激活部分专家。这使得模型总参数量可以非常大，同时保持推理计算高效。AI ASIC 超级计算集群是专为 AI 工作负载设计的专用集成电路大型集群，例如华为的昇腾系列，作为英伟达 GPU 的替代方案。

**参考链接**:
- [Mixture of experts - Wikipedia](https://en.wikipedia.org/wiki/Mixture_of_experts)
- [The model was trained on 50,000 domestic Chinese ASICs](https://digg.com/tech/va380veu)
- [Huawei outlines roadmap for Ascend AI chips - RCR Wireless](https://www.rcrwireless.com/20250922/ai-infrastructure/huawei-ai-chips)

**社区讨论**: 社区评论指出训练可能使用了华为昇腾 910C 芯片，并质疑 LongCat-2.0 是否是 DeepSeek V4-Pro 的微调或后训练版本，因为架构相似。讨论强调基础设施方面的努力才是真正的新闻。

**标签**: `#MoE`, `#large language model`, `#AI infrastructure`, `#Huawei Ascend`, `#deep learning`

---

## [火箭实验室收购铱星公司，达成历史性交易](https://investors.rocketlabcorp.com/news-releases/news-release-details/rocket-lab-acquire-iridium-historic-deal-creating-fully) ⭐️ 8.0/10

火箭实验室宣布收购铱星通信公司，将其发射和卫星制造能力与铱星的在轨卫星星座及频谱资产相结合。 这笔交易打造了一家完全整合的太空通信与发射公司，可能使火箭实验室能够提供类似 SpaceX 星链模式的端到端服务，并为其即将推出的中子号火箭提供稳定的发射需求。 铱星运营着 66 颗活跃的低地球轨道卫星，提供全球语音和数据覆盖，其频谱许可证对未来卫星服务具有重要价值。火箭实验室获得了一家盈利的卫星运营商以及其运载火箭的保障客户。

hackernews · everfrustrated · 6月29日 14:09 · [社区讨论](https://news.ycombinator.com/item?id=48719485)

**背景**: 火箭实验室是一家端到端太空公司，以其电子号小型运载火箭闻名，并正在开发更大的中子号火箭。铱星是一家拥有长期运营的低轨星座的卫星通信公司。此次收购延续了火箭实验室的垂直整合战略，类似于 SpaceX 与星链的做法。

**参考链接**:
- [Rocket Lab](https://en.wikipedia.org/wiki/Rocket_Lab)
- [Iridium satellite constellation](https://en.wikipedia.org/wiki/Iridium_satellite_constellation)
- [Iridium Communications - Wikipedia](https://en.wikipedia.org/wiki/Iridium_Communications)

**社区讨论**: 社区评论表达了对太空垃圾和夜空商业化的担忧，但也看到了与 SpaceX 星链模式的战略相似性，指出这笔交易为火箭实验室提供了稳定的发射需求和盈利的卫星业务。

**标签**: `#space`, `#acquisition`, `#satellite`, `#Rocket Lab`, `#Iridium`

---

## [Ornith-1.0：面向智能体编程的开源权重大语言模型](https://simonwillison.net/2026/Jun/29/ornith/#atom-everything) ⭐️ 8.0/10

DeepReinforce 发布了 Ornith-1.0，这是一个面向智能体编程的开源权重（MIT 许可）大语言模型系列，参数规模从 9B 到 397B 不等，基于 Gemma 4 和 Qwen 3.5 构建。 Ornith-1.0 在编程基准测试中达到了同等规模开源模型的最优性能，推动了面向自主编程智能体的开源 AI 发展。 该模型系列包括密集（9B、31B）和 MoE（35B、397B）变体，均采用 MIT 许可，兼容 LM Studio 和 Pi，可用于本地智能体工作流。

rss · Simon Willison · 6月29日 16:17

**背景**: 智能体编程是指使用 AI 智能体通过与环境工具交互来自主编写、调试和重构代码。混合专家（MoE）是一种架构，每个 token 仅激活部分参数，从而在不成比例增加计算成本的情况下实现更大模型。Ornith-1.0 使用自脚手架训练框架来提升智能体能力。

**参考链接**:
- [Ornith-1.0: Self - Scaffolding LLMs ... | DeepReinforce Blog | Jun. 2026](https://deep-reinforce.com/ornith_1_0.html)
- [Ornith-1.0: Self - Scaffolding LLMs for Agentic Coding](https://simonwillison.net/2026/Jun/29/ornith/)
- [Agentic coding](https://en.wikipedia.org/wiki/Agentic_coding)

**社区讨论**: 社区反应不一：一些人称赞其编程性能和创造力，而另一些人指出它在聊天中会幻觉，并且本质上是对 Qwen 或 Gemma 4 的微调。密集 9B 变体需要 80GB GPU，限制了可访问性。

**标签**: `#LLM`, `#open-source`, `#coding`, `#AI agents`, `#model release`

---

## [提议的.self 顶级域名旨在赋能自托管](https://hccf.onmy.cloud/2026/06/21/reclaiming-our-digital-selves-hccfs-vision-for-a-human-centered-top-level-domain/) ⭐️ 7.0/10

一项名为.self 的新顶级域名提案已发布，设想为每人提供一个免费域名，并采用基于声誉的域名撤销机制来支持自托管。 如果实施，.self 可以通过降低成本并通过社区驱动的声誉机制打击滥用，从而普及自托管，可能重塑个人控制其在线存在的方式。 该提案包括一种机制，允许任何人在头一两年内挑战不活跃的域名，并且在域名抢注的情况下，可以事后撤销域名且无需申诉。

hackernews · HumanCCF · 6月29日 19:49 · [社区讨论](https://news.ycombinator.com/item?id=48724230)

**背景**: 顶级域名如.com 和.org 由 ICANN 管理。自托管指个人运行自己的服务器来托管网站或服务，这可能成本高昂且技术上有挑战。基于声誉的撤销机制利用社区反馈来移除滥用域名，与传统的对抗性撤销（可能导致误报）形成对比。

**参考链接**:
- [Proposed top-level domain - Wikipedia](https://en.wikipedia.org/wiki/Proposed_top-level_domain)
- [Top-level domain - Wikipedia](https://en.wikipedia.org/wiki/Top-level_domain)

**社区讨论**: 评论者提出了对域名抢注和安全性的担忧：有人指出免费.tk 顶级域名因诈骗者而失败的历史，另有人担心宣传自托管可能招致安全探测。其他人建议参考微软的 Vega 身份解决方案，并质疑在没有注册费的情况下如何资助顶级域名的运营。

**标签**: `#DNS`, `#self-hosting`, `#top-level domain`, `#decentralization`, `#reputation`

---

## [Qwen 3.6 27B：开发者本地运行的最佳选择](https://quesma.com/blog/qwen-36-is-awesome/) ⭐️ 7.0/10

Qwen 3.6 27B 是一款密集的 270 亿参数多模态模型，已作为开源权重模型发布，针对本地开发进行了优化，在较小规模下提供了旗舰级的编码性能。 该模型在能力和硬件需求之间取得了实用平衡，使本地 LLM 开发更加可行，但在 MacBook Pro 上运行会因发热和噪音而不切实际，促使用户转向更合适的硬件如 Mac Mini。 该模型需要大量 RAM（推荐 128GB），在台式机硬件上运行最佳；社区报告显示，双 AMD Radeon AI Pro 9700 GPU 在 FP8 精度下可实现每秒 50 个 token 的解码速度。

hackernews · stared · 6月29日 17:05 · [社区讨论](https://news.ycombinator.com/item?id=48721903)

**背景**: 像 Qwen 3.6 27B 这样的大型语言模型需要大量硬件资源（尤其是 VRAM 和 RAM）才能本地运行。量化技术可以减小模型大小，但可能影响质量。在笔记本电脑上运行 LLM 常导致热降频和风扇噪音，因此对于严肃工作，台式机或专用硬件更合适。

**参考链接**:
- [Qwen/Qwen3.6-27B · Hugging Face](https://huggingface.co/Qwen/Qwen3.6-27B)
- [Qwen 3.6 27B is the sweet spot for local development](https://quesma.com/blog/qwen-36-is-awesome/)
- [Running Open Source LLMs Locally: Hardware Guide | Apatero](https://apatero.com/blog/running-open-source-llms-locally-hardware-guide-2026)

**社区讨论**: 社区评论指出，在 MacBook Pro 上运行 Qwen 3.6 会导致过热和噪音过大，用户建议改用 Mac Mini 或专用 GPU。一些人质疑本地模型在实际代码库中的实用性，而另一些人则分享了使用 AMD GPU 实现高 token 速率的成功配置。

**标签**: `#LLM`, `#local development`, `#hardware`, `#Qwen`, `#AI`

---

## [Fil-C 实现内存安全的 setjmp/longjmp 上下文切换](https://fil-c.org/context_switches) ⭐️ 7.0/10

Fil-C 通过管理栈内存，实现了 setjmp/longjmp 和 ucontext API 的内存安全上下文切换，解决了与寄存器分配和栈溢出相关的复杂交互问题。 这一进展使 Fil-C 成为首个处理这些公认棘手 API 的内存安全 C/C++ 实现，从而在遗留代码和新代码中实现更安全的协程和用户态上下文切换。 该实现显式管理栈内存以防止跳转期间的损坏，文章详细说明了 setjmp/longjmp 如何以可能破坏内存安全的方式与寄存器分配和栈溢出交互。

hackernews · modeless · 6月30日 00:38 · [社区讨论](https://news.ycombinator.com/item?id=48727177)

**背景**: setjmp 和 longjmp 是 C 库函数，允许非局部跳转，常用于错误处理或用户态上下文切换。它们因可能破坏栈帧和寄存器而难以实现内存安全。Fil-C 是一个极度兼容的内存安全 C 和 C++ 实现，将所有内存安全错误捕获为 panic。

**参考链接**:
- [Memory Safe Context Switching](https://fil-c.org/context_switches)
- [Fil - C](https://fil-c.org/)
- [fil - c /Manifesto.md at deluge · pizlonator/ fil - c · GitHub](https://github.com/pizlonator/fil-c/blob/deluge/Manifesto.md)

**社区讨论**: 评论者对 setjmp/longjmp 能够实现内存安全表示惊讶，其中一位指出使用这些函数的代码通常具有超出内存安全的更广泛风险。另一位评论者认为这些函数与安全性无关，还有一位询问 Fil-C 现在是否使用 Claude 进行开发。

**标签**: `#memory safety`, `#context switching`, `#Fil-C`, `#setjmp/longjmp`, `#systems programming`

---

## [探索 1960 年的 PDP-1 Lisp](https://obsolescence.dev/pdp1-lisp-introduction.html) ⭐️ 7.0/10

一篇详细文章探讨了 1960 年由高中生 Peter Deutsch 编写的首个 PDP-1 Lisp 实现，并提供了可在 GitHub 上运行的模拟器。 这项工作具有历史意义，因为它引入了读取-求值-打印循环（REPL），这一概念如今已成为 Python 等许多编程语言的基础，并展示了在小型机上的早期交互式编程。 PDP-1 仅有 4K 个 18 位字的内存，但 Deutsch 的 Lisp 却非常实用。该模拟器是 PiDP-1 项目的一部分，可在任何 Linux 机器上运行。

hackernews · ozymandiax · 6月30日 00:56 · [社区讨论](https://news.ycombinator.com/item?id=48727323)

**背景**: PDP-1 是数字设备公司的第一台计算机，是一款于 1959 年发布的 18 位机器。Lisp 由 John McCarthy 于 1958 年创建，是最古老的高级编程语言之一。Deutsch 的实现是首个交互式 Lisp 环境，开创了 REPL。

**参考链接**:
- [PDP-1 - Wikipedia](https://en.wikipedia.org/wiki/PDP-1)
- [Lisp programming on the PDP-1 - obsolescence.dev](https://obsolescence.dev/pdp1-lisp-introduction.html)

**社区讨论**: 一位评论者强调了其历史意义，并推荐了 PiDP-1 模拟器供尝试。另一位评论者询问关于 Lisp 历史的书籍推荐，表明了对深入学习的兴趣。

**标签**: `#Lisp`, `#history`, `#PDP-1`, `#retrocomputing`, `#simulator`

---

## [液态水两种结构的分子证据](https://phys.org/news/2026-06-scientists-molecular-evidence-liquid.html) ⭐️ 7.0/10

研究人员利用无监督深度学习分析分子动力学模拟，识别出液态水中两种不同的局部结构：一种密度更高、更无序，另一种密度更低、更有序，支持了两态模型。 这一发现为水的异常性质（如密度最大值和高热容）提供了分子层面的证据，可能影响生物学、化学和气候科学等依赖水行为的领域。 该研究发表在《自然·物理》上，模拟中使用了 4 位点水模型（TIP4P），但一些评论者质疑使用更准确的模型（如 OPC）是否会得到不同结果。

hackernews · wglb · 6月29日 22:18 · [社区讨论](https://news.ycombinator.com/item?id=48726073)

**背景**: 水表现出超过 70 种异常性质，使其区别于其他液体，包括在 4°C 时的密度最大值和高表面张力。两态模型提出液态水是两种不同局部结构的混合物，它们动态互变，但由于过冷区域快速结晶，直接实验证据一直难以获得。

**参考链接**:
- [Scientists find molecular-level evidence for two structures in liquid water](https://phys.org/news/2026-06-scientists-molecular-evidence-liquid.html)
- [Scientists observe water switching between 2 different molecular structures, boosting decades-old theory](https://www.livescience.com/physics-mathematics/water-might-secretly-be-a-mix-of-2-different-liquids-scientists-say)

**社区讨论**: 评论者对蛋白质周围水化层的影响和潜在未来技术表示兴趣。一位评论者质疑 TIP4P 水模型的选择，并指出未引用的先前实验工作，另一位提供了《自然·物理》的链接。

**标签**: `#physics`, `#water structure`, `#molecular dynamics`, `#scientific research`

---

## [SSH 原生图形化 Shell](https://probablymarcus.com/blocks/2026/06/28/native-graphical-shell-for-SSH.html) ⭐️ 6.0/10

Marcus Lewis 提出了一种 SSH 原生图形化 Shell 方案，将前端与后端分离，旨在减少与传统 X11 转发相比的延迟和开销。 这种方法可以提升远程图形应用的性能，使基于 SSH 的远程工作对开发者和系统管理员更加流畅。 该方案使用基于 Web 的前端，通过 SSH 与后端通信，类似于 Jupyter 或 Tensorboard 的工作方式，但作为原生 Shell。它旨在通过使用更高效的协议来避免 X11 转发的延迟和开销。

hackernews · mrcslws · 6月29日 15:42 · [社区讨论](https://news.ycombinator.com/item?id=48720758)

**背景**: X11 转发是通过 SSH 远程运行图形应用的常见方法，但在高延迟网络上存在高延迟和带宽开销问题。Web 浏览器模型（服务器向客户端提供体验）已被证明对远程访问高效。该提案试图将这种模型引入 SSH 原生图形化 Shell。

**参考链接**:
- [A native graphical shell for SSH | Marcus Lewis](https://probablymarcus.com/blocks/2026/06/28/native-graphical-shell-for-SSH.html)
- [A native graphical shell for SSH | Hacker News](https://news.ycombinator.com/item?id=48720758)
- [Enable X11 Forwarding on Linux - LinuxConfig.org Enabling X11 Forwarding in Linux: A Comprehensive Guide xorg - How to forward X over SSH to run graphics applications ... What You Need to Know About X11 Forwarding - goteleport.com linux - X forwarding on Windows 11 SSH without installing a ... X11 Forwarding: What Is It, Why Use It, How to Set It Up Forward X Over SSH to Run Programs Remotely - Baeldung](https://linuxconfig.org/how-to-enable-x11-forwarding-on-linux)

**社区讨论**: 社区评论褒贬不一：有人称赞这个想法是朝着正确方向迈出的一步，而另一些人则批评它是在重新发明 X11 转发或 Cockpit 等现有解决方案。一位评论者引用了 Henry Spencer 的话：“不理解 Unix 的人注定会糟糕地重新发明它。”

**标签**: `#SSH`, `#graphical shell`, `#remote desktop`, `#Unix`, `#frontend-backend separation`

---
