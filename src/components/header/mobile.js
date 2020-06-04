import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import styled from 'styled-components';

import LogoIcon from '../../images/logo-icon.svg';
import MenuIcon from '../../images/icons/menu.svg';
import CloseIcon from '../../images/icons/close.svg';

const Logo = styled.img`
  max-height: 50px;
  margin-top: 5px;
  margin-bottom: 0;
`;

const MenuButton = styled.button`
  width: 50px;
  height: auto;
  background: transparent;
  border: none;
  margin-left: auto;
  outline: none;
  z-index: 100;

  ${props =>
        props.active &&
    `
		position: fixed;
		right: 40px;
	`}

  img {
    width: 100%;
    margin: 0;
  }
`;

const HeaderModalWrapper = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  box-sizing: border-box;
  overflow: hidden;
  left: 0;
  top: 0;
  text-align: center;
  z-index: 10;

  li {
    display: block;
  }

  a {
    display: block;
    padding: 30px;
    font-size: 30px;
  }
`;

const HeaderModal = ({ children }) => (
    <HeaderModalWrapper>{children}</HeaderModalWrapper>
);

const HeaderForMobile = ({ MenuItems }) => {
    const [ isMenuOpen, setIsMenuOpen ] = useState(false);

    return (
        <>
            <Link to="/">
                <Logo src={LogoIcon} />
            </Link>

            <MenuButton
                active={isMenuOpen}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
                <img src={isMenuOpen ? CloseIcon : MenuIcon} alt="menu" />
            </MenuButton>

            {isMenuOpen && (
                <HeaderModal>
                    <MenuItems />
                </HeaderModal>
            )}
        </>
    );
};

HeaderForMobile.propTypes = {
    MenuItems: PropTypes.object,
};

HeaderModal.propTypes = {
    children: PropTypes.object,
};

export default HeaderForMobile;
