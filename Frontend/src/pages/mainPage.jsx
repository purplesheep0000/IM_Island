import React, { useState } from 'react';
import background from "../asset/main_bg.jpg";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const questions = [
    { 
        question: '1.在早上上班時，你成功趕上了電梯，當你暗自慶幸錯過這班可能就會遲到時，此時遠處有一個人跑來也想搭乘，你會...', 
        options: [
            'A.假裝沒看到按關門',
            'B.一邊道歉一邊按關門',
            'C.幫她按開門'
        ] 
    },
    {
        question: '2.當你到了學校才發現今天放假，你會...',
        options: [
            'A.揪住在附近的朋友出去玩',
            'B.乾脆留在學校讀書',
            'C.直接折返回家'
        ]
    },
    {
        question: '3.有人跟你借了東西，但你在三天後也需要用到這個東西，你會...',
        options: [
            'A.直接拒絕，告訴他自己也要用',
            'B.拒絕但幫她介紹給其他可能可以借的人',
            'C.直接借給他，叮囑他明天一定要還'
        ]
    },
    {
        question: '4.烈日當頭，你在炎熱的下午經過一家飲料店，你會…',
        options: [
            'A.來一杯清爽降火的無糖青茶',
            'B.點一杯甜蜜可口的珍珠奶茶',
            'C.直接經過，還是喝水最好！'
        ]
    },
    {
        question: '5.團隊中一個流傳好幾年的大型活動眼看要在你這一輩因為沒人要辦而被流掉了，你會...',
        options: [
            'A.接下活動總召',
            'B.積極說服其他人來辦，並告訴他們自己可以協助',
            'C.默不作聲祈禱有人會自己跳出來'
        ]
    },
    {
        question: '6.有一通陌生電話打來，用嚴肅的語氣說「出大事了！」，你會...',
        options: [
            'A.開始想像各種可能的出事情景',
            'B.冷靜尋問怎麼了',
            'C.認為是詐騙電話並直接掛掉'
        ]
    },
    {
        question: '7.今天你需要去拜訪一位喜歡喝茶的長輩，於是你決定帶茶葉拜訪，你會選擇…',
        options: [
            'A.甘醇鮮美的碧螺春綠茶',
            'B.強烈豐厚略帶苦澀的普洱茶',
            'C.圓順滑喉有明顯香氣的凍頂烏龍茶'
        ]
    },
    {
        question: '8.當你的朋友傳訊息告訴你我正在哭，你會...',
        options: [
            'A.跑過去抱他、安慰她',
            'B.打電話給他建議、解決問題',
            'C.告訴他有點忙，先把事情傳給我晚點看'
        ]
    },
    {
        question: '9.你在認真聽課或辦公，旁邊的朋友一直在聊天並且希望你加入一起聽，你會...',
        options: [
            'A.請他們專心做事，不要打擾其他人',
            'B.委婉的拒絕，告訴他自己在狀態中，不想分心',
            'C.不想掃興，加入一起聊天'
        ]
    },
    {
        question: '10.你遇見了傳說中的神燈精靈，他讓你在以下三個願望中選一個實現，你會選擇...',
        options: [
            'A.騎獨角獸在天上飛',
            'B.和喜歡的人兩情相悅在一起',
            'C.未來一年工作順利'
        ]
    },
    {
        question: '11.當你發現朋友的朋友和你有許多共同喜好，並且為人和善，你會...',
        options: [
            'A.直接和他本人見面聊天',
            'B.趁著朋友在的時候認識',
            'C.還不熟悉，還是算了吧'
        ]
    },
    {
        question: '12.當提到喝茶，你會想到以下哪一種喝茶方式…',
        options: [
            'A.熱水沖泡享受每一沖不同香氣',
            'B.冷泡清爽解暑帶有微微茶香',
            'C.手搖杯甜蜜解渴有不同風味'
        ]
    },
    {
        question: '13.在不合理的地方被上司刁難，你會...',
        options: [
            'A.提出事實和理由，據理力爭',
            'B.保持沉默並尋求解決方案',
            'C.蒐集資料，尋求更上層上司庇護或組織員工反抗'
        ]
    }
];

const MainPage = ({ onStartClick }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    var resu = 0;
    
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [personalityScores, setPersonalityScores] = useState({ R: 0, S: 0, T: 0 });
    // const [selectedOptionScore, setSelectedOptionScore] = useState(0);
    const handleOptionClick = (index) => {
        // 根據選項的索引設置相應的分數
        switch (index) {
            case 0:
                handleNextQuestion(3); // A選項為3分
                break;
            case 1:
                handleNextQuestion(2); // B選項為2分
                break;
            case 2:
                handleNextQuestion(1); // C選項為1分
                break;
            default:
                handleNextQuestion(0);
        }
    };

    const handleNextQuestion = (selectedOptionScore) => {
        if(currentQuestionIndex < questions.length - 1){
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        }
        
        if (currentQuestionIndex < questions.length ) {
            // 根據選擇的選項分數更新分數
            if (selectedOptionScore !== undefined) {
                const updatedScores = { ...personalityScores };

                // 根據不同問題更新不同人格特質的分數
                if (currentQuestionIndex === 1 || currentQuestionIndex === 4 || currentQuestionIndex === 7 || currentQuestionIndex === 10) {
                    updatedScores.R += selectedOptionScore;
                } else if (currentQuestionIndex === 0 || currentQuestionIndex === 2 || currentQuestionIndex === 8 || currentQuestionIndex === 12) {
                    updatedScores.S += selectedOptionScore;
                } else if (currentQuestionIndex === 5 || currentQuestionIndex === 9) {
                    updatedScores.T += selectedOptionScore;
                }
                setPersonalityScores(updatedScores);
            }
        
            }
        if (currentQuestionIndex === questions.length - 1){
                // 计算总分
                const { R, S, T } = personalityScores;
    
                switch (true) {
                    case R > 7 && S > 7 && T > 3:
                        resu = 7;
                        break;
                    case R > 7 && S > 7 && T < 4:
                        resu = 3;
                        break;
                    case R > 7 && S < 9 && T > 3:
                        resu = 2;
                        break;
                    case R > 7 && S < 9 && T < 4:
                        resu = 1;
                        break;   
                    case R < 9 && S > 7 && T > 3:
                        resu = 4;
                        break;     
                    case R < 9 && S > 7 && T < 4:
                        resu = 8;
                        break;     
                    case R < 9 && S < 9 && T > 3:
                        resu = 5;
                        break; 
                    default:
                        resu = 6;
                        break;
                    }
                    dispatch({ type: 'SET_PARAMETER', payload: resu });
                    navigate("/result");
        }
    };

    return (
        <div className="background-with-overlay" style={{ 
            backgroundImage: `url(${background})`,
          }}>
            <div className="inner-content font-bold text-green-950 flex justify-center items-center">
                <div className="w-6/7 h-24 border-white rounded-lg p-4 divide-y-2 border-2 font-bold text-sm flex flex-col items-center justify-center">
                    {questions[currentQuestionIndex].question}
                </div>
                <div className='row-span-2 w-6/7 flex flex-col items-center justify-center'>
                {questions[currentQuestionIndex].options.map((option, index) => (
                    <button key={index} className='font-bold text-sm w-full h-1/6 my-2 rounded-lg border-2' onClick={() => handleOptionClick(index)}>{option}</button>
                ))}
                </div>
            </div>
            </div>
    );
};

export default MainPage;
