import React from 'react';

const FourthSection: React.FC = () => {
  return (
    <div style={{ backgroundColor: '#0B4515', border: '3px solid black', padding: '20px' }}>
      <div style={{ display: 'flex'}}>
        <div className='flex-1 justify-center m-16'>
          <h1 style={{ textAlign: 'start', fontFamily: 'Lora', fontSize: 'calc(2em + 2vw)' }}>Participe de Comunidades!!</h1>
          <p style={{ textAlign: 'start', fontFamily: 'Lora', fontSize: 'calc(0.8em + 1vw)' }}>Texto abaixo da imagem</p>
        </div>
        <div className='flex-1 flex justify-end'>
          <img src="/img/Ricardinho na Unifesp.png" alt="Imagem" style={{ maxWidth: '100%', height: 'auto', borderRadius: '10px', marginRight: '10px' }} />
        </div>
      </div>
    </div>
  );
};

export default FourthSection;
