# 🧠🔥 RSSHub-SIMP

Because “just use Google Translate” is not an architecture.

<strong>Turn Traditional Chinese RSS feeds into Simplified Chinese.</strong><br/> <em>Reliably. Automatically. At scale. In the cloud. With Docker. And a bit of madness.</em> </p>

## 🤔 Why does this exist?

You would think this problem was solved already.
You would be wrong.

## The problem

- You want BBC Chinese RSS feeds
- You want them in Simplified Chinese
> Without having to use a toggle button _***e v e r y***_ single time...
- Your RSS reader (Inoreader, Feedly, etc.) does not transform content

> Google Translate:
>> ❌ breaks HTML
>> ❌ is not deterministic
>> ❌ is not automatable
>> ❌ is not an API you control

> Browser extensions:
>> ❌ don’t work on RSS
>> ❌ don’t scale
>> ❌ stop working the moment you need them most

### The conclusion

👉 This is not a translation problem. This is a systems problem.

So instead of duct-taping the client, we fix the source.

## 🧠 The idea (a.k.a. “Do it properly”)

Intercept the RSS at the source. Transform it server-side. Publish a clean feed.

To do that:
Take a battle-tested RSS engine (RSSHub)
Extend it with a custom route
Convert content inside the server
Serve the result as a standard RSS feed
Deploy it to the cloud
Forget about it forever

Simple.
> (Reader, it was not simple.)

## 🧩 What this project actually does

### ✅ Adds a custom RSSHub route

`/bbc-simp/:site?/:channel?`


Example:
`/bbc-simp/chinese`


### What happens:

Fetch BBC Chinese RSS
Fetch full article content
Convert all text nodes to Simplified Chinese
Preserve HTML structure
Emit a clean, valid RSS feed
No hacks. No regex crimes

## 🛠️ How it works (step by step, no hand-waving)

### 1️⃣ Start from a serious base

Use RSSHub, the largest RSS network on Earth.

Why?

5,000+ routes
Production-grade scraping
Proven community
MIT licensed
Already solves 90% of the problem

Reinventing RSS parsers is how bugs are born.

### 2️⃣ Implement a custom route (the right way)

Create lib/routes/bbc-simp
Follow RSSHub’s route conventions
Use dependency injection & cache utilities
Respect existing architecture

This isn’t a fork-and-pray job.
This is an extension.

### 3️⃣ Convert Chinese text safely

Key design decision:
👉 Do NOT translate. Convert script.

Why?

Traditional ↔ Simplified is _deterministic_

No semantic drift
No hallucinations
No broken names
No API dependency

### The solution

Install OpenCC (industry-standard Chinese script converter)
Apply it only to text nodes
Preserve HTML structure using Cheerio
Avoid runtime crashes during build

Result:
📜 Clean HTML
🈶 Correct Simplified Chinese
🧘 Zero surprises

### 4️⃣ Make Docker do the heavy lifting

This project is Docker-first, not Docker-afterthought.

## What’s inside:

- Multi-stage Docker builds
- Deterministic builds
- Minimal runtime image
- Explicit OS-level dependencies
- No leaking node_modules
- No “works on my machine” energy

You can:
```
docker build -t rsshub-simp .
docker run -p 1200:1200 rsshub-simp

```


And it just works.

### 5️⃣ Deploy it like an adult

Provision a cloud VM (Oracle Cloud)
Configure networking
Expose ports explicitly
Run containers headless
Test from inside and outside the instance
Verify RSS readers can reach it

This is not “localhost demo ware”.
This is production infrastructure.

## ☁️ Skills demonstrated (a non-exhaustive flex)
### 🧠 Architecture

Server-side content transformation
Deterministic text processing
Clean extension of an existing system

No client hacks

### 🐳 Docker

Multi-stage builds
Slim production images
Runtime vs build-time dependencies
Container debugging
Volume & filesystem reasoning

### 🌐 Networking

Port mapping
Container vs host networking
Local vs cloud routing
RSS client connectivity constraints

### ☁️ Cloud

VM provisioning
Remote Docker builds
Stateless services
Debugging in constrained environments

### 🧪 Debugging

Build-time vs runtime failures
Node + native binary integration
Cross-platform issues (Windows ↔ Linux)
Deterministic reproduction of bugs

### 🧑‍💻 Full-Stack mindset

Backend logic
Data transformation
Infrastructure
Deployment
Observability

## 🏁 Final result

✅ RSSHub instance running in the cloud
✅ Custom /bbc-simp route available publicly
✅ Simplified Chinese output
✅ Works in Inoreader / Feedly, etc
✅ Zero manual steps after deployment

✅ One URL → infinite articles

This is the kind of project that looks small
until you realize how many things can go wrong.

And how many didn’t.

## 🧡 Credits & respect where it’s due

### ***This project is not possible without RSSHub***.

### Original project

RSSHub
Author: DIYgod
License: MIT
Repo: https://github.com/DIYgod/RSSHub
Docs: https://docs.rsshub.app

RSSHub is a phenomenal piece of engineering and community effort.
This project is an extension, not a replacement.

If you like this, you should absolutely:

⭐ Star RSSHub
🧡 Support its maintainers
🧠 Learn from its architecture

## 🚀 TL;DR (for recruiters skimming at 2am)

Custom server-side RSS transformation
Dockerized, cloud-deployed, production-ready
Clean extension of a large open-source project
Solves a real problem users actually have
No shortcuts, no hacks, no excuses

If you need someone who can take a vague problem
and ship a clean, working system…
hi 👋
