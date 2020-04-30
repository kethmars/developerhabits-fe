import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';

import { COLOR_CYAN_LIGHT, COLOR_BLUE } from '../constants';
import TextWithBackground from './text/textWithBackground';

import TextWithIcon from './text/textWithIcon';
import { ColorfulTag, H1Title } from './text/typography';

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
    width: 100%;
    background-color: #fff;
    padding: 50px;
    box-sizing: border-box;
    z-index: 1;
    position: relative;
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

const CategoryItem = ({ to, children, color }) => (
    <li>
        <a href={to}>
            <ColorfulTag color={color}>{children}</ColorfulTag>
        </a>
    </li>
);

const Icon = () => {
    const data = useStaticQuery(graphql`
        query {
            file(relativePath: { eq: "author.png" }) {
                childImageSharp {
                    fluid(maxWidth: 100) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `);

    return <TextWithIcon
        iconSrc={data.file.childImageSharp.fluid.src}
        text="04.08.2014, Kethmar Salumets"
        alt="cool"
    />;
};

const FeaturedArticleCard = () => (
    <CardWrapper>
        <CardContent>
            <Icon/>

            <H1Title>
                <TextWithBackground>
                    Generalist vs specialists:<br/>
                    video coming soon
                </TextWithBackground>
            </H1Title>

            <Intro>
                Lorem Ipsum is simply dummy text of the printing
                and typesetting industry. Lorem Ipsum
                has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took…
            </Intro>

            <Categories>
                <CategoryItem to="#">#growthMindset</CategoryItem>
                <CategoryItem to="#" color={COLOR_BLUE}>#habits</CategoryItem>
            </Categories>
        </CardContent>
    </CardWrapper>
);

export default FeaturedArticleCard;
