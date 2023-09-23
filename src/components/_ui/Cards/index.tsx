import FeedbackCards from '@/components/_ui/FeedbackCard'

export const Cards = () => {
    return (
        
            <>            
                <section className="text-black flex items-center space-x-1">
                    <div className="font-bold">UNIFESP</div>
                    <div className="text-gray-500">@Duduzinho</div>
                    <div className="text-gray-500">* 01 Jan 2023</div>
                </section>
                <section className="text-black mt-5 text-base">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo nulla doloribus nostrum, officiis laudantium quibusdam ex eveniet itaque perferendis suscipit quidem aperiam, numquam rerum! Omnis nesciunt totam repudiandae qui. Molestias.
                </section>
                
                <FeedbackCards/>
            </>
    )
}