import React from 'react';
import styled from 'styled-components';

import { PAGE_WIDTH } from '../constants';

const SECTION_COLORED = 'section-colored';
const SECTION_TRANSPARENT = 'section-transparent';

const SectionWrapper = styled.div`
    width: 100%;
    height: auto;
    display: block;
    padding: 80px 0 80px;
    background-color: ${props => props.background || 'transparent'};

    &.${SECTION_TRANSPARENT} + .${SECTION_TRANSPARENT} {
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
        className={background ? SECTION_COLORED : SECTION_TRANSPARENT}
    >
        { title && <SectionTitle>{ title }</SectionTitle> }

        <SectionContent>
            { children }
        </SectionContent>
    </SectionWrapper>
);

export default Section;