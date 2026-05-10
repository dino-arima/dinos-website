import { Redis } from "@upstash/redis";
import { revalidatePath } from "next/cache";

const redis = Redis.fromEnv();

export default async function ClapButton() {
  // 現在の拍手数を取得
  const clapCount = await redis.get<number>("total_claps") ?? 0;

  // 拍手を増やす処理
  async function handleClap() {
    "use server";
    const redis = Redis.fromEnv();
    await redis.incr("total_claps");
    revalidatePath("/"); // 画面を更新して最新の数字を表示
  }

  return (
    <div className="border-2 border-dashed border-pink-400 p-4 inline-block text-center bg-pink-50">
      <p className="text-xs mb-2 text-pink-600 font-bold">★ Web拍手 ★</p>
      
      <form action={handleClap}>
        <button 
          type="submit"
          className="bg-gray-200 hover:bg-gray-300 border-b-4 border-r-4 border-gray-500 active:border-0 p-2 text-sm transition-all text-black"
        >
          👏 拍手を送る
        </button>
      </form>
      
      <p className="mt-2 text-xs text-black">
        現在の拍手：<span className="font-bold">{clapCount}</span>
      </p>
    </div>
  );
}