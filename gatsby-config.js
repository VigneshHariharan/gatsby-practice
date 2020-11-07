module.exports = {
  siteMetadata: {
    title: `VIGNESH`,
    profileSummary:
      "I am an 22 year old, Indian Software engineer working at Learnyst, an Ed-tech startup with these technologies: Typescript, React, React Native.",
    techStack: [
      {
        name: "HTML/CSS/Javascript",
      },
      {
        name: `React`,
      },
      {
        name: "React Native",
      },
      {
        name: `Redux`,
      },
      {
        name: "Typescript",
      },
    ],
    siteThemeConfigs: {
      backgroundColor: `#212121`,
      primaryColor: `#14ffec`,
      secondaryColor: `#0d7377`,
      layoutColor: `#323232`,
    },
    author: {
      name: `Vignesh`,
      summary: `Software Engineer, Specializing in Frontend Engineering`,
    },
    description: `A starter blog demonstrating what Gatsby can do.`,
    siteUrl: `https://gatsby-starter-blog-demo.netlify.app/`,
    social: {
      twitter: `@vigneshph22`,
      email: `phivigneshariharan@gmail.com`,
      github: `https://github.com/VigneshHariharan`,
      linkedIn: `www.linkedin.com/in/vignesh-frontend`,
    },
    contactLink: [
      {
        mediaName: `twitter`,
        link: `@vigneshph22`,
      },
      {
        mediaName: "email",
        link: `phivigneshariharan@gmail.com`,
      },
      {
        mediaName: "github",
        link: `https://github.com/VigneshHariharan`,
      },
      {
        mediaName: "linkedIn",
        linkedIn: `www.linkedin.com/in/vignesh-frontend`,
      },
    ],
    hobbies: [
      "Books, anime(dark/suspense/psychological/fantasy genres)",
      "Favourite non fiction book: The subtle art of not giving f**k ",
    ],
    menuLinks: [
      {
        name: "home",
        link: "/",
        subMenu: [],
      },
      {
        name: "about",
        link: "/about",
        subMenu: [],
      },
    ],
  },
  plugins: [
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://vigneshhariharan.github.io`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: ["Open Sans"],
        display: "swap",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-remark-images`,
      options: {
        maxWidth: 590,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          {
            resolve: `gatsby-source-filesystem`,
            options: {
              path: `${__dirname}/content/assets`,
            },
          },
          {
            resolve: `gatsby-source-filesystem`,
            options: {
              path: `${__dirname}/content/blog`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Starter Blog`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#040633`,
        theme_color: `#05FFD2`,
        display: `minimal-ui`,
        icon: `content/assets/gatsby-icon.png`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
  pathPrefix: "",
}
