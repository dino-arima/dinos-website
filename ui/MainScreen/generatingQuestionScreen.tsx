'use client';

export default function GeneratingQuestionScreen() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[40vh] animate-in fade-in slide-in-from-top-4 duration-700">
      <div className="bg-card text-card-foreground rounded-xl shadow-lg p-8 w-full max-w-md border flex flex-col items-center">
        <div className="flex flex-col items-center justify-center mt-8 mb-4">
          <svg className="animate-spin h-10 w-10 text-primary mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle
              className="opacity-30"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-80"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
            />
          </svg>
          <span className="text-lg text-muted-foreground font-semibold tracking-wide">
            質問を考え中...
          </span>
        </div>
      </div>
    </div>
    );
}