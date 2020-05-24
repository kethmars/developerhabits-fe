import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql, Link } from 'gatsby';

import { COLOR_CYAN_LIGHT, COLOR_BLUE, COLOR_LIGHT_GRAY } from '../constants';
import TextWithIcon from './text/textWithIcon';
import { ColorfulTag, H1Title, InlineBackground } from './text/typography';

const CardWrapper = styled.div`
    width: calc(100% + 80px);
    margin-left: -80px;
    position: relative;
    z-index: 1;

    &:before {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: ${COLOR_CYAN_LIGHT};
        top: 10px;
        left: 10px;
        z-index: 0;
    }
`;

const CardContent = styled.div`
    display: block;
    position: relative;
    width: 100%;
    padding: 50px;
    z-index: 1;
    background-color: #fff;
    border: solid 1px ${COLOR_LIGHT_GRAY};
    box-sizing: border-box;
`;

const Intro = styled.p`
    width: auto;
    height: auto;
    display: block;
    margin: 20px auto 0;
    font-size: 20px;
    line-height: 1.4em;
    font-family: 'Roboto';
    font-weight: 300;
`;

const Categories = styled.ul`
    width: auto;
    display: block;
    margin: 30px 0 0;
    padding: 0;
    list-style: none;

    li {
        display: inline-block;
        margin: 0 0 0 15px;

        &:first-of-type {
            margin-left: 0;
        }
    }

    a {
        text-decoration: none;
    }
`;

const FeaturedCardTitle = styled(InlineBackground)`
    &:hover {
        text-decoration: underline;
    }
`;

const CategoryItem = ({ to, children, color }) => (
    <li>
        <a href={to}>
            <ColorfulTag color={color}>{children}</ColorfulTag>
        </a>
    </li>
);

const FeaturedArticleCard = ({
    title,
    intro,
    categories,
    author,
    creationDate,
    slug
}) => (
    <CardWrapper>
        <CardContent>
            {JSON.stringify(author)}
            <TextWithIcon
                iconSrc={author?.avatar?.publicURL}
                text={`${creationDate}, ${author.displayName || ''}`}
                alt="cool"
            />

            
            <H1Title style={{ maxWidth: '80%' }}>
                <FeaturedCardTitle
                    to={`/articles/${slug}`}
                    as={Link}
                >
                    { title }
                </FeaturedCardTitle>
            </H1Title>

            <Intro>
                { intro }
            </Intro>

            <Categories>
                {
                    categories.map(category => (
                        <CategoryItem
                            key={category.id}
                            color={category.color}
                            to="#"
                        >
                            #{ category.name }
                        </CategoryItem>
                    ))
                }
            </Categories>
        </CardContent>
    </CardWrapper>
);

export default FeaturedArticleCard;
