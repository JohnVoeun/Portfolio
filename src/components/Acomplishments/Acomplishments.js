import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 3.1, text: 'College of Computing and Infomatics'},
  { number: 3.4, text: 'Information Technology', },
  { number: 3.5, text: 'American studies', },
  { number: 3.5, text: 'Associates of Arts and Sciences', }
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Personal GPAs</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
      <Box key={index}>
        <BoxNum>{card.number}</BoxNum>
        <BoxText>{card.text}</BoxText>
      </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
