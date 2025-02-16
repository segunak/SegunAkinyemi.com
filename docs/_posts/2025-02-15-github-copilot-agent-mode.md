---
title: "GitHub Copilot's Agent Mode Is Rather Impressive, But the Real Question Is, Are Software Developers Cooked?"
excerpt: "One thing is for sure, if we as developers don't adapt, we're more than cooked, we're royally fried."
toc: true
toc_sticky: true
toc_label: "On This Page"
toc_icon: "robot"
last_modified_at: 2025-02-17T01:26:17
header:
  teaser: /assets/images/be-water.jpeg
  og_image: /assets/images/be-water.jpeg
  overlay_image: /assets/images/be-water.jpeg
  overlay_filter: 0.6
categories:
  - blog
tags:
  - tech
---

<style>
    .gifformat {
        width: 100%;
    }

    .page__hero--overlay {
        background-position: center bottom;
    }

    /* Apply styles only on tablets and larger devices */
    @media (min-width: 768px) {
        .page__hero--overlay {
            padding: 10em 0;
        }

        .gifformat {
            width: 70%;
        }
    }
</style>

<script src="/assets/js/dynamic-link-targeting.js"></script>

## A New Era

Thomas Dohmke, the CEO of [GitHub](https://en.wikipedia.org/wiki/GitHub), recently wrote an [article](https://github.blog/news-insights/product-news/github-copilot-the-agent-awakens) about a new feature of their AI-assisted programming tool, [GitHub Copilot](https://github.com/features/copilot), called _Agent Mode_.

After reading through it, my initial reaction—out of deep philosophical concern for the future of software development—was…

<p align="center">
    <img class="gifformat" alt="Oscar The Office Concerned Hand on Mouth Look" src="/assets/images/concern-oscar-office.gif"/>
</p>

Which, with time and reflection, transitioned into feelings more aptly conveyed by…

<p align="center">
    <img class="gifformat" alt="Alonzo Mourning Head Nod After Disapproval Look" src="/assets/images/alonzo-mourning.gif"/>
</p>

In short, I'm concerned—but also optimistic. And at the very least, I'm here to help others understand what's happening in the industry responsible for every app, website, game, operating system, chatbot, and computer-based tool you've ever used.

I'm a developer at a company you've [definitely heard of](https://en.wikipedia.org/wiki/Microsoft)—which also happens to own GitHub—so my day-to-day is packed with the latest and greatest in software engineering. And let me tell you, AI-assisted programming is being **pushed hard**. However, based on my experience, developer reactions have been mixed at best. Some feel like the tech just isn't there yet. They spend more time wrestling with AI to get the right output than they would've just doing the work themselves. Others are locked in. They've figured out how to structure their prompts, how to feed the right context, how to work with AI instead of against it. And because of that, they're legitimately more productive than ever before.

I'm firmly in the latter camp. I'm not going to sit around whining about how AI will "never be good enough", or dismissing it because "it couldn't solve this one super-specific problem I had". And I'm definitely not clinging to the tired take that "real devs would never use it". Who would've thought we'd see [luddites](https://en.wikipedia.org/wiki/Luddite) among tech workers? What wonderful irony. I certainly don't have the luxury of joining them. The tides are shifting, and I shift with them. As the great [Bruce Lee](https://en.wikipedia.org/wiki/Bruce_Lee) once said: _Be water, my friend_.

With that in mind, the article that sparked this one is linked below. I highly recommend you read it. The rest of this post is my response.

> **Read More:** [GitHub Copilot: The Agent Awakens](https://github.blog/news-insights/product-news/github-copilot-the-agent-awakens/)
{: .notice--info}

## Why Is It Called Copilot?

Let's start with some background on why GitHub named their AI-assisted programming tool _Copilot_, not to be confused with their parent company Microsoft's own product of the same name.

> The name reflects our belief that artificial intelligence (AI) isn't replacing the developer. Instead, it's always on their side. And like any good first officer, Copilot can also fly by itself: for example, when providing pull request feedback, autofixing security vulnerabilities, or brainstorming on how to implement an issue.
>
> [Thomas Dohmke - GitHub CEO](https://github.blog/news-insights/product-news/github-copilot-the-agent-awakens/#:~:text=The%20name%20reflects,implement%20an%20issue.)

So there you have it. It's called _Copilot_ because GitHub—the world's leading software development platform—believes the future of programming isn't about replacing developers with AI but enhancing them.

Now, are there reasons to be skeptical? Absolutely—especially when you consider what _Agent Mode_ is capable of (more on that later). But I've chosen to take an optimistic view of what life as a software developer looks like with AI-powered tools. I've written about a related concept called Natural Language Programming, which is making the field more accessible than ever. If that interests you, check out the article below.

> **Read More:** [Natural Language Programming Is Lowering Software Development's Barrier to Entry](https://segunakinyemi.com/blog/natural-language-programming/)
{: .notice--info}

But for now, let's dive deeper into what GitHub Copilot's _Agent Mode_ is all about.

## Why Is It Called Agent Mode?

If you're wondering why GitHub calls this enhanced version of Copilot _Agent Mode_, the answer lies below.

> ⁠⁠GitHub Copilot's new agent mode is capable of iterating on its own code, recognizing errors, and fixing them automatically. It can suggest terminal commands and ask you to execute them. It also analyzes run-time errors with self-healing capabilities.⁠ In agent mode, Copilot will iterate on not just its own output, but the result of that output. And it will iterate until it has completed all the subtasks required to complete your prompt. Instead of performing just the task you requested, Copilot now has the ability to infer additional tasks that were not specified, but are also necessary for the primary request to work. Even better, it can catch its own errors, freeing you up from having to copy/paste from the terminal back into chat.
>
> [Thomas Dohmke - GitHub CEO](https://github.blog/news-insights/product-news/github-copilot-the-agent-awakens/#:~:text=GitHub%20Copilot%E2%80%99s%20new,back%20into%20chat.)

So yeah, this goes way beyond a simple prompt-response chatbot. It directly addresses one of the biggest complaints I hear from fellow devs about AI tools today. Namely, that they can generate code, but don't help much with the actual workflow of software development. The tedious, time-consuming tasks—deployment, debugging, configuration, local environment setup, unit testing, system design, refactoring, networking, and all the other overhead that separates real-world development from LeetCode-style exercises. _Agent Mode_ is trying to step in and alleviate the burden of that work, freeing developers to focus on the bigger picture.

And GitHub's ambitions go even further. Instead of just typing instructions, they want developers speaking them as well.

> Using your voice is a natural experience while using Copilot Edits. Just talking to Copilot makes the back and forth smooth and conversational. It almost feels like interacting with a colleague with area expertise, using the same kind of iterative flow that you would use in real-life pair programming.
>
> [Thomas Dohmke - GitHub CEO](https://github.blog/news-insights/product-news/github-copilot-the-agent-awakens/#:~:text=Using%20your%20voice,life%20pair%20programming.)

"_Almost feels like interacting with a colleague_"—yeah, okay, but what happened to my actual colleague? Are they still needed? That's where the real job concerns come in. If one developer with _Agent Mode_ is as productive as what used to be a three or four person team, well… we all know how corporations think. The question isn't just whether it feels like working with a colleague—it's whether it's one step closer to _replacing one_.

If your reaction to all this as a developer is...

<p align="center">
    <img class="gifformat" alt="I'm In Danger Simpsons" src="/assets/images/im-in-danger.gif"/>
</p>

I feel you. The idea of an AI suggesting terminal commands—commands that could theoretically delete files, modify system configurations, or otherwise wreck your day—is enough to make even the most seasoned dev hesitate. The margin for error here isn't just "Oops, the code doesn't compile". It's "Oops, I just [rm -rf'd](https://askubuntu.com/questions/670648/what-does-rm-rf-do) my project into the shadow realm". And now, with voice mode, you don't even have to type out your own destruction—you can just say it. On one hand, hands-free coding is the stuff of sci-fi dreams. On the other, it's one bad transcription away from "I said _deploy_, not _destroy_!".

Now in fairness, GitHub isn't handing full control over to AI. _Yet_. _Agent Mode_ still asks for confirmation before running commands, and ideally, it's surfacing useful suggestions, not catastrophic ones. But let's be real—AI stepping beyond simple code suggestions and into system-level operations is a shift worth watching. Anyone remotely familiar with sci-fi knows how quickly this could go sideways.

Regardless, this is a turning point for AI-assisted development. How far it goes depends not just on the tech, but on how comfortable developers are with having AI function less like a tool and more like a _colleague_—or perhaps, a **replacement** for one.

## So How Good Is It?

If you have a few minutes, watch this video.

<p>
    <iframe width="100%" height="70" src="https://www.youtube.com/embed/of--3Fq1M3w?si=V1QofPqRt68BQ0Do" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</p>

If you don't, let me sum it up: **_Agent Mode_ is insane**.

Watching that demo was like seeing hours—sometimes days—of work done in minutes. Debugging, creating and updating tests, troubleshooting build issues, handling local environment quirks, validating changes—all automated. The developer's role shifts to defining the vision, setting the destination, and then verifying that the AI's work aligns with it—making adjustments as needed. The real test of its quality will come when it rolls out for general availability. For now, you can try it by downloading [VS Code Insiders](https://code.visualstudio.com/insiders/)—as I have—but stability isn't where it will be once it's fully live.

Still, the fact that it's already this capable in preview mode says a lot. If you show that video to a developer and they hit you with  "_lol, it still sucks, it'll never be good enough_"—please don't take career advice from that person. They can't see the forest for the trees. GitHub is improving it every day, and it's only going to get better from here. Seriously better, if you believe GitHub's vision for what they're dubbing _Project [Padawan](https://www.google.com/search?q=What+is+a+padawan)_.

> Project Padawan ships later this year, it will allow you to directly assign issues to GitHub Copilot, using any of the GitHub clients, and have it produce fully tested pull requests. Once a task is finished, Copilot will assign human reviewers to the PR, and work to resolve feedback they add. In a sense, it will be like onboarding Copilot as a contributor to every repository on GitHub.
>
> [Thomas Dohmke - GitHub CEO](https://github.blog/news-insights/product-news/github-copilot-the-agent-awakens/#:~:text=We%E2%80%99re%20excited%20to,repository%20on%20GitHub.)

So, like… this thing is just straight-up a developer on your team now? That's what it sounds like. You assign it tasks, it does _all the things_, and you just loop back for a PR review? Ayo fam, this is wild. Seriously. Let me emphasize this again—any developer who reads that [article](https://github.blog/news-insights/product-news/github-copilot-the-agent-awakens), watches the [demo](https://www.youtube.com/watch?v=of--3Fq1M3w), and says, "_Eh, not a big deal_," is in denial. This is one of the rare times where the often overused word _revolutionary_ actually fits.

## So Are We Cooked?

If you're a software developer, or in a related code-heavy position, a reaction like so to GitHub Copilot _Agent Mode_ would be understandable.

<p align="center">
    <img class="gifformat" alt="We Are Screwed Michael Scott" src="/assets/images/screwed-the-office.gif"/>
</p>

Now, instead of panicking, let's evaluate an analogy inspired by the name Copilot. Think about the history of flying. Pilots used to do a lot manually. Then computers came along, and things got easier. We've now reached a point where modern pilots spend most of a flight on autopilot, with the computer doing the bulk of the flying. The human pilot and copilot are largely relegated to oversight, takeoff, landing, and stepping in when things go wrong. But here's the key: pilots still have to be experts. They know their aircraft inside and out—every instrument, every reading, every turbulence pattern, and exactly how to react in an emergency. The computer handles the grunt work—the routine, predictable stuff—but when creativity born of expertise is needed, we still trust human pilots to take the controls. Like Denzel Washington in [_Flight_](https://en.wikipedia.org/wiki/Flight_(2012_film)) (great film, by the way).

No analogy is perfect, but the point stands: software development isn't disappearing. Developers will still be around, but those who fail to adapt might be left behind. Early programmers wrestled with hardware intricacies, while today's high-level languages have made development more accessible and efficient. AI-assisted programming is simply the next step.

Now, as someone who genuinely loves coding, I get why this might feel like an affront to the craft. Many of us got into this field for the "love of the game". Coding for the sake of it, for the sheer joy of crafting something. I respect that sentiment, I feel it myself, but at the end of the day, that's what it is—sentiment. The business world isn't built on nostalgia. It runs on logic. Efficiency. Productivity. Speed. Growth. Relentless ambition. [Ruthless capitalism](https://en.wikipedia.org/wiki/Embrace,_extend,_and_extinguish). No company will pass up a tool that makes developers faster and more effective.

So, yes—developers will have to adapt. Some jobs will almost certainly be lost, especially among those who refuse AI-assisted development. When one developer using AI can do the work of several, fewer will be needed. That sucks, but the best way to stay ahead is to master these tools—be the expert guiding AI rather than competing with it. In an [_ostensibly_](https://www.google.com/search?q=ostensibly+definition) oversaturated field, this shift could actually bring back scarcity and make AI-savvy developers more valuable. Maybe I'm just being optimistic, but learning how to use this stuff is the smartest way to thrive in our new reality.

We're not completely cooked, but plenty of us will be if we refuse to evolve.

## A New Hope

If you're a software developer, early in your career, a student, or just trying to figure out where you fit into all of this, here's my final point.

You can complain, meme, fearmonger, and be cynical all you want. Or, as [Sandor Clegane](https://gameofthrones.fandom.com/wiki/Sandor_Clegane) would put it, you can [whinge](https://www.google.com/search?q=whinge+definition). That's your right. But if you love building things with software, or if you want a future in a lucrative industry with massive potential, then you need to understand how GitHub—and by extension, Microsoft—is using AI to develop software. Not just chatbots, not just consumer gimmicks, but real software development powered by AI. The [shrewd](https://www.biblegateway.com/passage/?search=Matthew%2010%3A16&version=NIV) move is to align yourself with the [skills](https://learn.microsoft.com/en-us/ai/?tabs=developer) that will let you use these tools to build the future.

Or, put more simply: [Adapt or die](https://www.google.com/search?q=what+does+adapt+or+die+mean).
