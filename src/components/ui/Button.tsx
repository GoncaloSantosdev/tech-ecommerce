import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  loading?: boolean;
  children: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      loading = false,
      className = "",
      disabled,
      children,
      ...props
    },
    ref
  ) => {
    const baseClasses =
      "inline-flex items-center justify-center font-normal transition-all duration-200 transform focus:outline-none focus:ring-2 focus:ring-accent/20 disabled:opacity-50 disabled:cursor-not-allowed tracking-wide cursor-pointer";

    const variantClasses = {
      primary:
        "bg-accent text-white hover:bg-accent/90 hover:scale-105 active:scale-95",
      secondary:
        "bg-neutral-100 text-foreground hover:bg-neutral-200 hover:scale-105 active:scale-95",
      outline:
        "border border-neutral-300 bg-white text-foreground hover:bg-neutral-50 hover:scale-105 active:scale-95",
      ghost:
        "text-muted-foreground hover:text-foreground hover:bg-neutral-100 hover:scale-105 active:scale-95",
    };

    const sizeClasses = {
      sm: "px-3 py-1.5 text-sm rounded-lg h-8",
      md: "px-4 py-2 text-sm rounded-xl h-10",
      lg: "px-6 py-3 text-base rounded-xl h-12",
    };

    const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

    return (
      <button
        ref={ref}
        className={combinedClasses}
        disabled={disabled || loading}
        {...props}
      >
        {loading && (
          <svg
            className="mr-2 h-4 w-4 animate-spin"
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
        )}
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
