'use client'

import { useState, useEffect } from 'react';

import InitialScreen from './initialScreen';
import AreaInputScreen from './areaInputScreen';
import GeneratingQuestionScreen from './generatingQuestionScreen';
import WaitingInputScreen from './waitingInputScreen';
import GeneratingAnswerScreen from './generatingAnswerScreen';
import FinishedScreen from './finishedScreen';
import ErrorScreen from './errorScreen';

import { generateQuestions, findRestaurant } from '@/lib/gemini';

export default function MainScreen() {
  const [state, setState] = useState<'initial' | 'areaInput' | 'generatingQuestion'| 'waitingInput' | 'generatingAnswer' | 'finished' | 'error'>('initial');
  const [preloadQuestions, setPreloadQuestions] = useState<Promise<string[] | null> | null>(null);
  const [area, setArea] = useState<string | null>(null);
  const [questions, setQuestions] = useState<string[] | null>(null);
  const [questionCount, setQuestionCount] = useState<number>(0);
  const [responce, setResponce] = useState<string>('');
  const [restaurantName, setRestaurantName] = useState<string>('');
  const [restaurantDescription, setRestaurantDescription] = useState<string | null>(null);
  const [hpgSearchUrl, setHpgSearchUrl] = useState<string | null>(null);

  // スタートボタンを押したときの処理
  const handleInitialButton = async () => {
    if (state === 'initial') {
      setState('areaInput');

      const promise = generateQuestions();
      setPreloadQuestions(promise);
    } else {
      setState('error');
    }
  };

  // エリアを送信した時に呼ばれる
  const handleAreaInputButton = async (formData: FormData) => {
    const formArea = formData.get('area')?.toString() || null;
    if (!formArea) {
      setState('error');
      return;
    }
    requestAnimationFrame(()=>{setState('generatingQuestion');});
    setArea(formArea);
    
    if(!preloadQuestions) {
      setState('error');
      return;
    }

    const responce = await preloadQuestions;
    if (!responce) {
      requestAnimationFrame(()=>{setState('error');});
      return;
    }
    requestAnimationFrame(()=>{setQuestions(responce);});
  };

  // questionsが更新されたタイミングで呼ばれる
  useEffect(() => {
    if (!questions) return;

    setState('waitingInput');
  }, [questions]);

  // Yes/Noボタンを押したら呼ばれる 
  const handleYesNoButton = (yn: string) => {
    let temp = '';
    return async () => {
      if (!questions) return;
      if (yn === 'Yes') {
        temp = questions[questionCount] + ': Yes \n';
      } else if(yn  === 'No') {
        temp = questions[questionCount] + ': No \n';
      } else {
        requestAnimationFrame(()=>{setState('error');});
      }

      setResponce(responce + temp);
      requestAnimationFrame(()=>{setQuestionCount(questionCount+1);});
    };
  };
  // questionCountが更新されたタイミングで呼ばれる
  useEffect(() => {
    if (!questions) return;
    if (!area) return;
    if (questionCount >= questions.length) {
      requestAnimationFrame(()=>{setState('generatingAnswer')});

      (async () => {
        const {restaurantName, restaurantDescription, url} = await findRestaurant(area, responce);
        if (!restaurantName) {
          requestAnimationFrame(()=>{setState('error');});
          return;
        }
        if (!restaurantDescription) {
          requestAnimationFrame(()=>{setState('error');});
          return;
        }
        setRestaurantName(restaurantName);
        setRestaurantDescription(restaurantDescription);
        setHpgSearchUrl(url);
      })();

    }
  }, [questionCount]);

  // restaurantDescriptionが更新されたタイミングで呼ばれる
  useEffect(() => {
    if (!restaurantDescription) return;

    setState('finished');
  }, [restaurantDescription]);

  const reset = async () => {
    setState('initial');
    setPreloadQuestions(null);
    setArea(null);
    setQuestions(null);
    setQuestionCount(0);
    setResponce('');
    setRestaurantName('');
    setRestaurantDescription(null);
    setHpgSearchUrl(null);
  };

  const selectScreen = () => {
    switch(state) {
      case 'initial':
        return <InitialScreen onClick={handleInitialButton} />;
      case 'areaInput':
        return <AreaInputScreen onClick={handleAreaInputButton} />;
      case 'generatingQuestion':
        return <GeneratingQuestionScreen />;
      case 'waitingInput':
        return <WaitingInputScreen question={questions?questions[questionCount]:""} onClickYes={handleYesNoButton('Yes')} onClickNo={handleYesNoButton('No')} />;
      case 'generatingAnswer':
        return <GeneratingAnswerScreen />;
      case 'finished':
        return <FinishedScreen restaurantName={restaurantName} restaurantDescription={restaurantDescription?restaurantDescription:""} hpgSearchUrl={hpgSearchUrl} onClick={reset} />;
      case 'error':
        return <ErrorScreen onClick={reset} />;
    }
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-[40vh] px-4 md:px-8 w-full">
        {selectScreen()}
      </div>
    </>
   );
}