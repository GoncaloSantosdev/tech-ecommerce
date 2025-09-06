import Link from "next/link";
import { CpuChipIcon } from "@heroicons/react/24/outline";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  showText?: boolean;
  className?: string;
}

const Logo = ({ size = "md", showText = true, className = "" }: LogoProps) => {
  const sizeClasses = {
    sm: {
      container: "w-6 h-6",
      icon: "w-3 h-3",
      text: "text-base",
    },
    md: {
      container: "w-8 h-8",
      icon: "w-4 h-4",
      text: "text-xl",
    },
    lg: {
      container: "w-10 h-10",
      icon: "w-5 h-5",
      text: "text-2xl",
    },
  };

  const currentSize = sizeClasses[size];

  return (
    <Link href="/" className={`flex items-center space-x-2 group ${className}`}>
      <div
        className={`${currentSize.container} bg-black rounded-lg flex items-center justify-center group-hover:bg-neutral-800 transition-colors duration-200`}
      >
        <CpuChipIcon className={`${currentSize.icon} text-white`} />
      </div>
      {showText && (
        <span
          className={`${currentSize.text} font-medium text-foreground group-hover:text-accent transition-colors duration-200 tracking-tight`}
        >
          TechHub
        </span>
      )}
    </Link>
  );
};

export default Logo;
