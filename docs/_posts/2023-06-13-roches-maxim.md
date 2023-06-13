---
title: "Roche's Maxim: Essential Wisdom For Simplifying Data Transformation"
excerpt: "Embrace the simple but powerful wisdom of Roche's Maxim to enhance the way you approach data transformation."
classes: wide
header:
  teaser: /assets/images/thinker.jpg
categories:
  - blog
tags:
  - tech
---

You ever hear a term that perfectly describes a concept you'd often thought about, but didn't have a name for? The joy that comes from discovering that official (or colloquial) term is nothing short of amazing. It's vindicating, finding a precise definition for something you've long understood but struggled to articulate.

I recently had this satisfying experience after stumbling across a concept called [Roche's Maxim of Data Transformation](https://ssbipolar.com/2021/05/31/roches-maxim/){:target="_blank"}. It states:

> Data should be transformed as far upstream as possible, and as far downstream as necessary.
>
> <cite>[Matthew Roche](https://www.linkedin.com/in/matthewroche/){:target="_blank"}</cite>

How delightfully simple, and suitably germane to my current line of work. I am at present a software engineer on a team that works a lot with data. One of our projects involves the first two parts of the [ETL](https://en.wikipedia.org/wiki/Extract,_transform,_load){:target="_blank"} process, extract and transform, with a downstream system responsible for loading.

## The Trials of a Data Middleman

Transforming the data we extract has proven cumbersome, primarily due to it being published in a format far from what the [final destination](https://en.wikipedia.org/wiki/Final_Destination){:target="_blank"} system is looking for. We're effectively a middleman, doing anything and everything to make the data palatable for the downstream system, whose authority and relevance within the larger organization outranks ours by a mile. The team upstream of us is well-intentioned, but for various reasons (technical debt, understaffing, shifting priorities, platform limitations), are unable to provide much more than a raw dump of their internals, leaving us scrambling to fit it all together.

It's like someone asking you to help them put together furniture for their grandma, but instead of working with you, they drop the box on your front porch and tell you to have it to her by the end of the week. They also conveniently forgot to provide you with the instructions, and instead of sending a copy, they opt for sharing bits and pieces of it over chats and emails. So in addition to the furniture being in pieces, you're also getting the instructions in pieces, leaving you with two puzzles to solve at once. After languishing in this task for some time, you have an epiphany. Wouldn't it be easier if the furniture's owner — who possesses the full set of instructions — put it together themselves, and asked you to only _deliver_ it to their grandma? Or, if they want your help putting it together, couldn't they at least send you the full instructions?

That's a drawn-out analogy, but it captures how I felt about the project, and I wasn't alone. The feeling of "this is ridiculous" became so widespread that it eventually included the very talented engineers on the upstream team, who agreed that something needed to change. Out of these sentiments, a joint effort was born to eliminate my team's role as a data middleman. Transformation is now handled upstream by the data owners, and the results are egressed directly to the final downstream system. Everyone's happier for the simplification, and although we didn't know it a the time, we had put Roche's Maxim to practical use.  

## Embracing the Maxim

If I had known about Roche's Maxim when I first started on the aforementioned project, I would've proudly dropped it on my colleagues in some chat or meeting, taking care to appear a refined intellectual in the process. Do you know how cool it is to go around spouting _maxims_? Nothing says "I know what I'm talking about" (or perhaps, "I'm a pretentious snob") more than having a maxim or carefully curated philosophical quote up your sleeve for any occasion. In an instant, you become the go-to authority in the room on the subject matter at hand, deserved or not.

Jokes aside, I couldn't be happier to have discovered Roche's Maxim. Its message on transformation is simple, yet powerful in its potential to revolutionize the way organizations handle data. If embraced, it can be a golden rule that keeps data flowing smoothly, teams smiling, and companies thriving. Cheers to finding balance in data transformation — keeping things simple, yet appropriately complex.
