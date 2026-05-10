'use client';

export default function Button(
  { 
    label,
    onClick,
  }: {
    label: string,
    onClick: () => void,
  }) {

  const handleClick = async (event: React.MouseEvent<HTMLButtonElement>) => {
    onClick()
  };
  
  return (
      <div className="article animate-fade-in">
      <button
          onClick={handleClick}
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
          "
          style={{letterSpacing: '0.04em'}}
        >
          {label}
      </button>
    </div>
  );
}