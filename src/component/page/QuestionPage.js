'use client';

import { useState, useEffect } from 'react';
import MobileFrame from '@/component/layout/MobileFrame';
import Image from 'next/image';
import bg1 from '@/../public/bg1.png';
import bg2 from '@/../public/bg2.png';
import bg3 from '@/../public/bg3.png';
import bg4 from '@/../public/bg4.png';
import bg5 from '@/../public/bg5.png';
import bg6 from '@/../public/bg6.png';
import bg7 from '@/../public/bg7.png';
import { usePsyStore, useQuestionStore } from '@/app/store/store'

export default function QuestionPage({questionIndex, nextStep}) {

  const psyData = usePsyStore((state) => state);
  const questionData = useQuestionStore((state) => state);
  
  // 動畫狀態控制
  const [isVisible, setIsVisible] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const [animationKey, setAnimationKey] = useState(0);
  const [backgroundTransition, setBackgroundTransition] = useState(false);

  // 音樂主題問題數據
  const musicQuestions = [
    {
      title: "時光經典區《初次播放》",
      description: "你走進青春專區，哪首老歌最能喚醒你？",
      backgroundImage: bg1,
      options: [
        { title: "周杰倫《晴天》──教室窗邊的藍天記憶", value: 1 },
        { title: "楊丞琳《雨愛》──無聲爭吵後的走廊獨行", value: 3 },
        { title: "五月天《知足》──那句沒說出口的道別", value: 5 },
        { title: "林宥嘉《神秘嘉賓》──對一個背影念念不忘", value: 7 }
      ]
    },
    {
      title: "耳機回收箱《遺忘之聲》",
      description: "一副舊耳機自動播放聲音，你聽見什麼？",
      backgroundImage: bg2,
      options: [
        { title: "S.H.E《Super Star》──最早的偶像夢，被笑太幼稚", value: 1 },
        { title: "林俊傑《江南》──記下卻沒送出的喜歡", value: 3 },
        { title: "光良《第一次》──那些偷偷寫進筆記本的情感", value: 5 },
        { title: "張惠妹《記得》──一段刻意清除的過往", value: 7 }
      ]
    },
    {
      title: "試聽室《錯拍與創作》",
      description: "你在試聽室踩到錯拍旋律，該播放哪段舊曲？",
      backgroundImage: bg3,
      options: [
        { title: "梁靜茹《可惜不是你》──那段不敢表白的守候", value: 1 },
        { title: "張韶涵《隱形的翅膀》──鼓起勇氣卻受傷", value: 3 },
        { title: "蔡依林《日不落》──被誤解的閃耀與努力", value: 5 },
        { title: "蘇打綠《小情歌》（電子版）──自我翻修的過去", value: 7 }
      ]
    },
    {
      title: "記憶翻錄區《剪接工作台》",
      description: "你站在翻錄機前，哪段記憶你想剪接？",
      backgroundImage: bg4,
      options: [
        { title: "孫燕姿《我不難過》──蓋過所有情緒的外表", value: 1 },
        { title: "周杰倫《以父之名》──將痛苦敘事換成戲劇", value: 3 },
        { title: "五月天《OAOA》──編輯進自己的快樂版本", value: 5 },
        { title: "林憶蓮《至少還有你》（無歌詞版）──只留旋律，不留語意", value: 7 }
      ]
    },
    {
      title: "KTV練唱室《回放尷尬演出》",
      description: "KTV突然開機，哪首尷尬舊曲你願意重唱？",
      backgroundImage: bg5,
      options: [
        { title: "王心凌《Honey》──微笑中藏著不自在", value: 1 },
        { title: "羅志祥《精舞門》──用笑鬧掩蓋害羞", value: 3 },
        { title: "蔡依林《花蝴蝶》──閃耀中帶著防衛", value: 5 },
        { title: "陳奕迅《浮誇》──誇張是一種求救", value: 7 }
      ]
    },
    {
      title: "黑市音軌區《限量救援》",
      description: "浪潮快沖走唱片，你只能救一首歌。",
      backgroundImage: bg6,
      options: [
        { title: "Energy《放手》──那群曾經並肩的好友", value: 1 },
        { title: "張棟樑《當你孤單你會想起誰》──聊天室裡的青春", value: 3 },
        { title: "范瑋琪《最初的夢想》──家人語音中的鼓勵", value: 5 },
        { title: "丁噹《猜不透》──自己錄的未傳語音", value: 7 }
      ]
    },
    {
      title: "刻錄機房《最後一軌》",
      description: "最後，你決定把哪首歌刻進人生黑膠？",
      backgroundImage: bg7,
      options: [
        { title: "周杰倫《聽媽媽的話》──安穩、指引", value: 1 },
        { title: "蔡依林《我》──自我定義與斷裂", value: 3 },
        { title: "五月天《倔強》──承認脆弱的勇氣", value: 5 },
        { title: "王菲《紅豆》（靜音版）──選擇沉默與內斂", value: 7 }
      ]
    }
  ];

  // 页面进入动画
  useEffect(() => {
    setIsVisible(false);
    setIsExiting(false);
    setBackgroundTransition(true);
    setAnimationKey(prev => prev + 1);
    
    // 背景轉場動畫
    const backgroundTimer = setTimeout(() => {
      setBackgroundTransition(false);
    }, 200);
    
    // 內容進入動畫
    const contentTimer = setTimeout(() => {
      setIsVisible(true);
    }, 400);

    return () => {
      clearTimeout(backgroundTimer);
      clearTimeout(contentTimer);
    };
  }, [questionIndex]);

  const clickAnswer = function(option){
    // 开始退出动画
    setIsExiting(true);
    setBackgroundTransition(true);
    
    // 延迟执行数据更新和页面切换
    setTimeout(() => {
      // 更新心理測驗分數
      psyData.updateScore(psyData.score + option.value);
      
      // 記錄答案到 questionStore
      questionData.addAnswer({
        questionIndex: questionIndex,
        selectedOption: option,
        timestamp: new Date().toISOString()
      });
      
      console.log(`Q${questionIndex + 1}:`, option.title, option.value);
      console.log('當前總分:', psyData.score + option.value);
      
      // 如果還有下一步，則執行
      if (nextStep) {
        nextStep();
      }
    }, 500); // 增加等待時間以配合背景切換
  }

  // 確保 questionIndex 在有效範圍內
  if (questionIndex < 0 || questionIndex >= musicQuestions.length) {
    return (
      <MobileFrame>
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center text-red-600">
            <h2 className="text-xl font-bold mb-2">問題索引錯誤</h2>
            <p>問題索引 {questionIndex} 超出範圍 (0-{musicQuestions.length - 1})</p>
          </div>
        </div>
      </MobileFrame>
    );
  }

  // 獲取當前問題的背景圖片
  const currentQuestion = musicQuestions[questionIndex];

  return (
    <>
      {/* 動態背景圖片與效果層 */}
      <div className="fixed inset-0 z-0">
        {/* 背景圖片容器 */}
        <div className={`absolute inset-0 transition-all duration-700 ease-in-out ${backgroundTransition ? 'opacity-0 transform scale-105' : 'opacity-100 transform scale-100'}`}>
          <Image 
            src={currentQuestion.backgroundImage}
            alt={`Question ${questionIndex + 1} background`}
            fill
            className="object-cover transition-transform duration-700 ease-in-out"
            style={{
              objectPosition: 'center 40%',
            }}
            priority
            sizes="100vw"
          />
        </div>
        
        {/* 復古氛圍強化層 */}
        <div className={`absolute inset-0 bg-gradient-to-b from-amber-500/10 via-transparent to-orange-900/20 transition-opacity duration-500 ${backgroundTransition ? 'opacity-0' : 'opacity-100'}`}></div>
        
        {/* 溫暖光暈效果 */}
        <div className={`absolute inset-0 bg-gradient-to-tr from-orange-400/15 via-transparent to-amber-400/10 transition-opacity duration-500 delay-100 ${backgroundTransition ? 'opacity-0' : 'opacity-100'}`}></div>
        
        {/* 漂浮光點 */}
        <div className={`absolute inset-0 overflow-hidden pointer-events-none transition-opacity duration-500 delay-200 ${backgroundTransition ? 'opacity-0' : 'opacity-100'}`}>
          <div className="absolute w-2 h-2 bg-amber-300/60 rounded-full animate-pulse" style={{top: '15%', left: '10%', animationDuration: '4s', animationDelay: '0s'}}></div>
          <div className="absolute w-1.5 h-1.5 bg-orange-300/70 rounded-full animate-pulse" style={{top: '25%', right: '15%', animationDuration: '5s', animationDelay: '1s'}}></div>
          <div className="absolute w-3 h-3 bg-yellow-300/50 rounded-full animate-pulse" style={{top: '45%', left: '8%', animationDuration: '6s', animationDelay: '2s'}}></div>
          <div className="absolute w-2 h-2 bg-amber-400/55 rounded-full animate-pulse" style={{top: '65%', right: '12%', animationDuration: '4.5s', animationDelay: '3s'}}></div>
        </div>
        
        {/* 大範圍光暈 */}
        <div className={`absolute inset-0 overflow-hidden pointer-events-none transition-opacity duration-500 delay-300 ${backgroundTransition ? 'opacity-0' : 'opacity-100'}`}>
          <div className="absolute w-96 h-96 bg-amber-400/20 rounded-full blur-3xl animate-pulse opacity-40" style={{top: '10%', left: '5%', animationDuration: '8s'}}></div>
          <div className="absolute w-80 h-80 bg-orange-400/25 rounded-full blur-3xl animate-pulse opacity-35" style={{top: '20%', right: '10%', animationDuration: '10s', animationDelay: '2s'}}></div>
          <div className="absolute w-72 h-72 bg-yellow-400/20 rounded-full blur-3xl animate-pulse opacity-30" style={{bottom: '15%', left: '15%', animationDuration: '12s', animationDelay: '4s'}}></div>
        </div>
        
        {/* 復古漸變覆蓋 */}
        <div className={`absolute inset-0 bg-gradient-to-br from-amber-500/5 via-transparent to-orange-600/8 animate-pulse opacity-60 transition-opacity duration-500 delay-400 ${backgroundTransition ? 'opacity-0' : 'opacity-100'}`} style={{animationDuration: '15s'}}></div>
        
        {/* 轉場遮罩效果 */}
        <div className={`absolute inset-0 bg-white/20 backdrop-blur-sm transition-opacity duration-300 ${backgroundTransition ? 'opacity-100' : 'opacity-0'}`}></div>
      </div>
      
      <MobileFrame>
        {/* 復古暖色調覆蓋層 */}
        <div className="absolute inset-0 bg-gradient-to-b from-amber-900/25 via-orange-900/20 to-yellow-900/25"></div>
        
        {/* 復古濾鏡效果 */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-600/10 via-orange-500/8 to-yellow-600/12"></div>
        
        {/* 動態光影效果層 */}
        <div className="absolute inset-0 overflow-hidden">
          {/* 旋轉光環 */}
          <div className="absolute top-1/2 left-1/2 w-96 h-96 -translate-x-1/2 -translate-y-1/2">
            <div className="w-full h-full rounded-full bg-gradient-to-r from-transparent via-white/3 to-transparent 
                            animate-spin" style={{animationDuration: '20s'}}></div>
          </div>
          
          {/* 浮動光點 */}
          <div className="absolute top-20 left-10 w-2 h-2 bg-amber-300/20 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-16 w-3 h-3 bg-yellow-300/25 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-32 left-20 w-1.5 h-1.5 bg-orange-300/20 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-48 right-8 w-2.5 h-2.5 bg-amber-300/25 rounded-full animate-bounce" style={{animationDelay: '0.5s'}}></div>
          
          {/* 波動效果 */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-200/5 to-transparent 
                          animate-pulse" style={{animationDuration: '4s'}}></div>
        </div>
        
        {/* 溫暖的燈光效果 */}
        <div className="absolute inset-0 bg-gradient-to-tl from-orange-200/30 via-amber-100/25 to-yellow-200/35 animate-pulse" style={{animationDuration: '6s'}}></div>
        
        {/* 可滾動的主要內容容器 */}
        <div className={`relative z-20 min-h-screen overflow-y-auto transition-all duration-700 ease-out ${isVisible && !isExiting ? 'opacity-100 transform translate-y-0 scale-100' : isExiting ? 'opacity-0 transform -translate-y-12 scale-90' : 'opacity-0 transform translate-y-12 scale-90'}`}
             key={animationKey}>
          <div className='flex flex-col items-center justify-start py-4 px-4 min-h-screen'>
            
            {/* 主要內容容器 */}
            <div className={`w-full max-w-sm mx-auto relative my-auto transition-all duration-1000 ease-out delay-200 ${isVisible && !isExiting ? 'opacity-100 transform translate-y-0 rotate-0 scale-100' : isExiting ? 'opacity-0 transform translate-y-8 -rotate-3 scale-95' : 'opacity-0 transform translate-y-16 rotate-3 scale-95'}`}>
              
              {/* 主要面板背景 - 統一復古暖色調 */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-50/80 via-orange-50/75 to-yellow-50/80 
                              rounded-3xl shadow-2xl backdrop-blur-md border-2 border-amber-300/50
                              before:absolute before:inset-2 before:border before:border-amber-400/40 before:rounded-2xl
                              after:absolute after:inset-4 after:border after:border-yellow-300/30 after:rounded-xl
                              transition-all duration-1000 ease-in-out"></div>
              
              {/* 光暈效果 */}
              <div className="absolute -inset-4 bg-gradient-to-r from-amber-400/10 via-orange-300/15 to-yellow-400/10 
                              rounded-full blur-xl animate-pulse opacity-50"></div>
              
              {/* 內容區域 */}
              <div className="relative z-10 p-6 pt-5">
                
                {/* Q標籤 - 統一復古徽章設計 */}
                <div className={`flex justify-center mb-5 transition-all duration-800 ease-out delay-400 ${isVisible && !isExiting ? 'opacity-100 transform translate-y-0 scale-100' : 'opacity-0 transform -translate-y-8 scale-75'}`}>
                  <div className="relative group">
                    <div className="w-14 h-14 bg-gradient-to-br from-amber-600/90 to-orange-500/90 rounded-full 
                                  flex items-center justify-center shadow-lg border-3 border-white/50
                                  before:absolute before:inset-1 before:rounded-full before:border before:border-white/30
                                  transition-all duration-500 group-hover:scale-110 group-hover:rotate-12">
                      <span className="text-white font-bold text-base drop-shadow-md">{questionIndex+1}</span>
                    </div>
                    {/* 裝飾點 */}
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400/80 rounded-full border border-white/70 shadow-sm
                                  animate-ping"></div>
                    <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-orange-400/80 rounded-full border border-white/70 shadow-sm
                                  animate-bounce" style={{animationDelay: '0.5s'}}></div>
                  </div>
                </div>
                
                {/* 問題標題 - 統一復古標題設計 */}
                <div className={`text-center mb-5 transition-all duration-800 ease-out delay-500 ${isVisible && !isExiting ? 'opacity-100 transform translate-x-0' : 'opacity-0 transform -translate-x-12'}`}>
                  <div className="inline-block px-4 py-2.5 bg-gradient-to-r from-amber-600/90 to-orange-500/90 
                                rounded-full shadow-lg border border-white/40 backdrop-blur-sm
                                hover:scale-105 transition-all duration-300 max-w-full">
                    <h2 className="text-white font-bold text-xs drop-shadow-md leading-tight text-center">
                      {currentQuestion.title}
                    </h2>
                  </div>
                </div>

                {/* 問題描述 - 統一復古卷軸設計 */}
                <div className={`mb-6 relative group transition-all duration-900 ease-out delay-600 ${isVisible && !isExiting ? 'opacity-100 transform translate-y-0 scale-100' : 'opacity-0 transform translate-y-8 scale-95'}`}>
                  <div className="bg-gradient-to-br from-amber-100/80 via-yellow-100/75 to-orange-100/80 p-4 rounded-2xl 
                                shadow-md border border-amber-200/60 relative overflow-hidden
                                group-hover:shadow-lg transition-all duration-300">
                    {/* 光效 */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent 
                                  opacity-0 group-hover:opacity-100 transition-opacity duration-500 
                                  translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                    <p className="text-amber-800 text-sm leading-relaxed text-center relative z-10 font-medium">
                      {currentQuestion.description}
                    </p>
                  </div>
                </div>

                {/* 選項按鈕區域 - 統一復古風格設計 */}
                <div className="space-y-3 mb-5">
                  {currentQuestion.options.map((option, index) => (
                    <button 
                      key={`option-${questionIndex}-${index}`}
                      className={`group w-full relative overflow-hidden rounded-xl shadow-md 
                                 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5
                                 active:translate-y-0 active:shadow-sm hover:scale-[1.02]
                                 ${isVisible && !isExiting ? 
                                   'opacity-100 transform translate-x-0' : 
                                   'opacity-0 transform translate-x-8'}`}
                      style={{
                        transitionDelay: `${700 + index * 150}ms`,
                        transitionDuration: '800ms'
                      }}
                      onClick={() => clickAnswer(option)}
                      type="button"
                    >
                      {/* 統一復古按鈕背景 */}
                      <div className="absolute inset-0 bg-gradient-to-br from-amber-500/70 via-orange-500/70 to-yellow-500/70 
                                    group-hover:from-amber-400/80 group-hover:via-orange-400/80 group-hover:to-yellow-400/80 
                                    transition-all duration-300"></div>
                      
                      {/* 光澤效果 */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent 
                                    group-hover:via-white/25 transition-all duration-300
                                    translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                      
                      {/* 按鈕邊框 */}
                      <div className="absolute inset-0 border border-white/25 rounded-xl 
                                    group-hover:border-white/40 transition-all duration-300"></div>
                      
                      {/* 按鈕內容 */}
                      <div className="relative z-10 px-4 py-3.5 min-h-[65px] flex items-center justify-center">
                        <span className="text-white text-xs font-medium text-center leading-tight 
                                       drop-shadow-md group-hover:text-white transition-colors duration-300 
                                       break-words hyphens-auto">
                          {option.title}
                        </span>
                      </div>
                      
                      {/* 裝飾效果 */}
                      <div className="absolute top-2 left-3 w-1.5 h-1.5 rounded-full bg-white/30 animate-pulse"></div>
                      <div className="absolute bottom-2 right-3 w-1 h-1 rounded-full bg-white/25 animate-ping" 
                           style={{animationDelay: `${index * 0.2}s`}}></div>
                    </button>
                  ))}
                </div>
                
                {/* 進度顯示 - 統一復古指針設計 */}
                <div className={`text-center transition-all duration-1000 ease-out delay-1200 ${isVisible && !isExiting ? 'opacity-100 transform translate-y-0 scale-100' : 'opacity-0 transform translate-y-6 scale-90'}`}>
                  <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-amber-600/90 to-orange-600/90 
                                rounded-full shadow-md border border-white/30 backdrop-blur-sm
                                hover:scale-105 transition-all duration-300">
                    <div className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-yellow-300 rounded-full animate-pulse"></div>
                      <span className="text-white text-xs font-medium drop-shadow-sm">
                        {questionIndex + 1} / {musicQuestions.length}
                      </span>
                      <div className="w-1.5 h-1.5 bg-orange-300 rounded-full animate-pulse delay-100"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* 裝飾性音符 - 增強动画效果 */}
              <div className={`absolute -top-3 -left-3 text-amber-600/40 text-xl animate-bounce
                              transition-all duration-1200 ease-out delay-1300
                              ${isVisible && !isExiting ? 'opacity-100 transform rotate-0' : 
                                'opacity-0 transform -rotate-45'}`}>♪</div>
              <div className={`absolute -top-2 -right-4 text-orange-600/40 text-lg animate-pulse delay-300
                              transition-all duration-1200 ease-out delay-1400
                              ${isVisible && !isExiting ? 'opacity-100 transform rotate-0' : 
                                'opacity-0 transform rotate-45'}`}>♫</div>
              <div className={`absolute -bottom-4 -left-2 text-yellow-600/40 text-base animate-bounce delay-500
                              transition-all duration-1200 ease-out delay-1500
                              ${isVisible && !isExiting ? 'opacity-100 transform rotate-0' : 
                                'opacity-0 transform -rotate-30'}`}>♬</div>
              <div className={`absolute -bottom-3 -right-3 text-amber-600/40 text-lg animate-pulse delay-700
                              transition-all duration-1200 ease-out delay-1600
                              ${isVisible && !isExiting ? 'opacity-100 transform rotate-0' : 
                                'opacity-0 transform rotate-30'}`}>♪</div>
            </div>

          </div>
        </div>
      </MobileFrame>
    </>
  );
}