import React from "react"

import { rhythm } from "../utils/typography"

const MyStory = ({ siteThemeConfigs }) => {
  const { secondaryColor, layoutColor } = siteThemeConfigs
  return (
    <div
      style={{
        marginBottom: rhythm(1.5),
        marginTop: rhythm(1),
        fontFamily: "Open Sans",
        borderRadius: rhythm(1),
        backgroundColor: layoutColor,
        padding: `${rhythm(2)} ${rhythm(1)} ${rhythm(2)} ${rhythm(1)}`,
      }}
    >
      <h3
        style={{
          margin: 0,
          marginBottom: rhythm(0.3),
        }}
      >
        About Me :
      </h3>
      <p
        style={{
          margin: 0,
          marginBottom: rhythm(0.3),
        }}
      >
        My Name is Vignesh I am an 22 year old, Indian Software engineer working
        and living in Madurai.
      </p>
      <p
        style={{
          margin: 0,
        }}
      >
        While creating a super simple arduino project, i found my interest in
        programming, after that i started studying web development. After I
        graduated with a Mechanical Engineering Degree, i worked at Think42 labs
        as software developer with React and Nodejs.
      </p>
    </div>
  )
}

export default MyStory
