---
title: "LemonMetrics"
date: 2026-08-10
draft: false
description: "Introducing LemonMetrics: Energy-per-Token Benchmarking for Local AI"
summary: "Introducing LemonMetrics: Energy-per-Token Benchmarking for Local AI"
categories: ["Service"]
tags: ["AI", "Live"]
#externalUrl: ""
authors:
  - austincasteel

showDate : false
showDateUpdated : false
showHeadingAnchors : false
showPagination : false
showReadingTime : true
showTableOfContents : true
showTaxonomies : true 
showWordCount : false
showSummary : false
showEdit: false
showViews: true
showLikes: true
layoutBackgroundHeaderSpace: false

---


## Introducing LemonMetrics: Energy-per-Token Benchmarking for Local AI

If you run local AI models, you’ve probably looked at tokens/sec.
But speed alone misses the real question: how much energy are you spending per token?

That’s why I built LemonMetrics: an open-source benchmark harness for Lemonade that adds power sampling and reports metrics like:

- J/token
- J/output-token
- tokens/kWh
- wall energy, avg watts, and peak watts

### Why this project exists

Most benchmarks focus on throughput.
For real-world local AI usage, especially on laptops, efficiency matters just as much:

- Is a slightly slower backend actually better on battery?
- Which model/backend combination gives better work-per-joule?
- How do CPU, iGPU, and NPU compare when normalized by energy?

LemonMetrics makes those comparisons explicit and reproducible. This is not just useful for laptops, with the rising costs of energy, these are metrics are becoming more important everyday.

### What it does

- Wraps `lemonade bench --json` so performance metrics come from Lemonade itself
- Samples power during benchmark execution (platform-dependent)
- Measures idle baseline and reports baseline-corrected incremental estimates
- Stores raw artifacts for verification:
  - report.json
  - power.jsonl
  - baseline.jsonl
  - bench.json
  - summary.md
- Gracefully degrades when power data isn’t available (run still completes)

### Where to view results

Public leaderboard and community results:

[https://LemonMetrics.github.io](https://LemonMetrics.github.io)

### Repositories

Core harness:

<!-- [https://github.com/lemonmetrics/lemonmetrics](https://github.com/lemonmetrics/lemonmetrics) -->
{{< github repo="lemonmetrics/lemonmetrics" showThumbnail=true >}}

Results/site repository:

<!-- [https://github.com/lemonmetrics/lemonmetrics-site](https://github.com/lemonmetrics/lemonmetrics-site) -->
{{< github repo="lemonmetrics/lemonmetrics-site" showThumbnail=true >}}

### How to contribute benchmark results

1. Run benchmarks on your machine (preferably on AC power).
2. Commit generated result folders under data/results/....
3. Open a PR in the site repo.
4. CI validates schema and integrity before merge.

Run guide:

[https://github.com/lemonmetrics/lemonmetrics/blob/main/docs/run-it-yourself.md](https://github.com/lemonmetrics/lemonmetrics/blob/main/docs/run-it-yourself.md)

Methodology (how metrics are computed):

[https://github.com/lemonmetrics/lemonmetrics/blob/main/docs/methodology.md](https://github.com/lemonmetrics/lemonmetrics/blob/main/docs/methodology.md)

### Data honesty pledge

The project is strict about data integrity:

- No fabricated power numbers
- Raw benchmark and power artifacts are preserved
- Schema validation is required
- If power can’t be measured reliably on a platform, results are marked unavailable instead of guessed

### Looking for contributors

If you have different hardware (especially diverse CPU/iGPU/NPU devices), your submissions help build a more useful, transparent efficiency leaderboard for everyone.
