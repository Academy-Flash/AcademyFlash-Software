import { useCurrentUser } from '@/context/CurrentUserContext';
import { AiOutlineMail, AiOutlineUser } from 'react-icons/ai';
import { BiUserCircle, BiLogOut} from 'react-icons/bi';
import { FiCalendar } from 'react-icons/fi';
import { LiaUserFriendsSolid } from 'react-icons/lia';

export default function ProfileBox() {

  const { currentUser, setCurrentUser } = useCurrentUser()

  function changeUser() {
    if (currentUser.username === 'Edu') {
      setCurrentUser({
        username: 'Ricardinho',
        email: 'rica@rico.com',
        id: 14
      })
    } else {
      setCurrentUser({
        username: 'Edu',
        email: 'edu@mail.com',
        id: 15
      })
    }    
  }

  return (
    <div
      className={`w-full h-full flex overflow-y-auto justify-center items-center relative `}
    >  
      <BiLogOut
        size={50}
        style={{
          color: '#36199D',
          position: 'absolute',
          top: 0,
          right: 0,
          cursor: 'pointer',
        }}
        onClick={() => {
          changeUser()
        }}
      />
      
      <div className='p-20 bg-[#575369] rounded-3xl border-white border-2 '>
        
        <div className='w-full flex items-center justify-center'>
          <BiUserCircle 
              className='fill-violet-900'
              size={100} 
          />
        </div>
        <div className='w-full items-center justify-center p-3 text-center' > 
        
          <h1 className='w-full text-gray-200  text-3xl font-bold'>{currentUser.username}</h1>
          <h1 className='w-full pt-2 text-gray-200  text-xl font-bold'>{currentUser.email}</h1>

        </div>
        
        <div className='flex flex-col x' >
          <div className='flex-col justify-start mx-auto'>
            <div className='flex items-center justify-start pt-5 text-center' >

              <FiCalendar size={50} className='text-violet-900' />
              <h1 className='pl-4 text-gray-200  text-xl font-bold'>  
                Calendar
              </h1>

            </div>

                  
            <div className='flex items-center justify-start pt-5 text-center' >

              <LiaUserFriendsSolid size={50} className='text-violet-900'/>
              <h1 className='pl-4 text-gray-200 text-xl font-bold' >  
                Friends
              </h1>

            </div>

        
            <div className='flex items-center justify-start pt-5 text-center' >

              <AiOutlineMail size={50} className='text-violet-900'/>
              <h1 className='pl-4 text-xl font-bold text-gray-200 ' >  
                News
              </h1>

            </div>

            
            <div className='flex items-center justify-start pt-5 text-center' >

              <AiOutlineUser size={50} className='text-violet-900'/>
              <h1 className='pl-4 text-xl font-bold text-gray-200 '  >  
                Profile Settings 
              </h1>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
