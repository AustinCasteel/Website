import React from "react"
import Project from "./project"
import { arrayOf, shape, ProjectType } from "../../types"
import ProjectIcon from "./project-icon"
import ProjectStatus from "./project-status"
import ProjectTags from "./project-tags"
import ProjectImg from "./project-image"
// import Img from "gatsby-image"

const Projects = ({ projects }) => {
  const naomi = "images/Naomi.png"
  const firebird = "images/Firebird.png"

  return (
    <>
      <h5 className="font-header font-semibold text-front text-sm uppercase mb-3">
        Projects
      </h5>
      {projects.map((project, i) => (
        <Project key={`${project.name}_${i}`} {...project} />
      ))}

      {/* FireBird  */}
      <div className="border-t-4 border-line relative flex flex-wrap bg-back-light p-4 lg:p-8 bg-no-repeat text-sm mb-6">
        {firebird && (
          <div
            className="w-full pb-4 lg:w-2/5 lg:pr-8 lg:pb-0"
            style={{ width: 450 }}
          >
            <ProjectImg
              alt="Firebird"
              filename="Firebird.png"
              style={{ height: 350 }}
            />
          </div>
        )}
        <div className="lg:flex-1">
          <h4 className="font-bold">{"Firebird"}</h4>
          {"https://github.com/Firebird/Firebird" && (
            <a
              className="text-front underline break-all hover:opacity-75 transition-opacity duration-150"
              href={"https://github.com/Firebird/Firebird"}
              rel="noreferrer noopener"
              target="_blank"
            >
              github
            </a>
          )}
          <span>&nbsp;&nbsp;</span>
          {"https://firebird.pm/" && (
            <a
              className="text-front underline break-all hover:opacity-75 transition-opacity duration-150"
              href={"https://firebird.pm/"}
              rel="noreferrer noopener"
              target="_blank"
            >
              live
            </a>
          )}
          <p className="w-full py-4 whitespace-pre-line">
            {
              "Firebird is a project management tool based off Asana/Trello where users can keep track of teams, projects, and tasks. Firebird was developed using NodeJS, Express, and React."
            }
          </p>
          <ul className="pr-2">
            {"Live" && <ProjectStatus status={"Live"} />}
            {["NodeJS", "JavaScript", "React", "Express", "PostgreSQL"] && (
              <ProjectTags
                tags={[
                  "NodeJS",
                  "JavaScript",
                  "React",
                  "Express",
                  "PostgreSQL",
                ]}
              />
            )}
          </ul>

          {"website" && <ProjectIcon icon={"website"} />}
        </div>
      </div>

      {/* Project Naomi */}
      <div className="border-t-4 border-line relative flex flex-wrap bg-back-light p-4 lg:p-8 bg-no-repeat text-sm mb-6">
        {naomi && (
          <div className="w-full pb-4 lg:w-1/3 lg:pr-8 lg:pb-0">
            <ProjectImg alt="Naomi" filename="Naomi.png" />
          </div>
        )}
        <div className="lg:flex-1">
          <h4 className="font-bold">{"Project Naomi"}</h4>
          {"https://github.com/naomiproject/Naomi" && (
            <a
              className="text-front underline break-all hover:opacity-75 transition-opacity duration-150"
              href={"https://github.com/naomiproject/Naomi"}
              rel="noreferrer noopener"
              target="_blank"
            >
              github
            </a>
          )}
          <span>&nbsp;&nbsp;</span>
          {"https://projectnaomi.com" && (
            <a
              className="text-front underline break-all hover:opacity-75 transition-opacity duration-150"
              href={
                "https://projectnaomi.com"
              }
              rel="noreferrer noopener"
              target="_blank"
            >
              live
            </a>
          )}
          <p className="w-full py-4 whitespace-pre-line">
            {
              "The Naomi Project is an open source, privacy focused, technology agnostic platform for developing always-on, voice-controlled applications!"
            }
          </p>
          <ul className="pr-2">
            {"Live" && <ProjectStatus status={"Live"} />}
            {[
              "NodeJS",
              "JavaScript",
              "Vue",
              "Ruby",
              "Shell",
              "Python",
            ] && (
              <ProjectTags
                tags={[
                  "NodeJS",
                  "JavaScript",
                  "Vue",
                  "Ruby",
                  "Shell",
                  "Python",
                ]}
              />
            )}
          </ul>

          {"website" && <ProjectIcon icon={"website"} />}
        </div>
      </div>
    </>
  )
}
Projects.propTypes = {
  projects: arrayOf(shape(ProjectType)),
}

export default Projects
