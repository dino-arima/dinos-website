export async function GeneratingUI() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[300px]">
      <div className="animate-spin rounded-full h-14 w-14 border-t-4 border-accent border-opacity-50 mb-5"></div>
      <p className="text-base text-muted-foreground font-semibold">画像を生成中...</p>
    </div>
  );
}