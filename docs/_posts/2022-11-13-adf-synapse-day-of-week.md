---
title: "How To Check if It's a Weekday in Azure Data Factory and Synapse Analytics"
excerpt: "Sometimes you need your system to know if today's a weekday. Here's how to do that using Microsoft's Azure Data Factory or Azure Synapse Analytics."
classes: wide
header:
  teaser: /assets/images/azurecity.jpg
categories:
  - blog
tags:
  - tech
---

In Azure Data Factory and Azure Synapse Analytics, there are objects called "[activities](https://learn.microsoft.com/en-us/azure/data-factory/concepts-pipelines-activities?tabs=data-factory){:target="_blank"}", which run inside of "[pipelines](https://learn.microsoft.com/en-us/azure/data-factory/concepts-pipelines-activities?tabs=data-factory){:target="_blank"}", which are called by "[triggers](https://learn.microsoft.com/en-us/azure/data-factory/concepts-pipeline-execution-triggers){:target="_blank"}".

Sometimes you need activities inside of a pipeline to only run on certain days of the week, even though the larger pipeline trigger runs daily. At least, I recently needed such functionality and envisioned others may as well. Here's how to check if the current day is a weekday using Microsoft's [expression language](https://learn.microsoft.com/en-us/azure/data-factory/control-flow-expression-language-functions){:target="_blank"}, which is used in both ADF and Synapse pipelines.

### Doing the Needful

First, create an [`If` condition](https://learn.microsoft.com/en-us/azure/data-factory/control-flow-if-condition-activity){:target="_blank"} in your pipeline. Next, click on the `Add dynamic content` button.

![IfConditionImage](/assets/images/ifcondition.png)

You should now be in the Pipeline Expression Builder menu.

![PipelineExpressionMenu](/assets/images/expressionbuilder.png)

Using these functions, you can write the code below which will return `true` if the current day is a weekday. Make sure to choose your desired time zone, since the day of the week varies based on where one is in the world. Options on [this](https://learn.microsoft.com/en-us/windows-hardware/manufacture/desktop/default-time-zones?view=windows-11#time-zones){:target="_blank"} page.

```
@contains(
    createArray(1, 2, 3, 4, 5),
    dayOfWeek(convertFromUtc(utcNow(), 'Pacific Standard Time'))
)
```

Per the documentation for `dayOfWeek()` found [here](https://learn.microsoft.com/en-us/azure/data-factory/control-flow-expression-language-functions#dayOfWeek){:target="_blank"}, it returns an integer between from 0 to 6 representing the day of the week, with Sunday starting at 0. Therefore, 1-5 represent the weekdays Monday thru Friday.

An alternative way of writing this code is below. I find this way less attractive, as it forces everything to a string to do the comparison. Not recommended, but it works.

```
@contains(
    '12345',
    string(dayOfWeek(convertFromUtc(utcNow(), 'Pacific Standard Time')))
)
```

### Solution Details

The solution depends on the expression functions below provided by Microsoft in Azure Data Factory and Synapse Analytics.

* `contains()`: Check if a collection contains a value. Details [here.](https://learn.microsoft.com/en-us/azure/data-factory/control-flow-expression-language-functions#contains){:target="_blank"}
* `createArray()`: Make an array ad hoc. Details [here](https://learn.microsoft.com/en-us/azure/data-factory/control-flow-expression-language-functions#createArray){:target="_blank"}.
* `dayOfWeek()`: Get an integer value denoting the current day of the week. Details [here](https://learn.microsoft.com/en-us/azure/data-factory/control-flow-expression-language-functions#dayOfWeek){:target="_blank"}.
* `convertFromUtc()`: Convert a UTC timestamp to a different time zone. Details [here](https://learn.microsoft.com/en-us/azure/data-factory/control-flow-expression-language-functions#convertFromUtc){:target="_blank"}.
* `utcNow()`: Get the current UTC Time. Details [here](https://learn.microsoft.com/en-us/azure/data-factory/control-flow-expression-language-functions#utcNow){:target="_blank"}.

### In Conclusion

I'll be honest, this solution seems a bit overly verbose for what's ultimately a simple task. But hey, times have changed, welcome to the [low code revolution](https://www.ben-morris.com/azure-data-factory-myth-code-free-data-warehouse/){:target="_blank"}. If you know of a better way to do this in ADF/Synapse expression language, please let me know. I'll have plenty of code to refactor.
