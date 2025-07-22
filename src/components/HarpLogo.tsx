interface HarpLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
}

export const HarpLogo = ({ className = "", size = "md" }: HarpLogoProps) => {
  const sizeClasses = {
    sm: "w-6 h-8",
    md: "w-8 h-10",
    lg: "w-12 h-16",
    xl: "w-16 h-20"
  };

  return (
    <div className={`${sizeClasses[size]} ${className}`}>
      <svg
        viewBox="0 0 32 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Harp Frame */}
        <path
          d="M6 36C6 36 6 24 6 18C6 12 10 8 16 8C22 8 26 12 26 18C26 24 26 36 26 36"
          stroke="currentColor"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
        />
        
        {/* Harp Pillar */}
        <path
          d="M16 8L16 4C16 2.5 14.5 1 12 1C9.5 1 8 2.5 8 4L8 36"
          stroke="currentColor"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
        />
        
        {/* Harp Strings */}
        <line x1="10" y1="12" x2="22" y2="16" stroke="currentColor" strokeWidth="1" opacity="0.8" />
        <line x1="10" y1="16" x2="22" y2="20" stroke="currentColor" strokeWidth="1" opacity="0.8" />
        <line x1="10" y1="20" x2="22" y2="24" stroke="currentColor" strokeWidth="1" opacity="0.8" />
        <line x1="10" y1="24" x2="22" y2="28" stroke="currentColor" strokeWidth="1" opacity="0.8" />
        <line x1="10" y1="28" x2="22" y2="32" stroke="currentColor" strokeWidth="1" opacity="0.8" />
        
        {/* Base */}
        <rect x="6" y="34" width="20" height="4" rx="2" fill="currentColor" opacity="0.9" />
      </svg>
    </div>
  );
};