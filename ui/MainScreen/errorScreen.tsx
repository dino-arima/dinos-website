'use client';

import Button from "./button";

export default function ErrorScreen({ 
    onClick 
}: {
    onClick: ()=>void
}) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[40vh] animate-in fade-in slide-in-from-top-4 duration-700">
      <div className="bg-card text-card-foreground rounded-xl shadow-lg p-8 w-full max-w-md border flex flex-col items-center">
        <h2
          className="
            text-center
            text-2xl
            md:text-3xl
            font-bold
            mb-6
            bg-gradient-to-r
            from-primary
            via-accent
            to-primary
            text-transparent
            bg-clip-text
            tracking-wide
            animate-fade-in
          "
        >
          予期せぬエラーが発生しました。<br />時間をおいて、もう一度お試しください。
        </h2>
        <Button label="初めに戻る" onClick={onClick} />
            
    
      </div>
    </div>
  );
}