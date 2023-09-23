import { AiFillStar } from 'react-icons/ai'

export default function Stars () {
    return (
      <div className='flex p-2 space-x-1'>
        <AiFillStar size={30} className='fill-yellow-500'/>
        <h3 className='text-black pt-[2px]'>45</h3>
      </div>
    )
  }