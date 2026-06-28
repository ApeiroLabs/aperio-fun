# Horizon Daily - 2026-06-24

> From 30 items, 12 important content pieces were selected

---

1. Karpathy's Third Paradigm: LLM as Persistent Team Member ⭐️ 9.0/10
2. LLMs Flood Vulnerability Reports, Diluting Their Value ⭐️ 8.0/10
3. Qwen-AgentWorld: Language World Models for General Agents ⭐️ 8.0/10
4. Bunny DNS Goes Free: No Query Fees, Up to 500 Domains ⭐️ 7.0/10
5. Raspberry Pi Pico W Firmware Creates Driverless USB Wi-Fi Adapter ⭐️ 7.0/10
6. FUTO Swipe: Open-Source Swipe Typing Model Released ⭐️ 7.0/10
7. Datasette 1.0a35 Adds Create/Alter Table APIs ⭐️ 7.0/10
8. Memos: Lightweight Self-Hosted Note-Taking Tool ⭐️ 7.0/10
9. Jerry's Map: 60+ Years of Imaginary Cartography ⭐️ 6.0/10
10. Remembering Tony Krueger, creator of Word's spell-check squiggles ⭐️ 6.0/10
11. Testing OPFS with Pyodide for Datasette Lite ⭐️ 6.0/10
12. DeepSeek Cache Hit Rate Reaches 95% in Long Task ⭐️ 6.0/10

---

## [Karpathy's Third Paradigm: LLM as Persistent Team Member](https://twitter.com/karpathy/status/tweet-2069547676849557725) ⭐️ 9.0/10

Andrej Karpathy describes a new paradigm for interacting with LLMs where Claude becomes a persistent, asynchronous entity with org-wide tools and context, working alongside human teams. This is the third major redesign of LLM UI/UX, following the website and app paradigms. This paradigm shift could fundamentally change how AI integrates into enterprise workflows, moving from isolated tools to a seamless team member. It represents a new level of AI integration that may redefine productivity and collaboration in organizations. Karpathy emphasizes that this is not a simple Q&A with RAG over Slack, but a deeply integrated, multiplayer system where Claude writes majority of code and everyone feels like a manager. The product requires significant engineering to make it 'just work' across tools, integrations, compute environments, memory, and security.

twitter · Andrej Karpathy · Jun 23, 22:26

**Background**: LLM interaction has evolved from using a website (e.g., ChatGPT) to downloading a desktop app (e.g., Claude app). The new paradigm treats the LLM as a persistent, asynchronous team member with access to organizational tools and context, enabling it to work alongside humans continuously. This concept aligns with emerging technologies like persistent runtimes for LLM agents and model context protocols (MCP) for enterprise integration.

<details><summary>References</summary>
<ul>
<li><a href="https://x.com/karpathy/status/2069547676849557725">This is a new paradigm for interacting with Claude that is ...</a></li>
<li><a href="https://arxiv.org/pdf/2604.04660">Springdrift: An Auditable Persistent Runtime for LLM Agents ...</a></li>
<li><a href="https://www.strategy.com/software/blog/model-context-protocol-mcp-for-enterprise-ai-integration">Model context protocol (MCP) for enterprise AI integration</a></li>

</ul>
</details>

**Discussion**: The discussion on Twitter shows high engagement (14.7k likes, 752 replies) with many users expressing excitement about the paradigm shift. Some commenters note that this is similar to what they have been building internally, while others question the practicality for enterprise deployments. Karpathy clarifies that it's not a simple hackathon project but a deeply engineered product.

**Tags**: `#LLM`, `#UI/UX`, `#AI integration`, `#paradigm shift`, `#Claude`

---

## [LLMs Flood Vulnerability Reports, Diluting Their Value](https://words.filippo.io/vuln-reports/) ⭐️ 8.0/10

Filippo Valsorda argues that automated vulnerability discovery by LLMs has made traditional vulnerability reports less special, leading to an influx of spam and a need for new approaches to disclosure. This shift undermines the trust and efficiency of vulnerability disclosure processes, forcing maintainers to sift through low-quality reports and potentially missing critical issues. The author notes receiving 2-5 unsolicited vulnerability reports per week, half of which are LLM-generated false positives like bad CSS, while others appear to be extortion attempts.

