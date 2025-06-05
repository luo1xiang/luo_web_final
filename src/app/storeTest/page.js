'use client';

import { usePsyStore } from '../store/store';

export default function SimpleTest() {
  const psyState = usePsyStore((state) => state.state);
  const updateState = usePsyStore((state) => state.updateState);
  
  console.log('SimpleTest loaded, psyState:', psyState);

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">簡化測試</h1>
      <p className="mb-4">當前狀態: {psyState}</p>
      
      <div className="space-x-4">
        <button 
          onClick={() => {
            console.log('按鈕被點擊，準備切換到狀態 1');
            updateState(1);
          }}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          切換到狀態 1
        </button>
        
        <button 
          onClick={() => {
            console.log('按鈕被點擊，準備切換到狀態 0');
            updateState(0);
          }}
          className="px-4 py-2 bg-green-500 text-white rounded"
        >
          切換到狀態 0
        </button>
      </div>
      
      <div className="mt-8 p-4 bg-white rounded">
        <h2 className="font-bold">狀態說明:</h2>
        <p>0: 起始頁</p>
        <p>1: 說明頁</p>
        <p>2: 問題頁</p>
      </div>
    </div>
  );
}