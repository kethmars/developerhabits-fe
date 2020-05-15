import React from 'react';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';

import {
    ROW_GAP,
    COLOR_BLUE,
    PAGE_WIDTH_ARTICLE,
    COLOR_LIGHT_GRAY_2
} from '../constants';

import Layout from '../components/layout';
import SEO from '../components/seo';
import SocialMediaBar from '../components/social-media-bar';
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
    position: relative;

    &, & > *, h2, h3 {
        font-family: 'Roboto';
    }

    h2, h3 {
        font-weight: 500;
        margin-top: 40px;
    }
`;

const IndexPage = ({ pageContext }) => (
    <Layout>
        <SEO title={pageContext.title} />
        <Section
            narrow={true}
            style={{ paddingTop: '40px' }}
        >
            <ArticleHeader>
                <H1Title big>
                    <InlineBackground>
                        { pageContext.title }
                    </InlineBackground>
                </H1Title>

                <CategoriesWrapper>
                    {
                        pageContext.categories.map(category => (
                            <ColorfulTag
                                key={category.id}
                                color={COLOR_BLUE}
                            >
                                #{category.name}
                            </ColorfulTag>
                        ))
                    }
                </CategoriesWrapper>

                <TextWithIcon
                    iconSrc={pageContext.user.avatar.publicURL}
                    text={`${pageContext.creationDate || pageContext.created_at || ''} ${pageContext.user.displayName || ''}`}
                    alt={pageContext.user.displayName || ''}
                />
            </ArticleHeader>
            
            {
                pageContext?.featuredImage?.publicURL &&
                <FeaturedArticleImage src={pageContext.featuredImage.publicURL} />
            }

            <ArticleContent>
                <SocialMediaBar />
                <ReactMarkdown
                    escapeHtml={false}
                    source={pageContext.content}
                />
            </ArticleContent>
        </Section>
        {
            pageContext.relatedArticles && pageContext.relatedArticles.length ?
                <ArticlesSection
                    theme="blue"
                    title="Related articles"
                    articles={pageContext.relatedArticles}
                /> :
                ''
        }

        {/* <Section bgColor={COLOR_LIGHT_GRAY_2}>
            <SubscriptionBlock bgColor={COLOR_LIGHT_GRAY_2} />
        </Section> */}
    </Layout>
);

export default IndexPage;
