---
title: "GitHub Copilot's Agent Mode Is Rather Impressive, But the Real Question Is, Are Software Developers Cooked?"
excerpt: "One thing is for sure, if we as developers don't adapt, we're more than cooked, we're royally fried."
toc: true
toc_sticky: true
toc_label: "On This Page"
toc_icon: "robot"
last_modified_at: 2025-02-16T03:37:27
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

If you're wondering, like I was, why GitHub calls this enhanced version of Copilot _Agent Mode_, the answer lies in the [article's](https://github.blog/news-insights/product-news/github-copilot-the-agent-awakens/) core theme. GitHub isn't just positioning it as an assistant anymore—it's an active participant. It makes decisions, detects errors, fixes them, and iterates on its own output, reducing the need for constant human intervention.

In other words, it's an agent in the truest sense—an entity that performs tasks on your behalf, not just waiting for commands but proactively working towards a goal. Instead of just suggesting code, it can infer necessary steps _from the context of your codebase_, tweak things based on execution results, update unit tests, write new ones, recommend terminal commands, and—perhaps most notably—allow you to **speak** your instructions instead of typing them. With **voice mode**, you can verbally describe what you want, and Copilot will generate, refine, and adjust code accordingly, making AI-assisted development feel even more like a real-time collaboration.

Now, if your reaction to that as a software developer is...

<p align="center">
    <img class="gifformat" alt="I'm In Danger Simpsons" src="/assets/images/im-in-danger.gif"/>
</p>

I feel you. The idea of an AI suggesting terminal commands—commands that could theoretically delete files, modify system configurations, or otherwise wreck your day—is enough to make even the most seasoned dev hesitate. The margin for error here isn't just "Oops, the code doesn't compile". It's "Oops, I just [rm -rf'd](https://askubuntu.com/questions/670648/what-does-rm-rf-do) my project into the shadow realm".

And now, with voice mode, you don't even have to type out your own destruction—you can just say it out loud. Imagine casually muttering, "Yeah, just clean up those old files", only for Copilot to confidently interpret that as "Cool, let's recursively nuke everything before today" since "old" is a relative term. I'm exaggerating of course, but the concern behind it is real. On one hand, hands-free coding is the stuff of sci-fi dreams. On the other, it's one bad transcription away from "I said _deploy_, not _destroy_!".

Now in fairness, GitHub isn't handing over the keys to AI just yet. _Yet_. Who knows what the future holds, but _Agent Mode_ isn't running commands autonomously—it still asks for confirmation before executing anything. And ideally, it's surfacing useful suggestions, not catastrophic ones. Still, the fact that AI is moving beyond mere code suggestions and into system-level operations is worth keeping an eye on. Anyone well-versed in sci-fi can think of a handful of ways this could go horribly wrong for humanity.

That said, we've certainly entered a new phase of AI-assisted development. How far this goes depends on both the technology and how comfortable developers are handing over more control. For now, _Agent Mode_ is an intriguing step toward a future where AI isn't just helping us code—it's actively shaping how we work.

## So How Good Is It?

If you have a few minutes, watch this video.

<p>
    <iframe width="100%" height="70" src="https://www.youtube.com/embed/of--3Fq1M3w?si=V1QofPqRt68BQ0Do" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</p>

If you don't, let me sum it up: **_Agent Mode_ is insane**.

As a developer, watching that was like seeing hours—sometimes even days—of work done in minutes. Debugging, creating tests, rewriting tests, updating files, troubleshooting build issues, identifying local environment quirks, validating changes—all handled automatically. The human's role becomes just verifying that everything looks right and tweaking things here and there. If you show that to a developer and they hit you with, "_lol, it still sucks, it'll never be good enough_"—please don't take career advice from that person. They can't see the forest for the trees. This is how good it is now—and **it's still in preview mode**. GitHub has a team improving it every single day. How good will it be in a year? Five years?

What really sets _Agent Mode_ apart is how much of the busywork it eliminates. You're no longer copy-pasting code into a chat window to manually feed an AI context. It already knows your entire project. You can just talk to it, describe what you're trying to do in pseudocode-level conversations, and it translates that into actual code changes across multiple files. It's eerily similar to the relationship between a Senior dev and a competent Junior—where one provides high-level guidance and the other implements, then loops back for validation.

Again, if someone watches that demo and says, "_Eh, not a big deal_", they're in denial. This is one of the few times where the often overused word _revolutionary_ actually fits.

## So Are We Cooked?

If you're a software developer, or in a related code-heavy position, a reaction like so to GitHub Copilot _Agent Mode_ would be understandable.

<p align="center">
    <img class="gifformat" alt="We Are Screwed Michael Scott" src="/assets/images/screwed-the-office.gif"/>
</p>

But instead of panicking, let's tackle this question with an analogy derived from the name _Copilot_. Think about the history of flying. Pilots used to do a lot manually. Then computers came along, and things got easier. As technology advanced, automation took over more and more of the routine tasks, to the point where modern pilots spend most of a flight with the plane in autopilot. The computer is doing most of it the actual flying. The human pilot, and even their human copilot, have been relegated to oversight, takeoff, landing, and stepping in when things go wrong. But here's the key: Pilots still have to be experts. They know the aircraft inside and out. They know what every instrument on the dashboard does, how to interpret the readings, what turbulence patterns mean, and how to react in an emergency. The computer handles the grunt work—the routine, predictable stuff—but when it really matters, when conditions are unpredictable, we still trust human pilots to take control. Just ask Denzel Washington in [_Flight_](https://en.wikipedia.org/wiki/Flight_(2012_film)) (great film, by the way).

No analogy is perfect, and this one certainly isn't. The point is: software development isn't going anywhere, but those who refuse to adapt will. Developers will still exist, using AI-powered tools to build faster than ever. Now, will they be as technically deep as those of the past? Probably not. But let's be real—most modern devs don't have anywhere near the level of technical depth that the pioneers did. Early programmers were working at the hardware level, managing registers, manually allocating memory, writing in assembly, and worrying about CPU cycles and bitwise operations. Today, high-level languages like Python, C#, and Java abstract away most of that complexity, and that's a good thing. These abstractions made modern software development more accessible, more productive, and far more valuable to businesses. AI-assisted programming is just the next step—moving from writing every line yourself (or scavenging Stack Overflow) to collaborating with AI to build faster, more efficiently, and with fewer barriers to execution.

Now, as someone who genuinely loves coding, I get why this might feel like an affront to the craft. Many of us got into this field for the "love of the game". Coding for the sake of it, for the sheer joy of crafting something, like woodworkers who carve intricate details by hand when a CNC machine could do it in seconds. I respect that sentiment, I feel it myself, but at the end of the day, that's what it is—sentiment. The business world isn't built on nostalgia. It runs on cold, hard cash. Efficiency. Productivity. Speed. Growth. Relentless ambition. Unbounded potential. [Ruthless capitalism](https://en.wikipedia.org/wiki/Embrace,_extend,_and_extinguish). No company is going to turn down a tool that makes developers faster, more efficient, and ultimately better at their jobs—when "better" is defined by delivering results, not personal satisfaction.

So, yes—developers will have to adapt. Some jobs will almost certainly be lost, especially among those who refuse to embrace AI-assisted development. And when one developer with AI can do the work of several, fewer will be needed. That sucks, no doubt. But the best way to stay ahead is to master these tools—to secure your place among the experts who guide AI rather than compete with it. In a field many say is oversaturated, this shift could actually bring back scarcity and make those who know how to leverage AI more valuable. That's me being eternally optimistic. Regardless, getting on board and learning how to use this stuff is the smartest way to navigate this new reality as a developer.

We're not completely cooked, but plenty of us will be if we refuse to evolve.

## A New Hope

If you're a software developer, a student, early in your career, still in school, or just trying to figure out where you fit into all of this, here's my final point.

You can complain, meme, fearmonger, and be cynical all you want. Or, as [Sandor "The Hound" Clegane](https://gameofthrones.fandom.com/wiki/Sandor_Clegane) would put it, you can [whinge](https://www.google.com/search?q=whinge+definition). That's your right. But if you love building things with software, or if you want a future in a lucrative industry with massive potential, then you need to understand how GitHub—and by extension, Microsoft—is using AI to develop software. Not just chatbots, not just consumer gimmicks, but real software development powered by AI. The [shrewd](https://www.biblegateway.com/passage/?search=Matthew%2010%3A16&version=NIV) move is to align yourself with the [skills](https://learn.microsoft.com/en-us/ai/?tabs=developer) that will let you use these tools to build the future.

Or, put more simply: [Adapt or die](https://www.google.com/search?q=what+does+adapt+or+die+mean).
