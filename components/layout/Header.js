import React from 'react';
import styled from 'styled-components';

import * as vars from '_/css-vars';

const Container = styled.div`
  background: ${vars.ImaginationPurple};
  display: flex;
  width: 100%;
  color: white;
  height: 5rem;
  margin-bottom: 1.5rem;
`

const Header = props => (
  <Container>
  </Container>
);

export default Header;