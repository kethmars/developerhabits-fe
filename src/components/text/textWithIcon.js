import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    width: auto;
    display: inline-flex;
    flex-wrap: nowrap;
    font-size: 18px;
    font-weight: 300;
    align-items: center;
`;

const IconWrapper = styled.div`
    display: inline-block;
    width: 35px;
    height: 35px;
    border-radius: 35px;
    margin-right: 10px;
    overflow: hidden;

    img {
        width: 100%;
        height: auto;
        margin-bottom: 0;
    }
`;

const TextWithIcon = ({ iconSrc, text, alt }) => (
    <Wrapper>
        <IconWrapper>
            <img alt={alt} src={iconSrc} />
        </IconWrapper>

        { text }
    </Wrapper>
);

export default TextWithIcon;
