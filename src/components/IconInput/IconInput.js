import React from 'react';
import { CloudLightning } from 'react-feather';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  const style = {
    '--width': width + 'px',
    '--line-height': 1.6,
    '--font-weight': 'regular',
    '--font-weight-placeholder': 'light',
    '--font-weight-hover': 'bold',
    '--color-placeholder': COLORS.gray300,
    '--color-input': COLORS.gray700,
    '--color-hover': COLORS.black,
    '--color-icon': COLORS.gray700,
    '--color-icon-hover': COLORS.black,
    '--icon-stroke-width-hover': 2,
  };

  const styleSizes = {
    small: {
      '--font-size': '14px',
      '--input-padding-left': '32px',
      '--border-bottom': '1px solid ' + COLORS.black,
    },
    large: {
      '--font-size': '18px',
      '--input-padding-left': '36px',
      '--border-bottom': '2px solid ' + COLORS.black,
    },
  };

  const styleIcons = {
    small: {
      '--position-top': '4px',
      '--position-left': '2px',
    },
    large: {
      '--position-top': '4px',
      '--position-left': '0px',
    },
  };

  const styleSize = styleSizes[size];
  const styleIcon = styleIcons[size];
  const iconSize = size === 'small' ? 16 : 24;

  return (
    <>
      <VisuallyHidden>
        <span>{label}</span>
      </VisuallyHidden>
      <Wrapper style={{ ...style, ...styleSize }}>
        <IconWrapper style={{ ...style, ...styleIcon }}>
          <Icon id={icon} size={iconSize}></Icon>
        </IconWrapper>
        <Input type="text" style={style} placeholder={placeholder}></Input>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  width: var(--width);
  border-bottom: var(--border-bottom);

  position: relative;
`;

const IconWrapper = styled.div`
  width: fit-content;
  position: absolute;
  top: var(--position-top);
  left: var(--position-left);
  pointer-events: none;

  & svg {
    color: var(--color-icon);

    &:hover {
      /* pointer-events: auto; */
      color: var(--color-icon-hover);
      stroke-width: var(--icon-stroke-width-hover);
    }
  }
`;

const Input = styled.input`
  width: 100%;
  font-size: var(--font-size);
  font-weight: var(--font-weight);
  line-height: var(--line-height);
  color: var(--color-input);
  border: none;
  padding-left: var(--input-padding-left);

  ::placeholder {
    color: var(--color-placeholder);
    font-weight: var(--font-weight-placeholder);
  }

  &:hover {
    color: var(--color-hover);
    font-weight: var(--font-weight-hover);
  }

  // TODO: this is not working, hover still makes placeholder change styles (to 'bold')
  ::placeholder:hover {
    font-weight: var(--font-weight-placeholder);
  }
`;

export default IconInput;
