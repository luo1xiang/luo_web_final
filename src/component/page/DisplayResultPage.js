'use client';

import { useState, useEffect } from 'react';
import MobileFrame from '@/component/layout/MobileFrame'
import Image from 'next/image';
import cdBg from '@/../public/cdbg.png';

export default function DisplayResultPage({nextStep}) {

  // 动画状态控制
  const [isVisible, setIsVisible] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const [animationKey, setAnimationKey] = useState(0);
  const [backgroundTransition, setBackgroundTransition] = useState(false);

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
  }, []);

  const handleNextStep = () => {
    // 开始退出动画
    setIsExiting(true);
    setBackgroundTransition(true);
    
    // 延迟执行页面切换
    setTimeout(() => {
      if (nextStep) {
        nextStep();
      }
    }, 500);
  };

  return (
    <>
      {/* 動態背景圖片與效果層 */}
      <div className="fixed inset-0 z-0">
        {/* 背景圖片容器 */}
        <div className={`absolute inset-0 transition-all duration-700 ease-in-out ${backgroundTransition ? 'opacity-0 transform scale-105' : 'opacity-100 transform scale-100'}`}>
          <Image 
            src={cdBg}
            alt="vintage record background"
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
        
        {/* 可滾動的主要內容容器 - 增強的页面切换动画 */}
        <div className={`relative z-20 min-h-screen overflow-y-auto transition-all duration-700 ease-out
                        ${isVisible && !isExiting ? 'opacity-100 transform translate-y-0 scale-100' : 
                          isExiting ? 'opacity-0 transform -translate-y-12 scale-90' :
                          'opacity-0 transform translate-y-12 scale-90'}`}
             key={animationKey}>
          <div className='flex flex-col items-center justify-center py-4 px-4 min-h-screen'>
            
            {/* 主要內容容器 - 增強的复古风格设计 + 更流暢的动画效果 */}
            <div className={`w-full max-w-sm mx-auto relative transition-all duration-1000 ease-out delay-200
                            ${isVisible && !isExiting ? 'opacity-100 transform translate-y-0 rotate-0 scale-100' : 
                              isExiting ? 'opacity-0 transform translate-y-8 -rotate-3 scale-95' :
                              'opacity-0 transform translate-y-16 rotate-3 scale-95'}`}>
              
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
              <div className="relative z-10 p-8 pt-6">
                
                {/* 標題區域 - 音樂揭曉效果 + 增強动画 */}
                <div className={`text-center mb-6 transition-all duration-800 ease-out delay-400
                                ${isVisible && !isExiting ? 'opacity-100 transform translate-y-0 scale-100' : 
                                  'opacity-0 transform -translate-y-8 scale-75'}`}>
                  <div className="inline-block px-6 py-3 bg-gradient-to-r from-amber-600/90 to-orange-500/90 
                                rounded-full shadow-lg border border-white/40 backdrop-blur-sm
                                hover:scale-105 transition-all duration-300 relative group">
                    {/* 裝飾光效 */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-amber-400/25 via-orange-300/30 to-yellow-400/25 
                                  rounded-full blur-md opacity-50 animate-pulse group-hover:opacity-80 transition-opacity duration-500"></div>
                    <h1 className="text-white font-bold text-lg drop-shadow-md leading-tight relative z-10">
                      🎼 童年主旋律揭曉
                    </h1>
                  </div>
                </div>
                
                {/* 音樂分隔線 - 增強动画 */}
                <div className={`flex justify-center mb-6 transition-all duration-900 ease-out delay-500
                                ${isVisible && !isExiting ? 'opacity-100 transform scale-x-100' : 
                                  'opacity-0 transform scale-x-0'}`}>
                  <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-amber-400 to-transparent animate-pulse" 
                       style={{animationDuration: '2s'}}></div>
                </div>
                
                {/* 查看結果按鈕 - 增強动画 */}
                <div className={`mb-6 transition-all duration-1000 ease-out delay-600
                                ${isVisible && !isExiting ? 'opacity-100 transform translate-y-0 scale-100' : 
                                  'opacity-0 transform translate-y-8 scale-90'}`}>
                  <button 
                    className="group w-full relative overflow-hidden rounded-xl shadow-md 
                             hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5
                             active:translate-y-0 active:shadow-sm hover:scale-[1.02]"
                    onClick={handleNextStep}
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
                    <div className="relative z-10 px-6 py-4 min-h-[64px] flex items-center justify-center">
                      <div className="flex items-center justify-center gap-3">
                        <span className="text-2xl animate-bounce group-hover:animate-pulse" style={{animationDuration: '2s'}}>🎵</span>
                        <span className="text-white text-base font-bold drop-shadow-md group-hover:text-white transition-colors duration-300">
                          查看結果
                        </span>
                        <span className="text-2xl animate-bounce group-hover:animate-pulse" style={{animationDuration: '2s', animationDelay: '0.5s'}}>🎶</span>
                      </div>
                    </div>
                    
                    {/* 裝飾效果 */}
                    <div className="absolute top-3 left-4 w-1.5 h-1.5 rounded-full bg-white/30 animate-pulse"></div>
                    <div className="absolute bottom-3 right-4 w-1 h-1 rounded-full bg-white/25 animate-ping"></div>
                  </button>
                </div>
                
                {/* 音樂主旋律預告 - 增強动画 */}
                <div className={`text-center transition-all duration-1100 ease-out delay-700
                                ${isVisible && !isExiting ? 'opacity-100 transform translate-y-0' : 
                                  'opacity-0 transform translate-y-6'}`}>
                  <div className="inline-block px-4 py-2 bg-gradient-to-r from-amber-600/90 to-orange-600/90 
                                rounded-full shadow-md border border-white/30 backdrop-blur-sm
                                hover:scale-105 transition-all duration-300">
                    <div className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-yellow-300 rounded-full animate-pulse"></div>
                      <span className="text-white text-sm font-medium drop-shadow-sm">
                        🎼 查看你的童年主旋律
                      </span>
                      <div className="w-1.5 h-1.5 bg-orange-300 rounded-full animate-pulse delay-100"></div>
                    </div>
                  </div>
                </div>
                
              </div>
              
              {/* 裝飾性音符 - 增強动画效果 */}
              <div className={`absolute -top-3 -left-3 text-amber-600/40 text-xl animate-bounce
                              transition-all duration-1200 ease-out delay-800
                              ${isVisible && !isExiting ? 'opacity-100 transform rotate-0' : 
                                'opacity-0 transform -rotate-45'}`}>♪</div>
              <div className={`absolute -top-2 -right-4 text-orange-600/40 text-lg animate-pulse delay-300
                              transition-all duration-1200 ease-out delay-900
                              ${isVisible && !isExiting ? 'opacity-100 transform rotate-0' : 
                                'opacity-0 transform rotate-45'}`}>♫</div>
              <div className={`absolute -bottom-4 -left-2 text-yellow-600/40 text-base animate-bounce delay-500
                              transition-all duration-1200 ease-out delay-1000
                              ${isVisible && !isExiting ? 'opacity-100 transform rotate-0' : 
                                'opacity-0 transform -rotate-30'}`}>♬</div>
              <div className={`absolute -bottom-3 -right-3 text-amber-600/40 text-lg animate-pulse delay-700
                              transition-all duration-1200 ease-out delay-1100
                              ${isVisible && !isExiting ? 'opacity-100 transform rotate-0' : 
                                'opacity-0 transform rotate-30'}`}>♪</div>
            </div>

          </div>
        </div>
      </MobileFrame>
    </>
  );
}