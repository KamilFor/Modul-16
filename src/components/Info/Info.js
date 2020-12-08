import React from 'react';
import Hero from '../Hero/Hero';
import { listData, faqinfo } from '../../data/dataStore';
import Container from '../Container/Container';

const Info = () => (
  <Container>
    <Hero titleText={listData.title} {...listData} />
    <h2>Info</h2>
    <p>{faqinfo.paragraf}</p>
  </Container>
);

export default Info;
