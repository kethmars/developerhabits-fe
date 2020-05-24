import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import ArticlesSection from '../components/articlesSection';
import SubscriptionBlock from '../components/subscriptionBlock';

const IndexPage = ({ pageContext }) => (
    <Layout>
        <SEO title={pageContext.title} />
        {
            pageContext.articles && pageContext.articles.length ?
                <ArticlesSection
                    title={`#${pageContext.name}`}
                    articles={pageContext.articles}
                    limit={15}
                /> :
                ''
        }
    </Layout>
);

export default IndexPage;
