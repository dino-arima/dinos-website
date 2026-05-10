'use client';

import Button from "./button";

export default function InitialScreen({ onClick }: {onClick: ()=>void}) {
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
          メシガチャ
        </h2>
   
        <h3
          className="
            text-center
            text-lg
            md:text-xl
            font-semibold
            mb-8
            bg-gradient-to-r
            from-accent
            via-primary
            to-accent
            text-transparent
            bg-clip-text
            italic
            tracking-wide
          "
        >
          胃袋を震わせる、1分間の運試し
        </h3>
   
        <Button
          label="スタート"
          onClick={onClick}
        />
    
      </div>
    </div>
  );
}