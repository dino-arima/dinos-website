
import MainScreen from '@/ui/MainScreen/MainScreen';

export default async function Page() {
  
  return (
    <>
      <div className="flex flex-col min-h-screen w-full">
        <header className="w-full bg-gradient-to-r from-primary via-accent to-primary shadow-md py-6">
          <div className="flex items-center justify-center w-full">
            <h1 className="text-3xl md:text-4xl font-extrabold text-primary-foreground tracking-tight drop-shadow-lg"
              style={{ letterSpacing: '0.08em' }}
            >
              🍜メシガチャ🍜
            </h1>
          </div>
        </header>

        <main className="flex-1 flex flex-col justify-center items-center w-full">
          <MainScreen />
        </main>

        <footer className="w-full bg-gradient-to-r from-primary via-accent to-primary shadow-inner py-4">
          <div className="flex items-center justify-center w-full">
            <p className="text-center text-sm text-primary-foreground opacity-80" style={{letterSpacing: "0.05em"}}>
              © 2026 メシガチャ All Rights Reserved.
            </p>
          </div>
        </footer>
      </div>
 
    </>
  );
}
