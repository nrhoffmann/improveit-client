import React, { Component } from 'react'
import styled from 'styled-components';

import PageBodyEditor from '@/editors/PageBodyEditor';
import Header from '@/layout/Header';

// const Header = styled.div`
//   height: 8rem;
//   width: 100vw;
//   position: fixed;
//   top: 0;
//   left: 0;
//   background: lightgray;
// `


const Body = styled.div`
  margin-top: 8rem;
`

const InputGroup = styled.div`
  display: flex;
  align-items: stretch;
`

class New extends Component {

  render() {
    return (
      <div>
        <PageBodyEditor/>
      </div>
    );
  }
}

export default New;