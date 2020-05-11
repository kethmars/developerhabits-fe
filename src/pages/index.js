import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import { COLOR_LIGHT_GRAY_2 } from '../constants';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Section from '../components/section';
import SubscriptionBlock from '../components/subscriptionBlock.js';
import ArticlesSection from '../components/articlesSection';
import FeaturedArticle from '../components/featuredArticle';

const IndexPage = ({ data }) => {
    const featuredArticles = data?.featured?.nodes;

    return (
        <Layout>
            <SEO title="Home" />

            {
                featuredArticles[0] &&
                <Section>
                    <FeaturedArticle
                        title={featuredArticles[0]?.title}
                        imageSrc={featuredArticles[0]?.featuredImage?.publicURL}
                        content={featuredArticles[0].content}
                        categories={featuredArticles[0].categories}
                        author={featuredArticles[0].user}
                        creationDate={featuredArticles[0].creationDate || featuredArticles[0].created_at}
                        slug={featuredArticles[0].slug}
                    />
                </Section>
            }

            <ArticlesSection
                articles={data?.latest?.nodes || []}
                theme="white"
                title="Latest articles"
            />
            <ArticlesSection
                articles={data?.featured?.nodes || []}
                theme="blue"
                title="Featured articles"
            />

            <Section bgColor={COLOR_LIGHT_GRAY_2}>
                <SubscriptionBlock />
            </Section>
        </Layout>
    );
};

export const query = graphql`
    query {
        latest:allStrapiArticles(
            sort: {
                fields: [creationDate],
                order: DESC
            }
            limit: 3
        ) {
            nodes {
                ...ArticlesSectionFragment
            }
        }
        featured:allStrapiArticles(
            sort: {
                fields: [creationDate],
                order: DESC
            }
            limit: 3
            filter: {
                categories: {
                    elemMatch: {
                        name: {
                            eq: "featured"
                        }
                    }
                }
            }
        ) {
            nodes {
                ...ArticlesSectionFragment
            }
        }
    }
`;


export default IndexPage;
