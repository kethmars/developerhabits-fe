require('dotenv').config({
    path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
    siteMetadata: {
        title: 'DeveloperHabits',
        description:
      'A blog for developers who are interested in growth mindset, developer lifestyle and web dev tutorials',
        author: '@developerHabits',
    },
    plugins: [
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-styled-components',
        'gatsby-plugin-eslint',
        'gatsby-transformer-sharp',
        'gatsby-plugin-sharp',
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                name: 'gatsby-starter-default',
                shortName: 'starter',
                startUrl: '/',
                backgroundColor: '#663399',
                themeColor: '#663399',
                display: 'minimal-ui',
                icon: 'src/images/devhabits-icon.png', // This path is relative to the root of the site.
            },
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'images',
                path: `${__dirname}/src/images`,
            },
        },
        {
            resolve: 'gatsby-source-strapi',
            options: {
                apiURL: 'https://developerhabits-cms.herokuapp.com',
                contentTypes: [ 'articles', 'users', 'categories' ],
                queryLimit: 1000,
            },
        },
    ],
};
