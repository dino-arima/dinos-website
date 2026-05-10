'use client'

import { useState, useRef, useEffect, RefObject, useCallback } from 'react'
import { Upload, Download, RotateCcw } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { generateImage, mock_generateImage } from '@/lib/ai'

export function StartScreen(
  {fileInputRef, handleFileUpload}:
  {fileInputRef: RefObject<HTMLInputElement|null>, handleFileUpload: (event: React.ChangeEvent<HTMLInputElement>) => void}
) {
  return (
  <>
    {/* ヘッダー */}
    <div className="text-center mb-8 pt-4">
      <div className="flex items-center justify-center gap-2 mb-3">
        <div className="w-2 h-2 rounded-full bg-accent"></div>
        <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Animal Translator
        </h1>
        <div className="w-2 h-2 rounded-full bg-accent"></div>
      </div>
      <p className="text-xs text-muted-foreground tracking-widest uppercase">
        ペットの気持ちを翻訳します
      </p>
    </div>

    {/* アップロード画面 */}
    <div className="flex-1 flex flex-col justify-center items-center gap-6">
    <div className="relative w-24 h-24">
      <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-full blur-lg opacity-30"></div>
      <div className="absolute inset-0 flex items-center justify-center bg-card rounded-full border border-primary/30">
        <Upload className="w-10 h-10 text-accent" />
      </div>
    </div>

    <div
      onClick={() => fileInputRef.current?.click()}
      className="w-full border-2 border-dashed border-primary/40 rounded-2xl p-8 text-center cursor-pointer hover:border-primary/70 transition-all duration-300 hover:bg-card/50 active:scale-95"
    >
      <p className="text-foreground font-semibold mb-2 text-lg">
        画像を選択
      </p>
      <p className="text-xs text-muted-foreground">
        タップして選択
      </p>
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileUpload}
        className="hidden"
      />
    </div>
  </div>
  </>);
}


