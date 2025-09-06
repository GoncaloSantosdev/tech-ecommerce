import React from "react";

interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg" | "xl";
  variant?: "spin" | "pulse" | "dots" | "bars";
  color?: "accent" | "neutral" | "white";
  className?: string;
}

const LoadingSpinner = ({
  size = "md",
  variant = "spin",
  color = "accent",
  className = "",
}: LoadingSpinnerProps) => {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-6 h-6",
    lg: "w-8 h-8",
    xl: "w-12 h-12",
  };

  const colorClasses = {
    accent: "text-accent",
    neutral: "text-neutral-400",
    white: "text-white",
  };

  if (variant === "spin") {
    return (
      <div
        className={`${sizeClasses[size]} ${colorClasses[color]} ${className}`}
      >
        <svg
          className="animate-spin"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="m4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      </div>
    );
  }

  if (variant === "pulse") {
    return (
      <div
        className={`${sizeClasses[size]} ${colorClasses[color]} ${className}`}
      >
        <div className="relative">
          <div className="w-full h-full bg-current rounded-full animate-ping opacity-20"></div>
          <div className="absolute inset-0 w-full h-full bg-current rounded-full animate-pulse"></div>
        </div>
      </div>
    );
  }

  if (variant === "dots") {
    const dotSize =
      size === "sm"
        ? "w-1 h-1"
        : size === "md"
        ? "w-1.5 h-1.5"
        : size === "lg"
        ? "w-2 h-2"
        : "w-3 h-3";

    return (
      <div className={`flex space-x-1 ${className}`}>
        <div
          className={`${dotSize} ${colorClasses[color]} bg-current rounded-full animate-bounce`}
          style={{ animationDelay: "0ms" }}
        ></div>
        <div
          className={`${dotSize} ${colorClasses[color]} bg-current rounded-full animate-bounce`}
          style={{ animationDelay: "150ms" }}
        ></div>
        <div
          className={`${dotSize} ${colorClasses[color]} bg-current rounded-full animate-bounce`}
          style={{ animationDelay: "300ms" }}
        ></div>
      </div>
    );
  }

  if (variant === "bars") {
    const barWidth =
      size === "sm"
        ? "w-0.5"
        : size === "md"
        ? "w-1"
        : size === "lg"
        ? "w-1.5"
        : "w-2";
    const barHeight =
      size === "sm"
        ? "h-3"
        : size === "md"
        ? "h-4"
        : size === "lg"
        ? "h-6"
        : "h-8";

    return (
      <div className={`flex items-end space-x-1 ${className}`}>
        <div
          className={`${barWidth} ${barHeight} ${colorClasses[color]} bg-current animate-pulse`}
          style={{ animationDelay: "0ms" }}
        ></div>
        <div
          className={`${barWidth} ${barHeight} ${colorClasses[color]} bg-current animate-pulse`}
          style={{ animationDelay: "200ms" }}
        ></div>
        <div
          className={`${barWidth} ${barHeight} ${colorClasses[color]} bg-current animate-pulse`}
          style={{ animationDelay: "400ms" }}
        ></div>
        <div
          className={`${barWidth} ${barHeight} ${colorClasses[color]} bg-current animate-pulse`}
          style={{ animationDelay: "600ms" }}
        ></div>
      </div>
    );
  }

  return null;
};

export default LoadingSpinner;
