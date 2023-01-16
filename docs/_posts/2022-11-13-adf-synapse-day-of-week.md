---
title: "How To Check if It's a Weekday in Azure Data Factory and Synapse Analytics"
excerpt: "Sometimes your system needs to know if today's a weekday. Here's how to find out using Microsoft's Azure Data Factory or Azure Synapse Analytics."
classes: wide
header:
  teaser: /assets/images/azurecity.jpg
categories:
  - blog
tags:
  - tech
---

<style>
  .postimage img {
    max-width: 80%;
  }
</style>

In Azure Data Factory and Azure Synapse Analytics, there are objects called "[activities](https://learn.microsoft.com/en-us/azure/data-factory/concepts-pipelines-activities?tabs=data-factory){:target="_blank"}", which run inside of "[pipelines](https://learn.microsoft.com/en-us/azure/data-factory/concepts-pipelines-activities?tabs=data-factory){:target="_blank"}", which are called by "[triggers](https://learn.microsoft.com/en-us/azure/data-factory/concepts-pipeline-execution-triggers){:target="_blank"}".

Sometimes you need activities inside of a pipeline to only run on certain days of the week, even though the larger pipeline trigger runs daily. Here's how to check if the current day is a weekday using Microsoft's [expression language](https://learn.microsoft.com/en-us/azure/data-factory/control-flow-expression-language-functions){:target="_blank"}, which is used in both ADF and Synapse pipelines.

### Doing the Needful

First, create an [`If` condition](https://learn.microsoft.com/en-us/azure/data-factory/control-flow-if-condition-activity){:target="_blank"} in your pipeline. Next, click on the `Add dynamic content` button.

<div class="postimage" markdown="1">
  ![IfConditionImage](/assets/images/ifcondition.png)
</div>

You should now be in the Pipeline Expression Builder menu.

<div class="postimage" markdown="1">
  ![PipelineExpressionMenu](/assets/images/expressionbuilder.png)
</div>

Using these functions, you can write the code below which will return `true` if the current day is a weekday. Make sure to choose your desired time zone, since the day of the week varies based on where one is in the world. Options on [this](https://learn.microsoft.com/en-us/windows-hardware/manufacture/desktop/default-time-zones?view=windows-11#time-zones){:target="_blank"} page.

```
@contains(
    createArray(1, 2, 3, 4, 5),
    dayOfWeek(convertFromUtc(utcNow(), 'Pacific Standard Time'))
)
```

Per the documentation for `dayOfWeek()` found [here](https://learn.microsoft.com/en-us/azure/data-factory/control-flow-expression-language-functions#dayOfWeek){:target="_blank"}, it returns an integer from 0 to 6 representing the day of the week, with Sunday starting at 0. Therefore, 1-5 represents the weekdays Monday thru Friday.

An alternative way of writing this code is below. I find it less attractive, as it relies on the often perilous practice of [string comparisons](https://softwareengineering.stackexchange.com/questions/439396/is-it-bad-practice-to-compare-string-representation-on-an-object-instead-of-its){:target="_blank"}. Why compare strings when you can [compare integers](https://stackoverflow.com/questions/4904179/why-is-integer-comparison-faster-then-string-comparison){:target="_blank"}? Not recommended, but it works.

```
@contains(
    '12345',
    string(dayOfWeek(convertFromUtc(utcNow(), 'Pacific Standard Time')))
)
```

### Solution Tools

This solution utilizes the expression functions below provided by Microsoft in Azure Data Factory and Synapse Analytics.

* `contains()`: Check if a collection contains a value. Details [here.](https://learn.microsoft.com/en-us/azure/data-factory/control-flow-expression-language-functions#contains){:target="_blank"}
* `createArray()`: Make an array ad hoc. Details [here.](https://learn.microsoft.com/en-us/azure/data-factory/control-flow-expression-language-functions#createArray){:target="_blank"}
* `dayOfWeek()`: Get an integer value denoting the current day of the week. Details [here.](https://learn.microsoft.com/en-us/azure/data-factory/control-flow-expression-language-functions#dayOfWeek){:target="_blank"}
* `convertFromUtc()`: Convert a UTC timestamp to a different time zone. Details [here.](https://learn.microsoft.com/en-us/azure/data-factory/control-flow-expression-language-functions#convertFromUtc){:target="_blank"}
* `utcNow()`: Get the current UTC Time. Details [here.](https://learn.microsoft.com/en-us/azure/data-factory/control-flow-expression-language-functions#utcNow){:target="_blank"}
* `string()`: Return the string version of a value. Details [here.](https://learn.microsoft.com/en-us/azure/data-factory/control-flow-expression-language-functions#string){:target="_blank"}

### A Closing Soliloquy

I'll be honest, this solution seems overly verbose for what's ultimately a simple task. But hey, times have changed, welcome to the [low code revolution](https://www.ben-morris.com/azure-data-factory-myth-code-free-data-warehouse/){:target="_blank"}.

Here's my question to any ADF or Synapse experts out there. Let's say I needed to find out if it's a weekday in several different pipelines across my data factory or Synapse workspace. In a *normal* programming language, I'd write a function that takes the current date as a parameter and returns a Boolean letting the caller know if it's a weekday. A basic, reusable, self-contained piece of code. I'd import the module with the function wherever needed, and I'd never have to rewrite that logic again.

How would one accomplish the same modularity in Azure Data Factory or Synapse Analytics? The goal is to avoid having to copy and paste the same expression code all over the place. Here are some thoughts.

**Option 1:** You write a pipeline that takes in the date as a parameter and returns a Boolean that tells you if it's a weekday or not.
{: .notice--primary}

Oh wait, you can't do this because ADF and Synapse pipelines can't return values, unless you go through some [strange workarounds](https://stackoverflow.com/questions/72548774/returning-a-value-from-a-data-factory-pipeline){:target="_blank"}, or utilize [Synapse notebooks](https://learn.microsoft.com/en-us/azure/synapse-analytics/synapse-notebook-activity?tabs=classical#read-synapse-notebook-cell-output-value){:target="_blank"}, which seems like Super Saiyan level overkill for the simple task of determining if it's a weekday.

**Option 2:** You call all pipelines from a parent that precalculates values needing reuse and passes them to children.
{: .notice--primary}

This is a pattern my team is actively using to work around the fact that Azure Data Factory has [global parameters](https://learn.microsoft.com/en-us/azure/data-factory/author-global-parameters){:target="_blank"}, but Azure Synapse Analytics [does not](https://feedback.azure.com/d365community/idea/eaa47674-0442-ec11-a819-000d3ae2b5ca). I suppose one could extend this pattern to accomplish a form of code reuse when the only goal of your function is to calculate a value. You'd calculate all your constant values upfront and pass them to child pipelines as parameters. This gets smelly fast if you have 1 parameter for every value in need of reuse. An easy workaround for that is to store your properties in a JSON object and pass that 1 object down to child pipelines. For example, consider this JSON object.

``` JSON
{
  "isTodayAWeekday": true,
  "isTodayAHoliday": false,
  "isDieHardAChristmasMovie": true,
  "isThorStrongerThanHulk": maybe
}
```

If you had two or more pipelines needing these values, you could make a parameter of type object that'd take in the JSON. Child pipelines would then access its values using [dot notation](https://learn.microsoft.com/en-us/azure/data-factory/how-to-expression-language-functions#examples-of-using-parameters-in-expressions){:target="_blank"}. That way, you don't need a parameter for every value, you just need one for the object. That being said, I still think this is too much effort for mirroring the reusability provided by functions, or even global parameters, in a standard programming language.

**Option 3:** You store reusable expression code in a text file maintained in your Azure Storage Account. Every time you need an oft-used piece of logic, you read it from the file using a Lookup activity. You then get the output of the Lookup and pass it in as the dynamic content for the activity that needs the logic. By doing so, you only have to write the expression code once for all places that need it.
{: .notice--danger}

![JonahHillNope](/assets/images/jonahhill-nope.gif)

I call this one bastardized reusability. Don't do this. This is a bad idea. I feel wrong for having typed it. It's the kind of thing customers cook up that makes the dev team shudder with horror. I'm sorry Microsoft, but you should just give us global parameters in Synapse and the ability to return values from pipelines so we can stop coming up with creative, although sometimes inefficient, workarounds.