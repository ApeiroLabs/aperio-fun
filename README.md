# aperio.fun

A static personal blog built with Astro.

The site's three long-term content types and their source-thread references are documented in [`CONTENT.md`](./CONTENT.md).

## Local development

```bash
npm install
npm run dev
```

## Writing

Add a Markdown file to `src/content/blog`. Every article starts with:

```yaml
---
title: "文章标题"
description: "一句简短摘要"
publishedAt: 2026-06-28
tags: ["主题"]
draft: false
---
```

Set `draft: true` to keep an article out of production builds.

## Build

```bash
npm run build
npm run preview
```

The generated static site is written to `dist/`.

## Deploy to GitHub Pages

The workflow in `.github/workflows/deploy.yml` builds and publishes the site
whenever the `main` branch is updated.

1. Create a GitHub repository and push this project to its `main` branch.
2. Open the repository's **Settings → Pages** and select **GitHub Actions** as
   the deployment source.
3. Wait for the **Deploy to GitHub Pages** workflow to finish.
4. In **Settings → Pages → Custom domain**, enter `aperio.fun`.
5. In GoDaddy DNS, add the GitHub Pages records documented below.
6. After DNS is active, enable **Enforce HTTPS** in GitHub Pages settings.

### GoDaddy DNS

Add four `A` records for the root domain (`@`):

```text
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

Add a `CNAME` record for `www` pointing to `<github-username>.github.io`.
Replace `<github-username>` with the owner of the GitHub repository.
