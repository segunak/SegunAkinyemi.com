---
title: "How To Retry Pipelines in Azure Data Factory and Synapse Analytics"
excerpt: "If at first, you don't succeed, pick yourself up and make sure your Azure Data Factory or Azure Synapse Analytics pipelines have adequate retry policies."
classes: wide
author_profile: false
sidebar:
  title: "On This Page"
  nav: adf-synapse-pipeline-retries
header:
  teaser: /assets/images/cloudnetworking.jpg
categories:
  - blog
tags:
  - tech
---

<style>
  .postimage img {
    max-width: 80%;
  }

  #introduction {
    display: none;
  }
</style>

<h2 id="introduction"><a class="header-link" href="#introduction" title="Permalink"></a></h2>

In life, things don't always go well. Sometimes you try, you fail, and you try again. The same is true for cloud networking, specifically in [Azure Data Factory](https://learn.microsoft.com/en-us/azure/data-factory/){:target="_blank"} and [Azure Synapse Analytics](https://learn.microsoft.com/en-us/azure/synapse-analytics/overview-what-is){:target="_blank"}. When doing stuff in the almighty cloud, [things happen](https://www.youtube.com/watch?v=PNpSpMMfQis){:target="_blank"}. When they do, you'll want a self-healing system capable of trying again on its own.

