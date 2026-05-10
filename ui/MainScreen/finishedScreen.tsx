'use client';

import Button from "./button";

export default function FinishedScreen({ 
  restaurantName,
  restaurantDescription,
  hpgSearchUrl,
  onClick 
}: {
  restaurantName: string,
  restaurantDescription: string,
  hpgSearchUrl: string | null,
  onClick: ()=>void
}) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[40vh] animate-in fade-in slide-in-from-top-4 duration-700 px-2 sm:px-0">
      <div className="bg-card text-card-foreground rounded-xl shadow-lg p-4 w-full max-w-xs sm:max-w-md border flex flex-col items-center">
        <h2 className="text-xl sm:text-2xl font-bold text-primary mb-2 animate-fade-in text-center">
          {restaurantName}
        </h2>
   
        <p
          className="
            text-center
            text-base
            md:text-lg
            font-semibold
            mb-4
            bg-gradient-to-r
            from-primary
            via-accent
            to-primary
            text-transparent
            bg-clip-text
            tracking-normal
            animate-fade-in
            px-4
            py-2
            rounded-lg
          "
        >
   
          {restaurantDescription}
        </p>

        {
          hpgSearchUrl &&(
          <a
            href={hpgSearchUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="
              mt-2
              mb-4
              inline-block
              px-5
              py-2
              rounded-full
              bg-gradient-to-r
              from-primary
              via-accent
              to-primary
              text-white
              font-bold
              shadow-md
              hover:scale-105
              hover:shadow-lg
              transition
              duration-150
              ease-in-out
              text-center
              text-base
              tracking-wide
              animate-fade-in
              outline-none
              focus:ring-2
              focus:ring-accent
            "
          >
            ホットペッパーで検索してみる↗
          </a>)
     
        }
        <Button label="もう一度やる" onClick={onClick} />
            
    
      </div>
    </div>
  );
}