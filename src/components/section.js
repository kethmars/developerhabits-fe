import React from 'react';
import styled from 'styled-components';

import { PAGE_WIDTH } from '../constants';

const SECTION_TRANSPARENT = 'section-transparent';

const COLOR_TO_NAME = {
    '#DDFDFF': 'COLOR_CYAN_LIGHT',
    '#F2F2F2': 'COLOR_LIGHT_GRAY',
    '#FAFAFA': 'COLOR_LIGHT_GRAY_V2'
};

// TODO: Improve the sections system
const SectionWrapper = styled.div`
    width: 100%;
    height: auto;
    display: block;
    padding: 80px 0 80px;
    background-color: ${props => props.background || 'transparent'};

    &.${SECTION_TRANSPARENT} + .${SECTION_TRANSPARENT},
    &.section-COLOR_CYAN_LIGHT + .section-COLOR_CYAN_LIGHT,
    &.section-COLOR_LIGHT_GRAY + .section-COLOR_LIGHT_GRAY,
    &.section-COLOR_LIGHT_GRAY_V2 + .section-COLOR_LIGHT_GRAY_V2
    {
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

const Section = ({ children, title, background }) => (
    <SectionWrapper
        background={background}
        className={background ? `section-${COLOR_TO_NAME[background]}` : SECTION_TRANSPARENT}
    >
        { title && <SectionTitle>{ title }</SectionTitle> }

        <SectionContent>
            { children }
        </SectionContent>
    </SectionWrapper>
);

export default Section;