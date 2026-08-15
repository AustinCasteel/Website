---
title: "LemonMetrics"
date: 2026-08-10
draft: false
description: "Measure **energy per token** and peak power for [Lemonade](https://github.com/lemonade-sdk/lemonade) local AI servers — across CPUs, iGPUs, and NPUs."
summary: "Measure **energy per token** and peak power for [Lemonade](https://github.com/lemonade-sdk/lemonade) local AI servers — across CPUs, iGPUs, and NPUs."
categories: ["Live", "Service"]
tags: ["AI"]
externalUrl: "https://lemonmetrics.github.io"
authors:
  - austincasteel

showDate : false
showDateUpdated : false
showHeadingAnchors : false
showPagination : false
showReadingTime : false
showTableOfContents : true
showTaxonomies : true 
showWordCount : false
showSummary : true
showEdit: false
showViews: true
showLikes: true
layoutBackgroundHeaderSpace: false

#groupByYear : false

---

## LemonMetrics

Measure **energy per token** and peak power for [Lemonade](https://github.com/lemonade-sdk/lemonade) local AI servers — across CPUs, iGPUs, and NPUs.

```
J/token   ← the metric nobody ships
tokens/s  ← the metric everybody ships
```

Lemonade already benchmarks tokens/sec, time-to-first-token, and memory.
LemonMetrics wraps that benchmark with a power-sampling layer so you can answer the question that actually matters for laptops: **how much battery does this model burn per token?**

Built as an open-source, MIT-licensed harness. Community members run it on their own machines and submit the results to the public site ([lemonmetrics.github.io](https://lemonmetrics.github.io)) by opening a pull request on the [lemonmetrics-site](https://github.com/lemonmetrics/lemonmetrics-site) repository.

## Why energy

Running a model "fast" is one thing. On a laptop — where the CPU, iGPU, and NPU on a chip like the Ryzen AI 9 all sit a few watts apart — the interesting comparison is **work done per joule**. J/token makes cross-backend comparison honest: an NPU that runs 30% slower but uses half the power is the better laptop experience.

## What it does

- Wraps `lemonade bench --json` — performance metrics come from Lemonade itself
- Samples platform power (Linux `hwmon` / Intel `rapl` / `rocm-smi`, macOS `powermetrics`, the latter auto-configured via a one-time scoped prompt) in a background thread during the whole benchmark
- Computes wall energy, **J/token**, J/output-token, and tokens/kWh
- Measures an idle baseline and reports **incremental** (baseline-corrected) energy estimates alongside the authoritative wall numbers
- Captures a machine fingerprint + ambient snapshot (AC vs battery, thermals) so results are comparable
- Degrades gracefully: no power source (e.g. Windows, which lacks a reliable real-time source yet) → energy marked unavailable, run still completes
- Writes `report.json`, raw `power.jsonl`, `baseline.jsonl`, raw `bench.json`, and a Markdown summary per run
