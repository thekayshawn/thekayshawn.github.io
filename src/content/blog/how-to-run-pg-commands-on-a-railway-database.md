---
draft: false
title: "How to run PG commands on a Railway database"
snippet: "Lemme tell you how to run psql and pg_dump on a Railway database, no BS, promise"
image:
  {
    src: "./images/how-to-run-pg-commands-on-a-railway-database.jpg",
    alt: "How to run PG commands on a Railway database",
  }
publishDate: "2025-11-01 15:00"
category: "Tutorials"
author: "Kashan Ahmad"
tags: ["Railway", "pg_dump", "Postgres"]
---

Just like the [last post](./how-to-connect-to-a-railway-database-using-dbeaver.md), I love [Railway](https://railway.com), and I always use it for my databases.

I was doing some sus work on my production DB for a client's website, so ofc I didn't wanna nuke it, so I thought well let's back it up and then I'll restore if shit goes south.

Now, ofc I shouldn't be doing this, I should have a separate experimental/development PG instance where I do this, but this is a site that isn't even live + I'm the only one working there, plus testing directly in prod gives you the maximum speed required to escape humanity's biological limitations.

That being said, here's how you run pg_dump on a PG instance through the Railway proxy:

```
pg_dump "insert public connection string here" -f file-name.sql
```

Copy and paste the `DATABASE_PUBLIC_URL`, keep the quotation marks.
That easy, make sure you got postgres installed on your system, super easy to do using homebrew:

```
brew install postgres
```

If you get an error about version mismatch from pg_dump, check what version you have installed:

```
pg_dump --version
```

If your version is older than the one Railway is using (the error will literally say this), install the matching version, for me it was version 16.10, so I used:

```
brew install postgres@16
```

Follow the post-install instructions homebrew provides and you should be good to go.

For psql, it's also very simple:

```
psql "insert your connection string here" < your-sql-file.sql
```

That's it, that's all there is to it, have fun.

Btw, I learnt this while creating that development instance of PG and copying the production instance's data to the dev instance, gonna go live, can't blow prod up.

Adios, amigos 👋
