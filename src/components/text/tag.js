import React from 'react';
import styled from 'styled-components';

import { COLOR_CYAN, COLOR_DARK_BLUE } from '../../constants';

const TagWrapper = styled.div`
  width: auto;
  display: inline-block;
  position: relative;
  cursor: pointer;
  margin: 15px 15px 0 0;

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: ${props => props.offsetColor || COLOR_CYAN};
    top: 3px;
    left: 3px;
    transition: 0.2s ease all;
  }
`;

const TagContent = styled.span`
  width: auto;
  height: auto;
  font-size: 0.75rem;
  background-color: ${COLOR_DARK_BLUE};
  padding: 3px;
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
