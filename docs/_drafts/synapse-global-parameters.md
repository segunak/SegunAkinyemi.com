---
title: "Global Parameters in Azure Synapse Analytics"
classes: wide
categories:
  - blog
tags:
  - tech
---

One of the more attractive features of [Azure Data Factory](https://docs.microsoft.com/en-us/azure/data-factory/){:target="_blank"} is its support for [global parameters](https://docs.microsoft.com/en-us/azure/data-factory/author-global-parameters){:target="_blank"}. Despite the ostensibly [dogmatic](https://softwareengineering.stackexchange.com/questions/148108/why-is-global-state-so-evil){:target="_blank"} aversion to global variables that some in the software engineering community have, there are times and places where their usage is appropriate, if not preferred.

[Azure Synapse Analytics](https://docs.microsoft.com/en-us/azure/synapse-analytics/){:target="_blank"} (Microsoft's answer to [Databricks](https://databricks.com/){:target="_blank"}) presents many cases where, like Azure Data Factory, having access to global variables would be immensely valuable. But unlike Azure Data Factory, **Synapse does not currently support global variables.** Here are some workarounds.

## Workaround 1

Don't use global variables.
{: .notice--warning}

Just kidding, kinda. If you can find a non-intrusive way to avoid global state in your Azure Synapse Workspace, you'll save yourself some pain. Not that I believe global state is evil or anything, Synapse just doesn't support it right now (keep on eye on [this](https://docs.microsoft.com/en-us/azure/data-factory/author-global-parameters) page to see if that's changed). You know what's better than finding a great workaround? Not needing one at all!

## Workaround 2

Idea - Synapse pipelines are just JSON format. You write a PowerShell script that takes in the path to a Synapse JSON pipeline, finds the parameters of a provided "Parent Most" pipeline and changes their values to whatever you pass in. This is all driven by a configuration JSON file, you define the parameter values in the JSOn and then they are transmuted onto teh Synapse pipeline. Like python .ENV files.

Have a parent pipeline in your Synapse workspace from which all other pipelines are called. Pass parameters from the parent to all dependent child pipelines. Dynamically populate the parent pipeline's parameter values using PowerShell and environment specific configuration files.
{: .notice--success}

By doing such, you'll have achieved something like global parameters in Synapse.

Could we call this bastardized dependency injection? A hash-up mash-up of the composite pattern? Or perhaps simple a twist on the all too common parent-child pattern see across code bases worldwide? The basic idea here is as follows.

1. Have a parent pipeline from which all other dependent pipelines are called. Define a dependent pipeline as any pipeline that needs to access a global parameter. If it needs a global parameter, it must be invoked from the parent.

2. Create input parameters for all children pipelines to receive any global that they need to use.

3. Pass the pipeline level variables/parameters of the parent to all child pipelines, and thus achieve a form of global variable functionality.

The basic idea here is you have a parent pipeline or some hash up mash up of the composite pattern. It's a pattern being used on my team right now that's given us the ability to emulate the native global parameters functionality of Data Factory in Synapse.

This has been problematic for Synapse users, myself included. I've been working on a system that deploys Synapse instances across several Azure subscriptions. Each subscription represents an environment having its own properties and endpoints for the data ingestion and egress activities it performs. In all environments, the same activities need e for its data ingestion and egress activities. From a processing standpoint, the same pipelines and activities can run in each environment, with configuration being the primary difference. It'd be nice to have global variables that could be set per environment and used at the pipeline level, as this would allow for the same pipelines ot be used across environments.

 that has its own linked services and endpoints. 

 on several Synapse based projects I'm working on, and I'm not alone. The threads below come from Synapse users looking to see global variables brought over to the platform.

And so, is there a work around? Is there some way to _hack_ a global variable solution into Synapse?
