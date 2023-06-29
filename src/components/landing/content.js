import React, { Component } from "react";
import { StaticQuery, graphql } from "gatsby";
import Resume from "../../data/KalindaSiaminwe_Resume.pdf";
import Transcript from "../../data/KalindaSiaminwe_transcript-cropped.pdf";
import PrePrint from "../../data/Pre-print.pdf";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faCalendar,
  faTerminal,
  faGraduationCap,
  faUserGraduate,
} from "@fortawesome/free-solid-svg-icons";

export default class Content extends Component {
  render() {
    return (
      <StaticQuery
        query={graphql`
          query projectsQuery {
            allProjectsJson {
              edges {
                node {
                  project
                  link
                  description
                  language
                  thing
                }
              }
            }
            allLanguagesJson {
              edges {
                node {
                  id
                  language
                }
              }
            }
          }
        `}
        render={(data) => (
          <>
            <section className="content" id="content">
              <div className="container">
                {/* + Experience section */}
                <div className="subsection">
                  <h2>
                    <span className="dot"></span>EXPERIENCE{" : "}
                  </h2>

                  {/* Work Experience 1 */}
                  <div className="section">
                    <div className="section__content">
                      <div className="card-title">
                        <h3>
                          Institute for Health Measurement Southern Africa (IHM)
                          {"  "}
                        </h3>
                        <h4>
                          <FontAwesomeIcon
                            icon={faBriefcase}
                            className="mr-2"
                          />{" "}
                          Software Developer Intern
                        </h4>
                        <h4>
                          <FontAwesomeIcon icon={faCalendar} className="mr-2" />{" "}
                          Jan 2023 - Present
                        </h4>
                      </div>

                      <div className="card-text">
                        📌 Assist a team of developers on Zambia's largest
                        electronic health care system; SmartCare.
                        <br />
                        📌 Document SmartCare plus 2.0 system modules.
                      </div>
                      <br></br>
                    </div>
                  </div>

                  {/* Work Experience 2 */}
                  <div className="section">
                    <div className="section__content">
                      <div className="card-title">
                        <h3>
                          The University of Zambia
                          {"  "}
                        </h3>
                        <h4>
                          <FontAwesomeIcon
                            icon={faBriefcase}
                            className="mr-2"
                          />{" "}
                          Zambezi Voice Student Fellow
                        </h4>
                        <h4>
                          <FontAwesomeIcon icon={faCalendar} className="mr-2" />{" "}
                          Mar 2022 - Mar 2023
                        </h4>
                      </div>

                      <div className="card-text">
                        📌 Collected text data and speech data for low resource
                        languages in Zambia.
                        <br />
                        📌 Collaborated with a team to construct a speech
                        corpus.
                        <br />
                        📌 Trained and evaulated models.
                        <br />
                        📌 Assisted on documenting the research findings. <br />{" "}
                        <span className="announcement">
                          🎉Our paper Zambezi Voice: A Multilingual Speech
                          Corpus for Zambian Languages has been accepted to the
                          24th INTERSPEECH 2023 Conference to be held in Dublin,
                          Ireland from August 20-24, 2023.
                        </span>{" "}
                        <a
                          href={PrePrint}
                          target="_blank"
                          rel="noreferrer"
                          className="preprint"
                        >
                          See pre-print here!
                        </a>
                      </div>
                      <br></br>
                      <a
                        href={Resume}
                        target="_blank"
                        rel="noreferrer"
                        className="arrow-link"
                      >
                        View My Resume
                      </a>
                    </div>
                  </div>
                </div>
                {/* - Experience section */}

                {/* + Skills section */}
                <div className="subsection">
                  <h2 className="mt-5">
                    <span className="dot"></span>SKILLS{" :"}
                  </h2>
                  <div className="row">
                    {data.allLanguagesJson.edges.map(({ node }, index) => (
                      <div className="col-6 col-md-4" key={index}>
                        <div className="card">
                          <div className="card-text">
                            <div className="card-item">
                              <FontAwesomeIcon
                                icon={faTerminal}
                                className="mr-2 item-icon"
                              />{" "}
                              {node.language}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                {/* - Skills section */}

                {/* + Education section */}
                <div className="subsection">
                  <h2 className="mt-5">
                    <span className="dot"></span>EDUCATION{" : "}
                  </h2>

                  <div className="section">
                    <div className="section__content">
                      <div className="card-title">
                        <h3>The University of Zambia</h3>
                        <h4>
                          <FontAwesomeIcon
                            icon={faGraduationCap}
                            className="mr-2"
                          />
                          Computer Science
                        </h4>
                        <h4>
                          <FontAwesomeIcon
                            icon={faUserGraduate}
                            className="mr-2"
                          />{" "}
                          May 2023
                        </h4>
                      </div>

                      <div className="card-text">
                        <p>
                          📌 I obtained my Bachelor's Degree in Computer Science
                          from the University of Zambia, where I specialized in
                          Software Engineering. <br></br>
                          📌 For my undergraduate thesis, I conducted research
                          on the development of Automatic Speech Recognition
                          models for low resource languages in Zambia.
                        </p>
                      </div>
                      <a
                        href={Transcript}
                        target="_blank"
                        rel="noreferrer"
                        className="arrow-link"
                      >
                        View My Transcript
                      </a>
                    </div>
                  </div>
                </div>
                {/* - Education section */}

                {/* + Projects subsection */}
                <div className="subsection">
                  <h2 className="mt-5">
                    <h3 id="projects"> </h3>
                    <span className="dot"></span>PROJECTS{" :"}
                  </h2>
                </div>
                <section className="section other-projects">
                  {/* <div class="section__title">Other Projects</div> */}
                  <div className="section__content">
                    {data.allProjectsJson.edges.map(({ node }, index) => (
                      <div className="project">
                        <div className="project__name">
                          <a
                            href={node.link}
                            target="_blank"
                            rel="noreferrer"
                            className="arrow-link"
                          >
                            {node.project}
                          </a>
                        </div>
                        <p>{node.description}</p>
                        <div className="project__used">
                          {node.thing.map((thing, index) => (
                            <span className="project__used__item" key={index}>
                              {thing}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                    <a
                      href="https://github.com/kalindasiaminwe/all-projects"
                      target="_blank"
                      rel="noreferrer"
                      className="arrow-link"
                    >
                      View All Projects Here
                    </a>
                  </div>
                </section>
              </div>
              {/* - Projects subsection */}
            </section>
          </>
        )}
      />
    );
  }
}
