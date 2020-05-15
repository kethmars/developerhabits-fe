import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

import {
    PAGE_WIDTH,
    COLOR_DARK_BLUE
} from '../constants';

import Logo from '../images/logo-transparent.svg';
import Instagram from '../images/icons/instagram.svg';
import Twitter from '../images/icons/twitter.svg';
import Youtube from '../images/icons/youtube.svg';

const FooterWrapper = styled.header`
  width: 100%;
  height: 110px;
  box-shadow: 0px 1px 4px 0px rgba(0,0,0,0.1);
  display: flex;
  align-items: center;
  padding: 0 40px;
  box-sizing: border-box;
`;

const FooterContent = styled.div`
  width: 100%;
  max-width: ${PAGE_WIDTH}px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-columns-gap: 20px;
  font-size: 16px;

  & > * {
      display: inline-flex;
      align-items: center;
  }
`;

const LogoImage = styled.img`
    width: 40px;
    height: auto;
    display: block;
    margin-bottom: 0;
    margin-right: 20px;
`;

const IconImage = styled.img`
    width: 20px;
    height: auto;
    display: block;
    margin: 0 10px;
`;

const FooterLink = styled(Link)`
  color: ${ COLOR_DARK_BLUE };
  text-decoration: none;

  &:hover {
      text-decoration: underline;
  }
`;

const Footer = () => (
    <FooterWrapper>
        <FooterContent>
            <div>
                <LogoImage src={Logo} />
                <span>DeveloperHabits by Kethmar Salumets</span>
            </div>

            <div style={{ justifyContent: 'center' }}>
                <Link to="#">
                    <IconImage src={Instagram} />
                </Link>
                <Link to="#">
                    <IconImage src={Twitter} />
                </Link>
                <Link to="#">
                    <IconImage src={Youtube} />
                </Link>
            </div>

            <div style={{ justifyContent: 'flex-end' }}>
                <FooterLink to="#">Contact me</FooterLink>
            </div>
        </FooterContent>
    </FooterWrapper>
);

export default Footer;
