import { Link } from "gatsby";
import React from "react";

import { Component } from "react";
import { StaticQuery, graphql } from "gatsby";

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openMenu: false,
      visibilityClass: "",
    };
  }
  toggleMenu = (value) => {
    this.setState({ openMenu: value });
  };
  render() {
    const { openMenu, visibilityClass } = this.state;
    return (
      <StaticQuery
        query={graphql`
          query headerLandingTitleQuery {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
        render={(data) => (
          <>
            <nav
              id="header"
              className={`navbar navbar-expand-lg ${visibilityClass}`}
            >
              <div className="container">
                <Link className="navbar-brand" to="/">
                  {data.site.siteMetadata.title}
                </Link>
                <button
                  onClick={(_) => this.toggleMenu(!openMenu)}
                  className={`navbar-toggler navbar-toggler-right ${
                    openMenu ? "" : "collapsed"
                  }`}
                  type="button"
                  aria-controls="navbarResponsive"
                  aria-expanded={openMenu}
                  aria-label="Toggle navigation"
                >
                  ⛛
                </button>

                <div
                  className={`collapse navbar-collapse ${
                    openMenu ? "show" : ""
                  }`}
                  id="navbarResponsive"
                >
                  <ul className="navbar-nav ml-auto ">
                    <li className="nav-item my-auto ml-2">
                      <Link className="nav-link" to="/about">
                        About
                      </Link>
                    </li>
                    <li className="nav-item my-auto ml-2">
                      <Link className="nav-link" to="/contact">
                        Contact
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </>
        )}
      />
    );
  }
}
