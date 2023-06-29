import React from "react";

import Image from "../image";
import Links from "../links";

import { Link } from "react-scroll";

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="container h-100">
        <div className="row h-100 justify-content-around">
          {/* + Hero section: Left side */}
          <div className="col-lg-5 my-auto">
            <div className="hero-introduction">
              <h1>
                Hi. I'm Kalinda{" "}
                <span className="wave" role="img" aria-label="Hand wave">
                  👋🏾
                </span>
              </h1>
              <p>Software Engineer and Part-time Freelancer.</p>
              <div className="row">
                <div className="col-xl-6">
                  <Link to="content" class="highlight-link" smooth={true}>
                    Get to know me
                  </Link>
                </div>

                <div className="col-xl-6">
                  <Link to="projects" className="highlight-link" smooth={true}>
                    View My Projects
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* - Hero section: Left side */}

          {/* + Hero section: Right side */}
          <div className="col-lg-4 my-auto">
            <div className="hero-bio">
              <div className="card shadow-sm mb-5">
                <div className="card-body">
                  <div className="icon">
                    <Image
                      fileName="2.png"
                      style={{ width: "5rem", height: "5rem" }}
                      alt="Hero Icon"
                    />
                  </div>
                  <h3 className="card-title">Kalinda Siaminwe</h3>
                  <h4>
                    <span
                      className="mr-1"
                      role="img"
                      aria-label="pin"
                      alt="pin emoji"
                    >
                      📍
                    </span>
                    Lusaka, Zambia
                    <br />
                  </h4>
                  <p className="card-text">
                    Software Engineer |
                    <br />
                    Aspiring Data Scientist
                  </p>
                  <Links />
                </div>
              </div>
            </div>
          </div>
          {/* - Hero section: Right side */}
        </div>
      </div>
    </section>
  );
}
