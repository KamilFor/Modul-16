import React from 'react';
import Hero from '../Hero/Hero';
import Container from '../Container/Container';
import { listData, faqinfo } from '../../data/dataStore';
console.log(faqinfo);

const FAQ = () => (
  <Container>
    <h2>FAQ</h2>
    <Hero titleText={listData.title} {...listData} />
    <p>{faqinfo.paragraf}</p>
  </Container>
);

export default FAQ;
