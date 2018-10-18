import React from 'react';
import { withRouter } from 'next/router';
import styled from 'styled-components';

const PageHeader = styled.div`
  text-align: center;
`

const Wrapper = styled.div`
  margin-top: 6rem;
  margin-bottom: 6rem;

  @media (min-width: 550px) {
    margin-top: 18rem;
    margin-bottom: 18rem;
  }
`

const ParagraphHeading = styled.h6`
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: .2rem;
  margin-bottom: 1rem;
`

const Page = ({router}) => (
  <Wrapper>
    <PageHeader>
      <h2>A Clever Title Goes Here.</h2>
    </PageHeader>
    <ParagraphHeading>the problem</ParagraphHeading>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Duis viverra pulvinar urna, quis lacinia tellus commodo sed.
      Aliquam iaculis, elit at maximus volutpat, lacus turpis egestas tellus, eget consequat nunc velit nec tortor.
    </p>
    <ParagraphHeading>my solution</ParagraphHeading>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Duis viverra pulvinar urna, quis lacinia tellus commodo sed.
      Aliquam iaculis, elit at maximus volutpat, lacus turpis egestas tellus, eget consequat nunc velit nec tortor.
    </p>
    <ParagraphHeading>okay, now what?</ParagraphHeading>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Duis viverra pulvinar urna, quis lacinia tellus commodo sed.
      Aliquam iaculis, elit at maximus volutpat, lacus turpis egestas tellus, eget consequat nunc velit nec tortor.
    </p>
    <hr/>
  </Wrapper>
);

export default withRouter(Page);