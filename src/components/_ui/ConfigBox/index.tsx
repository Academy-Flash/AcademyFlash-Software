import React, { useState } from 'react';

export default function ConfigMenuBackground() {
  const [musicVolume, setMusicVolume] = useState(50); // Valor inicial do volume da música (50%)
  const [soundVolume, setSoundVolume] = useState(50); // Valor inicial do volume do som geral (50%)

  const handleMusicVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMusicVolume(Number(e.target.value));
    // Aqui você pode adicionar a lógica para ajustar o volume da música na sua aplicação
  };

  const handleSoundVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSoundVolume(Number(e.target.value));
    // Aqui você pode adicionar a lógica para ajustar o volume do som geral na sua aplicação
  };

  return (
    /* Container flexbox para centralizar o conteúdo */
    <div
      className={`w-full h-[90%] flex center-itens justify-center bg-[#D9D9D9] rounded-[38px]`}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start', // Alinhar à esquerda
        justifyContent: 'flex-start', // Alinhar ao topo
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)', // Centraliza vertical e horizontalmente
      }}
    >
      <div className='p-20 w-full h-[40%]'>
        <label htmlFor="musicVolume" style={{ color: 'black' }}>Volumes:</label>
        <div className='p-5 w-full'>
          <label htmlFor="musicVolume" style={{ color: 'black' }}>Música:</label>
          <input
            type="range"
            id="musicVolume"
            name="musicVolume"
            min="0"
            max="100"
            value={musicVolume}
            onChange={handleMusicVolumeChange}
            className="custom-slider"
          />
        </div>
        <div className='p-5 w-full'>
          <label htmlFor="soundVolume" style={{ color: 'black' }}>Som Geral:</label>
          <input
            type="range"
            id="soundVolume"
            name="soundVolume"
            min="0"
            max="100"
            value={soundVolume}
            onChange={handleSoundVolumeChange}
            className="custom-slider"
          />
        </div>
      </div>

      <div
        className='p-40 w-full h-[20%]'
        style={{
          display: 'flex',
          alignItems: 'flex-end', // Alinhar na parte inferior
          justifyContent: 'flex-end', // Alinhar à direita
        }}
      >
        <label className='px-10' style={{ color: 'black' }}>Modo Escuro:</label>
        <label className="slider">
          <input type="checkbox" />
          <span className="slider-round"></span>
        </label>
      </div>
    </div>
  );
}
