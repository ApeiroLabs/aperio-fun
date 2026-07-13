# Daily Brief - 2026-07-13

> From 35 items, 7 important content pieces were selected

---

1. [Terry Tao Uses AI Coding Agents to Build Apps](https://terrytao.wordpress.com/2026/07/11/old-and-new-apps-via-modern-coding-agents/) ⭐️ 8.0/10
2. [Chromium 148 Math.tanh Enables OS Fingerprinting](https://scrapfly.dev/posts/browser-math-os-fingerprint/) ⭐️ 7.0/10
3. [Tiny Cycle-Accurate 8-Bit Emulators in Browser](https://floooh.github.io/tiny8bit-preview/index.html) ⭐️ 7.0/10
4. [AI Agents Should Never Be Directly Responsible Individuals](https://simonwillison.net/2026/Jul/12/directly-responsible-individuals/#atom-everything) ⭐️ 7.0/10
5. [Designing and Assembling My First PCB](https://vilkeliskis.com/b/2026/0711.html) ⭐️ 6.0/10
6. [Developer Argues for Vanilla JavaScript Over Frameworks](https://guseyn.com/html/posts/why-vanilla-js.html) ⭐️ 6.0/10
7. [Anthropic Extends Claude Fable 5 Access Amid Compute Constraints](https://simonwillison.net/2026/Jul/12/bump/#atom-everything) ⭐️ 6.0/10

---

## [Terry Tao Uses AI Coding Agents to Build Apps](https://terrytao.wordpress.com/2026/07/11/old-and-new-apps-via-modern-coding-agents/) ⭐️ 8.0/10

Fields Medalist Terry Tao published a blog post demonstrating how he used modern LLM-based coding agents to rapidly build interactive visualizations and applications, highlighting the vast latent demand for software outside traditional spaces. This shows that even elite mathematicians can leverage AI coding agents to create practical tools, potentially democratizing software development and accelerating innovation across many fields. Tao used guided interaction with LLM agents to generate visualizations that supplement his research papers, noting that while these tools are not mission-critical, the downside risk is acceptable for non-core supplements.

hackernews · subset · Jul 12, 11:09 · [Discussion](https://news.ycombinator.com/item?id=48880170)

**Background**: Modern coding agents are AI tools that can autonomously write, debug, and deploy code based on natural language prompts. They have evolved from simple autocomplete to autonomous execution loops, with platforms like Claude Code, GitHub Copilot, and Cursor leading the field in 2026.

**References**:
- [8 Best AI Coding Assistants [Updated May 2026] | Augment Code](https://www.augmentcode.com/tools/8-top-ai-coding-assistants-and-their-best-use-cases)
- [The State of AI Coding Agents (2026): From Pair Programming to Autonomous AI Teams | by Dave Patten | Medium](https://medium.com/@dave-patten/the-state-of-ai-coding-agents-2026-from-pair-programming-to-autonomous-ai-teams-b11f2b39232a)
- [The Best AI Coding Assistants: 20 Tools Reviewed for 2026](https://axify.io/blog/the-best-ai-coding-assistants-a-full-comparison-of-20-tools)

**Discussion**: Commenters were enthusiastic, with one noting that LLMs have enabled visualizations they always wanted but lacked time to build. Others humorously compared Tao's use of coding agents to a Michelin-starred chef discovering microwave dinners, and emphasized the infinite latent demand for software outside traditional spaces.

**Tags**: `#LLM`, `#coding agents`, `#software development`, `#AI tools`, `#visualization`

---

## [Chromium 148 Math.tanh Enables OS Fingerprinting](https://scrapfly.dev/posts/browser-math-os-fingerprint/) ⭐️ 7.0/10

A new browser fingerprinting technique exploits OS-dependent differences in Chromium 148's Math.tanh implementation, allowing websites to infer the underlying operating system by analyzing the floating-point output of a single tanh call. This discovery adds a novel, hard-to-spoof fingerprinting vector that can reveal the OS even when user-agent strings are altered, raising significant privacy concerns and highlighting the need for cross-platform consistency in JavaScript math functions. The differences stem from varying math libraries: macOS uses Apple's math library, Linux uses glibc, and Windows uses the Universal C Runtime; they disagree on about a quarter of inputs, typically by one unit in the last place (1 ULP).

hackernews · joahnn_s · Jul 12, 21:12 · [Discussion](https://news.ycombinator.com/item?id=48884853)

**Background**: Browser fingerprinting collects device-specific information to identify users without cookies. Math.tanh is a hyperbolic tangent function in JavaScript; its floating-point output can vary across platforms due to different underlying math libraries, creating a potential fingerprinting signal.

**References**:
- [Your Browser Does Math Differently on Every OS, and Anti-Bot Systems Read the Bits · scrapfly.dev](https://scrapfly.dev/posts/browser-math-os-fingerprint/)
- [Browser fingerprinting](https://en.wikipedia.org/wiki/Browser_fingerprinting)
- [Math.tanh() - JavaScript - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/tanh)

**Discussion**: Commenters expressed mixed reactions: some noted the technique could also fingerprint browser version ranges, while others criticized the article's AI-generated nature and the motives of the scraping company behind it. A few pointed out that even Tor Browser struggles to obscure the OS, suggesting the challenge is widespread.

**Tags**: `#browser fingerprinting`, `#privacy`, `#Chromium`, `#JavaScript`, `#operating system`

---

## [Tiny Cycle-Accurate 8-Bit Emulators in Browser](https://floooh.github.io/tiny8bit-preview/index.html) ⭐️ 7.0/10

A collection of tiny, cycle-accurate emulators for 8-bit computers (e.g., ZX Spectrum, Commodore 64) runs entirely in the browser, loading games instantly without waiting. This project demonstrates that high-fidelity, cycle-accurate emulation can be achieved in a web browser, making retro gaming more accessible and preserving historical computing accuracy. The emulators use a pin-level emulation model where each component is self-contained with explicit interfaces, enabling flexible interoperability. Some games have higher default volume, which may surprise users.

hackernews · naves · Jul 12, 20:23 · [Discussion](https://news.ycombinator.com/item?id=48884395)

**Background**: Cycle-accurate emulation means the emulator replicates the timing of each CPU cycle and component interaction exactly as the original hardware. This is computationally expensive but ensures accurate behavior. Traditional emulators often use batch updates for performance, sacrificing accuracy.

**References**:
- [Cycle-accurate simulator](https://en.wikipedia.org/wiki/Cycle-accurate_simulator)
- [emulation - What exactly is a cycle - accurate emulator ?](https://retrocomputing.stackexchange.com/questions/1191/what-exactly-is-a-cycle-accurate-emulator/1199)
- [Emulation Accuracy Explained: Why Some Emulators Sound...](https://www.retrotechlab.com/emulation-accuracy-explained-why-emulators-sound-different/)

**Discussion**: Commenters praised the instant loading and pin-level emulation model, with one noting it's a flexible approach for interoperability. Some pointed out the project is 8 years old but still relevant, and one user requested Oric support.

**Tags**: `#emulation`, `#retrocomputing`, `#webassembly`, `#javascript`, `#8-bit`

---

## [AI Agents Should Never Be Directly Responsible Individuals](https://simonwillison.net/2026/Jul/12/directly-responsible-individuals/#atom-everything) ⭐️ 7.0/10

Simon Willison argues that AI agents should never be considered Directly Responsible Individuals (DRIs) because they cannot be held accountable for their actions. This distinction is crucial for organizational accountability as AI agents become more autonomous; assigning DRI status to machines could blur responsibility and lead to ethical and legal risks. The term DRI originated at Apple and is defined in the GitLab handbook as the person ultimately accountable for a project's success or failure. Willison references IBM's 1979 training slide stating that a computer must never make a management decision.

rss · Simon Willison · Jul 12, 23:57

**Background**: Directly Responsible Individual (DRI) is a management concept where a single person is assigned ultimate accountability for a project or initiative, ensuring clear ownership. The idea has been widely adopted in tech companies like Apple and GitLab to improve efficiency and reduce ambiguity.

**References**:
- [Directly Responsible Individuals (DRI) | The GitLab Handbook](https://handbook.gitlab.com/handbook/people-group/directly-responsible-individuals/)
- [Directly Responsible Individual (DRI) | D. Brown Management](https://dbmteam.com/insights/directly-responsible-individual-dri/)
- [Directly Responsible Individuals: The What, How and Why of DRIs - Tettra](https://tettra.com/article/directly-responsible-individuals-guide/)

**Tags**: `#accountability`, `#AI agents`, `#organizational culture`, `#LLM`

---

## [Designing and Assembling My First PCB](https://vilkeliskis.com/b/2026/0711.html) ⭐️ 6.0/10

A blog post details the author's journey of designing and assembling their first printed circuit board (PCB), from schematic capture to soldering components. This personal project highlights how affordable and accessible custom PCB manufacturing has become, enabling hobbyists and engineers to prototype hardware with ease. The author likely used a free PCB design tool like KiCad or EasyEDA, and ordered the board from a low-cost manufacturer such as JLCPCB, which offers prototype PCBs starting at $2.

hackernews · tadasv · Jul 12, 22:56 · [Discussion](https://news.ycombinator.com/item?id=48885728)

**Background**: A printed circuit board (PCB) mechanically supports and electrically connects electronic components using conductive traces. Designing a PCB involves creating a schematic, laying out components, and generating Gerber files for manufacturing. Services like JLCPCB have dramatically lowered the cost and turnaround time for small-batch PCB fabrication.

**References**:
- [PCB Board Design: A Step-by-Step Guide for Beginners](https://jlcpcb.com/blog/pcb-board-design-beginners-guide)
- [PCB Design for Beginners: A Step by Step Guide to Creating Your First PCB](https://www.allpcb.com/allelectrohub/pcb-design-for-beginners-a-step-by-step-guide-to-creating-your-first-pcb)
- [PCB Design Steps & Complete Guide | Cirexx](https://www.cirexx.com/pcb-design-steps/)

**Discussion**: Commenters praised JLCPCB for its reliability and low cost, noting that custom PCB manufacturing is now incredibly affordable. One user recommended group buys to reduce the minimum order cost for one-off boards.

**Tags**: `#PCB design`, `#DIY electronics`, `#hardware`, `#manufacturing`

---

## [Developer Argues for Vanilla JavaScript Over Frameworks](https://guseyn.com/html/posts/why-vanilla-js.html) ⭐️ 6.0/10

A developer published a blog post arguing that the browser itself is a sufficient framework, and that frontend frameworks like React or Angular introduce artificial complexity. This opinion piece reignites the long-standing debate between using vanilla JavaScript versus frameworks, which affects how developers choose tools for web projects. The post argues that the browser's built-in APIs are powerful enough to build complex applications without external dependencies, and that frameworks often obscure the underlying platform.

hackernews · guseyn · Jul 12, 22:53 · [Discussion](https://news.ycombinator.com/item?id=48885705)

**Background**: Vanilla JavaScript refers to plain JavaScript without any additional libraries or frameworks. Frontend frameworks like React, Vue, and Angular have become popular for building dynamic user interfaces, but some developers argue they add unnecessary complexity.

**Discussion**: Comments show mixed reactions: some agree with the author's sentiment, citing their own experiences building apps without frameworks, while others argue that frameworks provide valuable conveniences for large-scale projects, similar to using C over assembly.

**Tags**: `#JavaScript`, `#frontend`, `#frameworks`, `#web development`

---

## [Anthropic Extends Claude Fable 5 Access Amid Compute Constraints](https://simonwillison.net/2026/Jul/12/bump/#atom-everything) ⭐️ 6.0/10

Anthropic has extended Claude Fable 5 access on all paid plans through July 19, 2026, citing compute constraints, while OpenAI removed usage limits for GPT-5.6 Sol and announced efficiency improvements. This extension highlights the ongoing compute challenges for frontier AI models, potentially affecting user adoption and competitive dynamics between Anthropic and OpenAI. Users can use up to half of their weekly usage limit on Fable 5, after which they can continue with usage credits or switch models. OpenAI reported 6 million active users and temporarily removed the 5-hour usage limit for GPT-5.6 Sol.

rss · Simon Willison · Jul 12, 21:20

**Background**: Claude Fable 5 is Anthropic's most capable generally available model, a 'Mythos-class' model made safe for public use. GPT-5.6 Sol is OpenAI's flagship frontier model. Both represent the cutting edge of AI capabilities, but their deployment is constrained by significant computational demands.

**References**:
- [Claude Fable \ Anthropic](https://www.anthropic.com/claude/fable)
- [Previewing GPT-5.6 Sol: a next-generation model | OpenAI](https://openai.com/index/previewing-gpt-5-6-sol/)
- [Claude Fable 5: Anthropic's First Public Mythos - Class Model , and...](https://daehnhardt.com/blog/2026/07/11/claude-fable-5-first-mythos-class-model/)

**Tags**: `#AI`, `#Anthropic`, `#Claude`, `#GPT-5`, `#compute`

---

