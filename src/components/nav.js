import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { rhythm } from "../utils/typography"

const Nav = ({ currentNav, changeNav, navStates, isBlog, isAbout }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          siteThemeConfigs {
            backgroundColor
            primaryColor
            secondaryColor
            layoutColor
          }
        }
      }
    }
  `)

  const siteThemeConfigs = data.site.siteMetadata.siteThemeConfigs
  const { primaryColor } = siteThemeConfigs
  return (
    <div
      style={{
        marginBottom: rhythm(0.2),
        marginTop: rhythm(0.2),
        fontFamily: "Open Sans",
        display: "flex",
      }}
    >
      <p
        style={{
          marginRight: rhythm(0.6),
          color: isBlog ? primaryColor : "white",
          padding: rhythm(0.2),
          border: "1px solid",
          borderColor: isBlog ? primaryColor : "white",
          cursor: "pointer",
          borderRadius: rhythm(0.3),
          width: rhythm(2.5),
          textAlign: "center",
        }}
        onClick={() => changeNav(navStates.BLOG)}
      >
        Blog
      </p>
      <p
        style={{
          marginRight: rhythm(1),
          color: isAbout ? primaryColor : "white",
          padding: rhythm(0.2),
          border: "1px solid",
          borderColor: isAbout ? primaryColor : "white",
          cursor: "pointer",
          borderRadius: rhythm(0.3),
          width: rhythm(4),
          textAlign: "center",
        }}
        onClick={() => changeNav(navStates.ABOUT)}
      >
        About me
      </p>
    </div>
  )
}

export default Nav
