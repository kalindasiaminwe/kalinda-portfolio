import React, { Component } from "react";
import { StaticQuery, graphql } from "gatsby";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import {
  faDev,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

import { Link } from "react-scroll";

export default class Footer extends Component {
  render() {
    return (
      <StaticQuery
        query={graphql`
          query footerTitleQuery {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
        render={(data) => (
          <>
            <footer>
              <div className="container py-4">
                <div className="row justify-content-center mt-2">
                  <ul className="list-style-none">
                    <li className="list-inline-item ml-2">
                      <Link
                        to="header"
                        className="link"
                        smooth={true}
                        role="button"
                        aria-label="To the top"
                      >
                        <FontAwesomeIcon icon={faArrowUp} />
                      </Link>
                    </li>
                    <li className="list-inline-item mr-4" alt="site title">
                      &copy; {new Date().getFullYear()}.{" "}
                      {data.site.siteMetadata.title}.
                    </li>
                    <li className="list-inline-item mr-4">
                      <a
                        href="mailto:ksiaminwe@gmail.com?cc=kalinda.siaminwe2323@gmail.com"
                        target="_blank"
                        rel="noreferrer"
                        alt="email link"
                      >
                        <FontAwesomeIcon icon={faEnvelope} />
                      </a>
                    </li>
                    <li className="list-inline-item mr-4">
                      <a
                        href="https://github.com/kalindasiaminwe"
                        target="_blank"
                        rel="noreferrer"
                        alt="github link"
                      >
                        <FontAwesomeIcon icon={faGithub} />
                      </a>
                    </li>
                    <li className="list-inline-item mr-4">
                      <a
                        href="https://www.linkedin.com/in/kalinda-siaminwe-b07550209/"
                        target="_blank"
                        rel="noreferrer"
                        alt="linkedin link"
                      >
                        <FontAwesomeIcon icon={faLinkedin} />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a
                        href="https://dev.to/kalinda_23"
                        target="_blank"
                        rel="noreferrer"
                        alt="dev.to link"
                      >
                        <FontAwesomeIcon icon={faDev} />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </footer>
          </>
        )}
      ></StaticQuery>
    );
  }
}