export function SetImageScreen(
  {
    originalImage, 
    resetImage,
    fileName,
    processImage,
  }:
  {
    originalImage: string,
    resetImage: () => void,
    fileName: string,
    processImage: () => void
  }
) {
  return (
    <div className="flex-1 flex flex-col gap-4 overflow-y-auto">
      {/* ヘッダー（加工画面） */}
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-lg font-semibold text-foreground">Animal Translator</h2>
        <Button
          onClick={resetImage}
          variant="ghost"
          size="sm"
          className="text-muted-foreground hover:text-foreground hover:bg-card/50"
        >
          <RotateCcw className="w-4 h-4" />
        </Button>
      </div>

      {/* 元の画像表示 */}
      <div className="bg-gradient-to-b from-card to-secondary rounded-2xl overflow-hidden border border-primary/20 shadow-lg">
        <div className="aspect-square flex items-center justify-center bg-muted/50">
          <img
            src={originalImage}
            alt="元の画像"
            className="max-w-full max-h-full object-contain"
          />
        </div>
        <div className="px-4 py-3 bg-card border-t border-primary/10">
          <p className="text-xs text-muted-foreground truncate">
            {fileName}
          </p>
        </div>
      </div>

      {/* アクションボタン */}
      <div className="flex gap-3 mt-auto pb-4">
        <Button
          onClick={processImage}
          className="flex-1 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white font-semibold rounded-lg py-6 transition-all hover:shadow-lg hover:shadow-primary/20"
        >
          翻訳する
        </Button>
        <Button
          onClick={resetImage}
          variant="outline"
          className="flex-1 border-primary/30 text-foreground hover:bg-card/50 rounded-lg py-6 font-semibold"
        >
          戻る
        </Button>
      </div>
    </div>);
}
function LoadingScreen(
  {
    originalImage, 
    resetImage,
    fileName,
  }:
  {
    originalImage: string,
    resetImage: () => void,
    fileName: string,
  }
) {
  return (
  <div className="flex-1 flex flex-col gap-4 overflow-y-auto">
    {/* ヘッダー（加工画面） */}
    <div className="flex items-center justify-between mb-2">
      <h2 className="text-lg font-semibold text-foreground">Animal Translator</h2>
      {/*<Button
        onClick={resetImage}
        variant="ghost"
        size="sm"
        className="text-muted-foreground hover:text-foreground hover:bg-card/50"
      >
        <RotateCcw className="w-4 h-4" />
      </Button>*/}
    </div>

    {/* 元の画像表示 */}
    <div className="bg-gradient-to-b from-card to-secondary rounded-2xl overflow-hidden border border-primary/20 shadow-lg">
      <div className="aspect-square flex items-center justify-center bg-muted/50">
        <img
          src={originalImage}
          alt="元の画像"
          className="max-w-full max-h-full object-contain"
        />
      </div>
      <div className="px-4 py-3 bg-card border-t border-primary/10">
        <p className="text-xs text-muted-foreground truncate">
          {fileName}
        </p>
      </div>
    </div>

    {/* 加工後の画像表示（加工適用後のみ） */}
      <div className="bg-gradient-to-b from-card to-secondary rounded-2xl overflow-hidden border border-accent/20 shadow-lg">
        <div className="aspect-square flex items-center justify-center bg-muted/50">
        {/*<canvas
          ref={canvasRef}
          className="max-w-full max-h-full"
        />*/}
          <div className="flex flex-col items-center justify-center w-full h-full">
            <span className="animate-spin rounded-full border-4 border-accent border-t-transparent w-12 h-12 mb-4"></span>
            <p className="text-muted-foreground">生成中...</p>
          </div>
     
        </div>
        <div className="px-4 py-3 bg-card border-t border-accent/10">
          <p className="text-xs text-muted-foreground">
            処理済み画像
          </p>
        </div>
      </div>

    {/* アクションボタン */}
    <div className="flex gap-3 mt-auto pb-4">
      <Button
        //onClick={()=>{}}
        className="flex-1 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white font-semibold rounded-lg py-6 transition-all hover:shadow-lg hover:shadow-primary/20"
      >
        生成中...
      </Button>
      <Button
        //onClick={/*resetImage*/}
        variant="outline"
        className="flex-1 border-primary/30 text-foreground hover:bg-card/50 rounded-lg py-6 font-semibold"
      >
        戻れません
      </Button>
    </div>
  </div>);
}
function SuccessScreen(
  {
    originalImage, 
    resetImage,
    fileName,
    canvasRef,
    downloadProcessedImage
  }:
  {
    originalImage: string,
    resetImage: () => void,
    fileName: string,
    canvasRef: React.Ref<HTMLCanvasElement> | null,
    downloadProcessedImage: () => void
  }
) {
  if (!canvasRef) return ;
  return (
  <div className="flex-1 flex flex-col gap-4 overflow-y-auto">
    {/* ヘッダー（加工画面） */}
    <div className="flex items-center justify-between mb-2">
      <h2 className="text-lg font-semibold text-foreground">Animal Translator</h2>
      <Button
        onClick={resetImage}
        variant="ghost"
        size="sm"
        className="text-muted-foreground hover:text-foreground hover:bg-card/50"
      >
        <RotateCcw className="w-4 h-4" />
      </Button>
    </div>

    {/* 元の画像表示 */}
    <div className="bg-gradient-to-b from-card to-secondary rounded-2xl overflow-hidden border border-primary/20 shadow-lg">
      <div className="aspect-square flex items-center justify-center bg-muted/50">
        <img
          src={originalImage}
          alt="元の画像"
          className="max-w-full max-h-full object-contain"
        />
      </div>
      <div className="px-4 py-3 bg-card border-t border-primary/10">
        <p className="text-xs text-muted-foreground truncate">
          {fileName}
        </p>
      </div>
    </div>

    {/* 加工後の画像表示（加工適用後のみ） */}
    <div className="bg-gradient-to-b from-card to-secondary rounded-2xl overflow-hidden border border-accent/20 shadow-lg">
      <div className="aspect-square flex items-center justify-center bg-muted/50">
        <canvas
          ref={canvasRef}
          className="max-w-full max-h-full"
        />
      </div>
      <div className="px-4 py-3 bg-card border-t border-accent/10">
        <p className="text-xs text-muted-foreground">
          処理済み画像
        </p>
      </div>
    </div>

    {/* アクションボタン */}
    <div className="flex gap-3 mt-auto pb-4">
        <Button
          onClick={downloadProcessedImage}
          className="flex-1 bg-gradient-to-r from-accent to-primary hover:from-accent/90 hover:to-primary/90 text-white font-semibold rounded-lg py-6 transition-all hover:shadow-lg hover:shadow-accent/20 flex items-center justify-center gap-2"
        >
        <Download className="w-5 h-5" />
          ダウンロード
        </Button>
        <Button
          onClick={resetImage}
          variant="outline"
          className="flex-1 border-primary/30 text-foreground hover:bg-card/50 rounded-lg py-6 font-semibold"
        >
        別の画像
      </Button>
    </div>
  </div>
  );
}



