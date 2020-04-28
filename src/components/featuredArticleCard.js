import React from 'react';
import styled from 'styled-components';

import { COLOR_CYAN_LIGHT } from '../constants';
import TextWithBackground from './textWithBackground';

// TODO: Try Adrian's approach
const CardWrapper = styled.div`
    width: calc(100% + 80px);
    margin-left: -80px;
    position: relative;
    z-index: 1;

    &:before {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: ${COLOR_CYAN_LIGHT};
        top: 10px;
        left: 10px;
        z-index: 0;
    }
`;

const CardContent = styled.div`
    display: block;
    width: 100%;
    background-color: #fff;
    padding: 50px;
    box-sizing: border-box;
    z-index: 1;
    position: relative;
`;

const Title = styled.h1`
    width: auto;
    height: auto;
    display: block;
    margin: 0;
    font-family: 'Roboto';
    font-weight: 700;
    line-height: 1.25em;
`;
const Intro = styled.p`
    width: auto;
    height: auto;
    display: block;
    margin: 20px auto 0;
    font-size: 20px;
    line-height: 1.4em;
    font-family: 'Roboto';
    font-weight: 300;
`;

const FeaturedArticleCard = () => (
    <CardWrapper>
        <CardContent>
            <Title>
                <TextWithBackground>
                    This is the title for our<br/>
                    This is the title for our article
                </TextWithBackground>
            </Title>

            <Intro>
                Lorem Ipsum is simply dummy text of the printing
                and typesetting industry. Lorem Ipsum
                has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took…
            </Intro>
        </CardContent>
    </CardWrapper>
);

export default FeaturedArticleCard;
