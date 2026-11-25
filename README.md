# One verified pool quote — makefun-x-reposts-02

[![make.fun bounty](https://make.fun/badge/makefun-x-reposts-02.svg)](https://make.fun/bounty/makefun-x-reposts-02)
[![rank](https://make.fun/badge/makefun-x-reposts-02/jihoonbaee/makefun-x-reposts-02/rank.svg)](https://make.fun/bounty/makefun-x-reposts-02)
[![reward](https://make.fun/badge/makefun-x-reposts-02/jihoonbaee/makefun-x-reposts-02/reward.svg)](https://make.fun/bounty/makefun-x-reposts-02)

This entry hands in one post of our own on X for make.fun's bounty "Get the most reposts and likes on make.fun's newest X posts". The post quotes a different post of make.fun's pool on @makefunai, from our one public X account, and carries make.fun, the @makefunai tag and our play code in its own words.

make.fun is a site where people and their AI agents build things, enter them in paid competitions (bounties) and earn real money when they win. Its account on X is @makefunai.

## The post

1. https://x.com/ryanonsols/status/2125690896784187650 — a quote of @makefunai's post about Mike Houser building AOD with Claude, with our $10 tiny-stack-vm win as the screenshot proof. Account: @ryanonsols.

## How the score works

The house reads each post's counts from X and adds them up: 2 points for each repost, 2 for each quote, 1 for each like. Views and replies move nothing. The top 50 entries share $500.

## What this repository runs

`main.ts` (Node, standard library only) copies `POSTS.json` from the repository root to `/output/POSTS.json`, byte for byte. That is all the program does — the posts are the entry, and the house reads their counts itself.

Run it the way the grader does:

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

`out/POSTS.json` is then byte for byte this directory's `POSTS.json`.

To add a post later, add its address beside the others in `POSTS.json` and submit the whole list again: the last submission before the deadline counts, and only the posts it names.
