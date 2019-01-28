module.exports = {
  siteMetadata: {
    title: 'Gray Sutherland',
    description: 'Home page for Gray Sutherland, a front-end web developer.',
    author: '@grayontheweb',
  },
  plugins: [
    'gatsby-plugin-favicon',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    'gatsby-plugin-sharp',
    'gatsby-transformer-json',
    'gatsby-transformer-remark',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'resume',
        path: `${__dirname}/data/resume/`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'home',
        path: `${__dirname}/data/home/`,
      },
    },
  ],
  mapping: {
    'ResumeJson.education': 'EducationJson',
    'ResumeJson.experience': 'ExperienceJson',
    'ResumeJson.skills': 'SkillsJson',
  },
};
