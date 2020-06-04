import React from 'react';
import styled from 'styled-components';

import { PAGE_SIZES, COLOR_LIGHT_GRAY, COLOR_CYAN_LIGHT } from '../constants';

import Twitter from '../images/icons/twitter.svg';
import LinkedIn from '../images/icons/linkedin.svg';
import Facebook from '../images/icons/facebook.svg';

const BarWrapper = styled.div`
  position: absolute;
  width: 65px;
  height: 100%;
  position: absolute;
  transform: translateX(calc(-100% - 35px));
  top: 5px;

  @media (max-width: ${PAGE_SIZES.tablet.width}px) {
    position: relative;
    width: 100%;
    height: auto;
    transform: none;
    margin-bottom: 60px;
  }
`;

const BarWrapperInner = styled.div`
  position: sticky;
  top: 30px;

  &::before {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: ${COLOR_CYAN_LIGHT};
    z-index: 0;
    top: 10px;
    left: 10px;
  }
`;

const BarWrapperContent = styled.div`
  position: relative;
  background-color: #fff;
  border: solid 1px ${COLOR_LIGHT_GRAY};
  padding: 20px 10px;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 20px;
  text-align: center;
  justify-content: center;
  z-index: 1;

  @media (max-width: ${PAGE_SIZES.tablet.width}px) {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
`;

const IconImage = styled.img`
  width: 25px;
  height: auto;
  display: block;
  margin: 0 auto;

  @media (max-width: ${PAGE_SIZES.tablet.width}px) {
    margin-left: 10px;
    margin-right: 10px;
  }
`;

const BarTitle = styled.span`
  font-size: 12px;
  font-weight: 800;
  text-transform: uppercase;

  @media (max-width: ${PAGE_SIZES.tablet.width}px) {
    display: block;
    width: 100%;
    margin-bottom: 10px;
  }
`;

const SocialMediaBar = ({ twitterUrl, linkedinUrl, facebookUrl }) => (
    <BarWrapper>
        <BarWrapperInner>
            <BarWrapperContent>
                <BarTitle>Share</BarTitle>
                {twitterUrl && (
                    <a href={twitterUrl} target="_blank" rel="noopener noreferrer">
                        <IconImage src={Twitter} />
                    </a>
                )}
                {linkedinUrl && (
                    <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
                        <IconImage src={LinkedIn} />
                    </a>
                )}
                {facebookUrl && (
                    <a href={facebookUrl} target="_blank" rel="noopener noreferrer">
                        <IconImage src={Facebook} />
                    </a>
                )}
            </BarWrapperContent>
        </BarWrapperInner>
    </BarWrapper>
);

export default SocialMediaBar;
