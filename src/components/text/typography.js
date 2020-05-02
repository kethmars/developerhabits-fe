import styled from 'styled-components';

import {  COLOR_CYAN_DARK, COLOR_CYAN } from '../../constants';

export const ColorfulTag = styled.span`
    font-size: 1rem;
    font-family: 'Roboto';
    font-weight: 700;
    color: ${props => props.color || COLOR_CYAN_DARK};
    text-decoration: none;
`;

export const InlineBackground = styled.span`
    text-decoration: none;
    background-repeat: no-repeat;
    background-position: 0px bottom;
    background-image: linear-gradient(180deg,transparent 70%, ${COLOR_CYAN} 0);
`;

export const H1Title = styled.h1`
    font-size: ${props => props.big ? '3rem' : '2.125rem'};
    width: auto;
    height: auto;
    display: block;
    margin: 20px 0;
    font-family: 'Roboto';
    font-weight: 700;
    line-height: 1.25em;
`;