import React, { Component } from 'react';
import styled from 'styled-components';
import Draggable from 'react-draggable';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeading } from '@fortawesome/free-solid-svg-icons';

import { GrayMatter } from '_/css-vars';

const SideBar = styled.div`
  background: ${GrayMatter};
  height: 100vh;

`

const BottomTray = styled.div`
  position: fixed;
  bottom: 0;
  display: flex;
  padding: 0 8px;
  align-items: center;
  /* background: #e4e4e4; */
  border-top: 1px solid #e4e4e4;
`

const Container = styled.div`
  position: fixed;
  left: 0;
  bottom: 100px;
`

const List = styled.ul`
  list-style-type: none;
`

const Item = styled.li`
  cursor: pointer;

  :hover {
    color: green;  
  }
`

const Toolbar = props => (
  // <Draggable>
  //   <Container>
  //     <List>
  //       <Item>Title</Item>
  //       <Item>Heading</Item>
  //       <Item>Body</Item>
  //     </List>
  //   </Container>
  // </Draggable>

  // <BottomTray>
  //   {props.children}
  // </BottomTray>

  <SideBar>

  </SideBar>
);

export default Toolbar;