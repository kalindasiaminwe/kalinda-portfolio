import React from "react";
import SEO from "../components/seo";

import Layout from "../components/layout";
import Image from "../components/image";

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <section className="about">
      <div className="container">
        {/* + Title */}
        <div className="row mt-4 justify-content-center">
          <div className="col-lg-7 col-sm-12 my-auto headline">
            <h1>ABOUT ME</h1>
          </div>
        </div>
        {/* - Title */}

        <div className="row my-4 justify-content-center">
          {/* + Card */}
          <div className="col-lg-7 my-auto">
            <div className="card shadow-sm">
              <div className="card-body">
                <div className="card-text">
                  Hello! I'm Kalinda Siaminwe, and I'm thrilled to have you
                  visit my portfolio. As a software engineer, I am passionate
                  about software development and data science. Through my work,
                  I strive to create innovative software that simplifies complex
                  processes.
                </div>
              </div>
            </div>
          </div>
          {/* - Card */}

          {/* + Image */}
          <div className="col-lg-6 my-auto mx-auto">
            <Image
              fileName="abt.jpg"
              alt="About page"
              className="about-img-wrapper"
            />
          </div>
          {/* - Image */}

          {/* + Card */}
          <div className="col-lg-7 my-auto">
            <div className="card-title">
              <h2>More about me</h2>
            </div>
            <div className="card shadow-sm">
              <div className="card-body">
                <div className="card-text">
                  When I'm not immersed in my professional endeavors, you can
                  find me trying out new food spots, traveling to new
                  destinations, gymming and reading books. <br /> <br />
                  Thank you for taking the time to learn a bit about me. I am
                  excited to connect with fellow professionals, collaborators,
                  and clients who share my passion for tech. If you have any
                  questions or would like to explore potential opportunities,
                  please feel free to reach out. Let's create something
                  extraordinary together!
                </div>
              </div>
            </div>
          </div>
          {/* - Card */}
        </div>
      </div>
    </section>
  </Layout>
);
export default AboutPage;