hackernews · goranmoomin · Jun 23, 23:42 · [Discussion](https://news.ycombinator.com/item?id=48653216)

**Background**: Vulnerability disclosure is a process where security researchers report bugs to software maintainers, who then fix and publicly disclose them. LLMs can now automatically scan code for potential vulnerabilities, generating reports at low cost, which has increased the volume of reports but also the noise.

<details><summary>References</summary>
<ul>
<li><a href="https://arxiv.org/abs/2605.21779">FuzzingBrain V2: A Multi-Agent LLM System for Automated ...</a></li>
<li><a href="https://cheatsheetseries.owasp.org/cheatsheets/Vulnerability_Disclosure_Cheat_Sheet.html">Vulnerability Disclosure - OWASP Cheat Sheet Series</a></li>

</ul>
</details>

**Discussion**: Commenters largely agree with the spam problem, with some suggesting the situation is temporary as LLMs will also help fix bugs and improve pre-shipping detection. Others emphasize the need for better engineering practices and memory-safe languages to reduce bug classes.

**Tags**: `#security`, `#vulnerability disclosure`, `#LLM`, `#automation`, `#software engineering`

---

## [Qwen-AgentWorld: Language World Models for General Agents](https://arxiv.org/abs/2606.24597) ⭐️ 8.0/10

Qwen-AgentWorld introduces a 35B-parameter language world model that simulates agentic environments across seven domains (MCP, Search, Terminal, SWE, Android, Web, OS) using long chain-of-thought reasoning, enabling agents to predict action consequences. This addresses a critical gap in LLM-based agents: the inability to understand the future state their actions will cause, which is essential for safe and effective planning. It could enable more robust autonomous agents in complex, open-ended tasks. The model is trained from continual pre-training onward (CPT → SFT → RL) with environment modeling as the training objective, not a post-hoc adaptation. It covers seven unified domains and uses long chain-of-thought reasoning for simulation.

hackernews · ilreb · Jun 24, 02:21 · [Discussion](https://news.ycombinator.com/item?id=48654351)

**Background**: World models predict environment dynamics based on current observations and actions, serving as a core cognitive mechanism for reasoning and planning. Traditional LLM-based agents lack this capability, often failing to anticipate the consequences of their actions in dynamic environments.

<details><summary>References</summary>
<ul>
<li><a href="https://arxiv.org/abs/2606.24597">[2606.24597] Qwen-AgentWorld: Language World Models for ...</a></li>
<li><a href="https://github.com/QwenLM/Qwen-AgentWorld/tree/main">GitHub - QwenLM/Qwen-AgentWorld: Qwen-AgentWorld: Language ...</a></li>
<li><a href="https://qwen.ai/research/">Qwen</a></li>

</ul>
</details>

**Discussion**: Commenters noted the challenge of simulating abstract and complex systems, and questioned how the world model would fit into an agent workflow—whether as a bolt-on component that reviews actions before execution. Some pointed to multi-model orchestration as a future direction.

**Tags**: `#AI agents`, `#world models`, `#LLM`, `#reinforcement learning`, `#simulation`

---

## [Bunny DNS Goes Free: No Query Fees, Up to 500 Domains](https://bunny.net/blog/were-making-bunny-dns-free/) ⭐️ 7.0/10

Bunny.net announced that Bunny DNS is now free, eliminating all DNS query fees and offering free DNS hosting for up to 500 domains per account, with no query limits or hidden charges. This move positions Bunny DNS as a strong EU-based alternative to Cloudflare, potentially accelerating internet speed by removing cost barriers for DNS resolution and fostering competition in the DNS market. The free tier includes smart records, health monitoring, and a global anycast network, with no critical features locked behind enterprise plans. Bunny.net is a private company with only a $6 million funding round in 2022.

hackernews · dabinat · Jun 24, 08:50 · [Discussion](https://news.ycombinator.com/item?id=48657030)

**Background**: DNS (Domain Name System) translates domain names to IP addresses. Many DNS providers charge based on query volume, which can become costly for high-traffic sites. Bunny DNS is an authoritative DNS service running on a dual-stack anycast network supporting IPv4 and IPv6.

<details><summary>References</summary>
<ul>
<li><a href="https://bunny.net/dns/">Bunny DNS | The #1 Scriptable DNS Platform | bunny.net</a></li>
<li><a href="https://docs.bunny.net/dns">Bunny DNS - bunny.net Documentation</a></li>
<li><a href="https://en.wikipedia.org/wiki/DNS_hosting_service">DNS hosting service</a></li>

</ul>
</details>

**Discussion**: Commenters praised the move, with some highlighting Bunny as a much-needed EU alternative to Cloudflare. Others noted the company's organic growth approach and the fast loading speed of their website. A user also pointed out the availability of a Terraform provider.

**Tags**: `#DNS`, `#free service`, `#cloud infrastructure`, `#EU tech`, `#performance`

---

## [Raspberry Pi Pico W Firmware Creates Driverless USB Wi-Fi Adapter](https://gitlab.com/baiyibai/pico-usb-wifi) ⭐️ 7.0/10

A new open-source firmware called pico-usb-wifi turns a Raspberry Pi Pico W into a driverless USB Wi-Fi adapter by enumerating as a USB CDC-NCM device. This allows any host computer to use the Pico W as a Wi-Fi adapter without installing additional drivers. This project provides a low-cost, practical solution for adding Wi-Fi connectivity to devices lacking built-in Wi-Fi, such as desktops or embedded systems. It also challenges assumptions about the feasibility of such implementations, as AI models previously deemed it infeasible. The firmware uses USB CDC-NCM (Network Control Model) to present the Pico W as an Ethernet-like network interface. It is hosted on GitLab, not GitHub, which some community members appreciate as a stand against GitHub's dominance.

hackernews · byb · Jun 24, 03:17 · [Discussion](https://news.ycombinator.com/item?id=48654676)

**Background**: USB CDC-NCM is a standard protocol for Ethernet over USB, commonly used for driverless network adapters. The Raspberry Pi Pico W is a low-cost microcontroller board with built-in Wi-Fi, and this firmware repurposes it as a USB Wi-Fi adapter without requiring custom drivers on the host.

<details><summary>References</summary>
<ul>
<li><a href="https://gitlab.com/baiyibai/pico-usb-wifi">白一百 / pico-usb-wifi · GitLab</a></li>
<li><a href="https://en.wikipedia.org/wiki/Ethernet_over_USB">Ethernet over USB - Wikipedia</a></li>
<li><a href="https://github.com/sidd-kishan/PicoPiFi">GitHub - sidd-kishan/PicoPiFi: A driverless usb rndis wifi ...</a></li>

</ul>
</details>

**Discussion**: Community comments highlight prior art, such as using the Pico W as an Ethernet bridge in projects like BlueSCSI and PicoGUS. One user plans to use a Raspberry Pi as a travel router with RaspAP, while another notes a similar project for a DualSense dongle. The discussion also praises the choice of GitLab over GitHub.

**Tags**: `#Raspberry Pi Pico`, `#USB Wi-Fi`, `#embedded`, `#open source`, `#networking`

---

## [FUTO Swipe: Open-Source Swipe Typing Model Released](https://swipe.futo.tech/) ⭐️ 7.0/10

FUTO has released FUTO Swipe, a family of open models for accurate swipe typing on mobile keyboards, including a layout-agnostic encoder, a layout-specific decoder, and a lightweight context language model. This project addresses the long-standing pain point of poor swipe accuracy in privacy-respecting keyboards, offering a viable open-source alternative to proprietary solutions like Gboard. The models run fully offline on device with a small footprint, and FUTO has also released the 1 million swipe dataset used for training. The system is layout-agnostic, meaning it can work with any keyboard layout supplied at runtime.

hackernews · futohq · Jun 23, 17:50 · [Discussion](https://news.ycombinator.com/item?id=48648619)

**Background**: Swipe typing (also called gesture typing) allows users to input words by sliding their finger across the keyboard without lifting it. Traditional swipe engines often suffer from word overlap errors and require large, proprietary models. FUTO Swipe aims to provide a fast, accurate, and open alternative.

<details><summary>References</summary>
<ul>
<li><a href="https://swipe.futo.tech/">FUTO Swipe</a></li>
<li><a href="https://huggingface.co/futo-org/futo-swipe">futo-org/futo-swipe · Hugging Face</a></li>
<li><a href="https://www.productcool.com/product/futo-swipe">FUTO Swipe - Open models for on-device swipe typing | ProductCool</a></li>

</ul>
</details>

**Discussion**: Community feedback is largely positive, with users noting the new model is close to Gboard quality but still has issues like random capitalization and lack of context awareness. Some users have switched to FUTO Keyboard full-time after the update.

**Tags**: `#mobile keyboard`, `#swipe typing`, `#machine learning`, `#open source`, `#user experience`

---

## [Datasette 1.0a35 Adds Create/Alter Table APIs](https://simonwillison.net/2026/Jun/23/datasette/#atom-everything) ⭐️ 7.0/10

Datasette 1.0a35 introduces a new 'Create table' interface and JSON API, as well as an 'Alter table' interface and JSON API, enabling users to define and modify table schemas programmatically. This release also includes stable template context documentation for custom templates. These new APIs significantly expand Datasette's capabilities, allowing users to manage database schemas directly through the web interface or programmatically, which is a major step toward the 1.0 release. This makes Datasette more powerful for data exploration and application building. The create table API supports defining columns, primary keys, custom column types, NOT NULL constraints, literal and expression defaults, and single-column foreign keys. The alter table API supports adding, renaming, reordering, and dropping columns, as well as changing column types, defaults, constraints, primary keys, foreign keys, and table names.

rss · Simon Willison · Jun 23, 21:34

**Background**: Datasette is an open-source tool for exploring and publishing data, built on SQLite. It provides a web interface and JSON API for querying databases. Previously, creating or altering tables required direct SQLite commands or external plugins; this alpha release brings these capabilities natively into Datasette.

<details><summary>References</summary>
<ul>
<li><a href="https://docs.datasette.io/en/latest/json_api.html">JSON API - Datasette documentation</a></li>
<li><a href="https://simonwillison.net/2026/Jun/23/datasette/">Release: datasette 1.0a35 - Simon Willison's Weblog</a></li>

</ul>
</details>

**Tags**: `#datasette`, `#release`, `#database`, `#json-api`, `#open-source`

---

## [Memos: Lightweight Self-Hosted Note-Taking Tool](https://twitter.com/FakeMaidenMaker/status/tweet-2069669098087145860) ⭐️ 7.0/10

Memos is an open-source, self-hosted note-taking tool that stores notes in Markdown format, with over 61,000 stars on GitHub. It can be deployed via a single Docker command with a minimal image size of 20MB. This tool addresses growing concerns about data ownership and privacy by giving users full control over their notes, unlike cloud-based services. Its lightweight design and easy deployment make it accessible for individuals and small teams seeking a private alternative to mainstream note-taking apps. Memos is MIT-licensed and features a timeline interface for quick capture of ideas, todos, and snippets. It supports zero telemetry, full data export, and can be run on a personal server using Docker Compose for persistent storage.

twitter · Ren · Jun 24, 06:29

**Background**: Self-hosted software allows users to run applications on their own servers, ensuring data privacy and control. Markdown is a lightweight markup language for formatting plain text, commonly used for note-taking. Docker simplifies deployment by packaging applications into containers.

<details><summary>References</summary>
<ul>
<li><a href="https://github.com/usememos/memos">GitHub - usememos/memos: Open-source, self-hosted note-taking ...</a></li>
<li><a href="https://usememos.com/">Memos - Open-Source, Self-Hosted Note-Taking App</a></li>
<li><a href="https://usememos.com/docs/deploy/docker-compose">Docker Compose - Memos</a></li>

</ul>
</details>

**Tags**: `#self-hosted`, `#note-taking`, `#privacy`, `#open-source`, `#Docker`

---

## [Jerry's Map: 60+ Years of Imaginary Cartography](http://www.jerrysmap.com/the-map) ⭐️ 6.0/10

Artist Jerry Gretzinger has been continuously drawing a map of an imaginary land since 1963, using a custom card-driven system to guide each new tile's creation. The project now spans over 3,000 hand-painted panels and has an interactive web version. This decades-long project exemplifies how rule-based systems can sustain and evolve a creative practice over a lifetime. It also highlights the intersection of art, procedural generation, and outsider art, inspiring both artists and game designers. The card deck includes instructions like adding a city, a river, or a void, and Jerry draws a new panel each time he draws a card. The map is not digital but physical, with each panel painted by hand, and the web version is a digital reproduction.

hackernews · turtleyacht · Jun 23, 18:40 · [Discussion](https://news.ycombinator.com/item?id=48649435)

**Background**: Jerry Gretzinger started the map as a doodle and later formalized the process with a card system to overcome creative blocks. The project is considered outsider art, similar to Henry Darger's imaginary worlds or the game Dwarf Fortress, which also uses procedural generation.

<details><summary>References</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Jerry_Gretzinger">Jerry Gretzinger - Wikipedia</a></li>
<li><a href="http://www.jerrysmap.com/the-map">The Map - Jerry's Map</a></li>

</ul>
</details>

**Discussion**: Commenters shared links to an interactive web version and a video documentary, expressing admiration for the meditative and systematic nature of the project. Some drew parallels to other procedural generation works like Dwarf Fortress and Nomic.

**Tags**: `#art`, `#map-making`, `#creative-process`, `#outsider-art`

---

## [Remembering Tony Krueger, creator of Word's spell-check squiggles](https://devblogs.microsoft.com/oldnewthing/20260622-00/?p=112451) ⭐️ 6.0/10

Raymond Chen's blog post pays tribute to Tony Krueger, who implemented the red and green squiggly underlines for spell-check in Microsoft Word, highlighting his unintended legacy. This story illustrates how a seemingly small feature can become a universal user experience, and it sparks reflection on the unpredictable nature of software legacy and the challenges of multi-language support. The squiggly underlines were introduced during Krueger's port of Word for Windows, and the feature later became a standard in many text editors. Community comments note that Amiga's Prowrite had a similar feature earlier.

hackernews · saikatsg · Jun 23, 18:10 · [Discussion](https://news.ycombinator.com/item?id=48648959)

**Background**: Spell-check squiggly underlines are real-time visual indicators that mark misspelled words (red) or grammatical errors (green) as users type. Tony Krueger was a Microsoft developer who worked on the early Windows version of Word, and his implementation became iconic.

<details><summary>References</summary>
<ul>
<li><a href="https://support.microsoft.com/en-us/word/training/check-grammar-spelling-and-more-in-word">Check grammar, spelling, and more in Word | Microsoft Support</a></li>

</ul>
</details>

**Discussion**: Commenters reflected on the unpredictability of legacy, noting that developers often become known for unintended features. Others highlighted the frustration of multi-language environments where squiggles become noise, and one pointed out a circular citation between Chen's article and Wikipedia.

**Tags**: `#history`, `#spell-check`, `#Microsoft Word`, `#software legacy`

---

## [Testing OPFS with Pyodide for Datasette Lite](https://simonwillison.net/2026/Jun/23/opfs-pyodide/#atom-everything) ⭐️ 6.0/10

Simon Willison built a test harness to explore using the Origin Private File System (OPFS) with Pyodide, aiming to enable Datasette Lite to edit persistent SQLite files stored in the browser. This experiment could pave the way for fully client-side, persistent data editing in web applications like Datasette Lite, reducing reliance on server backends and enhancing offline capabilities. The test harness is a playground UI built with Claude Code for Web, allowing interactive testing of OPFS across different browsers. OPFS provides a sandboxed, origin-private filesystem that persists across sessions and supports synchronous I/O from Web Workers.

rss · Simon Willison · Jun 23, 18:58

**Background**: Datasette Lite runs the full Datasette Python application in the browser via Pyodide (a CPython port to WebAssembly). OPFS is a browser API that gives web apps a private, persistent filesystem not visible to the user's OS. Combining them could allow Datasette Lite to load and save SQLite databases locally without a server.

<details><summary>References</summary>
<ul>
<li><a href="https://developer.mozilla.org/en-US/docs/Web/API/File_System_API/Origin_private_file_system">Origin private file system - Web APIs | MDN - MDN Web Docs</a></li>
<li><a href="https://web.dev/articles/origin-private-file-system">The origin private file system | Articles | web.dev</a></li>
<li><a href="https://github.com/simonw/datasette-lite">GitHub - simonw/datasette-lite: Datasette running in your ...</a></li>

</ul>
</details>

**Tags**: `#Pyodide`, `#WebAssembly`, `#OPFS`, `#Datasette Lite`, `#browsers`

---

## [DeepSeek Cache Hit Rate Reaches 95% in Long Task](https://twitter.com/jakevin7/status/tweet-2069393507328966738) ⭐️ 6.0/10

A user reported a 95% cache hit rate for DeepSeek while completing a long-context task with nearly 4 billion tokens over 18 hours, costing only $33. This demonstrates DeepSeek's exceptional cost efficiency for long-context workloads, potentially making it a highly attractive option for developers and enterprises dealing with large-scale AI tasks. The task was run using the Maka agent framework, and the cache hit rate aligns with reports of 92-95% cache hit rates in production workloads for DeepSeek V4.

twitter · kabikabi · Jun 23, 12:13

**Background**: DeepSeek offers context caching, where repeated input tokens are cached to reduce costs. Cache hit tokens are billed at a lower rate than cache miss tokens, making high hit rates crucial for cost savings. Long-context tasks, such as processing entire codebases or lengthy documents, can consume billions of tokens.

<details><summary>References</summary>
<ul>
<li><a href="https://gist.github.com/zhanglpg/0d8235299938dc5e09ac21a26c3d7c5a">zhanglpg / DeepSeek V4 - The Cache Hit Rate Phenomenon.md</a></li>
<li><a href="https://api-docs.deepseek.com/guides/kv_cache/">Context Caching | DeepSeek API Docs</a></li>
<li><a href="https://github.com/maka-agent/maka-agent/issues/15">[Feature] Agent primitives: subagent, deferred tools, task ...</a></li>

</ul>
</details>

**Discussion**: The tweet received 54 replies, with many users expressing satisfaction with DeepSeek's performance and cost efficiency. Some discussed the implications for long-context AI applications.

**Tags**: `#DeepSeek`, `#cache`, `#cost efficiency`, `#long-context`

---

