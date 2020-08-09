/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import { rhythm } from "../utils/typography"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          hobbies
          profileSummary
          author {
            name
          }
        }
      }
    }
  `)

  // const { social } = data.site.siteMetadata
  const { hobbies, profileSummary, author } = data.site.siteMetadata
  return (
    <div
      style={{
        marginBottom: rhythm(1.5),
        marginTop: rhythm(1),
        fontFamily: "Open Sans",
      }}
    >
      <h3
        style={{
          margin: 0,
          marginBottom: rhythm(0.5),
          fontSize: rhythm(1.1),
        }}
      >
        Hi, My Name is {author.name}
      </h3>
      <p>{profileSummary}</p>
    </div>
  )
}

export default Bio
