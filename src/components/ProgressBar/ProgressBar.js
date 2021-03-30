/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const MAXVALUE = 100;
const MINVALUE = 0;
const SIZES = {
  large: {
    '--width': 362 + 'px',
    '--height': 16 + 'px',
    '--padding': 4 + 'px',
    '--outerBorderRadius': 8 + 'px',
  },
  medium: {
    '--width': 370 + 'px',
    '--height': 12 + 'px',
    '--outerBorderRadius': 4 + 'px',
  },
  small: {
    '--width': 370 + 'px',
    '--height': 8 + 'px',
    '--outerBorderRadius': 4 + 'px',
  },
};

const ProgressBar = ({ value, size }) => {
  const style = SIZES[size];
  const percentage = ((value - MINVALUE) / MAXVALUE) * 100;
  console.log(percentage);
  const innerBorderRadiusRight =
    percentage >= 99.9 ? '4px' : percentage >= 99.8 ? '2px' : '0';

  const styleBar = {
    '--width': percentage + '%',
    '--inner-border-radius-left': 4 + 'px',
    '--inner-border-radius-right': innerBorderRadiusRight,
  };

  const delegated = {
    role: 'progressbar',
    'aria-valuenow': value + '',
    'aria-valuemin': MINVALUE + '',
    'aria-valuemax': MAXVALUE + '',
  };

  return (
    <>
      <VisuallyHidden>
        <strong>{value}</strong>
      </VisuallyHidden>
      <Wrapper style={style} {...delegated}>
        <Bar style={styleBar}></Bar>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  box-sizing: content-box;
  background-color: ${COLORS.transparentGray15};
  width: var(--width);
  height: var(--height);
  border: var(--border);
  border-radius: var(--outerBorderRadius);
  padding: var(--padding, 0);
  box-shadow: inset -1px 2px 2px ${COLORS.transparentGray35};
`;

const Bar = styled.span`
  display: block;
  background-color: ${COLORS.primary};
  width: var(--width);
  height: 100%;
  border-top-left-radius: var(--inner-border-radius-left);
  border-bottom-left-radius: var(--inner-border-radius-left);
  border-top-right-radius: var(--inner-border-radius-right);
  border-bottom-right-radius: var(--inner-border-radius-right);
`;

export default ProgressBar;
