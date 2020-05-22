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
        slug
    }
`;

exports.createPages = async({
    actions: { createPage },
    graphql }
) => {
    console.log('1');
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

    console.log('data', data);

    const { articleData, articleCategories } = data;

    console.log(JSON.stringify(articleCategories, null, 4));

    articleData.nodes.forEach(async article => {
        console.log('2');
        console.log('article.categories[0]', article.categories[0]);
        const firstCategorySlug = article.categories[0].id;

        console.log('frist', firstCategorySlug);

        const { data: relatedArticles } = await graphql(`
            query {
                allStrapiArticles(
                    filter: {
                        categories: {
                            elemMatch: {
                                id: {
                                    eq: "${firstCategorySlug}"
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

        console.log('Related artcles', relatedArticles);

        createPage({
            path: `/articles/${article.slug}`,
            component: require.resolve('./src/templates/article.js'),
            context: {
                ...article,
                relatedArticles: relatedArticles && relatedArticles.allStrapiArticles.nodes
            },
        });
        console.log('3');
    });

    articleCategories.nodes.forEach(async category => {
        console.log('4', category.slug);
        const { data: articlesData } = await graphql(`
            query {
                allStrapiArticles(
                    filter: {
                        categories: {
                            elemMatch: {
                                id: {
                                    eq: "${category.id}"
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

        console.log('Articles data', articlesData);

        createPage({
            path: `/${category.slug}`,
            component: require.resolve('./src/templates/category.js'),
            context: {
                ...category,
                articles: articlesData.allStrapiArticles.nodes || []
            }
        });
        console.log('5');
    });

    console.log('All good in page creation');
};