import background from "../asset/start_bg.png";
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
        <div className="background-with-overlay" style={{ 
            backgroundImage: `url(${background})`,
          }}>
            <div className="result-with-overlay inner-content font-bold text-green-950 flex justify-center items-center">
                <div className="my-10 mx-2 w-6/7 h-54 border-white rounded-lg py-4 divide-y-2 divide-amber-100 border-2">
                    <span className="font-bold text-sm py-6">你今天找茶了嗎？</span>
                    <div className="text-xs py-2">
                        這個心理測驗不只可以讓你認識自己的性格特質，還可以找到自己適合哪種茶！<br/>
                        快來參加吧，讓茶葉告訴你更多專屬於你的秘密！<br/>
                    </div>
                </div>
                <div className='mx-2  w-6/7 flex flex-col items-center justify-center '>
                <button onClick={() => startGame()} className='z-10 py-4 w-full text-sm h-1/6 my-2 rounded-lg border-2 border-white'>快來試試茶葉人格測驗看自己是哪種茶!</button>
                </div>
            </div>
            </div>
    );
};

export default StartPage;
