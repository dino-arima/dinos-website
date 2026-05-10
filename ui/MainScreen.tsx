'use client'

import { useState } from 'react';

import AiParagraph from './MainScreen/aichat';
import Button from './MainScreen/button';

export default function MainScreen() {
  const [state, setState] = useState<'initial' | 'areaInput' | 'generatingQuestion'| 'waitingInput' | 'generatingAnswer' | 'finished' | 'error'>('initial');
  const clickHandler = ()=>{}
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-[40vh]">
        <div className="bg-card text-card-foreground rounded-xl shadow-lg p-8 w-full max-w-md border">
          <AiParagraph content="hello" />
          <div className="flex flex-row items-center justify-center gap-6 mt-6">
            <Button label="Yes" onClick={clickHandler} />
            <Button label="No" onClick={clickHandler} />
          </div>
        </div>
      </div>
    </>
  );
}