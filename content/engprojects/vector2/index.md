---
title: "VECTOR - It Lives"
date: 2023-11-02
draft: false
description: "This is going to be a multipart series delving into the full process and results of VECTOR, a two month University of Alabama in Huntsville Space Hardware Club Challenge to Design, build, program, test, & fly an active payload stabilization system utilizing compressed gas and a series of thrusters to control payload rotation for collecting data during a balloon flight, with the unique challenge of recording stable video to an altitude of approximately 30 km."
summary: "This is going to be a multipart series delving into the full process and results of VECTOR, a two month University of Alabama in Huntsville Space Hardware Club Challenge to Design, build, program, test, & fly an active payload stabilization system utilizing compressed gas and a series of thrusters to control payload rotation for collecting data during a balloon flight, with the unique challenge of recording stable video to an altitude of approximately 30 km."
categories: ["Aerospace Engineering", "SHC"]
tags: ["HAB", "RCS", "High Altitude", "Reaction Control System"]
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

series: ["VECTOR"]
series_order: 2
seriesOpened: true

---

This is part 2 of a multipart series delving into the full process and results of VECTOR, a two month University of Alabama in Huntsville Space Hardware Club Challenge to Design, build, program, test, & fly an active payload stabilization system utilizing compressed gas and a series of thrusters to control payload rotation for collecting data during a balloon flight, with the unique challenge of recording stable video to an altitude of approximately 30 km.

## It's Alive

From this point, historically, most teams hit the ground running, cobbling something together quickly, and proceed to remake their challenge a good handful of times before they settle on the final version for flight. This is expected for teams of college freshmen who have no experience and minimal knowledge, as they are learning as they go, and more so, following a pseudo-iterative design process. Though due to my prior experience, if we had longer than two months for the full process, I would have loved to do proper iterative design, but since we do not, I really wanted to focus on planning out and doing CADD for every single possible thing as to identify any issues before they could even become problems. Taking this approach also means that we only had to build the payload once, and then it should be good for flight day, but that is just the theory.

The first thing I did after PDR was to do CADD for everything. That included the pneumatics, avionics, & general mechanical structure. Below is the current CAD for the payload (always shows the latest version):

<iframe src="https://myuah311.autodesk360.com/shares/public/SH512d4QTec90decfa6e43f3ab31fda05fb4?mode=embed" width="800" height="600" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true"  frameborder="0"></iframe>

From this point, I also had the preliminary code complete that covered everything needed except for the actual RCS algorithm.

{{< github repo="SHC-Team-Grissom/VECTOR" >}}

## MMR

From here, we had a relatively built payload with only minor issues and a few things left to finish. Then, after 3 weeks of CADD, soldering, & programming, we were at Mission Readiness Review (MMR). Below is a trimmed version of the MMR.

<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vTFHRvg2I_ufVNxfh-LBd_yIxuU2MpPBt6qwnEzW-Keq0JPeQP8zpMVOVGYUHT8BA/embed?start=false&loop=true&delayms=3000" frameborder="0" width="960" height="569" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>

After passing MMR, we had only 2 weeks to finish and perfect everything until the Flight Readiness Review (FRR). We were on track for everything being done within a week, which then leaves a week for testing & perfecting the code, which was good. Until tragedy struck...
