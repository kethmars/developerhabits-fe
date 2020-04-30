import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import { COLUMN_GAP, PAGE_WIDTH, COLOR_CYAN } from '../constants';

import LogoImage from '../images/logo.svg';
import SearchIcon from '../images/icons/search.svg';

const HeaderWrapper = styled.header`
  width: 100%;
  height: 110px;
  box-shadow: 0px 1px 4px 0px rgba(0,0,0,0.1);
  display: flex;
  align-items: center;
`;

const HeaderContent = styled.div`
  width: 100%;
  max-width: ${PAGE_WIDTH}px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const Logo = styled.img`
  margin-top: 5px;
  margin-bottom: 0;
`;

const MenuWrapper = styled.nav`
  width: auto;
  margin-left: calc(${COLUMN_GAP}px - 15px);

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

const IconButton = styled.button`
  width: auto;
  height: auto;
  background: transparent;
  border: none;
  padding: 15px;
  margin-left: auto;
  outline: none;

  img {
    margin: 0;
  }
`;

const Header = ({ siteTitle }) => (
    <HeaderWrapper>
        <HeaderContent>
            <Link to="/">
                <Logo src={LogoImage} />
            </Link>

            <MenuWrapper>
                <ul>
                    <li>
                        <Link to="/">Growth mindset</Link>
                    </li>
                    <li>
                        <Link to="/">Developer lifestyle</Link>
                    </li>
                    <li>
                        <Link to="/">Webdev tutorials</Link>
                    </li>
                </ul>
            </MenuWrapper>

            <IconButton>
                <img alt="Search icon" src={SearchIcon} />
            </IconButton>

        </HeaderContent>
    </HeaderWrapper>
);

Header.propTypes = {
    siteTitle: PropTypes.string,
};

Header.defaultProps = {
    siteTitle: '',
};

export default Header;
