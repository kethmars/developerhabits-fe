import styled from 'styled-components';

import {  COLOR_CYAN_DARK } from '../../constants';

export const ColorfulTag = styled.span`
    font-size: 16px;
    font-family: 'Roboto';
    font-weight: 700;
    color: ${props => props.color || COLOR_CYAN_DARK};
    text-decoration: none;
`;

export const H1Title = styled.h1`
    width: auto;
    height: auto;
    display: block;
    margin: 20px 0;
    font-family: 'Roboto';
    font-weight: 700;
    line-height: 1.25em;
`;