import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import {
    COLUMN_GAP,
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
    grid-column-gap: ${COLUMN_GAP}px;
`;

const getArticleCards = (articles = [], offsetColor) => (
    articles.slice(0, 3).map(({
        title,
        id,
        user,
        featuredImage,
        content,
        creationDate,
        categories,
        slug
    }) => (
        <ArticleCard
            key={id}
            imageSrc={featuredImage && featuredImage.publicURL}
            title={title}
            intro={content}
            // extra={article.extra}
            tag={<Tag offsetColor={categories[0]?.color}>{categories && categories[0].name}</Tag>}
            offsetColor={offsetColor}
            slug={slug}
        />
    ))
);

const ArticlesSection = ({
    data,
    articles,
    theme = 'white',
    title
}) => {
    const isBlue = theme === 'blue';

    const bgColor = isBlue && COLOR_CYAN_LIGHT;
    const offsetColor = isBlue ? COLOR_CYAN : COLOR_LIGHT_GRAY;

    return (
        <Section title={title} bgColor={bgColor}>
            <ArticlesWrapper>
                {
                    getArticleCards(articles, offsetColor)
                }
            </ArticlesWrapper>
        </Section>
    );
};

export default ArticlesSection;
export const query = graphql`
  fragment ArticlesSectionFragment on StrapiArticles {
    title,
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
        color
        name
        id
    },
    slug
  }
`;
