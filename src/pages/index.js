import React from 'react';
import { graphql } from 'gatsby';

import useIsMobile from '../utils/is-mobile';

import { COLOR_LIGHT_GRAY_2, COLOR_CYAN, COLOR_CYAN_LIGHT } from '../constants';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Section from '../components/section';
import SubscriptionBlock from '../components/subscriptionBlock.js';
import ArticlesSection from '../components/articlesSection';
import FeaturedArticle from '../components/featuredArticle';

const FeaturedArticleSection = ({ isMobile, featuredArticle }) =>
    isMobile ? (
        <ArticlesSection articles={[ featuredArticle ]} theme="white" />
    ) : (
        <Section>
            <FeaturedArticle
                title={featuredArticle?.title}
                imageSrc={featuredArticle?.featuredBig?.childImageSharp?.fixed?.src}
                content={featuredArticle.content}
                categories={featuredArticle.categories}
                author={featuredArticle.user}
                creationDate={
                    featuredArticle.creationDate || featuredArticle.created_at
                }
                slug={featuredArticle.slug}
            />
        </Section>
    );

const IndexPage = ({ data }) => {
    const isMobile = useIsMobile();
    const featuredArticles = data?.featured?.nodes;

    return (
        <Layout>
            <SEO title="Home" />

            {featuredArticles[0] && (
                <FeaturedArticleSection
                    isMobile={isMobile}
                    featuredArticle={featuredArticles[0]}
                />
            )}

            {/* <Section bgColor={COLOR_CYAN_LIGHT}>
                <SubscriptionBlock bgColor={COLOR_CYAN_LIGHT}/>
            </Section> */}

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
        </Layout>
    );
};

export const query = graphql`
  query {
    latest: allStrapiArticles(
      sort: { fields: [creationDate], order: DESC }
      limit: 3
    ) {
      nodes {
        ...ArticlesSectionFragment
      }
    }
    featured: allStrapiArticles(
      sort: { fields: [creationDate], order: DESC }
      limit: 3
      filter: { categories: { elemMatch: { name: { eq: "featured" } } } }
    ) {
      nodes {
        ...ArticlesSectionFragment
      }
    }
  }
`;

export default IndexPage;
