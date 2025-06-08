'use client';

export default function MobileFrame({children, transparent = false}) {
  return (
    <>
      <div className={`w-[33%] min-w-[380px] max-w-[420px] h-[85%] p-[52px] 
        ${transparent ? 'bg-transparent' : 'bg-[#f1d399]/50'}
        rounded-2xl flex justify-center items-center
        relative overflow-hidden`}>
        {children}
      </div>
    </>
  );
}