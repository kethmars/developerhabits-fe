import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import {
    COLUMN_GAP,
    PAGE_WIDTH,
    COLOR_CYAN,
    COLOR_LIGHT_GRAY,
    COLOR_CYAN_LIGHT
} from '../constants';

import Instagram from '../images/icons/instagram.svg';
import Twitter from '../images/icons/twitter.svg';
import Youtube from '../images/icons/youtube.svg';

const BarWrapper = styled.div`
    position: absolute;
    width: 65px;
    height: 100%;
    position: absolute;
    transform: translateX(calc(-100% - 35px));
    top: 5px;
`;

const BarWrapperInner = styled.div`
    position: sticky;
    top: 30px;

    &::before {
        content: "";
        width: 100%;
        height: 100%;
        position: absolute;
        background-color: ${COLOR_CYAN_LIGHT};
        z-index: 0;
        top: 10px;
        left: 10px;
    }
`;

const BarWrapperContent = styled.div`
    position: relative;
    background-color: #fff;
    border: solid 1px ${COLOR_LIGHT_GRAY};
    padding: 20px 10px;
    box-sizing: border-box;
    display: grid;
    grid-template-columns: 1fr;
    grid-row-gap: 20px;
    text-align: center;
    justify-content: center;
    z-index: 1;
`;

const IconLink = styled(Link)`
    text-align: center;
`;

const IconImage = styled.img`
    width: 25px;
    height: auto;
    display: block;
    margin: 0 auto;
`;

const BarTitle = styled.span`
    font-size: 12px;
    font-weight: 800;
    text-transform: uppercase;
`;

const SocialMediaBar = () => (
    <BarWrapper>
        <BarWrapperInner>
            <BarWrapperContent>
                <BarTitle>
                    Share
                </BarTitle>
                <IconLink to="#">
                    <IconImage src={Instagram} />
                </IconLink>
                <IconLink to="#">
                    <IconImage src={Twitter} />
                </IconLink>
                <IconLink to="#">
                    <IconImage src={Youtube} />
                </IconLink>
            </BarWrapperContent>
        </BarWrapperInner>
    </BarWrapper>
);

export default SocialMediaBar;
