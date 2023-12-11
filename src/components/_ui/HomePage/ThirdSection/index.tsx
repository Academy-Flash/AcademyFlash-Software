import React from 'react';

const ThirdSection: React.FC = () => {
  return (
    <div style={{ backgroundColor: '#36199D', border: '3px solid black', padding: '20px' }}>
      <div style={{ display: 'flex'}}>
        <div className='flex-1 flex justify-start'>
          <img src="/gif/LikeGif.gif" alt="Gif" style={{ maxWidth: '30%', height: 'auto', borderRadius: '10px', marginRight: '10px' }} />
          <img src="/gif/DislikeGif.gif" alt="Gif" style={{ maxWidth: '30%', height: 'auto', borderRadius: '10px' }} />
        </div>
        <div className='flex-1 justify-center m-16'>
          <h1 style={{ textAlign: 'end', fontFamily: 'Lora', fontSize: 'calc(2em + 2vw)' }}>Vote, Comente e Compartilhe!</h1>
          <p style={{ textAlign: 'end', fontFamily: 'Lora', fontSize: 'calc(0.8em + 1vw)' }}>Texto abaixo da imagem</p>
        </div>
        
      </div>
    </div>
  );
};

export default ThirdSection;
