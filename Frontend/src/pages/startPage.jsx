import background from "../asset/bg.jpg";
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
