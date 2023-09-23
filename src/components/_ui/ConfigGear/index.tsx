import { BsFillGearFill } from 'react-icons/bs';

export const ConfigGear = () => {
  return (
    <section
      className="w-[3%] h-[20%] rounded-full cursor-pointer transition duration-200 flex justify-center items-center hover:bg-black/20"
    >
      <button className='w-full h-full flex justify-center items-center'
        onClick={() => window.location.href = '/config'} >
        <BsFillGearFill size={20} className='fill-gray-500' />
      </button>
    </section>
  );
};
