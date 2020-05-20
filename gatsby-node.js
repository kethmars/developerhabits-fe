const articlesParams = `
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
        color
    }
`;

exports.createPages = async({
    actions: { createPage },
    graphql }
) => {
    const { data } = await graphql(`
        query {
            articleData:allStrapiArticles {
                nodes {
                    ${articlesParams}
                }
            }
            articleCategories:allStrapiCategories {
                nodes {
                    id,
                    name,
                    slug,
                    strapiId
                }
            }
        }
    `);

    const { articleData, articleCategories } = data;

    articleData.nodes.forEach(async article => {
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
                    nodes {
                        ${articlesParams}
                    }
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

    articleCategories.nodes.forEach(async category => {
        const { data: articlesData } = await graphql(`
            query {
                allStrapiArticles(
                    filter: {
                        categories: {
                            elemMatch: {
                                id: {
                                    eq: ${category.strapiId}
                                }
                            }
                        }
                    }
                ) {
                    nodes {
                        ${articlesParams}
                    }
                }
            }
        `);

        createPage({
            path: `/${category.slug}`,
            component: require.resolve('./src/templates/category.js'),
            context: {
                ...category,
                articles: articlesData.allStrapiArticles.nodes || []
            }
        });
    });
};