export function ImageProcessorScreen() {
  const [state, setState] = useState<'idle' | 'setImage' | 'loading' | 'success' | 'error'>('idle');

  const [originalImage, setOriginalImage] = useState<string | null>(null)
  const [fileName, setFileName] = useState<string>('')
  const fileInputRef = useRef<HTMLInputElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const generatedCanvasRef = useCallback((node: HTMLCanvasElement | null) => {
    if (!node) {
      console.log('node is null');
      return;
    }
    const src = canvasRef.current;
    const dst = node;
    if (!src) {
      console.log('src canvas is null');
      setState('error');
      return;
    }

    const ctx = dst.getContext('2d');

    if (!ctx) {
      console.log('canvas ctx is null');
      setState('error');
      return;
    }

    dst.width = src.width;
    dst.height = src.height;

    ctx.drawImage(src, 0, 0);
  }, []);

  // 画像が大きければ縮小する
  const resizeImage = (file: File, maxSide: number = 1024): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      
      reader.onload = (e) => {
        const img = new Image();
        img.src = e.target?.result as string;
        
        img.onload = () => {
          const canvas = document.createElement('canvas');
          let width = img.width;
          let height = img.height;
  
          // アスペクト比を維持しながら縮小計算
          if (width > height) {
            if (width > maxSide) {
              height = Math.round((height * maxSide) / width);
              width = maxSide;
            }
          } else {
            if (height > maxSide) {
              width = Math.round((width * maxSide) / height);
              height = maxSide;
            }
          }
  
          canvas.width = width;
          canvas.height = height;
  
          const ctx = canvas.getContext('2d');
          ctx?.drawImage(img, 0, 0, width, height);
  
          const dataUrl = canvas.toDataURL('image/jpeg', 0.8);
          resolve(dataUrl);
        };
        
        img.onerror = reject;
      };
      reader.onerror = reject;
    });
  };

  // 画像ファイルの読み込み
  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return

    const resizedBase64 = await resizeImage(file, 1024);

    setFileName(file.name)
    setOriginalImage(resizedBase64)
    setState('setImage');
  }

  // 加工処理の実行
  const processImage = async () => {
    setState('loading');
    if (!originalImage) return;

    try {
      const generatedImage = await generateImage(originalImage.split(',')[1]); // data:image/png;base64,を除去
      
      const img = new Image()
      img.crossOrigin = 'anonymous'
      
      img.onload = () => {
        const canvas = canvasRef.current
        if (!canvas) {
          console.log('canvas is null');
          setState('error');
          return
        }

        canvas.width = img.width
        canvas.height = img.height
        const ctx = canvas.getContext('2d')
        if (!ctx) {
          console.log('canvas ctx is null');
          setState('error');
          return
        }

        ctx.drawImage(img, 0, 0);
        setState('success');
      }
      if (!generatedImage) {
        console.log('generatedImage is null');
        setState('error');
        return;
      }
      
      img.src = generatedImage;

    } catch (apiError) {
      console.log('apierror: ');
      setState('error');
    }
  }


  // 加工後の画像をダウンロード
  const downloadProcessedImage = () => {
    const canvas = canvasRef.current
    if (!canvas) return

    canvas.toBlob((blob) => {
      if (!blob) return
      const url = URL.createObjectURL(blob)
      const link = document.createElement('a')
      link.href = url
      link.download = `processed-${Date.now()}-${fileName}`
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      URL.revokeObjectURL(url)
    })
  }

  const resetImage = () => {
    setOriginalImage(null)
    setFileName('')
    setState('idle');
    
    if (fileInputRef.current) fileInputRef.current.value = ''
  }

  const renderScreen = () => {
        switch (state) {
          case 'idle':
            return <StartScreen fileInputRef={fileInputRef} handleFileUpload={handleFileUpload} />;

          case 'setImage':
            if (!originalImage) return;
            return (
              <SetImageScreen 
                originalImage={originalImage}
                resetImage={resetImage}
                fileName={fileName}
                processImage={processImage} 
                />);

          case 'loading':
            if (!originalImage) return;
            return (
              <LoadingScreen 
                originalImage={originalImage}
                resetImage={resetImage}
                fileName={fileName}
                />);

          case 'success':
            if (!originalImage) return;
            return (
              <SuccessScreen 
                originalImage={originalImage}
                resetImage={resetImage}
                fileName={fileName}
                canvasRef={generatedCanvasRef}
                downloadProcessedImage={downloadProcessedImage}
                />);

          case 'error':
            return (
              <div className="flex flex-col items-center justify-center h-full">
                <h2 className="text-lg font-semibold text-destructive mb-2">エラーが発生しました</h2>
                <p className="text-muted-foreground mb-4">画像の処理中に問題が発生しました。</p>
                <button
                  className="px-4 py-2 bg-primary text-white rounded hover:bg-primary/90"
                  onClick={resetImage}
                >
                  もう一度やり直す
                </button>
              </div>
            );
       
        };
    }

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <div className="w-full max-w-md mx-auto px-4 py-6 flex flex-col h-screen">
        
        {renderScreen()}

      </div>
      {/* 非表示のキャンバス（ダウンロード・加工用） */}
      <canvas ref={canvasRef} className="hidden" />
    </div>
  )
}

