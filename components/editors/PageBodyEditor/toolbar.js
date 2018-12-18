import React, { Component } from 'react';
import styled from 'styled-components';

const BottomTray = styled.div`
  position: fixed;
  bottom: 0;
  display: flex;
  padding: 0 8px;
  align-items: center;
  /* background: #e4e4e4; */
  border-top: 1px solid #e4e4e4;
`

const Toolbar = props => (
  <BottomTray>
    {props.children}
  </BottomTray>
);

export default Toolbar;