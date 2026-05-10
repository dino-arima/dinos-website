'use client';

import { useState, useEffect } from 'react';

// 画像のリスト
const images = [
  '/viola_push.gif', 
  '/be_dush.gif', 
  '/ivy_punch.gif', 
];

export default function Hero() {
  const [currentImg, setCurrentImg] = useState<string | null>(null);

  useEffect(() => {
    // 0 から (images.length - 1) までの乱数を生成
    const randomIndex = Math.floor(Math.random() * images.length);
    setCurrentImg(images[randomIndex]);
  }, []);

  if (!currentImg) {
    return <div className="h-48 w-64 bg-gray-200 animate-pulse" />; 
  }

  return (<img
    src={currentImg}
    alt="viola and ivy"
    className="mx-auto border-4 border-double border-[#0080FF] rounded bg-white mb-4"
  />);
}