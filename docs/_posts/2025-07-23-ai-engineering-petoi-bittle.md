---
title: "Context Is All You Need: AI Engineering with the Petoi 'Bittle X' Robot Dog"
excerpt: "Check out a workshop that teaches students AI Engineering, the art of providing models with good context, using robot dogs, Python, and VS Code."
last_modified_at:
toc: true
toc_sticky: true
toc_label: "On This Page"
toc_icon: "robot"
header:
  teaser: /assets/images/ai-engineering-petoi-bittle-banner.png
  og_image: /assets/images/ai-engineering-petoi-bittle-banner.png
  overlay_image: /assets/images/ai-engineering-petoi-bittle-banner.png
  overlay_filter: 0.6
categories:
  - blog
tags:
  - stem-education
---

<script src="/assets/js/dynamic-link-targeting.js"></script>

<style>
    /* Apply styles only on tablets and larger devices */
    @media (min-width: 768px) {
        .page__hero--overlay {
            padding: 11em 0;
        }
    }
</style>

**Note:** You can skip my yapping and go straight to the workshop [by clicking here](#required-materials).
{: .notice--info}

## Some Background

It's summer, it's hot, I just saw the [new Superman movie](https://en.wikipedia.org/wiki/Superman_(2025_film)) (it's incredible, bravo [James Gunn](https://en.wikipedia.org/wiki/James_Gunn)), and I'm fresh off another edition of my [Discovery Day program](https://www.linkedin.com/posts/activity-7298003609416355840-JkVI). It's a field trip where students visit [my employer's](https://en.wikipedia.org/wiki/Microsoft) office in [Charlotte](https://en.wikipedia.org/wiki/Charlotte,_North_Carolina) for a full day of career exploration, STEM activities, and networking.

For this latest one, I created a new workshop using the [Petoi 'Bittle X' Robot Dog](https://www.petoi.com/products/petoi-robot-dog-bittle-x-voice-controlled), which features a [fun new addition](https://docs.petoi.com/extensible-modules/robot-arm) to its capabilities. I continue [with my habit](https://segunakinyemi.com/tags/#stem-education) of taking what I'm learning as a software engineer and bringing it to students in ways that are approachable, fun, but most importantly, relevant.

We need to teach students skills that'll actually land them tech jobs in this new _age of AI_. Things have gone far beyond [just learning to code](https://en.wikipedia.org/wiki/Learn_to_Code) (although you [still should](https://www.freethink.com/artificial-intelligence/learn-to-code)). These days, if your approach to STEM Education doesn't involve AI, you're doing your students a disservice.

Tech workers everywhere are being routinely [yeeted](https://www.google.com/search?q=yeeted+definition) by AI, either into increased productivity, or the [shadow realm](https://layoffs.fyi/). It's not a fad, it's changing the way we work. It's already made my job way different. A lot of my time is spent directing AI to write code, albeit with rather technically dense prompts, rather than writing it myself. And beyond that, it's proven invaluable for research tasks.

Gone are the days of having 30 tabs open troubleshooting an issue. A back and forth conversation with good prompting can get you the information you need faster than ever. It's undeniable, AI is the real deal, and it's here to stay.

## Bittle's New Toy: A Robot Arm

I've had something of a love affair with [Petoi's](https://www.petoi.com/) products when it comes to engaging students of all ages. Check out some [local news coverage](https://www.wcnc.com/video/news/local/microsoft-hosts-students-for-discovery-day/275-15fcdc4a-f87d-46bf-ae28-d0e4c6050c3d) and [my LinkedIn recap](https://www.linkedin.com/posts/activity-7264735736778690560-71lh) of an event I hosted featuring their [Bittle X](https://www.petoi.com/products/petoi-robot-dog-bittle-x-voice-controlled). It's safe to say I'm a fan of their stuff.

The Bittle grabs students instantly with the "wow" factor. Once you have their attention, it's easy to teach them real skills. They can control the dog [with their voice](https://docs.petoi.com/extensible-modules/voice-command-module), use a [block-based programming tool](https://docs.petoi.com/block-based-programming/petoi-coding-blocks), or dive into [Python](https://docs.petoi.com/apis/python-api) (my preference).

So when they recently introduced a new product to their lineup, a [robot arm](https://docs.petoi.com/extensible-modules/robot-arm) that can be bought [as a separate attachment](https://www.petoi.com/products/bittle-arm-extension-with-metal-servos?srsltid=AfmBOoq_sxjG8o6hx225aGZ60i1OupGrO-Y61acislPen_5ysaHz9UMG) or purchased [with a new dog](https://www.petoi.com/products/petoi-robot-dog-bittle-x-voice-controlled), I was all in.

It's an awesome addition to their [already impressive lineup](https://www.petoi.com/collections/petoi-bittle-accessories) of extensions. What makes it specifically cool is the precision required to control it. Students quickly learn that being specific matters when dealing with technology, whether they're using code, prompt engineering, or voice commands.

I was fortunate enough to receive one for use in my workshops, and I finally got the chance to cook something up with it. The workshop I created works with both the arm-equipped Bittle and the standard Bittle X, all while tackling the topic that's on everyone's mind these days: artificial intelligence.

## Context Is All You Need

The workshop centers around a simple but powerful concept. AI becomes useful when you give it **good** context. Students start with an AI chat interface that only knows a few basic commands for the robot dog. Through hands-on challenges, they progressively teach the AI new capabilities by providing it with more context about the robot's full range of abilities.

This demonstrates the core principle of AI Engineering, which is connecting AI to specific knowledge to solve real problems. It's like the difference between asking someone to "make coffee" versus telling them exactly how you like it. You know, with oat milk, two pumps of vanilla, extra foam, half the ice, or whatever complicated concoction someone might be into (I'm an herbal tea guy, no additives, so I wouldn't know). Give someone your specific preferences and suddenly they can make your perfect drink every time.

As [Andrej Karpathy](https://en.wikipedia.org/wiki/Andrej_Karpathy) (former Director of AI at Tesla and founding member of OpenAI) proclaimed, we're entering the age of [AI Engineering](https://www.latent.space/p/ai-engineer). The future isn't just about using AI. It's about making AI useful by connecting it to real-world systems and knowledge. [AI Models](https://artificialanalysis.ai/leaderboards/models) are brilliant but need specific context to be useful. That's where AI Engineers come in.

Traditional software engineers write code to directly control systems. AI Engineers take a different approach. They write code that teaches AI how to control those systems. It's still engineering, but instead of coding every action, you're providing AI with the knowledge it needs to figure things out. In many ways, it's just an evolution of the job title.

This workshop gives students a taste of both worlds. They see how traditional code controls the robot directly, then transform into AI Engineers by teaching AI to control it. More importantly, they learn that with the right context and tools, they can solve problems faster than ever.

## Required Materials

- **Petoi 'Bittle X' Robot Dog** (one per 5-6 students)
- **Laptops** with Python and VS Code installed
- **Python packages**: `openai`, `python-dotenv`, and `pyserial` (install via [pip](https://pypi.org/project/pip/))
- **OpenAI API Key** (get one [on their site](https://platform.openai.com/api-keys))
- **Workshop Folder** Contains all the code and instructions for the workshop, [found on GitHub](https://github.com/segunak/stem-education/tree/master/petoi-bittle/workshops/AI%20Engineering), copy the entire [AI Engineering](https://github.com/segunak/stem-education/tree/master/petoi-bittle/workshops/AI%20Engineering) folder to the laptop(s) being used.
- **Optional:** [Robot arm attachment](https://www.petoi.com/products/petoi-robot-dog-bittle-x-voice-controlled?variant=49985955791160) for the final challenge

## Facilitation Resources

All the code required to run this workshop is available in the [AI Engineering folder on GitHub](https://github.com/segunak/stem-education/tree/master/petoi-bittle/workshops/AI%20Engineering). Copy the entire folder onto each laptop and create a `.env` file in the `lib` folder with your OpenAI API key.

The full facilitation guide is below. The latest version will always be [on GitHub](https://github.com/segunak/stem-education/blob/master/petoi-bittle/workshops/AI%20Engineering/ai-engineering.md).

<iframe
    src="https://stem.segunakinyemi.com/petoi-bittle/workshops/AI%20Engineering/ai-engineering.pdf"
    width="100%"
    height="500px"
    style="border: 1px solid gray">
</iframe>
