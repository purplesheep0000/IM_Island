import React from 'react';
import background from "../asset/bg.jpg";

const MainPage = ({ onStartClick }) => {
    return (
        <div className="h-screen w-screen bg-scroll bg-cover bg-center flex items-center justify-center" style={{ 
            backgroundImage: `url(${background})`,
          }}>
            <div className='h-3/4 w-3/4 grid grid-row-3 grid-flow-row gap-4'>
                <div className='flex justify-center items-center'>
                    <div className='w-48'>1. 想著你「喜歡的人」時，會想加些什麼東西進去呢？</div> 
                </div>
                <div className='row-span-2 flex flex-col items-center justify-center'>
                    <button className='w-48 h-1/6 my-2 rounded-lg border-2'> A. 眼鏡 </button>
                    <button className='w-48 h-1/6 my-2 rounded-lg border-2'> B. 帽子 </button>
                    <button className='w-48 h-1/6 my-2 rounded-lg border-2'> C. 鬍子 </button>
                    <button className='w-48 h-1/6 my-2 rounded-lg border-2'> D. 眼淚 </button>
                </div>
            </div>
        </div>
    );
};

export default MainPage;