The path to retrying a pipeline varies depending on its trigger type, either [tumbling window](https://learn.microsoft.com/en-us/azure/data-factory/how-to-create-tumbling-window-trigger){:target="_blank"} or [scheduled](https://learn.microsoft.com/en-us/azure/data-factory/how-to-create-schedule-trigger){:target="_blank"}. Microsoft documentation on that can be seen below, and also [here](https://learn.microsoft.com/en-us/azure/data-factory/concepts-pipeline-execution-triggers#trigger-type-comparison){:target="_blank"}.

<div class="postimage" markdown="1">
  ![TriggerComparison](/assets/images/trigger-comparison.png)
</div>

## Tumbling Window Triggers

If you're using a [tumbling window trigger](https://learn.microsoft.com/en-us/azure/data-factory/how-to-create-tumbling-window-trigger){:target="_blank"}, retry capabilities are built into Data Factory and Synapse. All you'll need to do is head over to your trigger's configuration page and set the `Retry policy: count` and `Retry policy: interval in seconds` properties to your liking.

<div class="postimage" markdown="1">
  ![TumblingWindowTriggerExample](/assets/images/retry-twt.png)
</div>

## Scheduled Triggers

If you're using a [scheduled trigger](https://learn.microsoft.com/en-us/azure/data-factory/how-to-create-schedule-trigger){:target="_blank"} to kick off your pipeline(s), you'll have to get creative with setting up automatic retries. Data Factory and Synapse [do not currently support](https://learn.microsoft.com/en-us/azure/data-factory/concepts-pipeline-execution-triggers#trigger-type-comparison){:target="_blank"} retries on scheduled trigger pipelines, but as with many things in programming, there are some workarounds.

### Basic Retry Pattern

The pattern below is a basic implementation of a retry policy for a pipeline in Data Factory or Synapse.

![ScheduledTriggerExample](/assets/images/scheduledtriggerexample.jpg)

Here's what's going on, activity by activity, from left to right.

1. **Initial Call to Pipeline:** This is an [*Execute Pipeline*](https://learn.microsoft.com/en-us/azure/data-factory/control-flow-execute-pipeline-activity){:target="_blank"} activity containing the original call to the pipeline of note. If it succeeds (green line), we go straight to the next activity, which can be anything. In the example, it's another *Execute Pipeline* activity, but it doesn't have to be. If *Initial Call to Pipeline* fails (red line), we go to a wait activity.
2. **Retry Interval:** This is a [*Wait*](https://learn.microsoft.com/en-us/azure/data-factory/control-flow-wait-activity){:target="_blank"} activity. It waits for a specified period before continuing with the execution of subsequent activities. Here it's used to establish a retry interval between the initial and subsequent calls to the pipeline. When it completes (blue line) we go to the retry call for the initial pipeline.
3. **Retry Call to Pipeline:** This is an [*Execute Pipeline*](https://learn.microsoft.com/en-us/azure/data-factory/control-flow-execute-pipeline-activity){:target="_blank"} activity that calls the same pipeline that was executed in Step 1. If this activity is running, it means the initial call failed. **It's very important** to note how this activity is connected to the next one. It's using both a success connector (green line) and a skip connector (gray line). This is because if **Initial Call to Pipeline** succeeds, it goes straight to **Next Activity**, skipping **Retry Call to Pipeline**. If you were to only connect **Retry Call to Pipeline** to **Next Activity** on success, what you'd be saying is "only run **Next Activity** when both **Initial Call to Pipeline** and **Retry Call to Pipeline** succeed. But that makes no sense because if the initial call succeeds the retry will be skipped. Therefore, you must connect **Retry Call to Pipeline** to **Next Activity** on both success (meaning the initial call failed) and skipped (meaning the initial call succeeded).
4. **Next Activity:** This can be any activity that should run after the initial pipeline called in Step 1. It can be yet another [*Execute Pipeline*](https://learn.microsoft.com/en-us/azure/data-factory/control-flow-execute-pipeline-activity){:target="_blank"}  activity, but if it is and you want to have retries on it, this pattern can get messy

[Pragmatic programmers](https://www.google.com/search?q=the+pragmatic+programmer&rlz=1C1ONGR_enUS937US937&oq=the+pragmatic+programmer){:target="_blank"} have likely already sussed out the scalability issue this pattern has.

What happens when you have several pipelines each in need of at least one retry? For every pipeline needing a retry, you'd have to add at least two additional activities to support this pattern. Seeing as [there's a limit](https://github.com/MicrosoftDocs/azure-docs/blob/main/includes/azure-data-factory-limits.md){:target="_blank"} to the number of activities you can have in a Data Factory or Synapse pipeline, this pattern doesn't scale well at all. Furthermore, what happens when you need to do more than one retry? You'd have to add more  *Wait* and *Execute Pipeline* activities for every additional retry.

This pattern is all but useless if you're looking to implement a mature form of resiliency.

### Less Basic Retry Pattern

There's nothing "advanced" about the following pattern, but in comparison to the one above, it supports having multiple retries a lot better. Remember, these are all workarounds. What we're trying to do is fundamentally simple. Call a function (pipeline), parse the result, and call it again a finite number of times if the initial call failed. Most developers don't need an article explaining how to implement that logic in their preferred programming language. But when dealing with low-code platforms, sometimes the comically simple becomes the surprisingly complex.

This pattern relies on the use of a parent pipeline from which all other pipelines are called. Inside, any child pipelines needing retry logic must be wrapped in an [Until](https://learn.microsoft.com/en-us/azure/data-factory/control-flow-until-activity){:target="_blank"} activity whose iteration is tied to pipeline parameters and variables. Namely, the following.

![ParametersToPipeline](/assets/images/parametersForRetryPipeline.jpg)
![VariablesForRetryPipeline](/assets/images/variablesForRetryPipeline.jpg)

Here's what each of those is used for.

* `MaxPipelineCalls`: Pipeline parameter. The maximum number of times you want the pipeline to be called. Setting this to 1 effectively means there will be no retries. It'll be called, and pass or fail, that'll be it. Any value greater than 1 denotes the desire for retries. Therefore, the number of retries can be calculated as `MaxPipelineCalls` - 1.
* `RetryInterval`: Pipeline parameter. The amount of time to wait, in seconds, between retry calls to the pipeline.
* `HasPipelineSucceeded`: Pipeline variable. A Boolean is used to track if a pipeline call has succeeded. Inside of the Until, it's flipped to true when there's a success, which signals for the Until to break its iteration. More on that later.
* `RetryTracker`: Pipeline variable. An array whose only value is in using its length to track how many retries have occurred. You might be wondering, why not use an integer and simply increment it after each retry? Well, that's because you can't do that in ADF and Synapse, unless you're willing to implement some [strange](https://stackoverflow.com/questions/60795937/how-to-increment-a-parameter-in-an-azure-data-factory-until-activity){:target="_blank"} [workarounds](https://kloudspro.com/how-to-increment-a-variable-in-adf-azure-data-factory/){:target="_blank"}. Instead of nesting a workaround inside of what is already a workaround, I've opted for using an array, and an [append activity](https://learn.microsoft.com/en-us/azure/data-factory/control-flow-append-variable-activity){:target="_blank"}, to track how many retries have occurred. Every time a retry occurs, a value is added to the array, and the Until checks its length against the value of `MaxPipelineCalls` to determine if it should break.

Here's what the pipeline looks like at the highest level. The timeout should be set to something reasonable based on the expected runtime of the pipeline being called.

![ExpressionSectionRetryPipeline](/assets/images/expressionSectionRetryPipeline.jpg)

Take note of the highlighted area containing the expression code. It makes use of the aforementioned variables to break the Until when it's appropriate to do so. The expression code is below.

```
@or(
    equals(variables('HasPipelineSucceeded'), true),
    greaterOrEquals(
        length(variables('RetryTracker')),
        pipeline().parameters.MaxRetries
    )
)
```

Here's what it looks like inside of the Until.

![InsideUntil](/assets/images/insideUntil.jpg)

Things start with **Execute Target Pipeline** which is an [*Execute Pipeline*](https://learn.microsoft.com/en-us/azure/data-factory/control-flow-execute-pipeline-activity){:target="_blank"} activity. It calls whatever pipeline needs to have retry capabilities.

If **Execute Target Pipeline** succeeds, we go to the [*Set Variable*](https://learn.microsoft.com/en-us/azure/data-factory/control-flow-set-variable-activity){:target="_blank"} activity **Set Has Pipeline Succeeded to True**, which sets the value of the parameter `HasPipelineSucceeded`, and in so doing, breaks the loop.

![SetHasPipelineSucceededToTrue](/assets/images/setHasPipelineSucceededToTrue.jpg)

If **Execute Target Pipeline** fails, we go to a Wait activity that waits according to the value of the `RetryInterval` parameter.

![WaitBeforeRetrying](/assets/images/waitBeforeRetrying.jpg)

After waiting, the iteration ends with appending a value (can be any value at all since the count of the array is what we care about) to the `RetryTracker` array.

![AppendingToRetryTracker](/assets/images/appendingToRetryTracker.jpg)

And so, with a great deal of effort, this pattern provides retry capabilities for pipelines run by scheduled triggers. While it better supports multiple retries, it still kind of sucks. Here's why.

* Every pipeline needing retries has to be wrapped in its own **Until** that itself contains 3 additional activities to support the logic. Doesn't scale well.
* Customizing the retry interval and number of retries between distinct pipelines becomes messy. You either need to use the same values for all calls or have separate variables for each pipeline that needs a unique setting.
* Pipeline hygiene can be muddied up by this pattern. All of a sudden your pipeline goes from looking clean and simple to a clutter of chained *Until's* existing only to enable retry abilities.

These patterns work, but they're limited and ultimately not ideal for building an elegantly resilient Data Factory and/or Synapse Analytics solution.

## Closing Thoughts

Dear Microsoft, please allow for built-in retries on individual [*Execute Pipeline*](https://learn.microsoft.com/en-us/azure/data-factory/control-flow-execute-pipeline-activity){:target="_blank"} activities. You've already done a great job with providing that functionality for pipelines being called via [tumbling window](https://learn.microsoft.com/en-us/azure/data-factory/how-to-create-tumbling-window-trigger){:target="_blank"} triggers. I do hereby kindly request that the same feature be brought to pipelines everywhere, indiscriminately, without bias or exclusion. Let there be retries for all pipelines, in all places, in all (reasonable) scenarios, in all Azure regions, no matter how they're called!

Also, check out [this](https://datasavvy.me/2021/02/18/azure-data-factory-activity-failures-and-pipeline-outcomes/){:target="_blank"} article by Microsoft MVP [Meagan Longoria](https://datasavvy.me/about/){:target="_blank"} that expertly explains activity and pipeline relationships. Without it, I would've never been able to use Azure Data Factory or Synapse Analytics effectively. There [was](https://github.com/MicrosoftDocs/azure-docs/issues/91598){:target="_blank"} an initiative to get the info from the article onto the official Microsoft documentation site, but alas, it did not succeed. Here's to hoping that article stays around for the foreseeable future.
