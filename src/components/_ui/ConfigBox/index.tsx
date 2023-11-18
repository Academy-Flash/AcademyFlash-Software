import React, { useState } from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';
import { styled } from '@mui/material/styles';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch, { SwitchProps } from '@mui/material/Switch';
import Slider from '@mui/material/Slider';

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 62,
  height: 34,
  padding: 7,
  '& .MuiSwitch-switchBase': {
    margin: 1,
    padding: 0,
    transform: 'translateX(6px)',
    '&.Mui-checked': {
      color: '#fff',
      transform: 'translateX(22px)',
      '& .MuiSwitch-thumb:before': {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          '#fff',
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
      },
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    backgroundColor: theme.palette.mode === 'dark' ? '#6C85C7' : '#F2BE5C',
    width: 32,
    height: 32,
    '&:before': {
      content: "''",
      position: 'absolute',
      width: '100%',
      height: '100%',
      left: 0,
      top: 0,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        '#fff',
      )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
    },
  },
  '& .MuiSwitch-track': {
    opacity: 1,
    backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
    borderRadius: 20 / 2,
  },
}));

interface ConfigGearProps {
  onToggle: () => void;
}

export default function ConfigMenuBackground({ onToggle }: ConfigGearProps) {
  // const [musicVolume, setMusicVolume] = useState(50); // Valor inicial do volume da música (50%)
  // const [soundVolume, setSoundVolume] = useState(50); // Valor inicial do volume do som geral (50%)

  // const handleMusicVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setMusicVolume(Number(e.target.value));
  //   // Aqui você pode adicionar a lógica para ajustar o volume da música na sua aplicação
  // };

  // const handleSoundVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setSoundVolume(Number(e.target.value));
  //   // Aqui você pode adicionar a lógica para ajustar o volume do som geral na sua aplicação
  // };

  return (
    /* Container flexbox para centralizar o conteúdo */
    <div
      className={`w-[90%] h-[90%] flex center-itens justify-center bg-[#D9D9D9] rounded-[38px]`}
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start', // Alinhar ao topo
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)', // Centraliza vertical e horizontalmente
      }}
    >  
      <div className='flex justify-end p-3'>
        <button className='flex justify-center items-center cursor-pointer hover:bg-black/20 w-12 h-12 transition duration-200 rounded-full' onClick={onToggle}>
          <AiFillCloseCircle size={30} className='fill-gray-500' />
        </button>
      </div>

      {/* <div className='p-10 w-full'>
        <label htmlFor="musicVolume" style={{ color: 'black' }}>Volumes:</label>
        <div className='p-5 w-full'>
          <label htmlFor="musicVolume" style={{ color: 'black' }}>Música:</label>
          <Slider
            defaultValue={70}
            aria-label="Small"
            valueLabelDisplay="auto"
            sx={{ color: '#8433F5'}}
          />
        </div>
        <div className='p-5 w-full'>
          <label htmlFor="soundVolume" style={{ color: 'black' }}>Som Geral:</label>
          <Slider
            defaultValue={70}
            aria-label="Small"
            valueLabelDisplay="auto"
            sx={{ color: '#8433F5'}}
          />
        </div>
      </div> */}

      <div className='w-full flex justify-end pr-10'>
        <FormControlLabel
          control={<MaterialUISwitch sx={{ m: 1}} />}
          label="Dark Mode"
          labelPlacement='top'
          /*checked={false}*/
          onChange={() => {
            document.documentElement.classList.toggle('dark');
          }}
          sx={{ color: 'black'}}
        />
      </div>

    </div>
  );
}
