/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

import {
    COLOR_LIGHT_GRAY_2,
    PAGE_SIZES
} from '../constants';

import Header from './header';
import Footer from './footer';

import 'typeface-roboto';
import './layout.css';

const LayoutStyles = styled.div`
    font-family: 'Roboto';

    p {
        margin: 20px 0;
    }

    iframe {
        width: 600px;
        height: 325px;
        margin-left: auto;
        margin-right: auto;
        display: block;
    }

    blockquote {
        width: 80%;
        font-family: 'Roboto';
        font-size: 24px;
        line-height: 1.5em;
        font-weight: 400;
        margin: 40px auto;
        padding: 40px;
        box-sizing: border-box;
        background-color: ${ COLOR_LIGHT_GRAY_2 };
    }

    @media (max-width: ${PAGE_SIZES.tablet.width}px) {
        iframe {
            width: 100%;
            height: auto;
        }
    }
`;

const Layout = ({ children }) => {
    const data = useStaticQuery(graphql`
        query SiteTitleQuery {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `);

    return (
        <LayoutStyles>
            <Header siteTitle={data.site.siteMetadata.title} />
            { children }
            <Footer />
        </LayoutStyles>
    );
};


export default Layout;
