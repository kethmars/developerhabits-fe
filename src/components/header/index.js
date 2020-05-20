import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import useIsMobile from '../../utils/is-mobile';
import { headerMenu } from '../../config';
import { PAGE_SIZES } from '../../constants';

import HeaderForMobile from './mobile';
import HeaderForDesktop from './desktop';

const HeaderWrapper = styled.header`
  width: 100%;
  height: 110px;
  box-shadow: 0px 1px 4px 0px rgba(0,0,0,0.1);
  display: flex;
  align-items: center;
  padding: 0 40px;
  box-sizing: border-box;
`;

const HeaderContent = styled.div`
  width: 100%;
  max-width: ${PAGE_SIZES.desktop.width}px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const HeaderMenuItems = () => (
    <ul>
        {
            headerMenu.map(menuItem => <Link to={menuItem.link}>{menuItem.text}</Link>)
        }
    </ul>
);

const Header = () => {
    const isMobile = useIsMobile();

    return (
        <HeaderWrapper>
            <HeaderContent>
                {
                    isMobile ?
                        <HeaderForMobile MenuItems={HeaderMenuItems} /> :
                        <HeaderForDesktop MenuItems={HeaderMenuItems} />
                }
            </HeaderContent>
        </HeaderWrapper>
    );
};

Header.propTypes = {
    siteTitle: PropTypes.string,
};

Header.defaultProps = {
    siteTitle: '',
};

export default Header;
