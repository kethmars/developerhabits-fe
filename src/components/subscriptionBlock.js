import React, { useState } from 'react';
import styled from 'styled-components';
import EnvelopeIcon from '../images/icons/envelope.svg';

import {
    COLOR_LIGHT_GRAY,
    COLOR_DARK_BLUE,
    COLOR_YELLOW
} from '../constants';

import {
    InlineBackground,
    H1Title
} from './text/typography';

const SubscriptonWrapper = styled.div`
    width: 100%;
    max-width: 550px;
    display: block;
    margin: 0 auto;
`;

const TextInput = styled.input`
    width: 100%;
    height: 60px;
    background-color: #fff;
    border: solid 1px ${COLOR_LIGHT_GRAY};
    box-shadow: 2px 2px 4px 0 rgba(206,206,206,0.50);
    line-height: 60px;
    font-size: 1.125rem;
    font-family: 'Roboto';
    font-weight: 300;
    padding: 20px;
    box-sizing: border-box;
    outline: none;
    margin-top: 30px;
`;

const SubmitButton = styled.button`
    width: auto;
    height: auto;
    position: relative;
    display: flex;
    align-items: center;
    padding: 5px 10px;
    font-size: 1.25rem;
    font-weight: 600;
    color: #fff;
    background-color: ${COLOR_DARK_BLUE};
    outline: none;
    border: none;

    &::before {
        content: "";
        display: block;
        background-image: url('${props => props.iconSrc}');
        background-repeat: no-repeat;
        background-position: center;
        background-size: contain;
        width: 35px;
        height: 35px;
        margin-right: 10px;
    }
`;

const SubmitButtonWrapper = styled.div`
    display: inline-block;
    width: auto;
    height: auto;
    position: relative;
    border: none;
    outline: none;
    margin-top: 30px;

    &::before {
        content: "";
        width: 100%;
        height: 100%;
        position: absolute;
        left: 10px;
        top: 10px;
        background-color: ${COLOR_YELLOW};
    }
`;

const SubscriptionBlock = ({ bgColor }) => {
    const [ emailField, setEmailField ] = useState(''); 
    const onSubmit = (e) => {
        e.preventDefault();

        setTimeout(() => {
            console.log('Data sent', emailField);
        });
    };

    return (
        <SubscriptonWrapper>
            <H1Title
                as="h2"
                style={{ margin: '0px' }}
            >
                <InlineBackground bgColor={bgColor}>
                    Subscribe to get the latest news, yay!
                </InlineBackground>
            </H1Title>

            <form onSubmit={onSubmit}>
                <TextInput
                    name="email"
                    placeholder="Please enter your email…"
                    onChange={(e) => setEmailField(e.target.value)}
                />

                <SubmitButtonWrapper>
                    <SubmitButton iconSrc={EnvelopeIcon} type="submit">
                        Submit
                    </SubmitButton>
                </SubmitButtonWrapper>
            </form>
        </SubscriptonWrapper>
    );
};

export default SubscriptionBlock;