import background from "../asset/start_bg.jpg";
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
            <div className="inner-content font-bold text-green-950 flex justify-center items-center">
                <div className="w-6/7 h-54 border-white rounded-lg p-4 divide-y-2 border-2">
                    <span className="font-bold text-sm py-2">你知道嗎？每喝了一杯茶就少了一杯茶！</span>
                    <div className="text-xs py-2">
                    是的，就是這麼簡單！讓我告訴你為什麼喝茶不僅僅是一種飲料，更是一種生活態度。<br/>
首先，茶不僅清新解渴，還有著無數的好處。想想看，忙碌的一天結束後，一杯熱騰騰的茶可以讓你瞬間放鬆身心，輕鬆迎接下一個挑戰。而且，茶中含有的抗氧化劑能夠幫助清除體內的自由基，讓你的肌膚煥發光彩，散發出青春活力！<br/>
不僅如此，喝茶還可以提升你的專注力和警覺性，讓你在學習或工作中更加高效。而且，相比於咖啡，茶因其天然的咖啡因含量較低，能夠讓你保持清醒又不會產生焦慮或心悸。<br/>
此外，茶還有助於維持身體的健康。從提高免疫力到促進消化，茶都能夠為你的身體健康提供全方位的保護。無論是綠茶、紅茶還是白茶，每一種茶都有著獨特的功效，等著你去探索和品味！<br/>
所以，現在就加入我們，每喝了一杯茶就少了一杯茶，讓茶成為你生活中的一部分吧！喝茶不僅可以提升健康，還能享受到美味和樂趣。快來一杯吧，讓茶的魔力點亮你的生活！
                    </div>
                </div>
                <div className='w-6/7 flex flex-col items-center justify-center '>
                <button onClick={() => startGame()} className='w-full text-sm h-1/6 my-2 rounded-lg border-2 border-white'>快來試試茶葉人格測驗看自己是哪種茶!</button>
                </div>
            </div>
            </div>
    );
};

export default StartPage;
