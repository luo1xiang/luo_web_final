'use client';

import { useState, useEffect } from 'react';
import MobileFrame from '@/component/layout/MobileFrame';
import { usePsyStore, useQuestionStore } from '@/app/store/store';
import Image from 'next/image';

// 修正圖片路徑 - 使用 end.png 作為背景
const bgImg = '/end.png';
const result1Img = '/1.png';
const result2Img = '/2.png';
const result3Img = '/3.png';
const result4Img = '/4.png';
const result5Img = '/5.png';

export default function ResultPage() {
  const psyState = usePsyStore((state) => state);
  const questionStore = useQuestionStore((state) => state);
  
  // 動畫狀態控制
  const [isVisible, setIsVisible] = useState(false);
  const [animationKey, setAnimationKey] = useState(0);
  const [backgroundLoaded, setBackgroundLoaded] = useState(false);

  // 頁面進入動畫 - 增加背景載入檢測
  useEffect(() => {
    setIsVisible(false);
    setAnimationKey(prev => prev + 1);
    
    // 等待背景圖片載入後才開始動畫
    const img = new window.Image();
    img.onload = () => {
      setBackgroundLoaded(true);
      setTimeout(() => {
        setIsVisible(true);
      }, 100);
    };
    img.src = bgImg;

    return () => {
      img.onload = null;
    };
  }, []);

  // 修正重新開始邏輯
  const playAgain = function() {
    try {
      // 添加淡出效果
      setIsVisible(false);
      
      setTimeout(() => {
        // 1. 重置所有 store 狀態
        psyState.resetScore();
        questionStore.resetQuestions();
        
        // 2. 確保狀態已經重置後再跳轉
        setTimeout(() => {
          // 如果你有路由系統，使用路由跳轉而不是 reload
          // 例如：router.push('/'); 或 navigate('/');
          
          // 或者使用 replace 而不是 reload 來避免緩存問題
          window.location.replace(window.location.origin + window.location.pathname.replace('/result', ''));
        }, 100);
      }, 300); // 等待淡出動畫完成
      
    } catch (error) {
      console.error('重置失敗:', error);
      // 備用方案：強制刷新
      window.location.reload(true);
    }
  }

  // 根據分數選擇結果數據
  const getResultData = () => {
    if (psyState.score >= 7 && psyState.score <= 14) {
      return {
        image: result1Img,
        title: "🌈 KTV順唱者",
        subtitle: "王心凌《愛你》",
        description: "你善於演出、懂得配合節奏，總能說出「對的話」，但也容易忽略自己的聲音。",
        suggestion: "✨ 建議：唱一首只屬於自己的歌吧",
        score: "7-14分",
        spotifyUrl: "https://open.spotify.com/track/6T7oK4eP3Tezw4Ogy7q6KO?si=4004e6cadfcf49f2"
      };
    } else if (psyState.score >= 15 && psyState.score <= 21) {
      return {
        image: result2Img,
        title: "🎞 懷舊記憶師",
        subtitle: "周杰倫《夜曲》",
        description: "你是記憶的收藏家，喜歡回放那些熟悉的旋律，也容易卡在昨天的歌單裡。",
        suggestion: "✨ 提醒：新的你，也值得一首新歌。",
        score: "15-21分",
        spotifyUrl: "https://open.spotify.com/track/5rzlpdJ1LDX5VcARtsPKC8?si=1555ea9104194449"
      };
    } else if (psyState.score >= 22 && psyState.score <= 28) {
      return {
        image: result3Img,
        title: "🔊 聲音拼貼師",
        subtitle: "蔡依林《天空》",
        description: "你把傷痕拼成旋律，把錯拍當成節奏，是用「不完美」寫自己的專輯作者。",
        suggestion: "✨ 問題是：你願意讓別人聽到這張專輯嗎？",
        score: "22-28分",
        spotifyUrl: "https://open.spotify.com/track/0mBAfQuVGW2YHZvUM2NsLb?si=735330239dfc4920"
      };
    } else if (psyState.score >= 29 && psyState.score <= 35) {
      return {
        image: result4Img,
        title: "🧬 潛意識電台",
        subtitle: "孫燕姿《雨天》",
        description: "你總是讓那些被壓下的聲音偷偷播出，熟悉怎麼把自己藏在別人的歌詞裡。",
        suggestion: "✨ 也許，是時候開自己的頻道了。",
        score: "29-35分",
        spotifyUrl: "https://open.spotify.com/track/5tZbcQ5PYID0xB0VNblmrK?si=a393e1bc46f44839"
      };
    } else {
      return {
        image: result5Img,
        title: "🔮 靜音混音師",
        subtitle: "王菲《人間》",
        description: "你最懂什麼話該不說，什麼聲音該靜音。你用「不發聲」來創造一種超然的存在。",
        suggestion: "✨ 或許，沉默不是消失，而是你的樂器。",
        score: "36-49分",
        spotifyUrl: "https://open.spotify.com/track/1u25V63Qw64EkVh90Jyrmh?si=2085354e389649cc"
      };
    }
  };

  const resultData = getResultData();

  return (
    <>
      {/* 瀏覽器視窗背景圖片 - 使用 end.png */}
      <div className="fixed inset-0 z-0">
        <div className={`w-full h-full transition-all duration-1000 ease-out
                        ${backgroundLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`}>
          <Image 
            src={bgImg} 
            alt="result background" 
            fill
            className="object-cover"
            style={{
              objectPosition: 'center',
            }}
            priority
            sizes="100vw"
            onLoad={() => setBackgroundLoaded(true)}
          />
        </div>
        
        {/* 背景過場效果 - 從暗到亮的淡入 */}
        <div className={`absolute inset-0 bg-black transition-opacity duration-1500 ease-out
                        ${backgroundLoaded && isVisible ? 'opacity-0' : 'opacity-30'}`}></div>
      </div>
      
      <MobileFrame>
        {/* 深色神秘覆蓋層 - 適配 end.png 的氛圍 */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 via-gray-800/30 to-stone-900/50"></div>
        
        {/* 動態光影效果層 - 調整為更神秘的效果 */}
        <div className="absolute inset-0 overflow-hidden">
          {/* 旋轉光環 - 更微妙的效果 */}
          <div className="absolute top-1/2 left-1/2 w-96 h-96 -translate-x-1/2 -translate-y-1/2">
            <div className="w-full h-full rounded-full bg-gradient-to-r from-transparent via-slate-100/2 to-transparent 
                            animate-spin" style={{animationDuration: '25s'}}></div>
          </div>
          
          {/* 神秘浮動光點 */}
          <div className="absolute top-20 left-10 w-1.5 h-1.5 bg-slate-300/15 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-16 w-2 h-2 bg-gray-300/20 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-32 left-20 w-1 h-1 bg-stone-300/15 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-48 right-8 w-2.5 h-2.5 bg-slate-300/20 rounded-full animate-bounce" style={{animationDelay: '0.5s'}}></div>
          
          {/* 神秘波動效果 */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-slate-200/3 to-transparent 
                          animate-pulse" style={{animationDuration: '5s'}}></div>
        </div>
        
        {/* 神秘氛圍燈光效果 */}
        <div className="absolute inset-0 bg-gradient-to-tl from-slate-200/20 via-gray-100/15 to-stone-200/25 animate-pulse" style={{animationDuration: '8s'}}></div>
        
        {/* 入場過場效果 */}
        <div className={`absolute inset-0 bg-gradient-to-b from-black via-transparent to-black transition-all duration-2000 ease-out
                        ${isVisible ? 'opacity-0 scale-100' : 'opacity-60 scale-105'}`}></div>
        
        {/* 可滾動的主要內容容器 */}
        <div className={`relative z-20 h-full overflow-y-auto transition-all duration-1000 ease-out
                        ${isVisible ? 'opacity-100 transform translate-y-0 scale-100' : 
                          'opacity-0 transform translate-y-12 scale-95'}`}
             key={animationKey}>
          <div className='flex flex-col items-center justify-center py-2 px-4 h-full'>
            
            {/* 主要內容容器 */}
            <div className={`w-full max-w-sm mx-auto relative transition-all duration-1200 ease-out delay-200
                            ${isVisible ? 'opacity-100 transform translate-y-0 rotate-0' : 
                              'opacity-0 transform translate-y-16 rotate-1'}`}>
              
              {/* 主要面板背景 - 調整為適配 end.png 的深色神秘風格 */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-50/85 via-gray-50/80 to-stone-50/85 
                              rounded-3xl shadow-2xl backdrop-blur-md border-2 border-slate-300/60
                              before:absolute before:inset-2 before:border before:border-gray-400/50 before:rounded-2xl
                              after:absolute after:inset-4 after:border after:border-slate-300/40 after:rounded-xl
                              transition-all duration-1000 ease-in-out"></div>
              
              {/* 神秘光暈效果 */}
              <div className="absolute -inset-4 bg-gradient-to-r from-slate-400/8 via-gray-300/12 to-stone-400/8 
                              rounded-full blur-xl animate-pulse opacity-70"></div>
              
              {/* 內容區域 */}
              <div className="relative z-10 p-4 pt-3">
                
                {/* 結局標籤 */}
                <div className={`flex justify-center mb-3 transition-all duration-800 ease-out delay-400
                                ${isVisible ? 'opacity-100 transform translate-y-0 scale-100' : 
                                  'opacity-0 transform -translate-y-6 scale-75'}`}>
                  <div className="relative group">
                    <div className="w-12 h-12 bg-gradient-to-br from-slate-600/90 to-gray-500/90 rounded-full 
                                  flex items-center justify-center shadow-lg border-3 border-white/60
                                  before:absolute before:inset-1 before:rounded-full before:border before:border-white/40
                                  transition-all duration-500 group-hover:scale-110 group-hover:rotate-12">
                      <span className="text-white font-bold text-sm drop-shadow-md">🎧</span>
                    </div>
                    {/* 神秘裝飾點 */}
                    <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-slate-400/80 rounded-full border border-white/70 shadow-sm
                                  animate-ping"></div>
                    <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-gray-400/80 rounded-full border border-white/70 shadow-sm
                                  animate-bounce" style={{animationDelay: '0.5s'}}></div>
                  </div>
                </div>
                
                {/* 結局標題 */}
                <div className={`text-center mb-3 transition-all duration-900 ease-out delay-500
                                ${isVisible ? 'opacity-100 transform translate-x-0' : 
                                  'opacity-0 transform -translate-x-12'}`}>
                  <div className="inline-block px-4 py-2 bg-gradient-to-r from-slate-600/90 to-gray-500/90 
                                rounded-full shadow-lg border border-white/50 backdrop-blur-sm
                                hover:scale-105 transition-all duration-300">
                    <h2 className="text-white font-bold text-xs drop-shadow-md leading-tight">
                      🎧 結局分析｜你的「聲音共振旋律」
                    </h2>
                  </div>
                </div>

                {/* 結果圖片 */}
                <div className={`flex justify-center mb-4 transition-all duration-1000 ease-out delay-600
                                ${isVisible ? 'opacity-100 transform translate-y-0 scale-100' : 
                                  'opacity-0 transform translate-y-8 scale-90'}`}>
                  <div className="relative group">
                    {/* 可點擊的圖片連結 */}
                    <a 
                      href={resultData.spotifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block relative group/link"
                      title="在 Spotify 上聆聽這首歌"
                    >
                      {/* 圖片容器 */}
                      <div className="w-28 h-28 bg-gradient-to-br from-slate-100/80 via-gray-100/75 to-stone-100/80 
                                    rounded-2xl shadow-lg border-2 border-slate-200/70 overflow-hidden
                                    group-hover/link:shadow-xl transition-all duration-300 relative
                                    group-hover/link:scale-105 group-hover/link:border-green-400/60">
                        {/* Spotify 綠色光效 */}
                        <div className="absolute inset-0 bg-gradient-to-r from-green-400/0 via-green-400/20 to-green-400/0 
                                      opacity-0 group-hover/link:opacity-100 transition-opacity duration-500 
                                      translate-x-[-100%] group-hover/link:translate-x-[100%] transition-transform duration-1000"></div>
                        
                        {/* 神秘光效 */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent 
                                      opacity-0 group-hover/link:opacity-100 transition-opacity duration-500 
                                      translate-x-[-100%] group-hover/link:translate-x-[100%] transition-transform duration-1000"></div>
                        
                        <Image 
                          src={resultData.image} 
                          alt={resultData.title}
                          className="w-full h-full object-cover group-hover/link:scale-105 transition-all duration-500"
                          width={112}
                          height={112}
                          priority
                        />
                        
                        {/* Spotify 圖標提示 */}
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/link:opacity-100 
                                      transition-opacity duration-300 flex items-center justify-center">
                          <div className="text-green-400 text-2xl transform scale-75 group-hover/link:scale-100 
                                        transition-transform duration-300">
                            🎵
                          </div>
                        </div>
                      </div>
                      
                      {/* Spotify 提示標籤 */}
                      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 
                                    bg-green-500 text-white text-xs px-2 py-1 rounded-full 
                                    opacity-0 group-hover/link:opacity-100 transition-all duration-300
                                    translate-y-2 group-hover/link:translate-y-0 pointer-events-none
                                    shadow-lg border border-green-400">
                        <span className="whitespace-nowrap">在 Spotify 聆聽</span>
                        <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 
                                      w-2 h-2 bg-green-500 rotate-45 border-l border-t border-green-400"></div>
                      </div>
                    </a>
                    
                    {/* 神秘音符裝飾 */}
                    <div className="absolute -top-2 -right-2 text-slate-600/60 text-base animate-bounce pointer-events-none">♪</div>
                    <div className="absolute -bottom-2 -left-2 text-gray-600/60 text-xs animate-pulse delay-300 pointer-events-none">♫</div>
                  </div>
                </div>

                {/* 分數標籤 */}
                <div className={`mb-3 relative group transition-all duration-1000 ease-out delay-700
                                ${isVisible ? 'opacity-100 transform translate-y-0 scale-100' : 
                                  'opacity-0 transform translate-y-8 scale-95'}`}>
                  <div className="bg-gradient-to-br from-slate-100/80 via-gray-100/75 to-stone-100/80 p-2.5 rounded-xl 
                                shadow-md border border-slate-200/70 relative overflow-hidden text-center
                                group-hover:shadow-lg transition-all duration-300">
                    <div className="text-slate-800 text-xs font-medium">{resultData.score}</div>
                  </div>
                </div>

                {/* 結果類型 */}
                <div className={`mb-3 relative group transition-all duration-1000 ease-out delay-800
                                ${isVisible ? 'opacity-100 transform translate-y-0 scale-100' : 
                                  'opacity-0 transform translate-y-8 scale-95'}`}>
                  <div className="bg-gradient-to-br from-slate-100/80 via-gray-100/75 to-stone-100/80 p-2.5 rounded-xl 
                                shadow-md border border-slate-200/70 relative overflow-hidden text-center
                                group-hover:shadow-lg transition-all duration-300">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent 
                                  opacity-0 group-hover:opacity-100 transition-opacity duration-500 
                                  translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                    <h3 className="text-slate-800 text-sm font-bold relative z-10 mb-1">{resultData.title}</h3>
                    <p className="text-slate-700 text-xs relative z-10">主題曲：{resultData.subtitle}</p>
                  </div>
                </div>

                {/* 結果描述 */}
                <div className={`mb-3 relative group transition-all duration-1000 ease-out delay-900
                                ${isVisible ? 'opacity-100 transform translate-y-0 scale-100' : 
                                  'opacity-0 transform translate-y-8 scale-95'}`}>
                  <div className="bg-gradient-to-br from-slate-100/80 via-gray-100/75 to-stone-100/80 p-3 rounded-xl 
                                shadow-md border border-slate-200/70 relative overflow-hidden
                                group-hover:shadow-lg transition-all duration-300">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent 
                                  opacity-0 group-hover:opacity-100 transition-opacity duration-500 
                                  translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                    <p className="text-slate-800 text-xs leading-relaxed text-center relative z-10 font-medium">
                      {resultData.description}
                    </p>
                  </div>
                </div>

                {/* 建議文字 */}
                <div className={`mb-4 relative group transition-all duration-1000 ease-out delay-1000
                                ${isVisible ? 'opacity-100 transform translate-y-0 scale-100' : 
                                  'opacity-0 transform translate-y-8 scale-95'}`}>
                  <div className="bg-gradient-to-br from-slate-100/80 via-gray-100/75 to-stone-100/80 p-2.5 rounded-xl 
                                shadow-md border border-slate-200/70 relative overflow-hidden
                                group-hover:shadow-lg transition-all duration-300">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent 
                                  opacity-0 group-hover:opacity-100 transition-opacity duration-500 
                                  translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                    <p className="text-slate-700 text-xs leading-relaxed text-center relative z-10 font-medium italic">
                      {resultData.suggestion}
                    </p>
                  </div>
                </div>

                {/* 再玩一次按鈕 */}
                <div className={`text-center transition-all duration-1200 ease-out delay-1100
                                ${isVisible ? 'opacity-100 transform translate-y-0 scale-100' : 
                                  'opacity-0 transform translate-y-6 scale-90'}`}>
                  <button 
                    className="group w-full relative overflow-hidden rounded-xl shadow-md 
                             hover:shadow-lg transition-all duration-500 hover:-translate-y-1
                             active:translate-y-0 active:shadow-sm hover:scale-[1.02]"
                    onClick={playAgain}
                    type="button"
                  >
                    {/* 神秘深色按鈕背景 */}
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-500/80 via-gray-500/80 to-stone-500/80 
                                  group-hover:from-slate-400/90 group-hover:via-gray-400/90 group-hover:to-stone-400/90 
                                  transition-all duration-300"></div>
                    
                    {/* 神秘光澤效果 */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent 
                                  group-hover:via-white/20 transition-all duration-300
                                  translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-800"></div>
                    
                    {/* 按鈕邊框 */}
                    <div className="absolute inset-0 border border-white/30 rounded-xl 
                                  group-hover:border-white/50 transition-all duration-300"></div>
                    
                    {/* 按鈕內容 */}
                    <div className="relative z-10 px-4 py-2.5 min-h-[44px] flex items-center justify-center">
                      <span className="text-white text-sm font-medium text-center leading-tight 
                                     drop-shadow-md group-hover:text-white transition-colors duration-300">
                        🎵 再次聆聽你的聲音
                      </span>
                    </div>
                    
                    {/* 神秘裝飾效果 */}
                    <div className="absolute top-2 left-3 w-1.5 h-1.5 rounded-full bg-white/25 animate-pulse"></div>
                    <div className="absolute bottom-2 right-3 w-1 h-1 rounded-full bg-white/20 animate-ping"></div>
                  </button>
                </div>
              </div>
              
              {/* 神秘音符裝飾 */}
              <div className={`absolute -top-3 -left-3 text-slate-600/40 text-xl animate-bounce
                              transition-all duration-1200 ease-out delay-1200
                              ${isVisible ? 'opacity-100 transform rotate-0' : 
                                'opacity-0 transform -rotate-45'}`}>♪</div>
              <div className={`absolute -top-2 -right-4 text-gray-600/40 text-lg animate-pulse delay-300
                              transition-all duration-1200 ease-out delay-1300
                              ${isVisible ? 'opacity-100 transform rotate-0' : 
                                'opacity-0 transform rotate-45'}`}>♫</div>
              <div className={`absolute -bottom-4 -left-2 text-stone-600/40 text-base animate-bounce delay-500
                              transition-all duration-1200 ease-out delay-1400
                              ${isVisible ? 'opacity-100 transform rotate-0' : 
                                'opacity-0 transform -rotate-30'}`}>♬</div>
              <div className={`absolute -bottom-3 -right-3 text-slate-600/40 text-lg animate-pulse delay-700
                              transition-all duration-1200 ease-out delay-1500
                              ${isVisible ? 'opacity-100 transform rotate-0' : 
                                'opacity-0 transform rotate-30'}`}>♪</div>
            </div>

          </div>
        </div>
      </MobileFrame>
    </>
  );
}