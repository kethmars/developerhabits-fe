const path = require(`path`);

exports.createPages = async({
    actions: { createPage },
    graphql }
) => {
    const { data } = await graphql(`
        query {
            allStrapiArticles {
                nodes {
                    title,
                    slug,
                    id,
                    user {
    
                        displayName,
                        avatar {
                            publicURL
                        }
                    },
                    featuredImage {
                        publicURL
                    },
                    content,
                    creationDate
                    categories {
                        name
                        id
                    }
                }
            }
        }
    `);
    
    //TODO: SET UP Debugger;
    if (!data.allStrapiArticles.nodes.length) {
        return;
    }

    data.allStrapiArticles.nodes.forEach(article => {
        createPage({
            path: `/articles/${article.slug}`,
            component: require.resolve('./src/templates/article.js'),
            context: {
                ...article
            },
        });
    });
};