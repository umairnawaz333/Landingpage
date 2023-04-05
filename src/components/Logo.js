import React from 'react';
import styled from 'styled-components';
import logo from '../assets/images/logonew.png';

const LogoStyles = styled.div`
  max-width: 100px;
  svg {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export default function Logo({ ...rest }) {
  return (
    <LogoStyles {...rest}>
      <img src={logo} alt="hello" />
    </LogoStyles>
  );
}
