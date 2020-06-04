import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

import { PAGE_SIZES, COLOR_DARK_BLUE } from '../constants';

import Logo from '../images/logo-transparent.svg';
import Instagram from '../images/icons/instagram.svg';
import Twitter from '../images/icons/twitter.svg';
import Youtube from '../images/icons/youtube.svg';

const FooterWrapper = styled.header`
  width: 100%;
  box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  padding: 0 40px;
  box-sizing: border-box;

  @media (min-width: ${PAGE_SIZES.desktop.width}px) {
    height: 110px;
  }
`;

const FooterContent = styled.div`
  width: 100%;
  max-width: ${PAGE_SIZES.desktop.width}px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 20px;
  font-size: 16px;
  padding: 20px;

  @media (min-width: ${PAGE_SIZES.desktop.width}px) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-columns-gap: 20px;
    padding: 0px;
  }
`;

const FooterColumn = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  @media (min-width: ${PAGE_SIZES.desktop.width}px) {
    ${props =>
        props.contentCenter && `
            justify-content: center;
        `}

    ${props =>
        props.contentRight && `
            justify-content: flex-end;
        `}
  }
`;

const LogoImage = styled.img`
  width: 40px;
  height: auto;
  display: none;
  margin-bottom: 0;
  margin-right: 20px;

  @media (min-width: ${PAGE_SIZES.desktop.width}px) {
    display: block;
  }
`;

const IconImage = styled.img`
  width: 20px;
  height: auto;
  display: block;
  margin: 0 10px;
`;

const FooterLink = styled(Link)`
  color: ${COLOR_DARK_BLUE};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const Footer = () => (
    <FooterWrapper>
        <FooterContent>
            <FooterColumn>
                <LogoImage alt="developerhabits logo" src={Logo} />
                <span>DeveloperHabits by Kethmar Salumets</span>
            </FooterColumn>

            <FooterColumn contentCenter>
                <a
                    href="https://www.instagram.com/developerhabits/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <IconImage alt="instagram" src={Instagram} />
                </a>
                <a
                    href="https://twitter.com/developerHabits"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <IconImage alt="twitter" src={Twitter} />
                </a>
                <a
                    href="https://www.youtube.com/channel/UCJLZwePkNHps5Bv7VwISyTA/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <IconImage alt="youtube" src={Youtube} />
                </a>
            </FooterColumn>

            <FooterColumn contentRight>
                <FooterLink
                    as="a"
                    href="https://twitter.com/developerHabits">
                    Contact me
                </FooterLink>
            </FooterColumn>
        </FooterContent>
    </FooterWrapper>
);

export default Footer;
