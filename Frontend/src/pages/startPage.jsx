import background from "../asset/start_bg.jpg";
import { useNavigate } from "react-router-dom";
import React from 'react';
import db from '../db'; // 修改導入路徑
// 獲取所有 timestamps 記錄


const StartPage = ({ onStartClick }) => {
    const navigate = useNavigate();

    // 定義 addTimestamp 函數在組件內部
    const addTimestamp = () => {
        const timestamp = new Date().getTime(); // 取得當前時間的 timestamp
        db.timestamps.add({ timestamp: timestamp }).then(() => {
            console.log('已新增 timestamp:', timestamp);
        }).catch(error => {
            console.error('無法新增 timestamp：', error);
        });
    }
    addTimestamp(); // 調用新增 timestamp 的函數
    db.timestamps.toArray().then(timestamps => {
        // 將 timestamps 轉換為正常的日期時間格式
        const formattedTimestamps = timestamps.map(record => {
            return {
                timestamp: new Date(record.timestamp).toLocaleString() // 使用 toLocaleString() 方法將日期時間格式化為當地格式
            };
        });
    
        // 將格式化後的 timestamps 輸出到控制台
        console.log('格式化後的 timestamps:', formattedTimestamps);
    }).catch(error => {
        console.error('無法獲取 timestamps:', error);
    });
    

    const startGame = () => {
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
