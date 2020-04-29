import React from 'react';
import styled from 'styled-components';

import { COLOR_CYAN } from '../../constants';

const InlineBackground = styled.span`
    position: relative;
    display: inline-block;

    &:before {
        content: "";
        width: 100%;
        height: 20px;
        background-color: ${COLOR_CYAN};
        display: block;
        position: absolute;
        z-index: -1;
        bottom: 0px;
        left: 10px;
    }
`;

const TextWithBackground = ({ children }) => {
    if (!children.length) {
        return null;
    }

    const textParts = (Array.isArray(children) && children) || [ children ];

    return textParts
        .filter(text => typeof text === 'string')
        .map((text, index) => (
            <InlineBackground key={text}>{text}</InlineBackground>
        ));
};

export default TextWithBackground;
