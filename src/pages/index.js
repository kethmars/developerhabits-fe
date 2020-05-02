import React from 'react';

import { COLOR_LIGHT_GRAY_2 } from '../constants';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Section from '../components/section';
import SubscriptionBlock from '../components/subscriptionBlock.js';
import ArticlesSection from '../components/articlesSection';
import FeaturedArticle from '../components/featuredArticle';

const IndexPage = () => (
    <Layout>
        <SEO title="Home" />
        
        <Section>
            <FeaturedArticle />
        </Section>

        <ArticlesSection theme="white" title="Latest articles"/>
        <ArticlesSection theme="blue" title="Featured articles"/>

        <Section bgColor={COLOR_LIGHT_GRAY_2}>
            <SubscriptionBlock />
        </Section>
    </Layout>
);

export default IndexPage;
