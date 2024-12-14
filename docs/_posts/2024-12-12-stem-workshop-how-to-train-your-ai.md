---
title: "STEM Workshops: How To Train Your AI: Demystifying ChatGPT With Machine Learning, Neural Networks, and Deep Learning Basics"
excerpt: "Demystify the concepts behind tools like ChatGPT with an approachable introduction to Machine Learning, Neural Networks, and Deep Learning."
last_modified_at: 2024-12-12T15:41:26
toc: true
toc_sticky: true
toc_label: "On This Page"
toc_icon: "robot"
header:
  teaser: /assets/images/how-to-train-your-dragon.jpg
  og_image: /assets/images/how-to-train-your-dragon.jpg
  overlay_image: /assets/images/how-to-train-your-dragon.jpg
  overlay_filter: 0.7
categories:
  - blog
tags:
  - stem-workshops
---

<script src="/assets/js/dynamic-link-targeting.js"></script>

<style>
    .page__hero--overlay {
        background-position: center 60%;
    }
    /* Apply styles only on tablets and larger devices */
    @media (min-width: 768px) {
        .page__hero--overlay {
            padding: 10em 0;
        }
    }
</style>

**Aside:** The *How To Train Your AI* portion of the title is a reference to the heartwarming animated movie series [*How To Train Your Dragon*](https://en.wikipedia.org/wiki/How_to_Train_Your_Dragon). If you caught that before reading this, you have great taste, and I'm proud of you 🙌🏾👏🏾.
{: .notice--info}

## Some Background

We're back with another entry in my series of [STEM Workshops](https://segunakinyemi.com/tags/#stem-workshops), where I share content I've created to teach the fundamentals of computer science, software engineering, and technology to students. This particular workshop is focused on Artificial Intelligence (AI), which is the hottest topic in technology—and maybe the entire world—right now. While it might seem magical, the fundamental aspects behind it are rooted in math, probability, and statistics, just at massively refined scales. This workshop aims to take the foundational ideas of AI and distill them into something students can understand, regardless of their technical background.

To do this, it simplifies those concepts quite drastically as they relate to popular AI tools like ChatGPT. I strive to maintain accuracy, but it's undeniable that the concepts are far more complex than how they're presented in the workshop. However, the basic idea is there. I take inspiration for this teaching approach from one of my favorite YouTube channels, [OverSimplified](https://www.youtube.com/@OverSimplified). It breaks down complex historical topics into simple ideas that anyone can understand. The creator doesn't shy away from saying, "Yes, this is oversimplified," but that’s the point: make the ideas accessible, spark curiosity, and give people enough understanding to dive deeper on their own.

That's the theme of this workshop. It's an intentionally oversimplified dive into the foundations behind Machine Learning, Neural Networks, and Deep Learning—the pillars of AI. From middle school students just getting started to college learners with coding experience, this workshop is designed to meet students where they're at. For the tech and AI experts reading through this workshop, don't worry, I know that these concepts are more complicated than what's presented here, but that's okay. This is a one-hour opportunity to introduce those ideas and provide students a conceptual framework for understanding how AI actually works. Those intrigued by what they learn will hopefully take the next steps to explore further, perhaps by leveraging online resources like those catalogued [here](https://segunakinyemi.com/blog/ai-learning-resources/).

## Workshop Overview

The workshop breaks down the concepts of AI into digestible sections, followed by hands-on coding activities that progressively build from random word generation to interactive AI text prediction.

- **Duration:** ~1 hour (30 minutes of presentation, activity, and discussion, followed by a 30-minute coding exercise).
- **Audience:** Middle school, high school, and college students, ranging from no technical background to those with some programming experience.
- **Goal:** Students will leave with a basic understanding of how AI systems like ChatGPT work, including the core ideas of Machine Learning, Neural Networks, and Deep Learning.

## Required Expertise

For students, no technical background is required. Those with some coding experience will find the later activities more familiar, but the workshop is designed to be accessible to anyone with curiosity and a willingness to learn. That said, facilitators will benefit greatly from a solid understanding of these concepts—it's challenging to stand before a room of curious students, ready to poke, prod, and ask questions, without a firm grasp of the material. The [facilitation resources](#facilitation-resources) are designed to help with building that understanding.

## Required Materials

- The [facilitation resources](#facilitation-resources)
- Pen and paper for all students.
- Laptops with internet access (one per student or group of 3–4 students works best).
- A Microsoft account logged in on the laptops to access the [Visual Studio Code for Education](https://vscodeedu.com) project found [here](https://vscodeedu.com/Q4eHFHOieGscZpldANxN).

## Workshop Structure

Here's the overall structure of this workshop.

### Activity 1: Exploring AI Training Concepts

Students begin by learning the difference between traditional programming ("writing rules") and AI ("learning patterns"). Through an interactive session, they see how AI learns from labeled data (supervised learning) and raw text data (self-supervised learning). This part sets the stage for understanding how AI models like ChatGPT are trained.

### Activity 2: Hands-On AI Training

Using Python files in the Visual Studio Code for Education [project](https://vscodeedu.com/Q4eHFHOieGscZpldANxN), students will:

1. Run a basic random word generator.
2. Improve it using [Markov chains](https://en.wikipedia.org/wiki/Markov_chain) (a way to predict the next word based on previous ones) and tweakable parameters like `window_size` (how many previous words are considered) and `temperature` (how random or creative the word selection is).
3. Interact with an AI-like model they refine themselves, experiencing firsthand how adjustments impact output.

## Facilitation Resources

You can find the facilitation guide for this workshop below, with the latest version always available on GitHub [here](https://github.com/segunak/stem-education/blob/2292d891dd56f63fe9d84f7fab6ef55cdf145210/workshops/How%20To%20Train%20Your%20AI/how-to-train-your-ai.md).  

<iframe
    src="https://segunak.github.io/stem-education/workshops/How%20To%20Train%20Your%20AI/how-to-train-your-ai.pdf"
    width="100%"
    height="500px"
    style="border: 1px solid gray">
</iframe>

---

The accompanying workshop presentation is also available below. If you download a copy, be sure to check the notes section, which includes guidance on key points to cover and concepts to share with students.  

<iframe
  src="https://1drv.ms/p/c/750d396c5cadcebd/IQS10Ps2jcCrR4jWYJmitxuqAbEgwZWs0ZeYC7lTNEo9CaI?em=2&amp;wdAr=1.7777777777777777"  
  width="100%"
  height="500px"
  frameborder="0">
</iframe>

## Final Thoughts

This workshop was designed to spark curiosity and demystify AI for students of varying levels. It's a hands-on way to explore how systems like ChatGPT work and the core ideas of Machine Learning, Neural Networks, and Deep Learning.

If you'd like to explore AI further, check out my curated list of resources [here](https://segunakinyemi.com/blog/ai-learning-resources/). Feel free to adapt this workshop and [share](/contact) your experiences—I'm always excited to hear how others are teaching these concepts!
