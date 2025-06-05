'use client';

import MobileFrame from '@/component/layout/MobileFrame';
import Image from 'next/image';
import cdBg from '@/../public/cd.png';
import startBtn from '@/../public/0.start/startBtn.png';

export default function StartPage({nextStep}) {

  return (
    <>
      <MobileFrame>
        {/* 復古唱片行背景圖片 */}
        <div className="absolute inset-0">
          <Image 
            src={cdBg} 
            alt="vintage record store background" 
            fill
            className="object-cover opacity-95"
            priority
          />
        </div>
        
        {/* 復古暖色調覆蓋層 */}
        <div className="absolute inset-0 bg-gradient-to-b from-amber-900/15 via-orange-800/10 to-yellow-900/20"></div>
        
        {/* 溫暖的燈光效果 */}
        <div className="absolute inset-0 bg-gradient-to-tl from-orange-200/20 via-amber-100/15 to-yellow-200/25 animate-pulse" style={{animationDuration: '8s'}}></div>
        
        {/* 留聲機光暈效果 */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-amber-100/15 to-transparent animate-pulse" style={{animationDuration: '10s', animationDelay: '3s'}}></div>
        
        {/* 漂浮的音符和塵埃粒子 */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute w-2 h-2 bg-amber-400/60 rounded-full animate-bounce top-1/5 left-1/6 shadow-lg" style={{animationDelay: '0s', animationDuration: '5s'}}></div>
          <div className="absolute w-1 h-1 bg-orange-300/70 rounded-full animate-bounce top-1/3 right-1/5 shadow-sm" style={{animationDelay: '1.5s', animationDuration: '4s'}}></div>
          <div className="absolute w-3 h-3 bg-yellow-400/50 rounded-full animate-bounce top-2/5 left-1/8 shadow-md" style={{animationDelay: '2.5s', animationDuration: '4.5s'}}></div>
          <div className="absolute w-2 h-2 bg-amber-300/65 rounded-full animate-bounce top-3/5 right-1/4 shadow-sm" style={{animationDelay: '3.2s', animationDuration: '3.8s'}}></div>
          <div className="absolute w-1 h-1 bg-orange-200/80 rounded-full animate-bounce top-4/5 left-2/3 shadow-sm" style={{animationDelay: '4s', animationDuration: '4.2s'}}></div>
          <div className="absolute w-2 h-2 bg-yellow-300/55 rounded-full animate-bounce top-1/12 right-2/5 shadow-md" style={{animationDelay: '4.8s', animationDuration: '3.5s'}}></div>
        </div>

        {/* 復古店面氛圍光線 */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute w-1 h-20 bg-amber-200/30 opacity-50 animate-pulse left-1/5 top-1/4 blur-sm rounded-full" style={{animationDuration: '7s'}}></div>
          <div className="absolute w-1 h-16 bg-orange-200/25 opacity-45 animate-pulse right-1/4 top-1/3 blur-sm rounded-full" style={{animationDelay: '2.5s', animationDuration: '8s'}}></div>
          <div className="absolute w-1 h-24 bg-yellow-200/35 opacity-55 animate-pulse left-2/3 top-2/5 blur-sm rounded-full" style={{animationDelay: '4s', animationDuration: '6s'}}></div>
        </div>

        {/* 復古溫暖光暈 */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* 中央溫暖黃光 */}
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-amber-200/25 rounded-full opacity-40 blur-3xl animate-pulse transform -translate-x-1/2 -translate-y-1/2" style={{animationDuration: '9s'}}></div>
          <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-orange-300/20 rounded-full opacity-35 blur-2xl animate-pulse transform -translate-x-1/2 -translate-y-1/2" style={{animationDelay: '4s', animationDuration: '11s'}}></div>
          
          {/* 角落復古光點 */}
          <div className="absolute top-1/4 left-1/4 w-40 h-40 bg-yellow-300/20 rounded-full opacity-25 animate-ping" style={{animationDuration: '8s'}}></div>
          <div className="absolute bottom-1/4 right-1/4 w-36 h-36 bg-amber-400/15 rounded-full opacity-20 animate-ping" style={{animationDelay: '4s', animationDuration: '9s'}}></div>
        </div>

        {/* 復古唱片旋轉光環 */}
        <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
          <div className="w-[28rem] h-[28rem] border-2 border-amber-300/20 rounded-full animate-spin opacity-25 shadow-lg" style={{animationDuration: '40s'}}></div>
          <div className="absolute w-80 h-80 border border-orange-300/15 rounded-full animate-spin opacity-20 shadow-md" style={{animationDuration: '35s', animationDirection: 'reverse'}}></div>
          <div className="absolute w-64 h-64 border border-yellow-300/10 rounded-full animate-spin opacity-15" style={{animationDuration: '30s'}}></div>
        </div>

        <div className='relative z-20 min-h-screen'>
          
          {/* 開始按鈕 - 復古唱片風格，位於底部約1/6處 */}
          <div className="absolute bottom-32 left-1/2 transform -translate-x-1/2">
            <div 
              className='cursor-pointer hover:translate-y-1 transition-all duration-300 w-40 relative group'
              onClick={nextStep}
            >
              {/* 按鈕復古光暈 */}
              <div className="absolute -inset-8 bg-amber-400/30 rounded-full blur-xl opacity-50 animate-pulse group-hover:opacity-80 transition-opacity duration-300" style={{animationDuration: '6s'}}></div>
              <div className="absolute -inset-6 bg-orange-300/25 rounded-full blur-lg opacity-40 animate-pulse group-hover:opacity-60 transition-opacity duration-300" style={{animationDelay: '2s', animationDuration: '7s'}}></div>
              
              {/* 按鈕旋轉光環 - 像唱片一樣 */}
              <div className="absolute -inset-3 border-2 border-amber-400/25 rounded-full animate-spin opacity-0 group-hover:opacity-70 transition-opacity duration-300" style={{animationDuration: '4s'}}></div>
              <div className="absolute -inset-1 border border-yellow-400/20 rounded-full animate-spin opacity-0 group-hover:opacity-50 transition-opacity duration-300" style={{animationDuration: '3s', animationDirection: 'reverse'}}></div>
              
              {/* 按鈕本體 */}
              <Image 
                className='w-full h-auto relative z-10 drop-shadow-xl group-hover:drop-shadow-2xl 
                          group-hover:scale-110 transition-all duration-300 animate-pulse group-hover:animate-none
                          filter brightness-110 group-hover:brightness-125 sepia-[0.2] group-hover:sepia-0' 
                src={startBtn} 
                alt='開始探險'
                style={{animationDuration: '4s'}}
              />
              
              {/* 按鈕復古反射 */}
              <div className="absolute bottom-0 left-1/2 w-28 h-3 bg-amber-400/25 blur-lg opacity-50 animate-pulse transform -translate-x-1/2 translate-y-3" style={{animationDuration: '4s'}}></div>
            </div>
          </div>
          
        </div>

        {/* 復古書店飄散的紙張效果 */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute w-3 h-4 bg-amber-100/30 rotate-12 animate-float top-1/5 left-1/12 rounded-sm shadow-sm" style={{animationDelay: '0s', animationDuration: '8s'}}></div>
          <div className="absolute w-2 h-3 bg-orange-100/25 -rotate-6 animate-float top-2/5 right-1/8 rounded-sm shadow-sm" style={{animationDelay: '3s', animationDuration: '10s'}}></div>
          <div className="absolute w-4 h-3 bg-yellow-100/20 rotate-45 animate-float top-3/5 left-1/6 rounded-sm shadow-sm" style={{animationDelay: '6s', animationDuration: '9s'}}></div>
        </div>

        {/* 書架間的溫暖燭光效果 */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute w-6 h-12 bg-gradient-to-t from-orange-400/40 to-yellow-300/20 rounded-full blur-sm animate-flicker top-1/4 left-1/5" style={{animationDelay: '0s', animationDuration: '4s'}}></div>
          <div className="absolute w-4 h-8 bg-gradient-to-t from-amber-400/35 to-orange-300/15 rounded-full blur-sm animate-flicker top-2/3 right-1/4" style={{animationDelay: '2s', animationDuration: '5s'}}></div>
          <div className="absolute w-5 h-10 bg-gradient-to-t from-yellow-400/30 to-amber-300/10 rounded-full blur-sm animate-flicker top-1/2 left-2/3" style={{animationDelay: '4s', animationDuration: '6s'}}></div>
        </div>

        {/* 唱片店專屬的音符飄散效果 */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute text-amber-400/40 text-lg animate-musical top-1/6 right-1/5" style={{animationDelay: '1s', animationDuration: '12s'}}>♪</div>
          <div className="absolute text-orange-400/35 text-sm animate-musical top-1/3 left-1/4" style={{animationDelay: '4s', animationDuration: '15s'}}>♫</div>
          <div className="absolute text-yellow-400/30 text-lg animate-musical top-3/4 right-1/3" style={{animationDelay: '7s', animationDuration: '13s'}}>♪</div>
          <div className="absolute text-amber-300/25 text-xs animate-musical top-4/5 left-1/8" style={{animationDelay: '10s', animationDuration: '14s'}}>♬</div>
        </div>

        {/* 底部復古迷霧效果 */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-amber-900/25 via-orange-800/10 to-transparent pointer-events-none"></div>

        {/* 復古紙張紋理覆蓋 */}
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-50/5 via-transparent to-amber-50/5 pointer-events-none"></div>

        {/* 書店老舊燈泡閃爍效果 */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute w-16 h-16 bg-amber-200/20 rounded-full blur-xl animate-bulb-flicker top-1/5 left-1/3" style={{animationDelay: '0s', animationDuration: '7s'}}></div>
          <div className="absolute w-12 h-12 bg-orange-200/15 rounded-full blur-xl animate-bulb-flicker top-2/5 right-1/5" style={{animationDelay: '3s', animationDuration: '9s'}}></div>
        </div>

        {/* 老式留聲機的光圈擴散 */}
        <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
          <div className="w-[35rem] h-[35rem] border border-amber-200/15 rounded-full animate-ping opacity-20" style={{animationDuration: '8s'}}></div>
          <div className="absolute w-[40rem] h-[40rem] border border-orange-200/10 rounded-full animate-ping opacity-15" style={{animationDelay: '4s', animationDuration: '10s'}}></div>
        </div>

        {/* 書頁翻動的光影效果 */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute w-32 h-1 bg-gradient-to-r from-transparent via-amber-200/30 to-transparent rotate-45 animate-sweep top-1/4 -left-16" style={{animationDelay: '2s', animationDuration: '12s'}}></div>
          <div className="absolute w-24 h-1 bg-gradient-to-r from-transparent via-orange-200/25 to-transparent -rotate-12 animate-sweep top-3/5 -right-12" style={{animationDelay: '8s', animationDuration: '15s'}}></div>
        </div>

        <style jsx>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            25% { transform: translateY(-10px) rotate(5deg); }
            50% { transform: translateY(-15px) rotate(-3deg); }
            75% { transform: translateY(-5px) rotate(2deg); }
          }
          
          @keyframes flicker {
            0%, 100% { opacity: 0.4; transform: scale(1); }
            25% { opacity: 0.6; transform: scale(1.1); }
            50% { opacity: 0.3; transform: scale(0.9); }
            75% { opacity: 0.7; transform: scale(1.05); }
          }
          
          @keyframes musical {
            0% { transform: translateY(0px) rotate(0deg); opacity: 0.4; }
            25% { transform: translateY(-20px) rotate(10deg); opacity: 0.6; }
            50% { transform: translateY(-40px) rotate(-5deg); opacity: 0.3; }
            75% { transform: translateY(-60px) rotate(8deg); opacity: 0.2; }
            100% { transform: translateY(-80px) rotate(0deg); opacity: 0; }
          }
          
          @keyframes bulb-flicker {
            0%, 100% { opacity: 0.2; }
            5% { opacity: 0.1; }
            10% { opacity: 0.3; }
            15% { opacity: 0.15; }
            20% { opacity: 0.25; }
            25% { opacity: 0.2; }
            30% { opacity: 0.35; }
            50% { opacity: 0.2; }
            70% { opacity: 0.3; }
            80% { opacity: 0.1; }
            90% { opacity: 0.25; }
          }
          
          @keyframes sweep {
            0% { transform: translateX(-100px) rotate(45deg); opacity: 0; }
            10% { opacity: 0.3; }
            50% { opacity: 0.6; }
            90% { opacity: 0.3; }
            100% { transform: translateX(calc(100vw + 100px)) rotate(45deg); opacity: 0; }
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
        `}</style>

      </MobileFrame>
    </>
  );
}