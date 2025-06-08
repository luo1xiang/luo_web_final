'use client';

import { useState, useEffect } from 'react';
import MobileFrame from '@/component/layout/MobileFrame';
import Image from 'next/image';
import cdBg from '@/../public/cdbg.png';
import { usePsyStore, useQuestionStore } from '@/app/store/store'

export default function QuestionPage({questionIndex, nextStep}) {

  const psyData = usePsyStore((state) => state);
  const questionData = useQuestionStore((state) => state);
  
  // 动画状态控制
  const [isVisible, setIsVisible] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const [animationKey, setAnimationKey] = useState(0);

  // 音樂主題問題數據
  const musicQuestions = [
    {
      title: "🎼 第1幕｜你的第一首KTV曲",
      description: "「店內迴盪起卡拉OK殘響。你回想起第一次在家族聚會上被迫點歌的經歷，那時你選的是──」",
      options: [
        { title: "王心凌《彩虹的微笑》：全場跟唱但你想鑽地洞", value: 1 },
        { title: "張韶涵《隱形的翅膀》：咬字不清但很投入", value: 3 },
        { title: "周杰倫《七里香》：詞太快但死都不看字幕", value: 5 },
        { title: "蔡依林《舞孃》：偷偷練舞但從不公開表演", value: 7 }
      ]
    },
    {
      title: "🧃 第2幕｜放學的隱藏歌單",
      description: "「你打開MP3播放器，回到某個獨自搭公車回家的黃昏，那時你反覆播放的是──」",
      options: [
        { title: "五月天《溫柔》：想像自己是MV主角", value: 1 },
        { title: "S.H.E《中國話》：嘴巴念快歌很驕傲", value: 3 },
        { title: "蘇打綠《小情歌》：明明沒談戀愛卻覺得懂", value: 5 },
        { title: "楊丞琳《曖昧》：學著感受大人的情緒", value: 7 }
      ]
    },
    {
      title: "📻 第3幕｜深夜收音機",
      description: "「你在父母以為你睡著的夜裡，偷偷戴上耳機收聽電台，那時你最期待哪首歌播放？」",
      options: [
        { title: "林俊傑《江南》：用歌詞蓋過現實的壓力", value: 1 },
        { title: "范曉萱《健康歌》：好像只有這種歌能被允許聽", value: 3 },
        { title: "孫燕姿《天黑黑》：覺得她在唱自己的心情", value: 5 },
        { title: "張惠妹《記得》：每次播都想哭又怕哭出聲", value: 7 }
      ]
    },
    {
      title: "🧸 第4幕｜家裡的CD櫃密碼",
      description: "「你打開家裡的CD櫃，發現那張你童年時最常偷聽的專輯，裡面的哪首歌讓你印象最深？」",
      options: [
        { title: "王菲《紅豆》：那時不懂，只覺得旋律好聽", value: 1 },
        { title: "張震嶽《愛我別走》：總是趁爸媽不在偷偷聽", value: 3 },
        { title: "周杰倫《爸，我回來了》：有點害怕卻無法停下", value: 5 },
        { title: "陳奕迅《K歌之王》：從小聽不懂，長大才懂太痛", value: 7 }
      ]
    },
    {
      title: "📼 第5幕｜學校表演黑歷史",
      description: "「你打開唱片機，播出一段你曾在學校活動中演出的錄音，你當時唱的是──」",
      options: [
        { title: "蕭亞軒《最熟悉的陌生人》：歌太成熟，氣氛好尷尬", value: 1 },
        { title: "卓文萱《我們的紀念日》：唱得認真卻被笑", value: 3 },
        { title: "蔡依林《看我72變》：偷偷在家排舞才敢登台", value: 5 },
        { title: "自創詞套五月天曲：那是你最勇敢的告白", value: 7 }
      ]
    },
    {
      title: "🎤 第6幕｜錄音機裡的聲音瓶",
      description: "「你找到一卷舊錄音帶，上面寫著：『只能播一次』，裡面記錄的是──」",
      options: [
        { title: "父母哄你入睡的搖籃曲", value: 1 },
        { title: "自己模仿電台主持錄的節目", value: 3 },
        { title: "你哭著說想轉學的錄音", value: 5 },
        { title: "給未來自己的聲音留言", value: 7 }
      ]
    },
    {
      title: "💿 終章｜刻下你的聲紋",
      description: "「你要把一首歌刻進專屬你的黑膠唱片，成為你的聲音名片。你選擇的是──」",
      options: [
        { title: "五月天《知足》：留下簡單幸福的片刻", value: 1 },
        { title: "周杰倫《聽媽媽的話》：你終於願意聽進去了", value: 3 },
        { title: "蔡依林《我》：那個逐漸變形又重組的自己", value: 5 },
        { title: "王菲《夢中人》：承認一切破碎也可以優雅", value: 7 }
      ]
    }
  ];

  // 页面进入动画
  useEffect(() => {
    setIsVisible(false);
    setIsExiting(false);
    setAnimationKey(prev => prev + 1);
    
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 50);

    return () => clearTimeout(timer);
  }, [questionIndex]);

  const clickAnswer = function(option){
    // 开始退出动画
    setIsExiting(true);
    
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
    }, 300); // 等待退出动画完成
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

  return (
    <>
      {/* 瀏覽器視窗背景圖片 - 與 Start 頁面一致的結構 */}
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
        {/* 復古暖色調覆蓋層 - 與 Start 一致 */}
        <div className="absolute inset-0 bg-gradient-to-b from-amber-900/30 via-orange-800/25 to-yellow-900/40"></div>
        
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
        
        {/* 溫暖的燈光效果 - 與 Start 一致 */}
        <div className="absolute inset-0 bg-gradient-to-tl from-orange-200/40 via-amber-100/35 to-yellow-200/50 animate-pulse" style={{animationDuration: '6s'}}></div>
        
        {/* 可滾動的主要內容容器 - 添加页面切换动画 */}
        <div className={`relative z-20 min-h-screen overflow-y-auto transition-all duration-500 ease-out
                        ${isVisible && !isExiting ? 'opacity-100 transform translate-y-0 scale-100' : 
                          isExiting ? 'opacity-0 transform -translate-y-8 scale-95' :
                          'opacity-0 transform translate-y-8 scale-95'}`}
             key={animationKey}>
          <div className='flex flex-col items-center justify-start py-4 px-4 min-h-screen'>
            
            {/* 主要內容容器 - 统一复古风格设计 + 动画效果 */}
            <div className={`w-full max-w-sm mx-auto relative my-auto transition-all duration-700 ease-out delay-100
                            ${isVisible && !isExiting ? 'opacity-100 transform translate-y-0 rotate-0' : 
                              isExiting ? 'opacity-0 transform translate-y-4 -rotate-2' :
                              'opacity-0 transform translate-y-12 rotate-2'}`}>
              
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
                
                {/* Q標籤 - 統一復古徽章設計 + 动画 */}
                <div className={`flex justify-center mb-5 transition-all duration-500 ease-out delay-200
                                ${isVisible && !isExiting ? 'opacity-100 transform translate-y-0 scale-100' : 
                                  'opacity-0 transform -translate-y-4 scale-75'}`}>
                  <div className="relative group">
                    <div className="w-14 h-14 bg-gradient-to-br from-amber-600/90 to-orange-500/90 rounded-full 
                                  flex items-center justify-center shadow-lg border-3 border-white/50
                                  before:absolute before:inset-1 before:rounded-full before:border before:border-white/30
                                  transition-all duration-500 group-hover:scale-110 group-hover:rotate-12">
                      <span className="text-white font-bold text-base drop-shadow-md">Q{questionIndex+1}</span>
                    </div>
                    {/* 裝飾點 */}
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400/80 rounded-full border border-white/70 shadow-sm
                                  animate-ping"></div>
                    <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-orange-400/80 rounded-full border border-white/70 shadow-sm
                                  animate-bounce" style={{animationDelay: '0.5s'}}></div>
                  </div>
                </div>
                
                {/* 問題標題 - 統一復古標題設計 + 动画 */}
                <div className={`text-center mb-5 transition-all duration-600 ease-out delay-300
                                ${isVisible && !isExiting ? 'opacity-100 transform translate-x-0' : 
                                  'opacity-0 transform -translate-x-8'}`}>
                  <div className="inline-block px-5 py-2.5 bg-gradient-to-r from-amber-600/90 to-orange-500/90 
                                rounded-full shadow-lg border border-white/40 backdrop-blur-sm
                                hover:scale-105 transition-all duration-300">
                    <h2 className="text-white font-bold text-sm drop-shadow-md leading-tight">
                      {musicQuestions[questionIndex].title}
                    </h2>
                  </div>
                </div>

                {/* 問題描述 - 統一復古卷軸設計 + 动画 */}
                <div className={`mb-6 relative group transition-all duration-700 ease-out delay-400
                                ${isVisible && !isExiting ? 'opacity-100 transform translate-y-0 scale-100' : 
                                  'opacity-0 transform translate-y-6 scale-95'}`}>
                  <div className="bg-gradient-to-br from-amber-100/80 via-yellow-100/75 to-orange-100/80 p-4 rounded-2xl 
                                shadow-md border border-amber-200/60 relative overflow-hidden
                                group-hover:shadow-lg transition-all duration-300">
                    {/* 光效 */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent 
                                  opacity-0 group-hover:opacity-100 transition-opacity duration-500 
                                  translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                    <p className="text-amber-800 text-xs leading-relaxed text-center relative z-10 font-medium">
                      {musicQuestions[questionIndex].description}
                    </p>
                  </div>
                </div>

                {/* 選項按鈕區域 - 統一復古風格設計 + 逐个出现动画 */}
                <div className="space-y-3 mb-5">
                  {musicQuestions[questionIndex].options.map((option, index) => (
                    <button 
                      key={`option-${questionIndex}-${index}`}
                      className={`group w-full relative overflow-hidden rounded-xl shadow-md 
                                 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5
                                 active:translate-y-0 active:shadow-sm hover:scale-[1.02]
                                 ${isVisible && !isExiting ? 
                                   'opacity-100 transform translate-x-0' : 
                                   'opacity-0 transform translate-x-8'}`}
                      style={{
                        transitionDelay: `${500 + index * 100}ms`,
                        transitionDuration: '600ms'
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
                      <div className="relative z-10 px-4 py-3 min-h-[60px] flex items-center justify-center">
                        <span className="text-white text-xs font-medium text-center leading-tight 
                                       drop-shadow-md group-hover:text-white transition-colors duration-300">
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
                
                {/* 進度顯示 - 統一復古指針設計 + 动画 */}
                <div className={`text-center transition-all duration-800 ease-out delay-900
                                ${isVisible && !isExiting ? 'opacity-100 transform translate-y-0 scale-100' : 
                                  'opacity-0 transform translate-y-4 scale-90'}`}>
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
              
              {/* 裝飾性音符 - 添加动画 */}
              <div className={`absolute -top-3 -left-3 text-amber-600/40 text-xl animate-bounce
                              transition-all duration-1000 ease-out delay-1000
                              ${isVisible && !isExiting ? 'opacity-100 transform rotate-0' : 
                                'opacity-0 transform -rotate-45'}`}>♪</div>
              <div className={`absolute -top-2 -right-4 text-orange-600/40 text-lg animate-pulse delay-300
                              transition-all duration-1000 ease-out delay-1100
                              ${isVisible && !isExiting ? 'opacity-100 transform rotate-0' : 
                                'opacity-0 transform rotate-45'}`}>♫</div>
              <div className={`absolute -bottom-4 -left-2 text-yellow-600/40 text-base animate-bounce delay-500
                              transition-all duration-1000 ease-out delay-1200
                              ${isVisible && !isExiting ? 'opacity-100 transform rotate-0' : 
                                'opacity-0 transform -rotate-30'}`}>♬</div>
              <div className={`absolute -bottom-3 -right-3 text-amber-600/40 text-lg animate-pulse delay-700
                              transition-all duration-1000 ease-out delay-1300
                              ${isVisible && !isExiting ? 'opacity-100 transform rotate-0' : 
                                'opacity-0 transform rotate-30'}`}>♪</div>
            </div>

          </div>
        </div>
      </MobileFrame>
    </>
  );
}