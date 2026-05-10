'use client';

export default function GeneratingAnswerScreen() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[40vh] animate-in fade-in slide-in-from-top-4 duration-700">
      <div className="bg-card text-card-foreground rounded-xl shadow-lg p-8 w-full max-w-md border flex flex-col items-center">
        <div className="flex flex-col items-center justify-center mt-8 mb-4">
          <div className="relative mb-4 flex flex-col items-center">
            <div className="w-14 h-14 rounded-full border-4 border-primary border-t-transparent animate-spin-slow flex items-center justify-center mb-2">

            </div>
            <div className="h-1 w-24 rounded bg-primary/30 mt-4 overflow-hidden">
              <div className="h-1 bg-primary animate-indeterminate-bar" />
            </div>
            <style jsx>{`
              @keyframes indeterminate-bar {
                0% { transform: translateX(-100%); }
                100% { transform: translateX(100%); }
              }
              .animate-indeterminate-bar {
                animation: indeterminate-bar 1.4s infinite linear;
                width: 50%;
              }
            `}</style>
          </div>
     
     
          <span className="text-lg text-primary font-bold tracking-wide animate-pulse">
            グルメな情報を探索中...
          </span>
        </div>
   
      </div>
    </div>
    );
}