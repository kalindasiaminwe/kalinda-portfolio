import React from "react";
import SEO from "../components/seo";

import Layout from "../components/layout";
import Links from "../components/links";
import contactimg from "../images/contactme.png";

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" />
    <section className="contact">
      <div className="container">
        <div className="row mt-4">
          <div className="col-md-8">
            <h1>Contact Me</h1>
            <p>
              Thank you for stoping by. If you have any inquiries or feedback,
              please do not hesitate to reach out. I am available at the
              following social media outlets:
            </p>
            <Links className="links" />
            <p>
              I am currently available for freelance work. My scope of work
              includes but not limited to:
            </p>
            <ul>
              <li>Excel Automation</li>
              <li>Website Scraping Automation</li>
              <li>Data Analysis & Visualisation</li>
              <li>Content Writing </li>
              <li>Administration</li>
            </ul>
          </div>
          <div className="col-lg-4 my-auto">
            <div className="img-container">
              <img src={contactimg} alt="Vector of a man and a phone" />
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default ContactPage;
