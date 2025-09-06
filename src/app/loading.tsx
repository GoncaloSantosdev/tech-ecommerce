// Components
import { LoadingSpinner } from "@/components";
// Icons
import { CpuChipIcon } from "@heroicons/react/24/outline";

const LoadingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 to-neutral-100 flex items-center justify-center p-4">
      <div className="text-center space-y-8 animate-in fade-in duration-700">
        {/* Logo with Animation */}
        <div className="flex justify-center">
          <div className="relative">
            {/* Animated background circle */}
            <div className="absolute inset-0 w-20 h-20 bg-accent/10 rounded-full animate-ping"></div>
            <div className="absolute inset-0 w-20 h-20 bg-accent/20 rounded-full animate-pulse"></div>

            {/* Logo */}
            <div className="relative w-20 h-20 bg-black rounded-2xl flex items-center justify-center shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <CpuChipIcon className="w-10 h-10 text-white animate-pulse" />
            </div>
          </div>
        </div>

        {/* Brand Name */}
        <div className="space-y-2">
          <h1 className="text-3xl md:text-4xl font-semibold text-foreground tracking-tight animate-in slide-in-from-bottom-4 duration-700 delay-200">
            TechHub
          </h1>
          <p className="text-muted-foreground text-lg tracking-wide animate-in slide-in-from-bottom-4 duration-700 delay-300">
            Loading your premium tech experience
          </p>
        </div>

        {/* Main Loading Spinner */}
        <div className="flex justify-center animate-in slide-in-from-bottom-4 duration-700 delay-400">
          <LoadingSpinner
            size="lg"
            variant="spin"
            color="accent"
            className="animate-in zoom-in-50 duration-500 delay-500"
          />
        </div>
      </div>
    </div>
  );
};

export default LoadingPage;
