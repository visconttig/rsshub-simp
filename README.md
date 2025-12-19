# 🔥 RSSHub-SIMP

Turn Traditional Chinese RSS feeds into Simplified Chinese — automatically.

Server-side RSS transformation. Dockerized. Cloud-deployed. No hacks.

## 🚀 What this does (fast version)

📰 Fetches BBC Chinese RSS

🔁 Converts Traditional → Simplified Chinese

🧠 Preserves HTML (no broken markup)

☁️ Runs in the cloud

🐳 Ships as a Docker container

📡 Works with Inoreader / Feedly

Example:

`/bbc-simp/chinese`

## 🤔 Why this exists

RSS readers do not translate content.
Browser extensions don’t work on RSS.
Google Translate breaks HTML.

So instead of hacking the client…

Fix the feed at the source.

## 🛠️ Why this is interesting (for engineers)

Server-side content transformation

Deterministic Chinese script conversion (OpenCC)

Custom route on top of a large OSS project

Multi-stage Docker builds

Cloud VM deployment

Real users, real constraints

## 🧠 How it works (optional deep dive)
<details> <summary>Click if you’re curious (or hiring)</summary>

### Architecture

Extend RSSHub with a custom route

Fetch article content

Convert text nodes only (preserve HTML)

Emit valid RSS

### Tech stack

Node.js / TypeScript

RSSHub internals

OpenCC

Cheerio

Docker

Cloud VM (Oracle Cloud)

### Why OpenCC

Deterministic

No API calls

No semantic drift

Production-proven

</details>

## 🧡 Credits

This project is built on RSSHub, an incredible open-source project by DIYgod.

Repo: https://github.com/DIYgod/RSSHub

Docs: https://docs.rsshub.app

License: MIT

All respect to the original authors and contributors.

## 🏁 TL;DR

One URL in → Clean Simplified Chinese RSS out.
Built with real infrastructure, not duct tape.