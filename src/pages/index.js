import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';

import {
    COLUMN_GAP,
    COLOR_BLUE,
    COLOR_YELLOW,
    COLOR_GREEN,
    COLOR_CYAN_LIGHT,
    COLOR_CYAN
} from '../constants';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Section from '../components/section';
import FeaturedArticleCard from '../components/featuredArticleCard';
import ArticleCard from '../components/articleCard';
import Tag from '../components/text/tag';

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
    background-color: #000;
`;

const ArticlesWrapper = styled.div`
    width: 100%;
    height: auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: ${COLUMN_GAP}px;
`;

// TODO: Check how to return the Image using Img component
const FeaturedImage = () => {
    const data = useStaticQuery(graphql`
        query {
            file(relativePath: { eq: "kethmar.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 800) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `);
    
    return <FeaturedArticleImage src={data.file.childImageSharp.fluid.src} />;

    // return <Img fluid={data.file.childImageSharp.fluid} />;
};
const IndexPage = () => (
    <Layout>
        <SEO title="Home" />
        
        <Section>
            <FeaturedArticleWrapper>
                <FeaturedImage />
                <FeaturedArticleCard />
            </FeaturedArticleWrapper>
        </Section>
        
        <Section title="Latest articles">
            <ArticlesWrapper>
                <ArticleCard
                    imageSrc="https://cdn-prod.medicalnewstoday.com/content/images/articles/322/322868/golden-retriever-puppy.jpg"
                    title="Pair programming - learn, teach and code at the same time"
                    intro="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s…"
                    extra="04-03-2020, Kethmar Salumets"
                    tag={<Tag offsetColor={COLOR_BLUE}>#growthMindset</Tag>}
                />
                <ArticleCard
                    imageSrc="https://cdn-prod.medicalnewstoday.com/content/images/articles/322/322868/golden-retriever-puppy.jpg"
                    title="Pair programming - learn, teach and code at the same time"
                    intro="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s…"
                    extra="04-03-2020, Kethmar Salumets"
                    tag={<Tag offsetColor={COLOR_GREEN}>#devLifestyle</Tag>}
                />
                <ArticleCard
                    imageSrc="https://cdn.mos.cms.futurecdn.net/VSy6kJDNq2pSXsCzb6cvYF-1024-80.jpg"
                    title="Pair programming - learn, teach and code at the same time"
                    intro="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s…"
                    extra="04-03-2020, Kethmar Salumets"
                    tag={<Tag offsetColor={COLOR_YELLOW}>#tutorials</Tag>}
                />
            </ArticlesWrapper>
        </Section>
        <Section title="Featured articles" background={COLOR_CYAN_LIGHT}>
            <ArticlesWrapper>
                <ArticleCard
                    imageSrc="https://cdn-prod.medicalnewstoday.com/content/images/articles/322/322868/golden-retriever-puppy.jpg"
                    title="Pair programming - learn, teach and code at the same time"
                    intro="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s…"
                    extra="04-03-2020, Kethmar Salumets"
                    tag={<Tag offsetColor={COLOR_BLUE}>#growthMindset</Tag>}
                    offsetColor={COLOR_CYAN}
                />
                <ArticleCard
                    imageSrc="https://cdn-prod.medicalnewstoday.com/content/images/articles/322/322868/golden-retriever-puppy.jpg"
                    title="Pair programming - learn, teach and code at the same time"
                    intro="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s…"
                    extra="04-03-2020, Kethmar Salumets"
                    tag={<Tag offsetColor={COLOR_GREEN}>#devLifestyle</Tag>}
                    offsetColor={COLOR_CYAN}
                />
                <ArticleCard
                    imageSrc="https://cdn.mos.cms.futurecdn.net/VSy6kJDNq2pSXsCzb6cvYF-1024-80.jpg"
                    title="Pair programming - learn, teach and code at the same time"
                    intro="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s…"
                    extra="04-03-2020, Kethmar Salumets"
                    tag={<Tag offsetColor={COLOR_YELLOW}>#tutorials</Tag>}
                    offsetColor={COLOR_CYAN}
                />
            </ArticlesWrapper>
        </Section>
    </Layout>
);

export default IndexPage;
