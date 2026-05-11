import { Redis } from "@upstash/redis"

const redis = Redis.fromEnv()




export default async function AccessCounter () {
  // 数字を 1 増やす (INCR) 
  await redis.incr("visitor_count");
  // データを取得する (GET)
  const data = await redis.get("visitor_count");
  const count = data?.toString().padStart(6, '0') ?? "000000";
  const digits = count.split('');

  return (
    <p>あなたは{digits.map((digit, index) => (
        <img
          key={index}
          src={`/number/${digit}.png`} // 0.png, 1.png...
          alt={digit}
          width={16}
          height={16}
          style={{display: "inline-block"}}
        />
      ))}人目の訪問者です。</p>
  );
}