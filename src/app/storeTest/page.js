import { create } from 'zustand';

// 心理測驗分數 Store
export const usePsyStore = create((set, get) => ({
  score: 0,
  minScore: 7,  // 7題 × 1分
  maxScore: 49, // 7題 × 7分
  
  updateScore: (newScore) => set({ score: newScore }),
  resetScore: () => set({ score: 0 }),
  
  // 根據分數獲取結果分析
  getResult: () => {
    const score = get().score;
    
    if (score >= 7 && score <= 14) {
      return {
        type: 'KTV順唱',
        emoji: '🌈',
        theme: '王心凌《愛你》',
        description: '你被訓練得很好，懂得表演、知道何時該唱什麼，但內在聲音常常被蓋過。',
        suggestion: '✨ 建議：唱給沒人聽的你，會不一樣。',
        scoreRange: '7-14分'
      };
    } else if (score >= 15 && score <= 21) {
      return {
        type: '懷舊記憶',
        emoji: '🎞',
        theme: '周杰倫《夜曲》',
        description: '你擁有大量音樂記憶，懂得分類與保存，但偶爾也會困在過去的播放清單裡。',
        suggestion: '✨ 提醒：新的你，也值得一首新歌。',
        scoreRange: '15-21分'
      };
    } else if (score >= 22 && score <= 28) {
      return {
        type: '聲音拼貼',
        emoji: '🔊',
        theme: '蔡依林《天空》',
        description: '你把傷痕拼成旋律，把錯拍當成節奏，是用「不完美」寫自己的專輯作者。',
        suggestion: '✨ 問題是：你願意讓別人聽到這張專輯嗎？',
        scoreRange: '22-28分'
      };
    } else if (score >= 29 && score <= 35) {
      return {
        type: '潛意識電台',
        emoji: '🧬',
        theme: '孫燕姿《雨天》',
        description: '你總是讓那些被壓下的聲音偷偷播出，熟悉怎麼把自己藏在別人的歌詞裡。',
        suggestion: '✨ 也許，是時候開自己的頻道了。',
        scoreRange: '29-35分'
      };
    } else if (score >= 36 && score <= 49) {
      return {
        type: '靜音混音',
        emoji: '🔮',
        theme: '王菲《寓言》',
        description: '你最懂什麼話該不說，什麼聲音該靜音。你用「不發聲」來創造一種超然的存在。',
        suggestion: '✨ 或許，沉默本身就是你的樂器。',
        scoreRange: '36-49分'
      };
    } else {
      // 預設情況
      return {
        type: '未知音域',
        emoji: '🎵',
        theme: '神秘樂章',
        description: '你的聲音超出了預期的範圍，也許你正在創造全新的音樂類型。',
        suggestion: '✨ 繼續探索你獨特的聲音吧！',
        scoreRange: `${score}分`
      };
    }
  }
}));

// 問題進度管理 Store
export const useQuestionStore = create((set, get) => ({
  currentQuestion: 0,
  totalQuestions: 7,
  answers: [],
  isCompleted: false,
  
  // 進入下一題
  nextQuestion: () => set((state) => {
    const nextIndex = state.currentQuestion + 1;
    return {
      currentQuestion: nextIndex,
      isCompleted: nextIndex >= state.totalQuestions
    };
  }),
  
  // 重置所有問題 - 確保完全重置
  resetQuestions: () => set({ 
    currentQuestion: 0, 
    answers: [],
    isCompleted: false
  }),
  
  // 新增答案記錄
  addAnswer: (answer) => set((state) => ({
    answers: [...state.answers, answer]
  })),
  
  // 檢查是否完成所有問題
  getIsCompleted: () => {
    const state = get();
    return state.currentQuestion >= state.totalQuestions || state.answers.length >= state.totalQuestions;
  },
  
  // 獲取當前進度百分比
  getProgress: () => {
    const state = get();
    return Math.round((state.answers.length / state.totalQuestions) * 100);
  },
  
  // 檢查是否還有下一題
  hasNextQuestion: () => {
    const state = get();
    return state.currentQuestion < state.totalQuestions - 1;
  },
  
  // 獲取當前問題索引（安全版本）
  getCurrentQuestionIndex: () => {
    const state = get();
    return Math.min(state.currentQuestion, state.totalQuestions - 1);
  }
}));