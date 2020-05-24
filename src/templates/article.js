import React from 'react';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';

import { PAGE_SIZES } from '../constants';

import Layout from '../components/layout';
import SEO from '../components/seo';
import SocialMediaBar from '../components/social-media-bar';
import Section from '../components/section';

import {
    H1Title,
    InlineBackground,
    ColorfulTag,
} from '../components/text/typography';
import TextWithIcon from '../components/text/textWithIcon';
import ArticlesSection from '../components/articlesSection';

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
  max-width: ${PAGE_SIZES.desktop.widthArticle};
  height: auto;
  display: flex;
  margin: 0 auto ${PAGE_SIZES.desktop.rowGap}px auto;
  text-align: center;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const CategoriesWrapper = styled.div`
  margin: 10px auto 30px;

  & > * {
    display: inline-block;
    margin-left: 10px;
    margin-right: 10px;
  }
`;

const ArticleContent = styled.div`
  width: auto;
  max-width: ${PAGE_SIZES.desktop.widthArticle}px;
  height: auto;
  display: block;
  margin: 40px auto 0;
  font-size: 1.125rem;
  font-family: "Roboto";
  font-weight: 300;
  line-height: 1.5em;
  position: relative;

  &,
  & > *,
  h2,
  h3 {
    font-family: "Roboto";
  }

  h2,
  h3 {
    font-weight: 500;
    margin-top: 40px;
  }
`;

const IndexPage = ({ pageContext, location }) => {
    const shareLink = location.href;
    const socialMediaLinks = {
        twitterUrl: `https://twitter.com/share?url=${shareLink}&text=${pageContext.title}&hashtags=developerHabits`,
        linkedinUrl: `https://www.linkedin.com/shareArticle?mini=true&url=${shareLink}`,
        facebookUrl: `https://www.facebook.com/sharer.php?u=${shareLink}`,
    };

    //TODO: Refactor

    return (
        <Layout>
            <SEO
                title={pageContext.title}
                metaImage={pageContext.featuredImage?.publicURL}
            />
            <Section narrow={true} style={{ paddingTop: '40px' }}>
                <ArticleHeader>
                    <H1Title big>
                        <InlineBackground>{pageContext.title}</InlineBackground>
                    </H1Title>

                    <CategoriesWrapper>
                        {pageContext.categories.map(category => (
                            <ColorfulTag key={category.id} color={category.color}>
                                #{category.name}
                            </ColorfulTag>
                        ))}
                    </CategoriesWrapper>

                    <TextWithIcon
                        iconSrc={pageContext.user.avatar?.publicURL}
                        text={`${
                            pageContext.creationDate || pageContext.created_at || ''
                        } ${pageContext.user.displayName || ''}`}
                        alt={pageContext.user.displayName || ''}
                    />
                </ArticleHeader>

                {pageContext?.featuredBig?.childImageSharp?.fixed?.src && (
                    <FeaturedArticleImage src={pageContext?.featuredBig?.childImageSharp?.fixed?.src} />
                )}

                <ArticleContent>
                    <SocialMediaBar {...socialMediaLinks} />
                    <ReactMarkdown escapeHtml={false} source={pageContext.content} />
                </ArticleContent>
            </Section>

            {pageContext.relatedArticles && pageContext.relatedArticles.length ? (
                <ArticlesSection
                    theme="blue"
                    title="Related articles"
                    articles={pageContext.relatedArticles}
                />
            ) : (
                ''
            )}

            {/* <Section bgColor={COLOR_LIGHT_GRAY_2}>
                <SubscriptionBlock bgColor={COLOR_LIGHT_GRAY_2} />
            </Section> */}
        </Layout>
    );
};

export default IndexPage;
