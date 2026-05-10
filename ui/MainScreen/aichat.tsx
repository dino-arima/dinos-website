'use client';

export default function AiParagraph({ content }: {content: string}) {
  return (
    <>
      <p
        className="text-center text-lg md:text-xl font-semibold px-6 py-4 rounded-lg bg-gradient-to-r from-primary via-accent to-primary text-primary-foreground shadow-md backdrop-blur-md mb-4"
        style={{
          letterSpacing: '0.03em',
        }}
      >
        <span className="inline-block animate-in fade-in slide-in-from-top-4 duration-700">
          {content}
        </span>
   
      </p>
 
    </>
  );
}


