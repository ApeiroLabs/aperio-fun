# Daily Brief - 2026-09-08

> From 59 items, 14 important content pieces were selected

---

1. [Researcher Factors 512-bit RSA Keys of 1990s CA Using Consumer GPU](https://mcpherrin.ca/2026/09/07/rsa.html) ⭐️ 8.0/10
2. [Reconstructed Stuxnet Source Code Released for Education](https://github.com/Sadpainy/Stuxnet) ⭐️ 8.0/10
3. [Broadcom Pulls VDDK Downloads, Complicating VMware Migration](https://www.virtualizationhowto.com/2026/09/leaving-vmware-just-got-harder-after-broadcom-pulled-vddk-downloads/) ⭐️ 8.0/10
4. [Abusive crawlers consume more CPU than git clones on kernel.org](https://simonwillison.net/2026/Sep/7/creepy-crawlies/) ⭐️ 8.0/10
5. [OpenAI Codex Desktop Outshines Claude Desktop in Harness Design](https://twitter.com/jakevin7/status/tweet-2096850696964325472) ⭐️ 8.0/10
6. [Visual Dominance Undermines Personalized Safety in VLMs; New Benchmark and Monitor Proposed](https://arxiv.org/abs/2609.04281) ⭐️ 8.0/10
7. [TALA, AI Diagram Layout Engine, Goes Open Source](https://d2lang.com/blog/tala-is-open-source/) ⭐️ 7.0/10
8. [Interactive Map Shows LA Building Construction History from 1880 to 2026](https://lax-skyline.parcelscope.net/) ⭐️ 7.0/10
9. [Jellyfin 12.0 Released with New Features and Improvements](https://jellyfin.org/posts/jellyfin-release-12.0/) ⭐️ 7.0/10
10. [LG TV Owners Urged to Disconnect from Internet Over Privacy](https://appleinsider.com/articles/26/09/07/disconnect-your-lg-television-from-the-internet-now) ⭐️ 7.0/10
11. [llm 0.35 Adds Support for OpenAI's GPT-6 Astra](https://simonwillison.net/2026/Sep/7/llm/) ⭐️ 7.0/10
12. [EXAONE Finance: Attention-Free Financial Time Series Foundation Model](https://arxiv.org/abs/2609.04239) ⭐️ 7.0/10
13. [AI Recruitment Evolution: From Matching Models to Recruiting Agents](https://arxiv.org/abs/2609.04286) ⭐️ 7.0/10
14. [Fourier Auxiliary Head Fixes Physical Representation Laziness in JEPA World Models](https://arxiv.org/abs/2609.04264) ⭐️ 7.0/10

---

## [Researcher Factors 512-bit RSA Keys of 1990s CA Using Consumer GPU](https://mcpherrin.ca/2026/09/07/rsa.html) ⭐️ 8.0/10

A researcher successfully factored 512-bit RSA keys belonging to a Certificate Authority from the 1990s, using a consumer GPU in approximately two days. This demonstrates the feasibility of breaking legacy encryption with modern hardware. This highlights the vulnerability of historical encrypted data and raises concerns about data confidentiality for past communications. It also sparks discussion on the practicality of cracking larger key sizes and the potential impact of future quantum computing. The factoring took about two days on a consumer GPU, illustrating the cost-effectiveness of modern hardware. The researcher's work underscores that 512-bit RSA is no longer secure, and even 1024-bit keys may become tractable with sufficient resources.

hackernews · ahlCVA · Sep 8, 01:16 · [Discussion](https://news.ycombinator.com/item?id=49604637)

**Background**: RSA is a widely used public-key cryptosystem whose security relies on the difficulty of factoring large composite numbers. In the 1990s, 512-bit keys were considered secure, but advances in hardware and algorithms have made them vulnerable. Certificate Authorities (CAs) issue digital certificates that authenticate websites and other entities, and if their private keys are compromised, attackers could impersonate trusted services. The RSA Factoring Challenge, initiated in 1991, tracked progress in factoring such keys, and while it officially ended in 2007, researchers continue to explore the limits of current technology.

**References**:
- [RSA Factoring Challenge - Wikipedia](https://en.wikipedia.org/wiki/RSA_Factoring_Challenge)
- [RSA numbers - Wikipedia](https://en.wikipedia.org/wiki/RSA_numbers)
- [Certificate authority](https://en.wikipedia.org/wiki/Certificate_authority)

**Discussion**: Commenters noted that much of the traffic in the 1990s was not encrypted or used non-ephemeral keys, raising concerns about governments recording and later decrypting anonymous political speech. One commenter discussed the exponential cost increase with key size, doubting that 1024-bit keys could be broken in tractable time without quantum computers, but acknowledged the potential of Shor's algorithm.

**Tags**: `#RSA`, `#cryptography`, `#security`, `#GPU`, `#historical`

---

## [Reconstructed Stuxnet Source Code Released for Education](https://github.com/Sadpainy/Stuxnet) ⭐️ 8.0/10

A GitHub user named Sadpainy has released a reconstructed source code of the Stuxnet cyber-weapon, claiming it is for educational and research purposes only. The repository contains approximately 15,000 lines of code, as noted in the community discussion. This release provides researchers and cybersecurity enthusiasts with a hands-on opportunity to study one of the most sophisticated malware ever created, potentially deepening understanding of critical infrastructure vulnerabilities. It also reignites discussions about the ethics of sharing malware code and the historical impact of Stuxnet on cyber warfare. The reconstruction is based on reverse engineering of Stuxnet binaries, but it is not a complete or fully documented reproduction; some community members noted the lack of documentation and navigation aids. The code targets Siemens S7 PLCs and WINCC HMI systems, similar to the original malware, and includes USB propagation mechanisms.

hackernews · CMDDestory · Sep 7, 22:12 · [Discussion](https://news.ycombinator.com/item?id=49603546)

**Background**: Stuxnet is a computer worm discovered in 2010 that targeted Iran's nuclear enrichment facilities, specifically Siemens programmable logic controllers (PLCs). It was the first publicly known cyber weapon to cause physical damage to critical infrastructure, marking a shift from cyber espionage to covert warfare. The malware exploited multiple zero-day vulnerabilities and used stolen digital certificates to evade detection. Its source code has been analyzed extensively, but this reconstruction offers a more accessible format for study.

**References**:
- [Stuxnet - Wikipedia](https://en.wikipedia.org/wiki/Stuxnet)
- [Stuxnet Explained: Technical Breakdown, Impact & Legacy](https://www.thehackacademy.com/feature/the-stuxnet-operation-technical-breakdown-impact-and-international-implications/)
- [Stux6-Technology/Search-of-Stuxnet - GitHub](https://github.com/Stux6-Technology/Search-of-Stuxnet)

**Discussion**: Community members expressed appreciation for the post, with some sharing personal experiences working on similar Siemens systems and recommending related books like 'Countdown to Zero Day.' Others raised questions about the origin of the binaries and the feasibility of USB propagation, while some criticized the lack of documentation and navigation aids in the reconstructed code.

**Tags**: `#cybersecurity`, `#stuxnet`, `#reverse engineering`, `#critical infrastructure`, `#malware`

---

## [Broadcom Pulls VDDK Downloads, Complicating VMware Migration](https://www.virtualizationhowto.com/2026/09/leaving-vmware-just-got-harder-after-broadcom-pulled-vddk-downloads/) ⭐️ 8.0/10

Broadcom has removed public access to the VMware Virtual Disk Development Kit (VDDK) downloads, as confirmed by official documentation and community reports. This change affects migration tools that rely on VDDK for virtual disk access. VDDK is a critical component for many VMware migration and backup tools, so its removal significantly hampers enterprises' ability to move off VMware. This move intensifies the challenges for organizations already frustrated by Broadcom's post-acquisition pricing and support changes. Broadcom stated that VDDK is 'no longer available for use or download' to ensure security and reliability, according to a Platform9 blog. However, migration to Proxmox may be less affected, as it can use alternative methods like mounting ESXi storage directly.

hackernews · josephcsible · Sep 7, 20:32 · [Discussion](https://news.ycombinator.com/item?id=49602699)

**Background**: VDDK is a software development kit that provides APIs for managing virtual disks on ESXi hosts, commonly used by backup and migration tools to read and write VMDK files. Broadcom acquired VMware in 2023 and has since made significant changes to licensing and product availability, leading to customer dissatisfaction and increased migration interest.

**References**:
- [Broadcom Cut Public Access of Virtual Disk Development Kit ...](https://platform9.com/blog/vddk-no-longer-available/)
- [Installing the VDDK Package - techdocs.broadcom.com](https://techdocs.broadcom.com/us/en/vmware-cis/vsphere/vsphere-sdks-tools/8-0/virtual-disk-development-kit-programming-guide/installing-the-development-kit/installing-the-vddk-package.html)
- [Where the VDDK can be downloaded? The official download links ...](https://community.broadcom.com/vmware-cloud-foundation/discussion/where-the-vddk-can-be-downloaded-the-official-download-links-dont-work)

**Discussion**: Commenters expressed sadness over VMware's decline, with a former engineer noting Broadcom's focus on extracting value rather than innovating. One practitioner shared leading a VMware-to-Hyper-V migration, while another found Proxmox migration surprisingly painless, and a user questioned if qemu-img could still convert VMDK files.

**Tags**: `#VMware`, `#Broadcom`, `#VDDK`, `#virtualization`, `#migration`

---

## [Abusive crawlers consume more CPU than git clones on kernel.org](https://simonwillison.net/2026/Sep/7/creepy-crawlies/) ⭐️ 8.0/10

Konstantin Ryabitsev reports that on git.kernel.org, abusive crawlers consume more CPU cycles rendering commits as HTML than all legitimate access, including git clones. Across 5 geo-distributed nodes, 14 CPU cores are dedicated solely to rendering commits for scrapers. This highlights the growing burden of abusive web crawlers on open-source infrastructure, potentially impacting performance and costs for maintainers. It raises concerns about the sustainability of serving crawlable content and the need for better crawler etiquette and mitigation strategies. The report specifically mentions that rendering commits as HTML for scrapers uses more CPU than git clones, which are the primary legitimate use case. This is happening across 5 geo-distributed nodes, indicating a significant and distributed resource drain.

rss · Simon Willison · Sep 7, 23:08

**Background**: git.kernel.org is the official Git repository hosting the Linux kernel source code. Git is a distributed version control system, and cloning repositories is a common way for developers to obtain code. Web crawlers, especially those used by AI companies, often scrape websites to gather data, but some do so aggressively, consuming excessive server resources.

**References**:
- [AI crawlers need to be more respectful - Read the Docs](https://about.readthedocs.com/blog/2024/07/ai-crawlers-abuse/)
- [How to Detect and Block Malicious Web Crawlers in 2025](https://fingerprint.com/blog/web-crawler-detection/)
- [Bad RDF Crawlers - W3C Wiki](https://www.w3.org/wiki/Bad_RDF_Crawlers)

**Discussion**: The Hacker News discussion likely includes comments from developers and maintainers sharing similar experiences and debating solutions, such as blocking certain crawlers or implementing better rate limiting. Some may argue that crawlers are necessary for indexing, while others emphasize the need for responsible crawling practices.

**Tags**: `#web crawling`, `#open source`, `#Linux kernel`, `#infrastructure`, `#resource management`

---

## [OpenAI Codex Desktop Outshines Claude Desktop in Harness Design](https://twitter.com/jakevin7/status/tweet-2096850696964325472) ⭐️ 8.0/10

A viral technical post argues that OpenAI's Codex Desktop is a generation ahead of Anthropic's Claude Desktop in agent harness design, citing superior architecture, async tool calls, and context management. The author claims Codex's V2 app-server architecture unifies runtime across clients, while Claude Desktop still uses per-session Bun processes. This comparison highlights a growing industry focus on agent harness quality over raw model capability, as 2026 is seen as the year harness design eclipses model selection. The debate influences developer tooling choices and could push competitors to innovate on architecture and user experience. The post highlights Codex's async tool calls and post-training on Astra, mid-turn steering in the Responses API, and context window sliding instead of compression. It also criticizes Claude's MCP design and Plan mode as historical baggage.

twitter · kabikabi · Sep 7, 06:38

**Background**: An agent harness is the software framework that connects an AI model to tools, memory, and user interfaces, determining how effectively an agent executes tasks. Recent benchmarks like Terminal-Bench and Runta's agent harness tests show Codex leading in performance, while async tool calls allow models to run tools in parallel, improving speed.

**References**:
- [The Complete Guide to Agent Harness: What It Is and Why It ...](https://harness-engineering.ai/blog/agent-harness-complete-guide/)
- [Claude Computer Use vs Codex: Which Desktop AI Agent Actually ...](https://www.tarekalaaddin.com/blog/claude-computer-use-vs-codex-desktop-agents)
- [Async tool calling | OpenAI API](https://developers.openai.com/api/docs/guides/async-tool-calling)

**Discussion**: The post has sparked 86 replies with 538 likes, indicating strong engagement. Commenters likely debate the architectural claims, with some agreeing on Codex's technical edge while others defend Claude's ecosystem or question the author's bias.

**Tags**: `#AI agents`, `#Codex`, `#Claude`, `#harness design`, `#software architecture`

---

## [Visual Dominance Undermines Personalized Safety in VLMs; New Benchmark and Monitor Proposed](https://arxiv.org/abs/2609.04281) ⭐️ 8.0/10

The paper introduces MPS-Bench, a benchmark of 5,181 scenarios from 584 real-world images across 12 high-risk domains, and reveals that eight frontier VLMs exhibit visual dominance, causing them to ignore user-specific context and respond unsafely. It also proposes PRISM, a lightweight input monitor that achieves 0.978 AUC and dominates the safety-utility Pareto frontier. This work addresses a critical gap in multimodal AI safety: responses that are generally safe may be unsafe for specific users with hidden medical, emotional, or situational contexts. By identifying visual dominance as a key failure mechanism and providing a benchmark and mitigation tool, it paves the way for more personalized and safer VLM deployments in high-stakes applications. The study evaluates eight frontier VLMs and finds they respond directly 86-99% of the time instead of seeking missing context, with none exceeding 2.6/5 on personalized safety. Causal interventions reveal a two-stage mechanism where visual affect transfers into the text stream in early layers and shapes final decisions, making late-stage internal remediation unreliable.

rss · arXiv cs.CV · Sep 7, 04:00

**Background**: Vision-language models (VLMs) integrate visual and textual information for multimodal reasoning, but this flexibility introduces new failure modes. Personalized safety is a task formulation where the same response may lead to divergent safety outcomes depending on the user, as introduced in prior LLM research. Visual dominance refers to the phenomenon where visual information overrides textual risk signals during multimodal fusion, leading to unsafe outputs.

**References**:
- [When Seeing Overrides Knowing: Visual Dominance and...](https://arxiv.org/html/2609.04281v1)
- [Personalized Safety in LLMs: A Benchmark and A Planning-Based ...](https://arxiv.org/html/2505.18882)
- [Personalized Safety in LLMs: A Benchmark and a Planning-Based ...](https://personalized-safety.github.io/)

**Tags**: `#AI safety`, `#vision-language models`, `#personalization`, `#benchmark`, `#multimodal`

---

## [TALA, AI Diagram Layout Engine, Goes Open Source](https://d2lang.com/blog/tala-is-open-source/) ⭐️ 7.0/10

Terrastruct has open-sourced TALA, its AI-based diagram layout engine designed for software architecture diagrams, which was previously proprietary and closed-source. The release makes TALA available for integration with tools like D2 and other diagramming applications. This open-sourcing could significantly improve the quality of automated diagram layouts across the ecosystem, benefiting developers and teams who rely on code-based diagramming tools. It also invites community contributions and broader adoption, potentially setting a new standard for AI-driven layout in technical documentation. TALA is built from scratch with zero dependencies for its algorithms and is specifically tailored for software architecture diagrams. It is a separate install from D2, maintaining a clean separation between the free and open-source D2 and the now open-sourced TALA.

hackernews · alixanderwang · Sep 7, 23:37 · [Discussion](https://news.ycombinator.com/item?id=49604150)

**Background**: D2 is a declarative diagramming language that allows users to define diagrams in text, and TALA is a layout engine that automatically positions nodes and routes edges to produce cleaner diagrams. Previously, TALA was proprietary, but now it is open-source, enabling broader use and community development. The engine aims to handle complex architecture diagrams with nesting and rank direction, which are challenging for traditional layout algorithms.

**References**:
- [terrastruct/TALA: A diagram layout engine designed ... - GitHub](https://github.com/terrastruct/tala)
- [TALA | Terrastruct's AutoLayout Approach](https://terrastruct.com/tala/index.html)
- [TALA | D2 Documentation](https://d2lang.com/tour/tala/)

**Discussion**: Community feedback is mixed: some praise TALA's tidier output on certain graphs, while others point out specific cases where it performs worse, such as the Go queue example. There are also questions about potential integration with Graphviz and inquiries about the key heuristics that make TALA suitable for architecture diagrams, indicating active technical interest.

**Tags**: `#open-source`, `#diagramming`, `#AI`, `#layout-engine`, `#D2`

---

## [Interactive Map Shows LA Building Construction History from 1880 to 2026](https://lax-skyline.parcelscope.net/) ⭐️ 7.0/10

An interactive map at lax-skyline.parcelscope.net visualizes the construction dates of buildings in Los Angeles from 1880 to 2026, allowing users to explore the city's development over time. The map has gained attention on Hacker News for its engaging presentation and the discussions it sparked about urban planning and data visualization. This visualization provides a unique lens on urban development, highlighting how zoning policies and historical events have shaped Los Angeles. It matters because it makes complex urban data accessible to the public, fostering informed discussions on housing affordability and city planning. The map is based on Los Angeles County assessor data, which records the construction year of existing buildings. However, as commenters noted, it only shows buildings that have survived to the present, so areas with significant demolition and rebuilding may appear underrepresented.

hackernews · rustywasm · Sep 7, 18:52 · [Discussion](https://news.ycombinator.com/item?id=49601655)

**Background**: Temporal data visualization on maps is a growing field, using techniques like interactive timelines and animated layers to show changes over time. This map uses parcel-level data to color-code buildings by construction year, offering a granular view of urban growth. Such visualizations rely on geographic information systems (GIS) and web mapping technologies to process and display large datasets.

**References**:
- [9 Creative Ways to Show Time on Maps That Reveal Hidden Patterns - Map ...](https://www.maplibrary.org/1565/creative-approaches-to-temporal-data-representation-in-mapping/)
- [9 Techniques for Visualizing Temporal Data on Maps That Reveal Hidden ...](https://www.maplibrary.org/1273/techniques-for-visualizing-temporal-data-on-maps/)
- [Urban Data Analytics, Visualization, and Storytelling – Urban ...](https://schoolofcities.github.io/urban-data-storytelling/)

**Discussion**: Commenters praised the map's neatness but pointed out that it reflects the age of surviving buildings rather than the full construction history. Some discussed the impact of LA's 1980s downzoning on housing affordability, while others shared technical insights on data processing pipelines and historical context, such as the city's former extensive streetcar network.

**Tags**: `#data-visualization`, `#urban-planning`, `#Los Angeles`, `#mapping`, `#history`

---

## [Jellyfin 12.0 Released with New Features and Improvements](https://jellyfin.org/posts/jellyfin-release-12.0/) ⭐️ 7.0/10

Jellyfin 12.0, a major version of the open-source media server, has been released, introducing new features and improvements to the platform. This release is significant for the Jellyfin community as it brings enhancements that improve user experience and system performance, reinforcing Jellyfin's position as a leading open-source alternative to proprietary media servers. The release includes a range of updates across the server and client applications, though specific features are not detailed in the provided content. Users are encouraged to review the official release notes for a comprehensive list of changes.

hackernews · 0xC0ncord · Sep 8, 01:56 · [Discussion](https://news.ycombinator.com/item?id=49604861)

**Background**: Jellyfin is a free, open-source media server that allows users to organize, manage, and stream their personal media collections. It is a popular alternative to proprietary solutions like Plex and Emby, offering full control over data and customization. Major version releases like 12.0 typically introduce significant new features, performance improvements, and bug fixes.

**Tags**: `#Jellyfin`, `#media server`, `#open source`, `#release`

---

## [LG TV Owners Urged to Disconnect from Internet Over Privacy](https://appleinsider.com/articles/26/09/07/disconnect-your-lg-television-from-the-internet-now) ⭐️ 7.0/10

A report from AppleInsider urges LG TV owners to disconnect their devices from the internet due to invasive data collection practices. The report highlights concerns about LG's data gathering, including voice data collection even when the TV is off. This matters because smart TVs are ubiquitous, and privacy concerns affect millions of consumers. It underscores the broader issue of IoT devices collecting data without transparent consent, potentially leading to regulatory scrutiny and changes in consumer behavior. The report references tests showing LG smart TVs engage in standby microphone activity, LAN scanning, and voice data uploads. Users can mitigate by disconnecting the TV from the internet or blocking it at the router level, while still using features like AirPlay/Chromecast.

hackernews · harambae · Sep 8, 01:00 · [Discussion](https://news.ycombinator.com/item?id=49604537)

**Background**: Smart TVs often collect viewing data and voice commands to personalize ads and content. LG's webOS platform has been criticized for automatic content recognition (ACR) and other tracking features. Privacy advocates recommend disabling such features or isolating the TV on the network.

**References**:
- [LG Faces Privacy Backlash Over Smart TV Tracking and Monitor App ...](https://www.digitalcitizen.life/lg-faces-privacy-backlash-over-smart-tv-tracking-and-monitor-app-installations/)
- [LG smart TVs turn standby into a privacy blind spot](https://www.pcquest.com/security-products/lg-smart-tvs-turn-standby-into-a-privacy-blind-spot-12502476)
- [How to stop your LG TV from spying on you - Pocket-lint](https://www.pocket-lint.com/how-to-stop-your-lg-tv-from-spying-on-you/)

**Discussion**: Community comments express concern and offer practical advice, such as blocking the TV at the router to retain casting features. Some question why anyone would connect a TV to the internet, while others note the irony of a site with ads criticizing data collection. Overall sentiment is supportive of the privacy warning but skeptical of meaningful change.

**Tags**: `#privacy`, `#IoT`, `#LG TV`, `#security`, `#consumer tech`

---

## [llm 0.35 Adds Support for OpenAI's GPT-6 Astra](https://simonwillison.net/2026/Sep/7/llm/) ⭐️ 7.0/10

llm 0.35 has been released, adding support for OpenAI's new GPT-6 Astra model via the 'gpt-6-astra' model identifier. This update allows users of the llm command-line tool to access GPT-6 Astra directly. This release is significant because GPT-6 Astra is OpenAI's most capable model, designed for complex reasoning, coding, and document creation. For developers using llm, this update provides immediate access to cutting-edge AI capabilities through a familiar CLI tool, streamlining integration into their workflows. GPT-6 Astra was released as a limited preview on September 3, 2026, following a delay due to safety concerns. The model is particularly adept at adhering to templates and producing well-structured documents, presentations, and spreadsheets.

rss · Simon Willison · Sep 7, 23:54

**Background**: llm is a command-line tool and Python library by Simon Willison that provides a unified interface to numerous large language models from providers like OpenAI, Anthropic, and Google. It allows users to interact with models via remote APIs or locally installed models, making it a popular choice for developers. GPT-6 Astra is OpenAI's latest flagship model, succeeding earlier GPT versions and offering enhanced capabilities for complex tasks.

**References**:
- [GitHub - simonw/llm: Access large language models from the ...](https://github.com/simonw/llm)
- [GPT-6 Astra - Wikipedia](https://en.wikipedia.org/wiki/GPT-6_Astra)
- [GPT-6 Astra: A new generation of intelligence | OpenAI](https://openai.com/index/gpt-6-astra/)

**Tags**: `#llm`, `#OpenAI`, `#GPT-6 Astra`, `#release`

---

## [EXAONE Finance: Attention-Free Financial Time Series Foundation Model](https://arxiv.org/abs/2609.04239) ⭐️ 7.0/10

EXAONE Forecast for Finance introduces EXAONE Finance, a financial time series foundation model that replaces self-attention with causal 1D convolution and group-aware pooling MLP, and uses masked context augmentation to handle missing data. It achieves state-of-the-art performance on the FinVerse benchmark across all three evaluation tiers. This model addresses key limitations of general time series foundation models in finance, such as quadratic computational cost and poor handling of missing data, potentially improving financial forecasting accuracy and efficiency. It could benefit quantitative analysts, portfolio managers, and financial institutions by providing a specialized, high-performing forecasting tool. The architecture uses linear-time operators: causal 1D convolution for temporal mixing and group-aware pooling MLP for variate mixing, avoiding quadratic scaling. It is pretrained on a large-scale corpus covering equities, FX, commodities, crypto, fixed income, and macro indicators, and evaluated on FinVerse.

rss · arXiv cs.AI · Sep 7, 04:00

**Background**: Time series foundation models (TSFMs) are pretrained on diverse time series data to enable zero-shot forecasting. However, general TSFMs often rely on self-attention, which scales quadratically with sequence length and variate count, and assume fully observed inputs, which is unrealistic for financial data that is often long, multi-channel, and intermittently observed. EXAONE Finance is designed to overcome these challenges with an attention-free architecture and masked context augmentation.

**References**:
- [FinCast: A Foundation Model for Financial Time - Series ... | alphaXiv](https://www.alphaxiv.org/abs/2508.19609)
- [Why Foundation Models Struggle with Financial Time Series ...](https://paperswithbacktest.com/course/foundation-models-financial-time-series-challenges)
- [Time Series Foundation Models for Multivariate Financial ... :: SSRN](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=6085266)

**Tags**: `#time series`, `#foundation model`, `#finance`, `#deep learning`, `#arXiv`

---

## [AI Recruitment Evolution: From Matching Models to Recruiting Agents](https://arxiv.org/abs/2609.04286) ⭐️ 7.0/10

This paper presents a systematized narrative review of AI recruitment systems, tracing their evolution from bilateral retrieval and behavioral ranking to neural person-job matching, LLM components, and tool-using recruiting agents. It synthesizes 40 representative works and analyzes three coupled transitions in automation, evaluation, and governance. This review is significant because it provides a comprehensive framework for understanding and evaluating the rapidly evolving field of AI recruitment, which has major implications for HR technology and AI governance. It highlights persistent gaps in evaluation and governance that need to be addressed to ensure fair and effective AI hiring systems. The review uses a purposive search and coding protocol updated through July 2026, with targeted updates through September 2026, and organizes 40 representative works. It identifies gaps such as behavioral labels confounding exposure, preference, and qualification; private and synthetic data limiting external validity; and no single study jointly evaluating utility, fairness, privacy, and security.

rss · arXiv cs.AI · Sep 7, 04:00

**Background**: AI recruitment has evolved from simple matching models to complex multi-stage workflows involving LLMs and agents. These systems now retrieve evidence, compare candidates, and support or execute hiring actions, but their evaluation and governance lag behind technological advances.

**References**:
- [[2504.02870] AI Hiring with LLMs: A Context-Aware and ... Application of LLM Agents in Recruitment: A Novel Framework ... LLM Workflows: Patterns, Tools & Production Architecture ... 9 Best LLMs for Agent Building and Workflow Automation in 2026 GitHub - Bharath0726/AiRecruitingAgent: Buliding LLM based ... Multi Agent Workflow For Recruitment - Mistral AI Cookbook GitHub - gandresr/llm_agents_tutorial: Tutorial to understand ...](https://arxiv.org/abs/2504.02870)
- [Application of LLM Agents in Recruitment: A Novel Framework ...](https://arxiv.org/html/2401.08315v2)
- [AI recruitment and stakeholder concerns: an integrative framework ...](https://www.sciencedirect.com/science/article/pii/S0963868726000326)

**Tags**: `#AI recruitment`, `#LLM agents`, `#systematic review`, `#human resources`, `#AI governance`

---

## [Fourier Auxiliary Head Fixes Physical Representation Laziness in JEPA World Models](https://arxiv.org/abs/2609.04264) ⭐️ 7.0/10

This paper identifies a new failure mode in latent world models called 'physical representation laziness', where learned latent states fail to encode key physical properties despite avoiding collapse. The authors propose a lightweight 'Fourier auxiliary head' for training-time supervision that enforces physically-informed structuring of the latent space, improving planning success rates in dynamic environments with no inference-time cost. This work addresses a significant limitation in JEPA-style world models, which are increasingly used for planning in dynamic environments. By providing a generalizable, low-cost solution, it could improve the reliability and data efficiency of latent world models, benefiting applications in robotics, autonomous driving, and reinforcement learning. The Fourier auxiliary head is applied only during training, adding no inference-time overhead, and can be generalized to any environment. Experiments show substantial improvements in planning success rates in dynamic environments where baseline LeWM exhibits laziness, with modest gains elsewhere; low-data regimes benefit particularly from the auxiliary supervision.

rss · arXiv cs.LG · Sep 7, 04:00

**Background**: Latent world models predict and plan in a compressed latent space rather than raw pixels. JEPA (Joint Embedding Predictive Architecture) models, such as LeWorldModel (LeWM), use regularization like SIGReg to prevent representation collapse, but this paper reveals that even without collapse, representations can be 'lazy' and miss physical properties. The Fourier auxiliary head is inspired by Fourier series as universal function approximators, helping the model capture continuous structure in data.

**References**:
- [All JEPA Models : 14 Milestones From I- JEPA to ThinkJEPA](https://www.turingpost.com/p/jepamap)
- [[2603.05924] Weak-SIGReg: Covariance Regularization for Stable Deep Learning](https://arxiv.org/abs/2603.05924)
- [[2410.22269] Fourier Head: Helping Large Language Models Learn Complex Probability Distributions](https://arxiv.org/abs/2410.22269)

**Tags**: `#world models`, `#JEPA`, `#latent representation`, `#reinforcement learning`, `#arXiv`

---
