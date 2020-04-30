import React from 'react';
import styled from 'styled-components';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Section from '../components/section';
import FeaturedArticleCard from '../components/featuredArticleCard';

import { useStaticQuery, graphql } from 'gatsby';

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

const FeaturedArticle = () => {
    return (   
        <FeaturedArticleWrapper>
            <FeaturedImage />
            <FeaturedArticleCard />
        </FeaturedArticleWrapper>
    );
};

const IndexPage = () => (
    <Layout>
        <SEO title="Home" />
        
        <Section>
            <FeaturedArticle />
        </Section>
    </Layout>
);

export default IndexPage;
