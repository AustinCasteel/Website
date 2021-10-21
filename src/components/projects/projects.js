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
  const techslayers = "images/Techslayers.png"
  const truekey = "images/TrueKey.png"
  const personalcodesite = "images/PersonalCodeSite.png"
  const personallandingsite = "images/PersonalLandingSite.png"
  const personalpdsite = "images/PersonalPDSite.png"
  const astro = "images/Astro.png"
  const aeronau = "images/Aeronau.png"

  return (
    <>
      <h5 className="font-header font-semibold text-front text-sm uppercase mb-3">
        Projects
      </h5>
      {projects.map((project, i) => (
        <Project key={`${project.name}_${i}`} {...project} />
      ))}

      {/* TechSlayers  */}
      <div className="border-t-4 border-line relative flex flex-wrap bg-back-light p-4 lg:p-8 bg-no-repeat text-sm mb-6">
        {techslayers && (
          <div className="w-full pb-4 lg:w-2/5 lg:pr-8 lg:pb-0">
            <ProjectImg alt="TechSlayers" filename="Techslayers.png" />
          </div>
        )}
        <div className="lg:flex-1">
          <h4 className="font-bold">{"Techslayers"}</h4>
          <span>&nbsp;&nbsp;</span>
          {"https://techslayers.com/" && (
            <a
              className="text-front underline break-all hover:opacity-75 transition-opacity duration-150"
              href={"https://techslayers.com/"}
              rel="noreferrer noopener"
              target="_blank"
            >
              live
            </a>
          )}
          <p className="w-full py-4 whitespace-pre-line">
            {
              "TechSlayers developed an on-demand red team suite to validate your cybersecurity effectiveness through fully automated penetration tests while copying a hackers mindset."
            }
          </p>
          <ul className="pr-2">
            {"Live" && <ProjectStatus status={"Live"} />}
            {["GulpJS", "Nunjucks", "Scss", "Vercel"] && (
              <ProjectTags
                tags={[
                  "GulpJS",
                  "Nunjucks",
                  "Scss",
                  "Vercel",
                ]}
              />
            )}
          </ul>

          {"website" && <ProjectIcon icon={"website"} />}
        </div>
      </div>

      {/* TrueKey  */}
      <div className="border-t-4 border-line relative flex flex-wrap bg-back-light p-4 lg:p-8 bg-no-repeat text-sm mb-6">
        {truekey && (
          <div className="w-full pb-4 lg:w-2/5 lg:pr-8 lg:pb-0">
            <ProjectImg alt="TrueKey" filename="TrueKey.png" />
          </div>
        )}
        <div className="lg:flex-1">
          <h4 className="font-bold">{"TrueKey"}</h4>
          {"https://github.com/tech-slayers/TrueKey" && (
            <a
              className="text-front underline break-all hover:opacity-75 transition-opacity duration-150"
              href={"https://github.com/tech-slayers/TrueKey"}
              rel="noreferrer noopener"
              target="_blank"
            >
              github
            </a>
          )}
          <span>&nbsp;&nbsp;</span>
          {"https://docs.techslayers.com/" && (
            <a
              className="text-front underline break-all hover:opacity-75 transition-opacity duration-150"
              href={"https://docs.techslayers.com/"}
              rel="noreferrer noopener"
              target="_blank"
            >
              live
            </a>
          )}
          <p className="w-full py-4 whitespace-pre-line">
            {
              "TrueKey is a Dedicated TechSlayers encryption management program"
            }
          </p>
          <ul className="pr-2">
            {"Live" && <ProjectStatus status={"Live"} />}
            {["NodeJS", "JavaScript", "Electron", "Encryption/Decryption", "GPG", "PGP"] && (
              <ProjectTags
                tags={[
                  "NodeJS",
                  "JavaScript",
                  "Electron",
                  "Encryption/Decryption",
                  "GPG",
                  "PGP",
                ]}
              />
            )}
          </ul>

          {"website" && <ProjectIcon icon={"website"} />}
        </div>
      </div>

      {/* FireBird  */}
      <div className="border-t-4 border-line relative flex flex-wrap bg-back-light p-4 lg:p-8 bg-no-repeat text-sm mb-6">
        {firebird && (
          <div className="w-full pb-4 lg:w-2/5 lg:pr-8 lg:pb-0">
            <ProjectImg alt="Firebird" filename="Firebird.png" />
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
              "Firebird is a project management tool based off Asana/Trello/Zepel where users can keep track of teams, projects, and tasks. Firebird was developed using NodeJS, Express, and React."
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
              "Netlify",
            ] && (
              <ProjectTags
                tags={[
                  "NodeJS",
                  "JavaScript",
                  "Vue",
                  "Ruby",
                  "Shell",
                  "Python",
                  "Netlify",
                ]}
              />
            )}
          </ul>

          {"website" && <ProjectIcon icon={"website"} />}
        </div>
      </div>

      {/* Astro Records */}
      <div className="border-t-4 border-line relative flex flex-wrap bg-back-light p-4 lg:p-8 bg-no-repeat text-sm mb-6">
        {astro && (
          <div className="w-full pb-4 lg:w-1/3 lg:pr-8 lg:pb-0">
            <ProjectImg alt="AstroRecords" filename="Astro.png" />
          </div>
        )}
        <div className="lg:flex-1">
          <h4 className="font-bold">{"Astro Records"}</h4>
          <span>&nbsp;&nbsp;</span>
          {"https://astro-records.com" && (
            <a
              className="text-front underline break-all hover:opacity-75 transition-opacity duration-150"
              href={
                "https://astro-records.com"
              }
              rel="noreferrer noopener"
              target="_blank"
            >
              live
            </a>
          )}
          <p className="w-full py-4 whitespace-pre-line">
            {
              "Astro Records creates music that is safe for streaming and YouTube. Either play it from your favorite music app while you’re live or download it for free to use in your videos."
            }
          </p>
          <ul className="pr-2">
            {"Live" && <ProjectStatus status={"Live"} />}
            {[
              "Wordpress",
            ] && (
              <ProjectTags
                tags={[
                  "Wordpress",
                ]}
              />
            )}
          </ul>

          {"website" && <ProjectIcon icon={"website"} />}
        </div>
      </div>

      {/* Personal Code Site */}
      <div className="border-t-4 border-line relative flex flex-wrap bg-back-light p-4 lg:p-8 bg-no-repeat text-sm mb-6">
        {personalcodesite && (
          <div className="w-full pb-4 lg:w-1/3 lg:pr-8 lg:pb-0">
            <ProjectImg alt="PersonalCodeSite" filename="PersonalCodeSite.png" />
          </div>
        )}
        <div className="lg:flex-1">
          <h4 className="font-bold">{"Personal Code Site"}</h4>
          {"https://github.com/AustinCasteel/Website/tree/Code" && (
            <a
              className="text-front underline break-all hover:opacity-75 transition-opacity duration-150"
              href={"https://github.com/AustinCasteel/Website/tree/Code"}
              rel="noreferrer noopener"
              target="_blank"
            >
              github
            </a>
          )}
          <span>&nbsp;&nbsp;</span>
          {"https://code.austincasteel.com" && (
            <a
              className="text-front underline break-all hover:opacity-75 transition-opacity duration-150"
              href={
                "https://code.austincasteel.com"
              }
              rel="noreferrer noopener"
              target="_blank"
            >
              live
            </a>
          )}
          <p className="w-full py-4 whitespace-pre-line">
            {
              "This is my personal code portfolio website"
            }
          </p>
          <ul className="pr-2">
            {"Live" && <ProjectStatus status={"Live"} />}
            {[
              "NodeJS",
              "JavaScript",
              "Gatsby",
              "Netlify",
            ] && (
              <ProjectTags
                tags={[
                  "NodeJS",
                  "JavaScript",
                  "Gatsby",
                  "Netlify",
                ]}
              />
            )}
          </ul>

          {"website" && <ProjectIcon icon={"website"} />}
        </div>
      </div>

      {/* Personal PD Site */}
      <div className="border-t-4 border-line relative flex flex-wrap bg-back-light p-4 lg:p-8 bg-no-repeat text-sm mb-6">
        {personalpdsite && (
          <div className="w-full pb-4 lg:w-1/3 lg:pr-8 lg:pb-0">
            <ProjectImg alt="PersonalPDSite" filename="PersonalPDSite.png" />
          </div>
        )}
        <div className="lg:flex-1">
          <h4 className="font-bold">{"Personal PD Site"}</h4>
          <span>&nbsp;&nbsp;</span>
          {"https://pd.austincasteel.com" && (
            <a
              className="text-front underline break-all hover:opacity-75 transition-opacity duration-150"
              href={
                "https://pd.austincasteel.com"
              }
              rel="noreferrer noopener"
              target="_blank"
            >
              live
            </a>
          )}
          <p className="w-full py-4 whitespace-pre-line">
            {
              "This is my personal producer/director website for my multimedia & radio tv broadcasting work"
            }
          </p>
          <ul className="pr-2">
            {"Live" && <ProjectStatus status={"Live"} />}
            {[
              "Wordpress",
            ] && (
              <ProjectTags
                tags={[
                  "Wordpress",
                ]}
              />
            )}
          </ul>

          {"website" && <ProjectIcon icon={"website"} />}
        </div>
      </div>

      {/* Personal Landing Site */}
      <div className="border-t-4 border-line relative flex flex-wrap bg-back-light p-4 lg:p-8 bg-no-repeat text-sm mb-6">
        {personallandingsite && (
          <div className="w-full pb-4 lg:w-1/3 lg:pr-8 lg:pb-0">
            <ProjectImg alt="PersonalLandingSite" filename="PersonalLandingSite.png" />
          </div>
        )}
        <div className="lg:flex-1">
          <h4 className="font-bold">{"Personal Landing Site"}</h4>
          {"https://github.com/AustinCasteel/Website/" && (
            <a
              className="text-front underline break-all hover:opacity-75 transition-opacity duration-150"
              href={"https://github.com/AustinCasteel/Website/"}
              rel="noreferrer noopener"
              target="_blank"
            >
              github
            </a>
          )}
          <span>&nbsp;&nbsp;</span>
          {"https://austincasteel.com" && (
            <a
              className="text-front underline break-all hover:opacity-75 transition-opacity duration-150"
              href={
                "https://austincasteel.com"
              }
              rel="noreferrer noopener"
              target="_blank"
            >
              live
            </a>
          )}
          <p className="w-full py-4 whitespace-pre-line">
            {
              "This is my personal landing page for my website"
            }
          </p>
          <ul className="pr-2">
            {"Live" && <ProjectStatus status={"Live"} />}
            {[
              "Html",
              "CSS",
              "JavaScript",
              "Netlify",
            ] && (
              <ProjectTags
                tags={[
                  "Html",
                  "CSS",
                  "JavaScript",
                  "Netlify",
                ]}
              />
            )}
          </ul>

          {"website" && <ProjectIcon icon={"website"} />}
        </div>
      </div>

      {/* Aeronau */}
      <div className="border-t-4 border-line relative flex flex-wrap bg-back-light p-4 lg:p-8 bg-no-repeat text-sm mb-6">
        {aeronau && (
          <div className="w-full pb-4 lg:w-1/3 lg:pr-8 lg:pb-0">
            <ProjectImg alt="Aeronau" filename="Aeronau.png" />
          </div>
        )}
        <div className="lg:flex-1">
          <h4 className="font-bold">{"Aeronau"}</h4>
          <span>&nbsp;&nbsp;</span>
          {"https://Aeronau.com" && (
            <a
              className="text-front underline break-all hover:opacity-75 transition-opacity duration-150"
              href={
                "https://Aeronau.com"
              }
              rel="noreferrer noopener"
              target="_blank"
            >
              live
            </a>
          )}
          <p className="w-full py-4 whitespace-pre-line">
            {
              "Aeronau is a private American astronautical manufacturer and space transportation services company. We are both a research & development company as well as a manufacturing & payload delivery company."
            }
          </p>
          <ul className="pr-2">
            {"Live" && <ProjectStatus status={"Live"} />}
            {[
              "Wordpress",
            ] && (
              <ProjectTags
                tags={[
                  "Wordpress",
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
