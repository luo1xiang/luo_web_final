'use client';

import { useState, useEffect } from 'react';
import MobileFrame from '@/component/layout/MobileFrame';
import Image from 'next/image';
import cdBg from '@/../public/cdbg.png';

export default function InstructionPage({nextStep}) {
  console.log('InstructionPage component rendered');

  // 動畫狀態控制
  const [isVisible, setIsVisible] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  // 頁面進入動畫
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const handleStartClick = () => {
    // 開始退出動畫
    setIsExiting(true);
    
    // 延迟執行頁面切換
    setTimeout(() => {
      console.log('Instruction page button clicked!');
      if (nextStep) {
        nextStep();
      } else {
        console.log('nextStep function is not provided!');
      }
    }, 300); // 等待退出動畫完成
  }

  return (
    <>
      {/* 瀏覽器視窗背景圖片 */}
      <div className="fixed inset-0 z-0">
        <Image 
          src={cdBg} 
          alt="browser background" 
          fill
          className="object-cover"
          style={{
            objectPosition: 'center 40%',
          }}
          priority
          sizes="100vw"
        />
      </div>
      
      <MobileFrame>
        {/* 復古暖色調覆蓋層 */}
        <div className="absolute inset-0 bg-gradient-to-b from-amber-900/25 via-orange-900/20 to-yellow-900/25"></div>
        
        {/* 復古泛黃濾鏡效果 */}
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-600/10 via-amber-500/8 to-orange-600/12 mix-blend-multiply"></div>
        
        {/* 老舊膠片顆粒效果 - 響應式尺寸 */}
        <div 
          className="absolute inset-0 opacity-30" 
          style={{
            backgroundImage: 'radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255, 214, 100, 0.3) 0%, transparent 50%), radial-gradient(circle at 40% 40%, rgba(120, 119, 198, 0.15) 0%, transparent 50%)',
            backgroundSize: 'min(150px, 15vw) min(150px, 15vw), min(200px, 20vw) min(200px, 20vw), min(180px, 18vw) min(180px, 18vw)',
            backgroundPosition: '0 0, 50px 50px, 100px 25px'
          }}
        >
        </div>
        
        {/* 溫暖的燈光效果 */}
        <div className="absolute inset-0 bg-gradient-to-tl from-orange-200/25 via-amber-100/20 to-yellow-200/30 animate-pulse" style={{animationDuration: '8s'}}></div>
        
        {/* 留聲機光暈效果 */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-amber-100/20 to-transparent animate-pulse" style={{animationDuration: '10s', animationDelay: '3s'}}></div>
        
        {/* 漂浮的音符和塵埃粒子 - 響應式定位 */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute w-3 h-3 sm:w-4 sm:h-4 bg-amber-400/80 rounded-full animate-bounce top-[20%] left-[16%] shadow-xl" style={{animationDelay: '0s', animationDuration: '4s'}}></div>
          <div className="absolute w-2 h-2 sm:w-3 sm:h-3 bg-orange-300/90 rounded-full animate-bounce top-[33%] right-[20%] shadow-lg" style={{animationDelay: '1s', animationDuration: '3.5s'}}></div>
          <div className="absolute w-4 h-4 sm:w-5 sm:h-5 bg-yellow-400/70 rounded-full animate-bounce top-[40%] left-[12%] shadow-2xl" style={{animationDelay: '2s', animationDuration: '4.2s'}}></div>
          <div className="absolute w-2 h-2 sm:w-3 sm:h-3 bg-amber-300/85 rounded-full animate-bounce top-[60%] right-[25%] shadow-lg" style={{animationDelay: '2.8s', animationDuration: '3.8s'}}></div>
          <div className="absolute w-1.5 h-1.5 sm:w-2 sm:h-2 bg-orange-200/95 rounded-full animate-bounce top-[80%] left-[66%] shadow-md" style={{animationDelay: '3.5s', animationDuration: '3.2s'}}></div>
          <div className="absolute w-3 h-3 sm:w-4 sm:h-4 bg-yellow-300/75 rounded-full animate-bounce top-[8%] right-[40%] shadow-xl" style={{animationDelay: '4.2s', animationDuration: '4.5s'}}></div>
        </div>

        {/* 復古店面氛圍光線 - 響應式高度 */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute w-1 h-16 sm:h-20 bg-amber-200/20 opacity-30 animate-pulse left-[20%] top-[25%] blur-sm rounded-full" style={{animationDuration: '9s'}}></div>
          <div className="absolute w-1 h-12 sm:h-16 bg-orange-200/15 opacity-25 animate-pulse right-[25%] top-[33%] blur-sm rounded-full" style={{animationDelay: '3s', animationDuration: '11s'}}></div>
          <div className="absolute w-1 h-20 sm:h-24 bg-yellow-200/20 opacity-30 animate-pulse left-[66%] top-[40%] blur-sm rounded-full" style={{animationDelay: '6s', animationDuration: '8s'}}></div>
        </div>

        {/* 復古溫暖光暈 - 響應式尺寸 */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-1/2 w-72 h-72 sm:w-96 sm:h-96 bg-amber-200/30 rounded-full opacity-35 blur-3xl animate-pulse transform -translate-x-1/2 -translate-y-1/2" style={{animationDuration: '9s'}}></div>
          <div className="absolute top-1/2 left-1/2 w-60 h-60 sm:w-80 sm:h-80 bg-orange-300/25 rounded-full opacity-30 blur-2xl animate-pulse transform -translate-x-1/2 -translate-y-1/2" style={{animationDelay: '4s', animationDuration: '11s'}}></div>
          
          <div className="absolute top-1/4 left-1/4 w-40 h-40 sm:w-52 sm:h-52 bg-yellow-300/25 rounded-full opacity-25 animate-ping" style={{animationDuration: '8s'}}></div>
          <div className="absolute bottom-1/4 right-1/4 w-36 h-36 sm:w-48 sm:h-48 bg-amber-400/20 rounded-full opacity-22 animate-ping" style={{animationDelay: '4s', animationDuration: '9s'}}></div>
        </div>

        {/* 復古唱片旋轉光環 - 響應式尺寸 */}
        <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
          <div className="w-72 h-72 sm:w-96 sm:h-96 border-2 border-amber-300/12 rounded-full animate-spin opacity-15 shadow-lg" style={{animationDuration: '50s'}}></div>
          <div className="absolute w-60 h-60 sm:w-80 sm:h-80 border border-orange-300/10 rounded-full animate-spin opacity-12 shadow-md" style={{animationDuration: '45s', animationDirection: 'reverse'}}></div>
          <div className="absolute w-48 h-48 sm:w-64 sm:h-64 border border-yellow-300/8 rounded-full animate-spin opacity-10" style={{animationDuration: '40s'}}></div>
        </div>

        {/* 主要內容容器 - 響應式設計 */}
        <div className={`relative z-20 min-h-full flex flex-col justify-center items-center px-3 sm:px-4 md:px-6 py-6 sm:py-8 md:py-10 transition-all duration-500 ease-out
                        ${isVisible && !isExiting ? 'opacity-100 transform translate-y-0 scale-100' : 
                          isExiting ? 'opacity-0 transform -translate-y-8 scale-95' :
                          'opacity-0 transform translate-y-8 scale-95'}`}>
          
          {/* 說明內容卡片 - 更緊湊的響應式設計 */}
          <div className={`text-amber-900 font-medium text-center leading-relaxed tracking-wide relative bg-amber-50/90 backdrop-blur-md rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 border-2 border-amber-200/80 shadow-2xl w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto group transition-all duration-700 ease-out delay-200
                          ${isVisible && !isExiting ? 'opacity-100 transform translate-y-0 rotate-0' : 
                            isExiting ? 'opacity-0 transform translate-y-4 -rotate-2' :
                            'opacity-0 transform translate-y-12 rotate-2'}`}>
            
            {/* 卡片復古光暈效果 */}
            <div className={`absolute -inset-1 sm:-inset-2 md:-inset-3 bg-amber-400/15 rounded-xl sm:rounded-2xl blur-xl opacity-30 animate-pulse group-hover:opacity-45 transition-all duration-500 delay-300
                            ${isVisible && !isExiting ? 'opacity-30 group-hover:opacity-45' : 'opacity-0'}`} style={{animationDuration: '8s'}}></div>
            <div className={`absolute -inset-0.5 sm:-inset-1 md:-inset-1.5 bg-orange-300/12 rounded-xl sm:rounded-2xl blur-lg opacity-25 animate-pulse group-hover:opacity-35 transition-all duration-500 delay-400
                            ${isVisible && !isExiting ? 'opacity-25 group-hover:opacity-35' : 'opacity-0'}`} style={{animationDelay: '3s', animationDuration: '10s'}}></div>
            
            {/* 復古邊框裝飾 */}
            <div className="absolute -inset-1 bg-gradient-to-br from-amber-900/10 via-transparent to-orange-900/10 rounded-xl sm:rounded-2xl border border-amber-600/20"></div>
            
            {/* 音符圖標 - 簡化設計 */}
            <div className={`mb-4 sm:mb-6 relative z-10 transition-all duration-600 ease-out delay-500 text-center
                            ${isVisible && !isExiting ? 'opacity-100 transform translate-y-0 scale-100' : 
                              'opacity-0 transform translate-y-6 scale-90'}`}>
              <div className="text-3xl sm:text-4xl animate-pulse" style={{animationDuration: '3s'}}>🎵</div>
            </div>
            
            {/* 說明內容 - 更緊湊的設計 */}
            <div className={`space-y-3 sm:space-y-4 text-xs sm:text-sm mb-4 sm:mb-6 relative z-10 transition-all duration-700 ease-out delay-600
                            ${isVisible && !isExiting ? 'opacity-100 transform translate-x-0' : 
                              'opacity-0 transform -translate-x-8'}`}>
              <div className="text-middle space-y-2 sm:space-y-3 bg-amber-100/70 rounded-lg sm:rounded-xl p-3 sm:p-4 border border-amber-300/50 font-serif leading-relaxed shadow-lg">
                <p className="text-amber-800 text-sm sm:text-base leading-relaxed">
                  在午夜夢迴時醒來，發現身處莫名熟悉的唱片行。
                </p>
                <p className="text-amber-800 text-sm sm:text-base leading-relaxed">
                  牆上寫著：以記憶選曲。
                </p>
                <p className="text-amber-800 text-sm sm:text-base leading-relaxed">
                  點擊「開始」，探尋記憶原聲。
                </p>
              </div>
            </div>
            
            {/* 開始按鈕 - 更緊湊的響應式設計 */}
            <div className={`relative transition-all duration-800 ease-out delay-900
                            ${isVisible && !isExiting ? 'opacity-100 transform translate-y-0 scale-100' : 
                              'opacity-0 transform translate-y-4 scale-90'}`}>
              <button 
                className="cursor-pointer hover:translate-y-1 transition-all duration-300 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-serif rounded-full px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 shadow-2xl hover:shadow-3xl relative group overflow-hidden font-semibold text-base sm:text-lg flex items-center justify-center space-x-2 mx-auto border-2 border-amber-500/50 hover:border-amber-400/70 w-full max-w-xs"
                onClick={handleStartClick}
              >
                {/* 按鈕復古光暈 */}
                <div className="absolute -inset-2 sm:-inset-4 bg-amber-400/20 rounded-full blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                <div className="absolute -inset-1 sm:-inset-2 bg-orange-300/15 rounded-full blur-md opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
                
                {/* 按鈕旋轉光環 */}
                <div className="absolute -inset-1 border border-amber-400/15 rounded-full animate-spin opacity-0 group-hover:opacity-30 transition-opacity duration-300" style={{animationDuration: '3s'}}></div>
                
                <span className="relative z-10">開始</span>
                <span className="text-lg sm:text-xl relative z-10 animate-pulse" style={{animationDuration: '2s'}}>♪</span>
                
                {/* 按鈕復古反射 */}
                <div className="absolute bottom-0 left-1/2 w-20 sm:w-24 h-2 bg-amber-400/20 blur-md opacity-30 animate-pulse transform -translate-x-1/2 translate-y-2" style={{animationDuration: '4s'}}></div>
              </button>
            </div>
            
            {/* 卡片周圍裝飾音符 - 響應式定位 */}
            <div className={`absolute -bottom-2 sm:-bottom-3 -left-2 sm:-left-3 text-amber-600/30 text-sm sm:text-base animate-bounce delay-500 transition-all duration-700 ease-out delay-1000
                            ${isVisible && !isExiting ? 'opacity-100 transform rotate-0' : 
                              'opacity-0 transform -rotate-30'}`} style={{animationDuration: '3.5s'}}>♬</div>
            <div className={`absolute -bottom-1 sm:-bottom-2 -right-2 sm:-right-3 text-orange-600/30 text-base sm:text-lg animate-pulse delay-700 transition-all duration-700 ease-out delay-1100
                            ${isVisible && !isExiting ? 'opacity-100 transform rotate-0' : 
                              'opacity-0 transform rotate-30'}`} style={{animationDuration: '5s'}}>♪</div>
          </div>
        </div>

      </MobileFrame>
    </>
  );
}