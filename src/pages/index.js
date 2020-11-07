import React, { useState } from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import MyStory from "../components/story"
import Nav from "../components/nav"
import { rhythm } from "../utils/typography"

const BlogIndex = ({ data, location }) => {
  const siteThemeConfigs = data?.site?.siteMetadata?.siteThemeConfigs

  const navStates = {
    BLOG: 0,
    ABOUT: 1,
  }
  const [currentNav, setCurrentNav] = useState(navStates.BLOG)
  const changeNav = navid => setCurrentNav(navid)
  const isBlog = currentNav === navStates.BLOG
  const isAbout = currentNav === navStates.ABOUT

  const posts = data.allMarkdownRemark.edges
  return (
    <Layout>
      <SEO title="React" />
      <Bio />
      <Nav
        currentNav={currentNav}
        changeNav={changeNav}
        navStates={navStates}
        isBlog={isBlog}
        isAbout={isAbout}
      />
      {isAbout && <MyStory />}
      {isBlog &&
        posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <article
              key={node.fields.slug}
              style={{
                borderTop: "1px solid",
                borderTopColor: siteThemeConfigs?.layoutColor,
                borderBottom: "1px solid",
                borderBottomColor: siteThemeConfigs?.layoutColor,
              }}
            >
              <header>
                <h3
                  style={{
                    marginTop: rhythm(1),
                    marginBottom: rhythm(1 / 4),
                  }}
                >
                  <Link
                    style={{ boxShadow: `none`, color: "inherit" }}
                    to={node.fields.slug}
                  >
                    {title}
                  </Link>
                </h3>
                <small>{node.frontmatter.date}</small>
              </header>
              <section>
                <p
                  dangerouslySetInnerHTML={{
                    __html: node.frontmatter.description || node.excerpt,
                  }}
                />
              </section>
            </article>
          )
        })}
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
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
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
