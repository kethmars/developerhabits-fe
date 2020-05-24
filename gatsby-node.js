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
    featuredBig:featuredImage {
        childImageSharp{
            fixed(width: 726, quality: 95) {
                src,
                srcSet
            }
        }
    },
    featuredSmall:featuredImage {
        childImageSharp{
            fixed(width: 414, quality: 95) {
                src,
                srcSet
            }
        }
    },
    content,
    creationDate
    categories {
        name
        id
        color
        slug
    }
`

exports.createPages = async ({ actions: { createPage }, graphql }) =>
  // eslint-disable-next-line consistent-return
  {
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
    `)

    const { articleData, articleCategories } = data

    for (const article of articleData.nodes) {
      const firstCategoryId = article.categories[0].id
      const { data: relatedArticles } = await graphql(`
            query {
                allStrapiArticles(
                    filter: {
                        categories: {
                            elemMatch: {
                                id: {
                                    eq: "${firstCategoryId}"
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
        `)

      await createPage({
        path: `/articles/${article.slug}`,
        component: require.resolve("./src/templates/article.js"),
        context: {
          ...article,
          relatedArticles:
            relatedArticles && relatedArticles.allStrapiArticles.nodes,
        },
      })
    }

    console.log("Artcielca", JSON.stringify(articleCategories.nodes, null, 4))

    for (const category of articleCategories.nodes) {
      const { data: articlesData } = await graphql(`
            query {
                allStrapiArticles(
                    filter: {
                        categories: {
                            elemMatch: {
                                id: {
                                    eq: "${category.strapiId}"
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
        `)

      await createPage({
        path: `/${category.slug}`,
        component: require.resolve("./src/templates/category.js"),
        context: {
          ...category,
          articles: articlesData.allStrapiArticles.nodes || [],
        },
      })
    }
  }
