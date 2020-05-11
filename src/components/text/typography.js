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
    background-color: ${COLOR_CYAN};
    box-shadow: #fff 0 0.7em inset;
    transition: 0.1s ease all;
    color: inherit;

    ${props => props.withHover && `
        &:hover, &--active {
            box-shadow: #fff 0 0 inset;
        }
    `}
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