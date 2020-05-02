import React from 'react';
import styled from 'styled-components';

import { PAGE_WIDTH, COLOR_CYAN_LIGHT, COLOR_LIGHT_GRAY_2 } from '../constants';

const SECTION_TRANSPARENT = 'section-transparent';
const SECTION_GRAY = 'section-gray';
const SECTION_CYAN = 'section-blue';
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
    max-width: ${PAGE_WIDTH}px;
    margin: 0 auto;
`;

const SectionTitle = styled.h2`
    font-size: 1.625rem;
    font-family: 'Roboto';
    font-weight: 300;
    display: block;
    margin: 0px auto 30px;
    text-align: center;
`;

const getSectionColor = (color) => colorToClass.find(map => map.color === color);

const Section = ({ children, title, bgColor }) => {
    const bgColorInfo = getSectionColor(bgColor);
    const colorClass = (bgColorInfo && bgColorInfo.class) || SECTION_TRANSPARENT;

    return (
        <SectionWrapper
            background={bgColor}
            className={colorClass}
        >
            { title && <SectionTitle>{ title }</SectionTitle> }

            <SectionContent>
                { children }
            </SectionContent>
        </SectionWrapper>
    );
};

export default Section;