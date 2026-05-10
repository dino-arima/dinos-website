'use client';

import AiParagraph from "./aichat";

export default function WaitingInputScreen({ 
  question,
  onClickYes,
  onClickNo, 
}: {
  question: string,
  onClickYes: ()=>void
  onClickNo: ()=>void
}) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[40vh] animate-in fade-in slide-in-from-top-4 duration-700">
      <div className="bg-card text-card-foreground rounded-xl shadow-lg p-8 w-full max-w-md border flex flex-col items-center">

        <AiParagraph content={question} />
          <div className="w-full flex flex-row items-center justify-center gap-6 mt-6">
            <button
              className="
                w-full
                px-6
                py-2
                rounded-lg
                bg-gradient-to-r
                from-primary
                via-accent
                to-primary
                text-primary-foreground
                font-semibold
                shadow-md
                hover:from-accent
                hover:to-primary
                hover:brightness-110
                transition
                duration-200
                focus:outline-none
                focus:ring-2
                focus:ring-ring
                text-lg
              "
              style={{ letterSpacing: '0.04em' }}
              onClick={onClickYes}
            >
              Yes
            </button>
            <button
              className="
                w-full
                px-6
                py-2
                rounded-lg
                bg-gradient-to-r
                from-primary
                via-accent
                to-primary
                text-primary-foreground
                font-semibold
                shadow-md
                hover:from-accent
                hover:to-primary
                hover:brightness-110
                transition
                duration-200
                focus:outline-none
                focus:ring-2
                focus:ring-ring
                text-lg
              "
              style={{ letterSpacing: '0.04em' }}
              onClick={onClickNo}
            >
              No
            </button>
       
          </div>

      </div>
    </div>
    );
}