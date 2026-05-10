
import AccessCounter from "./accessCounter";
import ClapButton from "./clapButton";
import Hero from "./hero";

export default async function TopPage() {
    return (
        <div className="flex flex-col flex-1 items-center justify-center font-sans dark:bg-black top-page">
          <header className="w-full flex flex-col items-center mb-10">
              <h1
              className="text-4xl font-bold text-[#0080FF] drop-shadow-lg text-center mb-2"
              style={{
                letterSpacing: "2px",
                textShadow: "2px 2px 0 #fff, 4px 4px 0 #ccc"
              }}
              >
              Nostalgic Laboratory
            </h1>
          </header>
    
          <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between px-8 sm:items-start">
            {/* トップページ */}
            <section className="w-full flex flex-col items-center mb-10">
              <Hero />

              <AccessCounter />
    
              <div className="w-full overflow-hidden whitespace-nowrap mb-6 relative h-11">
                <span
                  className="inline-block font-mono text-lg px-4"
                  style={{
                    whiteSpace: "nowrap",
                    display: "inline-block",
                    animation: "scroll-marquee 20s linear infinite"
                  }}
                >
                  ようこそ！Nostalgic Laboratoryへ！ &nbsp;|&nbsp; Welcome to Nostalgic Laboratory! &nbsp;|&nbsp; 懐かしラボにようこそ！
                </span>
              </div>
         
    
    
              {/* About */}
              <div className="text-base text-gray-300 text-center bg-[#232530] p-6 border-2 border-dashed border-[#0080FF] rounded-lg shadow-lg max-w-xl mx-auto">
                <h2 className="text-2xl font-extrabold text-[#0080FF] mb-2 tracking-wide drop-shadow-sm">About</h2>
                <p className="bg-opacity-20 rounded-md p-4 font-medium leading-relaxed shadow-inner">
                  <span className="font-bold">このホームページはDinoによって作成されています。</span>
                  <br />
                  <span>ここでは趣味の内容や、作ったものなどをゆるく公開する予定です。</span>
                </p>
              </div>
            </section>
    
            <nav className="w-full flex flex-col items-center mb-14">
              <div className="flex flex-wrap justify-center gap-6">
                <a
                  href="#news"
                  className="px-4 py-2 bg-[#222b38] border-2 border-[#0080FF] rounded shadow hover:bg-[#244169] font-bold underline top-page"
                >
                  新着情報
                </a>
                <a
                  href="#profile"
                  className="px-4 py-2 bg-[#331929] border-2 border-[#d9006c] rounded shadow hover:bg-[#382335] font-bold underline top-page"
                >
                  プロフィール
                </a>
                <a
                  href="#gallery"
                  className="px-4 py-2 bg-[#3a320a] border-2 border-[#b38f00] rounded shadow hover:bg-[#483c15] font-bold underline  top-page"
                >
                  作ったもの<img src="/icon/New.gif" alt="New" style={{display: "inline-block"}} />
                </a>
                <a
                  href="#link"
                  className="px-4 py-2 bg-[#1a3222] border-2 border-[#17994a] rounded shadow hover:bg-[#254535] font-bold underline top-page"
                >
                  リンク集
                </a>
                <span
                  className="px-4 py-2 bg-[#333218] border-2 border-[#c2bb00] rounded shadow hover:bg-[#48461f] font-bold text-gray-100"
                >
                  掲示板（<img src="/icon/under_construction.png" alt="" style={{display: "inline-block"}} />工事中<img src="/icon/under_construction.png" alt="" style={{display: "inline-block"}} />）
                </span>
              </div>
            </nav>
    
            {/* 新着情報 */}
            <section id="news" className="w-full rounded border-2 border-dotted border-[#0099cc] mb-8 bg-[#222834] p-4">
              <h2 className="text-lg font-bold text-[#0099cc] mb-2">
                ■ News
              </h2>
              <ul className="pl-5 list-disc space-y-1 text-gray-100">
                <li>2026/05/10 ホームページ開設！</li>
              </ul>
            </section>
            {/* プロフィール */}
            <section id="profile" className="w-full rounded border-2 border-dotted border-[#ff6699] mb-8 bg-[#282331] p-4">
              <h2 className="text-lg font-bold text-[#ff6699] mb-2">
                ■ Plofile
              </h2>
              <p className="text-gray-100">
                管理人：Dino<br />
                好きなもの：犬、レトロゲーム、Webデザイン、筋トレ<br />
                ひとこと：あなたもホームページを作ってみませんか？
              </p>
            </section>
            {/* 作ったもの */}
            <section id="gallery" className="w-full rounded border-2 border-dotted border-[#33cc66] mb-8 bg-[#223127] p-4">
              <h2 className="text-lg font-bold text-[#33cc66] mb-2">
                ■ Gallery
              </h2>
              <ul className="pl-5 list-disc space-y-1 text-gray-100">
                <li>
                  <a href="/meshi/" className="font-bold text-lg">
                    メシガチャ
                  </a>
                    <img src="/icon/New.gif" alt="New" style={{display: "inline-block"}}/><br />
                  <p>いくつかの質問に答えたらAIが飲食店をおすすめしてくれるWebアプリです。<br />
                  結構な確率で実在しないお店も紹介してきます。ご了承ください。</p>
                </li>
                <li>
                  <a href="/animalTranslator" className="font-bold text-lg">
                    動物語翻訳機
                    <img src="/icon/New.gif" alt="New" style={{display: "inline-block"}} />
                  </a><br />
                  <p>動物の画像をアップロードするとAIが気持ちを翻訳（笑）してくれるWebアプリです。<br />
                  注意：時間帯によっては引くほど生成が遅かったり、更に酷いと全然成功しないこともあります。<br />
                  APIの利用回数上限の関係で<span className="text-red-500">1人3枚</span>くらいまでにしていただけると助かりますm(__)m</p>
                </li>
              </ul>
            </section>
            {/* リンク集 */}
            <section id="link" className="w-full rounded border-2 border-dotted border-[#6657a8] mb-8 bg-[#282834] p-4">
              <h2 className="text-lg font-bold text-[#6657a8] mb-2">
                ■ Link
              </h2>
              <ul className="pl-5 list-disc space-y-1 text-gray-100">
                <li>
                  <img src="/icon/banner.gif" alt="banner" style={{display: "inline-block"}} />
                  相互リンク募集中！
                </li>
                <li>
                  バナーの直リンク禁止！
                </li>
              </ul>
            </section>
            <div className="w-full flex flex-col flex-1 items-center justify-center">
              <ClapButton />
            </div>
          </main>
    
    
          <footer className="w-full flex flex-col items-center mt-8">
            <p className="text-xs text-gray-500 mt-1">
              &copy; 2026 Nostalgic Laboratory
            </p>
          </footer>
        </div>
      );
}