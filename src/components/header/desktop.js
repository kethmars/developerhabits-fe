import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

import { PAGE_SIZES, COLOR_CYAN } from '../../constants';

import LogoFull from '../../images/logo.svg';

const Logo = styled.img`
  max-height: 50px;
  margin-top: 5px;
  margin-bottom: 0;
`;

const MenuWrapper = styled.nav`
  width: auto;
  margin-left: calc(${PAGE_SIZES.desktop.columnGap}px - 15px);

  ul {
    margin: 0;
    list-style: none;
  }

  li {
    display: inline-block;
    font-size: 1.125rem;
    line-height: 1em;
    margin-bottom: 0;
  }

  a {
    text-decoration: none;
    color: #000;
    padding: 15px;
    position: relative;
    
    &::before {
      content: "";
      transition: 0.25s ease all;
    }

    &:hover::before {
      content: "";
      position: absolute;
      left: 10px;
      bottom: 15px;
      width: calc(100% - 20px);
      height: 12px;
      background-color: ${COLOR_CYAN};
      z-index: -1;
    }
  }
`;

const HeaderForDesktop = ({ MenuItems }) => (
    <>
        <Link to="/">
            <Logo src={LogoFull} />
        </Link>

        <MenuWrapper>
            <MenuItems/>
        </MenuWrapper>
    </>
);

export default HeaderForDesktop;
