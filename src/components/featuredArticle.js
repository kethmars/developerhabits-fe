import React from 'react';
import styled from 'styled-components';

import FeaturedArticleCard from './featuredArticleCard';

const FeaturedArticleWrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
`;

const FeaturedArticleImage = styled.div`
    flex: 0 0 55%;
    width: 55%;
    height: 480px;
    background-image: url(${props => props.src});
    background-size: cover;
    background-position: center;
    position: relative;

    &::before {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: #fff;
        opacity: 0;
        transition: 0.2s ease all;
    }

    &:hover::before {
        opacity: 0.1;
    }
`;

const FeaturedArticle = ({
    imageSrc,
    content,
    categories,
    author,
    title,
    creationDate,
    slug
}) => (
    <FeaturedArticleWrapper>
        <FeaturedArticleImage src={imageSrc} />
        <FeaturedArticleCard
            title={title}
            intro={content && content.substring(0, 200)}
            categories={categories}
            author={author}
            creationDate={creationDate}
            slug={slug}
        />
    </FeaturedArticleWrapper>
);

export default FeaturedArticle;
