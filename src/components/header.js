import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import frontLogo from "../css/logo/bistro-logo@2x.png"
import backLogo from "../css/logo/bistro-logo-K@2x.png"

const Header = ({ siteTitle }) => (
  <header className="navbar" role="banner">
    <title>{siteTitle}</title>
    <div className="container">
      {/* <!-- logo and mobile nav button --> */}
      <Link to="/" className="logo">
        <div className="shell">
          <img
            className="face front"
            src={frontLogo}
            alt="Bistro Studios"
          />
          <img className="face back" src={backLogo} alt="" />
        </div>
      </Link>
      {/* <!-- right nav --> */}
      <button className="navbar-toggle collapsed" type="button">
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
      </button>
    </div>
    <div className="cl"></div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
