import React from 'react';
import { graphql, Link } from 'gatsby';
import styled from 'styled-components';

import {
    PAGE_SIZES,
    COLOR_CYAN_LIGHT,
    COLOR_CYAN,
    COLOR_LIGHT_GRAY,
} from '../constants';

import Section from '../components/section';
import ArticleCard from '../components/articleCard';
import Tag from '../components/text/tag';

const ArticlesWrapper = styled.div`
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: ${PAGE_SIZES.desktop.columnGap}px;
  grid-row-gap: ${PAGE_SIZES.desktop.columnGap}px;

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;

const getArticleCards = (articles = [], offsetColor, limit) =>
    articles
        .slice(0, limit)
        .map(
            ({
                title,
                id,
                user,
                featuredSmall,
                content,
                creationDate,
                categories,
                slug,
            }) => (
                <ArticleCard
                    key={id}
                    imageSrc={featuredSmall?.childImageSharp?.fixed?.src}
                    title={title}
                    intro={content}
                    // extra={article.extra}
                    tag={
                        <>
                            {categories.map(category => 
                                <Tag offsetColor={category?.color}>
                                    <Link to={`/${category?.slug}`}>
                                        {categories && `#${category.name}`}
                                    </Link>
                                </Tag>
                            )}
                        </>
                    }
                    offsetColor={offsetColor}
                    slug={slug}
                />
            )
        );

const ArticlesSection = ({ articles, theme = 'white', title, limit = 3 }) => {
    const isBlue = theme === 'blue';

    const bgColor = isBlue && COLOR_CYAN_LIGHT;
    const offsetColor = isBlue ? COLOR_CYAN : COLOR_LIGHT_GRAY;

    return (
        <Section title={title} bgColor={bgColor}>
            <ArticlesWrapper>
                {getArticleCards(articles, offsetColor, limit)}
            </ArticlesWrapper>
        </Section>
    );
};

export default ArticlesSection;
export const query = graphql`
  fragment ArticlesSectionFragment on StrapiArticles {
    title
    id
    user {
      displayName
      avatar {
        publicURL
      }
    }
    featuredBig: featuredImage {
      childImageSharp {
        fixed(width: 726, quality: 95) {
          src
          srcSet
        }
      }
    }
    featuredSmall: featuredImage {
      childImageSharp {
        fixed(width: 414, quality: 95) {
          src
          srcSet
        }
      }
    }
    content
    creationDate
    categories {
      color
      name
      id
      slug
    }
    slug
  }
`;
