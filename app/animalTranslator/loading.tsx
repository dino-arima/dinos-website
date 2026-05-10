export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-primary border-opacity-40 mb-6"></div>
      <p className="text-lg text-muted-foreground font-semibold">読み込み中...</p>
    </div>
  );
}