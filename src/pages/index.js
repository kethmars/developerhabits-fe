import React from 'react';
import { graphql } from 'gatsby';

import { COLOR_LIGHT_GRAY_2 } from '../constants';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Section from '../components/section';
import SubscriptionBlock from '../components/subscriptionBlock.js';
import ArticlesSection from '../components/articlesSection';
import FeaturedArticle from '../components/featuredArticle';

const IndexPage = ({ data }) => {
    const articles = data.allStrapiArticles.nodes;
    const featuredArticle = articles.find(article => (
        article.categories.some(c => c.name === 'featured')
    ));

    return (
        <Layout>
            <SEO title="Home" />

            <Section>
                <FeaturedArticle article={featuredArticle} />
            </Section>

            <ArticlesSection
                articles={articles}
                theme="white"
                title="Latest articles"
            />
            <ArticlesSection
                articles={articles}
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
    query MyQuery {
        allStrapiArticles {
            nodes {
                title,
                id,
                user {
                    displayName
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
`;


export default IndexPage;
