import React from 'react';
import { Columns } from 'react-feather';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  const style = {
    '--color-background': COLORS.transparentGray15,
    '--color-text-normal': COLORS.gray700,
    '--color-text-hover': COLORS.black,
    '--color-outline': COLORS.primary,
    '--font-size': '16px',
    '--border-radius': '8px',
    '--padding': '12px 48px 12px 16px',
    '--height': '43px',
  };

  const styleIcon = {
    '--icon-position-right': '8px',
    '--icon-position-top': '10px',
  };

  return (
    <Wrapper style={style}>
      <select value={value} onChange={onChange}>
        {children}
      </select>
      <IconWrapper style={styleIcon}>
        <Icon id="chevron-down" size="24"></Icon>
      </IconWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: fit-content;
  color: var(--color-text-normal);
  font-size: var(--font-size);

  &:hover {
    color: var(--color-text-hover);
  }

  &:focus {
    outline-color: var(--color-outline);
  }

  & select {
    appearance: none;
    width: 100%;
    height: var(--height);
    background-color: var(--color-background);
    color: inherit;
    padding: var(--padding);
    border: none;
    border-radius: var(--border-radius);
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  background-color: transparent;
  top: var(--icon-position-top);
  right: var(--icon-position-right);
  pointer-events: none;
`;

/* &:after {
    content: 'X';  // How do I pass the Icon styled component to here??
    position: absolute;
    top: 15px;
    right: 12px;
    background-color: transparent;
    pointer-events: none;
  } */

export default Select;
