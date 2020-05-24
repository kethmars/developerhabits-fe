import React from 'react';
import styled from 'styled-components';

import { COLOR_CYAN, COLOR_DARK_BLUE } from '../../constants';

const TagWrapper = styled.div`
  width: auto;
  display: inline-block;
  position: relative;
  cursor: pointer;

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: ${props => props.offsetColor || COLOR_CYAN};
    top: 7px;
    left: 7px;
    transition: 0.2s ease all;
  }
`;

const TagContent = styled.span`
  width: auto;
  height: auto;
  font-size: 0.875rem;
  background-color: ${COLOR_DARK_BLUE};
  padding: 5px;
  color: #fff;
  position: relative;

  a {
    color: #fff;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const Tag = ({ children, offsetColor }) => (
    <TagWrapper offsetColor={offsetColor}>
        <TagContent>{children}</TagContent>
    </TagWrapper>
);

export default Tag;
