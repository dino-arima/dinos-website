'use client';

export default function AreaInputScreen({ 
    onClick 
}: {
    onClick: (formData: FormData)=>void
}) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[40vh] animate-in fade-in slide-in-from-top-4 duration-700">
      <div className="bg-card text-card-foreground rounded-xl shadow-lg p-8 w-full max-w-md border flex flex-col items-center">
        <h2
          className="
            text-center
            text-2xl
            md:text-3xl
            font-bold
            mb-6
            bg-gradient-to-r
            from-primary
            via-accent
            to-primary
            text-transparent
            bg-clip-text
            tracking-wide
            animate-fade-in
          "
        >
          エリアを入力してください
        </h2>
        <form
          className="w-full flex flex-col items-center gap-4"
          action={onClick}
        >
          <input
            type="text"
            name="area"
            placeholder="例：東京都、札幌市 など"
            className="
              w-full
              px-4
              py-2
              border
              rounded-md
              bg-background
              text-foreground
              focus:outline-none
              focus:ring-2
              focus:ring-primary
              transition
              duration-200
              text-lg
            "
            required
          />
          <button
            type="submit"
            className="
              px-6
              py-2
              rounded-lg
              bg-gradient-to-r
              from-primary
              via-accent
              to-primary
              text-primary-foreground
              font-semibold
              shadow-md
              hover:from-accent
              hover:to-primary
              hover:brightness-110
              transition
              duration-200
              focus:outline-none
              focus:ring-2
              focus:ring-ring
              text-lg
            "
            style={{ letterSpacing: '0.04em' }}
          >
            送信
          </button>
    
        </form>
      </div>
    </div>
  );
}