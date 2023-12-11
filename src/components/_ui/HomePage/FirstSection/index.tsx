import React from 'react';
import CarouselDecks from '../Caroussel';

const FirstSection: React.FC = () => {
  return (
    <section style={{ textAlign: 'center', fontFamily: 'Lora', fontSize: '48px' }}>
      <h1>Desvende o conhecimento</h1>
      <h2>Carta por Carta</h2>
      <h3>JUNTOS</h3>
      <div className='my-8 pl-4 pr-4'>
        <div style={{ maxWidth: '1500px', margin: '0 auto' }}>
          <CarouselDecks />
        </div>
      </div>
    </section>
  );
};

export default FirstSection;
