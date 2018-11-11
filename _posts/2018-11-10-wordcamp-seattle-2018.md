---
layout: post
title:  WordCamp Seattle 2018
tags: []
---
This is my second year at WordCamp and I'm excited to learn more about creating content and this thing called Gutenberg? Perhaps you've heard of it.

This is how I take notes, so any errors are likely mine not the speaker. I'll be updating this as we go through the weekend.

Keynote: Bridget Willard – Community: Observe, Include, Accept
--------------------------------------------------------------
Bridget is from Orange County. And is Orange County excited for a Seattle crowd. At 9am. On a Saturday. It's difficult.

+ Community is not just a noun, it's a verb
+ We are all just working on a group project like it's 4th grade -- and sometimes we fight like it too
+ We are wired to be connected to each other, and when we are deprived of that connection it affects us spiritually, emotionally, physically
+ "It's so illegally cold in Minnesota"
+ "If you keep talking, I'm going to call on you, because I have a great view."
+ "Did you know that these are all your friends? Sometimes it just helps to hear it." Life happens to people (tell me about it), we need to hold each other in those times
+ Nouns have no meaning, if the behavior doesn't go with it
+ We like to think we make logical decisions, but we make emotional decisions and reverse engineer the logic
+ “We can’t build this thing called WordPress if we all think the same.”
+ Our computers are de-humanizing

She's really talking about hospitality, which is a core value of Christianity (at least as I practice it). It is fascinating to hear someone basically preach on The Sermon on the Mount, but from a totally secular perspective. Observe, Include, and Accept as core values are values of the WordPress community and of the Christian community.

I know that may come as a surprise, based on how Christianity is practiced in the United States today, but for me, and my community it's true.

Andrew Taylor - The Benefits of Testing and Automation
--------------------------------------------------------------
He is a maintainer of websites. We pick up projects and we have to keep them going over time.

