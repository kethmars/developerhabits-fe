/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

import {
    COLOR_LIGHT_GRAY_2
} from '../constants';

import Header from './header';

import 'typeface-roboto';
import './layout.css';

const LayoutStyles = styled.div`
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
        </LayoutStyles>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;
