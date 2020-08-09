import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import { rhythm } from "../utils/typography"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          menuLinks
        }
      }
    }
  `)

  // const { social } = data.site.siteMetadata
  const { menuLinks } = data.site.siteMetadata
  return (
    <div
      style={{
        marginBottom: rhythm(1.5),
        marginTop: rhythm(1),
        fontFamily: "Open Sans",
      }}
    >
      <ul>
        {menuLinks.map(link => (
          <li key={link.name}>
            <a
              href={link.link}
              aria-haspopup={
                link.subMenu && link.subMenu.length > 0 ? true : false
              }
            >
              {link.name}
            </a>
            {link.subMenu && link.subMenu.length > 0 ? (
              <ul aria-label="submenu">
                {link.subMenu.map(subLink => (
                  <li key={subLink.name}>
                    <a href={subLink.link}>{subLink.name}</a>
                  </li>
                ))}
              </ul>
            ) : null}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Bio
