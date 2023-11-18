import { useState } from 'react';
import { VscCircleLargeFilled } from 'react-icons/vsc'
import { useCurrentCommunity } from '@/context/CurrentCommunityContext';

export const Group = () => {
    const { currentCommunity, setCurrentCommunity, communities } = useCurrentCommunity();

    const [showPopup, setShowPopup] = useState(false);

    const handleButtonClick = () => {
        setShowPopup(true);
    }

    const handleCommunitySelection = (communityName: string) => {
        setCurrentCommunity(communityName);
        setShowPopup(false);
      };

    return (
        <>
            <section 
                className="flex justify-between text-white font-bold py-2 px-4 rounded-md dark:bg-black"
                style={{ backgroundColor: '#215A36' }}
            >
                <div>
                    <span className="font-bold text-left block">CURRENT GROUP</span>
                    <span className="bg-green-700 text-white font-bold block" style={{ backgroundColor: '#215A36' }} >
                        {currentCommunity}
                    </span>
                </div>

                <button 
                    className='bg-green-900 text-white font-bold p-2 rounded-md flex items-center justify-center' 
                    onClick={handleButtonClick}
                    style={{ backgroundColor: '#11301C' }}
                >
                        Choose Other
                </button>
            
            </section>

            {showPopup && (
                <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-500 bg-opacity-50 z-20">
                    <div className="bg-gray-700 p-4 rounded-md justify-center flex flex-col gap-2">
                        <h2 className="text-lg font-bold mb-2">Choose Other Group</h2>
                        <div className="flex flex-col gap-2">
                            {communities.length > 0 ? (communities.map((communities, index) => (
                                <button
                                    className="hover:bg-white/10 transition duration-200 rounded-3xl w-full flex items-center justify-left gap-2 p-1 text-white"
                                    key={index}
                                    onClick={() => handleCommunitySelection(communities.community_name)}
                                >
                                    <VscCircleLargeFilled size={30} className={`${communities.community_name === "Personal" ? "text-red-500" : "text-green-500"}`} /> 
                                    {communities.community_name}
                                </button>
                            ))) : (<p className="text-white">No communities available.</p>)}
                        </div>
                        <div className="flex justify-center">
                            <button className="bg-green-900 text-white font-bold p-2 rounded-md" onClick={() => setShowPopup(false)}>Close</button>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}
