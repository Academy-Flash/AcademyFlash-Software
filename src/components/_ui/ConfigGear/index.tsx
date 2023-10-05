import { BsFillGearFill } from 'react-icons/bs';

interface ConfigGearProps {
  onToggle: () => void;
}

export function ConfigGear({ onToggle }: ConfigGearProps) {
  return (
    <button className='cursor-pointer hover:bg-black/20 p-2 transition duration-200 rounded-full' onClick={onToggle} >
      <BsFillGearFill size={20} className='fill-gray-500' />
    </button>
  );
};
