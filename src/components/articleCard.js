import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import {
    COLOR_LIGHT_GRAY,
    COLOR_DARK_BLUE
} from '../constants';

const CardWrapper = styled.div`
    display: block;
    width: 100%;
    position: relative;

    &::before {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: ${props => props.offsetColor || COLOR_LIGHT_GRAY};
        top: 10px;
        left: 10px;
    }
`;

const CardInnerWrapper = styled.div`
    position: relative;
    display: block;
    background-color: #fff;
    height: 100%;
    border: ${props => props.disableBorder || `solid 1px ${COLOR_LIGHT_GRAY}`};
`;

const CardImage = styled.div`
    width: 100%;
    height: 230px;
    background-color: #000;
    display: block;
    background-image: url(${props => props.src});
    background-position: center;
    background-size: cover;
    position: relative;

    &::before {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: #fff;
        opacity: 0;
        transition: 0.2s ease all;
    }

    &:hover::before {
        opacity: 0.2;
    }
`;

const CardContent = styled.div`
    padding: 30px;
    color: ${COLOR_DARK_BLUE};
    word-break: break-word;
`;

const CardTitle = styled.h3`
    font-family: 'Roboto';
    font-weight: 600;
    font-size: 1.25rem;
    display: inline-block;
    margin-top: 30px;
    margin-bottom: 0;
    
    a {
        color: inherit;
        text-decoration: none;

        &:hover {
            text-decoration: underline;
        }
    }
`;

const CardIntro = styled.p`
    font-family: 'Roboto';
    font-weight: 300;
    font-size: 1.125rem;
    display: inline-block;
    margin-top: 20px;
    margin-bottom: 0;
`;

const CardExtraData = styled.span`
    font-family: 'Roboto';
    font-weight: 300;
    font-size: 1rem;
    display: inline-block;
    margin-top: 20px;
`;

const ArticleCard = ({
    tag,
    title,
    intro,
    extra,
    imageSrc,
    offsetColor,
    slug
}) => {
    const getCardIntro = (text) => {
        const textLength = 125;

        if (!text) {
            return '';
        }

        if (text.length < textLength) {
            return text;
        }

        return text && `${text.substring(0, textLength)}...`;
    };

    return (
        <CardWrapper offsetColor={offsetColor}>
            <CardInnerWrapper>
                <Link to={`/articles/${slug}`}>
                    <CardImage src={imageSrc || ''} />
                </Link>
                <CardContent>
                    { tag }
                    { title &&
                        <CardTitle>
                            <Link to={`/articles/${slug}`}>{title}</Link>
                        </CardTitle>
                    }
                    { intro && <CardIntro>{ getCardIntro(intro) }</CardIntro> }
                    { extra && <CardExtraData>{ extra }</CardExtraData> }
                </CardContent>
            </CardInnerWrapper>
        </CardWrapper>
    );
};

export default ArticleCard;