+ Maybe there is a better way than shoving everything on a staging site
+ Instead if you test continuously, after every change less messes to detangle
+ Checking things you didn't work on is boring, time consuming, and hard to bill
+ Automated testing is the road less traveled
+ Visual regression as baseline - [Backstop JS](https://github.com/garris/BackstopJ)
+ Examining performance - [Lighthouse](https://developers.google.com/web/tools/lighthouse/)

Automated testing is important in WordPress, but even more important with the work I'm doing at [WebConnex](http;//webconnex.com). Implementing visual regression testing is on my list to get started on day 1, the performance testing will actually be a bit easier to implement.

Jonathan Peck - The other WPML: Machine Learning / Ai in WordPress
-------------------------------------------------------------------
Advocate for [Algorithmia](https://algorithmia.com/), which does Machine Learning hosting. What follows are ideas for how we could use this at WebConnex.

+ Recommender engine - show the right race length
+ AI based, dynamic ambassador discount
+ Use tweet sentiment to figure out how people feel about the event
+ Team name/GroupRev suggestion based on past performance
+ Suggestion on fields to add/remove based on performance
+ Object detection for alt tags of images
+ Text summarization for meta descriptions
+ Automated statement images for social media (Cloudinary)

This talked walked a fine line between pitch and information. I think it ended up fairly pitchy, but the service looks helpful, so I care a bit less.


Taylor Waldon - Making Content Part of Company Culture
-------------------------------------------------------
Taylor has been doing content since college working at a food service company.

+ Basic permission marketing thinking create: relevant, timely, expected
+ If you are creating the content out of the final publishing medium, you need to re-edit
+ Content Matrix

   | **Hooks** | **Persona 1** | **Persona 2** |
   | Value | Key Message | Key Message |

+ Blog Post Template
  + title
  + author
  + category
  + image direction
  + target audience
  + offer/value
  + keyword
  + hook/meta description
+ Schedule, free Google calendar if you need more [CoSchedule](https://coschedule.com/)

This talk was done in 20 minutes. It was actually a significantly dense introduction to content management. As someone immersed in that world for years it was helpful. If I were brand new, I don't think I would have gotten as much out of it.

Bob Dunn - How to Repurpose a Single Piece of Content Into a Lot of Content
----------------------------------------------------------------------------
I turned a camera on for this session and counted people there were 90 people +/- 5 at this session.

+ Internal links give Google a roadmap for your website, basically pillar pages
+ Updating content is the biggest way he grows his traffic
  + Tweaks: add content, links to newer posts, but all in context
  + Turns: revive or bury posts, deleting is the easy way with redirect, harder way is to rethink
  + Twists: save as draft, rewrite, and schedule
+ Set up links as post title (no dates in URL)
+ Use audio and video (duh), turn audio into videoless video, less duh
+ [Amazon Polly](https://aws.amazon.com/polly/) to transcribe text posts to audio
+ Extractions: Inverviews, tips, lists
+ One post serves all
  + Monday: email list
  + Tuesday: blog
  + Wednesday: talking head video
  + Thursday: podcast
+ When re-using content make sure to use canonical URLs for your extractions
+ He's tried time and again to make money from his most popular blog post, but he just can't - he just makes people happy

It's a good reminder to look at content after it's published and re-link it to more modern content.


Devin Walker - If You Build It (Right), They Will Come – Creating Truly Valuable WordPress Products and Services
-----------------------------------------------------------------------------------------------------------------
Devin works for Give WP. He started his talk going through a bunch of different business models from freelancer to large company.

+ Thinking about Why first [Start with Why](https://startwithwhy.com/)
+ GiveWP's mission is to democratize generosity, so you don't have to pay a SaaS provider
+ There are both product and service opportunities on top of WordPress
+ GiveWP started as a services company that was building nonprofit sites and was hacking together a donation solution
+ Advocating functional specs, I'm not a fan, I say build the thing ala 37Signals.
+ If your idea is a car, don't start with a wheel, start with a scooter

I'm not sure how true the "If you build it they will come" message is for WordPress tools. The overall, measured, systematic approach to starting a business Devin set out does mean success is more likely, but not assured.


Andrea Zoellner - Storytelling with Gutenberg: How to Use the New Editor to Boost Your Blog
-------------------------------------------------------------------------------------------
Andrea is an end user, so she focused on content creation and is excited about Gutenberg as was Taylor, another content creator. It's probably a good sign for WordPress. There are way more content creators using WordPress than developers. Developers are likely much louder voices, but the creators will win out.

+ Referencing [Snowfall](http://www.nytimes.com/projects/2012/snow-fall/index.html#/?part=tunnel-creek)
+ Nearly 1/3 of visitors to page were new to the NY Times
+ "With Gutenberg anyone can Snowfall"

Gutenberg tips

1. Add styles to your text
1. Diversify your images - use gallery to display 3- or 4-up feature
1. Integrate other post types, Adding shortcodes is easier, but still not as easy as if the shortcode became a block
1. Add multi-media
1. Add breathing room, much better than adding a bunch of empty spaces
1. Add in a call to action, button blocks
1. Simplify your workflow, re-usable blocks

It's very clear that for 95 percent of things you don't need commercial themes anymore. I've long been an advocate of lean, performant custom themes, but Gutenberg makes that argument that much more compelling.


Robert Nissenbaum - A Hypothesis on the Future Impact of Gutenberg on SEO
-------------------------------------------------------------------------
He's not a developer. So all this hullabaloo doesn't matter as much to him. His theory as to "Why Gutenberg?" How we consume content is changing.

+ Mobile is continuing to increase both as a percentage of traffic and time on site
+ If how content is consumed changes, how we publish has to change as well
+ We've done it at the macro level, now we have to think about the micro-content level
+ The web and WordPress isn't going to be about pages, it's about blocks
+ If Yoast (our default SEO tool) thinks about pages, how do we make it think about blocks?
+ What if we did SEO on individual blocks?
+ Perhaps the media library is a cue as to a future content block library
+ Maybe this can be a way to avoid duplicate content, so that Google understands the atomic pieces of content are re-used but the particular composition is unique

This is an interesting theory, but I'm not sold. Google can't figure out what a "block" is, unless it's served as part of a sitemap.xml somehow. It would seem a very large shift from Google to not think about the document as the base unit of the internet. Especially since that's how individuals consume content.

I can see why Google would want to go this way. If we allow Google to serve individual blocks, out of context, then people are using Google not our sites. It's like the worst of AMP.

I do agree that thinking this way will get you better content, so it's sensible on its own.

Jocelyn Mozak - Clone Yourself Through Automation
-------------------------------------------------
Jocelyn is an agency owner and she talked about how she worked on automation in her own business. Specifically looking at how she uses automation in the sales process and onboarding process

> Automation is a mindset.

+ Replies to requests for a website with a questionnaire and a link to schedule a meeting
+ At each step she is sending people to her email marketing and tagging people based on actions and sending automated emails
+ Can't automate the sales call and proposal, but can automate getting the proposal signed
+ Follow-ups through while the proposal is about
+ Once signed, automated email and then back to scheduler
+ Using Gravity forms and Zapier to auto create accounts in multiple software platfoms (Slack, accounting, etc.)
+ After the project, tag the client to automatically ask for testimonials or sell maintenance plan

Jacob Smith - From Developer to Entrepreneur
--------------------------------------------
Oh wait that's me.

[Here are the slides](https://shoeinthedoor.com/files/WordCamp-Seattle-2018-JacobWSmith-Presentation.pdf)
