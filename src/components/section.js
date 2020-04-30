import React from 'react';
import styled from 'styled-components';

import { PAGE_WIDTH } from '../constants';


const SectionWrapper = styled.div`
    width: 100%;
    height: auto;
    display: block;
    padding: 40px 0;
`;

const SectionContent = styled.div`
    width: auto;
    max-width: ${PAGE_WIDTH}px;
    margin: 0 auto;
`;

const Section = ({ children }) => (
    <SectionWrapper>
        <SectionContent>
            { children }
        </SectionContent>
    </SectionWrapper>
);

export default Section;