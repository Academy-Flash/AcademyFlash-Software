import React, { useState } from 'react';

export default function ConfigMenuBackground(props: ConfigMenuBackgroundProps) {
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
      className={`w-[90%] h-[90%] flex center-itens justify-center bg-[#D9D9D9]  rounded-[38px] ${props.className}`}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)', 
      }}
    >
      <div>
        <label htmlFor="musicVolume">Volume da Música:</label>
        <input
          type="range"
          id="musicVolume"
          name="musicVolume"
          min="0"
          max="100"
          value={musicVolume}
          onChange={handleMusicVolumeChange}
        />
        <span>{musicVolume}%</span>
      </div>
      <div>
        <label htmlFor="soundVolume">Volume do Som Geral:</label>
        <input
          type="range"
          id="soundVolume"
          name="soundVolume"
          min="0"
          max="100"
          value={soundVolume}
          onChange={handleSoundVolumeChange}
        />
        <span>{soundVolume}%</span>
      </div>
    </div>
  );
}

interface ConfigMenuBackgroundProps {
  className: string;
  style: object;
}
