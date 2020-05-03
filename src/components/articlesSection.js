import React from 'react';
import styled from 'styled-components';

import {
    COLUMN_GAP,
    COLOR_BLUE,
    COLOR_YELLOW,
    COLOR_GREEN,
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

const articleCards = [
    {
        imageSrc: 'https://www.bloomberg.com/graphics/2018-almost-junk-credit-ratings/img/lede-4.jpg',
        title: '1 Pair programming - learn, teach and code at the same time',
        intro: `Lorem Ipsum is simply dummy text
        of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
        text ever since the 1500s…`,
        extra: '04-03-2020, Kethmar Salumets',
        tagOffsetColor: COLOR_YELLOW,
        tagText: '#tutorials'
    },
    {
        imageSrc: 'https://cdn-prod.medicalnewstoday.com/content/images/articles/322/322868/golden-retriever-puppy.jpg',
        title: 'Pair programming - learn, teach and code at the same time',
        intro: `Lorem Ipsum is simply dummy text
        of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
        text ever since the 1500s…`,
        extra: '04-03-2020, Kethmar Salumets',
        tagOffsetColor: COLOR_YELLOW,
        tagText: '#tutorials'
    },
    {
        imageSrc: 'https://cdn-prod.medicalnewstoday.com/content/images/articles/322/322868/golden-retriever-puppy.jpg',
        title: 'Pair programming - learn, teach and code at the same time',
        intro: `Lorem Ipsum is simply dummy text
        of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
        text ever since the 1500s…`,
        extra: '04-03-2020, Kethmar Salumets',
        tagOffsetColor: COLOR_YELLOW,
        tagText: '#tutorials'
    },
];

const getArticleCards = (articles = [], offsetColor) => (
    articles.map(article => (
        <ArticleCard
            imageSrc={article.imageSrc}
            title={article.title}
            intro={article.intro}
            extra={article.extra}
            tag={<Tag offsetColor={article.tagOffsetColor}>{article.tagText}</Tag>}
            offsetColor={offsetColor}
        />
    ))
);

const ArticlesSection = ({
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
                    getArticleCards(articleCards, offsetColor)
                }
            </ArticlesWrapper>
        </Section>
    );
};

export default ArticlesSection;
