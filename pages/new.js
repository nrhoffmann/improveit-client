import React, { Component } from 'react'
import styled from 'styled-components';

import { PageNameEditor } from '@/editors/PageNameEditor';
import PageBodyEditor from '@/editors/PageBodyEditor';

const Header = styled.div`
  height: 8rem;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  background: lightgray;
`
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
      // <div>
      //   <Header>
      //     <InputGroup>
      //       <div><span>improveit.page/p/</span></div>
      //       <input type="text"></input>
      //     </InputGroup>
      //   </Header>
        <Body>
          <PageBodyEditor/>
        </Body>
      // </div>
    );
  }
}

export default New;