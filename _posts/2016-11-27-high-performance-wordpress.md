---
layout: post
title:  High Performance WordPress
comments: false
tags: []
link: https://blog.abravenew.com/2016/11/high-performance-wordpress
---
**Warning: This post is of the very geeky type.** We are sharing it because we have greatly benefited from the community around WordPress and want to give back.

**Update 11/3/2017:** I gave a talk at WordCamp Seattle 2017 talking about build processes. It is directly related to this post. The content below is more helpful than the slides, but [download away](https://abravenew.com/site/wp-content/uploads/2017/11/Jacob-Smith-wordcamp-seattle-2017.pdf).

We love WordPress. We use it for our own site. We've also used it across dozen of projects. What used to be a simple blogging platform has grown up and into a capable CMS. In a world of static site generators and JavaScript frameworks, WordPress still powers more than 1/4 of the websites on the Internet.

Think about that for a second, it's an absolutely crazy thought.

But not all WordPress sites are created equally. The ubiquity of the platform has led to some rampant misuses. Recently, a client came to us with a simple WordPress site that wasn't performing as it should. It was taking 2 plus seconds to load.

We were able to reduce that load time to around 500 milliseconds, which sped the site up by 75 percent. The biggest gains came from developing a custom theme for the site. The site was originally created using a well respected commercial theme and add-on visual composer. The theme traded flexibility and ease of use for speed. It was a trade-off our client was unwilling to make.

How we Work
-----------

We use the SASS version of the wonderful [underscores](http://underscores.me/) starter theme. It's a great way to get started.

If you aren't familiar with SASS, it's a CSS Pre-Processor that gives you some powerful tools that make it efficient and elegant to write great CSS. There are WordPress plugins that process SASS, but we don't want to slow down loading by having SASS processed on the server, so we compile the SASS locally.

We use Gulp.js to manage our workflow. To use Gulp, you need to install Node.js. An explanation of how to set this up would require more time than we have here, but a Google search should help you out.

Here's our starter package.json. This is where we have our various task runners defined  

Outside of SASS processing we also use Gulp to minify and concatenate JavaScript and optimize images used by the wrapper. We also use a small development server to speed up refreshes after our local development environment updates.

You can see who these tasks work together in our gulpfile.js  

If you haven't heard of Gulp before, this could be a bit overwhelming. There are some great tutorials out there that will help you get oriented. [This is the one](http://wasimbhalli.com/configuring-gulp-and-browsersync-for-wordpress-_s-theme/) I started with and expanded from there. A very advanced workflow can be found [here](https://ahmadawais.com/my-advanced-gulp-workflow-for-wordpress-themes/).

Essentially what Gulp does is run a series of tasks, watch for changes, and then run those tasks again. In the end, it creates static JS, CSS, and images that you upload. You only need to run this on your local machine, nothing needs to happen on the server.

Concatenating CSS and JS isn't really that interesting in terms of performance gains. People have been doing that for years. But you may notice lines 55-62 of the gulp file where page specific stylesheets are generated.

Some folks advocate that you should put all your styles in a single CSS file, but that creates dozens of unused styles on any given page. With HTTP/1.1 you want to avoid the overhead of loading additional external files. Until we live in an HTTP/2 world, loading more than one CSS file per page hurts performance.

But what if we loaded page specific styles as an inline stylesheet per page? We don't have any overhead penalty, and we can keep page specific rules out of our stylesheets.

There are a few WordPress plugins that allow for this, but storing CSS in the database seems wrong. And if you don't have good caching, you are probably losing any productivity gain since every page has to check for styles from the database.

Enter the inline styles function:  

This is a piece of our standard include. We fire up an abn\_wordpress object in functions.php to enable this functionality. It uses WordPress's built in template hierarchy to look for and include a page specific stylesheet. This means your stylesheets follow the same naming convention of your WordPress php templates.

If you have a front-page.php you create a front-page.css to be included in your homepage.

This is where SASS comes in very handy. It's easy enough to include your variables, mix-ins, and other partial styles in your page specific styles. This keeps your CSS dry with minimal effort.

We've used this technique across a few sites now with great success. Of course, we know there is always room for improvement. If you have thoughts, feel free to comment. If you have a WordPress site that isn't performing like you think it should, get in touch. We can help.

Originally Posted on [A Brave New](https://blog.abravenew.com/2016/11/high-performance-wordpress)