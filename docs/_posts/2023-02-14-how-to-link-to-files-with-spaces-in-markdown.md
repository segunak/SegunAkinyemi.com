---
title: "How To Have a Link With Spaces in Markdown"
excerpt: "You can link to files, folders, websites, or anything with spaces in it, using this one simple Markdown trick (intentional built-in feature)."
classes: wide
header:
  teaser: /assets/images/markdown-image.jpg
categories:
  - blog
tags:
  - tech
---

I recently edited some [Markdown](https://www.markdownguide.org/){:target="_blank"} files that needed to link to documents with spaces in their name. I had never done that before and set out to discover how to make it happen. Here's what I learned.

You can have a [markdown link](https://www.markdownguide.org/basic-syntax/#links){:target="_blank"} with spaces by wrapping the URL in angle brackets (`<>`).

```Markdown
[link](<YourLinkHere>)
```

This solution should work on most all flavors of Markdown, as it's defined in the [Common Mark](https://spec.commonmark.org/0.30/#example-485){:target="_blank"} standard that's used by [Discourse](https://www.discourse.org/){:target="_blank"}, [GitHub](https://github.com/about){:target="_blank"}, [GitLab](https://about.gitlab.com/){:target="_blank"}, [Reddit](https://www.reddit.com/){:target="_blank"}, [Qt](https://www.qt.io/){:target="_blank"}, [Stack Overflow](https://stackoverflow.com/){:target="_blank"}, [Stack Exchange](https://stackexchange.com/){:target="_blank"}, and [Swift](https://developer.apple.com/swift/){:target="_blank"}. Here are some examples.

```Markdown
[Some Caption](<https://www.google.com/search?q=how to have spaces in markdown link>)
```

```Markdown
[Krabby Patty Formula](<./Secret Files/Krabby Patty Formula.md>)
```

```Markdown
![StLouisArchImage](<./St Louis Arch.jpg>)
```

Now that you know how to link to items with spaces in Markdown, try to avoid doing so. You're best off just not having spaces in the name of a file, folder, or URL. Don't take my word for it though, the [engineering community](https://superuser.com/questions/29111/what-technical-reasons-exist-for-not-using-space-characters-in-file-names){:target="_blank"} is in agreement on this one. You can use dashes, underscores, or [casing styles](https://stackoverflow.com/questions/17326185/what-are-the-different-kinds-of-cases){:target="_blank"}, just do whatever you can to avoid spaces in names.

But sometimes, it's out of your control. In that case, do what you got to do, much like a wise man once did [_a long time ago in a galaxy far far away_](https://starwars.fandom.com/wiki/Duel_on_Mustafar){:target="_blank"}.

<p align="center">
  <img src="/assets/images/obi-wan-must.gif" />
</p>
