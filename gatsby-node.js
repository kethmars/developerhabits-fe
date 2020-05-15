const articleNodesString = `
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
`;

exports.createPages = async({
    actions: { createPage },
    graphql }
) => {
    const { data:articleData } = await graphql(`
        query {
            allStrapiArticles {
                ${articleNodesString}
            }
        }
    `);
    
    //TODO: SET UP Debugger;
    if (!articleData.allStrapiArticles.nodes.length) {
        return;
    }

    articleData.allStrapiArticles.nodes.forEach(async article => {
        const firstCategory = article.categories[0].id;
        const { data: relatedArticles } = await graphql(`
            query {
                allStrapiArticles(
                    filter: {
                        categories: {
                            elemMatch: {
                                id: {
                                    eq: ${firstCategory}
                                }
                            }
                        },
                        id: {
                            ne: "${article.id}"
                        }
                    }
                ) {
                    ${articleNodesString}
                }
            }
        `);

        createPage({
            path: `/articles/${article.slug}`,
            component: require.resolve('./src/templates/article.js'),
            context: {
                ...article,
                relatedArticles: relatedArticles && relatedArticles.allStrapiArticles.nodes
            },
        });
    });
};