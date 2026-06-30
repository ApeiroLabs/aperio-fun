# Daily Brief - 2026-06-30

> From 22 items, 9 important content pieces were selected

---

1. [LongCat-2.0: 1.6T MoE Model Trained on Non-Nvidia ASICs](https://longcat.chat/blog/longcat-2.0/) ⭐️ 8.0/10
2. [Rocket Lab Acquires Iridium in Historic Deal](https://investors.rocketlabcorp.com/news-releases/news-release-details/rocket-lab-acquire-iridium-historic-deal-creating-fully) ⭐️ 8.0/10
3. [Ornith-1.0: Open-Weight LLMs for Agentic Coding](https://simonwillison.net/2026/Jun/29/ornith/#atom-everything) ⭐️ 8.0/10
4. [Proposed .self TLD Aims to Empower Self-Hosting](https://hccf.onmy.cloud/2026/06/21/reclaiming-our-digital-selves-hccfs-vision-for-a-human-centered-top-level-domain/) ⭐️ 7.0/10
5. [Qwen 3.6 27B: Best Local LLM for Devs](https://quesma.com/blog/qwen-36-is-awesome/) ⭐️ 7.0/10
6. [Fil-C Achieves Memory-Safe setjmp/longjmp Context Switching](https://fil-c.org/context_switches) ⭐️ 7.0/10
7. [Exploring PDP-1 Lisp from 1960](https://obsolescence.dev/pdp1-lisp-introduction.html) ⭐️ 7.0/10
8. [Molecular Evidence for Two Structures in Liquid Water](https://phys.org/news/2026-06-scientists-molecular-evidence-liquid.html) ⭐️ 7.0/10
9. [A native graphical shell for SSH](https://probablymarcus.com/blocks/2026/06/28/native-graphical-shell-for-SSH.html) ⭐️ 6.0/10

---

## [LongCat-2.0: 1.6T MoE Model Trained on Non-Nvidia ASICs](https://longcat.chat/blog/longcat-2.0/) ⭐️ 8.0/10

LongCat-2.0 is a large-scale Mixture-of-Experts (MoE) language model with 1.6 trillion total parameters and 48 billion active parameters per token, trained on tens of thousands of AI ASIC superpods, likely Huawei Ascend 910C chips. This demonstrates that large-scale AI training is feasible outside the Nvidia GPU ecosystem, highlighting the growing importance of alternative AI accelerators like Huawei Ascend and the infrastructure challenges involved. The model uses an MoE architecture with a gating network and multiple expert sub-models, achieving high efficiency by activating only a fraction of parameters per token. The training infrastructure required significant engineering effort to build a stable, scalable platform on less mature software ecosystems.

hackernews · benjiro29 · Jun 30, 00:30 · [Discussion](https://news.ycombinator.com/item?id=48727116)

**Background**: Mixture-of-Experts (MoE) is a neural network architecture that divides the model into multiple 'expert' sub-networks, with a gating mechanism that activates only a subset of experts for each input. This allows models to have a very large total parameter count while keeping inference computationally efficient. AI ASIC superpods are large clusters of application-specific integrated circuits designed for AI workloads, such as Huawei's Ascend series, which serve as alternatives to Nvidia GPUs.

**References**:
- [Mixture of experts - Wikipedia](https://en.wikipedia.org/wiki/Mixture_of_experts)
- [The model was trained on 50,000 domestic Chinese ASICs](https://digg.com/tech/va380veu)
- [Huawei outlines roadmap for Ascend AI chips - RCR Wireless](https://www.rcrwireless.com/20250922/ai-infrastructure/huawei-ai-chips)

**Discussion**: Community comments noted that the training likely used Huawei Ascend 910C chips, and questioned whether LongCat-2.0 is a fine-tune or post-trained version of DeepSeek V4-Pro due to architectural similarities. The discussion highlighted the infrastructure effort as the real news.

**Tags**: `#MoE`, `#large language model`, `#AI infrastructure`, `#Huawei Ascend`, `#deep learning`

---

## [Rocket Lab Acquires Iridium in Historic Deal](https://investors.rocketlabcorp.com/news-releases/news-release-details/rocket-lab-acquire-iridium-historic-deal-creating-fully) ⭐️ 8.0/10

Rocket Lab has announced the acquisition of Iridium Communications, combining its launch and satellite manufacturing capabilities with Iridium's operational satellite constellation and spectrum assets. This deal creates a fully integrated space communications and launch company, potentially enabling Rocket Lab to offer end-to-end services similar to SpaceX's Starlink model, and provides a stable launch demand for its upcoming Neutron rocket. Iridium operates 66 active low Earth orbit satellites providing global voice and data coverage, and its spectrum licenses are valuable for future satellite services. Rocket Lab gains a profitable satellite operator and a guaranteed customer for its launch vehicles.

hackernews · everfrustrated · Jun 29, 14:09 · [Discussion](https://news.ycombinator.com/item?id=48719485)

**Background**: Rocket Lab is an end-to-end space company known for its Electron small launch vehicle and is developing the larger Neutron rocket. Iridium is a satellite communications company with a long-established LEO constellation. The acquisition follows Rocket Lab's strategy of vertical integration, similar to SpaceX's approach with Starlink.

**References**:
- [Rocket Lab](https://en.wikipedia.org/wiki/Rocket_Lab)
- [Iridium satellite constellation](https://en.wikipedia.org/wiki/Iridium_satellite_constellation)
- [Iridium Communications - Wikipedia](https://en.wikipedia.org/wiki/Iridium_Communications)

**Discussion**: Community comments highlight concerns about space debris and commercialization of the night sky, but also see strategic parallels to SpaceX's Starlink model, noting that the deal provides Rocket Lab with a stable launch demand and a profitable satellite business.

**Tags**: `#space`, `#acquisition`, `#satellite`, `#Rocket Lab`, `#Iridium`

---

## [Ornith-1.0: Open-Weight LLMs for Agentic Coding](https://simonwillison.net/2026/Jun/29/ornith/#atom-everything) ⭐️ 8.0/10

DeepReinforce released Ornith-1.0, a family of open-weight (MIT licensed) LLMs for agentic coding, with variants from 9B to 397B parameters, built on Gemma 4 and Qwen 3.5. Ornith-1.0 achieves state-of-the-art performance on coding benchmarks among open-source models of comparable size, advancing open-source AI for autonomous coding agents. The model family includes dense (9B, 31B) and MoE (35B, 397B) variants, all MIT licensed, and is compatible with LM Studio and Pi for local agentic workflows.

rss · Simon Willison · Jun 29, 16:17

**Background**: Agentic coding refers to using AI agents that autonomously write, debug, and refactor code by interacting with tools and environments. Mixture of Experts (MoE) is an architecture that activates only a subset of parameters per token, enabling larger models without proportional compute cost. Ornith-1.0 uses a self-scaffolding training framework to improve agentic capabilities.

**References**:
- [Ornith-1.0: Self - Scaffolding LLMs ... | DeepReinforce Blog | Jun. 2026](https://deep-reinforce.com/ornith_1_0.html)
- [Ornith-1.0: Self - Scaffolding LLMs for Agentic Coding](https://simonwillison.net/2026/Jun/29/ornith/)
- [Agentic coding](https://en.wikipedia.org/wiki/Agentic_coding)

**Discussion**: Community reactions are mixed: some praise its coding performance and creativity, while others note it hallucinates in chat and is essentially a fine-tuned Qwen or Gemma 4. The dense 9B variant requires an 80GB GPU, limiting accessibility.

**Tags**: `#LLM`, `#open-source`, `#coding`, `#AI agents`, `#model release`

---

## [Proposed .self TLD Aims to Empower Self-Hosting](https://hccf.onmy.cloud/2026/06/21/reclaiming-our-digital-selves-hccfs-vision-for-a-human-centered-top-level-domain/) ⭐️ 7.0/10

A proposal for a new top-level domain (TLD) named .self has been published, envisioning one free domain per person and reputation-based takedowns to support self-hosting. If implemented, .self could democratize self-hosting by reducing costs and combating abuse through community-driven reputation, potentially reshaping how individuals control their online presence. The proposal includes a mechanism for anyone to challenge an inactive domain in the first year or two, and domains could be revoked post-facto without recourse in cases of squatting.

hackernews · HumanCCF · Jun 29, 19:49 · [Discussion](https://news.ycombinator.com/item?id=48724230)

**Background**: Top-level domains (TLDs) like .com and .org are managed by ICANN. Self-hosting refers to individuals running their own servers for websites or services, which can be costly and technically challenging. Reputation-based takedowns use community feedback to remove abusive domains, contrasting with traditional adversarial takedowns that may cause false positives.

**References**:
- [Proposed top-level domain - Wikipedia](https://en.wikipedia.org/wiki/Proposed_top-level_domain)
- [Top-level domain - Wikipedia](https://en.wikipedia.org/wiki/Top-level_domain)

**Discussion**: Commenters raised concerns about squatting and security: one noted the historical failure of free .tk TLD due to scammers, while another worried that advertising self-hosting could invite security probing. Others suggested looking at Microsoft's Vega for identity solutions and questioned how to fund the TLD without registration fees.

**Tags**: `#DNS`, `#self-hosting`, `#top-level domain`, `#decentralization`, `#reputation`

---

## [Qwen 3.6 27B: Best Local LLM for Devs](https://quesma.com/blog/qwen-36-is-awesome/) ⭐️ 7.0/10

Qwen 3.6 27B, a dense 27-billion-parameter multimodal model, has been released as an open-weight model optimized for local development, offering flagship-level coding performance at a smaller scale. This model provides a practical balance between capability and hardware requirements, making local LLM development more accessible, but running it on a MacBook Pro is impractical due to heat and noise, pushing users toward more suitable hardware like the Mac Mini. The model requires significant RAM (128GB recommended) and runs best on desktop hardware; a Mac Mini M4 is suggested over a MacBook Pro for sustained use, and community reports show dual AMD Radeon AI Pro 9700 GPUs can achieve 50 tokens per second at FP8.

hackernews · stared · Jun 29, 17:05 · [Discussion](https://news.ycombinator.com/item?id=48721903)

**Background**: Large language models (LLMs) like Qwen 3.6 27B require substantial hardware resources, especially VRAM and RAM, to run locally. Quantization techniques reduce model size but may impact quality. Running LLMs on laptops often leads to thermal throttling and fan noise, making desktop or dedicated hardware preferable for serious work.

**References**:
- [Qwen/Qwen3.6-27B · Hugging Face](https://huggingface.co/Qwen/Qwen3.6-27B)
- [Qwen 3.6 27B is the sweet spot for local development](https://quesma.com/blog/qwen-36-is-awesome/)
- [Running Open Source LLMs Locally: Hardware Guide | Apatero](https://apatero.com/blog/running-open-source-llms-locally-hardware-guide-2026)

**Discussion**: Community comments highlight that running Qwen 3.6 on a MacBook Pro causes excessive heat and noise, with users recommending a Mac Mini or dedicated GPUs instead. Some question the practicality of local models for real-world codebases, while others share successful setups with AMD GPUs achieving high token rates.

**Tags**: `#LLM`, `#local development`, `#hardware`, `#Qwen`, `#AI`

---

## [Fil-C Achieves Memory-Safe setjmp/longjmp Context Switching](https://fil-c.org/context_switches) ⭐️ 7.0/10

Fil-C has implemented memory-safe context switching for setjmp/longjmp and ucontext APIs by managing stack memory, addressing complex interactions with register allocation and stack spilling. This advance makes Fil-C the first memory-safe C/C++ implementation to handle these notoriously tricky APIs, enabling safer use of coroutines and user-space context switching in legacy and new code. The implementation manages stack memory explicitly to prevent corruption during jumps, and the article details how setjmp/longjmp interact with register allocation and stack spilling in ways that can break memory safety.

hackernews · modeless · Jun 30, 00:38 · [Discussion](https://news.ycombinator.com/item?id=48727177)

**Background**: setjmp and longjmp are C library functions that allow non-local jumps, often used for error handling or user-space context switching. They are notoriously difficult to make memory-safe because they can corrupt stack frames and registers. Fil-C is a fanatically compatible memory-safe implementation of C and C++ that catches all memory safety errors as panics.

**References**:
- [Memory Safe Context Switching](https://fil-c.org/context_switches)
- [Fil - C](https://fil-c.org/)
- [fil - c /Manifesto.md at deluge · pizlonator/ fil - c · GitHub](https://github.com/pizlonator/fil-c/blob/deluge/Manifesto.md)

**Discussion**: Commenters expressed surprise that setjmp/longjmp could be made memory-safe, with one noting that code using these functions often has broader risk profiles beyond memory safety. Another commenter argued that these functions have no bearing on safety, while a third asked if Fil-C is now using Claude for development.

**Tags**: `#memory safety`, `#context switching`, `#Fil-C`, `#setjmp/longjmp`, `#systems programming`

---

## [Exploring PDP-1 Lisp from 1960](https://obsolescence.dev/pdp1-lisp-introduction.html) ⭐️ 7.0/10

A detailed article explores the first Lisp implementation on the PDP-1, written by high school student Peter Deutsch in 1960, and provides a working simulator on GitHub. This work is historically significant as it introduced the read-eval-print loop (REPL), a concept now fundamental to many programming languages like Python, and demonstrates early interactive programming on a minicomputer. The PDP-1 had only 4K 18-bit words of memory, yet Deutsch's Lisp was remarkably usable. The simulator, part of the PiDP-1 project, runs on any Linux machine.

hackernews · ozymandiax · Jun 30, 00:56 · [Discussion](https://news.ycombinator.com/item?id=48727323)

**Background**: The PDP-1 was Digital Equipment Corporation's first computer, an 18-bit machine released in 1959. Lisp, created by John McCarthy in 1958, is one of the oldest high-level programming languages. Deutsch's implementation was the first interactive Lisp environment, pioneering the REPL.

**References**:
- [PDP-1 - Wikipedia](https://en.wikipedia.org/wiki/PDP-1)
- [Lisp programming on the PDP-1 - obsolescence.dev](https://obsolescence.dev/pdp1-lisp-introduction.html)

**Discussion**: One commenter highlighted the historical significance and pointed to the PiDP-1 simulator for trying it out. Another commenter asked for book recommendations on Lisp history, indicating interest in deeper learning.

**Tags**: `#Lisp`, `#history`, `#PDP-1`, `#retrocomputing`, `#simulator`

---

## [Molecular Evidence for Two Structures in Liquid Water](https://phys.org/news/2026-06-scientists-molecular-evidence-liquid.html) ⭐️ 7.0/10

Researchers used unsupervised deep learning on molecular dynamics simulations to identify two distinct local structures in liquid water: a denser, more disordered state and a less dense, more ordered state, supporting the two-state model. This finding provides molecular-level evidence for water's anomalous properties, such as its density maximum and high heat capacity, and could impact fields like biology, chemistry, and climate science where water's behavior is crucial. The study was published in Nature Physics and uses a 4-site water model (TIP4P) for simulations, though some commenters question whether more accurate models like OPC would yield different results.

hackernews · wglb · Jun 29, 22:18 · [Discussion](https://news.ycombinator.com/item?id=48726073)

**Background**: Water exhibits over 70 anomalous properties that distinguish it from other liquids, including a density maximum at 4°C and high surface tension. The two-state model proposes that liquid water is a mixture of two distinct local structures that dynamically interconvert, but direct experimental evidence has been elusive due to rapid crystallization in the supercooled region.

**References**:
- [Scientists find molecular-level evidence for two structures in liquid water](https://phys.org/news/2026-06-scientists-molecular-evidence-liquid.html)
- [Scientists observe water switching between 2 different molecular structures, boosting decades-old theory](https://www.livescience.com/physics-mathematics/water-might-secretly-be-a-mix-of-2-different-liquids-scientists-say)

**Discussion**: Commenters expressed interest in the implications for hydration shells around proteins and potential future technologies. One commenter questioned the choice of the TIP4P water model and noted prior experimental work that was not referenced, while another provided the Nature Physics link.

**Tags**: `#physics`, `#water structure`, `#molecular dynamics`, `#scientific research`

---

## [A native graphical shell for SSH](https://probablymarcus.com/blocks/2026/06/28/native-graphical-shell-for-SSH.html) ⭐️ 6.0/10

Marcus Lewis proposes a native graphical shell for SSH that separates frontend and backend, aiming to reduce latency and overhead compared to traditional X11 forwarding. This approach could improve remote graphical application performance, making SSH-based remote work smoother for developers and system administrators. The proposal uses a web-based frontend that communicates with a backend over SSH, similar to how Jupyter or Tensorboard work but as a native shell. It aims to avoid the latency and overhead of X11 forwarding by using a more efficient protocol.

hackernews · mrcslws · Jun 29, 15:42 · [Discussion](https://news.ycombinator.com/item?id=48720758)

**Background**: X11 forwarding is a common method to run graphical applications remotely over SSH, but it suffers from high latency and bandwidth overhead, especially over high-latency networks. The web browser model, where a server provides an experience to a client, has proven efficient for remote access. This proposal attempts to bring that model to a native graphical shell for SSH.

**References**:
- [A native graphical shell for SSH | Marcus Lewis](https://probablymarcus.com/blocks/2026/06/28/native-graphical-shell-for-SSH.html)
- [A native graphical shell for SSH | Hacker News](https://news.ycombinator.com/item?id=48720758)
- [Enable X11 Forwarding on Linux - LinuxConfig.org Enabling X11 Forwarding in Linux: A Comprehensive Guide xorg - How to forward X over SSH to run graphics applications ... What You Need to Know About X11 Forwarding - goteleport.com linux - X forwarding on Windows 11 SSH without installing a ... X11 Forwarding: What Is It, Why Use It, How to Set It Up Forward X Over SSH to Run Programs Remotely - Baeldung](https://linuxconfig.org/how-to-enable-x11-forwarding-on-linux)

**Discussion**: Community comments are mixed: some praise the idea as a step in the right direction, while others criticize it as reinventing existing solutions like X11 forwarding or Cockpit. One commenter quotes Henry Spencer: 'Those who do not understand Unix are condemned to reinvent it, poorly.'

**Tags**: `#SSH`, `#graphical shell`, `#remote desktop`, `#Unix`, `#frontend-backend separation`

---
