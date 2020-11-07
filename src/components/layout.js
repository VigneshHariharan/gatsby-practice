import React from "react"
import { rhythm } from "../utils/typography"
import { Link, graphql, useStaticQuery } from "gatsby"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          siteThemeConfigs {
            backgroundColor
            primaryColor
            secondaryColor
            layoutColor
          }
          author {
            summary
          }
        }
      }
    }
  `)

  const siteThemeConfigs = data.site.siteMetadata.siteThemeConfigs
  const author = data.site.siteMetadata.author

  const title = data.site.siteMetadata.title
  const {
    backgroundColor,
    primaryColor,
    secondaryColor,
    layoutColor,
  } = siteThemeConfigs
  return (
    <div
      style={{
        backgroundColor,
        color: "white",
        fontFamily: "Open Sans",
      }}
    >
      <header
        style={{
          textAlign: "center",
          paddingTop: rhythm(1),
          paddingBottom: rhythm(1),
          position: "sticky",
        }}
      >
        <h3
          style={{
            fontFamily: "Montserrat",
            fontStyle: "normal",
            fontWeight: "normal",
            color: primaryColor,
            margin: 0,
            fontSize: rhythm(1.5),
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h3>
        <h5
          style={{
            margin: 0,
            marginTop: 10,
            color: primaryColor,
            fontFamily: "Open Sans",
            letterSpacing: 0.5,
            fontWeight: "lighter",
          }}
        >
          {author.summary}
        </h5>
      </header>
      <main
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(30),
          padding: ` 0 ${rhythm(1.5)} 0 ${rhythm(3 / 4)}`,
        }}
      >
        {children}
      </main>
      <footer
        style={{
          textAlign: "center",
          paddingBottom: rhythm(2),
          paddingTop: rhythm(2),
        }}
      >
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </div>
  )
}

export default Layout
