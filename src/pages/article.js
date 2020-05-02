import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';

import {
    ROW_GAP,
    COLOR_BLUE,
    COLOR_YELLOW,
    COLOR_CYAN,
    PAGE_WIDTH_ARTICLE,
    COLOR_LIGHT_GRAY_2
} from '../constants';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Section from '../components/section';

import {
    H1Title,
    InlineBackground,
    ColorfulTag
} from '../components/text/typography';
import TextWithIcon from '../components/text/textWithIcon';
import ArticlesSection from '../components/articlesSection';
import SubscriptionBlock from '../components/subscriptionBlock';


const FeaturedArticleImage = styled.div`
    width: 100%;
    height: 500px;
    background-image: url(${props => props.src});
    background-size: cover;
    background-position: center;
    background-color: #000;
`;

const ArticleHeader = styled.div`
    width: auto;
    max-width: ${PAGE_WIDTH_ARTICLE};
    height: auto;
    display: flex;
    margin: 0 auto ${ROW_GAP}px auto;
    text-align: center;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`;

const CategoriesWrapper = styled.div`
    margin: 10px auto 30px;

    & > * {
        margin-left: 10px;
        margin-right: 10px;
    }
`;

// TODO: SET ROBOT AS GLOBAL FONT
const ArticleContent = styled.div`
    width: auto;
    max-width: ${PAGE_WIDTH_ARTICLE}px;
    height: auto;
    display: block;
    margin: 40px auto 0;
    font-size: 1.125rem;
    font-family: 'Roboto';
    font-weight: 300;
    line-height: 1.5em;

    &, & > *, h2, h3 {
        font-family: 'Roboto';
    }

    h2, h3 {
        font-weight: 500;
        margin-top: 40px;
    }
`;

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

const IndexPage = () => (
    <Layout>
        <SEO title="Article" />
        <Section
            narrow={true}
            style={{ paddingTop: '40px' }}
        >
            <ArticleHeader>
                <H1Title big>
                    <InlineBackground>
                        This is the blog<br/>
                        we are building :)!
                    </InlineBackground>
                </H1Title>

                <CategoriesWrapper>
                    <ColorfulTag color={COLOR_BLUE}>#growthMindset</ColorfulTag>
                    <ColorfulTag color={COLOR_CYAN}>#devLifestyle</ColorfulTag>
                    <ColorfulTag color={COLOR_YELLOW}>#habits</ColorfulTag>
                </CategoriesWrapper>

                <Icon/>
            </ArticleHeader>

            <FeaturedArticleImage src="https://cdn-prod.medicalnewstoday.com/content/images/articles/322/322868/golden-retriever-puppy.jpg"/>

            <ArticleContent>
                <p>In the first article of this series, I gave some general advice on learning technical topics(especially new programming languages). This piece of writing tries to go more specific by demonstrating a framework I've used to acquire new development knowledge.</p>
                <h2>
                    This is some awesome content
                </h2>
                <p>In the first article of this series, I gave some general advice on learning technical topics(especially new programming languages). This piece of writing tries to go more specific by demonstrating a framework I've used to acquire new development knowledge.</p>
                <h3>More awesome</h3>
                <p>In the first article of this series, I gave some general advice on learning technical topics(especially new programming languages). This piece of writing tries to go more specific by demonstrating a framework I've used to acquire new development knowledge.</p>
                <p>In the first article of this series, I gave some general advice on learning technical topics(especially new programming languages). This piece of writing tries to go more specific by demonstrating a framework I've used to acquire new development knowledge.</p>
            </ArticleContent>
        </Section>

        <ArticlesSection theme="blue" title="Featured articles"/>
        <Section bgColor={COLOR_LIGHT_GRAY_2}>
            <SubscriptionBlock />
        </Section>
    </Layout>
);

export default IndexPage;
