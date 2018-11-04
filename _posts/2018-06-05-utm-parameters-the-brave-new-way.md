---
layout: post
title:  UTM Parameters the Brave New Way
comments: false
tags: []
link: https://blog.abravenew.com/utm-parameters-the-brave-new-way
---
If you have never heard of UTM Parameters you are not alone. If you are thinking you know all there is to know, you are equally in good company. We've put together simple, proven steps to a healthy Google Analytics setup. This post synthesizes the combined knowledge of dozens of years of experience and hundreds of campaigns.

UTM parameters are extra strings added to a URL. You can read about them [specifically here](https://support.google.com/analytics/answer/1033863#parameters). There are dozens of blog posts on how to set them up, but none that detail how we do it. We think our setup works well across a bunch of different campaigns, so please do steal away.

We aren't going to cover the basics, so if this is all new to you, the [Wikipedia article](https://en.wikipedia.org/wiki/UTM_parameters) is a good primer.

General Do's and Dont's
-----------------------

*   **DO** use utm\_source, utm\_medium, and utm\_campaign. It's important to use all three.
*   **DON'T** use utm\_keyword for anything but keywords. Some people use it for other bits of data, but it gets confusing.
*   **DO** add utm parameters to outbound email links, social advertising, organic social, bing, just about anything.
*   **DON'T** add utm parameters to AdWords (Google does it automatically) or links on your website (this will result in over counting some stats and undercounting others, it's a bad scene).
*   **DO** use a consistent naming convention. More on that below.
*   **DON'T** use spaces or special characters.
*   **DO** keep track of your parameters. In a sheet [like this](https://docs.google.com/spreadsheets/d/1n8zVZUPFK88ELGm8UCUQWq0A65FIKjNbULt821gZebs/edit?usp=sharing) one.

utm\_medium
-----------

We look at medium as the biggest funnel. Here are the mediums we generally use:

*   **social** - for _organic_ social posts
*   **email** - for email, both automated and traditional
*   **cpc** - for non-AdWords paid search
*   **cpp** - for paid Social
*   **display** - for non-AdWords display
*   **affiliate** \- for link shares, guest blog posts, etc.

We use these mediums to fit into Google's [default channel definitions](https://support.google.com/analytics/answer/3297892?hl=en). It makes reporting in Google Analytics (where all this data ends up) much cleaner.

The only interesting one is cpp for paid Social. We chose that to direct that traffic into the "Other Advertising" channel. We have no idea what cpp stands for, so we aren't worried about data collisions with other mediums.

We could have kept the medium "social," but we were finding it was difficult to differentiate paid efforts when we had an integrated campaign.

utm\_source
-----------

The middle of the funnel is source. This one gets more specialized by client and medium. In social (both paid and organic) we use the name of the network. Same thing with ad networks.

In email, we often use an audience name for traditional one-to-many emails and a more generic type for automated one-to-one emails.

For example if you send a monthly email to all customers, we might use "customers" as the source. If we have a follow up email stream after a white paper download, we would use "whitepaper" or "resource." New donor steams might use "welcome."

Remember, you have one more level with utm\_campaign. Think about how you would want to roll up your reporting and group similar emails with utm\_source.

utm\_campaign
-------------

The most granular level is campaign. This should clearly identify the individual effort and be shared across sources and mediums. That's the real power of utm\_parameters. To be able to both report by campaign and by channel and in combination.

These are very client specific. We've used "newcustomer" "deardonor" "may2018" to name just a few. You do have a decision here if your campaigns are run annually or even several times a year.

Say you have an annual campaign called "Power of One." That campaign name could be "powerofone" or "powerofone2018." We wouldn't suggest "powerofone18" as it's not immediately clear that 18 is a year.

By adding the year you make it easy to report on annual results regardless of the timeframe selected, but more difficult to report across years. We do it both ways, but our preference is to not include the year.

utm\_content
------------

Remember when I said that utm\_campaign was the most granular? Well not exactly. We use utm\_content in a few specific situations.

1.  When we are running a test to differentiate test panels
2.  When we have a multi-email automated stream to differentiate between messages

That's it, we don't use it often, but it can come in handy.

A Word About Testing
--------------------

It's important to test your utm parameters to make sure they are set up properly. Fortunately, Google Analytic's real time reporting includes a report by campaign. There's a [great video](https://www.youtube.com/watch?v=2vSIisd_ZvM) on how to do this. Please excuse the intro music and the use of a delta as an "A".

Train the Team
--------------

Last, but not least, you have to train your team (and maybe a partner or two) on your conventions and rules. Without shared understanding about how things are done, you can get into hot water fast.

We have come round to these methods after years of learning. But we know there are smart people reading this, so share your favorite utm tip or trick in the comments.

Originally Posted on [A Brave New](https://blog.abravenew.com/utm-parameters-the-brave-new-way)