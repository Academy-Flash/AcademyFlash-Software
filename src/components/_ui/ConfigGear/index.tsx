import { BsFillGearFill } from 'react-icons/bs';

export const ConfigGear = () => {
  return (
    <button className='cursor-pointer hover:bg-black/20 p-2 transition duration-200 rounded-full' onClick={() => window.location.href = '/config'} >
      <BsFillGearFill size={20} className='fill-gray-500' />
    </button>
  );
};
