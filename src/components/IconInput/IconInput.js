import React from 'react';
import { CloudLightning } from 'react-feather';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const IconInput = ({ label, icon, width = 250, size, ...delegated }) => {
  const styleSizes = {
    small: {
      '--height': 24 / 16 + 'rem',
      '--font-size': 14 / 16 + 'rem',
      '--border-bottom': '1px solid ' + COLORS.black,
    },
    large: {
      '--height': 36 / 16 + 'rem',
      '--font-size': 18 / 16 + 'rem',
      '--border-bottom': '2px solid ' + COLORS.black,
    },
  };

  const style = {
    '--color': COLORS.gray700,
    '--color-hover': COLORS.black,
  };

  const styleInput = {
    '--width': width + 'px',
    '--color-placeholder': COLORS.gray300,
    '--font-weight': 700,
    '--font-weight-placeholder': 400,
    '--font-weight-hover': 700,
    '--outline-offset': '2px',
  };

  const styleSize = styleSizes[size];
  if (!styleSize)
    throw new Error(`Unknown size passed to ProgressBar: ${size}`);

  const iconSize = size === 'small' ? 16 : 24;

  return (
    <>
      <Wrapper style={style}>
        <VisuallyHidden>{label}</VisuallyHidden>
        <IconWrapper style={{ '--height': iconSize / 16 + 'rem' }}>
          <Icon id={icon} size={iconSize}></Icon>
        </IconWrapper>
        <Input {...delegated} style={{ ...styleSize, ...styleInput }}></Input>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.label`
  display: block;
  color: var(--color);
  position: relative;

  &:hover {
    color: var(--color-hover);
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  height: var(--height);
  top: 0;
  bottom: 0;
  margin: auto 0;
`;

const Input = styled.input`
  width: var(--width);
  height: var(--height);
  font-size: var(--font-size);
  font-weight: var(--font-weight);
  color: inherit;
  border: none;
  padding-left: var(--height);
  border-bottom: var(--border-bottom);
  outline-offset: var(--outline-offset);

  &::placeholder {
    color: var(--color-placeholder);
    font-weight: var(--font-weight-placeholder);
  }
`;

export default IconInput;
