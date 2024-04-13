import React from 'react';
import background from "../asset/result_bg.jpg";
import { useSelector } from 'react-redux';


const result_context = [
    {"title": "碧螺春綠茶（綠茶）",
    "type": "RYZ",
    "intro": "外觀新鮮碧綠，嫩芽牙尖有白毫，形狀細長並彎曲似螺旋形狀。有色、香、味、形四絕之美，可以說是台灣綠茶的特極品，新鮮、色翠、型美、甘醇和充滿活性的感覺，透明輕巧卻實則濃郁醇厚。在沖泡使用上這些葉片提供更多香氣物質，以及沖泡時候表現得完整口感層次，並且台灣碧螺春茶更有喉頭甜、甘蔗、回甘般的感受。",
    "person": "活潑開朗，但內心深處卻有豐富的情感。平時的他可能在社交場合中非常受歡迎，但實際上，他更偏好深入思考並享受獨處時光。會因為跟某人話題對到而開心的進到深入交流環節，漸漸了解他就會發現他學識淵博，跟外在的社牛形象有點反差。"},
    {"title": "文山包種茶（青茶）",
    "type": "RYT",
    "intro": "外觀芽葉自然捲曲、條索緊結整齊，色澤墨綠帶油光。茶湯水色蜜黃碧綠，入口滋味圓滑甘醇有活性，香氣則以具新鮮、幽雅撲鼻的清香為上品，清香幽雅似花香，是特別注重香氣品質的一種茶類。飲用文山包種茶，除了茶湯滋味滑潤，入口生津帶活性。",
    "person": "純樸卻又熟悉且暖心，對誰都很好，溫柔善良的個性使人想與他親近。大家遇到煩心事，常常會想跟他聊聊，因為聊完所獲得的正能量能讓人滿血復活，是大家心中的小太陽。"},
    {"title": "老式凍頂烏龍茶（青茶）",
    "type": "RSZ",
    "intro": "外觀講究整齊、龍形條索、葉尖捲曲呈現半球形，色澤墨綠帶油光。茶湯水色有金黃色、蜜黃色跟橙黃色。香氣以清純為重，製造過程中發酵較輕屬於花香、發酵較重屬於成熟果香。滋味上重視喉韻，圓滑順口、甘甜醇厚，在喉嚨有著清爽的餘韻，喉韻十足並且帶有明顯的焙火韻味和香氣，是講究喉韻的茶。",
    "person": "為人成熟，氣場強大，給人可靠且老練的感覺，只要是他說的話，都會讓人覺得有說服力。個性堅毅，沒有做不來的事，一旦下定決心要認真做一件事，一定會堅持到底。"},
    {"title": "鐵觀音茶（青茶）",
    "type": "XST",
    "intro": "茶條捲曲、壯結、沉重，呈青蒂綠腹蜻蜓頭狀。色澤鮮潤，砂綠顯，紅點明，葉表帶白霜，這是優質鐵觀音的重要特徵之一。茶湯色金黃，濃艷清澈，葉底肥厚明亮，具綢面光澤。依據不同的發酵度、季節、地質分列等級，香氣也各有特色。鐵觀音葉質厚實，經沖泡後香氣濃郁、回韻持久，味濃而醇厚，微澀中帶甘潤、香味高、回甘持久、韻味足，飲後齒頰留香，稱之為「觀音韻」。",
    "person": "深沉穩重，散發的神祕、獨特氣息讓人覺得難以捉摸，認識後會發現他意外的貼心且會照顧人。"},
    {"title": "東方美人茶（青茶）",
    "type": "XYT",
    "intro": "東方美人的製茶程式精細繁瑣。 因為採細嫩的心芽製成，所以茶湯富含豐富的胺基酸，滋味甘甜爽口，茶湯不苦不澀， 茶樹嫩芽經茶小綠葉蟬吸食，茶菁因異常代謝生成特殊物質而產生天然蜜香味，東方美人茶的茶葉形態勻整，色澤翠綠，葉片完整，展開後色澤鮮豔，造型美觀。",
    "person": "在嚴厲家教下長成的公主，永遠以最好的姿態待人且為人處事真誠有禮"},
    {"title": "台茶18號紅玉紅茶（紅茶",
    "type": "XYZ",
    "intro": "散發出淡淡之薄荷加肉桂香，滋味醇厚，茶湯口感收斂性強，入喉具強烈收縮感，會有些微澀的感覺，喝起來無甜分，此乃茶多酚含量高，經全發酵後，轉化成茶黃質及茶紅質，有豐富內涵之呈現。此種迷人之香氣及滋味，即源自於原生種台灣山茶，是極為獨特之品種。",
    "person": "強烈且獨特有個性，初見時會覺得難以親近，卻讓人忍不住想  更加了解"},
    {"title": "台茶8號阿薩姆紅茶（紅茶）",
    "type": "RST",
    "intro": "茶湯偏紅、亮澤，沖泡時香氣撲鼻，味道濃郁富有甘醇香氣，濃稠、濃烈、有麥芽香或蔗糖香，口感略帶澀味，茶香濃郁活潑的茶韻基底調性使其極適合拿來當奶茶飲用。",
    "person": "是派對的中心，亮眼且活潑的個性與所有人都處的來，不論是外國人或老人小孩都是他的朋友"},
    {"title": "普洱茶（黑茶）",
    "type": "XSZ",
    "intro": "普洱茶因制程特殊而具備後發酵的能力，生茶品風味天然、氣強，較苦澀而喉韻明顯，陳放可使苦澀降低並產生迷人的陳韻，優質陳茶香氣融合，湯滑水甜，茶質口感豐厚具包覆感，使品飲者深度感受其韻味，即為普洱特有的茶韻。",
    "person": "具有天然的魅力和氣質，不經過修飾也能散發出獨特的魅力，讓人心生敬畏，經過時間的沉澱而變得更加迷人，具有悠然自得的態度，不急不躁，懂得等待和享受生活中的美好。"},
]

const ResultPage = ({ onStartClick }) => {
    const parameter = useSelector(state => state.result) ;

    return (
        <div className="h-screen w-screen bg-cover bg-center flex items-center justify-center" style={{ 
            backgroundImage: `url(${background})`,
          }}>
            <div className='h-3/4 w-3/4 grid grid-row-3 grid-flow-row gap-4'>
                <div className='row-span-1 flex flex-col justify-center items-center gap-2'>
                    <div className='w-40 flex justify-center items-center'>{result_context[parameter].title}</div> 
                    <div className='w-24 flex justify-center items-center'>{result_context[parameter].type}</div> 
                </div>
                <div className='row-span-2 flex flex-col items-center justify-center gap-4 overflow-y-scroll'>
                    <div className='text-sm'>
                        <span> 茶種介紹 </span>
                        <div>
                            {result_context[parameter].intro}
                        </div>
                    </div>
                    <div className='text-sm'>
                        <span> 性格特徵 </span>
                        <div>
                            {result_context[parameter].person}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResultPage;
