'use client';

import MobileFrame from '@/component/layout/MobileFrame';
import Image from 'next/image';
import cdbg from '@/../public/cdbg.png';

export default function InstructionPage({nextStep}) {

  return (
    <>
      <MobileFrame>
        {/* 復古唱片行背景圖片 */}
        <div className="absolute inset-0">
          <Image 
            src={cdbg} 
            alt="vintage record store background" 
            fill
            className="object-cover opacity-95"
            priority
            sizes="100vw"
          />
        </div>
        
        {/* 復古暖色調覆蓋層 - 增強版 */}
        <div className="absolute inset-0 bg-gradient-to-b from-amber-900/30 via-orange-800/25 to-yellow-900/40"></div>
        
        {/* 溫暖的燈光效果 - 增強版 */}
        <div className="absolute inset-0 bg-gradient-to-tl from-orange-200/40 via-amber-100/35 to-yellow-200/50 animate-pulse" style={{animationDuration: '6s'}}></div>
        
        {/* 留聲機光暈效果 - 增強版 */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-amber-100/35 to-transparent animate-pulse" style={{animationDuration: '8s', animationDelay: '2s'}}></div>
        
        {/* 漂浮的音符和塵埃粒子 - 增強版 */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute w-4 h-4 bg-amber-400/80 rounded-full animate-bounce top-1/5 left-1/6 shadow-xl" style={{animationDelay: '0s', animationDuration: '4s'}}></div>
          <div className="absolute w-3 h-3 bg-orange-300/90 rounded-full animate-bounce top-1/3 right-1/5 shadow-lg" style={{animationDelay: '1s', animationDuration: '3.5s'}}></div>
          <div className="absolute w-5 h-5 bg-yellow-400/70 rounded-full animate-bounce top-2/5 left-1/8 shadow-2xl" style={{animationDelay: '2s', animationDuration: '4.2s'}}></div>
          <div className="absolute w-3 h-3 bg-amber-300/85 rounded-full animate-bounce top-3/5 right-1/4 shadow-lg" style={{animationDelay: '2.8s', animationDuration: '3.8s'}}></div>
          <div className="absolute w-2 h-2 bg-orange-200/95 rounded-full animate-bounce top-4/5 left-2/3 shadow-md" style={{animationDelay: '3.5s', animationDuration: '3.2s'}}></div>
          <div className="absolute w-4 h-4 bg-yellow-300/75 rounded-full animate-bounce top-1/12 right-2/5 shadow-xl" style={{animationDelay: '4.2s', animationDuration: '4.5s'}}></div>
        </div>

        {/* 復古店面氛圍光線 */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute w-1 h-20 bg-amber-200/30 opacity-50 animate-pulse left-1/5 top-1/4 blur-sm rounded-full" style={{animationDuration: '7s'}}></div>
          <div className="absolute w-1 h-16 bg-orange-200/25 opacity-45 animate-pulse right-1/4 top-1/3 blur-sm rounded-full" style={{animationDelay: '2.5s', animationDuration: '8s'}}></div>
          <div className="absolute w-1 h-24 bg-yellow-200/35 opacity-55 animate-pulse left-2/3 top-2/5 blur-sm rounded-full" style={{animationDelay: '4s', animationDuration: '6s'}}></div>
        </div>

        {/* 復古溫暖光暈 - 增強版 */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* 中央溫暖黃光 */}
          <div className="absolute top-1/2 left-1/2 w-[30rem] h-[30rem] bg-amber-200/50 rounded-full opacity-60 blur-3xl animate-pulse transform -translate-x-1/2 -translate-y-1/2" style={{animationDuration: '7s'}}></div>
          <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-orange-300/45 rounded-full opacity-55 blur-2xl animate-pulse transform -translate-x-1/2 -translate-y-1/2" style={{animationDelay: '3s', animationDuration: '9s'}}></div>
          
          {/* 角落復古光點 */}
          <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-yellow-300/45 rounded-full opacity-50 animate-ping" style={{animationDuration: '6s'}}></div>
          <div className="absolute bottom-1/4 right-1/4 w-44 h-44 bg-amber-400/40 rounded-full opacity-45 animate-ping" style={{animationDelay: '3s', animationDuration: '7s'}}></div>
        </div>

        {/* 復古唱片旋轉光環 */}
        <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
          <div className="w-[28rem] h-[28rem] border-2 border-amber-300/20 rounded-full animate-spin opacity-25 shadow-lg" style={{animationDuration: '40s'}}></div>
          <div className="absolute w-80 h-80 border border-orange-300/15 rounded-full animate-spin opacity-20 shadow-md" style={{animationDuration: '35s', animationDirection: 'reverse'}}></div>
          <div className="absolute w-64 h-64 border border-yellow-300/10 rounded-full animate-spin opacity-15" style={{animationDuration: '30s'}}></div>
        </div>

        {/* 復古書店飄散的紙張效果 - 增強版 */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute w-6 h-8 bg-amber-100/60 rotate-12 animate-float top-1/5 left-1/12 rounded-sm shadow-lg border border-amber-200/30" style={{animationDelay: '0s', animationDuration: '6s'}}></div>
          <div className="absolute w-4 h-6 bg-orange-100/55 -rotate-6 animate-float top-2/5 right-1/8 rounded-sm shadow-md border border-orange-200/25" style={{animationDelay: '2s', animationDuration: '7s'}}></div>
          <div className="absolute w-8 h-6 bg-yellow-100/50 rotate-45 animate-float top-3/5 left-1/6 rounded-sm shadow-xl border border-yellow-200/30" style={{animationDelay: '4s', animationDuration: '8s'}}></div>
          <div className="absolute w-5 h-7 bg-amber-50/65 -rotate-12 animate-float top-1/8 right-1/3 rounded-sm shadow-lg border border-amber-300/25" style={{animationDelay: '6s', animationDuration: '9s'}}></div>
        </div>

        {/* 書架間的溫暖燭光效果 - 增強版 */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute w-12 h-24 bg-gradient-to-t from-orange-400/70 to-yellow-300/40 rounded-full blur-sm animate-flicker top-1/4 left-1/5 shadow-2xl" style={{animationDelay: '0s', animationDuration: '3s'}}></div>
          <div className="absolute w-8 h-16 bg-gradient-to-t from-amber-400/65 to-orange-300/35 rounded-full blur-sm animate-flicker top-2/3 right-1/4 shadow-xl" style={{animationDelay: '1.5s', animationDuration: '4s'}}></div>
          <div className="absolute w-10 h-20 bg-gradient-to-t from-yellow-400/60 to-amber-300/30 rounded-full blur-sm animate-flicker top-1/2 left-2/3 shadow-2xl" style={{animationDelay: '3s', animationDuration: '3.5s'}}></div>
        </div>

        {/* 唱片店專屬的音符飄散效果 - 增強版 */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute text-amber-400/80 text-3xl animate-musical top-1/6 right-1/5 drop-shadow-lg" style={{animationDelay: '1s', animationDuration: '10s'}}>♪</div>
          <div className="absolute text-orange-400/75 text-2xl animate-musical top-1/3 left-1/4 drop-shadow-md" style={{animationDelay: '3s', animationDuration: '12s'}}>♫</div>
          <div className="absolute text-yellow-400/70 text-3xl animate-musical top-3/4 right-1/3 drop-shadow-lg" style={{animationDelay: '5s', animationDuration: '11s'}}>♪</div>
          <div className="absolute text-amber-300/65 text-xl animate-musical top-4/5 left-1/8 drop-shadow-sm" style={{animationDelay: '7s', animationDuration: '13s'}}>♬</div>
          <div className="absolute text-orange-300/70 text-2xl animate-musical top-1/12 left-3/4 drop-shadow-md" style={{animationDelay: '9s', animationDuration: '14s'}}>♪</div>
        </div>

        {/* 書店老舊燈泡閃爍效果 - 增強版 */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute w-24 h-24 bg-amber-200/50 rounded-full blur-xl animate-bulb-flicker top-1/5 left-1/3 shadow-2xl" style={{animationDelay: '0s', animationDuration: '5s'}}></div>
          <div className="absolute w-20 h-20 bg-orange-200/45 rounded-full blur-xl animate-bulb-flicker top-2/5 right-1/5 shadow-xl" style={{animationDelay: '2s', animationDuration: '6s'}}></div>
          <div className="absolute w-16 h-16 bg-yellow-200/40 rounded-full blur-lg animate-bulb-flicker top-3/5 left-1/8 shadow-lg" style={{animationDelay: '4s', animationDuration: '7s'}}></div>
        </div>

        {/* 老式留聲機的光圈擴散 - 增強版 */}
        <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
          <div className="w-[40rem] h-[40rem] border-2 border-amber-200/40 rounded-full animate-ping opacity-50 shadow-2xl" style={{animationDuration: '6s'}}></div>
          <div className="absolute w-[45rem] h-[45rem] border border-orange-200/30 rounded-full animate-ping opacity-40 shadow-xl" style={{animationDelay: '3s', animationDuration: '8s'}}></div>
          <div className="absolute w-[35rem] h-[35rem] border border-yellow-200/35 rounded-full animate-ping opacity-45" style={{animationDelay: '1.5s', animationDuration: '7s'}}></div>
        </div>

        {/* 書頁翻動的光影效果 - 增強版 */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute w-48 h-2 bg-gradient-to-r from-transparent via-amber-200/60 to-transparent rotate-45 animate-sweep top-1/4 -left-24 shadow-lg" style={{animationDelay: '1s', animationDuration: '8s'}}></div>
          <div className="absolute w-40 h-2 bg-gradient-to-r from-transparent via-orange-200/55 to-transparent -rotate-12 animate-sweep top-3/5 -right-20 shadow-md" style={{animationDelay: '5s', animationDuration: '10s'}}></div>
          <div className="absolute w-36 h-1 bg-gradient-to-r from-transparent via-yellow-200/50 to-transparent rotate-30 animate-sweep top-1/2 -left-18 shadow-sm" style={{animationDelay: '8s', animationDuration: '9s'}}></div>
        </div>

        <div className='flex flex-col justify-center items-center relative z-20 px-8 py-12 min-h-screen'>
          
          {/* 說明內容卡片 */}
          <div className='text-amber-900 font-medium text-center leading-relaxed tracking-wide 
                         relative bg-yellow-50/85 backdrop-blur-md rounded-3xl p-8 
                         border-2 border-amber-200/60 shadow-2xl max-w-lg mx-auto
                         hover:bg-yellow-50/90 transition-all duration-500 hover:shadow-3xl'>
            
            {/* 標題 */}
            <div className="mb-8">
              <h1 className="text-2xl font-bold text-amber-800 mb-2 font-serif drop-shadow-md">
                午夜唱片行
              </h1>
              <div className="text-4xl mb-4">🎵</div>
            </div>
            
            {/* 說明內容 */}
            <div className="space-y-4 text-sm mb-8">
              <div className="text-left space-y-4 bg-amber-50/60 rounded-2xl p-6 border border-amber-200/40 font-serif leading-relaxed">
                <p className="text-amber-800">
                  午夜夢迴時，你睜開雙眼，發現自己身處一間陌生又莫名熟悉的唱片行。
                </p>
                <p className="text-amber-800">
                  空氣中瀰漫著舊時光獨有的霉味，店裡播放著從小陪伴你到大的旋律，
                </p>
                <p className="text-amber-800">
                  這些熟悉的聲音背後，藏著一些不為人知的絮語，一些被遺忘的共鳴，
                </p>
                <p className="text-orange-600 font-semibold">
                  歡迎一起在唱片行的時光停格中探索，勾勒出屬於你的「童年主旋律」
                </p>
                <p className="text-amber-700 text-center">
                  點擊「開始」，讓唱片機和時光一起轉動
                </p>
              </div>
            </div>
            
            {/* 開始按鈕 */}
            <div 
              className='cursor-pointer hover:translate-y-1 transition-all duration-300 
                        bg-gradient-to-r from-amber-600 to-orange-600 
                        hover:from-amber-700 hover:to-orange-700
                        text-white font-serif rounded-full px-8 py-4 
                        shadow-xl hover:shadow-2xl relative group overflow-hidden'
              onClick={nextStep}
            >
              {/* 按鈕光效 */}
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 
                            translate-x-[-100%] group-hover:translate-x-[100%] 
                            transition-transform duration-700 ease-out"></div>
              
              <span className="relative z-10 font-semibold text-lg flex items-center justify-center space-x-2">
                <span>開始</span>
                <span className="text-xl">♪</span>
              </span>
            </div>
          </div>
          
        </div>

        {/* 底部復古迷霧效果 */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-amber-900/25 via-orange-800/10 to-transparent pointer-events-none"></div>

        {/* 復古紙張紋理覆蓋 */}
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-50/5 via-transparent to-amber-50/5 pointer-events-none"></div>

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