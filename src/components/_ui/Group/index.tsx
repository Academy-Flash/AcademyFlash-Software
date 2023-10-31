import { useState } from 'react';

export const Group = () => {
    const [showPopup, setShowPopup] = useState(false);

    const handleButtonClick = () => {
        setShowPopup(true);
    }

    return (
        <>
            <section className="flex justify-between bg-green-700 text-white font-bold py-2 px-4 rounded-md dark:bg-black">
                <div>
                    <span className="font-bold text-left block">CURRENT GROUP</span>
                    <span className="bg-green-700 text-white font-bold block">Federal University of São Paulo</span>
                </div>

                <button className='bg-green-900 text-white font-bold p-2 rounded-md flex items-center justify-center' onClick={handleButtonClick}>Choose Other</button>
            
            </section>

            {showPopup && (
                <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-500 bg-opacity-50">
                    <div className="bg-gray-700 p-4 rounded-md">
                        <h2 className="text-lg font-bold mb-2">Choose Other Group</h2>
                        <p className="mb-4">Popup content goes here.</p>
                        <button className="bg-green-900 text-white font-bold p-2 rounded-md" onClick={() => setShowPopup(false)}>Close</button>
                    </div>
                </div>
            )}
        </>
    )
}
