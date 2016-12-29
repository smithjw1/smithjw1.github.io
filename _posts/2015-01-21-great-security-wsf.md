---
layout: post
title: Great Security Washington State Ferries
tags: []
---

Since I don't take the ferry nearly as much as I used to, I just got around to turning off email alerts for ferry delays.

To do so, I needed a password I had long forgot so I sent for a password reset. Here's the email I received:

![](/images/15t.png)

You'll see the password is redacted, because it was my actual password. I recognized it because I often use a password across a number of accounts that I don't care about. Password reuse is a security no-no, but it's quite common and when we are talking about my Washington State Ferry account which holds no personal info beyond an outdated address, I'm not terribly concerned about it.

That is when the password is properly secured. The fact that they could send me my actual password means they are either storing it in plain text or a reversible encryption algorithm. Either way it's at significantly more risk than it should be.

Passwords should always be stored using a [salted one way encryption scheme](https://crackstation.net/hashing-security.htm). That way if your database is ever compromised (from inside or outside) only the most common passwords will be compromised.

It is truly lazy programming to be able to spit back a users password and then to send it via email is downright irresponsible.
