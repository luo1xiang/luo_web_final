'use client';

import { useState, useEffect } from 'react';
import MobileFrame from '@/component/layout/MobileFrame';
import Image from 'next/image';
import cdBg from '@/../public/cdbg.png';
import wordLogo from '@/../public/word.png';
import startBtn from '@/../public/0.start/startBtn.png';

export default function StartPage({nextStep}) {
  console.log('StartPage component rendered'); // 調試用

  // 动画状态控制
  const [isVisible, setIsVisible] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  // 页面进入动画
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const handleStartClick = () => {
    // 开始退出动画
    setIsExiting(true);
    
    // 延迟执行页面切换
    setTimeout(() => {
      console.log('Start button clicked!'); // 調試用
      if (nextStep) {
        nextStep();
      } else {
        console.log('nextStep function is not provided!');
      }
    }, 300); // 等待退出动画完成
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
        {/* 復古暖色調覆蓋層 - 調整透明度 */}
        <div className="absolute inset-0 bg-gradient-to-b from-amber-900/25 via-orange-900/20 to-yellow-900/25"></div>
        
        {/* 復古泛黃濾鏡效果 */}
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-600/10 via-amber-500/8 to-orange-600/12 mix-blend-multiply"></div>
        
        {/* 老舊膠片顆粒效果 */}
        <div className="absolute inset-0 opacity-30" 
             style={{
               backgroundImage: `
                 radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
                 radial-gradient(circle at 80% 20%, rgba(255, 214, 100, 0.3) 0%, transparent 50%),
                 radial-gradient(circle at 40% 40%, rgba(120, 119, 198, 0.15) 0%, transparent 50%)
               `,
               backgroundSize: '150px 150px, 200px 200px, 180px 180px',
               backgroundPosition: '0 0, 50px 50px, 100px 25px'
             }}>
        </div>
        
        {/* 溫暖的燈光效果 - 減弱 */}
        <div className="absolute inset-0 bg-gradient-to-tl from-orange-200/25 via-amber-100/20 to-yellow-200/30 animate-pulse" style={{animationDuration: '8s'}}></div>
        
        {/* 留聲機光暈效果 - 減弱 */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-amber-100/20 to-transparent animate-pulse" style={{animationDuration: '10s', animationDelay: '3s'}}></div>
        
        {/* 漂浮的音符和塵埃粒子 - 增強版 */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute w-4 h-4 bg-amber-400/80 rounded-full animate-bounce top-1/5 left-1/6 shadow-xl" style={{animationDelay: '0s', animationDuration: '4s'}}></div>
          <div className="absolute w-3 h-3 bg-orange-300/90 rounded-full animate-bounce top-1/3 right-1/5 shadow-lg" style={{animationDelay: '1s', animationDuration: '3.5s'}}></div>
          <div className="absolute w-5 h-5 bg-yellow-400/70 rounded-full animate-bounce top-2/5 left-1/8 shadow-2xl" style={{animationDelay: '2s', animationDuration: '4.2s'}}></div>
          <div className="absolute w-3 h-3 bg-amber-300/85 rounded-full animate-bounce top-3/5 right-1/4 shadow-lg" style={{animationDelay: '2.8s', animationDuration: '3.8s'}}></div>
          <div className="absolute w-2 h-2 bg-orange-200/95 rounded-full animate-bounce top-4/5 left-2/3 shadow-md" style={{animationDelay: '3.5s', animationDuration: '3.2s'}}></div>
          <div className="absolute w-4 h-4 bg-yellow-300/75 rounded-full animate-bounce top-1/12 right-2/5 shadow-xl" style={{animationDelay: '4.2s', animationDuration: '4.5s'}}></div>
          
          {/* 復古塵埃漂浮效果 */}
          <div className="absolute w-1 h-1 bg-amber-300/40 rounded-full animate-float top-1/6 left-1/3 shadow-sm" style={{animationDelay: '1s', animationDuration: '6s'}}></div>
          <div className="absolute w-1.5 h-1.5 bg-orange-200/50 rounded-full animate-float top-2/3 right-1/3 shadow-sm" style={{animationDelay: '3s', animationDuration: '7s'}}></div>
          <div className="absolute w-0.5 h-0.5 bg-yellow-400/60 rounded-full animate-float top-1/2 left-3/4 shadow-sm" style={{animationDelay: '5s', animationDuration: '5s'}}></div>
        </div>

        {/* 復古店面氛圍光線 - 減弱 */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute w-1 h-20 bg-amber-200/20 opacity-30 animate-pulse left-1/5 top-1/4 blur-sm rounded-full" style={{animationDuration: '9s'}}></div>
          <div className="absolute w-1 h-16 bg-orange-200/15 opacity-25 animate-pulse right-1/4 top-1/3 blur-sm rounded-full" style={{animationDelay: '3s', animationDuration: '11s'}}></div>
          <div className="absolute w-1 h-24 bg-yellow-200/20 opacity-30 animate-pulse left-2/3 top-2/5 blur-sm rounded-full" style={{animationDelay: '6s', animationDuration: '8s'}}></div>
          
          {/* 復古窗光效果 */}
          <div className="absolute w-2 h-32 bg-gradient-to-b from-yellow-200/15 to-transparent opacity-20 animate-pulse right-1/6 top-1/5 blur-md transform rotate-12" style={{animationDelay: '2s', animationDuration: '10s'}}></div>
          <div className="absolute w-1.5 h-28 bg-gradient-to-b from-amber-200/12 to-transparent opacity-18 animate-pulse left-1/4 top-3/5 blur-md transform -rotate-6" style={{animationDelay: '4s', animationDuration: '12s'}}></div>
        </div>

        {/* 復古溫暖光暈 - 減弱 */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* 中央溫暖黃光 */}
          <div className="absolute top-1/2 left-1/2 w-[35rem] h-[35rem] bg-amber-200/30 rounded-full opacity-35 blur-3xl animate-pulse transform -translate-x-1/2 -translate-y-1/2" style={{animationDuration: '9s'}}></div>
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-orange-300/25 rounded-full opacity-30 blur-2xl animate-pulse transform -translate-x-1/2 -translate-y-1/2" style={{animationDelay: '4s', animationDuration: '11s'}}></div>
          
          {/* 角落復古光點 */}
          <div className="absolute top-1/4 left-1/4 w-52 h-52 bg-yellow-300/25 rounded-full opacity-25 animate-ping" style={{animationDuration: '8s'}}></div>
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-amber-400/20 rounded-full opacity-22 animate-ping" style={{animationDelay: '4s', animationDuration: '9s'}}></div>
          
          {/* 復古霧氣效果 */}
          <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-orange-100/15 rounded-full opacity-20 blur-2xl animate-pulse" style={{animationDelay: '6s', animationDuration: '14s'}}></div>
          <div className="absolute bottom-1/3 left-1/6 w-56 h-56 bg-yellow-100/18 rounded-full opacity-22 blur-xl animate-pulse" style={{animationDelay: '8s', animationDuration: '16s'}}></div>
        </div>

        {/* 復古唱片旋轉光環 - 減弱 */}
        <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
          <div className="w-[32rem] h-[32rem] border-2 border-amber-300/12 rounded-full animate-spin opacity-15 shadow-lg" style={{animationDuration: '50s'}}></div>
          <div className="absolute w-96 h-96 border border-orange-300/10 rounded-full animate-spin opacity-12 shadow-md" style={{animationDuration: '45s', animationDirection: 'reverse'}}></div>
          <div className="absolute w-80 h-80 border border-yellow-300/8 rounded-full animate-spin opacity-10" style={{animationDuration: '40s'}}></div>
          <div className="absolute w-64 h-64 border border-amber-400/6 rounded-full animate-spin opacity-8" style={{animationDuration: '35s', animationDirection: 'reverse'}}></div>
        </div>

        <div className={`relative z-20 h-full flex flex-col justify-center items-center transition-all duration-500 ease-out
                        ${isVisible && !isExiting ? 'opacity-100 transform translate-y-0 scale-100' : 
                          isExiting ? 'opacity-0 transform -translate-y-8 scale-95' :
                          'opacity-0 transform translate-y-8 scale-95'}`}>
          
          {/* 標準字 Logo - 中央位置，放大兩倍 */}
          <div className={`mb-10 relative group transition-all duration-700 ease-out delay-200
                          ${isVisible && !isExiting ? 'opacity-100 transform translate-y-0 rotate-0' : 
                            isExiting ? 'opacity-0 transform translate-y-4 -rotate-2' :
                            'opacity-0 transform translate-y-12 rotate-2'}`}>
            {/* Logo 復古光暈效果 - 根據放大調整 */}
            <div className={`absolute -inset-24 bg-amber-400/20 rounded-full blur-3xl opacity-30 animate-pulse group-hover:opacity-50 transition-all duration-500 delay-300
                            ${isVisible && !isExiting ? 'opacity-30 group-hover:opacity-50' : 'opacity-0'}`} style={{animationDuration: '8s'}}></div>
            <div className={`absolute -inset-20 bg-orange-300/18 rounded-full blur-2xl opacity-25 animate-pulse group-hover:opacity-40 transition-all duration-500 delay-400
                            ${isVisible && !isExiting ? 'opacity-25 group-hover:opacity-40' : 'opacity-0'}`} style={{animationDelay: '3s', animationDuration: '10s'}}></div>
            <div className={`absolute -inset-16 bg-yellow-300/15 rounded-full blur-xl opacity-20 animate-pulse group-hover:opacity-35 transition-all duration-500 delay-500
                            ${isVisible && !isExiting ? 'opacity-20 group-hover:opacity-35' : 'opacity-0'}`} style={{animationDelay: '6s', animationDuration: '12s'}}></div>
            
            {/* Logo 旋轉光環 - 根據放大調整 */}
            <div className="absolute -inset-12 border-2 border-amber-400/15 rounded-full animate-spin opacity-0 group-hover:opacity-25 transition-opacity duration-500" style={{animationDuration: '6s'}}></div>
            <div className="absolute -inset-8 border border-yellow-400/12 rounded-full animate-spin opacity-0 group-hover:opacity-20 transition-opacity duration-500" style={{animationDuration: '4s', animationDirection: 'reverse'}}></div>
            
            {/* 復古膠片效果框 - 根據放大調整 */}
            <div className="absolute -inset-8 bg-gradient-to-br from-amber-900/10 via-transparent to-orange-900/10 rounded-lg opacity-0 group-hover:opacity-30 transition-opacity duration-500 border border-amber-600/15"></div>
            
            {/* Logo 本體 - 放大到兩倍尺寸 */}
            <div className={`relative transition-all duration-600 ease-out delay-600
                            ${isVisible && !isExiting ? 'opacity-100 transform scale-100' : 
                              'opacity-0 transform scale-75'}`}>
              <Image 
                src={wordLogo}
                alt="午夜唱片行"
                className="w-[30rem] h-auto relative z-10 drop-shadow-2xl group-hover:drop-shadow-[0_0_30px_rgba(251,191,36,0.4)]
                          transition-all duration-500 animate-pulse group-hover:animate-none
                          filter brightness-110 contrast-110 group-hover:brightness-125 group-hover:contrast-125
                          sepia-[0.15] group-hover:sepia-[0.05]"
                style={{animationDuration: '6s'}}
                sizes="480px"
                priority
              />
              
              {/* Logo 復古反射效果 - 根據放大調整 */}
              <div className="absolute bottom-0 left-1/2 w-[28rem] h-8 bg-amber-400/15 blur-lg opacity-25 animate-pulse transform -translate-x-1/2 translate-y-4" style={{animationDuration: '6s'}}></div>
              
              {/* 復古刮痕效果 */}
              <div className="absolute inset-0 opacity-10 group-hover:opacity-5 transition-opacity duration-500"
                   style={{
                     backgroundImage: `
                       linear-gradient(45deg, transparent 40%, rgba(255,255,255,0.1) 41%, rgba(255,255,255,0.1) 42%, transparent 43%),
                       linear-gradient(135deg, transparent 60%, rgba(0,0,0,0.1) 61%, rgba(0,0,0,0.1) 62%, transparent 63%)
                     `,
                     backgroundSize: '20px 20px, 30px 30px'
                   }}>
              </div>
            </div>
            
            {/* 裝飾性音符 - Logo 周圍，根據放大調整位置 */}
            <div className={`absolute -top-8 -left-10 text-amber-600/40 text-3xl animate-bounce transition-all duration-700 ease-out delay-800
                            ${isVisible && !isExiting ? 'opacity-100 transform rotate-0' : 
                              'opacity-0 transform -rotate-45'}`} style={{animationDelay: '1s', animationDuration: '3s'}}>♪</div>
            <div className={`absolute -top-6 -right-12 text-orange-600/40 text-2xl animate-pulse delay-300 transition-all duration-700 ease-out delay-900
                            ${isVisible && !isExiting ? 'opacity-100 transform rotate-0' : 
                              'opacity-0 transform rotate-45'}`} style={{animationDuration: '4s'}}>♫</div>
            <div className={`absolute -bottom-12 -left-8 text-yellow-600/40 text-xl animate-bounce delay-500 transition-all duration-700 ease-out delay-1000
                            ${isVisible && !isExiting ? 'opacity-100 transform rotate-0' : 
                              'opacity-0 transform -rotate-30'}`} style={{animationDuration: '3.5s'}}>♬</div>
            <div className={`absolute -bottom-8 -right-10 text-amber-600/40 text-2xl animate-pulse delay-700 transition-all duration-700 ease-out delay-1100
                            ${isVisible && !isExiting ? 'opacity-100 transform rotate-0' : 
                              'opacity-0 transform rotate-30'}`} style={{animationDuration: '5s'}}>♪</div>
            
            {/* 復古唱片碎片裝飾 - 根據放大調整 */}
            <div className="absolute -top-16 left-1/4 w-6 h-12 bg-gradient-to-b from-amber-700/20 to-transparent rounded-full opacity-30 animate-pulse transform rotate-12" style={{animationDelay: '2s', animationDuration: '7s'}}></div>
            <div className="absolute -bottom-16 right-1/3 w-4 h-10 bg-gradient-to-t from-orange-700/20 to-transparent rounded-full opacity-25 animate-pulse transform -rotate-6" style={{animationDelay: '4s', animationDuration: '8s'}}></div>
          </div>
          
          {/* 開始按鈕 - 復古唱片風格，下移 */}
          <div className={`relative mt-25 transition-all duration-800 ease-out delay-1200
                          ${isVisible && !isExiting ? 'opacity-100 transform translate-y-0 scale-100' : 
                            'opacity-0 transform translate-y-4 scale-90'}`}>
            <div 
              className='cursor-pointer hover:translate-y-1 transition-all duration-300 w-36 relative group'
              onClick={handleStartClick}
            >
              {/* 按鈕復古光暈 - 減弱 */}
              <div className="absolute -inset-8 bg-amber-400/18 rounded-full blur-xl opacity-28 animate-pulse group-hover:opacity-45 transition-opacity duration-300" style={{animationDuration: '7s'}}></div>
              <div className="absolute -inset-6 bg-orange-300/15 rounded-full blur-lg opacity-22 animate-pulse group-hover:opacity-35 transition-opacity duration-300" style={{animationDelay: '2.5s', animationDuration: '8s'}}></div>
              
              {/* 按鈕旋轉光環 - 像唱片一樣 */}
              <div className="absolute -inset-3 border-2 border-amber-400/15 rounded-full animate-spin opacity-0 group-hover:opacity-40 transition-opacity duration-300" style={{animationDuration: '5s'}}></div>
              <div className="absolute -inset-1 border border-yellow-400/12 rounded-full animate-spin opacity-0 group-hover:opacity-30 transition-opacity duration-300" style={{animationDuration: '3.5s', animationDirection: 'reverse'}}></div>
              
              {/* 按鈕本體 */}
              <Image 
                className='w-full h-auto relative z-10 drop-shadow-2xl group-hover:drop-shadow-[0_0_25px_rgba(251,191,36,0.4)]
                          group-hover:scale-110 transition-all duration-300 animate-pulse group-hover:animate-none
                          filter brightness-115 group-hover:brightness-130 sepia-[0.25] group-hover:sepia-[0.1]' 
                src={startBtn} 
                alt='開始探險'
                style={{animationDuration: '5s'}}
                onClick={
                  ()=>{
                    const audio = new Audio("/bike.mp3");
                    audio.play();
                  }
                }
                sizes="144px"
              />
              
              {/* 按鈕復古反射 */}
              <div className="absolute bottom-0 left-1/2 w-28 h-3 bg-amber-400/15 blur-lg opacity-28 animate-pulse transform -translate-x-1/2 translate-y-3" style={{animationDuration: '5s'}}></div>
              
              {/* 按鈕復古邊框效果 */}
              <div className="absolute -inset-2 bg-gradient-to-br from-amber-900/5 via-transparent to-orange-900/5 rounded-full opacity-0 group-hover:opacity-25 transition-opacity duration-300 border border-amber-600/10"></div>
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            25% { transform: translateY(-8px) rotate(3deg); }
            50% { transform: translateY(-12px) rotate(-2deg); }
            75% { transform: translateY(-4px) rotate(1deg); }
          }
          
          @keyframes flicker {
            0%, 100% { opacity: 0.4; transform: scale(1); }
            25% { opacity: 0.7; transform: scale(1.05); }
            50% { opacity: 0.3; transform: scale(0.95); }
            75% { opacity: 0.8; transform: scale(1.02); }
          }
          
          @keyframes musical {
            0% { transform: translateY(0px) rotate(0deg); opacity: 0.4; }
            25% { transform: translateY(-15px) rotate(8deg); opacity: 0.7; }
            50% { transform: translateY(-30px) rotate(-4deg); opacity: 0.4; }
            75% { transform: translateY(-45px) rotate(6deg); opacity: 0.2; }
            100% { transform: translateY(-60px) rotate(0deg); opacity: 0; }
          }
          
          @keyframes bulb-flicker {
            0%, 100% { opacity: 0.3; }
            5% { opacity: 0.15; }
            10% { opacity: 0.4; }
            15% { opacity: 0.2; }
            20% { opacity: 0.35; }
            25% { opacity: 0.3; }
            30% { opacity: 0.45; }
            50% { opacity: 0.3; }
            70% { opacity: 0.4; }
            80% { opacity: 0.15; }
            90% { opacity: 0.35; }
          }
          
          @keyframes sweep {
            0% { transform: translateX(-80px) rotate(35deg); opacity: 0; }
            15% { opacity: 0.4; }
            50% { opacity: 0.7; }
            85% { opacity: 0.4; }
            100% { transform: translateX(calc(100vw + 80px)) rotate(35deg); opacity: 0; }
          }
          
          @keyframes vintage-glow {
            0%, 100% { 
              filter: brightness(110%) contrast(105%) sepia(15%);
              text-shadow: 0 0 10px rgba(251,191,36,0.3);
            }
            50% { 
              filter: brightness(120%) contrast(110%) sepia(25%);
              text-shadow: 0 0 15px rgba(251,191,36,0.5);
            }
          }
          
          .animate-float {
            animation: float ease-in-out infinite;
          }
          
          .animate-flicker {
            animation: flicker ease-in-out infinite;
          }
          
          .animate-musical {
            animation: musical ease-out infinite;
          }
          
          .animate-bulb-flicker {
            animation: bulb-flicker ease-in-out infinite;
          }
          
          .animate-sweep {
            animation: sweep linear infinite;
          }
          
          .animate-vintage-glow {
            animation: vintage-glow ease-in-out infinite;
          }
        `}</style>

      </MobileFrame>
    </>
  );
}