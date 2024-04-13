import background from "../asset/bg.jpg";
import { useNavigate } from "react-router-dom";
import React from 'react';


const StartPage = ({ onStartClick }) => {
    const navigate = useNavigate();    

    const startGame = async() => {
        try {
            const response = await fetch("https://imisland-production.up.railway.app/time", {
                method: 'POST', // 指定请求方法
                headers: {
                  'Content-Type': 'application/json'
                },
              });
            console.log(response.data);
          } catch (error) {
            console.error('Error fetching data: ', error);
          }
        navigate("/main");
    }

    return (
        <div className="h-screen w-screen bg-scroll bg-cover bg-center flex items-center justify-center" style={{ 
            backgroundImage: `url(${background})`,
          }}>
            <div className='h-3/4 w-3/4 grid grid-row-3 grid-flow-row gap-4'>
                <div className='flex justify-center items-center'>
                    <div className='w-48 flex justify-center items-center'>歡迎來到.....</div> 
                </div>
                <div className='row-span-2 flex flex-col items-center justify-center'>
                    <button onClick={() => startGame()} className='w-48 h-1/6 my-2 rounded-lg border-2'> 開始你的旅途吧 </button>
                </div>
            </div>
        </div>
    );
};

export default StartPage;
