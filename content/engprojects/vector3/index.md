---
title: "VECTOR - Tragedy"
date: 2023-11-03
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
series_order: 3
seriesOpened: true

---

This is part 3 of a multipart series delving into the full process and results of VECTOR, a two month University of Alabama in Huntsville Space Hardware Club Challenge to Design, build, program, test, & fly an active payload stabilization system utilizing compressed gas and a series of thrusters to control payload rotation for collecting data during a balloon flight, with the unique challenge of recording stable video to an altitude of approximately 30 km.

## Calm Before the Storm

After a week of late nights and completing the electronics to get everything good to go, I was happy with the way it turned out. On Friday the 13th, I left the lab at 11:45 pm with everything mostly integrated, minus the wingspar assembly, as it just had super glue applied to certain areas, and I was waiting for it to set. Unfortunately, I did not have an image, but without a shell, it was a combination of these two images.

{{< carousel images="gallery1/*" aspectRatio="3-4" interval="2500" >}}

## Drop Test

Then came Saturday, the 14th. I was not at school, but as you might have seen in our PDR, one of the requirements of the payload is to be able to withstand an impact from a fall of a given height. Though the understanding of the height was a lot higher than what it was supposed to be. But not knowing that the team had integrated the full payload, put on the outer shell, and then proceeded with the drop test.

<video width="480" height="852" controls muted>
  <source src="gallery/01.mp4" type="video/mp4">
</video>

As you can see from the video, things did not go the way people were hoping. The following are pictures from the internals

{{< carousel images="gallery2/*" aspectRatio="3-4" interval="2500" >}}

This put a damper on things. On Sunday, I came in to put things back together, but all of the avionics were in a rats' nest, and the mechanical was in pieces. From here, I rebuilt the whole payload to the best state mechanically I could with the parts I had on hand, and then updated some CAD for the laser-cut plates, as I needed to provide more reinforcement to areas. Another task was to untangle the avionics rats' nest. After trying for 5 minutes, I elected to cut all lines and then resolder everything. Luckily, the second time around, this went a whole lot smoother and quicker. But mechanically, we ran into an issue where the laser cutter went down and would not be back up until after flight day. So then we had to use older, non-updated plates that I had as backups, and 3d printed some additional plates to layer up to provide a stronger structure. After the following Tuesday night, I had the whole payload back together and working again.

The Flight Readiness Review deadline was now just days away, and we had yet to test the code properly at this point.
