import React from 'react';

const SecondSection: React.FC = () => {
  return (
    <div style={{ backgroundColor: '#7C3030', border: '3px solid black', padding: '20px' }}>
      <div style={{ display: 'flex'}}>
        <div className='flex justify-center m-16'>
            <h1 style={{ textAlign: 'start', fontFamily: 'Lora', fontSize: '64px' }}>Organize Seus Cards de Estudos!!</h1>
        </div>
        <div className='flex col-2'>
            <img src="/img/DM - Anwser Example 1.png" alt="Imagem" style={{ maxWidth: '100%', height: 'auto', marginRight: '10px', borderRadius: '10px'}} />
            <img src="/img/DM - Question Example 1.png" alt="Imagem" style={{ maxWidth: '100%', height: 'auto', borderRadius: '10px' }} />
        </div>
      </div>
      <div>
        <p>Texto abaixo da imagem</p>
      </div>
    </div>
  );
};

export default SecondSection;
