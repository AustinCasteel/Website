---
title: "VECTOR - Humble Beginnings"
date: 2023-11-01
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
series_order: 1
seriesOpened: true

---

This is going to be a multipart series delving into the full process and results of VECTOR, a two month University of Alabama in Huntsville Space Hardware Club Challenge to Design, build, program, test, & fly an active payload stabilization system utilizing compressed gas and a series of thrusters to control payload rotation for collecting data during a balloon flight, with the unique challenge of recording stable video to an altitude of approximately 30 km.

## Humble Beginnings

The Space Hardware Club provides easy access to hands-on hardware and software engineering experience, along with opportunities to conduct meaningful scientific research for any enrolled UAH student, from your first weeks on campus to graduation and beyond!

Two Month is SHC's introductory project for potential club members. Mentor-led small teams are tasked with building a payload that meets the requirements of their given mission. Mission options vary from year to year for teams based on current SHC projects.

Two Month has many benefits: In the program, you learn about the projects in the SHC as well as get hands-on work with the full engineering process. In addition to academic benefits, it strengthens your resume as a relevant project. Being short-term, the project lets you experience SHC, engineering, and science without any long-term commitment.

Due to my end goal being flight test engineering, I wanted to participate in one of two challenges offered this year. Reaction Control Systems (RCS) challenge or Single Engine Aircraft challenge (SEA). After speaking with mentors, I was slotted into an RCS team. This year, there were just two RCS teams.

## The Start

On the 23rd of August, the teams were formed, and we were off to the races. From here, we had 3 weeks to design and plan out what we were going to do and present it as a Preliminary Design Review (PDR). The things needed for PDR were team structure, defining mission objectives and requirements, providing a Concept of Operations (CONOPS), project timeline, physical/electrical/pneumatic/software design review, testing overview, and lastly, budget.

During this time, we were given a list of components that we had access to and had to pick what we wanted to use and then start planning the pneumatics, electrical, and preliminary mechanical designs.

We elected to use these components based on my recommendations and prior knowledge/experience:

| Purpose    | Product                                        | Qt. |
|------------|------------------------------------------------|-----|
| IMU        | BNO-055                                        | 1   |
| Alt & Temp | BMP390                                         | 1   |
| GPS        | NEO-M9N                                        | 1   |
| MPU        | RPI Pico                                       | 1   |
| Datalogger | OpenLog                                        | 1   |
| Camera     | Runcam 2                                       | 1   |
| Tank       | Carbon Fiber HPA                               | 1   |
| Regulator  | CO2 Air Regulator                              | 1   |
| Solenoids  | AOMAG® 1/8" NPT DC 12V Electric Solenoid Valve | 2   |

Due to already having some of these components myself or similar, I was able to create an avionics mockup very early on to help with mechanical planning and initial electrical work.

{{< carousel images="gallery/*" aspectRatio="3-4" interval="2500" >}}

## PDR

From here, there was preliminary mechanical & pneumatic CAD created, as well as diagramming of various systems. Then, after a quick 3 weeks, we were at PDR. Below is a trimmed version of the PDR.

<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vRmcMkL0q3aF7qCfH5kfOVxWDV8iJrvWMtlo7sXWJpllt8Bg1REurOt1dOmyF0gTA/embed?start=false&loop=true&delayms=3000" frameborder="0" width="960" height="569" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>

After passing PDR, we were given lab access and received all of the components that we requested for the challenge. In the next part of this series, we will dive into the initial building of VECTOR.
