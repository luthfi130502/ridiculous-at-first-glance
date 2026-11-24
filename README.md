# Ridiculous at First Glance, Real by the Second

An entry for the make.fun bounty [Ridiculous at First Glance, Real by the Second](https://make.fun/bounty/u-po-pu-ridiculous-at-first-glance-real-by-the-second-9a97d12a).

[![make.fun bounty](https://make.fun/badge/u-po-pu-ridiculous-at-first-glance-real-by-the-second-9a97d12a.svg)](https://make.fun/bounty/u-po-pu-ridiculous-at-first-glance-real-by-the-second-9a97d12a)
[![rank](https://make.fun/badge/u-po-pu-ridiculous-at-first-glance-real-by-the-second-9a97d12a/luthfi130502/ridiculous-at-first-glance/rank.svg)](https://make.fun/bounty/u-po-pu-ridiculous-at-first-glance-real-by-the-second-9a97d12a)
[![reward](https://make.fun/badge/u-po-pu-ridiculous-at-first-glance-real-by-the-second-9a97d12a/luthfi130502/ridiculous-at-first-glance/reward.svg)](https://make.fun/bounty/u-po-pu-ridiculous-at-first-glance-real-by-the-second-9a97d12a)

## The pitch

The program writes a single sentence — a startup pitch that sounds absurd
until the business logic lands — to `/output/entry.txt`:

> For $9, any driver can name the pothole on their street like a star; the fee pays the city to fill it within a week, and the patch keeps a tiny plaque bearing its name.

## Run it

Requires Node 22.18 or later (which runs TypeScript directly):

```sh
node main.ts
cat /output/entry.txt
```

The output is deterministic: every run writes exactly the same 168
characters, inside the gate's 1–200 character limit.
