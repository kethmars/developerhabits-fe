import React from 'react';
import styled from 'styled-components';

import {
    PAGE_WIDTH,
    PAGE_WIDTH_NARROW,
    COLOR_CYAN_LIGHT,
    COLOR_LIGHT_GRAY_2,
    SECTION_TRANSPARENT,
    SECTION_GRAY,
    SECTION_CYAN
} from '../constants';

const SectionWrapper = styled.div`
    width: 100%;
    height: auto;
    display: block;
    padding: 80px 0 80px;
    background-color: ${props => props.background || 'transparent'};

    &.${SECTION_TRANSPARENT} + .${SECTION_TRANSPARENT},
    &.${SECTION_GRAY} + .${SECTION_GRAY},
    &.${SECTION_CYAN} + .${SECTION_CYAN} {
        padding-top: 0;
    }
`;

const SectionContent = styled.div`
    width: auto;
    max-width: ${props => props.narrow ? PAGE_WIDTH_NARROW : PAGE_WIDTH}px;
    margin: 0 auto;
    padding: 0 40px;
    box-sizing: border-box;
`;

const SectionTitle = styled.h2`
    font-size: 1.625rem;
    font-family: 'Roboto';
    font-weight: 300;
    display: block;
    margin: 0px auto 30px;
    text-align: center;
`;

const colorToClass = [
    {
        color: COLOR_LIGHT_GRAY_2,
        class: SECTION_GRAY
    },
    {
        color: COLOR_CYAN_LIGHT,
        class: SECTION_CYAN
    }
];

const getSectionColor = (color) => colorToClass.find(map => map.color === color);

const Section = ({ children, title, bgColor, narrow, style }) => {
    const bgColorInfo = getSectionColor(bgColor);
    const colorClass = (bgColorInfo && bgColorInfo.class) || SECTION_TRANSPARENT;

    return (
        <SectionWrapper
            background={bgColor}
            className={colorClass}
            style={style}
        >
            { title && <SectionTitle>{ title }</SectionTitle> }

            <SectionContent narrow={narrow}>
                { children }
            </SectionContent>
        </SectionWrapper>
    );
};

export default Section;