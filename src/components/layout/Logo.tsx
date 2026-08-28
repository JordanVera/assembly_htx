import { cn } from '@/lib/utils';

type LogoProps = {
  className?: string;
  showWordmark?: boolean;
};

export default function Logo({ className, showWordmark = true }: LogoProps) {
  return (
    <div className={cn('flex items-center gap-2.5 sm:gap-3', className)}>
      <svg
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-9 w-9 shrink-0 sm:h-10 sm:w-10"
        aria-hidden
      >
        <path
          d="M20 4L34 36H27.5L24.5 28.5H15.5L12.5 36H6L20 4Z"
          stroke="white"
          strokeWidth="1.25"
          strokeLinejoin="round"
          fill="none"
        />
        <path
          d="M17 24.5H23"
          stroke="white"
          strokeWidth="1.25"
          strokeLinecap="round"
        />
        <path
          d="M11 30C16 22 24 22 29 30"
          stroke="currentColor"
          className="text-primary"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
        <circle cx="20" cy="12" r="1.5" className="fill-primary" />
      </svg>

      {showWordmark ? (
        <div className="flex flex-col leading-none">
          <span className="font-serif text-base tracking-wide text-white sm:text-lg">
            Assembly
          </span>
          <span className="mt-0.5 text-[9px] tracking-[0.4em] text-primary uppercase sm:text-[10px]">
            HTX
          </span>
        </div>
      ) : null}
    </div>
  );
}
