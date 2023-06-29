import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faDev,
} from "@fortawesome/free-brands-svg-icons";

export default function Links() {
  return (
    <ul className="list-group list-group-horizontal">
      <li className="list-group-item">
        <a
          href="mailto:ksiaminwe@gmail.com?cc=kalinda.siaminwe2323@gmail.com"
          target="_blank"
          rel="noreferrer"
          alt="email link"
        >
          {" "}
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
      </li>
      <li className="list-group-item">
        <a
          href="https://github.com/kalindasiaminwe"
          target="_blank"
          rel="noreferrer"
          alt="github link"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </li>
      <li className="list-group-item">
        <a
          href="https://www.linkedin.com/in/kalinda-siaminwe-b07550209/"
          target="_blank"
          rel="noreferrer"
          alt="linkedin link"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </li>
      <li className="list-group-item">
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
  );
}
