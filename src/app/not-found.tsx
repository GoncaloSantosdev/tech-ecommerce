"use client";
import Link from "next/link";
// Components
import { Button } from "@/components";
// Icons
import { HomeIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import { CpuChipIcon } from "@heroicons/react/24/outline";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 to-neutral-100 flex items-center justify-center p-4">
      <div className="text-center space-y-8 max-w-md mx-auto animate-in fade-in duration-700">
        {/* Logo */}
        <div className="flex justify-center">
          <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center shadow-lg">
            <CpuChipIcon className="w-8 h-8 text-white" />
          </div>
        </div>

        {/* 404 Display */}
        <div className="space-y-4">
          <div className="relative">
            <h1 className="text-8xl md:text-9xl font-bold text-accent/20 select-none">
              404
            </h1>
          </div>
        </div>

        {/* Error Message */}
        <div className="space-y-3">
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground tracking-tight">
            Page Not Found
          </h2>
          <p className="text-muted-foreground text-base leading-relaxed">
            The page you&apos;re looking for doesn&apos;t exist or has been
            moved. Let&apos;s get you back to discovering amazing tech products.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
          <Link href="/">
            <Button
              variant="primary"
              size="md"
              className="flex items-center space-x-2 px-6"
            >
              <HomeIcon className="w-4 h-4" />
              <span>Back to Home</span>
            </Button>
          </Link>

          <button
            onClick={() => window.history.back()}
            className="flex items-center space-x-2 px-6 py-2 text-muted-foreground hover:text-foreground transition-colors duration-200 cursor-pointer"
          >
            <ArrowLeftIcon className="w-4 h-4" />
            <span>Go Back</span>
          </button>
        </div>

        {/* Helpful Links */}
        <div className="pt-8 border-t border-neutral-200">
          <p className="text-sm text-muted-foreground mb-4">
            Popular sections:
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Link
              href="/collections/smartphones"
              className="text-accent hover:text-accent/80 transition-colors duration-200"
            >
              Smartphones
            </Link>
            <Link
              href="/collections/laptops"
              className="text-accent hover:text-accent/80 transition-colors duration-200"
            >
              Laptops
            </Link>
            <Link
              href="/collections/accessories"
              className="text-accent hover:text-accent/80 transition-colors duration-200"
            >
              Accessories
            </Link>
            <Link
              href="/collections/gaming"
              className="text-accent hover:text-accent/80 transition-colors duration-200"
            >
              Gaming
            </Link>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute top-1/4 left-1/4 w-2 h-2 bg-accent/20 rounded-full animate-ping"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute top-3/4 right-1/4 w-3 h-3 bg-accent/10 rounded-full animate-ping"
            style={{ animationDelay: "2s" }}
          ></div>
          <div
            className="absolute top-1/2 right-1/6 w-1 h-1 bg-accent/30 rounded-full animate-ping"
            style={{ animationDelay: "3s" }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
