module.exports = {
  siteMetadata: {
    title: {
      de: `Martin Reiche - Full Stack Webentwickler`,
      en: `Martin Reiche - Full Stack Web Developer`,
    },
    description: {
      de:
        `Full Stack Webentickler und Data Scientist aus Nürnberg. Entwicklung individueller Webapplikationen und Webseiten. ` +
        `Spezialist für JavaScript: React.js, Node.js, Firebase, Electron, Material UI, Next.js`,
      en:
        `Full stack web developer and data scientist from Nuremberg, Germany. Development of individual web applications und websites. ` +
        `Expert in modern JavaScript technologies: React.js, Node.js, Firebase, Electron, Material UI, Next.js`,
    },
    keywords: {
      de: [
        'Webentwickler',
        'Webentwicklung',
        'Data Scientist',
        'DevOps',
        'CI/CD',
        'Progressive Web Apps',
        'Freelancer',
        'Nürnberg',
        'Erlangen',
        'Fürth',
        'Programmierer',
        'Javascript',
        'Ruby',
        'Python',
        'Node.js',
        'React.js',
        'Graphql',
        'Firebase',
        'Express.js',
        'Next.js',
        'Gatsby.js',
        'Electron',
      ],
      en: [
        'web developer',
        'web development',
        'data scientist',
        'DevOps',
        'CI/CD',
        'Progressive Web Apps',
        'Freelancer',
        'Nuremberg',
        'Erlangen',
        'Fürth',
        'programmer',
        'Javascript',
        'Ruby',
        'Python',
        'Node.js',
        'React.js',
        'Graphql',
        'Firebase',
        'Express.js',
        'Next.js',
        'Gatsby.js',
        'Electron',
      ],
    },
    author: `Martin Reiche`,
  },
  plugins: [
    `gatsby-plugin-top-layout`,
    `gatsby-plugin-material-ui`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Martin Reiche - Fullstack Web Developer`,
        short_name: `Martin Reiche`,
        start_url: `/`,
        background_color: `#fafafa`,
        theme_color: `#008090`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
  ],
};
