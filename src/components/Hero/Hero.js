import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br />
        a resume that isn't on a piece of paper
      </SectionTitle>
      <SectionText>
        This is a website that establishes my understanding of development skills on the Frontend and UI/UX with a portfolio I made with react.js and nextjs.
      </SectionText>
      <Button onClick={() => window.location = 'https://github.com/JohnVoeun'}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;